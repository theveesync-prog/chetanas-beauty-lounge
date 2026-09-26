@echo off
REM 🚀 AUTOMATIC SETUP SCRIPT FOR CHETANA'S BEAUTY LOUNGE (Windows)
REM This script does 80% of the work for you!

color 0A
echo.
echo ================================================
echo    Chetana's Beauty Lounge - Automatic Setup
echo ================================================
echo.

REM STEP 1: Check if .env.local exists
echo.
echo Checking for existing .env.local...
if exist .env.local (
    echo.
    echo WARNING: .env.local already exists!
    set /p OVERWRITE="Do you want to overwrite it? (yes/no): "
    if /i "!OVERWRITE!" neq "yes" (
        echo Using existing .env.local
        goto skip_env
    ) else (
        del .env.local
        echo Old .env.local removed
    )
)

REM STEP 2: Get credentials
:skip_env
if exist .env.local goto skip_credentials

echo.
echo ================================================
echo    ENTER YOUR CREDENTIALS
echo ================================================
echo.
echo You need 3 secrets. Get them from:
echo.
echo 1. DATABASE_URL (from https://console.neon.tech)
echo    - Open project 'dry-fog-04731321'
echo    - Go to 'production' branch
echo    - Copy the connection string
echo.
echo 2. PAYLOAD_SECRET (random password)
echo    - Go to https://www.random.org/passwords/
echo    - Copy any password
echo.
echo 3. BLOB_TOKEN (from https://vercel.com/dashboard)
echo    - Select your project
echo    - Go to Storage -^> Blob
echo    - Create a new token, copy it
echo.
echo ================================================
echo.

set /p DATABASE_URL="DATABASE_URL: "
if "%DATABASE_URL%"=="" (
    echo DATABASE_URL is required!
    pause
    exit /b 1
)

set /p PAYLOAD_SECRET="PAYLOAD_SECRET: "
if "%PAYLOAD_SECRET%"=="" (
    echo PAYLOAD_SECRET is required!
    pause
    exit /b 1
)

set /p BLOB_TOKEN="BLOB_READ_WRITE_TOKEN (press Enter to skip): "

REM STEP 3: Create .env.local
echo.
echo Creating .env.local file...
(
    echo # Payload CMS Configuration
    echo PAYLOAD_SECRET=%PAYLOAD_SECRET%
    echo.
    echo # Database - Neon PostgreSQL
    echo DATABASE_URL=%DATABASE_URL%
    echo.
    echo # Vercel Blob Storage
    echo BLOB_READ_WRITE_TOKEN=%BLOB_TOKEN%
    echo.
    echo # Public Admin URL
    echo PAYLOAD_PUBLIC_ADMIN_URL=http://localhost:3000/admin
) > .env.local

echo .env.local created!
echo.

:skip_credentials

REM STEP 4: Run migrations and seed
echo ================================================
echo    SETTING UP DATABASE
echo ================================================
echo.

echo Running database migrations...
call npm run migrate
if errorlevel 1 (
    echo.
    echo Migration failed! Check your DATABASE_URL
    pause
    exit /b 1
)
echo.

echo Importing services...
call npm run seed
if errorlevel 1 (
    echo.
    echo Seeding failed!
    pause
    exit /b 1
)
echo.

echo Importing blog posts and reviews...
call npm run seed-phase2
if errorlevel 1 (
    echo.
    echo Phase 2 seeding failed!
    pause
    exit /b 1
)
echo.

REM STEP 5: Build check
echo Checking build...
call npm run build >nul 2>&1
if errorlevel 1 (
    echo Build check found issues, but setup is complete
) else (
    echo Build passed!
)

REM SUCCESS
echo.
echo ================================================
echo    SETUP COMPLETE!
echo ================================================
echo.
echo What's next:
echo.
echo 1. Start your app:
echo    npm run dev
echo.
echo 2. Open in browser:
echo    http://localhost:3000
echo.
echo 3. Create admin account:
echo    http://localhost:3000/admin
echo.
echo 4. Login and start adding content!
echo.
echo ================================================
echo.

pause
