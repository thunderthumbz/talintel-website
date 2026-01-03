# TALINTEL Website - Deployment & Development Guide

## Overview

TALINTEL is a React + Vite frontend application configured for automatic deployment to GitHub Pages via GitHub Actions. This repository contains both frontend and backend code, but only the frontend is deployed as a static site.

## Quick Start: Deploy Changes

### For Non-Technical Users

1. **Make your changes** to the code in the `client/` folder
2. **Commit and push** to the `main` branch:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```
3. **Wait 2-3 minutes** for GitHub Actions to build and deploy automatically
4. **Visit** https://thunderthumbz.github.io/talintel-website/ to see your changes live

That's it! The site rebuilds and redeploys automatically when you push to `main`.

## Local Development

### Prerequisites
- Node.js 20+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thunderthumbz/talintel-website.git
   cd talintel-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev:client
   ```
   
   The site will open at `http://localhost:5000`

4. **Make your changes** and see them update live in the browser

### Useful Commands

```bash
# Start frontend development server (with hot reload)
npm run dev:client

# Build the project locally for testing
npm run build

# Preview the built site locally
npm run preview

# Check TypeScript for errors (without building)
npm run check
```

## Deployment Pipeline

### GitHub Actions Workflow

When you push to `main`, GitHub Actions automatically:

1. **Checks out** your code
2. **Installs** Node.js 20
3. **Installs dependencies** via npm
4. **Builds the project** (`npm run build`)
5. **Uploads** the build output (`dist/public/`) as an artifact
6. **Deploys** to GitHub Pages

### Deployment Status

- **View deployment status:** [GitHub Actions Runs](https://github.com/thunderthumbz/talintel-website/actions)
- **Live site URL:** https://thunderthumbz.github.io/talintel-website/
- **Pages settings:** [GitHub Settings → Pages](https://github.com/thunderthumbz/talintel-website/settings/pages)

## Project Structure

```
talintel-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow configuration
├── client/                     # Frontend React application
│   ├── src/                    # React components and logic
│   ├── public/                 # Static assets (favicon, etc.)
│   └── index.html              # HTML entry point
├── server/                     # Backend Express server (not deployed)
├── shared/                     # Shared utilities and types
├── attached_assets/            # Additional static assets
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite build configuration
└── tsconfig.json               # TypeScript configuration
```

## Configuration Details

### Vite Configuration (`vite.config.ts`)

- **Root:** `client/` (where HTML and React code lives)
- **Base path:** `/talintel-website/` (for GitHub Pages subfolder)
- **Build output:** `dist/public/` (deployed to GitHub Pages)
- **CSS:** Tailwind CSS 4 via @tailwindcss/vite plugin

### GitHub Pages Settings

- **Source:** GitHub Actions
- **Branch:** main
- **HTTPS:** Enabled
- **Custom domain:** None (using `thunderthumbz.github.io/talintel-website/`)

## Troubleshooting

### "404 Page Not Found" on live site

If the site returns 404 even though deployment succeeded:

1. **Check Actions logs:**
   - Go to [GitHub Actions](https://github.com/thunderthumbz/talintel-website/actions)
   - Click the latest workflow run
   - Check the "Debug - List dist/public contents" step to see what files were built

2. **Common causes:**
   - Build didn't complete successfully (check build logs)
   - Files weren't in `dist/public/` directory
   - GitHub Pages cache needs refresh (try hard refresh with Ctrl+Shift+R)

3. **Manual re-deployment:**
   - Go to [Actions → Deploy Vite site to GitHub Pages](https://github.com/thunderthumbz/talintel-website/actions/workflows/deploy.yml)
   - Click "Run workflow" → "Run workflow"

### Build errors locally

If `npm run build` fails:

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check for TypeScript errors:**
   ```bash
   npm run check
   ```

3. **Verify Node version:**
   ```bash
   node --version  # Should be 20 or higher
   ```

## Asset Management

### Where to put files:

- **Images/icons in pages:** `client/src/` (import as modules)
- **Static assets (favicon, etc.):** `client/public/`
- **Images in attached_assets:** Will be available after build

### Image import in React:

```tsx
import heroImage from '@assets/hero.png';

<img src={heroImage} alt="Hero" />
```

## Styling

- **Framework:** Tailwind CSS 4
- **UI Components:** Radix UI (unstyled) + custom Tailwind styling
- **Animation:** Framer Motion

## Performance Tips

1. **Optimize images:** Keep below 200KB for hero images
2. **Code splitting:** Vite does this automatically
3. **Lazy loading:** Use React.lazy() for non-critical components
4. **Bundle analysis:** Check `dist/` folder size after build

## DNS & Custom Domain (Optional)

To use a custom domain (e.g., talintel.com):

1. Update `vite.config.ts` base from `/talintel-website/` to `/`
2. Point your domain DNS to GitHub Pages: `CNAME` → `thunderthumbz.github.io`
3. Add custom domain in [Pages Settings](https://github.com/thunderthumbz/talintel-website/settings/pages)

## Contact Form Solution

Since GitHub Pages is static, form submissions need an external service:

### Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io)
2. Create a form, get endpoint like: `https://formspree.io/f/xyzabc`
3. Use in your React form:

```tsx
<form action="https://formspree.io/f/xyzabc" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## Future Updates & Maintenance

- **React/Vite updates:** Run `npm install` after updating `package.json`
- **Browser compatibility:** Check `tsconfig.json` target
- **GitHub Actions:** Monitor for deprecated action versions (GitHub notifies automatically)

## Support

For issues or questions:

1. Check the Actions tab for deployment errors
2. Review the build logs in the "Build project" step
3. Run `npm run check` to validate TypeScript
4. Clear browser cache (Ctrl+Shift+Delete) if seeing old content

## Links

- **Live Site:** https://thunderthumbz.github.io/talintel-website/
- **Repository:** https://github.com/thunderthumbz/talintel-website
- **GitHub Actions:** https://github.com/thunderthumbz/talintel-website/actions
- **Settings:** https://github.com/thunderthumbz/talintel-website/settings

---

**Last Updated:** January 2025  
**Deployment Status:** ✅ Automated via GitHub Actions  
**Tech Stack:** React 19 + Vite 7 + TypeScript + Tailwind CSS 4
