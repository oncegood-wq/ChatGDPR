# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is **Redaktionsstöd MVP** — a Next.js 14 (App Router) marketing website for an AI-assisted document review service targeting Swedish public agencies. It is a purely client-side static site with no backend, database, or external API integrations.

### Running the application

```bash
npm run dev      # Starts dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
```

### Key caveats

- **No lockfile in the original repo**: `npm install` resolves from scratch. The resolved `package-lock.json` should be committed to avoid version drift.
- **Next.js auto-modifies `tsconfig.json`** on first run (`jsx`, `moduleResolution`, `isolatedModules`, etc.). This is expected behavior.
- **ESLint version**: The project uses ESLint 8 with `eslint-config-next@14`. ESLint 9+ is incompatible with `next lint` in Next.js 14.
- **Custom Tailwind utility classes** (`container-max`, `section-title`, `btn-primary`, `btn-secondary`) are defined in `src/app/globals.css` using `@layer components`.
- **No external services required**: The app runs standalone — no database, no Docker, no environment variables needed.
- **Contact form**: Logs to `console.log` only (no backend). Form submission success message disappears after 3 seconds.
