# Chetana's Beauty Lounge — Design System & Dev Guide

## Project Overview

**Chetana's Beauty Lounge** — Mangalore's CIDESCO-certified women-only beauty salon & academy, established 1998.
- **Framework**: Next.js 15 App Router + TypeScript
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` syntax — no `tailwind.config.js`)
- **Branch**: `main`

---

## Brand Identity

### Colors
| Token | Value | Use |
|-------|-------|-----|
| Brand maroon | `#5f1e42` | Primary CTAs, active states, accents |
| Brand maroon dark | `#4a1733` | Hover state for maroon |
| Brand gold | `#e8b80d` | Secondary CTAs, highlights |
| Gold light | `#f6dd86` | Gold gradient end |
| Dark text | `#111111` | Headings |
| Body text | `#555555` | Body copy |
| Muted text | `#888888` / `#aaa` | Labels, metadata |
| Borders | `rgba(0,0,0,0.06)` | Card borders |
| Background | `#ffffff` | **All sections use pure white** |

CSS vars (defined in `app/globals.css`):
```css
--color-brand-primary: #5f1e42
--color-brand-gold:    #e8b80d
--color-cream:         #fdf8f5   /* legacy, avoid in new code */
```

### Typography
| Role | Font | Weight |
|------|------|--------|
| Hero h1 **(exception only)** | Cormorant Garamond `var(--font-display)` | 700 |
| Section h2 (About, Gallery, FAQ, Features) | Plus Jakarta Sans (inline string) | 800 |
| Services page h1 | Plus Jakarta Sans (inline string) | 800 |
| Services page h2 | Plus Jakarta Sans (inline string) | 700 |
| Card / related h3 | Plus Jakarta Sans (inline string) | 600 |
| Body copy / labels / metadata | DM Sans `var(--font-sans)` | 400–600 |
| Price numerals | Cormorant Garamond `var(--font-display)` | 700 |

**Rules**:
- Hero h1 is the **only** exception that uses Cormorant Garamond
- All other headings use `'"Plus Jakarta Sans", system-ui, sans-serif'` as a **direct inline string** (not a CSS var) — CSS var resolution can be unreliable at large sizes
- Primary color `#5f1e42` used **subtly**: hover states, active nav items, CTA buttons, small accents — NOT for prices or body text
- Hero card background: `#ffffff` (pure white) — no warm cream tones

Fonts loaded in `app/layout.tsx`: Cormorant Garamond 300–700 + italics, DM Sans 300–700, Plus Jakarta Sans 400–800.

---

## Design Principles

1. **All white backgrounds** — every section and page uses `bg-white` / `#ffffff`. No cream, no `#fdf8f5`.
2. **Apple-like minimal aesthetic** — generous whitespace, clean typography, no heavy shadows.
3. **Glassmorphism** (where used): `backdrop-blur(20px)`, `rgba(255,255,255,0.65)` bg, `border: 1px solid rgba(255,255,255,0.8)`.
4. **Brand maroon cursor spotlight** (interactive sections): `radial-gradient(500px circle at {x}px {y}px, rgba(95,30,66,0.11), transparent 70%)`.
5. **Rounded cards**: `rounded-2xl` (standard), `rounded-3xl` (featured/images).
6. **Hover**: subtle lift `hover:-translate-y-0.5` + `hover:border-[#5f1e42]/20`, never heavy shadows.

---

## Reusable CSS Patterns

### `.section-label` (in globals.css)
Small uppercase label with gold dash prefix:
```html
<span class="section-label">Our Services</span>
```

### `.reveal` / `.reveal-delay-N` (scroll animation)
```html
<div class="reveal reveal-delay-1">content</div>
```
Triggers via `IntersectionObserver` adding `.visible` class (opacity 0→1, translateY 28px→0 over 0.7s cubic).

### `.btn-gold`
Gold radial gradient button (`#e8b80d → #f6dd86`), dark brown text.

### Glassmorphism card
```tsx
style={{
  background: "rgba(255,255,255,0.65)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.8)",
  boxShadow: "0 8px 32px rgba(95,30,66,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
}}
```

---

## Key Constants

```ts
// lib/services-data.ts
WHATSAPP_BASE = "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book..."

// Phone numbers
+91 98452 92411
+91 91085 83714

// Address
3rd Floor, A Gate, Kankanady Bypass Rd, Kankanady, Mangaluru, Karnataka 575002

// Maps embed
https://maps.google.com/maps?q=12.8698,74.8426&z=16&ie=UTF8&iwloc=&output=embed

// Google My Business (reviews link)
https://g.page/r/ChetanasBeautyLounge/review  (use for "Read more reviews" CTA)
```

---

## Component Inventory

| Component | File | Notes |
|-----------|------|-------|
| Hero | `components/sections/Hero.tsx` | Absolute-layer card (620px), Cormorant h1, portrait image |
| Features | `components/sections/Features.tsx` | 3 glassmorphism cards, counter-up, cursor spotlight |
| About | `components/sections/About.tsx` | White bg |
| Gallery | `components/sections/Gallery.tsx` | White bg |
| Reviews | `components/sections/Reviews.tsx` | Spotlight carousel, 3 visible, slide animation |
| FAQ | `components/sections/FAQ.tsx` | White bg, accordion |
| Contact | `components/sections/Contact.tsx` | Image-left/form-right, WhatsApp submit, white bg |
| Footer | `components/Footer.tsx` | Two-part: light "Visit us" card + dark rounded card |
| Navbar | `components/Navbar.tsx` | Sticky |
| ServiceImage | `components/ServiceImage.tsx` | Category gradient placeholders |
| FAQAccordion | `components/FAQAccordion.tsx` | Accordion |
| AddToCartButton | `components/AddToCartButton.tsx` | Cart integration |
| CartDrawer | `components/CartDrawer.tsx` | Slide-in cart |

---

## Data Structure

```ts
// lib/services-data.ts
ServiceCategory { slug, label, tagline, icon, services[] }
Service { name, slug, description, longDescription?, price, originalPrice?, onSale?, duration, bestseller? }
serviceCategories: ServiceCategory[]  // Hair Care, Body Care, Skin Care, Bridal, Nails, For Kids

// lib/service-faqs.ts
getFaqsForService(serviceSlug, categorySlug) → FAQ[]
FAQ { question, answer }

// lib/cart-context.tsx
CartProvider, useCart(), CartItem { serviceSlug, categorySlug, name, price, ... }
```

---

## Services Pages Pattern

**Category page** (`/services/[category]`):
- White bg, DM Sans headings
- Desktop: sticky sidebar with `›` on active category
- Mobile: horizontal scroll pills
- Price list rows: `name + badges | duration | price | ›`
- CTA: maroon "Book a time" WhatsApp button

**Service detail page** (`/services/[category]/[service]`):
- White bg throughout, DM Sans headings
- Breadcrumb → 2-col (image + details) → FAQs → Related
- Price in Cormorant Garamond (display font for numerals)
- Related services: image-free text cards

---

## Git

- **Branch**: `main` (commit directly, no feature branches)
- **Push**: `git push` (local `main` pushes to remote via configured refspec)
- Session URL for commits: `https://claude.ai/code/session_01BcGbeukdvSvNSxFuSsCVnp`
