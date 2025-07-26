# Deployment Instructions

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Modern FarmXLabs waitlist website"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

## Environment Variables (if needed)
No environment variables are required for this project.

## Custom Domain (Optional)
- In Vercel dashboard, go to your project settings
- Add your custom domain
- Update DNS records as instructed

## Performance
- The site is optimized for performance
- Images are optimized with Next.js Image component
- CSS is purged and minified
- JavaScript is tree-shaken and minified

## Monitoring
- Vercel provides built-in analytics
- Check the Vercel dashboard for performance metrics
- Monitor Core Web Vitals in Google Search Console 