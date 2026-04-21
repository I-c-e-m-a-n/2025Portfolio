# Final Portfolio Upgrade Report

**Date:** April 2026
**Scope:** Full audit and hardening of [i-c-e-m-a-n.github.io/2025Portfolio](https://i-c-e-m-a-n.github.io/2025Portfolio/)
**Target role signal:** Google Research Software Engineer — Retrieval, ML systems, accessible AI

---

## Before vs After Summary

| Area | Before | After |
|---|---|---|
| CSS architecture | Flat, no tokens, inconsistent scale | Full custom design system: CSS variables, elevation, type scale, spacing, dark mode |
| Dark mode | Flash-of-unstyled-content on load | Inline script applies `.dark` before first paint; `no-js` fallback class |
| Font loading | Render-blocking Google Fonts `<link>` | `media="print"` onload swap; `<noscript>` fallback; eliminates SPOF |
| Icon loading | `defer` timing race — icons visible only after interaction in some cases | Lucide loaded synchronously before deferred `main.js`; `createIcons()` called once post-DOM |
| JS architecture | Fragmented, redundant `window.load` listener, non-deferred script | `defer` attribute; simplified boot; clean function boundaries; no redundant listeners |
| Hero copy | Colloquial ("keeps them honest"); weak research framing | Precise engineering language; research correctness framing explicit |
| AIRS bullets | Generic "built X" list; C++ refactor bullet missed profiling context; jargon bullet (MCP) | Profiling → measurement → C++ refactor in one bullet; benchmarking language matches JD |
| Certifications | "Available on request" appended — passive and weak | Removed; credential reads as credential |
| Contact heading | `<h2>` inside `<main>` after section `<h2>`s (wrong level); text repeated hero | Changed to `<p>`; text rewritten to not duplicate hero |
| Research opening | Essay framing ("The research question: can…") | Direct goal statement; engineering-first voice |
| Skill chips | Verbose descriptions as chip labels ("behavioral analysis tooling", "walk-forward evaluation") | Noun/tool form; `transformer internals` added (preferred JD qualification) |
| Hero proof strip | "UDaily" as a metric value — reads ambiguously | Changed to "Press" with "UDaily feature, Mar 2023" as label |
| SEO metadata | `theme-color` dark mismatched token; SVG OG image (Twitter rejects SVG); no `color-scheme` | Corrected to `#090e1a`; PNG generated at CI; `color-scheme` meta added |
| Repo hygiene | 6 internal audit docs committed; `CHANGELOG.md` committed; no `.gitignore` | All internal docs removed; `.gitignore` added; `og-image.png` excluded (CI-generated) |
| Accessibility | Hero section unlabelled; trust panel `<div>`; footer unlabelled | `aria-label` on all landmark regions; trust panel changed to `<aside>` |
| Mobile nav | `container` class on drawer inner (max-width leak); no scroll on long lists | `container` removed; `overflow-y: auto` added |
| Deploy workflow | No OG PNG generation | `librsvg2-bin` install + `rsvg-convert` step generates PNG before Pages upload |
| README | Referenced old PDF filename; included stale `docs/` in structure; inaccurate stack | Fully rewritten: accurate stack, file structure, deploy steps, Lucide upgrade path |

---

## All Major Changes

### `index.html`
- `<html class="no-js">` removed by inline script (JS-progressive enhancement)
- `<meta name="color-scheme" content="light dark">` added
- `theme-color` dark corrected: `#0b1120` → `#090e1a`
- OG/Twitter image changed from `.svg` → `.png` (Twitter/X requires rasterized PNG)
- `og:image:type` added
- Font loading changed to `media="print"` + `onload` swap pattern (non-render-blocking)
- `<noscript>` font fallback added
- Unused font weights removed (Inter 300, JetBrains Mono 600)
- `<script src="main.js" defer>` — previously non-deferred
- `<section id="top" aria-label="Introduction">`
- Trust panel: `<div>` → `<aside aria-label="Credentials">`
- `<footer aria-label="Site footer">`
- Mobile drawer inner: `container` class removed
- Hero sub-text: "keeps them honest" → precise language; research framing strengthened
- Hero proof: "UDaily" value → "Press" with clearer label
- AIRS bullet 3: merged C++ refactor into a profiling/benchmarking bullet; removed standalone "MCP servers" bullet
- Research body: essay opening → direct goal statement
- Contact heading: `<h2>` → `<p class="contact-heading">`; text rewritten
- Certifications: "Certificate available on request" removed
- Skill chips: verbose labels tightened; `transformer internals` added; `walk-forward evaluation` removed
- Research chip cluster: shorter, noun-form chips

### `assets/main.js`
- `updateThemeButton`: `'block'` → `'inline-block'` for SVG icon display
- `initTechDetails`: fixed `createIcons({nodes:[details]})` → `createIcons()` (correct Lucide UMD API)
- `initTechDetails`: added reduced-motion path (no `requestAnimationFrame`)
- `boot()`: removed redundant `window.load` listener
- Comments updated to describe deferred execution model accurately

### `assets/style.css`
- `.no-js .reveal { opacity:1; transform:none }` — visible without JS
- `.mobile-nav-inner`: `overflow-y: auto; -webkit-overflow-scrolling: touch`

### `.github/workflows/deploy.yml`
- Added `Generate og-image.png` step using `librsvg2-bin` in ubuntu runner

### Deleted Files
- `docs/portfolio_content_inventory.md`
- `docs/portfolio_rebuild_plan.md`
- `docs/portfolio_upgrade_checklist.md`
- `docs/private_repo_publication_plan.md`
- `docs/strict_qa_report.md`
- `docs/spec_alignment_changelog.md`
- `CHANGELOG.md`

### New Files
- `.gitignore`
- `docs/final_portfolio_upgrade_report.md` (this file)

### `README.md`
- Fully rewritten: accurate stack table, correct file structure, deploy steps, Lucide upgrade instructions, font swap explanation, OG PNG CI note

---

## Published Repos (Verified 200 on April 2026)

| Project | URL | Status |
|---|---|---|
| Multi-Provider Web Search Service | https://github.com/I-c-e-m-a-n/web-search-service | ✅ Public |
| BTC 24-Hour Forecaster | https://github.com/I-c-e-m-a-n/btc-24h-forecaster | ✅ Public |
| Real-Time 3D Tactical Map | https://github.com/I-c-e-m-a-n/dnd-map-ui | ✅ Public |
| Multi-Service AI Backend | Private — walkthrough available on request | — |
| Accessible Music Interaction System | Private — institutional project, external proof via Sensify Lab + UDaily | — |

---

## Proof Artifacts

| Claim | Source | Verifiable |
|---|---|---|
| 12–15 ms retrieval latency | AIRS Foundry production system (private) | On request |
| ~90% relevant-context hit rate | AIRS Foundry production system (private) | On request |
| 900+ unit and integration tests | `tests/` directory of Multi-Service AI Backend (private) | Test suite breakdown shown in UI |
| ~80% manpower reduction | SAF digital ops platform (institutional) | Resume |
| ~60 hours/month automation saving | SAF internal tooling (institutional) | Resume |
| UDaily feature coverage | https://www.udel.edu/udaily/2023/march/listening-device-music-young-children-autism/ | ✅ Live |
| Sensify Lab researcher listing | https://sensifylab.cis.udel.edu/people.html | ✅ Live |
| Feature importance CSVs (BTC forecaster) | `models/20251213_203648/importance_24h.csv` | GitHub repo |
| Circuit breaker state machine | `app/services/resilience.py` | GitHub repo |
| Zod protocol schemas | `shared/src/protocol.ts` | GitHub repo |

---

## Certification Changes

| Cert | Before | After |
|---|---|---|
| CEH (EC-Council) | Buried in credential panel; "available on request" appended | Standalone block in Experience section; clean description without passive qualifier |
| MIT Sloan AI Strategy | Same | "organizational deployment of generative AI" — updated for current relevance |

---

## Role Alignment: Google Research RSE

| JD Requirement | Portfolio Signal | Gap |
|---|---|---|
| Python or C++ ≥1yr | AIRS bullets, skills cluster, research project chips | None |
| Data structures and algorithms ≥1yr | TA role (200+ students, DS&A), education | None |
| ML concepts ≥1yr | Retrieval pipeline, LightGBM BTC forecaster, sentence-transformers | None |
| Accessible technologies (preferred) | Flagship research project; entire Research section | None |
| Prototype, profile and benchmark | AIRS bullet 3 (profiling → C++ refactor) | Minor — no published benchmark numbers |
| Transformer architecture internals | Added to skill chips | Weak — chip only, no project that exercises this directly |
| AI research in lab environment | Sensify Lab VIP program | No publication; pilot sessions only |
| AI/ML publication (preferred) | None | Cannot be fixed without new source material |

---

## Unresolved Limitations

1. **No peer-reviewed publication.** The Google Research RSE preferred qualification specifically mentions "one or more AI/ML research publication in peer reviewed research conference." The Sensify Lab project did not produce a published paper. This is the single largest gap and cannot be addressed without new source material.

2. **Primary production work (AIRS Foundry) is private.** The strongest proof — retrieval latency and context hit rate — is from a private system. Numbers are stated truthfully but cannot be independently verified by a reviewer without a call.

3. **Transformer internals are chip-level only.** The JD prefers "understanding of transformer architecture internals." The portfolio adds this to the skill cluster but has no project that directly demonstrates transformer implementation work. Would require a new project (e.g. implementing attention from scratch, fine-tuning with custom training loops, writing a custom CUDA kernel).

4. **No Singapore-specific Google Research framing.** The JD mentions "pioneering AI research in Singapore." No attempt was made to reference Singapore's AI ecosystem or local context beyond location — this would risk sounding forced without genuine content to support it.

5. **`og-image.png` not present in repo source.** It is generated at CI time. Local dev will 404 on OG previews. Acceptable but worth noting.

---

## Recommended Future Improvements

1. **Write one public technical blog post** — even a short, precise analysis of the BTC forecaster negative result (FinBERT zero importance) or the retrieval pipeline design. This creates a citable, Google-indexable proof artifact.

2. **Add a transformer fine-tuning project** — even a small, well-documented notebook (e.g. custom training loop on a public dataset with evaluation harness) would cover the internals gap.

3. **Self-host fonts** — eliminates the remaining Google Fonts network dependency. Inter and JetBrains Mono woff2 files in `assets/fonts/` with `@font-face` declarations would make the site fully offline-capable.

4. **Add `<link rel="preload">` for `style.css`** — marginal LCP improvement on cold loads.

5. **Compress the resume PDF** — currently 95 KB which is fine, but a compressed version under 80 KB would load faster over mobile connections.

6. **Add a `sitemap.xml`** — single-page site, minimal benefit, but signals completeness to crawlers.
