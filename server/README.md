# Portfolio Backend API

Backend server for handling contact form submissions and sending emails via Resend.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Get Resend API Key

Resend is a professional email API service - much simpler than Gmail!

1. Sign up at https://resend.com (free tier available)
2. Go to **API Keys** section
3. Click **Create API Key**
4. Copy your API key (starts with `re_`)

### 3. Create Environment File

Create a `.env` file in the `server` folder:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your Resend API key:

```env
RESEND_API_KEY=re_your_api_key_here
PORT=5000
```

### 4. Start the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Send a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Features

- ✅ Sends email notification to mohammedsahal1243@gmail.com
- ✅ Sends auto-reply to the contact form submitter
- ✅ Input validation
- ✅ Beautiful HTML email templates
- ✅ CORS enabled for frontend integration
- ✅ Error handling
- ✅ Using Resend API - professional and reliable

## Email Templates

### Email to You
- Professional layout with sender details
- Highlighted message content
- Includes sender's name and email for easy reply

### Auto-reply to Sender
- Thank you message
- Confirmation that message was received
- Your signature and branding

## Security Notes

- ✅ Never commit the `.env` file to Git (it's gitignored)
- ✅ Keep your Resend API key secure
- ✅ Use environment variables in production
- ✅ Consider rate limiting for production use

## Troubleshooting

**"Failed to send message" error:**
- Verify your Resend API key is correct in `.env`
- Check that the server is running
- Make sure you have internet connection

**CORS errors:**
- Server has CORS enabled for all origins in development
- Update CORS settings for production deployment

**Email not received:**
- Check spam folder
- Verify the recipient email in `server.js` line 48
- Check Resend dashboard for delivery logs
