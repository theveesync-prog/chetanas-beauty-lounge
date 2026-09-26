# Admin Guide — Chetana's Beauty Lounge CMS

## Overview

This guide walks you through common admin tasks in the Payload CMS. All changes made in the admin panel automatically update the live website within ~60 seconds (via Next.js on-demand revalidation).

**Admin URL**: `https://your-domain.com/admin` (requires login with admin credentials)

---

## Quick Start

### Login
1. Go to `/admin`
2. Enter your admin email and password
3. You'll see the main dashboard with collections

---

## Common Tasks

### 1. Add or Update a Blog Post

**Menu**: Collections → Blog Posts → + Create New

**Fields to fill**:
- **Title** (required): Post headline
- **Slug** (auto-generated): URL path (e.g., `bridal-makeup-tips`)
- **Excerpt** (required): 1–2 sentence summary for listings
- **Category** (required): Topic (e.g., "Bridal", "Hair Care")
- **Author** (required): Your name or staff member
- **Author Title** (optional): Role (e.g., "CIDESCO Certified Beautician")
- **Publish Date** (required): When to show the post (defaults to today)
- **Read Time**: Estimated minutes to read
- **Featured**: Check to show at top of blog page
- **Cover Image**: Upload a banner image
- **Cover Alt**: Describe the image for accessibility
- **Body**: Write the post content (use the rich text editor)
- **Status**: Set to "Published" to go live, "Draft" to keep hidden

**To publish**: 
1. Fill all required fields
2. Set Status to "Published"
3. Click "Save"
4. Post appears on `/blog` within 1 minute

**To update**: Click the post title in the list, edit, and save.

**To delete**: Click the post title → scroll to bottom → click "Delete" (⚠️ cannot be undone).

---

### 2. Upload Service Photos (Gallery)

**Menu**: Collections → Gallery → + Create New

**Fields to fill**:
- **Image** (required): Upload a photo
- **Caption** (optional): Short description of the photo
- **Alt Text** (required): Describe what's in the image for accessibility
  - Example: "A bride getting HD bridal makeup done at our salon"
- **Category** (required): Choose one:
  - Bridal
  - Hair
  - Skin
  - Nails
  - Academy
- **Order**: Numbers control the position (lower numbers show first)

**Tips**:
- Use high-quality images (2000px+ width recommended)
- Write alt text as if describing to someone who can't see the image
- Keep captions brief (1 sentence)

---

### 3. Change the Hero Video

**Menu**: Globals → Site Settings → Hero section

**Fields**:
- **Heading**: The main tagline (e.g., "Mangalore's Best Ladies Salon")
- **Subheading**: The supporting text below
- **Video**: Upload an MP4 or MOV file

**Tips**:
- Video should be 10–30 seconds
- Recommended dimensions: 1920×1080 (16:9)
- File size: Under 20MB for best performance

---

### 4. Add or Update Reviews

**Menu**: Collections → Reviews → + Create New

**Fields to fill**:
- **Name** (required): Customer's first name
- **Service** (required): Which service they booked (e.g., "Bridal Makeup")
- **Review Text** (required): What they said (quote)
- **Rating** (required): 1–5 stars (almost always 5 for us)
- **Publish Date**: When to show (defaults to today)

**To add a real Google review**:
1. Copy the review from Google Business profile
2. Create a new review in Payload
3. Fill in name, service, text, and rating (usually 5 stars)
4. Save

**Tips**:
- Keep customer names anonymous or initials only if they prefer
- Reviews appear on the homepage carousel automatically

---

### 5. Edit FAQ (Frequently Asked Questions)

**Option A: Service-Specific FAQ**
1. Go to Collections → FAQs
2. Filter by **Category** (e.g., "Hair Care")
3. Click a question to edit or + Create New

**Option B: Homepage FAQ**
1. Go to Globals → Site Settings → Homepage section
2. Click "+ Add FAQ" in the array
3. Fill in Question and Answer
4. Save

