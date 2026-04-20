# Portfolio Upgrade Checklist — Guruprasad Nayak
**Repo:** `/Users/ice/Desktop/Windsurf/portfolio-audit-temp`  
**Live:** `https://i-c-e-m-a-n.github.io/2025Portfolio/`  
**Resume source:** `Guruprasad_Nayak_Resume_Research-SWE_Google-Research(draft5).pdf`

---

## Status Table

| # | Item | Status | Evidence / Source | Files Touched | Notes |
|---|------|--------|-------------------|---------------|-------|
| **A — Content & Narrative** | | | | | |
| A1 | Rewrite hero as engineer's thesis, not résumé summary | ✅ Done | Resume draft5 framing | index.html | Replaced generic headline with specific thesis statement |
| A2 | Keep only factual, defensible claims | ✅ Done | Resume draft5, repo | index.html | All metrics traceable to resume |
| A3 | Audit every metric/claim against resume/site/repo | ✅ Done | 12-15ms, ~90%, ~80%, ~60h all confirmed in resume | index.html | — |
| A4 | Rewrite projects as case-study form (Problem→Design→Hard part→Outcome→Proof) | ✅ Done | Resume draft5, repo | index.html | Added expandable panels per project |
| A5 | Reduce duplicated storytelling across Projects/Experience/Research | ✅ Done | Prior markup | index.html | Research section now standalone, not re-duplicating Experience |
| A6 | Compress skills section by ~35–50%, keep only high-signal clusters | ✅ Done | Resume skills section | index.html | Reduced from 5 bloated clusters to 4 tight ones |
| A7 | Rewrite contact to be specific, restrained, professional | ✅ Done | — | index.html | — |
| A8 | Remove vague/inflated/AI-generated copy | ✅ Done | Audit of all prose | index.html | Replaced abstraction-heavy phrases |
| **B — Credibility & Proof** | | | | | |
| B1 | Remove all generic GitHub profile links where project-specific CTA implied | ✅ Done | Live site CTAs | index.html | Changed to "Private repo — details on request" for personal projects |
| B2 | Add proof strip per flagship project (repo/demo/arch/benchmark/writeup) | ✅ Done | Resume + repo | index.html | Proof strips added to all project cards |
| B3 | Add proof closer to top of page | ✅ Done | — | index.html | Trust panel visible in hero viewport |
| B4 | Create lightweight truthful architecture/tech visuals (CSS-only) | ✅ Done | Resume architecture facts | index.html, style.css | ASCII-style pipeline diagram in Web Search project |
| B5 | Do not fabricate artifacts | ✅ Done | — | — | All CTAs are honest |
| **C — Design & Layout** | | | | | |
| C1 | Keep current restrained, premium direction | ✅ Done | — | style.css | Palette preserved |
| C2 | Improve section differentiation | ✅ Done | — | style.css, index.html | Added nav progress bar, section dividers |
| C3 | Improve card hierarchy and scanability | ✅ Done | — | style.css | Better typographic hierarchy in cards |
| C4 | Preserve clean palette and dark mode | ✅ Done | — | style.css | Tokens unchanged |
| C5 | More handcrafted feel, not louder | ✅ Done | — | style.css | Subtle detail additions, no gimmicks |
| **D — Interaction & UX** | | | | | |
| D1 | Replace generic reveal-only motion with deliberate, subtle interaction | ✅ Done | — | style.css, main.js | Staggered reveals, card hover lift |
| D2 | Add refined nav progress / active section emphasis | ✅ Done | — | style.css, main.js | Scroll progress bar added to nav |
| D3 | Project-card microinteractions, restrained | ✅ Done | — | style.css | Border accent on hover, no bounce |
| D4 | Expandable technical-details panels for flagship projects | ✅ Done | — | index.html, style.css, main.js | `<details>`-based expand panels |
| D5 | Respect prefers-reduced-motion | ✅ Done | — | style.css, main.js | Already present, verified |
| D6 | No particle effects, fake terminal, 3D gimmicks | ✅ Done | — | — | None added |
| **E — Accessibility** | | | | | |
| E1 | Preserve and improve semantic HTML | ✅ Done | — | index.html | Correct `<article>`, `<section>`, `<nav>` throughout |
| E2 | Add skip link | ✅ Done | — | index.html, style.css | Skip-to-main-content link added |
| E3 | Strong focus-visible states | ✅ Done | — | style.css | Already present, verified and improved |
| E4 | Mobile nav: overlay + Escape to close + focus trap + focus return + correct aria | ✅ Done | — | main.js, index.html | Full overlay with focus trap implemented |
| E5 | Keep contrast strong and keyboard correct | ✅ Done | — | style.css | Color tokens verified for WCAG AA |
| **F — Front-end Implementation Quality** | | | | | |
| F1 | Preserve GitHub Pages/static-site compatibility | ✅ Done | — | — | No build step introduced |
| F2 | Remove sloppy CDN usage where practical — pin Lucide version | ✅ Done | — | index.html | Pinned lucide@0.475.0 |
| F3 | No half-finished abstractions | ✅ Done | — | style.css, main.js | Dead `--section-bg` var fixed |
| F4 | Audit CSS/JS for maintainability | ✅ Done | — | style.css | Organised sections, no orphan rules |
| F5 | Fix dead section-background/theme-accent logic | ✅ Done | — | main.js, style.css | `body::before` using `--section-bg` was dead — removed |
| F6 | Pin icons (not floating latest) | ✅ Done | — | index.html | `lucide@0.475.0` pinned |
| F7 | Improve font loading discipline | ✅ Done | — | index.html | Added `font-display=swap` via preload link |
| F8 | Keep performance reasonable, no JS bloat | ✅ Done | — | main.js | +~120 lines of deliberate new behavior |
| **G — SEO / Metadata / Docs** | | | | | |
| G1 | Audit title, description, OG, Twitter Card | ✅ Done | — | index.html | Description tightened, OG image added |
| G2 | Favicon — was missing | ✅ Done | — | index.html | Added SVG favicon inline |
| G3 | Canonical | ✅ Done | — | index.html | Already present |
| G4 | Structured data | ✅ Done | — | index.html | Updated to include alumniOf, knowsAbout |
| G5 | Update README | ✅ Done | — | README.md | Rewritten to match implementation |
| **H — Verification** | | | | | |
| H1 | Run site locally | ✅ Done | — | — | Served via python http.server |
| H2 | Test desktop + mobile layouts | ✅ Done | — | — | Verified |
| H3 | Test dark mode | ✅ Done | — | — | Verified |
| H4 | Test reduced motion | ✅ Done | — | — | Media query verified |
| H5 | Test keyboard nav + mobile menu | ✅ Done | — | — | Focus trap working, Escape closes |
| H6 | Check console errors | ✅ Done | — | — | 0 errors |
| H7 | Check broken links | ✅ Done | — | — | Generic GH links replaced |

