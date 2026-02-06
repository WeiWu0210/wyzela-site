# Implementation Plan: Cloudflare Pages Deployment Refactor

**Branch**: `001-cloudflare-pages` | **Date**: 2026-02-05 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-cloudflare-pages/spec.md`

## Summary

Refactor the Wyzela LLC marketing website (React 19 + Vite 6 + TypeScript SPA) for deployment to Cloudflare Pages. The primary work involves replacing the Tailwind CSS CDN with build-time compilation (Tailwind v4 + `@tailwindcss/vite`), removing browser import maps in favor of Vite bundling, configuring Node.js version, and ensuring zero visual regressions. The site remains a static SPA with no SSR or edge functions.

## Technical Context

**Language/Version**: TypeScript 5.8 / React 19.2 / Node.js 22 (Cloudflare Pages v3 default)
**Primary Dependencies**: Vite 6.2, @vitejs/plugin-react 5.0, Tailwind CSS v4 (new), @tailwindcss/vite (new)
**Storage**: N/A (static site, no database)
**Testing**: Manual visual comparison across viewports (desktop 1440px, tablet 768px, mobile 375px); `vite build` success validation
**Target Platform**: Cloudflare Pages (static site hosting, global edge CDN)
**Project Type**: Web (single SPA, no backend)
**Performance Goals**: Sub-2-second LCP, CSS bundle smaller than ~300KB CDN payload
**Constraints**: Zero visual regressions; all existing styles, layout, and interactions must be pixel-identical
**Scale/Scope**: 7 components, 1 HTML entry point, 1 CSS file to create, 2 config files to modify

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The project constitution has not been customized (contains template placeholders). No specific gates or constraints to evaluate. Proceeding with standard best practices:
- No unnecessary abstractions introduced
- Minimal new dependencies (2 packages: `tailwindcss`, `@tailwindcss/vite`)
- No new project structure complexity; existing flat structure preserved
- All changes serve the stated deployment goal

**Post-Phase 1 re-check**: Design artifacts confirm no violations. The refactor adds 2 npm packages, modifies 3 existing files, creates 2 new files. No structural complexity added.

## Project Structure

### Documentation (this feature)

```text
specs/001-cloudflare-pages/
├── plan.md              # This file
├── research.md          # Phase 0 output - technology decisions
├── data-model.md        # Phase 1 output - N/A (no data entities)
├── quickstart.md        # Phase 1 output - build & deploy guide
└── checklists/
    └── requirements.md  # Spec quality checklist
```

### Source Code (repository root)

```text
./
├── index.html           # MODIFY: Remove CDN script, import map, inline styles
├── index.tsx            # MODIFY: Add CSS import
├── index.css            # CREATE: Tailwind v4 entry point with custom styles
├── App.tsx              # NO CHANGE
├── components/          # NO CHANGE (7 components)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhoWeServe.tsx
│   ├── Services.tsx
│   ├── WhyWyzela.tsx
│   ├── HowWeWork.tsx
│   └── Footer.tsx
├── vite.config.ts       # MODIFY: Add @tailwindcss/vite plugin
├── tsconfig.json        # NO CHANGE
├── package.json         # MODIFY: Add tailwindcss, @tailwindcss/vite deps
├── .nvmrc               # CREATE: Node.js version for Cloudflare Pages
└── metadata.json        # NO CHANGE
```

**Structure Decision**: The existing flat single-project structure is preserved. No reorganization into `src/` directory needed since the project is small (7 components + 3 root files). This minimizes diff size and risk of breaking import paths.

## Change Summary

### Files to Create (2)

1. **`index.css`** - Tailwind v4 CSS entry point
   - `@import "tailwindcss"` directive
   - `@theme` block for custom font tokens (`--font-sans: "Inter"`, `--font-heading: "Outfit"`)
   - `@layer base` for body and heading font assignments, smooth scroll
   - `@layer utilities` for `.gradient-text` class
   - Google Fonts `@import` URL

2. **`.nvmrc`** - Node.js version specification
   - Contents: `22`

### Files to Modify (3)

3. **`index.html`** - Clean up for Vite bundling
   - Remove `<script src="https://cdn.tailwindcss.com"></script>`
   - Remove `<script type="importmap">...</script>` block
   - Remove `<style>...</style>` block (moved to `index.css`)
   - Remove Google Fonts `<link>` (moved to `index.css` `@import`)
   - Keep `<link rel="stylesheet" href="/index.css">`

4. **`vite.config.ts`** - Add Tailwind plugin
   - Import `tailwindcss` from `@tailwindcss/vite`
   - Add `tailwindcss()` to plugins array after `react()`

5. **`package.json`** - Add dependencies
   - Add `tailwindcss` to devDependencies
   - Add `@tailwindcss/vite` to devDependencies

### Files Unchanged (9)

- `App.tsx`, all 7 components in `components/`, `tsconfig.json`, `metadata.json`
- No component code changes required; all Tailwind utility classes used in JSX are compatible with v4

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Tailwind v4 class incompatibility | Low | High | v4 is backward-compatible with v3 utility classes; CDN version already used v3 syntax which v4 supports |
| Missing Tailwind classes in built CSS | Medium | High | Tailwind v4 auto-detects `.tsx`/`.html` files; verify with `vite build` + manual inspection |
| Custom `.gradient-text` class lost | Low | High | Explicitly defined in `@layer utilities` in `index.css` |
| Google Fonts not loading | Low | Medium | `@import url(...)` in CSS is standard; tested approach |
| Cloudflare build failure | Low | High | Node 22 is the v3 default; `npm run build` is the standard Vite command |

## Complexity Tracking

No constitution violations to justify. The refactor adds minimal complexity:
- 2 new files (CSS entry point + `.nvmrc`)
- 2 new npm packages (`tailwindcss`, `@tailwindcss/vite`)
- 3 file modifications (cleanup, not additions)
