# Crown Home Spaces — Luxury Interiors & Construction

A premium, production-ready React + Vite site for Crown Home Spaces — Interiors & Construction. Built with Vite, React, Tailwind CSS, Framer Motion, GSAP and optimized for modern deployments (Netlify/Vercel).

## Features
- Luxury-themed UI with gold & dark accents
- Team & Leadership section with featured lead engineer (Azaruddin)
- Animations via Framer Motion and GSAP
- Responsive layout with Tailwind CSS
- SEO-ready with `react-helmet-async` and sitemap/_redirects

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- React Router DOM
- Swiper.js

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm (bundled with Node) or yarn

## Quick Start
1. Clone the repo

```bash
git clone <repo-url> crown-home-spaces
cd crown-home-spaces
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
# open http://localhost:4173
```

4. Build for production

```bash
npm run build
npm run preview
# preview serves the built site locally
```

## Project Structure (high level)
- `src/` — React app source
  - `pages/` — Route pages (Home, About, Services...)
  - `sections/` — Reusable page sections (TeamSection, Hero...)
  - `components/` — Shared components (Header, Footer, SEO...)
  - `data/` — Data files (`team.js`, `testimonials.js`, `projects.js`)
  - `styles/` — Tailwind entry `index.css` and custom styles
- `public/` — Static assets (if any)
- `package.json` — Scripts & dependencies

## Team Data
To edit or add team members, update `src/data/team.js`. The app expects the lead/featured member to have `featured: true` to render the premium highlighted card.

## Dependencies
A plain list of dependencies (with versions) is provided in `dependencies.txt` for convenience.

## Notes & Troubleshooting
- If remote images/videos are blocked by browser extensions or network policy, replace those URLs with local assets in `public/` and update the component image/video paths.
- If you see React Router warnings about future flags, these are non-blocking — consider upgrading React Router or enabling the future flags per your preference.

## Deploy
This project is Netlify / Vercel friendly. For Netlify, ensure `_redirects` and `robots.txt` are in the `dist/` after build and point Netlify to the root of the repo.

## Contact
For questions about this starter, contact: crownhomespaces@gmail.com

---

© 2026 Crown Home Spaces. All rights reserved.