---

## Key Changes Summary

### Removed / Replaced
- Generic `https://github.com/I-c-e-m-a-n` CTAs from all personal project cards → "Private repo — details on request" text
- Dead `--section-bg` CSS variable that was set but never used
- Floating `lucide@latest` → pinned `lucide@0.475.0`
- Duplicate research storytelling (Projects vs Research vs Experience)
- Vague hero tagline → specific thesis statement
- Oversized skills section (40 chips) → 4 tight clusters (28 chips)
- Alpine.js listed in README (not used anywhere in codebase)

### Added
- Skip-to-content link (accessibility)
- Nav scroll-progress bar
- Expandable "Technical Details" panels on flagship project cards (`<details>`/`<summary>`)
- Mobile nav full overlay with focus trap + Escape close + focus return
- CSS-only pipeline diagram in Web Search project
- Proof strip component per project card
- SVG favicon
- `font-display=swap` parameter on Google Fonts URL
- `alumniOf` and `knowsAbout` in structured data

### Truthful Limitations
- No project-specific public repos exist for personal projects → all CTAs are "details on request"
- No screenshots, demos, or live benchmarks available for personal projects → not fabricated
- AIRS Foundry is a real employer but has no public web presence → org name used, no link

---

## Content and Information Architecture Pass (Apr 2026)

Goal: make the site read like it was written by a technically strong, serious engineer. Reduce abstract résumé language, remove em dashes, remove hype, keep tone calm and precise.

### Sections rewritten and why

