# Wireframe Starter

Interactive wireframe template for stakeholder review. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Architecture

### Adding a new wireframe page

1. Add an entry to `src/lib/pages.ts` (id, title, description, status)
2. Add scope entries to `src/lib/scope.ts` (mvp flag, notes, issue URLs)
3. Create `src/app/(wireframes)/<id>/page.tsx`

That's it. The index, top bar badges, and scope overlay all derive from the registry.

### Key directories

- `src/app/page.tsx` — wireframe index (auto-generated from pages registry)
- `src/app/(wireframes)/layout.tsx` — wireframe chrome: top bar, scope toggle, footer
- `src/app/(wireframes)/*/page.tsx` — individual wireframe pages
- `src/lib/pages.ts` — central page registry (all pages defined here)
- `src/lib/scope.ts` — scope annotations: MVP status, notes, issue tracker URLs
- `src/lib/strings/en.json` — all copy, externalised for easy editing
- `src/components/wireframe/` — reusable wireframe primitives
- `src/providers/ScopeProvider.tsx` — scope toggle state + page context

### Wireframe components

- `<WireframeSection label="...">` — wraps full sections, shows scope overlay
- `<ScopeMark label="...">` — wraps sub-components within a section
- `<ImagePlaceholder>` — grey box with label text
- `<SectionLabel>` — uppercase mono label
- `<LinkCard>` — clickable card with title + description

### Scope system

The scope toggle (top bar) overlays MVP/post-MVP annotations on sections:
- Green border + badge = MVP
- Grey overlay + badge = post-MVP
- Notes and issue tracker links shown inline
- ScopeMark uses a left-edge colour bar for sub-component annotations

### Strings

All display copy lives in `src/lib/strings/en.json`. Use `t("key")` to reference strings. This keeps wireframe content separate from component structure.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — Biome check
- `npm run lint:fix` — Biome auto-fix
- `npm run typecheck` — TypeScript type check

## Tools

- **Linter/formatter:** Biome v2 (not ESLint)
- **Pre-commit:** Lefthook
- **Deployment:** Vercel (zero config)

## Skills

The `wireframe-designer` skill from `cogapp-plugins` is pre-approved. Use `/wireframe-designer` to get guidance on creating new wireframe pages.
