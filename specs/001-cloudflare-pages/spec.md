# Feature Specification: Cloudflare Pages Deployment Refactor

**Feature Branch**: `001-cloudflare-pages`
**Created**: 2026-02-05
**Status**: Draft
**Input**: User description: "refactor the code to make it deployable to cloudflare pages; make sure to retain the current web page style and layout"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Deploy Site to Cloudflare Pages (Priority: P1)

As a developer, I want to deploy the Wyzela marketing website to Cloudflare Pages so that the site is served from Cloudflare's global edge network with fast load times and reliable hosting.

**Why this priority**: Deploying the site is the core objective of this feature. Without a working deployment pipeline, no other improvements matter.

**Independent Test**: Can be fully tested by running the build process and deploying the output to Cloudflare Pages, then verifying the site loads correctly at the assigned URL with all pages, styles, and assets rendering properly.

**Acceptance Scenarios**:

1. **Given** the project source code, **When** the build command is executed, **Then** a production-ready bundle is generated in the output directory compatible with Cloudflare Pages static hosting.
2. **Given** a successful build, **When** the output is deployed to Cloudflare Pages (via Git integration or direct upload), **Then** the site is accessible at the Cloudflare Pages URL with all content, styles, and images loading correctly.
3. **Given** a deployed site, **When** a user visits the site on a mobile device, **Then** the responsive layout renders correctly with no broken styles or missing assets.

---

### User Story 2 - Proper Build Configuration for Cloudflare Pages (Priority: P1)

As a developer, I want the build configuration to be compatible with Cloudflare Pages' build system so that the project can be connected to a Git repository and automatically built and deployed by Cloudflare Pages.

**Why this priority**: Cloudflare Pages needs specific build settings (build command, output directory, Node.js version) to work correctly. Without proper configuration, automated deployments will fail.

**Independent Test**: Can be tested by connecting the repository to Cloudflare Pages and verifying the automated build succeeds without manual intervention.

**Acceptance Scenarios**:

1. **Given** the project is connected to Cloudflare Pages via Git, **When** a commit is pushed to the main branch, **Then** Cloudflare Pages automatically builds the project without errors.
2. **Given** the Cloudflare Pages build environment, **When** the build runs, **Then** it uses the correct Node.js version and produces the expected output directory.

---

### User Story 3 - Preserve Current Style and Layout (Priority: P1)

As a site owner, I want the deployed site to look and behave exactly like the current version so that the refactor is invisible to visitors and no brand consistency or user experience is lost.

**Why this priority**: The site's visual identity (dark slate theme, blue accent colors, gradient text effects, custom typography, responsive layout, smooth scroll behavior, and modal interactions) is the product itself. Any visual regression undermines trust and professionalism. This is a non-negotiable constraint of the refactor.

**Independent Test**: Can be tested by visually comparing every section of the deployed site against the current local development version across desktop and mobile viewports, verifying pixel-level consistency in colors, fonts, spacing, layout, animations, and interactive elements.

**Acceptance Scenarios**:

1. **Given** the deployed site, **When** a user views the homepage on a desktop browser, **Then** the dark slate background, blue accent colors, gradient text effects, and section layout are identical to the current version.
2. **Given** the deployed site, **When** a user views the site on a mobile device, **Then** the responsive layout, stacked navigation, and section reflow match the current behavior.
3. **Given** the deployed site, **When** a user scrolls the page, **Then** smooth scrolling, section transitions, and navbar scroll behavior work identically to the current version.
4. **Given** the deployed site, **When** a user clicks "Book a consultation" or the CTA button, **Then** the inquiry modal appears with the same backdrop blur, animation, form layout, and styling as the current version.
5. **Given** the deployed site, **When** inspecting the typography, **Then** headings use the Outfit font family and body text uses the Inter font family, matching the current design.
6. **Given** the deployed site, **When** viewing the "Who We Serve", "Services", "Why Wyzela", and "How We Work" sections, **Then** each section's card layout, spacing, borders, and hover effects are preserved.

---

### User Story 4 - Tailwind CSS Build-Time Compilation (Priority: P2)

As a developer, I want Tailwind CSS to be compiled at build time instead of loaded via CDN so that the site has optimized CSS, faster load times, and does not depend on an external CDN at runtime.

**Why this priority**: The current CDN approach works but is suboptimal for production. Build-time compilation produces smaller CSS bundles (only used classes), eliminates runtime CDN dependency, and improves performance scores.

**Independent Test**: Can be tested by building the project and verifying that the output contains compiled CSS with no references to the Tailwind CDN, and that all styling renders correctly.

**Acceptance Scenarios**:

1. **Given** the project uses Tailwind CSS classes in components, **When** the project is built, **Then** only the CSS classes actually used in the project are included in the output.
2. **Given** a deployed site, **When** inspecting network requests, **Then** there are no requests to `cdn.tailwindcss.com` or any external CSS CDN.
3. **Given** the built site, **When** comparing visual appearance to the current CDN-based version, **Then** all styles render identically.

---

### User Story 5 - SPA Routing Support (Priority: P2)

As a user navigating the site, I want page navigation and anchor links to work correctly on Cloudflare Pages so that I can access all sections of the site without encountering 404 errors.

**Why this priority**: Single Page Applications require proper routing configuration on the hosting platform. Without it, direct URL access or page refreshes result in 404 errors.