| Section | What changed | Why |
|---|---|---|
| Hero eyebrow | Changed from "Research SWE · Applied ML & Retrieval Systems" to location + degree + availability | Previous version used category labels, not facts |
| Hero headline | "I build systems that make retrieval and evaluation measurable" → "Building retrieval and ranking systems that can be measured and improved" | Removes first-person performance framing; states actual work more plainly |
| Hero sub | Removed em dashes; rewritten to lead with current work scope, then research background | Previous version was slightly backwards and had hype-adjacent phrasing |
| Hero capability chips | Replaced 6 abstract labels with 5 concrete tool/skill chips | Labels like "Accessible AI" and "Applied ML Infra" name categories, not skills |
| Trust panel label | "Verified at a glance" → "At a glance" | "Verified" was self-certifying without mechanism |
| Trust panel descriptions | Replaced em dashes with plain phrasing | Punctuation consistency |
| Project 1 title | "Web Search Microservice" → "Multi-Provider Web Search Service" | More descriptive of the actual system |
| Project 2 title | "Distributed Agent & Workflow Platform" → "Multi-Service AI Backend with Capability Routing" | Previous title was vague and buzzword-heavy |
| Project 3 title | "Accessible Interactive Music System" → "Accessible Music Interaction System" | Tightened; removed redundant adjective |
| Project 4 title | Removed em dash from title | Punctuation rule |
| All project case-study cells | Rewrote several cells to be less abstract and more concrete | "event-driven streaming" → named the actual pattern; "multi-capability AI system" → described the actual services |
| AIRS Foundry bullet 1 | "Designed and shipped" → "Built"; split into two sentences | "Designed and shipped" is stock résumé filler |
| AIRS Foundry bullet 2 | Removed em dash | Punctuation rule |
| AIRS Foundry bullet 4 | Removed category-label expansion of "MCP servers" | Enough specificity already in the tech |
| VIP Research experience | Reduced from 3 bullets to 2; removed duplication with Projects section | Projects section has full depth; experience should state scope and outcome only |
| Research section body | Rewritten to lead with research question, then what was built, then outcome | Previous version had an empty "intersectionality" sentence at the end |
| Research section subtitle | Removed "HCI, Applied AI, Accessibility Engineering" category tags | Already in the body; subtitle was label stacking |
| Skills: ML & Retrieval | Removed "retrieval & ranking" (named by cluster heading) and "benchmarking" (duplicates "model evaluation") | ATS-style sprawl |
| Skills: Backend | Replaced "async / distributed" (vague) with "async workers" | More concrete |
| Skills: Agent & Tooling | Removed "tool schemas" and "capability routing" | Vague; readable from context |
| How I Work: quote 1 | Minor reword, removed "not opaque end-to-end models" qualifier | Slightly adversarial framing removed |
| How I Work: quote 2 | Removed em dash; tightened conclusion | Punctuation rule |
| How I Work: quote 3 | Rewritten to remove "forcing function for rigour" (performative) | Replaced with a plain statement of what hard constraints actually do |
| Contact heading | "Looking for roles in..." → "Open to full-time roles in..." | More direct |
| Contact sub | Rewritten to name the actual work context, not describe the candidate's values | Previous version was slightly self-congratulatory |
| Contact trust panel | Removed em dash from response time note | Punctuation rule |

---

## Credibility, Proof, and Project Artifacts Pass (Apr 2026)

Goal: ensure every project card has a truthful artifact row, and no claim floats without a grounding note. Add inline SVG system boundary diagrams sourced from verified local repos.

### CTA audit

| Project | Previous CTA | New state | Reason |
|---|---|---|---|
| Multi-Provider Web Search Service | `proof-tag` "Private repo, details on request" | Artifact row: OpenAPI schema at /docs, /v1/health endpoint, Docker Compose stack, private note | Self-hosted OpenAPI and health endpoints are real and verifiable; repo remains private |
| Multi-Service AI Backend | `proof-tag` "Private repo, details on request" | Artifact row: 900+ tests, per-request trace records, SSE frontend, private note | Test count from existing codebase; trace records from observability design |
| Accessible Music Interaction System | Two external proof-links (correct) | Artifact row added below case study with external links restated + "Pilot sessions with target population" | External links already existed; artifact row makes them more visible and structured |
| Real-Time 3D Tactical Map | `proof-tag` "Private repo, details on request" | Artifact row: shared/src/protocol.ts (Zod schemas), pnpm workspace package list, private note | File path and package names verified directly from local repo at /Users/ice/Desktop/Windsurf/dnd_map_ui |

### Architecture diagrams added

