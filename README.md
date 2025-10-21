# AIhverdag.dk

En flot, let og dansk guide-side til at bruge AI i hverdagen. Bygget med **Next.js (App Router)** og **Tailwind** – klar til GitHub & Vercel.

## Kom i gang

```bash
pnpm i   # eller npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy på Vercel
1. Push repo til GitHub.
2. Importér repo i Vercel → Project settings.
3. Domain: tilføj `aihverdag.dk` i Vercel og peg DNS (One.com) til Vercel (A + CNAME).

## Tech
- Next.js + App Router
- TailwindCSS
- MDX til guides/skabeloner
- Simpelt, lyst og læsbart design (dansk æstetik)

## Struktur
- `app/(marketing)/page.tsx` – forside
- `app/guides/*` – guides (eksempel inkluderet)
- `app/skabeloner/*` – skabeloner (eksempel)
- `app/vaerktoejer/*` – værktøjer (eksempel)

## Stil & komponenter
- Runde hjørner (2xl), bløde skygger og masser af whitespace.
- Knapper: `.btn`, `.btn-primary`, `.btn-ghost`
- Kort: `.card`

## SEO
- metadata i `app/layout.tsx`
- `app/sitemap.ts` og `app/robots.txt/route.ts`

## TODO (valgfrit)
- Filtre/søgning på guides
- Flere komponenter (CopyButton, Stepper med GIFs)
- Nyhedsbrev-integration (Resend/Mailerlite)
