# Research: Wyzela LLC Patent Agent Practice Website

**Date**: 2026-02-02
**Feature**: 001-patent-agent-website

## Technology Decisions

### 1. Site Framework Approach

**Decision**: Vanilla HTML5 + CSS3 (no framework)

**Rationale**:
- Single page with static content requires no component reuse or state management
- Eliminates build step complexity and dependencies
- Meets <500KB page weight requirement easily
- Ensures content works without JavaScript (FR-015)
- Fastest possible load times with no framework overhead
- Easier long-term maintenance without dependency updates

**Alternatives Considered**:
| Alternative | Rejected Because |
|-------------|------------------|
| React/Next.js | Overkill for static content; adds JS bundle weight; requires build step |
| Astro | Good for static sites but adds build complexity for single page |
| Hugo/Jekyll | Static site generators are useful for multi-page/blog sites; overhead for single page |
| TailwindCSS | Utility-first CSS adds build requirement; custom CSS is simpler for single page |
| Bootstrap | Adds ~150KB+ of unused CSS; custom styles are leaner |

### 2. CSS Architecture

**Decision**: Mobile-first CSS with CSS custom properties (variables)

**Rationale**:
- Mobile-first ensures base styles work on smallest screens
- CSS custom properties enable consistent theming (colors, spacing, fonts)
- No preprocessor needed (Sass/Less) for this scope
- Modern browser support is universal for CSS variables

**Implementation Pattern**:
```css
:root {
  --color-primary: #1a365d;    /* Professional dark blue */
  --color-accent: #2563eb;     /* Action button blue */
  --color-text: #1f2937;       /* Body text */
  --color-muted: #6b7280;      /* Secondary text */
  --color-background: #ffffff;
  --font-heading: 'Georgia', serif;
  --font-body: system-ui, -apple-system, sans-serif;
  --spacing-section: 4rem;
  --max-width: 1200px;
}
```

### 3. Responsive Design Approach

**Decision**: CSS Grid + Flexbox with 3 breakpoints

**Rationale**:
- CSS Grid for page-level layout (sections, header/footer)
- Flexbox for component-level layout (nav items, card groups)
- Three breakpoints align with spec requirements:
  - Mobile: 320px base (mobile-first)
  - Tablet: 768px
  - Desktop: 1024px+

**Breakpoints**:
```css
/* Mobile-first base styles */
/* Tablet */
@media (min-width: 768px) { ... }
/* Desktop */
@media (min-width: 1024px) { ... }
```

### 4. Smooth Scrolling Implementation

**Decision**: CSS `scroll-behavior: smooth` with JavaScript fallback

**Rationale**:
- Native CSS smooth scroll is supported in all modern browsers
- Works without JavaScript (progressive enhancement)
- JavaScript fallback only for older browsers if needed
- No library required

**Implementation**:
```css
html {
  scroll-behavior: smooth;
}
```
```javascript
// Fallback for browsers without CSS smooth scroll support
if (!CSS.supports('scroll-behavior', 'smooth')) {
  // Polyfill smooth scroll for anchor links
}
```

### 5. Navigation Pattern

**Decision**: Sticky header with hamburger menu on mobile

**Rationale**:
- Sticky header keeps navigation accessible at all scroll positions (FR navigation requirement)
- Hamburger menu is the standard mobile pattern users expect
- Minimal JavaScript: toggle class for menu open/close

**Accessibility**:
- `aria-expanded` attribute on mobile menu button
- `aria-hidden` on menu when collapsed
- Focus management when menu opens/closes

### 6. Typography System

**Decision**: System font stack with Georgia for headings

**Rationale**:
- System fonts eliminate font loading (performance)
- Georgia is universally available and conveys professionalism for legal/professional services
- Sans-serif body text (system-ui) ensures readability

**Font Stack**:
```css
--font-heading: 'Georgia', 'Times New Roman', serif;
--font-body: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
```

### 7. Cloudflare Pages Deployment

**Decision**: Direct deployment from Git repository

**Rationale**:
- Cloudflare Pages supports direct HTML/CSS deployment
- No build command needed for vanilla HTML
- Automatic HTTPS and CDN distribution
- Simple `_redirects` file if needed for any URL handling

**Configuration**:
```
Build command: (none)
Build output directory: src
Root directory: /
```

### 8. Color Scheme

**Decision**: Professional dark blue primary with clean white background

**Rationale**:
- Dark blue conveys trust, professionalism, expertise (common in legal/financial services)
- High contrast for accessibility (90+ Lighthouse score requirement)
- White background with ample whitespace for modern, clean aesthetic
- Limited color palette (3-4 colors) maintains simplicity

**Palette**:
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #1a365d | Headings, nav, footer background |
| Accent | #2563eb | CTA buttons, links |
| Text | #1f2937 | Body text |
| Muted | #6b7280 | Secondary text, captions |
| Background | #ffffff | Page background |
| Light Gray | #f3f4f6 | Alternating section backgrounds |

### 9. Email Contact Implementation

**Decision**: Mailto: link with subject line pre-populated

**Rationale**:
- Simple, no backend required
- Works on all devices with email clients
- Display email address visibly for users without default email client (edge case)

**Implementation**:
```html
<a href="mailto:contact@wyzela.com?subject=Consultation%20Inquiry">
  Book a Confidential Consultation
</a>
<p class="email-fallback">Or email us directly: contact@wyzela.com</p>
```

## Unresolved Items

None. All technical decisions are resolved for implementation.

## References

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [CSS scroll-behavior browser support](https://caniuse.com/css-scroll-behavior)
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
