# Quickstart Guide: Wyzela LLC Patent Agent Practice Website

**Date**: 2026-02-02
**Feature**: 001-patent-agent-website

## Prerequisites

- Git (for version control and deployment)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code recommended)
- Cloudflare account (for deployment)

No build tools, Node.js, or package managers required for this vanilla HTML/CSS project.

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd wyzela-site
```

### 2. Project Structure

```
wyzela-site/
├── src/
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── styles.css     # All styles
│   ├── js/
│   │   └── main.js        # Progressive enhancement
│   └── assets/
│       └── images/        # Logo, icons (if any)
├── specs/                 # Feature specifications
└── README.md
```

### 3. Create Source Directory

```bash
mkdir -p src/css src/js src/assets/images
```

## Local Development

### Option A: Simple File Opening

Open `src/index.html` directly in your browser:

```bash
# macOS
open src/index.html

# Linux
xdg-open src/index.html

# Windows
start src/index.html
```

### Option B: Local Server (Recommended for Testing)

Using Python (built into macOS/Linux):

```bash
cd src
python3 -m http.server 8000
# Visit http://localhost:8000
```

Using Node.js (if available):

```bash
npx serve src
# Visit http://localhost:3000
```

## Configuration

### Contact Email

Update the contact email in `src/index.html`:

```html
<!-- Replace placeholder email with actual business email -->
<a href="mailto:YOUR_EMAIL@wyzela.com?subject=Consultation%20Inquiry">
  Book a Confidential Consultation
</a>
```

Search for `contact@wyzela.com` and replace all instances with the actual email address.

### Colors (Optional)

Customize colors in `src/css/styles.css`:

```css
:root {
  --color-primary: #1a365d;    /* Change to brand color */
  --color-accent: #2563eb;     /* Change to brand accent */
}
```

### Logo (Optional)

If a logo file is provided:

1. Place it in `src/assets/images/logo.png` (or .svg)
2. Update the header in `src/index.html`:

```html
<a href="#" class="logo">
  <img src="assets/images/logo.png" alt="Wyzela LLC" height="40">
</a>
```

## Testing

### 1. Visual Testing

Test at these viewport widths:
- Mobile: 320px, 375px, 414px
- Tablet: 768px
- Desktop: 1024px, 1440px, 1920px

Use browser DevTools (F12) → Toggle Device Toolbar (Ctrl/Cmd + Shift + M)

### 2. Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Click "Analyze page load"

**Target Scores**:
- Accessibility: 90+
- Performance: 90+
- Best Practices: 90+

### 3. HTML Validation

Validate HTML at: https://validator.w3.org/

### 4. Link Testing

Verify all navigation links scroll to correct sections:
- Services (#services)
- Who We Serve (#audience)
- Why Wyzela (#why)
- How We Work (#process)
- Contact (#contact)

Verify mailto: links open email client with correct recipient.

### 5. Accessibility Testing

- Tab through all interactive elements (should follow logical order)
- Check color contrast (use browser accessibility tools)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)

## Deployment to Cloudflare Pages

### 1. Connect Repository

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to "Workers & Pages" → "Create application" → "Pages"
3. Connect your Git provider (GitHub/GitLab)
4. Select the `wyzela-site` repository

### 2. Configure Build Settings

| Setting | Value |
|---------|-------|
| Production branch | `main` (or `master`) |
| Build command | *(leave empty)* |
| Build output directory | `src` |

### 3. Deploy

Click "Save and Deploy". Cloudflare will:
- Clone your repository
- Serve files from `src/` directory
- Provide a `*.pages.dev` URL

### 4. Custom Domain (Optional)

1. Go to your Pages project → "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `wyzela.com`)
4. Follow DNS configuration instructions

## Updating the Site

### Make Changes

1. Edit files in `src/` directory
2. Test locally
3. Commit and push:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Cloudflare Pages automatically deploys on push to main branch.

## Troubleshooting

### Page not loading after deployment

- Verify build output directory is set to `src`
- Check that `index.html` exists in `src/` directory

### Styles not applying

- Check CSS file path in HTML: `<link rel="stylesheet" href="css/styles.css">`
- Clear browser cache (Ctrl/Cmd + Shift + R)

### Smooth scrolling not working

- Verify `scroll-behavior: smooth` in CSS
- Check section IDs match navigation href values

### Email link not working on mobile

- Test on actual device (not just emulator)
- Ensure email app is configured on test device

## File Checklist

Before deploying, ensure these files exist:

- [ ] `src/index.html` - Main HTML with all content
- [ ] `src/css/styles.css` - All styles
- [ ] `src/js/main.js` - Mobile nav toggle (can be empty if using CSS-only solution)
- [ ] Contact email updated from placeholder

## Support

For issues with:
- **Cloudflare Pages**: [Cloudflare Community](https://community.cloudflare.com/)
- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/)
- **Accessibility**: [WebAIM](https://webaim.org/)
