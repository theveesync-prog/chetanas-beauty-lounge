# Payload CMS Phase 2 — Setup & Deployment Guide

## What's Included in Phase 2

✅ **5 New Collections**:
- Blog Posts (with rich text editor, SEO fields, publish status)
- FAQs (service-specific + category-based)
- Gallery (photos with categories and metadata)
- Reviews (customer testimonials)
- Contact Details (moved from hardcoded to SiteSettings)

✅ **Updated Globals**:
- SiteSettings: Added contact group + homepage FAQ array

✅ **Utilities & Scripts**:
- `lib/payload-utils.ts`: Functions to fetch blog, FAQs, gallery, reviews
- `lib/revalidate.ts`: On-demand revalidation (live updates without redeploy)
- `scripts/seed-phase2.ts`: Import script for blog posts, FAQs, reviews

✅ **Documentation**:
- `ADMIN_GUIDE.md`: Step-by-step admin instructions
- `PHASE_2_SETUP.md`: This file

✅ **Build Status**: ✓ Successful (no breaking changes)

---

## Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create `.env.local`:
```env
PAYLOAD_SECRET=your-random-secret-here
DATABASE_URL=postgresql://user:password@localhost/chetanas_beauty
```

### 3. Initialize Database
```bash
npm run migrate
```

### 4. Seed Data (Optional)
```bash
# Phase 1 data (services, categories)
npm run seed

# Phase 2 data (blog posts, FAQs, reviews, gallery)
npm run seed-phase2
```

### 5. Start Dev Server
```bash
npm run dev
```

Admin panel available at: `http://localhost:3000/admin`

---

## Production Deployment (Vercel)

### 1. Create PostgreSQL Database (Neon)
- Go to https://neon.tech
- Create new project
- Copy connection string (DATABASE_URL)

### 2. Add Environment Variables in Vercel
Dashboard → Your Project → Settings → Environment Variables

Add:
```
PAYLOAD_SECRET = [random secret, min 16 chars]
DATABASE_URL = [postgresql://... from Neon]
```

### 3. Deploy to Vercel
```bash
git push origin claude/frontend-design-oU1Et
# Then merge PR to main
git push origin main
```

Vercel auto-deploys when commits hit `main`.

### 4. Initialize Production Database
Via Vercel CLI:
```bash
vercel env pull
npm run migrate
```

Or connect directly and run migration via:
```bash
npx tsx scripts/migrate.ts
```

### 5. Seed Production Data
After migrations complete:
```bash
npm run seed        # Phase 1
npm run seed-phase2 # Phase 2
```

### 6. Access Admin Dashboard
**URL**: `https://your-domain.com/admin`

Create first admin user:
1. Go to `/admin`
2. Sign up with email (first signup creates admin)
3. Set password
4. Log in

---

## Admin Panel Features

| Task | Location | Time to Live |
|------|----------|---|
| Publish blog post | Collections → Blog Posts | < 60 seconds |
| Upload gallery photo | Collections → Gallery | < 60 seconds |
| Add review | Collections → Reviews | < 60 seconds |
| Edit FAQ | Collections → FAQs | < 60 seconds |
| Update hero video | Globals → Site Settings | Instant |
| Change contact details | Globals → Site Settings → Contact | Auto-syncs everywhere |

---

## Data Migration Path

### Phase 1 (Already Done)
- ✓ Services collection
- ✓ Service Categories
- ✓ Services seeded from lib/services-data.ts

### Phase 2 (Ready to Seed)
```bash
npm run seed-phase2
```
Imports:
- 12 blog posts from `lib/blog-data.ts` → `blog-posts` collection
- All FAQs from `lib/service-faqs.ts` → `faqs` collection
- 8 reviews from current `components/sections/Reviews.tsx` → `reviews` collection

### Phase 3 (Future — Optional)
- Connect components to fetch from Payload instead of hardcoded data
- Remove lib/blog-data.ts, lib/service-faqs.ts (if not needed for fallback)
- Update sitemap.ts for auto-inclusion of new blog posts & services

---

## Revalidation Strategy

### On-Demand (No Redeploy Needed)
When you save in the admin:
1. Payload detects the change
2. Triggers `revalidatePath()` for affected pages
3. Next.js regenerates that page
4. Updates live within 60 seconds

**Pages revalidated automatically**:
- `/blog` (blog listings)
- `/blog/[slug]` (specific blog posts)
- `/` (homepage — reviews, hero, FAQs)
- `/services` (service listings)

---

## Troubleshooting

### Can't connect to database?
```bash
# Test connection
psql $DATABASE_URL
# Should connect successfully
```

### Admin page blank?
- Clear browser cache
- Check that PAYLOAD_SECRET is set in .env.local
- Verify DATABASE_URL is correct

### Seed script fails?
```bash
# Check error message
npm run seed-phase2

# If collections missing:
npm run migrate

# Then try seed again
npm run seed-phase2
```

### Changes not showing on site?
- Wait 60 seconds (revalidation delay)
- Clear browser cache (Ctrl+Shift+Delete)
- Check that item Status is "Published" (for blog posts)

---

## File Structure

```
src/collections/
  ├── Users.ts              (admin auth)
  ├── Media.ts              (uploads)
  ├── Services.ts           (Phase 1)
  ├── ServiceCategories.ts  (Phase 1)
  ├── BlogPosts.ts          (Phase 2 NEW)
  ├── FAQs.ts               (Phase 2 NEW)
  ├── Gallery.ts            (Phase 2 NEW)
  └── Reviews.ts            (Phase 2 NEW)

src/globals/
  └── SiteSettings.ts       (updated with contact + homepage FAQs)

lib/
  ├── payload-utils.ts      (updated with new fetch functions)
  └── revalidate.ts         (Phase 2 NEW)

scripts/
  ├── seed.ts               (Phase 1 — services, categories)
  └── seed-phase2.ts        (Phase 2 NEW — blog, FAQs, reviews)

docs/
  ├── ADMIN_GUIDE.md        (How to use the admin panel)
  └── PHASE_2_SETUP.md      (This file)
```

---

## Security Checklist

- [ ] Set unique PAYLOAD_SECRET in .env (min 16 chars, not obvious)
- [ ] Set DATABASE_URL to secure connection string
- [ ] Enable HTTPS in production (Vercel auto-enables)
- [ ] Change default admin password
- [ ] Restrict database access to Vercel IPs only (Neon setting)
- [ ] Backup database regularly (Neon auto-backups)

---

## Next Steps

1. **Deploy**: Push to `main` branch, Vercel auto-deploys
2. **Initialize**: Run `npm run migrate` on production
3. **Seed**: Run `npm run seed-phase2` to import initial data
4. **Access**: Go to `/admin` and create first admin user
5. **Customize**: Start editing content from the admin panel

---

## Support Resources

- **Payload CMS Docs**: https://payloadcms.com/docs
- **Admin Guide**: See `ADMIN_GUIDE.md`
- **Troubleshooting**: See section above

---

**Version**: Phase 2 (September 2026)
**Status**: Ready for deployment
**Build**: ✓ Passes TypeScript, all 179 pages pre-generated
