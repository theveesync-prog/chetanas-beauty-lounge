# Payload CMS v3 Setup Guide

This guide covers integrating Payload CMS v3 into Chetana's Beauty Lounge website for content management.

## Phase 1 Implementation

- Services collection with image uploads
- Site Settings global (hero video, heading, subheading)
- Server-rendered pages fetching from Payload (SEO-optimized)
- Admin interface at `/admin`
- Single admin login (no public sign-up)
- @payloadcms/plugin-seo for per-service meta titles/descriptions

## Environment Variables for Vercel

Add these to your Vercel project settings under "Environment Variables":

### Step-by-Step Instructions

1. **Go to your Vercel project dashboard**
   - Navigate to: vercel.com → Your project → Settings → Environment Variables

2. **Add each variable below** (copy the name exactly, fill in your values):

### Required Variables

#### 1. PAYLOAD_SECRET
- **Key**: `PAYLOAD_SECRET`
- **Value**: Generate a random 32+ character string (use `openssl rand -base64 32` or generate at [random.org](https://random.org))
- **Example**: `abc123def456ghi789jkl012mno345pqr`
- **Environments**: Production, Preview, Development

#### 2. DATABASE_URL
- **Key**: `DATABASE_URL`
- **Value**: Your Neon PostgreSQL connection string
- **Format**: `postgresql://user:password@endpoint.neon.tech/database-name`
- **Get this from**: [Neon Console](https://console.neon.tech/) → Your project → Connection string
- **Environments**: Production, Preview, Development

#### 3. BLOB_READ_WRITE_TOKEN
- **Key**: `BLOB_READ_WRITE_TOKEN`
- **Value**: Your Vercel Blob storage token
- **Get this from**: vercel.com → Settings → Integrations → Vercel Blob → Generate new token
- **Environments**: Production, Preview, Development

#### 4. PAYLOAD_PUBLIC_ADMIN_URL
- **Key**: `PAYLOAD_PUBLIC_ADMIN_URL`
- **Value**: Your admin URL
- **For Production**: `https://yourdomain.com/admin`
- **For Preview**: `https://your-branch.yourdomain.com/admin`
- **For Development**: `http://localhost:3000/admin`
- **Environments**: Production, Preview, Development (different values per environment)

### Optional but Recommended

#### NODE_ENV
- **Key**: `NODE_ENV`
- **Value**: `production` (for production), `development` (for preview/dev)
- **Environments**: As appropriate

## Setting Up Neon PostgreSQL

1. Go to [console.neon.tech](https://console.neon.tech/)
2. Create a new project (or use existing)
3. In the project dashboard:
   - Click your database name
   - Go to "Connection string"
   - Copy the full connection string (starts with `postgresql://`)
   - This is your `DATABASE_URL`

## Setting Up Vercel Blob Storage

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Integrations** → **Vercel Blob**
4. Click **Create** (or view existing tokens)
5. Copy the token string
6. This is your `BLOB_READ_WRITE_TOKEN`

## Local Development Setup

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your local values:
   ```
   PAYLOAD_SECRET=any-random-string-for-local-dev
   DATABASE_URL=postgresql://localhost/chetanas-local
   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx (can use production token)
   PAYLOAD_PUBLIC_ADMIN_URL=http://localhost:3000/admin
   ```

3. Run migrations:
   ```bash
   npm run build
   ```

4. Seed initial data:
   ```bash
   npm run seed
   ```

5. Start dev server:
   ```bash
   npm run dev
   ```

6. Access admin at: http://localhost:3000/admin

## Creating Admin User

On first run, Payload will prompt you to create the admin user:

1. Visit http://localhost:3000/admin
2. Enter email: (your admin email)
3. Enter password: (strong password, min 8 chars)
4. Click "Create Admin"

For production, the first deployment will also prompt for admin creation.

## Database Migrations

Migrations run automatically on `npm run build`. If you need to manually run migrations:

```bash
npm run payload migrate
```

## Vercel Deployment

After setting all environment variables:

1. Push to your repo
2. Vercel will automatically deploy
3. First deployment will prompt for admin user creation
4. Admin interface available at: https://yourdomain.com/admin

## Troubleshooting

### "DATABASE_URL is not set"
- Verify `DATABASE_URL` is added in Vercel Environment Variables
- Ensure it's added to all three environments (Production, Preview, Development)
- Redeploy after adding the variable

### "BLOB_READ_WRITE_TOKEN is missing"
- Generate a new Vercel Blob token in Vercel Settings → Integrations
- Add it as `BLOB_READ_WRITE_TOKEN` environment variable
- Redeploy

### Admin page shows 404
- Ensure `PAYLOAD_PUBLIC_ADMIN_URL` is correctly set for your domain
- For local dev, use `http://localhost:3000/admin`
- For production, use `https://yourdomain.com/admin`

### Admin login not working
- Clear browser cookies for the admin domain
- Try in incognito mode
- Verify admin user was created (first time setup)

## What's Managed by Payload

✅ Services content and images
✅ Site settings (hero video, heading, subheading)
✅ SEO meta titles and descriptions per service
✅ Media uploads via Vercel Blob

## What Still Uses Hardcoded Data

- Service categories structure (for URL routing)
- All other content (blog, Footer, etc. - Phase 2+)
