# Digipuush

> ⚠️ **Form submissions are only captured on the deployed Netlify site, not in local/preview environments.** To receive an email for every submission, add a form notification in Netlify: **Site settings → Forms → Form notifications → Add notification → Email notification**.

AI-first digital marketing agency marketing site (Next.js 15, App Router, TypeScript, Tailwind CSS v4). SSG-only so AI crawlers can read every page without executing JavaScript.

## Commands

- `pnpm --filter @workspace/digipuush run dev` — run the dev server
- `pnpm --filter @workspace/digipuush run build` — production build (static generation)
- `pnpm --filter @workspace/digipuush run typecheck` — typecheck

## Content

- `content/services`, `content/blog`, `content/case-studies` — MDX with frontmatter
- `lib/site.ts` — NAP, founder info, pricing, nav (single source of truth)
- `lib/content.ts` — content loaders

## Forms

The contact and lead forms use [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — no API keys or environment variables are required.

How it works:

- `public/__forms.html` is a static file containing a hidden `contact` form with every field. Netlify's build bot scans it at deploy time to register the form. **Do not delete it** — without it Netlify won't detect the form and submissions will 404.
- The React `ContactForm` and `LeadForm` components POST url-encoded data (via `lib/submit-form.ts`) to `/__forms.html` with a matching `form-name=contact`. Netlify intercepts these POSTs and stores each submission.
- `website` is a honeypot field (declared via `netlify-honeypot="website"`); Netlify also runs its own spam filtering.

Receiving submissions:

- Every submission appears in the Netlify dashboard under **Forms → contact**.
- To be emailed each submission, add a notification: **Site settings → Forms → Form notifications → Add notification → Email notification**, and enter the recipient address.

## Deployment

Deployed to Netlify from GitHub. Build config lives in the repo-root `netlify.toml` (`pnpm --filter @workspace/digipuush run build`, publish `artifacts/digipuush/.next`, `@netlify/plugin-nextjs`). Do not add `output: 'export'` — Netlify Forms detection and the Next.js runtime rely on the standard build output.
