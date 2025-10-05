# Deployment Guide: Portfolio Website

This guide explains how to deploy your Next.js portfolio to Netlify with a custom domain.

## 🚀 Quick Deployment

### Option 1: Manual Deployment via Netlify Dashboard

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Login to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your preferred method

3. **Deploy manually:**
   - Click "Add new site" → "Import an existing project"
   - Drag and drop the project folder or connect via Git
   - Set build command: `npm run build`
   - Publish directory: `.next` (but Netlify will handle this with our config)

### Option 2: Automated Deployment (Recommended)

1. **Connect to GitHub:**
   - Push your code to a GitHub repository
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub account and select your repository

2. **Automatic deployments:**
   - Netlify will automatically deploy when you push to your main branch
   - Build settings are configured in `netlify.toml`

## 🌐 Custom Domain Setup

### Step 1: Purchase a Domain
1. Buy a domain from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Or any domain registrar

### Step 2: Configure DNS
1. **In your domain registrar:**
   - Go to DNS settings
   - Add these records:

   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: AAAA
   Name: @
   Value: 2a07:6b40::1

   Type: CNAME
   Name: www
   Value: [your-netlify-site-url].netlify.app
   ```

### Step 3: Add Custom Domain to Netlify
1. **In Netlify Dashboard:**
   - Go to your site settings
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `yourname.dev`)
   - Follow Netlify's DNS configuration prompts

2. **Verify domain:**
   - Netlify will provide DNS records to add
   - Add these records to your domain registrar
   - Click "Verify" in Netlify

## 🔧 Environment Variables (Optional)

If you need environment variables:

1. **In Netlify Dashboard:**
   - Go to Site settings → Environment variables
   - Add your variables (e.g., API keys, secrets)

2. **For build time variables:**
   - Add them in Netlify dashboard
   - They'll be available during build process

## 📊 Monitoring and Analytics

### Performance Monitoring
- **Netlify Analytics:** Built-in, no setup required
- **Google Analytics:** Add tracking ID to environment variables

### Error Monitoring
- **Netlify Logs:** Check build and function logs
- **Sentry:** Add for error tracking (optional)

## 🛠️ Troubleshooting

### Build Issues
1. **Check build logs** in Netlify dashboard
2. **Common issues:**
   - Node version mismatches (we use Node 18)
   - Missing dependencies
   - Environment variable issues

### Domain Issues
1. **DNS propagation** can take up to 48 hours
2. **Check DNS records** with tools like `dig` or `nslookup`
3. **SSL certificate** issues usually resolve automatically

## 🚀 Advanced Features

### Form Handling
- Netlify forms are automatically detected
- No additional configuration needed for contact forms

### Redirects
- Configured in `netlify.toml`
- Can be modified in Netlify dashboard

### Edge Functions (Optional)
- Add serverless functions in `/netlify/functions/`
- Useful for API endpoints, authentication, etc.

## 📞 Support

- **Netlify Documentation:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **GitHub Issues:** For project-specific issues

## 🔄 Continuous Deployment

Every push to your main branch will trigger:
1. **Build** on Netlify's servers
2. **Deploy** to your custom domain
3. **Notifications** via email (optional)

---

🎉 **Happy deploying!** Your portfolio will be live in minutes with your custom domain.
