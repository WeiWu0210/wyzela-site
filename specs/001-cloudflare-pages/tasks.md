# Tasks: Cloudflare Pages Deployment Refactor

**Input**: Design documents from `/specs/001-cloudflare-pages/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: No automated test tasks included (not requested in feature specification). Verification is manual/visual per spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install new dependencies and configure Node.js version for Cloudflare Pages

- [x] T001 Install `tailwindcss` and `@tailwindcss/vite` as devDependencies via `npm install -D tailwindcss @tailwindcss/vite` in package.json
- [x] T002 [P] Create `.nvmrc` at project root with contents `22` to specify Node.js version for Cloudflare Pages build environment

---

## Phase 2: User Story 4 - Tailwind CSS Build-Time Compilation (Priority: P2) 🎯 MVP Foundation

**Goal**: Replace the Tailwind CSS CDN with build-time compilation using Tailwind v4 and the `@tailwindcss/vite` plugin, so that only used CSS classes are included in the output bundle.

**Independent Test**: Run `npm run build` and verify the `dist/` output contains compiled CSS with no references to `cdn.tailwindcss.com`. Open the built site via `npm run preview` and confirm all Tailwind utility classes render correctly.

**Why this phase is first**: US4 is the core implementation work that US1 (deploy), US2 (build config), and US3 (visual fidelity) all depend on. The Tailwind migration must succeed before the site can build or deploy.

### Implementation for User Story 4

- [x] T003 [US4] Create `index.css` at project root with Tailwind v4 entry point: `@import "tailwindcss"` directive, `@theme` block defining `--font-sans: "Inter", sans-serif` and `--font-heading: "Outfit", sans-serif`, `@layer base` for body font-family/scroll-behavior and heading font-family assignments, `@layer utilities` for `.gradient-text` class (linear-gradient 135deg from #60a5fa to #3b82f6), and Google Fonts `@import url(...)` for Inter and Outfit
- [x] T004 [US4] Update `vite.config.ts` to import `tailwindcss` from `@tailwindcss/vite` and add `tailwindcss()` to the plugins array after `react()`
- [x] T005 [US4] Clean up `index.html`: remove `<script src="https://cdn.tailwindcss.com"></script>`, remove the entire `<script type="importmap">...</script>` block, remove the `<style>...</style>` block (now in index.css), remove the Google Fonts `<link>` tag (now in index.css @import). Keep `<link rel="stylesheet" href="/index.css">`, `<body>` classes, `<div id="root">`, and `<script type="module" src="/index.tsx">`
- [x] T006 [US4] Run `npm run build` to verify the production build succeeds and `dist/` directory is generated with compiled CSS assets (no CDN references)
- [x] T007 [US4] Run `npm run preview` and manually verify in browser that all Tailwind utility classes are applied correctly (dark slate background, blue accents, responsive grid layouts)

**Checkpoint**: Tailwind CSS is now compiled at build time. The CDN dependency is eliminated. The site builds successfully with tree-shaken CSS.

---

## Phase 3: User Story 1 + User Story 2 - Deploy & Build Configuration (Priority: P1)

**Goal**: Ensure the project builds successfully on Cloudflare Pages' build system and produces a deployable static bundle. Verify the build configuration (command, output directory, Node.js version) is compatible.

**Independent Test**: Connect the repository to Cloudflare Pages via Git integration and verify the automated build succeeds. Alternatively, run `npx wrangler pages deploy dist` to test direct upload deployment.

**Why combined**: US1 (deploy) and US2 (build config) are inseparable - the build configuration IS the deployment mechanism. Both are verified by the same action: a successful Cloudflare Pages build.

### Implementation for User Story 1 + User Story 2

- [x] T008 [US1] Verify `package.json` has correct build script (`"build": "vite build"`) and all dependencies are properly listed (react, react-dom, @google/genai in dependencies; vite, @vitejs/plugin-react, typescript, tailwindcss, @tailwindcss/vite in devDependencies) in package.json
- [x] T009 [US1] Run `npm run build` in a clean environment (delete `node_modules` and `dist`, then `npm install && npm run build`) to simulate the Cloudflare Pages build process
- [x] T010 [US2] Verify `.nvmrc` contains `22` and is committed to the repository root. Confirm `dist/` directory is in `.gitignore` (or not tracked) so it is not committed

**Checkpoint**: The project builds cleanly from scratch. Cloudflare Pages can use `npm run build` with output directory `dist` and Node.js 22 from `.nvmrc`.

---

## Phase 4: User Story 3 - Preserve Current Style and Layout (Priority: P1)

**Goal**: Verify zero visual regressions across all page sections, viewports, and interactive elements after the Tailwind CDN-to-build migration.

**Independent Test**: Start the dev server (`npm run dev`) and visually compare every section of the site against the current design. Check desktop (1440px), tablet (768px), and mobile (375px) viewports. Test all interactive elements (modal, scroll, hover).

### Implementation for User Story 3

- [x] T011 [US3] Start dev server with `npm run dev` and verify the dark slate color scheme renders correctly: slate-950 body background, slate-900 section backgrounds, blue-600/blue-500 accent colors on buttons and links across all components
- [x] T012 [P] [US3] Verify Google Fonts load correctly: headings (h1, h2, h3, `.font-heading`) use Outfit font family, body text uses Inter font family. Check in browser DevTools computed styles
- [x] T013 [P] [US3] Verify the `.gradient-text` CSS class renders the blue gradient effect (linear-gradient 135deg, #60a5fa to #3b82f6) on applicable text elements in components/Hero.tsx
- [x] T014 [US3] Verify responsive layout at three viewports - desktop (1440px): full grid layouts; tablet (768px): adjusted grid; mobile (375px): stacked single-column layout. Check Navbar, Hero, WhoWeServe, Services, WhyWyzela, HowWeWork, Footer sections
- [x] T015 [US3] Verify interactive elements: click "Book a consultation" button to confirm inquiry modal opens with backdrop blur and correct form styling; test smooth scrolling on navigation links; verify navbar scroll detection changes style after scrolling; confirm button hover states
- [x] T016 [US3] Verify the production build (`npm run preview`) renders identically to the dev server across all viewports and interactions

**Checkpoint**: All visual elements, typography, colors, layouts, and interactions are pixel-identical to the pre-refactor version.

---

## Phase 5: User Story 5 - SPA Routing Support (Priority: P2)

**Goal**: Ensure the SPA routing works on Cloudflare Pages so that direct URL access and page refresh do not produce 404 errors.

**Independent Test**: After deployment, navigate directly to any URL path on the site and verify it loads the SPA correctly instead of returning a 404.

### Implementation for User Story 5

- [x] T017 [US5] Verify no `404.html` file exists in `public/` directory or project root (Cloudflare Pages auto-serves `index.html` for all routes when no `404.html` is present). If one exists, remove it
- [x] T018 [US5] Verify no `_redirects` file is needed (per research.md R3 decision: rely on automatic SPA detection). Confirm the `dist/` output after build does not contain a `404.html` file

**Checkpoint**: SPA routing is handled automatically by Cloudflare Pages. No additional configuration files needed.

---

## Phase 6: User Story 6 - Environment Variable Configuration (Priority: P3)

**Goal**: Ensure environment variables (specifically `GEMINI_API_KEY`) are properly configured for the Cloudflare Pages build environment.

**Independent Test**: Set a test `GEMINI_API_KEY` value in the Cloudflare Pages dashboard and verify the build completes with access to the variable.

### Implementation for User Story 6

- [x] T019 [US6] Verify `vite.config.ts` `define` block correctly reads `GEMINI_API_KEY` from the environment and injects it as `process.env.GEMINI_API_KEY` and `process.env.API_KEY` at build time
- [x] T020 [US6] Add `.env.example` file at project root documenting required environment variables (`GEMINI_API_KEY=your-key-here`) so developers know what to configure in the Cloudflare Pages dashboard

**Checkpoint**: Environment variable configuration is documented and compatible with Cloudflare Pages build environment.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup and validation across all stories

- [x] T021 Verify no `public/404.html` or `dist/404.html` exists in the final committed state
- [x] T022 Run final `npm run build` to confirm clean production build with no warnings or errors
- [x] T023 Run quickstart.md validation: follow the deployment steps in specs/001-cloudflare-pages/quickstart.md to verify the documentation is accurate and complete

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **US4 - Tailwind (Phase 2)**: Depends on Setup (needs packages installed). BLOCKS US1/US2/US3
- **US1+US2 - Deploy (Phase 3)**: Depends on US4 completion (site must build with Tailwind v4)
- **US3 - Visual (Phase 4)**: Depends on US4 completion (must verify after Tailwind migration)
- **US5 - Routing (Phase 5)**: Can start after Setup. Independent of other stories
- **US6 - Env Vars (Phase 6)**: Can start after Setup. Independent of other stories
- **Polish (Phase 7)**: Depends on all stories being complete

### User Story Dependencies

```
Phase 1: Setup
    │
    ├──► Phase 2: US4 (Tailwind migration - core implementation)
    │        │
    │        ├──► Phase 3: US1+US2 (Build & Deploy verification)
    │        │
    │        └──► Phase 4: US3 (Visual fidelity verification)
    │
    ├──► Phase 5: US5 (SPA routing - independent)
    │
    └──► Phase 6: US6 (Env vars - independent)
              │
              └──► Phase 7: Polish (all stories complete)
