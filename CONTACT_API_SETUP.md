# Contact Form API Setup Guide

## Quick Start

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Your Resend API Key

You already have your Resend API key:
```
re_M46GeLmK_MU4NobG4AgdxuRginyMqpJES
```

### Step 3: Configure Environment Variables

Create `server/.env` file:

```env
RESEND_API_KEY=re_M46GeLmK_MU4NobG4AgdxuRginyMqpJES
PORT=5000
```

### Step 4: Start Both Servers

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend (Vite):**
```bash
npm run dev
```

### Step 5: Test the Contact Form

1. Open http://localhost:3000 (or your Vite port)
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the message!

## What Happens When Someone Submits?

1. ✅ **You receive an email** at `mohammedsahal1243@gmail.com` with:
   - Sender's name
   - Sender's email
   - Their message

2. ✅ **Sender receives auto-reply** with:
   - Thank you message
   - Confirmation their message was received
   - Your professional signature

## Production Deployment

For production, you'll need to:

1. Deploy the backend to a service like:
   - Render.com
   - Railway.app
   - Heroku
   - Vercel (serverless functions)

2. Update the API URL in `Contact.jsx`:
   ```javascript
   const response = await fetch('https://your-api-url.com/api/contact', {
   ```

3. Set environment variables in your hosting platform

## Security Best Practices

- ✅ Never commit `.env` file (it's gitignored)
- ✅ Keep your Resend API key secure
- ✅ Add rate limiting in production
- ✅ Validate all inputs
- ✅ Use HTTPS in production
- ✅ Resend is more secure than SMTP

## Troubleshooting

**Problem:** "Failed to send message"
- **Solution:** Make sure backend server is running on port 5000
- Check that `.env` file exists with correct API key

**Problem:** CORS error
- **Solution:** Backend has CORS enabled - check if server is running

**Problem:** Email not received
- **Solution:** 
  - Check spam folder
  - Verify Resend API key is correct
  - Check Resend dashboard at https://resend.com for delivery logs

**Problem:** "Invalid API key"
- **Solution:** Make sure you copied the full API key from Resend

## Need Help?

Check the detailed README in the `server` folder for more information!
