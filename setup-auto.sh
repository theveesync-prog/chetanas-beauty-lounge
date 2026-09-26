#!/bin/bash

# 🚀 AUTOMATIC SETUP SCRIPT FOR CHETANA'S BEAUTY LOUNGE
# This script does 80% of the work for you!

echo "════════════════════════════════════════════════════"
echo "   🎨 Chetana's Beauty Lounge - Automatic Setup"
echo "════════════════════════════════════════════════════"
echo ""

# Color codes for pretty output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}▶ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# STEP 1: Check if .env.local already exists
print_step "Checking for existing .env.local..."

if [ -f .env.local ]; then
    print_warning ".env.local already exists!"
    read -p "Do you want to overwrite it? (yes/no): " OVERWRITE
    if [ "$OVERWRITE" != "yes" ]; then
        print_warning "Skipping environment setup. Using existing .env.local"
        SKIP_ENV=true
    else
        rm .env.local
        print_success "Removed old .env.local"
    fi
else
    SKIP_ENV=false
fi

# STEP 2: Get credentials from user
if [ "$SKIP_ENV" != true ]; then
    echo ""
    echo "════════════════════════════════════════════════════"
    echo "   📝 ENTER YOUR CREDENTIALS"
    echo "════════════════════════════════════════════════════"
    echo ""
    print_step "You need 3 secrets. Get them from:"
    echo ""
    echo "  1️⃣  DATABASE_URL (from https://console.neon.tech)"
    echo "      → Open project 'dry-fog-04731321'"
    echo "      → Go to 'production' branch"
    echo "      → Copy the connection string"
    echo ""
    echo "  2️⃣  PAYLOAD_SECRET (random password)"
    echo "      → Go to https://www.random.org/passwords/"
    echo "      → Copy any password"
    echo ""
    echo "  3️⃣  BLOB_TOKEN (from https://vercel.com/dashboard)"
    echo "      → Select your project"
    echo "      → Go to Storage → Blob"
    echo "      → Create a new token, copy it"
    echo ""
    echo "════════════════════════════════════════════════════"
    echo ""

    # Ask for Database URL
    read -p "📌 Paste DATABASE_URL: " DATABASE_URL
    if [ -z "$DATABASE_URL" ]; then
        print_error "DATABASE_URL is required!"
        exit 1
    fi
    print_success "Database URL saved"

    # Ask for Payload Secret
    read -p "🔐 Paste PAYLOAD_SECRET: " PAYLOAD_SECRET
    if [ -z "$PAYLOAD_SECRET" ]; then
        print_error "PAYLOAD_SECRET is required!"
        exit 1
    fi
    print_success "Payload secret saved"

    # Ask for Blob Token
    read -p "💾 Paste BLOB_READ_WRITE_TOKEN (or press Enter to skip): " BLOB_TOKEN

    # STEP 3: Create .env.local file
    echo ""
    print_step "Creating .env.local file..."

    cat > .env.local << EOF
# Payload CMS Configuration
PAYLOAD_SECRET=$PAYLOAD_SECRET

# Database - Neon PostgreSQL
DATABASE_URL=$DATABASE_URL

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=$BLOB_TOKEN

# Public Admin URL (for development)
PAYLOAD_PUBLIC_ADMIN_URL=http://localhost:3000/admin
EOF

    print_success ".env.local created! ✓"
fi

# STEP 4: Run database migrations
echo ""
echo "════════════════════════════════════════════════════"
echo "   💾 SETTING UP DATABASE"
echo "════════════════════════════════════════════════════"
echo ""

print_step "Creating database tables..."
npm run migrate
if [ $? -ne 0 ]; then
    print_error "Migration failed! Check your DATABASE_URL"
    exit 1
fi
print_success "Database tables created ✓"

# STEP 5: Run seed scripts
echo ""
print_step "Importing services..."
npm run seed
if [ $? -ne 0 ]; then
    print_error "Seeding failed!"
    exit 1
fi
print_success "Services imported ✓"

echo ""
print_step "Importing blog posts and reviews..."
npm run seed-phase2
if [ $? -ne 0 ]; then
    print_error "Phase 2 seeding failed!"
    exit 1
fi
print_success "Blog posts and reviews imported ✓"

# STEP 6: Build check
echo ""
print_step "Checking build..."
npm run build > /dev/null 2>&1
if [ $? -ne 0 ]; then
    print_warning "Build check found issues, but setup is complete"
else
    print_success "Build passed ✓"
fi

# SUCCESS MESSAGE
echo ""
echo "════════════════════════════════════════════════════"
echo -e "   ${GREEN}🎉 SETUP COMPLETE!${NC}"
echo "════════════════════════════════════════════════════"
echo ""
echo "What's next:"
echo ""
echo "  1. Start your app:"
echo "     ${BLUE}npm run dev${NC}"
echo ""
echo "  2. Open in browser:"
echo "     ${BLUE}http://localhost:3000${NC}"
echo ""
echo "  3. Create admin account:"
echo "     ${BLUE}http://localhost:3000/admin${NC}"
echo ""
echo "  4. Login and start adding content!"
echo ""
echo "════════════════════════════════════════════════════"
echo ""
