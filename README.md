# BOURN
**Beyond destinations.** Bali travel planning & concierge.

A travel product by **haammkaki**, developed from the original PERON prototype. BOURN helps travellers turn dates, interests, travel style and a budget into a practical trip brief.

[Explore the demo](https://trustnopeps.github.io/trustNOpeps/bourn/) · [Portfolio](https://trustnopeps.github.io/trustNOpeps/)

## What works
- Editorial homepage using the original visual assets.
- Six-step planner: When → Who → Feel → Way → Budget → Anything else.
- Your Bali result with rule-based area recommendations and a group cost breakdown.
- Budget mismatch feedback, downloadable trip brief and print-to-PDF.
- Optional WhatsApp handoff when an operator number is configured.
- Supabase auth scaffolding and database migration for a future connected deployment.

## Honest status
This is a **portfolio prototype**, not a live booking service. Costs are illustrative assumptions, not current supplier quotes. Inventory, payments, customer trip persistence and an operator dashboard are not implemented. The public demo does not collect submissions. Authentication and RLS have not been verified against a live Supabase project. Original artwork is illustrative and does not establish supplier availability.

## Run
Node.js 22.18+ (tested with Node 24).

```bash
npm ci
npm run dev
```

The public planner needs no credentials. To configure authentication, copy `.env.example` to `.env.local` and supply your own Supabase URL and publishable key. Never expose service-role keys. Review the migration before applying it to a **new** database; this work does not alter any existing database.

```bash
npm run lint
npm test
npm run build
npm run build:demo
```

`build:demo` generates `.demo-build/out` for the portfolio path. Set `DEMO_BASE_PATH` for a different deployment path. The regular build retains the server/auth application.

## Architecture
Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase SSR.

Pricing and recommendation assumptions: `lib/planner/engine.ts`. Product history: `docs/BOURN_CONTEXT.md`. Business and launch decisions: `docs/PRODUCT.md`.

All source `.env` files, build caches and bundled dependencies are excluded from Git. No original credentials are required to explore the demo.