```

### Parallel Opportunities

- T001 and T002 can run in parallel (different files: package.json vs .nvmrc)
- T012 and T013 can run in parallel (different verification targets: fonts vs gradient)
- Phase 5 (US5) and Phase 6 (US6) can run in parallel with Phase 3 and Phase 4
- Once Phase 2 completes, Phase 3 and Phase 4 can run in parallel

---

## Parallel Example: Post-Setup

```bash
# After Phase 1 (Setup) completes, Phase 2 is the critical path.
# After Phase 2 (US4) completes, these can run in parallel:

# Stream A: Build & Deploy verification
Task: "T008 [US1] Verify package.json build script and dependencies"
Task: "T009 [US1] Run clean build to simulate Cloudflare Pages"
Task: "T010 [US2] Verify .nvmrc and dist/ gitignore"

# Stream B: Visual fidelity verification
Task: "T011 [US3] Verify dark slate color scheme"
Task: "T012 [US3] Verify Google Fonts"
Task: "T013 [US3] Verify gradient-text CSS"

# Stream C: Independent stories (can start anytime after Setup)
Task: "T017 [US5] Verify no 404.html exists"
Task: "T019 [US6] Verify vite.config.ts env var configuration"
```

---

## Implementation Strategy

### MVP First (Phase 1 + Phase 2)

1. Complete Phase 1: Setup (install Tailwind packages, create .nvmrc)
2. Complete Phase 2: US4 - Tailwind CSS Build-Time Compilation
3. **STOP and VALIDATE**: Run `npm run build` and `npm run preview` to verify the site builds and renders correctly
4. This is the MVP - the site now builds with proper Tailwind compilation and is deployable

### Incremental Delivery

1. Phase 1 + Phase 2 → Site builds with Tailwind v4 (MVP!)
2. Phase 3 → Verified deployable to Cloudflare Pages
3. Phase 4 → Visual fidelity confirmed across all viewports
4. Phase 5 + Phase 6 → Routing and env var configuration verified
5. Phase 7 → Final polish and documentation validation

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- This refactor has a tight dependency chain: US4 (Tailwind) is foundational for US1/US2/US3
- US5 and US6 are truly independent and can be worked on in any order
- No automated tests are included (per spec: verification is manual/visual)
- Commit after each phase completion for clean git history
- The critical path is: Setup → US4 → US1/US2 → US3 → Polish
