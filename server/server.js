import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Contact API is running!" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  try {
    // Email to yourself (receiving the contact form message)
    const emailToYou = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mohammedsahal1243@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> <span style="color: #666;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <span style="color: #666;">${email}</span></p>
            </div>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #333;">Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #22c55e; border-radius: 5px;">
                <p style="color: #666; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px; margin: 0;">This message was sent from your portfolio contact form</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply email to the sender
    const emailToSender = await resend.emails.send({
      from: "Mohammed Sahal PK <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
            
            <p style="color: #333; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #666; line-height: 1.6;">
              Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f0fdf4; padding: 15px; border-left: 4px solid #22c55e; border-radius: 5px; margin: 20px 0;">
              <p style="color: #333; margin: 0;"><strong>Your message:</strong></p>
              <p style="color: #666; line-height: 1.6; margin: 10px 0 0 0;">${message}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Best regards,<br/>
              <strong style="color: #22c55e;">Mohammed Sahal PK</strong><br/>
              Full Stack Developer
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px; margin: 0;">This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Emails sent:", { emailToYou, emailToSender });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
