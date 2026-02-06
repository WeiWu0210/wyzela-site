# Data Model: Cloudflare Pages Deployment Refactor

**Branch**: `001-cloudflare-pages` | **Date**: 2026-02-05

## Overview

This feature involves no data entities, database schemas, or persistent state. The Wyzela marketing website is a static Single Page Application with all content hardcoded in React components.

## Entities

No data entities are applicable to this refactor. The project has:

- **No database connections**
- **No API endpoints**
- **No persistent user data**
- **No server-side state**

The only state in the application is a single client-side React state variable (`showInquiryModal` in `App.tsx`), which is transient and resets on page reload.

## Configuration Artifacts

While not data entities, the following configuration files are relevant to this feature:

| Artifact | Purpose |
|----------|---------|
| `.nvmrc` | Specifies Node.js version (22) for build environment |
| `index.css` | Tailwind CSS v4 entry point with custom theme tokens |
| `vite.config.ts` | Build configuration with Tailwind plugin |

These are static configuration files, not runtime data.