**Fields**:
- **Question** (required): The FAQ question
- **Answer** (required): The full explanation

**Tips**:
- Keep answers to 2–3 sentences for clarity
- Update when you get repeated customer questions
- Homepage FAQs appear at the bottom of the homepage

---

### 6. Update Contact Details

**Menu**: Globals → Site Settings → Contact section

**Fields**:
- **Phone**: Main phone number
- **WhatsApp**: WhatsApp number (usually same as phone, but stored without spaces)
- **Secondary Phone** (optional): Alternate number
- **Address** (required): Full salon address
- **Opening Hours**: Hours by day (e.g., "Mon–Sat: 10 AM–7 PM")
- **Map Embed URL**: Google Maps embed link

**Tips**:
- Update opening hours seasonally if needed
- Phone numbers are used across Footer, Contact form, and header
- Changes to one place auto-sync everywhere

---

### 7. Edit SEO (Meta Titles & Descriptions)

**For Blog Posts**:
1. Go to Collections → Blog Posts
2. Click a post → scroll to "SEO" section (if visible)
3. Set:
   - **Meta Title**: 50–60 characters (e.g., "5 Bridal Makeup Tips | Chetana's Beauty")
   - **Meta Description**: 150–160 characters (e.g., "Learn bridal makeup secrets from CIDESCO-certified artists...")
4. Save

**For Services**:
1. Go to Collections → Services
2. Click a service → scroll to "SEO" section
3. Set Meta Title and Meta Description
4. Save

**Why it matters**: These appear in Google search results and affect rankings.

---

## Collection Reference

| Collection | What It Is | Where It Shows | How to Access |
|-----------|-----------|---|---|
| **Blog Posts** | Articles on `/blog` | /blog, /blog/[slug] | Collections → Blog Posts |
| **FAQs** | Q&A by service | /services/[cat]/[svc] | Collections → FAQs |
| **Gallery** | Photos | Gallery section on home | Collections → Gallery |
| **Reviews** | Customer testimonials | Homepage carousel | Collections → Reviews |
| **Services** | Hair, skin, body, etc. | /services | Collections → Services |
| **Site Settings (global)** | Hero, contact, homepage FAQs | Footer, Contact, Hero | Globals → Site Settings |

---

## Publishing & Live Updates

**When you save**, the website updates automatically:
- Blog posts appear on `/blog` within 60 seconds
- Gallery updates within 60 seconds
- Hero video, contact details update instantly
- Reviews appear within 60 seconds

**No manual deploy needed** — changes go live automatically.

---

## Troubleshooting

### Post not showing up?
- ✓ Make sure Status is "Published" (not "Draft")
- ✓ Check the Publish Date (set to today or earlier)
- ✓ Wait 60 seconds, then refresh the page

### Can't upload an image?
- ✓ Check file size (max 50MB)
- ✓ Use PNG, JPG, or WebP format
- ✓ Dimensions: 800×600px or larger

### Alt text is cut off?
- ✓ Alt text has no character limit — write full descriptions for accessibility

### Need to restore a deleted post?
- ✗ Deletions are permanent in this version
- ✓ Always keep a draft/backup if you're unsure

---

## Admin User Management

**To add a new admin**:
1. Go to Collections → Users
2. Click "+ Create New"
3. Enter email and set a password
4. Save

**To remove an admin**:
1. Go to Collections → Users
2. Click the user → scroll to bottom → Delete
3. They can no longer log in

---

## Contact Support

If you encounter issues:
1. Check this guide
2. Email: support@chetanasbeauty.in
3. Or WhatsApp: +91 98452 92411

---

## Security Tips

- ✓ Keep your admin password private
- ✓ Log out after editing
- ✓ Don't share your login link publicly
- ✓ Use unique, strong passwords

---

**Last updated**: September 2026
**Payload CMS Version**: 3.90+
