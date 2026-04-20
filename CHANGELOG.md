# Changelog

## [Unreleased] — Portfolio Upgrade (Apr 2026)

Full multi-pass upgrade from a generic static portfolio to a technically honest,
design-system-driven, accessible, recruiter-safe engineering portfolio.

---

### Added

**Content and structure**
- Case-study project format: Problem, Design, Hard part, Outcome per project
- Expandable `<details>`/`<summary>` technical-detail panels on all four project cards
- Truthful proof strips and artifact rows per project (verified from repos and resume)
- Inline SVG architecture diagrams (4 projects) sourced from verified local repo structure
- Research findings grid with verifiable external links (Sensify Lab, UDaily)
- Trust panel in hero with 4 verified metrics (12–15 ms, ~90%, ~80%, ~60 h/mo)
- Skip link as first focusable element
- Nav scroll progress bar (2px indicator)
- Mobile nav overlay with full focus trap, Escape close, focus return, `aria-modal`
- Section-aware `--section-accent` CSS variable driven by `IntersectionObserver`
- `aria-current="location"` on active nav link (screen reader compatible)
- `data-reveal-delay` auto-stagger system for scroll reveal
- JSON-LD structured data (`Person` schema with `alumniOf`, `knowsAbout`)
- OG image (`assets/og-image.svg`, 1200×630) with name, role, metrics, location
- `og:image:alt`, `og:image:width/height`, `twitter:image:alt`
- GitHub Actions deploy workflow (`deploy.yml`) using `actions/deploy-pages@v4`

**CSS design system**
- Full custom design system in `assets/style.css` — no framework, no runtime CSS
- CSS variables for all colour tokens (light + dark), spacing, radius, shadow, transition
- Section differentiation: `section-label::after` uses `--section-accent`; Research section gets persistent teal `border-left`
- `focus-within` card elevation for `proj-card`, `exp-card`, `skill-cluster`, `metric-card`
- Explicit `:focus-visible` rules for `btn-primary` (white/blue contrast ring), `tech-details-summary`, `nav-link`, `proof-link`
- `a.artifact-tag` linked variant with teal colour and hover background
- Contextual spacing rules eliminating all non-SVG inline styles
- `prefers-reduced-motion` coverage: global block + per-component overrides for reveal, details animation, chevron

---

### Changed

**Dependencies**
- Removed Tailwind CDN (`cdn.tailwindcss.com`) — zero utility classes remain; 350KB+ runtime eliminated
- Removed `tailwind.config` script block — all tokens now in CSS variables
- Removed CSS `@import` for fonts — replaced with `<link>` in `<head>` (faster, no render-blocking chain)
- Lucide: moved from `unpkg.com` CDN to self-hosted `assets/lucide.min.js` at pinned `v0.475.0`
- Removed `Google+Sans` from Google Fonts import (not a public font — was silently 404-ing)
- All `'Google Sans', 'Inter'` `font-family` declarations consolidated to `'Inter'`

**Accessibility**
- `will-change: transform` removed from all card base rules — now only set inside `:hover`
- `btn` gains `user-select: none`
- Section observer `rootMargin` widened: `'-20% 0px -70%'` → `'-10% 0px -55%'` (reliable on mobile)
- Reveal `translateY` reduced `12px → 8px`; transition `0.4s → 0.38s`
- `reveal.visible` clears `transition-delay: 0s` post-entry to prevent stutter on repaints

**CI**
- Replaced `jekyll-docker.yml` (wrong for a `.nojekyll` static site) with `deploy.yml` using correct Pages Actions pattern
- Deploy on PR removed (deploy on push to main only)

**Content**
- `&mdash;` em dashes removed from all user-visible text (replaced with commas)
- `antialiased` dead class removed from `<body>` (was a Tailwind utility, smoothing already in CSS)
- All inline styles removed from HTML (zero non-SVG inline styles remain)
- All Tailwind utility classes removed from HTML (design-system classes throughout)
- `no-print` class added to print `@media` rule (was referenced in HTML but undefined in CSS)

**README**
- Stack table corrected and extended
- File structure updated (includes `lucide.min.js`, `og-image.svg`, `deploy.yml`)
- Deployment instructions with Pages source setting note
- Lucide upgrade instructions
- OG image PNG generation instructions
- Design Principles section added

---

### Removed

- Tailwind CDN and config
- `@import url(...)` font loading from CSS
- `public/og-image.jpg` reference (directory never existed)
- Jekyll Docker CI workflow
- All inline `margin-*`, `color:`, `text-decoration:` styles now covered by CSS
- `antialiased` Tailwind class from `<body>`
- `style="transition-delay:..."` last inline JS-managed style (replaced with `data-reveal-delay`)
- Stale RAF retry loop in `initIcons` (no longer needed — Lucide loads synchronously)
- Double `localStorage.setItem` on every page load (now only writes on first visit)

---

### Proof added (truthful)

| Project | Proof |
|---|---|
| Web Search Service | OpenAPI at `/docs`, `/v1/health` per-provider, Docker Compose stack, SVG arch diagram |
| AIRS Multi-Service Backend | 900+ unit/integration tests, SSE streaming frontend, per-request trace records, SVG arch diagram |
| Accessible Music System | Sensify Lab profile link, UDaily March 2023 article link, pilot sessions confirmed |
| 3D Tactical Map | `shared/src/protocol.ts` Zod schemas, pnpm workspace structure, SVG arch diagram |

### Proof not added (truthful limitations)

| Item | Reason |
|---|---|
| Live demo links | No deployed instances |
| Public GitHub repos for personal projects | All private or local-only |
| Benchmark numbers for Web Search Service | No profiling data in verifiable form |
| AIRS retrieval pipeline repo or writeup | Private employer codebase |
| Screenshots or recordings | None available |
| Research paper for Sensify Lab | No paper published; UDaily and lab profile are only public artefacts |

---

### Remaining limitations

| Item | Detail |
|---|---|
| OG image format | `og-image.svg` works on LinkedIn/Discord/Slack. Twitter/X needs PNG. Generate with `rsvg-convert` and update meta tags. |
| Google Fonts CDN | Still an external request (Inter + JetBrains Mono). Self-hosting requires ~150KB WOFF2 files. |
| Lucide bundle size | 345KB UMD includes all 1400+ icons; only ~20 used. Tree-shaking requires a build step. |
| No CSP header | GitHub Pages does not support custom response headers without a proxy. |
