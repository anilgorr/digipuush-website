---
name: Next.js 15 dynamic route params are async
description: In Next.js 15 App Router, params and searchParams for dynamic routes are Promises and must be awaited, in both the page component and generateMetadata.
---

In Next.js 15 (App Router), the `params` (and `searchParams`) prop passed to page components and `generateMetadata` for dynamic routes (e.g. `app/blog/[slug]/page.tsx`) is a `Promise`, not a plain object.

Accessing `params.slug` synchronously still "works" in dev (renders successfully) but throws a `sync-dynamic-apis` warning/error in the server logs and is not spec-compliant.

**Why:** Next.js made these APIs async starting in v15 to support future streaming/partial-rendering features. Old v14-style typing (`{ params: { slug: string } }`) silently still compiles because TS doesn't catch the missing `await`.

**How to apply:** Type dynamic route props as `{ params: Promise<{ slug: string }> }` and `await params` at the top of both the page component and `generateMetadata` before using any of its properties. Do this for every dynamic segment, including nested/catch-all routes.
