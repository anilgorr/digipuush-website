---
name: Dev build vs bash build collision
description: Why the preview shows "Cannot find module './NNN.js'" after running a production build from bash.
---

Running `npm run build` / `next build` from a bash shell writes into the same `artifacts/<app>/.next` directory that the running dev workflow uses. This leaves the dev server's webpack runtime pointing at stale/replaced chunks, producing runtime errors like `Cannot find module './887.js'` and HTTP 500s in the preview pane, even though the code is fine.

**Why:** Next dev and `next build` share the `.next` output dir; a build swaps the chunk graph out from under the live dev server.

**How to apply:** After running any `next build` from bash for validation, restart the app's dev workflow (`restart_workflow "<slug>: web"`) before screenshotting or handing back. Prefer `typecheck` for quick validation to avoid the collision entirely; only run `build` when you specifically need to verify SSG/prerendering.