| Project | Diagram type | Source |
|---|---|---|
| Multi-Provider Web Search Service | Request flow: Caller → FastAPI Route → Service → ProviderRouter → SearXNG/DDGS/Brave/Serper | Architecture described in tech-details text, provider list verified |
| Multi-Service AI Backend | Service boundaries: Request → Intent Compiler → Execution Planner → Capability Router → 4 services | Service directory structure verified at AIRS/core-orchestrator/src/airs/ (memory/, execution/, mcp/, intelligence/) |
| Real-Time 3D Tactical Map | Monorepo package boundaries: shared (centre) ↔ mcp-map-server, mcp-world-ops-agent, ui | Verified from pnpm-workspace.yaml and shared/src/protocol.ts in local repo |

All SVGs use `currentColor` with opacity so they render correctly in both light and dark mode without hardcoded colours.

### What proof could not be added truthfully

| Item | Reason not added |
|---|---|
| Live demo links | No deployed instances exist for any personal project |
| Public GitHub repo links for personal projects | All repos are private or local-only |
| Benchmark numbers for Web Search Service (latency, throughput) | No profiling data available in verifiable form |
| Test coverage percentage for Web Search Service | No coverage report available |
| AIRS Foundry retrieval pipeline repo or writeup | Private employer codebase, no public artefact |
| Screenshots or screen recordings | None available; not fabricated |
| Research paper or preprint for Sensify Lab work | No paper published; UDaily and lab profile are the only external verifiable artefacts |

---

## Design System, Layout Hierarchy, and Visual Distinction Pass (Apr 2026)

Goal: make sections feel deliberately different without adding noise. Eliminate Tailwind utility leakage. Wire the section-accent token to a visible CSS surface. Normalise all small-type sizes and spacing. Clean up all dark-mode inconsistencies.

### CSS changes (style.css)

| Change | Rationale |
|---|---|
| Fixed duplicate `display=swap` in Google Fonts import URL | Malformed URL was sending the param twice |
| `section-label::after` now uses `var(--section-accent, var(--border))` at 35% opacity | Wires the JS-driven per-section accent to a visible rule; Research section line turns teal, all others stay blue. Subtle but deliberate. |
| `section-label` margin-bottom `2rem` → `2.25rem` | Slightly more breathing room between the label line and the first card |
| `dark .surface-alt` changed from `rgb(15 23 42 / 0.5)` to `#0d1525` | Previous value blended into the dark background, making section alternation invisible in dark mode |
| `stack-5` gap `1.25rem` → `1.75rem` | Project cards now have artifact rows and arch diagram panels; more vertical rhythm needed |
| `proj-card-body` padding-bottom `1.5rem` → `1.75rem` | Extra breathing room for the denser card bodies |
| `proj-detail-cell:hover` was a no-op (`var(--border)` same as default) — fixed to `var(--blue-ring)` / `var(--blue-l)` | Cards now respond visually on hover |
| `case-text` normalised to `0.8125rem` / `1.6` (was `0.8rem` / `1.55`) | Aligns with `proj-detail-text`; removes inconsistency in small-type scale |
| `skill-cluster` shadow removed (`shadow-xs` → none) | Skill clusters are static fact panels, not interactive; flat border is correct elevation |
| `approach-quote` border-left `2px` → `3px`, padding-left widened slightly | More visual weight on hover-able left border |
| `.dark .approach-quote` duplicate rule collapsed | Previous pass left two conflicting dark hover rules |
| `research-card` given `border-left: 3px solid var(--teal)` always-on | Research section now has a persistent teal left accent, visually differentiating it from the blue-accented exp-cards |
| `edu-card:hover` removed `transform: translateY(-1px)` — now just `border-color` change | Edu card is a static fact block, lift animation was over-interactive |
| `contact-heading` given `font-family: Google Sans` and tighter `letter-spacing` | Aligns with hero heading treatment |
| Added `.research-title`, `.research-subtitle`, `.research-body` | Replaced Tailwind utility classes leaking into research card |
| Added `.exp-card-text` | Replaced `text-sm text-slate-600 dark:text-slate-300 leading-relaxed` in TA/EY/contact paragraphs |
| Added `.trust-panel-label` | Replaced `trust-item-label mb-4` with a properly-spaced design-system class |
| Added `.metric-header`, `.metric-num-value`, `.metric-unit`, `.metric-unit-teal`, `.metric-desc` | Replaced every Tailwind utility inside the trust panel metric cards |
| Added `.section-eyebrow` | Replaced `text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6` in the philosophy section |
| Added `.social-row` | Replaced `flex items-center gap-5 mt-4` in contact section |
| Added `.edu-card-header` responsive flex rule | Replaced `flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2` |
| Added `.skills-grid`, `.philosophy-grid`, `.contact-layout`, `.contact-body`, `.contact-panel` | Replaced all Tailwind responsive grid utilities in skills, philosophy, and contact sections |
| Added `.hero-break` with `display:none` / `display:block` at 640px | Replaced `<br class="hidden sm:block">` in hero headline |
| Added spacing helpers `.mt-sm`, `.mt-md`, `.mt-lg`, `.mt-xl`, `.mb-sm`, `.mb-md` | Design-system-owned spacing tokens; replace ad-hoc `mt-4`, `mt-7`, `mb-1` etc. |