**Independent Test**: Can be tested by navigating directly to any section/anchor URL on the deployed site and verifying it loads correctly without a 404 error.

**Acceptance Scenarios**:

1. **Given** the site is deployed on Cloudflare Pages, **When** a user navigates directly to a URL path (e.g., refreshes the page), **Then** the SPA loads correctly without a 404 error.
2. **Given** the site is deployed, **When** a user clicks an internal navigation link, **Then** the page scrolls or navigates to the correct section smoothly.

---

### User Story 6 - Environment Variable Configuration (Priority: P3)

As a developer, I want environment variables (such as API keys) to be configurable through Cloudflare Pages' environment settings so that sensitive values are not hardcoded in the source code and can differ between preview and production deployments.

**Why this priority**: The project already references a `GEMINI_API_KEY` environment variable. Cloudflare Pages supports environment variables natively, and proper configuration ensures secrets are managed securely across environments.

**Independent Test**: Can be tested by setting environment variables in the Cloudflare Pages dashboard and verifying they are available during the build process.

**Acceptance Scenarios**:

1. **Given** environment variables are configured in the Cloudflare Pages dashboard, **When** the project is built, **Then** the build process can access these variables as expected.
2. **Given** different environment variable values for preview and production, **When** a preview deployment and production deployment are created, **Then** each uses its respective environment variable values.

---

### Edge Cases

- What happens when the build fails due to a missing environment variable? The build should produce a clear error message indicating which variable is missing.
- What happens when a user accesses a non-existent route? The site should display the SPA's default view rather than a generic 404 page.
- What happens when external assets (e.g., Google Fonts, external images) are unavailable? The site should still render with fallback fonts and placeholder content without breaking the layout.
- What happens when the Tailwind CDN script tag is removed but build-time Tailwind is misconfigured? The build process should fail with a clear error rather than producing a site with no styling.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The project MUST produce a static build output compatible with Cloudflare Pages' static site hosting.
- **FR-002**: The project MUST include a Cloudflare Pages-compatible build configuration specifying the build command and output directory.
- **FR-003**: Tailwind CSS MUST be compiled at build time using the project's build pipeline, replacing the current CDN-based approach.
- **FR-004**: The built CSS MUST include only the Tailwind utility classes used in the project (tree-shaking/purging unused styles).
- **FR-005**: Custom CSS (gradient text effects, animations) currently in `index.html` MUST continue to work after the refactor.
- **FR-006**: The site MUST handle client-side routing correctly on Cloudflare Pages, serving the SPA for all routes.
- **FR-007**: Environment variables MUST be accessible during the build process via Cloudflare Pages' environment variable configuration.
- **FR-008**: All existing visual appearance and functionality MUST be preserved after the refactor (no regressions).
- **FR-009**: The dark slate color scheme (slate-950 background, slate-900 sections, blue-600/blue-500 accents) MUST be retained exactly as-is.
- **FR-010**: Custom CSS effects (gradient text using linear-gradient with blue tones, backdrop blur on modals) MUST be preserved.
- **FR-011**: The page layout MUST retain its current section order: Navbar, Hero, Mission, Who We Serve, Services, Why Wyzela, How We Work, Final CTA, Footer.
- **FR-012**: The responsive layout behavior (mobile stacking, breakpoint-based reflow) MUST match the current implementation.
- **FR-013**: Interactive elements (inquiry modal with form, smooth scrolling, navbar scroll detection, hover effects) MUST function identically.
- **FR-014**: The project MUST specify a compatible Node.js version for the Cloudflare Pages build environment.
- **FR-015**: External font loading (Google Fonts: Inter for body text, Outfit for headings) MUST continue to function correctly after the refactor.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The site builds successfully on Cloudflare Pages' build system without manual intervention or workarounds.
- **SC-002**: The deployed site loads all pages, styles, fonts, and images correctly with zero visual regressions compared to the current local development version.
- **SC-003**: Page load performance (Largest Contentful Paint) is equal to or better than the current CDN-based approach.
- **SC-004**: The total CSS bundle size is smaller than the full Tailwind CDN payload by including only used classes.
- **SC-005**: Direct URL access and page refresh on any route returns the correct page content without 404 errors.
- **SC-006**: The site is accessible from multiple geographic regions with sub-2-second initial page load times, leveraging the edge network.
- **SC-007**: A side-by-side comparison of every page section between the local development version and the deployed version shows zero visual differences in color, typography, spacing, and layout across desktop (1440px), tablet (768px), and mobile (375px) viewports.
- **SC-008**: All interactive elements (modal open/close, smooth scroll, navbar scroll behavior, button hover states) behave identically to the current version.

## Assumptions

- The project will remain a static Single Page Application (no server-side rendering or edge functions required at this time).
- The existing Vite build tool will be retained as the build system, as it is fully compatible with Cloudflare Pages.
- The `@google/genai` dependency, while present in `package.json`, is not actively used in any components and will be preserved as-is for future use.
- Git integration (connecting a GitHub/GitLab repository) is the intended deployment method, though direct upload is also supported.
- The developer has or will create a Cloudflare account with access to Cloudflare Pages.
- Node.js 18 or 20 LTS will be specified as the build environment version, as these are supported by Cloudflare Pages.
