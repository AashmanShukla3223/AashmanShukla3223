# Repository Guidelines

## Project Structure

This is a React 19 + TypeScript + Vite personal homepage. Application code lives in `src/`: reusable UI belongs in `src/components/`, route-level screens in `src/pages/`, shared content in `src/data/` and `src/content/`, and global styling in `src/index.css`. `src/App.tsx` owns route registration and the loading experience. Static files and the OTA manifest are in `public/`; build/version helpers are in `scripts/`. There is currently no dedicated test directory.

## Build, Test, and Development Commands

- `npm run dev` — start the Vite development server with hot reload.
- `npm run build` — regenerate `public/version.json`, run TypeScript project checks, and create a production Vite build.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run the project’s placeholder lint command; no linter is configured yet.
- `npm run bump:patch` / `npm run bump:minor` — update the package version and generated OTA manifest.

Run `npm install` first when dependencies are absent. Before submitting UI work, verify the affected route in a browser at desktop and mobile widths.

## Coding Style & Naming

Use two spaces in TypeScript/TSX and keep existing semicolon and single-quote conventions. Use PascalCase for React components and page files (`LoadingScreen.tsx`, `Roadmap.tsx`), camelCase for functions and hooks (`useOTAUpdate`), and descriptive kebab-free route paths. Prefer Tailwind utility classes for component layout and the established glass/OSD classes in `src/index.css` for shared visual patterns. Keep external links explicit with `target="_blank"` and `rel="noopener noreferrer"`.

## Testing Guidelines

No automated test framework is configured. Use `npm run build` as the primary regression check and run `git diff --check` before committing. Manually verify navigation, loading/swipe interactions, update checking, and responsive layout changes.

## Commits and Pull Requests

Use short imperative commit subjects, such as `Add ecosystem roadmap tab` or `Bump version to 1.0.8`. Keep commits focused. Pull requests should describe the visible behavior changed, list verification commands, link related issues when applicable, and include screenshots for meaningful UI changes.

## Configuration and Updates

Do not commit secrets or local environment files. Changes to `package.json` versions should be reflected in `package-lock.json` and `public/version.json`; use the provided version scripts where possible.