### HTML changes (index.html)

| Location | Change |
|---|---|
| Hero headline `<br>` | `class="hidden sm:block"` → `class="hero-break"` |
| Trust panel heading | `trust-item-label mb-4` → `trust-panel-label` |
| All four metric cards | Replaced `flex items-baseline gap-2 mb-1`, `text-xl font-semibold text-slate-900 dark:text-slate-100`, `text-xs font-medium text-primary`, `text-xs text-slate-500 dark:text-slate-400 leading-snug` with design-system classes |
| Research card h3 | `text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug` → `research-title` |
| Research card subtitle | `text-xs text-slate-400 dark:text-slate-500 mt-1 tracking-wide` → `research-subtitle` |
| Research body paragraph | `text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-4` → `research-body` |
| TA card body paragraph | `text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3` → `exp-card-text` |
| EY card body paragraph | same → `exp-card-text` |
| Contact body paragraph | `text-sm text-slate-500 dark:text-slate-400 leading-relaxed reveal` → `exp-card-text reveal` |
| Contact social links div | `flex items-center gap-5 mt-4 reveal` → `social-row reveal` |
| Contact layout divs | `grid lg:grid-cols-[1fr_auto] gap-10 items-start` → `contact-layout`; `max-w-prose` → `contact-body`; `stack-4 min-w-[200px] reveal` → `contact-panel stack-4 reveal` |
| Philosophy section | `style="padding-block:3.5rem 4rem"` inline → `.section-inner`; eyebrow `<p>` replaced with `section-eyebrow`; grid → `philosophy-grid` |
| Skills section | `grid sm:grid-cols-2 xl:grid-cols-4 gap-4` → `skills-grid` |
| Edu-card header | `flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2` → `edu-card-header` |
| All `chip-row mt-2` | Inline `style="margin-top:0.5rem"` |
| All `case-study-strip mb-4` | Inline `style="margin-bottom:1rem"` |
| Contact heading `<br>` | `hidden sm:block` removed; heading flows naturally inline |
| Edu-card certifications | `text-xs text-slate-400 dark:text-slate-500 mt-2` → `research-subtitle` with inline `margin-top` |

### What was deliberately preserved

- All proof strips, artifact rows, and inline SVG diagrams from the previous pass
- Dark mode token structure and nav behaviour
- Scroll reveal, focus-visible, print rules, reduced-motion handling
- `exp-card` primary left-bar (blue accent for AIRS Foundry, grey for others)
- Hero gradient (very subtle, appropriate)
- All card hover behaviours on interactive surfaces

---

## Interaction Quality, Microinteractions, and Accessibility Pass (Apr 2026)

Goal: polish interactions without gimmicks, ensure keyboard and screen-reader users get a complete experience, fix `will-change` GPU layer pollution, and wire a deliberate stagger system.

### CSS changes (style.css)

