# Treat Website

Treat is the English-facing website for XiaDianxin. This repo now builds a
Remix + Vite marketing site that borrows the app's actual visual language:
HarmonyOS Sans, Semi Design components, indigo glass surfaces, mascot-driven
warmth, and a brighter editorial contrast inspired by https://charm.land.

## Stack

- Remix + Vite
- Semi Design
- Tailwind CSS
- Framer Motion
- Zustand
- HarmonyOS Sans
- Cloudflare Pages

## Commands

```bash
bun install
bun run dev
bun run typecheck
bun run build
bun run preview
```

## Deployment

The site is configured for Cloudflare Pages. `wrangler.toml` points Pages at
`build/client`, and `functions/[[path]].ts` provides the Pages Function entry
for Remix SSR.

Both `bun run dev` and `bun run preview` are configured for LAN testing by
default:

- `bun run dev` binds the Vite dev server to `0.0.0.0`
- `bun run preview` starts `wrangler pages dev` with `--ip 0.0.0.0`

## Project Layout

```text
app/
  entry.client.tsx
  entry.server.tsx
  root.tsx
  routes/_index.tsx
  styles/tailwind.css
functions/
  [[path]].ts
reference/
  HarmonyOS-Sans/
  images/
  icons/
src/
  Original XiaDianxin React app kept as design/product reference
```

## Notes

- The old XiaDianxin app source is still present under `src/` and excluded from
  the website build.
- `reference/` is the source of truth for fonts, icons, mascots, and the charm
  mood board used to shape the landing page.
