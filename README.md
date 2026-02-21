# xziro-lab-web

XZIRO Lab open source AI portfolio — a developer-focused site showcasing experimental AI projects.

## Stack

- **Frontend:** React 19, Vite 7, Tailwind CSS 4, Radix UI, wouter, Framer Motion
- **Backend:** Express (static + SPA fallback)
- **Package manager:** pnpm

## Setup

```bash
pnpm install
```

## Scripts

| Command   | Description                    |
| --------- | ------------------------------ |
| `pnpm dev` | Dev server (Vite + hot reload) |
| `pnpm build` | Build client + server bundle   |
| `pnpm start` | Run production server          |
| `pnpm preview` | Preview production build       |
| `pnpm check` | TypeScript check               |
| `pnpm format` | Prettier format                |

## Project structure

- `client/` — Vite + React app (pages: Home, Projects, Contributions)
- `server/` — Express server (serves static assets and SPA fallback)
- `shared/` — Shared constants and types

## License

MIT
