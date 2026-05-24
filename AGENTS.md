# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Next.js 14 (App Router) static marketing site for **Redaktionsstöd.se** — an AI-assisted document review service for Swedish public sector. It is a single-service frontend-only project with no backend, database, or external API integrations.

### Key commands

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `localhost:3000`) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Caveats

- The original repo was missing `src/app/layout.tsx`, `src/app/page.tsx`, and `src/app/globals.css`. These are required by Next.js App Router and were added as part of environment setup. If they are missing on your branch, the app will not start.
- ESLint 8 (not 9+) is required for compatibility with Next.js 14's built-in `next lint`. The project uses `eslint-config-next@^14.0.0`.
- The `tsconfig.json` is auto-updated by Next.js on first `dev` or `build` run. Do not be alarmed by Next.js modifying it.
- Custom Tailwind CSS classes (`container-max`, `section-title`, `btn-primary`, `btn-secondary`) are defined in `src/app/globals.css` using `@layer components`.
- The contact form at `/contact` only logs to `console.log` — there is no backend form handler.
- If the dev server gives 500 errors after installing new packages, clear the `.next` cache (`rm -rf .next`) and restart.
