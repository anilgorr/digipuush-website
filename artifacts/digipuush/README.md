# Digipuush

> ⚠️ **The contact form will fail in production (500 on valid submissions) until `RESEND_API_KEY` is set in Netlify → Site settings → Environment variables, followed by a redeploy.** Setting this variable in Replit has **no effect** on the Netlify deploy — it must be set in Netlify. Optionally set `CONTACT_FROM_EMAIL` once your sending domain is verified in Resend.

AI-first digital marketing agency marketing site (Next.js 15, App Router, TypeScript, Tailwind CSS v4). SSG-only so AI crawlers can read every page without executing JavaScript.

## Commands

- `pnpm --filter @workspace/digipuush run dev` — run the dev server
- `pnpm --filter @workspace/digipuush run build` — production build (static generation)
- `pnpm --filter @workspace/digipuush run typecheck` — typecheck

## Content

- `content/services`, `content/blog`, `content/case-studies` — MDX with frontmatter
- `lib/site.ts` — NAP, founder info, pricing, nav (single source of truth)
- `lib/content.ts` — content loaders

## Environment variables

The contact form (`/contact-submit`) emails leads via [Resend](https://resend.com). Copy `.env.example` to `.env.local` for local development and set these values in **Netlify → Site settings → Environment variables** for production:

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API key. Without it the contact route returns a graceful 500 and no email is sent. |
| `CONTACT_FROM_EMAIL` | No | The "from" address for lead emails. Requires a verified domain in Resend. Defaults to `Digipuush Website <onboarding@resend.dev>`. |

Notes:

- Setting `RESEND_API_KEY` only in Replit does **not** affect the deployed Netlify site — it must be set in Netlify's environment for production email to work.
- In Resend test mode (before verifying a domain), emails are only delivered to the Resend account owner's address. Verify the `digipuush.com` domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain to deliver to the real inbox.

## Deployment

Deployed to Netlify from GitHub. Build config lives in the repo-root `netlify.toml` (base `artifacts/digipuush`, `npm run build`, `@netlify/plugin-nextjs`). Do not add `output: 'export'` — the site uses a Route Handler for the contact form and relies on Netlify's Next.js runtime.
