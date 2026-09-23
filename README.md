# Supreme Energy website

Corporate website for Supreme Energy (RC7982142), built with React, Vite, TypeScript,
Tailwind CSS v4 and React Router.

## Getting started

```sh
npm install
npm run dev        # start the dev server
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## Structure

```
index.html            # HTML entry + default meta tags
src/main.tsx          # React entry
src/App.tsx           # Route table
src/pages/            # One component per page
src/components/       # Site chrome, shared components, shadcn/ui primitives
src/lib/media.ts      # Image catalogue used across pages
src/assets/supreme/   # Site photographs (see the README in that folder)
public/               # Static files (favicon/logo, robots.txt, _redirects)
docs/design-brief.md  # Original design and content brief
```

## Deployment

This is a static single-page app. Host the `dist/` folder on any static host and make
sure unknown paths fall back to `index.html` (`public/_redirects` covers Netlify and
Cloudflare Pages; other hosts need an equivalent rewrite rule).
"# kilolo" 
