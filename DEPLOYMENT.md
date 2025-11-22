# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Recipe Master blog"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in minutes!

## Alternative: Manual Static Export

Build locally and deploy the `out/` folder anywhere:

```bash
npm run build
```

The `out/` directory contains:
- All HTML pages (fully static)
- CSS and JavaScript bundles
- Images and assets

Upload the `out/` folder to any static hosting:
- Netlify: Drag & drop the `out/` folder
- GitHub Pages: Push `out/` to `gh-pages` branch
- AWS S3: Upload to S3 bucket
- Cloudflare Pages: Connect and deploy

## Environment Variables

No environment variables needed! This is a fully static site.

## Custom Domain

### On Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### On Other Platforms:
Follow your hosting provider's documentation for custom domains.

## Performance Optimization

The site is already optimized with:
- Static generation
- Code splitting
- Lazy loading
- SEO meta tags

For further optimization:
1. Add actual images to `public/images/`
2. Optimize images (use WebP format)
3. Consider using a CDN for images

## Adding Google AdSense

1. Apply for Google AdSense
2. Get approved
3. Get your ad code
4. Replace `<AdPlaceholder />` components with:

```tsx
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossOrigin="anonymous"></script>
<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

5. Deploy the changes

## Analytics

Add Google Analytics or other analytics:

1. Get your tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Run `npm install` again
- Check for TypeScript errors

### Images Not Showing
- Ensure images are in `public/images/`
- Update `image` field in recipe front matter
- Use correct paths (start with `/`)

### Recipe Not Appearing
- Check front matter format
- Ensure `.md` extension
- Verify date format (ISO 8601)
- Check slug uniqueness

## Support

For issues, check:
- Next.js documentation
- GitHub Issues
- Vercel documentation
