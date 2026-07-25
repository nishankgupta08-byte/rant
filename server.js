import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: process.env.VITE_API_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, businessName, projectScope } = req.body;

    // Validation
    if (!name || !email || !businessName || !projectScope) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    // Prepare email content
    const emailContent = `
New Project Inquiry from RANT Website

Name: ${name}
Email: ${email}
Business Name: ${businessName}

Project Details:
${projectScope}

---
This inquiry was submitted through the RANT website contact form.
Please respond within 24 hours as per our SLA.
    `.trim();

    // Send email to the team
    const emailResponse = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO || 'delivered@resend.dev',
      subject: `New Project Inquiry: ${businessName} - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: monospace; background-color: #0a0a0a; color: #39FF14; padding: 20px; border-radius: 8px;">
          <h2 style="color: #39FF14; border-bottom: 2px solid #39FF14; padding-bottom: 10px;">New Project Inquiry from RANT Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #39FF14;">${email}</a></p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <hr style="border: 1px solid #39FF14; margin: 20px 0;" />
          <h3 style="color: #39FF14;">Project Details:</h3>
          <p style="white-space: pre-wrap;">${projectScope}</p>
          <hr style="border: 1px solid #39FF14; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This inquiry was submitted through the RANT website contact form. Please respond within 24 hours as per our SLA.</p>
        </div>
      `
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: [email],
      subject: 'We Received Your Project Inquiry - RANT',
      text: `Hi ${name},\n\nThank you for reaching out to RANT! We've received your project inquiry and will review it shortly.\n\nNishank & Prince will get back to you within 24 hours with a preliminary scope and proposal.\n\nBest regards,\nRANT Team`,
      html: `
        <div style="font-family: monospace; background-color: #0a0a0a; color: #39FF14; padding: 20px; border-radius: 8px;">
          <h2 style="color: #39FF14;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your project inquiry and will review it shortly.</p>
          <p><strong>Nishank & Prince</strong> will get back to you within 24 hours with a preliminary scope and proposal.</p>
          <hr style="border: 1px solid #39FF14; margin: 20px 0;" />
          <p>Best regards,<br><strong>RANT Team</strong></p>
        </div>
      `
    });

    res.json({
      success: true,
      message: 'Your inquiry has been submitted successfully!',
      emailId: emailResponse.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`✓ RANT Contact Server running on http://localhost:${PORT}`);
  console.log(`✓ API endpoint: POST http://localhost:${PORT}/api/contact`);
  console.log(`✓ Resend API configured`);
});
