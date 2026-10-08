# fasahatech.com

The Fasaha Tech hub site: the front door to our research, software tools, digital services, and the Littafin Fasaha learning platform.

Built with the same stack as the learning platform — Next.js 15 (App Router), TypeScript, Tailwind CSS — and deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (must pass before merging)
npm run lint
```

No environment variables are needed.

## Where things are

| What | Where |
|---|---|
| Every link, email, section, and press item | `lib/site.ts` — edit here, every page updates |
| Pages | `app/<route>/page.tsx` |
| Coming-soon sections (Research, Tools, Services) | `app/research`, `app/tools`, `app/services` — each renders `components/ComingSoon.tsx`; replace the page body when real content exists |
| Shared components | `components/` |
| Brand colors and fonts | `tailwind.config.ts` |

## Adding content

- **A press item:** add an entry to `press` in `lib/site.ts`.
- **Turning a coming-soon page into a real one:** replace the `<ComingSoon />` in that page with your content, and set the section's `status` to `'live'` in `lib/site.ts` so the home card updates.

## Deploy

Pushes to `main` deploy to production on Vercel; pull requests get preview URLs.
