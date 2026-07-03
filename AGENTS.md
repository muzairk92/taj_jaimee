<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Styling rules

- Body/paragraph text size is `text-[14px]` (14px). Do not use Tailwind's default `text-base`/`text-sm` scale for body copy — use the explicit 14px value.
- Never use `font-light`. Minimum weight is `font-normal`.
- Any element using the `font-playfair` class must be paired with `font-semibold` — Playfair Display is only used for semibold headings/emphasis in this design, never at a lighter weight.

# Project structure rules

This project is organized by page, not by a flat generic bucket. When adding a new page (About, Partners, Services, etc.):

- Components: create `src/components/<page>/` (e.g. `src/components/about/`) and put that page's section components there. Only components shared across every page belong in `src/components/layout/` (site chrome — Nav, Footer, etc.) or `src/components/ui/` (generic reusable primitives — buttons, containers, etc.).
- GraphQL queries: create `src/lib/graphql/<page>.queries.ts` (e.g. `about.queries.ts`) for that page's query, and export it from `src/lib/graphql/index.ts`. Do not add unrelated pages' queries to an existing page's query file.
- The homepage follows this same pattern: `src/components/home/` + `src/lib/graphql/homepage.queries.ts`.
