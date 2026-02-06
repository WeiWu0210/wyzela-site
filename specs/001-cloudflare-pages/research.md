# Research: Cloudflare Pages Deployment Refactor

**Branch**: `001-cloudflare-pages` | **Date**: 2026-02-05

## R1: Cloudflare Pages Build Configuration for Vite

**Decision**: Use `npm run build` as the build command with `dist` as the output directory. Use Node.js 22 (Cloudflare Pages v3 default).

**Rationale**: Cloudflare Pages v3 build system (latest as of May 2025) defaults to Node.js 22.16.0 and has a built-in "React (Vite)" framework preset that expects `npm run build` and `dist/` output. The project's existing Vite 6.2.0 configuration already produces output to `dist/` via `vite build`. No custom build command needed.

**Alternatives considered**:
- Node.js 18 LTS: Supported but older; no benefit since Vite 6 works fine on Node 22.
- Node.js 20 LTS: Also supported; Node 22 is the v3 default so fewer config changes needed.
- `wrangler.toml` for build config: Not needed for simple static site deployments; dashboard settings suffice.

## R2: Tailwind CSS Build-Time Compilation (v4 with Vite Plugin)

**Decision**: Install Tailwind CSS v4 with the `@tailwindcss/vite` plugin. No `tailwind.config.js`, no PostCSS config required.

**Rationale**: Tailwind v4 is a major paradigm shift from v3. It uses a CSS-first configuration approach with `@import "tailwindcss"` and `@theme` directives. The `@tailwindcss/vite` plugin handles everything without needing `postcss.config.js` or `tailwind.config.js`. Content scanning is automatic (auto-detects `.tsx`, `.ts`, `.jsx`, `.js`, `.html` files, excluding gitignored paths).

**Packages to install**: `tailwindcss` and `@tailwindcss/vite` (2 packages total).

**Alternatives considered**:
- Tailwind v3 with PostCSS: More config files needed (`tailwind.config.js`, `postcss.config.js`, `autoprefixer`). No reason to use the older version.
- Keep CDN approach: Not viable for production; loads entire Tailwind CSS (~300KB+), no tree-shaking, runtime CDN dependency.

**Key implementation details**:
- Create `index.css` with `@import "tailwindcss"`, `@theme` for custom fonts, `@layer base` for body/heading font assignments, `@layer utilities` for `.gradient-text`.
- Import `index.css` in `index.tsx` (or reference in `index.html`).
- Remove `<script src="https://cdn.tailwindcss.com">` from `index.html`.
- Remove inline `<style>` block from `index.html` (moved to `index.css`).

## R3: SPA Routing on Cloudflare Pages

**Decision**: Rely on Cloudflare Pages' automatic SPA detection. Do NOT create a `404.html` file.

**Rationale**: Cloudflare Pages automatically serves `index.html` for all routes when no `404.html` file exists in the build output. This is the simplest and most reliable approach for SPAs. An explicit `_redirects` file (`/* /index.html 200`) can cause infinite loop warnings and is unnecessary for this use case.

**Alternatives considered**:
- `_redirects` file with `/* /index.html 200`: Can trigger infinite loop warnings; adds unnecessary complexity.
- `wrangler.toml` routing: Overkill for static SPA; intended for Workers/Functions.
- Custom `404.html`: Would break SPA mode; the current app has no client-side router so this is especially unnecessary.

## R4: Import Maps Removal

**Decision**: Remove the entire `<script type="importmap">` block from `index.html`. Vite bundles all dependencies from `node_modules/` at build time.

**Rationale**: The import map was needed for browser-native ESM loading from `esm.sh`. With Vite bundling, all bare module specifiers (`react`, `react-dom`, `@google/genai`) are resolved at build time from `node_modules/`. No code changes needed in `.tsx` files since the import statements remain identical.

**Benefits**: No runtime CDN dependency on `esm.sh`, tree-shaking of unused exports, version consistency via `package-lock.json`.

## R5: Environment Variables

**Decision**: Keep the current `vite.config.ts` `define` approach for `GEMINI_API_KEY`. Set the variable in Cloudflare Pages dashboard.

**Rationale**: The current non-standard pattern (`define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`) works with Cloudflare Pages as long as the environment variable is set in the build environment. Changing to the standard `VITE_` prefix pattern would require code changes in components that reference the variable, and since the `@google/genai` integration is not yet active, this change is unnecessary now.

**Alternatives considered**:
- Migrate to `VITE_GEMINI_API_KEY` with `import.meta.env`: Cleaner Vite pattern but requires code changes for a feature not yet in use. Can be done later when the Gemini integration is implemented.

## R6: Node.js Version Specification

**Decision**: Create a `.nvmrc` file with `22` at the project root.

**Rationale**: Cloudflare Pages v3 build system checks for `.nvmrc` or `.node-version` before falling back to the `NODE_VERSION` environment variable. Using `.nvmrc` documents the requirement in the repository and works for both Cloudflare Pages and local development with nvm. Node 22 matches the Cloudflare Pages v3 default.

**Alternatives considered**:
- `NODE_VERSION` environment variable only: Works but not documented in repo; new developers must know to set it.
- `.node-version` file: Equivalent to `.nvmrc`; `.nvmrc` is more widely recognized.
- `package.json` `"engines"` field: Not supported by Cloudflare Pages v3 build system.
