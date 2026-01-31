# WELCOMETOMYCITY - Deployment Guide

## Quick Start

WELCOMETOMYCITY is ready to deploy with zero configuration required. The app works perfectly without an OpenAI API key using curated fallback data for all cities.

## Local Development Setup

### 1. Clone and Install

```bash
git clone https://github.com/rachts/welcometomycity-2.0.git
cd welcometomycity
npm install
```

### 2. Environment Configuration (Optional)

Create `.env.local` for local development:

```bash
cp .env.example .env.local
```

Update values in `.env.local`:

```
# Required for deployment
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional - for AI-generated attractions (requires OpenAI account with billing)
# OPENAI_API_KEY=sk-your-key-here
```

### 3. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

## Deployment Platforms

### Vercel (Recommended - Free Tier Available)

**Easiest deployment option for Next.js**

1. Push code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. Environment Variables (in Vercel Dashboard):
   - Settings → Environment Variables
   - Add only required variable:
     ```
     NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
     ```
   - Leave `OPENAI_API_KEY` blank (fallback data will be used)

4. Deploy:
   - Click "Deploy"
   - Your site is live at `https://your-project.vercel.app`

**Optional: Add OpenAI Support**
- Get API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- Ensure [billing is active](https://platform.openai.com/account/billing/overview)
- Add `OPENAI_API_KEY` to Vercel environment variables
- Redeploy

### Docker Deployment

**For self-hosted servers**

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000

ENV NODE_ENV=production
ENV NEXT_PUBLIC_APP_URL=https://your-domain.com

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t welcometomycity .
docker run -p 3000:3000 -e OPENAI_API_KEY=sk-xxx welcometomycity
```

### Netlify

1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Environment variables:
   - `NEXT_PUBLIC_APP_URL` = your Netlify domain
4. Deploy

### Railway, Render, or Other Node.js Platforms

All support Next.js deployments. Basic setup:

1. Connect your GitHub repository
2. Set environment variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_APP_URL=https://your-deployment-url
   ```
3. Deploy (typically automatic on git push)

## Environment Variables - Production

### Required
- **NEXT_PUBLIC_APP_URL** - Your deployment URL
  - Example: `https://welcometomycity.com`
  - Used for SEO, redirects, API calls

### Optional
- **OPENAI_API_KEY** - For AI-generated attractions
  - Leave blank to use curated fallback data
  - Requires active OpenAI account with billing

### Future (Not Required Yet)
- Database URLs for user data persistence
- Analytics keys
- Maps API keys

## Performance Optimization for Production

### Next.js Build Optimization

```bash
# Analyze bundle
npm run build -- --analyze

# Check build size
ls -lh .next/static/chunks/
```

### Recommended Settings

The app includes optimized configurations:
- Image optimization enabled
- TypeScript strict mode with some exceptions for rapid development
- Automatic code splitting
- CSS minification

### Caching Strategy

Production deployment includes:
- Static city data (no external calls)
- Browser caching via Next.js cache headers
- Fallback data bundled (zero API dependency)

## Security Checklist

- [ ] Never commit `.env.local` or any secret keys to Git
- [ ] Use `.gitignore` to exclude `.env.local` (already configured)
- [ ] Set environment variables in platform UI, never in code
- [ ] Rotate API keys periodically
- [ ] Monitor API usage and billing alerts
- [ ] Use environment-specific URLs in `NEXT_PUBLIC_APP_URL`

## Monitoring & Debugging

### Vercel Analytics
- Built-in performance monitoring
- View logs: Vercel Dashboard → Deployments → Logs

### Debug Mode
Set environment variable:
```
DEBUG=welcometomycity:*
```

### Server Logs
```bash
# For self-hosted
npm run build
npm start

# View console output for errors
```

## Troubleshooting

### "Page not found" on deployed app
- Check `NEXT_PUBLIC_APP_URL` is correct in environment
- Verify build completed successfully
- Check platform build logs

### OpenAI generation fails
- This is normal and expected - fallback data is used
- To enable: Add `OPENAI_API_KEY` with valid billing
- Check OpenAI account at https://platform.openai.com

### Deployment builds fail
- Ensure `npm run build` works locally
- Check Node.js version (recommend 18+)
- Check for circular imports or type errors

## Scaling

### Database Integration (Future)
When adding user features (favorites, saved itineraries):
- Supabase: Easiest PostgreSQL option
- Neon: Serverless PostgreSQL
- PlanetScale: MySQL option

### Caching (Future)
For API caching:
- Upstash Redis (serverless)
- Vercel KV (integrated)

### Analytics
Add to `NEXT_PUBLIC_GA_ID` for traffic tracking.

## Support

For issues or questions:
1. Check [OPENAI_SETUP.md](./OPENAI_SETUP.md) for AI configuration
2. Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for codebase
3. Review [README.md](./README.md) for features

---

**Created by Rachit** | WELCOMETOMYCITY v1.0
