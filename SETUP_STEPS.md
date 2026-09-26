# 🎯 SUPER SIMPLE SETUP GUIDE (FOR BEGINNERS)

**Don't worry, you've got this! Just follow along. Copy and paste the commands. That's it.**

---

## PART 1: GET YOUR SECRET KEYS 🔑

### Step 1.1: Get the Database Address
1. Open this link: https://console.neon.tech
2. Login with your email/password
3. Look for project called **"dry-fog-04731321"**
4. Click on it
5. On the left side, click **"Branches"**
6. Click **"production"**
7. Look for a button that says **"Connection string"** or **"Copy connection string"**
8. Click it → **Copy the whole thing** (the long text that looks like: `postgresql://user:password@ep-xxx.neon.tech/...`)
9. **SAVE THIS** somewhere safe (Notepad, email, etc.) — we'll use it in 5 minutes

### Step 1.2: Create a Random Secret Password
1. Open this website: https://www.random.org/passwords/
2. Don't change anything, just click **"Get Passwords"**
3. Copy the first password (the long random text)
4. **SAVE THIS** too

### Step 1.3: Get the Blob Token (if using Vercel storage)
1. Go to: https://vercel.com/dashboard
2. Click your project (Chetana's Beauty Lounge)
3. Click **"Storage"** tab at the top
4. Click **"Blob"**
5. Look for a button **"Create Token"** or **"New Token"**
6. Click it
7. Name it: `development` (just type that)
8. Click **"Create"**
9. Copy the token that appears (it looks like: `vercel_blob_rw_xxx...`)
10. **SAVE THIS** too

**✓ You now have 3 things saved. Perfect!**

---

## PART 2: Put The Secrets In The Right Place 🎁

### Step 2.1: Open Terminal/Command Line
**On Mac:**
- Press `Cmd + Space`
- Type `terminal`
- Press Enter

**On Windows:**
- Press `Win + R`
- Type `cmd`
- Press Enter

### Step 2.2: Go To Your Project Folder
Copy this and paste it in the terminal (then press Enter):

```bash
cd ~/chetanas-beauty-lounge
```

### Step 2.3: Create The Secret File
Copy this and paste it in the terminal (then press Enter):

```bash
cp .env.local.example .env.local
```

This creates a new file called `.env.local` that will hold your secrets.

### Step 2.4: Open The Secret File
**On Mac:**
```bash
open -a TextEdit .env.local
```

**On Windows:**
```bash
notepad .env.local
```

A text editor will open. You'll see:
```
PAYLOAD_SECRET=your-random-secret-key-here
DATABASE_URL=postgresql://user:password@ep-xxx.neon.tech/chetanas-beauty-lounge
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
PAYLOAD_PUBLIC_ADMIN_URL=http://localhost:3000/admin
```

### Step 2.5: Replace The Secrets With YOUR Secrets

1. **Find:** `your-random-secret-key-here`  
   **Replace with:** The random password you saved from Step 1.2

2. **Find:** `postgresql://user:password@ep-xxx.neon.tech/chetanas-beauty-lounge`  
   **Replace with:** The database address you saved from Step 1.1

3. **Find:** `vercel_blob_rw_xxxxxxxxxxxxx`  
   **Replace with:** The blob token you saved from Step 1.3

**Example of what it should look like:**
```
PAYLOAD_SECRET=aB7kL9mP2qR5sT8vW1xY4zA
DATABASE_URL=postgresql://user:password@ep-big-123456.neon.tech/chetanas-beauty-lounge
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_1234567890abcdef
PAYLOAD_PUBLIC_ADMIN_URL=http://localhost:3000/admin
```

### Step 2.6: Save The File
**On Mac:** Press `Cmd + S`  
**On Windows:** Press `Ctrl + S`

Then close the editor.

**✓ Secrets are now saved safely!**

---

## PART 3: Set Up The Database 💾

### Step 3.1: Go Back To Terminal
Switch back to your terminal window.

### Step 3.2: Run The Magic Setup Script
Copy this entire block and paste it into terminal (then press Enter):

```bash
echo "🚀 Starting automatic setup..."

echo "📦 Step 1: Creating database tables..."
npm run migrate

echo "📥 Step 2: Importing services..."
npm run seed

echo "📥 Step 3: Importing blog posts and reviews..."
npm run seed-phase2

echo "✅ ALL DONE! Ready to start the app."
```

**What's happening:**
- `npm run migrate` = Creates all the tables in your database
- `npm run seed` = Fills it with services (hair, skin, etc.)
- `npm run seed-phase2` = Fills it with blog posts and reviews

This will take about 1-2 minutes. You'll see lots of text — that's normal! 🎨

---

## PART 4: Start Your App 🚀

### Step 4.1: Start The Development Server
Copy and paste this:

```bash
npm run dev
```

You'll see something like:
```
> next dev

  ▲ Next.js 16.1.6 (Turbopack)

  Local:        http://localhost:3000
  Environments: .env.local
```

**This is GOOD!** Your app is now running.

### Step 4.2: Open Your App In Browser
1. Open your web browser (Chrome, Safari, Firefox, Edge)
2. Go to: `http://localhost:3000`
3. You should see the Chetana's Beauty Lounge website! 🎉

### Step 4.3: Create Your Admin Account
1. In the same browser, go to: `http://localhost:3000/admin`
2. You'll see a form that says "Create Your Account"
3. Fill it in:
   - **Email:** Type your email (e.g., `you@gmail.com`)
   - **Password:** Create a strong password (8+ characters)
   - **Confirm Password:** Type it again
4. Click **"Create Account"**
5. Login with your email and password

**✓ You're now logged in!** You can see all your data in the admin panel.

---

## PART 5: Test Everything Is Working ✅

### Test 1: Homepage
1. Go to: `http://localhost:3000`
2. Scroll down and look for:
   - ✓ Services section
   - ✓ Reviews
   - ✓ Blog posts
   - ✓ Gallery photos
   
   **All should be there!**

### Test 2: Services Page
1. Go to: `http://localhost:3000/services/hair-care`
2. You should see a list of hair services with prices
3. Click one → should show details

### Test 3: Blog Page
1. Go to: `http://localhost:3000/blog`
2. You should see blog posts with titles and descriptions

### Test 4: Admin Dashboard
1. Go to: `http://localhost:3000/admin`
2. On the left side, you should see:
   - ✓ Collections (Services, Blog Posts, Gallery, etc.)
   - ✓ Globals (Site Settings)
3. Click on each one to see the data

**If everything looks good, YOU'RE DONE WITH LOCAL SETUP!** 🎉

---

## PART 6: Deploy To The Internet 🌍 (Optional Now)

**You can do this later. For now, just enjoy your working app!**

When you're ready to put it on the internet:

### Step 6.1: Stop Your App
In the terminal where `npm run dev` is running:
- Press `Ctrl + C` (holds both keys and press C)

### Step 6.2: Push Code To GitHub
```bash
git add .
git commit -m "Setup complete - ready for production"
git push origin claude/frontend-design-oU1Et
```

### Step 6.3: Go To Vercel
1. Open: https://vercel.com
2. Click your project (Chetana's Beauty Lounge)
3. Click **"Settings"** → **"Environment Variables"**
4. Add these 3 variables (same ones from Step 2):
   - `DATABASE_URL`
   - `PAYLOAD_SECRET`
   - `BLOB_READ_WRITE_TOKEN`
5. Click **"Save"**
6. Go back to deployments
7. Click the latest one
8. It should start deploying automatically
9. Wait for the checkmark ✓

**Your app is now live on the internet!** 🌐

---

## 🆘 TROUBLESHOOTING

### "Database connection failed"
→ Check your `DATABASE_URL` in `.env.local` is correct (copy-paste from Neon again)

### "npm: command not found"
→ You need to install Node.js first: https://nodejs.org/
→ Download and run the installer, then restart terminal

### "Port 3000 is already in use"
→ Another app is using port 3000
→ Run this instead: `npm run dev -- -p 3001`

### "npm run seed fails"
→ Make sure you ran `npm run migrate` first!

### "Can't login to admin"
→ Clear your browser cookies:
  - Chrome: Ctrl+Shift+Delete → Clear browsing data → Click Clear data
  - Then go back to http://localhost:3000/admin

---

## 📝 REMEMBER

- `npm run dev` = Start your app (keep this running while working)
- `Ctrl + C` = Stop your app
- `.env.local` = Your secret file (NEVER share this!)
- `http://localhost:3000` = Your app
- `http://localhost:3000/admin` = Where you manage content

**You got this! 💪**
