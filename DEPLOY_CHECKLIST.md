# WELCOMETOMYCITY - Deployment Checklist

## Pre-Deployment (Local)

- [ ] Code builds without errors
  ```bash
  npm run build
  ```

- [ ] No console errors or warnings
  ```bash
  npm run dev
  # Check browser console for errors
  ```

- [ ] Test all pages locally
  - [ ] Homepage
  - [ ] Transport Planner
  - [ ] City Explorer
  - [ ] Trip Planner
  - [ ] About Page

- [ ] City selector works in navbar
- [ ] Dark/Light mode toggle works
- [ ] Mobile layout is responsive (test in DevTools)
- [ ] Generate attractions button works with fallback data

## Environment Setup

Choose your deployment platform:

### Option 1: Vercel (Recommended - 5 minutes)

- [ ] Push code to GitHub
  ```bash
  git add .
  git commit -m "Ready for deployment"
  git push origin main
  ```

- [ ] Go to https://vercel.com
- [ ] Click "New Project"
- [ ] Select your GitHub repository
- [ ] Click "Deploy"
  - Vercel auto-configures Next.js
  - No environment variables needed (app works with fallback data)

- [ ] (Optional) Enable OpenAI
  - [ ] Get API key from OpenAI
  - [ ] In Vercel Dashboard:
    - Settings → Environment Variables
    - Add: `OPENAI_API_KEY = sk-...`
  - [ ] Redeploy

### Option 2: Docker (Self-hosted)

- [ ] Create Dockerfile in project root (see DEPLOYMENT.md)
- [ ] Build image:
  ```bash
  docker build -t welcometomycity .
  ```
- [ ] Run container:
  ```bash
  docker run -p 3000:3000 welcometomycity
  ```
- [ ] Test at http://localhost:3000

### Option 3: Other Platforms (Netlify, Railway, Render, etc.)

- [ ] Push to GitHub
- [ ] Connect repository in platform UI
- [ ] Set environment variable:
  ```
  NEXT_PUBLIC_APP_URL=https://your-deployment-url
  ```
- [ ] Deploy

## Post-Deployment

- [ ] Site loads without 404 errors
- [ ] All pages are accessible
- [ ] City selector works
- [ ] Attractions load (using fallback data)
- [ ] Responsive design works on mobile
- [ ] Dark/Light mode works
- [ ] Performance is acceptable
  - [ ] Page load time < 3 seconds
  - [ ] No console errors

## Testing

### Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

### Functionality Testing

- [ ] Homepage loads
- [ ] Can select different cities
- [ ] Transport planner shows routes
- [ ] Explorer shows attractions
- [ ] Trip planner generates itineraries
- [ ] About page displays correctly

### Security Testing

- [ ] No API keys exposed in client code
- [ ] No errors in console
- [ ] HTTPS working (for custom domain)

## Custom Domain Setup (Optional)

If deploying to custom domain:

### Vercel
- [ ] Add domain in Vercel settings
- [ ] Update DNS records (Vercel provides instructions)
- [ ] Wait for DNS propagation (5-48 hours)
- [ ] SSL certificate auto-provisioned

### Other Platforms
- Follow platform's domain setup guide
- Point DNS records to platform's servers
- Enable SSL/HTTPS

## After Going Live

- [ ] Share deployment URL
- [ ] Monitor for errors (check platform logs)
- [ ] Update social media with link
- [ ] Add to portfolio
- [ ] Consider adding OpenAI support if users request it

## Rollback Plan (If Issues)

If deployment has problems:

### Vercel
- Click "Deployments" → Select previous working deployment → Click "Promote to Production"

### GitHub Pages / Self-hosted
- Revert code: `git revert [commit-hash]`
- Redeploy

## Success Criteria

✅ Deployment successful when:

1. Site is publicly accessible at deployment URL
2. All pages load without errors
3. Cities can be selected from navbar
4. Attractions display correctly
5. Mobile design is responsive
6. No console errors or warnings

## Support

- If OpenAI generation fails: Fallback data is used (expected behavior)
- If pages don't load: Check platform build logs
- If styling looks wrong: Check CSS loading in DevTools
- See DEPLOYMENT.md for detailed troubleshooting

---

**Estimated Deployment Time:**
- Vercel: 5-10 minutes
- Docker: 15-20 minutes
- Other platforms: 10-15 minutes

**Questions?** See DEPLOYMENT.md for detailed instructions.