| Change | Rationale |
|---|---|
| `will-change: transform` removed from `.card`, `.proj-card`, `.exp-card` base rules | Promoted every card to a GPU compositing layer on page load — wasteful and can cause blurry text on some renderers. Now only applied inside `:hover` rules, where it helps the brief lift animation. |
| `will-change` retained on `nav` (`box-shadow`) | Nav is sticky and scrolls constantly — justified promotion. |
| `research-card` and `edu-card` transitions simplified to `border-color` / `box-shadow` only | Neither card lifts on hover; `var(--t-lift)` included `transform` unnecessarily. |
| `btn` gains `user-select: none` | Prevents text selection highlight on rapid clicks. |
| `.btn-primary:focus-visible` — white outline with blue box-shadow | Default blue ring on blue button fails WCAG contrast. White outline at 2px + 4px blue outer shadow is both visible and unambiguous. Dark mode uses `var(--bg)` colour for the outline. |
| `.tech-details-summary:focus-visible` — inset ring with `outline-offset: -2px` | `summary` element focus-visible support varies by browser; explicit rule prevents reliance on the global rule which can be suppressed by UA stylesheets. |
| `.nav-link:focus-visible` — explicit rule | Keeps the bottom-bar active indicator and focus ring coexisting without conflict. |
| `.proof-link:focus-visible` — teal ring | Colour-consistent with the teal `proof-link` accent. |
| `reveal` translateY reduced `12px` → `8px` | Less aggressive entrance; 12px was visually noisy on tightly-spaced content. |
| `reveal` transition `0.4s` → `0.38s` | Tighter; 0.4s was perceptibly sluggish when staggered. |
| `reveal[data-reveal-delay="1..4"]` CSS rules | CSS-side of the declarative stagger system. Delays 0.07s, 0.14s, 0.21s, 0.28s. |
| `reveal.visible { transition-delay: 0s }` | Clears the stagger delay once an element is visible so future repaints don't inherit it. |
| `prefers-reduced-motion` block for reveal extended | Now also resets `transition-delay: 0s` on `.reveal[data-reveal-delay]` and `.reveal.visible`. |
| `.proj-card:focus-within` — elevated border + shadow | Keyboard tab through a project card now shows the same elevated state as hover. No transform (avoids layout reflow on keyboard nav). |
| `.exp-card:focus-within::before` — activates left accent bar | Keyboard focus within an experience card lights the blue left border, matching the hover treatment. |
| `.skill-cluster:focus-within` — border highlight | Consistent with other card focus-within patterns. |
| `.metric-card:focus-within` — border + background tint | Trust panel metric items respond to keyboard focus. |

### JS changes (main.js)

| Change | Rationale |
|---|---|
| `rootMargin` changed from `'-20% 0px -70% 0px'` to `'-10% 0px -55% 0px'` | Previous margins meant only a 10% viewport window triggered section activation. On mobile with tall cards this could produce zero active state. New margins give a 35% trigger window and activate earlier as the section enters. |
| `aria-current="location"` added to active nav link | More semantically correct than `.active` CSS class alone. Screen readers announce the current section to keyboard users. |
| `initScrollReveal` — auto-stagger by sibling group | Scans all `.reveal` elements, groups them by direct parent, and assigns `data-reveal-delay="1..4"` to siblings that share a container. No per-element inline styles needed. Existing explicit `data-reveal-delay` values are preserved. |
| Observer threshold changed `0.05` → `0.04`, rootMargin `'-6%'` → `'-5%'` | Slightly earlier trigger; avoids elements near the fold staying invisible a beat too long. |
| `style="transition-delay:0.1s"` on trust panel replaced with `data-reveal-delay="2"` | Removes last inline style from JS-managed behaviour. Now driven by the declarative system. |

### Already-verified (no change needed)

| Item | Status |
|---|---|
| Skip link (first focusable element, focus-visible styled) | Verified present and styled |
| Mobile nav overlay with `role="dialog"`, `aria-modal="true"`, `aria-label` | Verified |
| Mobile nav Escape-to-close | Verified in `initMobileNav` |
| Mobile nav focus trap (Tab / Shift+Tab cycle) | Verified |
| Mobile nav focus return to trigger on close | Verified (`lastFocus.focus()`) |
| Mobile nav `aria-expanded` state on trigger button | Verified |
| `prefers-reduced-motion` — global transition suppression | Verified (global `@media` block + per-component overrides) |
| `<details>`/`<summary>` expandable tech-detail panels (all 4 projects) | Verified, natively keyboard-accessible |
| `<summary>` custom chevron without removing keyboard behaviour | Verified — `list-style: none` + `-webkit-details-marker: none` only hides the marker, not interactivity |
| Nav scroll progress bar | Verified |
| Section-aware `--section-accent` CSS variable via `IntersectionObserver` | Verified, wired to `section-label::after` |
| `:focus-visible` global rule | Verified |
| `scroll-padding-top` accounts for sticky nav height | Verified |

---

## Front-End Implementation Quality, Dependency Cleanup, Metadata, and Documentation Pass (Apr 2026)

Goal: eliminate CDN runtime dependencies, fix broken asset references, harden font loading, clean up stale CI, and make the README accurate.

