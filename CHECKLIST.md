# Pre-Launch Checklist ✅

Use this checklist before deploying your Recipe Master blog.

## Content Preparation

- [ ] Add your own recipe markdown files to `content/recipes/`
- [ ] Add recipe images to `public/images/`
- [ ] Update image paths in recipe front matter
- [ ] Review and customize sample recipes or remove them
- [ ] Verify all recipes have proper front matter

## Customization

- [ ] Update site title in `app/layout.tsx`
- [ ] Update site description and keywords
- [ ] Customize color scheme (currently orange/red)
- [ ] Update About page with your story
- [ ] Update footer links and information
- [ ] Add your social media links (if any)

## SEO & Metadata

- [ ] Update Open Graph image path (`og-image.jpg`)
- [ ] Add actual Open Graph image to `public/`
- [ ] Update site URL in metadata
- [ ] Verify meta descriptions are under 160 characters
- [ ] Check all page titles are descriptive

## Google AdSense (Optional)

- [ ] Apply for Google AdSense account
- [ ] Get approval
- [ ] Get your AdSense code
- [ ] Replace `<AdPlaceholder />` components with real ads
- [ ] Test ad display in development
- [ ] Verify ad placement doesn't hurt UX

## Testing

- [ ] Run `npm run dev` and test locally
- [ ] Test homepage loads correctly
- [ ] Click through to recipe detail pages
- [ ] Test category filtering
- [ ] Test pagination (if you have 10+ recipes)
- [ ] Test About page
- [ ] Test 404 page (go to non-existent URL)
- [ ] Test on mobile device/responsive mode
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check console for errors

## Performance

- [ ] Optimize images (use WebP, compress)
- [ ] Images should be under 500KB each
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Aim for 90+ scores on all metrics
- [ ] Test loading speed

## Build & Deploy

- [ ] Run `npm run build` successfully
- [ ] Check for build errors
- [ ] Review the `out/` directory
- [ ] Test the production build locally
- [ ] Set up Git repository
- [ ] Push to GitHub
- [ ] Connect to Vercel/Netlify
- [ ] Deploy to production
- [ ] Test live site

## Post-Launch

- [ ] Verify live site works correctly
- [ ] Test on different devices and browsers
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Monitor for errors
- [ ] Share on social media

## Analytics Setup (Optional)

- [ ] Create Google Analytics account
- [ ] Get tracking ID
- [ ] Add tracking code to `app/layout.tsx`
- [ ] Verify tracking works
- [ ] Set up goals/conversions

## Google Search Console (Optional)

- [ ] Add property in Search Console
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Monitor indexing status
- [ ] Fix any crawl errors

## Social Media (Optional)

- [ ] Create social media accounts
- [ ] Add social links to footer
- [ ] Create shareable recipe images
- [ ] Test Open Graph preview on Facebook
- [ ] Test Twitter Card preview

## Maintenance Tasks

Regular tasks after launch:

### Weekly
- [ ] Add new recipes
- [ ] Check for broken links
- [ ] Monitor analytics
- [ ] Respond to feedback

### Monthly
- [ ] Review top-performing recipes
- [ ] Update old recipes if needed
- [ ] Check for outdated content
- [ ] Monitor ad performance

### Quarterly
- [ ] Security updates (npm audit)
- [ ] Dependency updates
- [ ] Redesign consideration
- [ ] SEO audit

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build static site
npm start               # Test production build

# Maintenance
npm audit               # Check for vulnerabilities
npm update              # Update dependencies
npm outdated            # Check for updates
```

## Troubleshooting

### Recipe Not Showing
- Check file is in `content/recipes/`
- Verify `.md` extension
- Check front matter format
- Ensure slug is unique
- Restart dev server

### Build Fails
- Check for TypeScript errors
- Verify all imports
- Check Node.js version (18+)
- Clear `.next` folder and rebuild

### Images Not Loading
- Check file exists in `public/images/`
- Verify path starts with `/`
- Check file extension matches
- Clear browser cache

### Styling Issues
- Check Tailwind classes are correct
- Verify `globals.css` imports
- Clear browser cache
- Check for console errors

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vercel Documentation](https://vercel.com/docs)

## Ready to Launch?

When all items are checked:

1. ✅ Content is ready
2. ✅ Site is customized
3. ✅ Everything tested
4. ✅ Build succeeds
5. ✅ Deploy completed

🚀 **Your Recipe Master blog is live!**

---

Good luck with your recipe blog! 🍳✨
