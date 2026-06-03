# aashman-homepage

Personal homepage for [Aashman Shukla](https://github.com/AashmanShukla3223).

**Live:** _(deploy in progress — will live at `aashman-homepage.vercel.app`)_

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS v3**
- **react-router-dom v6** (client-side routing)
- Vercel static deploy

## Aesthetic

Hybrid of two of my own projects:

- **macOS 26 Tahoe** — glassmorphic surfaces, frosted backdrop blur, traffic-light window chrome, SF Pro fonts
- **Samsung C5000 (2010 LCD TV)** — OSD blue accent palette (`#0a1d3a`, `#1e5aa3`, `#699bd8`), faint CRT scanline overlay, period-authentic button styling

## Sections

| Route | Purpose |
|---|---|
| `/` | Hero + featured project + latest post |
| `/projects` | Full project showcase (live URLs, status badges, tech stack) |
| `/writing` | Blog index |
| `/writing/:slug` | Individual posts (lazy-loaded TSX components) |
| `/now` | What I'm actively working on (nownownow.com style) |

## Running locally

```bash
npm install
npm run dev          # localhost:5173
npm run build        # build to dist/
npm run preview      # preview the production build
```

## Adding a blog post

1. Add a metadata entry to `src/data/posts.ts`
2. Create `src/content/posts/<slug>.tsx` exporting a default component
3. Register the lazy loader in `src/pages/Post.tsx`

## Adding a project

Add an entry to `src/data/projects.ts`. Set `highlight: true` to feature it on the home page.

## Deploy

Push to GitHub → import into Vercel → done. No env vars needed.

```bash
git init
git add .
git commit -m "v1.0.0 — initial homepage launch"
git remote add origin https://github.com/AashmanShukla3223/aashman-homepage.git
git push -u origin main
```

Then in Vercel:
- New Project → Import the repo
- Framework preset: **Vite** (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`
- Deploy

---

© 2026 Aashman Shukla · Kanpur, India