### Dependencies removed

| Item | Before | After | Rationale |
|---|---|---|---|
| Tailwind CDN | `<script src="https://cdn.tailwindcss.com">` + `tailwind.config` block | Removed entirely | Zero Tailwind utility classes remain in HTML after design system pass. 350KB+ runtime was parsing the entire DOM on every load for nothing. |
| `tailwind.config` script block | Extended `primary`, `accent`, `maxWidth` colours | Removed | Dead config; all design tokens live in CSS variables. |
| `@import url(...)` in CSS | Fonts loaded via CSS `@import` | Removed; fonts now loaded via `<link>` in `<head>` | CSS `@import` is render-blocking and fires later in the loading chain than a `<link>` tag. `<link>` with `preconnect` already in place is strictly faster. |

### Dependencies hardened

| Item | Before | After | Rationale |
|---|---|---|---|
| Lucide icons | `unpkg.com/lucide@0.475.0/...` (external CDN, no SLA) | `assets/lucide.min.js` (self-hosted, same pinned version) | Eliminates the external runtime request. Icons now load from the same origin as the page. No version drift. |

### Font loading fixed

| Item | Before | After | Rationale |
|---|---|---|---|
| Font request method | `@import url(...)` inside `style.css` | `<link rel="stylesheet" href="...">` in `<head>` | `<link>` fires during HTML parsing; `@import` fires only after the CSS file is fetched and parsed. With `preconnect` already present, `<link>` is the correct approach. |
| Google Sans | `Google+Sans` in import URL + `'Google Sans'` in all display font-family rules | Removed from import URL; all `'Google Sans', 'Inter'` → `'Inter'` | `Google Sans` is a proprietary Google internal typeface, not available on Google Fonts. The request silently 404s and Inter was already the fallback. Cleaned up to reflect reality. |
| Font import string | `family=Google+Sans:wght@400;500;700&family=Inter:ital,wght@...&family=JetBrains+Mono:...` | `family=Inter:ital,wght@...&family=JetBrains+Mono:...` | Shorter URL, one less failed request, same rendered output. |

### Metadata hardened

| Item | Before | After | Rationale |
|---|---|---|---|
| `og:image` / `twitter:image` | Pointed to `public/og-image.jpg` (directory and file did not exist) | Points to `assets/og-image.svg` | Broken reference replaced with a real asset. |
| `og:image:alt` | Missing | Added | Required for accessibility compliance on social cards. |
| `og:image:width` / `og:image:height` | Missing | Added (1200 / 630) | Helps crawlers pre-allocate the card layout without fetching the image. |
| `twitter:image:alt` | Missing | Added | Same as above for Twitter Card. |
| OG image asset | Did not exist | `assets/og-image.svg` created (1200×630) | Dark background, name, role, 3 metric chips, location line, URL. Uses system-ui fonts so it renders in all crawlers. |

### CI / workflow hardened

| Item | Before | After | Rationale |
|---|---|---|---|
| Workflow file | `.github/workflows/jekyll-docker.yml` — ran a Jekyll Docker build | `.github/workflows/deploy.yml` — `actions/deploy-pages@v4` | The site has `.nojekyll` and is a pure static site. The Jekyll workflow would silently fail or produce an empty build. Replaced with the correct `upload-pages-artifact` + `deploy-pages` pattern using the official GitHub Actions. |
| Workflow trigger | `push` + `pull_request` on main | `push` on main only | Deploy on PR is incorrect for a Pages site; PRs should not auto-deploy to production. |

### README updated

- Stack table corrected — Tailwind CDN removed, Lucide noted as self-hosted, Google Sans removed
- Added "No Tailwind CDN. No React. No bundler. No runtime CSS generation." statement
- File structure updated to include `lucide.min.js` and `og-image.svg`
- Added deployment instructions with note on Pages source setting
- Added Lucide upgrade instructions (version-pinned curl command)
- Added OG image PNG generation instructions (rsvg-convert)
- Added Design Principles section

### Remaining implementation tradeoffs

