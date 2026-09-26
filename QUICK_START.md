# ⚡ QUICK START CHECKLIST

## 🎯 YOUR MISSION (5 steps)

```
[ ] STEP 1: Get credentials (15 minutes)
[ ] STEP 2: Run automation script (5 minutes)
[ ] STEP 3: Start dev server (1 minute)
[ ] STEP 4: Create admin account (2 minutes)
[ ] STEP 5: Celebrate! 🎉
```

---

## 📋 DETAILED CHECKLIST

### ✅ BEFORE YOU START
- [ ] You have access to Neon dashboard (https://console.neon.tech)
- [ ] You have access to Vercel (https://vercel.com)
- [ ] Terminal/Command Prompt is open
- [ ] You're in the project folder: `cd ~/chetanas-beauty-lounge`

### 🔑 STEP 1: COLLECT YOUR 3 SECRETS

#### Secret #1: Database URL
- [ ] Go to https://console.neon.tech
- [ ] Find project: **dry-fog-04731321**
- [ ] Click **"production"** branch
- [ ] Click **"Connection string"** button
- [ ] **Copy** the connection string
- [ ] **Save to Notepad/Notes**

#### Secret #2: Payload Secret
- [ ] Go to https://www.random.org/passwords/
- [ ] Click **"Get Passwords"**
- [ ] **Copy** the first password
- [ ] **Save to Notepad/Notes**

#### Secret #3: Blob Token (optional but recommended)
- [ ] Go to https://vercel.com/dashboard
- [ ] Select **Chetana's Beauty Lounge** project
- [ ] Click **"Storage"** tab
- [ ] Click **"Blob"**
- [ ] Click **"Create Token"**
- [ ] Name it: `development`
- [ ] **Copy** the token
- [ ] **Save to Notepad/Notes**

**✓ You now have 3 secrets ready!**

---

### ⚙️ STEP 2: RUN AUTOMATION SCRIPT

#### If you're on Mac or Linux:
```bash
bash setup-auto.sh
```

#### If you're on Windows:
Double-click: `setup-auto.bat`

**The script will:**
1. Ask you for your 3 secrets
2. Create `.env.local` file (secret storage)
3. Create database tables
4. Import all the services, blog posts, reviews
5. Check that everything works

**Time: ~5 minutes**

---

### 🚀 STEP 3: START YOUR APP

In terminal, run:
```bash
npm run dev
```

**You should see:**
```
  ▲ Next.js 16.1.6
  Local:        http://localhost:3000
```

**✓ Your app is running!**

---

### 👤 STEP 4: CREATE ADMIN ACCOUNT

1. Open browser
2. Go to: `http://localhost:3000/admin`
3. You'll see form: "Create Your Account"
4. Fill in:
   - **Email:** your@email.com
   - **Password:** Something secure (8+ characters)
   - **Confirm Password:** Type it again
5. Click **"Create Account"**
6. Login!

**✓ You're now admin!**

---

### ✨ STEP 5: CHECK IT WORKS

#### Test 1: Homepage
- [ ] Go to `http://localhost:3000`
- [ ] Scroll down
- [ ] See services? ✓
- [ ] See reviews? ✓
- [ ] See blog? ✓

#### Test 2: Services
- [ ] Go to `http://localhost:3000/services/hair-care`
- [ ] See list of services? ✓

#### Test 3: Blog
- [ ] Go to `http://localhost:3000/blog`
- [ ] See blog posts? ✓

#### Test 4: Admin
- [ ] Go to `http://localhost:3000/admin`
- [ ] Click "Collections" → see Services, Blog, Reviews, etc? ✓
- [ ] Click each one → see data? ✓

**✓ EVERYTHING WORKS!**

---

## 🎉 YOU'RE DONE!

Your app is running locally. You can:

- **Edit content** in admin dashboard (`http://localhost:3000/admin`)
- **View changes** on homepage (refresh the page)
- **Manage services, blog, reviews, galleries, FAQs**

---

## 📱 NEXT (WHEN YOU'RE READY)

### Deploy to Internet

1. Stop dev server: `Ctrl + C`
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Setup complete"
   git push origin claude/frontend-design-oU1Et
   ```
3. Go to Vercel.com
4. Add environment variables (same 3 secrets)
5. Merge PR to main
6. Vercel deploys automatically!

---

## 🆘 PROBLEMS?

### "Database connection failed"
→ Check your DATABASE_URL in `.env.local`  
→ Copy it again from Neon

### "npm: command not found"
→ Install Node.js: https://nodejs.org/

### "Port 3000 in use"
→ Run: `npm run dev -- -p 3001`

### "Can't login to admin"
→ Clear cookies:
- Chrome: `Ctrl+Shift+Delete`
- Safari: `Safari → Settings → Privacy → Manage Website Data`
- Firefox: `Ctrl+Shift+Delete`

Then try again.

---

## 📞 STILL STUCK?

Check `SETUP_STEPS.md` for super detailed step-by-step guide.

Good luck! 🚀
