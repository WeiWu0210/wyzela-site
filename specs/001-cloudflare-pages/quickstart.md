# Quickstart: Cloudflare Pages Deployment

**Branch**: `001-cloudflare-pages` | **Date**: 2026-02-05

## Prerequisites

- Node.js 22 (install via `nvm use` with the `.nvmrc` file)
- npm (included with Node.js)
- A Cloudflare account with Cloudflare Pages access
- Git repository connected to GitHub or GitLab

## Local Development

```bash
# Install dependencies (including new Tailwind CSS packages)
npm install

# Start development server
npm run dev
# → http://localhost:3000
```

## Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The build output is in the `dist/` directory.

## Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**
3. Select your repository and branch
4. Configure build settings:

   | Setting | Value |
   |---------|-------|
   | Framework preset | React (Vite) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

5. Add environment variables (under **Environment variables**):

   | Variable | Value | Notes |
   |----------|-------|-------|
   | `GEMINI_API_KEY` | `your-key-here` | Optional; only needed when Gemini integration is active |

6. Click **Save and Deploy**

### Option B: Direct Upload (Wrangler CLI)

```bash
# Install Wrangler globally
npm install -g wrangler

# Log in to Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler pages deploy dist --project-name wyzela-site
```

## Environment Variables

Environment variables are configured in the Cloudflare Pages dashboard under **Settings > Environment Variables**. You can set different values for Production and Preview environments.

The Node.js version is automatically detected from the `.nvmrc` file (Node 22).

## Verify Deployment

After deployment, verify:

1. **Site loads**: Visit the Cloudflare Pages URL (e.g., `https://wyzela-site.pages.dev`)
2. **Styles correct**: Dark slate theme, blue accents, gradient text visible
3. **Fonts load**: Headings in Outfit, body text in Inter
4. **Responsive**: Test at desktop (1440px), tablet (768px), mobile (375px)
5. **Interactions**: Click "Book a consultation" to verify modal opens with backdrop blur
6. **Scrolling**: Verify smooth scroll behavior on navigation links
7. **No CDN deps**: In DevTools Network tab, confirm no requests to `cdn.tailwindcss.com` or `esm.sh`
