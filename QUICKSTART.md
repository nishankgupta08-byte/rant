# RANT Website - Quick Start Guide

## Setup (First Time Only)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Resend
1. Get your Resend API key from [Resend Dashboard](https://resend.com/api-keys)
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Edit `.env.local` and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

For detailed setup instructions, see [RESEND_SETUP.md](./RESEND_SETUP.md)

## Running the Application

### Development Mode

**Terminal 1 - Start Backend Server:**
```bash
npm run server
```

Expected output:
```
✓ RANT Contact Server running on http://localhost:5000
✓ API endpoint: POST http://localhost:5000/api/contact
✓ Resend API configured
```

**Terminal 2 - Start Frontend Dev Server:**
```bash
npm run dev
```

Expected output:
```
VITE v6.1.0  ready in 123 ms
➜  Local:   http://localhost:5173/
```

### Access the Website
Open http://localhost:5173 in your browser

## Testing the Contact Form

1. Scroll to the "Ready to Make Some Noise?" section
2. Fill in the form:
   - Name: Your name
   - Email: Your email address
   - Business Name: Your company name
   - Project Details: Describe your project
3. Click "Transmit Brief"
4. You should see:
   - Success message with confetti animation
   - Confirmation email in your inbox
   - Team notification email

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Project Structure

```
rant/
├── src/
│   ├── components/          # React components
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css            # Global styles
├── server.js               # Backend API server
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── .env.example            # Environment variables template
├── .env.local              # Your local environment (not committed)
├── RESEND_SETUP.md         # Detailed Resend setup guide
└── QUICKSTART.md           # This file
```

## Troubleshooting

### Backend server won't start
- Check if port 5000 is already in use
- Make sure `.env.local` exists with a valid `RESEND_API_KEY`
- Check the error message in the terminal

### Frontend won't load
- Make sure backend server is running
- Check if port 5173 is already in use
- Clear browser cache and reload

### Form submission fails
- Check browser console for errors (F12)
- Check backend server logs
- Verify Resend API key is valid
- Make sure `.env.local` has correct configuration

### Emails not being sent
- Check Resend dashboard for error logs
- Verify domain is verified (for custom domains)
- Check spam folder for confirmation emails
- See [RESEND_SETUP.md](./RESEND_SETUP.md) for troubleshooting

## Available Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run server       # Start backend API server
npm run lint         # Run linter
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure Resend API key
3. ✅ Start backend server
4. ✅ Start frontend dev server
5. ✅ Test contact form
6. 📋 Deploy to production (see RESEND_SETUP.md)

## Need Help?

- **Resend Issues:** [Resend Documentation](https://resend.com/docs)
- **Vite Issues:** [Vite Documentation](https://vitejs.dev)
- **React Issues:** [React Documentation](https://react.dev)
- **RANT Issues:** Contact hello@rant.dev

Happy building! 🚀
