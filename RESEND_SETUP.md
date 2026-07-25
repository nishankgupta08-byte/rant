# Resend Email Integration Setup Guide

This guide explains how to set up and use the Resend email integration for the RANT website contact form.

## Overview

The RANT website now uses **Resend** to handle transactional emails from the contact form. When users submit the contact form, their inquiry is sent to the team via email, and they receive an automatic confirmation email.

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- A Resend account with an API key
- A verified domain in Resend (or use the test domain `onboarding@resend.dev`)

## Installation

### 1. Install Dependencies

All required dependencies have been installed:
- `resend` - Resend SDK
- `express` - Backend server
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

If you need to reinstall:
```bash
npm install resend express cors dotenv
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:

```env
VITE_API_URL=http://localhost:5173
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL_FROM=noreply@rant.dev
CONTACT_EMAIL_TO=hello@rant.dev
```

**Important:** Replace `re_your_actual_api_key_here` with your actual Resend API key from the Resend dashboard.

### 3. Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Create a new API key with "Sending" permissions
3. Copy the API key and paste it into `.env.local`

### 4. Verify Your Domain (Optional but Recommended)

For production, you should verify your domain:

1. In the Resend dashboard, go to **Domains**
2. Add your domain (e.g., `rant.dev`)
3. Add the DNS records provided by Resend to your domain provider
4. Wait for verification (usually 5-30 minutes)

For development/testing, you can use the default `onboarding@resend.dev` domain.

## Running the Application

### Development Mode

Open two terminal windows:

**Terminal 1 - Start the backend server:**
```bash
node server.js
```

You should see:
```
✓ RANT Contact Server running on http://localhost:5000
✓ API endpoint: POST http://localhost:5000/api/contact
✓ Resend API configured
```

**Terminal 2 - Start the Vite dev server:**
```bash
npm run dev
```

You should see:
```
VITE v6.1.0  ready in 123 ms

➜  Local:   http://localhost:5173/
```

### Testing the Integration

1. Open http://localhost:5173 in your browser
2. Scroll to the "Ready to Make Some Noise?" contact section
3. Fill in the form with test data
4. Click "Transmit Brief"
5. You should see a success message with confetti animation

**Check your emails:**
- **Team inbox:** You'll receive the inquiry at the email configured in `CONTACT_EMAIL_TO`
- **User's inbox:** The user will receive a confirmation email

## API Endpoint

### POST `/api/contact`

Sends a contact form submission via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "businessName": "Acme Corp",
  "projectScope": "We need a new website for our e-commerce business..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your inquiry has been submitted successfully!",
  "emailId": "d46f53fe-ef69-443c-a1a3-0af22c2e871a"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Failed to submit inquiry. Please try again later."
}
```

## File Structure

```
rant/
├── server.js                          # Backend Express server with Resend integration
├── .env.local                         # Environment variables (create from .env.example)
├── .env.example                       # Environment variables template
├── RESEND_SETUP.md                    # This file
├── package.json                       # Updated with Resend dependencies
└── src/
    └── components/
        └── ContactSection.jsx         # Updated contact form component
```

## Key Changes Made

### 1. Backend Server (`server.js`)
- Express server running on port 5000
- `/api/contact` endpoint for form submissions
- Sends two emails:
  - **Team notification:** Detailed inquiry with all form data
  - **User confirmation:** Automatic reply confirming receipt

### 2. Frontend Component (`ContactSection.jsx`)
- Updated `handleSubmit` to make async API call
- Sends form data to `http://localhost:5000/api/contact`
- Displays error messages if submission fails
- Shows success state with confetti animation

### 3. Environment Configuration
- `.env.local` for local development
- `.env.example` as template for team members
- Supports custom email addresses and API endpoints

## Troubleshooting

### Issue: "Failed to submit inquiry"

**Check 1: Is the backend server running?**
```bash
# Terminal should show:
# ✓ RANT Contact Server running on http://localhost:5000
```

**Check 2: Is the API key valid?**
```bash
# Test with curl:
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","businessName":"Test Co","projectScope":"Test project"}'
```

**Check 3: Check server logs**
Look at the terminal where you ran `node server.js` for error messages.

### Issue: "This API key is restricted"

This means you're using a restricted API key. You need a full API key with sending permissions:
1. Go to [Resend API Keys](https://resend.com/api-keys)
2. Create a new key (don't use restricted keys)
3. Update `.env.local` with the new key

### Issue: Emails not being sent

**Check 1: Verify domain verification**
- For `onboarding@resend.dev`: No verification needed (test domain)
- For custom domains: Ensure DNS records are added and verified

**Check 2: Check Resend logs**
1. Go to [Resend Dashboard](https://resend.com)
2. Check the "Logs" section for any error messages
3. Look for bounced or failed emails

**Check 3: Check spam folder**
Confirmation emails might end up in spam. Add the sender to contacts to prevent this.

## Production Deployment

### Before Going Live

1. **Verify your domain:**
   - Add your actual domain (e.g., `noreply@rant.dev`)
   - Configure DNS records in Resend
   - Wait for verification

2. **Update environment variables:**
   ```env
   RESEND_API_KEY=re_your_production_key
   CONTACT_EMAIL_FROM=noreply@rant.dev
   CONTACT_EMAIL_TO=hello@rant.dev
   VITE_API_URL=https://your-domain.com
   ```

3. **Deploy backend server:**
   - Use a service like Vercel, Heroku, Railway, or your own server
   - Set environment variables on the hosting platform
   - Update `VITE_API_URL` to point to your production API

4. **Update frontend:**
   - Build and deploy the Vite app
   - Ensure `VITE_API_URL` environment variable is set for production

### Example: Deploying with Vercel

1. **Create `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "RESEND_API_KEY": "@resend_api_key",
    "CONTACT_EMAIL_FROM": "@contact_email_from",
    "CONTACT_EMAIL_TO": "@contact_email_to"
  }
}
```

2. **Deploy:**
```bash
npm install -g vercel
vercel
```

3. **Add environment variables in Vercel dashboard**

## Security Notes

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **API keys are sensitive** - Treat them like passwords
3. **Backend validation** - Always validate form data on the server
4. **CORS configuration** - Only allow requests from your domain
5. **Rate limiting** - Consider adding rate limiting for production

## Support

For Resend-specific issues:
- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)

For RANT-specific issues:
- Contact: hello@rant.dev
- GitHub: [nishankgupta08-byte/rant](https://github.com/nishankgupta08-byte/rant)

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Get Resend API key
4. ✅ Run backend server
5. ✅ Run frontend dev server
6. ✅ Test contact form
7. 📋 (Optional) Verify custom domain
8. 📋 (Optional) Deploy to production

Happy emailing! 🚀
