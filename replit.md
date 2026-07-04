# Digipuush

An AI-first digital marketing agency marketing site (Bangalore, India), built to rank on Google AND get cited by AI answer engines (ChatGPT, Perplexity, Gemini, AI Overviews) for AEO/GEO queries.

## Run & Operate

- `pnpm --filter @workspace/digipuush run dev` — run the Digipuush site (Next.js dev server)
- `pnpm --filter @workspace/digipuush run build` — production build (SSG for all content pages)
- `pnpm --filter @workspace/digipuush run typecheck` — typecheck the site
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000, currently unused by the site)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Site: Next.js 15 (App Router), React, Tailwind CSS v4
- Content: MDX via `next-mdx-remote/rsc`, frontmatter parsed with `gray-matter`
- Forms: client `ContactForm`/`LeadForm` components submitting to Netlify Forms (POST url-encoded to `/__forms.html`, detected via the static `public/__forms.html` form). No API keys/route handler.

## Where things live

- `artifacts/digipuush/app` — all routes (App Router). Dynamic routes: `services/[slug]`, `blog/[slug]`. Technical SEO: `robots.ts`, `sitemap.ts`, `public/llms.txt`.
- `artifacts/digipuush/content/services`, `content/blog` — MDX source files with frontmatter (title, description, dates, author, faqs).
- `artifacts/digipuush/lib/site.ts` — single source of truth for NAP, founder info, pricing, nav config.
- `artifacts/digipuush/lib/content.ts` — gray-matter loaders for services/blog content.
- `artifacts/digipuush/app/components` — shared UI + JSON-LD components (Header, Footer, FAQSection, ComparisonTable, PricingTable, Breadcrumbs, JsonLd, MDXContent, ContactForm, etc).

## Architecture decisions

- SSG-only rendering throughout: every content page is statically generated at build time (no client-side content rendering) because AI crawlers do not execute JS.
- Content lives in MDX with structured frontmatter rather than a CMS/DB, since this is a small, mostly-static marketing site edited by developers.
- JSON-LD is emitted per-page (LocalBusiness/Person sitewide in the layout; Service/FAQPage/Article/BreadcrumbList per content type) via a small `JsonLd` component rather than a single global schema blob, so each page's structured data matches its actual content.
- `robots.ts` explicitly allows known AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended) in addition to normal search bots, and a `public/llms.txt` file is served for LLM-oriented site summaries.

## Product

- ~20 pages: homepage, services index + 8 individual service pages, blog index + posts, comparison pages (AEO vs SEO, GEO vs SEO), local/niche landing pages (SEO company in Bangalore, ecommerce SEO), pricing, case studies, about, contact, thank-you.
- Sticky header with a services dropdown; orange-on-white/dark-navy Vercel/Linear-style visual design.
- Contact/lead forms submit to Netlify Forms then redirect to `/thank-you`. Submissions appear in the Netlify dashboard (Forms tab); enable a form notification there to be emailed each one.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Next.js 15 dynamic route `params` (and `searchParams`) are async — always `await params` in both `generateMetadata` and the page component, or you'll hit "sync-dynamic-apis" runtime errors even though the page still renders in dev.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
