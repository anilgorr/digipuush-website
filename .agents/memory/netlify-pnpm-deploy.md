---
name: Netlify + pnpm workspace deploy
description: Correct netlify.toml for deploying a single Next.js app from a pnpm monorepo that uses catalog: specifiers.
---

When an artifact's `package.json` uses pnpm `catalog:` version specifiers, the Netlify build must install with pnpm from the repo root. Setting `base = "artifacts/<app>"` makes Netlify install in that subdir where there is no `pnpm-lock.yaml`, so it can fall back to npm — and `npm install` cannot resolve the `catalog:` protocol, failing the build.

**Working config (repo-root `netlify.toml`):**
```
[build]
  command = "pnpm --filter @workspace/<app> run build"
  publish = "artifacts/<app>/.next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Why:** pnpm-lock.yaml and the workspace catalog live at the repo root; only a root-level pnpm install resolves `catalog:` and workspace deps.

**How to apply:** No `base`; run the pnpm-filtered build from root, point `publish` at the nested app's `.next`, and let `@netlify/plugin-nextjs` handle the Next runtime. Do NOT use `output: 'export'` when the app has Route Handlers (e.g. a contact API). Runtime env vars (like `RESEND_API_KEY`) must be set in Netlify's env, not just Replit.
