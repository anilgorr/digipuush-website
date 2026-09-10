---
name: Lighthouse audit variance
description: How to interpret local Digipuush Lighthouse results when CPU and third-party work create large outliers.
---

Run Lighthouse against an optimized production build and repeat any result that conflicts with bundle-size or task-attribution evidence. Use representative repeated results, not a single extreme TBT run.

**Why:** Local audits showed large run-to-run TBT swings, including unattributable browser work and variable OpenAI measurement-pixel execution, while the compiled bundle was unchanged.

**How to apply:** Keep device settings and URL identical, report the baseline and range or median of repeated runs, and reject a change only when regression repeats or is attributable to changed code.