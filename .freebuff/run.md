# JishAtlas website — run doc

The official JishAtlas site: React 18 + Vite 5 + React Router 6 (JavaScript/JSX, no
TypeScript) with Tailwind CSS v4 (`tailwindcss` + `@tailwindcss/vite`, wired in
`vite.config.js`). Design tokens live in the `@theme` block at the top of
`src/styles/global.css`; components use Tailwind utilities, with a small retained
`@layer base` block for what utilities can't express (keyframes, doc-content
descendant typography, reduced motion).

## Reproduce the artifacts

A fresh checkout needs only the dependency install (no `.env` files, nothing to copy):

```bash
npm install
```

No build output is committed; `dist/` is generated on demand by `npm run build`.

## Run the server

Development server (default port 5173, Vite picks a free port if taken):

```bash
npm run dev
```

Production build + local preview:

```bash
npm run build
npm run preview
```

## Configuration notes

- `src/config/site.js` — `SITE_CONFIG.microsoftStoreUrl` is the single download
  destination. Until the real Microsoft Store listing exists it is empty, and the UI
  renders a clearly marked "Store listing coming soon" note instead of a fake link.
- `SITE_CONFIG.githubUrl` — footer/navbar GitHub links only render when set.
- Routing is SPA (BrowserRouter); the dev server handles fallback, and any static
  host serving `dist/` needs a fallback to `index.html` for `/docs/*` deep links.