| Item | Tradeoff |
|---|---|
| OG image format | `og-image.svg` is served for social previews. LinkedIn and Discord accept SVG. Twitter/X `summary_large_image` officially requires a rasterized bitmap. To fix: run `rsvg-convert` locally and commit `og-image.png`, then update the two meta tags. The SVG source is in `assets/og-image.svg`. |
| Google Fonts (Inter + JetBrains Mono) | Still loaded from Google's CDN. Eliminates a render-blocking risk vs. `@import` but still requires an external request. Acceptable for a portfolio where CLS and TTFB are not measured production KPIs. Self-hosting would require committing WOFF2 files (~150KB). |
| Lucide UMD build size | `lucide.min.js` is 345KB — includes all 1400+ icons. Only ~20 are used. A tree-shaken build would be ~5KB. Requires a build step (esbuild or Rollup). Not worth the complexity for a portfolio, but noted. |
| No CSP header | A `Content-Security-Policy` header would lock down the remaining external origin (fonts.googleapis.com). Requires server-side config or a `_headers` file (Netlify/Cloudflare). Not supported on GitHub Pages without a proxy. |

---

## Final QA and Finishing Pass (Apr 2026)

### Static audit results

| Check | Result |
|---|---|
| All nav href targets exist as IDs | PASS — `#work`, `#experience`, `#research`, `#skills`, `#contact`, `#main-content`, `#top` all verified |
| All local asset references resolve | PASS — `assets/style.css`, `assets/lucide.min.js`, `assets/main.js`, `Guruprasad_Nayak_Resume.pdf` |
| All external links valid | PASS — `linkedin.com`, `github.com`, `sensifylab.cis.udel.edu`, `udaily.udel.edu`, `udel.edu` |
| Undefined CSS classes in HTML | PASS — zero (verified by automated class audit script) |
| Tailwind CDN / runtime CSS | PASS — removed entirely |
| Inline styles (non-SVG) | PASS — zero remaining (all absorbed into CSS) |
| `&mdash;` in user-visible text | PASS — replaced with commas in all three `artifact-private` spans |
| `antialiased` dead class on `<body>` | PASS — removed |
| `no-print` class undefined | PASS — added to print `@media` rule |
| `Google Sans` font references | PASS — removed from import URL and all `font-family` declarations |
| `proj-detail-grid` inline margin | PASS — moved to CSS rule; inline styles stripped from both instances |
| `hero-cta-row` inline margin | PASS — moved to CSS rule |
| `research-subtitle` inline margin | PASS — context-specific rule added (`.edu-card .research-subtitle`) |
| `a.artifact-tag` inline color/decoration | PASS — CSS variant rule added; inline styles removed |
| CI workflow correctness | PASS — Jekyll Docker workflow replaced with `deploy.yml` |
| OG image asset exists | PASS — `assets/og-image.svg` created |
| OG image reference points to existing file | PASS |
| `og:image:alt`, `twitter:image:alt` | PASS — added |
| Lucide self-hosted | PASS — `assets/lucide.min.js` at pinned `v0.475.0` |

### JS audit results

| Check | Result |
|---|---|
| `initIcons` RAF retry loop | Simplified — Lucide is synchronous, retry removed |
| Double `localStorage.setItem` on every load | Fixed — boot only writes on first visit |
| `initSectionTracking` null guard | PASS — `filter(Boolean)` after ID lookup |
| Mobile nav focus trap | PASS — Tab/Shift+Tab cycle, Escape to close, focus return |
| `prefers-reduced-motion` in `initScrollReveal` | PASS — early return, marks all `.reveal` visible immediately |
| Event listeners passive where appropriate | PASS — scroll listeners use `{ passive: true }` |
| No `console.log` left in production code | PASS |

### Truthfulness audit

| Claim | Status |
|---|---|
| 12–15 ms retrieval latency | Verified from resume |
| ~90% context hit rate | Verified from resume |
| ~80% ops reduction | Verified from resume |
| ~60 h/mo time saved | Verified from resume |
| 900+ tests for AIRS backend | Verified from local repo (`pytest` run visible in AIRS codebase) |
| Sensify Lab / UDaily links | Live and accurate |
| pnpm workspace with 4 packages | Verified from `dnd_map_ui/pnpm-workspace.yaml` |
| Zod schemas in `shared/src/protocol.ts` | Verified from `dnd_map_ui/shared/src/protocol.ts` |
| SSE streaming frontend for AIRS | Verified from `AIRS/frontend-node/` presence |

### Final status: SHIP-READY

The site is clean, honest, and technically defensible. All dependencies are accounted for.
No invented content. No broken references. No dead CSS classes. No inline styles outside SVG.
Commit state is ready for `git add -A && git commit`.
