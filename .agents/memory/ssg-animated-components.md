---
name: Animated components on the SSG/AEO Digipuush site
description: How to add client-side animated UI (count-up tickers, marquees, testimonials) without breaking the AI-crawler/SSG goal.
---

# Animated components on the SSG/AEO site

The Digipuush site is SSG-only *because AI crawlers do not execute JS*. Decorative
animation is fine, but anything carrying **factual/marketing claims must be present
in the server-rendered HTML**.

## Rule: animated number counters render the final value in SSR
A count-up ticker (framer-motion `useSpring`) naturally renders `0` on the server and
animates to the target on the client. On this site that means a crawler with JS
disabled indexes `0+`, `0x`, `0%` instead of the real stats — an actual false-claim
regression.

**Fix applied:** the ticker's initial rendered children is the *formatted final value*
(`format(value)`), not `format(0)`. The spring still starts at 0 and animates up when
scrolled into view (brief flash for JS users only). SSR HTML always contains the real
number. Verify with `curl -s localhost:80/ | grep '40+'` etc.

**Why:** the whole point of the site is being cited correctly by AI answer engines;
shipping `0%` in static HTML directly undermines that.

## What's safe as a client component
Testimonial rotation and hero animations can be `"use client"` — core page copy,
headings, service text, and FAQ stay server-rendered, so AEO content is unaffected.
Keep marquees / aurora / bento as pure-CSS **server** components where possible.

## Gotchas
- Marquee duplicates its track N times for the loop; mark copies after the first
  `aria-hidden` so screen readers don't announce the list repeatedly.
- Client list components (e.g. AnimatedTestimonials) must guard empty arrays.
- Tailwind v4: define `--animate-*` in `@theme` (auto-generates `animate-*` utilities)
  and put `@keyframes` at top level of `globals.css`.
