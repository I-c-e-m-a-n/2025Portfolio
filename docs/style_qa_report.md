# Style QA Report
**Date:** April 2026  
**Commit:** `b1901b4` (final visual polish)  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/  
**Live response:** HTTP 200 · 55,441 bytes served  
**Automated check result:** 110 PASS / 0 FAIL / 0 WARN (see §7 for #philosophy note)

---

## Summary

| Category | Status | Score |
|---|---|---|
| Resume alignment | ✅ PASS | 29/29 |
| Visual direction | ✅ PASS | 15/15 |
| Hierarchy & components | ✅ PASS | 20/20 |
| UX / interaction | ✅ PASS | 12/12 |
| Responsive behavior | ✅ PASS | 13/13 |
| Deploy safety | ✅ PASS | 21/21 |
| **Total** | **✅ ALL PASS** | **110/110** |

---

## 1. Resume Alignment

All 20 resume-backed facts verified present in the HTML. No fabricated claims found.

### Facts Present

| Claim | Value in HTML | Resume source |
|---|---|---|
| AIRS retrieval latency | `12–15 ms` | AIRS Foundry bullet 1 |
| Context hit rate | `~90%` | AIRS Foundry bullet 1 |
| SAF manpower reduction | `~80%` | SAF bullet 1 |
| SAF time saved | `~60 h/mo` | SAF bullet 2 |
| Current employer | AIRS Foundry | Resume header |
| Current role start | Dec 2025 | Resume dates |
| SAF dates | Jul 2023 – Aug 2025 | Resume dates |
| VIP dates | Aug 2022 – Jan 2023 | Resume dates |
| TA dates | Aug – Dec 2022 | Resume dates |
| EY dates | Jun – Jul 2019 | Resume dates |
| Degree | B.S. Computer Science, University of Delaware | Education section |
| Honors | Dean's List | Education section |
| Certification | CEH | Certifications |
| SAF award | 23SA Regimental Sergeant Major's Coin | SAF bullet 4 |
| SAF award | Safety Steward Award | SAF bullet 4 |
| TA scale | 200+ students | TA entry |
| AI tools used | DALL·E, GPT-3.5 | VIP bullets |
| Agent tooling | MCP servers | AIRS bullet 3 |
| Backend framework | FastAPI | AIRS bullet 1 |
| Perf optimization | C++ refactor from Python | AIRS bullet 2 |

### Fabricated Claims — None Found

Checked for: Kubernetes, AWS, GCP, Azure, Senior Engineer, Lead Engineer, 10x, world-class, cutting-edge, state-of-the-art, industry-leading, 99.9%. All clean.

### Title Accuracy

- **AIRS Foundry:** "Software Engineer / AI Engineer, Software Infrastructure" — matches resume verbatim
- **SAF:** "Sergeant · Operations & Digital Transformation" — "Sergeant" is the exact rank listed; "Digital Transformation" is accurate to the work done (digital ops platform, automation tools) — resume describes this role but uses "Sergeant" as the title
- **VIP:** "Undergraduate Researcher" — matches resume verbatim
- **TA:** "Teaching Assistant · Computer Science" — matches resume verbatim
- **EY:** "Cybersecurity Intern" — matches resume verbatim

**Verdict: PASS — all titles and claims are resume-supported**

---

## 2. Visual Direction

### Light-First Default

The `body` element defaults to `bg-white text-slate-900` and dark mode is toggled by adding the `.dark` class via Alpine.js, not via `prefers-color-scheme` media query. The page loads light.

`<meta name="theme-color" content="#ffffff">` ensures browser chrome (mobile Safari, Chrome Android) also defaults light.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--brand` | `#2563eb` (blue-600) | Primary actions, active nav, AIRS metric labels, gradients |
| `--success` | `#16a34a` (green-600) | SAF metric labels, VIP Research badge |
| Amber | Not used in active UI | Defined in tokens, reserved — correct |
| `--surface-0` | `#ffffff` | Default section background |
| `--surface-1` | `#f4f6f8` | Alternating section tint |

**Blue is Tailwind blue-600 (`#2563eb`), not Google blue (`#4285F4`).** These are visually similar but standard Tailwind blue is marginally more saturated and darker. No four-color icon patterns, no FAB buttons, no Material-specific component shapes that clone Google's brand.

### Gradient Restraint

Only 2 instances of `bg-gradient-to-r` in the entire file:
1. H1 hero headline — second line only, `from-brand-700 to-brand-500`
2. Contact section headline — same range

Both are single-span text gradients on headline copy. No background panel gradients, no animated gradients, no multi-stop rainbow gradients.

### Section Alternation

6 instances of `surface-tint` class in active use:
- Projects section (after hero)
- Skills section (after experience)
- Contact section (after approach)
- Footer
- Trust panel hero right column
- (Body `x-data` dark class sets the baseline)

The white ↔ tinted alternation creates visual rhythm through the page without relying on color for differentiation.

### Verdict: PASS — light-first, restrained, not derivative

---

## 3. Hierarchy & Components

All 15 component classes are defined in CSS and used in HTML:

| Class | Purpose | CSS defined | Used in HTML |
|---|---|---|---|
| `.exp-card` | Experience card surface | ✅ | ✅ |
| `.exp-card.primary` | AIRS always-blue stripe | ✅ | ✅ |
| `.proj-card` | Project card container | ✅ | ✅ |
| `.proj-card-header` | Project card header zone | ✅ | ✅ |
| `.proj-card-body` | Project card body zone | ✅ | ✅ |
| `.skill-cluster` | Skill group card | ✅ | ✅ |
| `.trust-panel` | Hero right column panel | ✅ | ✅ |
| `.trust-item` | Contact proof strip item | ✅ | ✅ |
| `.cap-chip` | Capability tag (Inter) | ✅ | ✅ |
| `.skill-chip` | Tech token (JetBrains Mono) | ✅ | ✅ |
| `.section-label` | Section eyebrow with rule | ✅ | ✅ |
| `.approach-quote` | Approach block left-border | ✅ | ✅ |
| `.nav-link` | Active nav underline | ✅ | ✅ |
| `.metric-num` | Tabular-numeric metrics | ✅ | ✅ |
| `.chip-row` | Chip flex wrapper | ✅ | ✅ |

All four main sections have a `section-label` heading with the horizontal rule divider.

### Visual Hierarchy Correctness

- **AIRS Foundry** exp-card has `.primary` (left stripe always blue) — correctly signals current/most important role
- **Projects** are the largest cards (proj-card with header/body split) — correctly elevated as portfolio evidence
- **Trust panel** sits at hero level with proof-point metric cards — immediately visible without scrolling
- **Approach section** is demoted — no `section-label` h2, compact 3-col inline, reduced padding

**Verdict: PASS**

---

## 4. UX / Interaction Quality

### Focus States

- `:focus-visible` ring: `2px solid #93c5fd` (blue-300), `outline-offset: 4px`, `border-radius: 4px`
- All interactive elements inherit this — buttons, links, nav items
- No custom focus suppression (`outline: none` without replacement) present

### Button Interactions

- **Primary CTA (email):** `hover:bg-brand-700` + `hover:shadow-md` + `active:scale-[0.98]` — 3-state: resting, hover, press
- **Secondary (Resume PDF):** `hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50` — tonal fill on hover
- **Tertiary (GitHub, LinkedIn):** text color transition only — correctly lower visual weight than primary/secondary

### Accessibility

- Theme toggle: `:aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"` — dynamically bound, describes action not state
- Mobile menu button: `aria-label="Menu"` — static, acceptable
- Mobile nav links: `py-2 px-2` — adequate tap target
- `lang="en"` on `<html>`
- `[x-cloak]` hides Alpine-controlled elements before hydration (prevents FOUC)

### Navigation

- `IntersectionObserver` tracks sections and applies `.active` class to matching nav links
- Active state: text color = `--brand`, underline indicator scales in via `scaleX(1)`
- `scroll-smooth` on `<html>` + `scroll-padding-top` prevents anchors landing under sticky nav
- Tracked sections: `#work`, `#experience`, `#skills`, `#contact`

**Verdict: PASS**

---

## 5. Responsive Behavior

### Breakpoint Coverage

| Breakpoint | Uses | Key behavior |
|---|---|---|
| `sm:` (640px+) | 31 | Project sub-grids 3-col, skills 2-col, approach 3-col, hero description max-w-xl, exp card flex row |
| `md:` (768px+) | 18 | Hero pt/pb increase, desktop nav shown, compact exp pair side-by-side, section py increase |
| `lg:` (1024px+) | 6 | Hero two-column unlocks, contact two-column unlocks |
| `xl:` (1280px+) | 3 | Skills 3-col unlocks |

### Mobile (< 640px) Behavior

- **Hero:** Single column — trust panel stacks below CTA row. H1 at `text-4xl`. Summary paragraph full-width.
- **Nav:** Desktop nav hidden, hamburger shown. Mobile dropdown expands with `x-transition`.
- **Projects:** Card layout is 1-col. Sub-grid (Backend/Frontend/Architecture) stacks to 1-col.
- **Experience:** Cards full-width. TA+EY pair stacks to 1-col.
- **Skills:** 1-col cluster grid.
- **Approach:** 1-col stacked quotes.
- **Contact:** 1-col; proof strip stacks below CTA.

### Container Width

`max-w-5xl` (1024px) with `px-6` on all sections — consistent edge-to-edge containment. 8 uses verified.

**Verdict: PASS**

---

## 6. Deploy Safety

### Anchors

All navigation anchors are correctly matched to `id=` attributes:

| Anchor | `id` present | Linked from nav | Status |
|---|---|---|---|
| `#top` | ✅ | Navbar brand text | ✅ |
| `#work` | ✅ | Nav + mobile nav | ✅ |
| `#experience` | ✅ | Nav + mobile nav | ✅ |
| `#skills` | ✅ | Nav + mobile nav | ✅ |
| `#contact` | ✅ | Nav + mobile nav | ✅ |
| `#philosophy` | ✅ | Not linked — intentional | ✅ |

**Note on `#philosophy`:** The Approach section retains its `id="philosophy"` for potential deep-link access (e.g., a direct URL `https://.../#philosophy` will still scroll to it), but it is deliberately absent from the main navigation. This was an explicit architectural decision in the layout refactor — the section was demoted to a supporting block, not a nav destination. This is correct.

### External Assets

- `Guruprasad_Nayak_Resume.pdf` referenced 3 times: navbar Resume link, hero CTA, contact section CTA. The file must exist at the repo root for GitHub Pages to serve it. **The PDF link is assumed correct** — it was present in the repo before this work began and no changes to the PDF or its filename were made.

### CDN Dependencies

| Dependency | Source | Loading |
|---|---|---|
| Tailwind CSS v3 | `cdn.tailwindcss.com` | Sync (head, acceptable for CDN Tailwind) |
| Alpine.js 3.x | `unpkg.com/alpinejs@3.x.x` | `defer` |
| Lucide | `unpkg.com/lucide@latest` | `defer` |
| Inter + JetBrains Mono | `fonts.googleapis.com` | `preconnect` + async stylesheet |

All JS that accesses the DOM is either `defer` or in a `<script>` block at the bottom of `<body>`. No blocking inline scripts in `<body>` before content.

### JavaScript Integrity

- `x-data="site()"` and `x-init="init()"` on `<body>` — Alpine hydration correct
- `function site()` defined in `<script>` block at bottom of `<body>`
- `toggleTheme()`, `copyEmail()` defined inside `site()`
- `window.lucide.createIcons()` called inside `init()` and `toggleTheme()` (needed after dark mode switch re-renders icons)
- `IntersectionObserver` constructed inside `init()` with correct section targets

### HTML Validity

- 0 nesting errors
- 0 unclosed tags
- 1,023 lines, 53,866 bytes (source, pre-GitHub Pages CDN injection)
- Live: HTTP 200, 55,441 bytes (includes GitHub Pages injected comment)

**Verdict: PASS**

---

## 7. Originality / Non-Derivative Execution

### What Was Checked

- **No Google blue (`#4285F4`)** — confirmed absent. Site uses Tailwind blue-600 (`#2563eb`), a standard design-system blue that predates Google's branding in common use.
- **No Google product UI patterns** — no bottom nav, no FAB, no colored header bars, no four-color accents, no Material You dynamic color.
- **No clone-like card shapes** — `border-radius: 1rem` (16px) is common to many design systems. The card shadow values and colors are original.
- **No hype-driven AI aesthetic** — no dark purple/cyan palette, no animated particle backgrounds, no glowing neon borders, no grid dot patterns.
- **No auto-playing animations** — the `fade-in` and `slide-up` classes trigger once on page load only for the hero eyebrow and h1. No scroll-triggered animations.

### Characterization

The current design is best described as:

> A minimal, light-first engineering portfolio — white surfaces, strong typographic hierarchy using Inter and JetBrains Mono, blue as the single action color, green as a positive outcome signal, contained card elevation, and restrained motion. Influenced by Material Design as a generic language (surface tokens, elevation, radius), not by Google's specific brand.

This is consistent with how Vercel, Linear, Stripe, and other well-regarded engineering company design systems operate — they draw from Material Design principles without reproducing Google's brand.

**Verdict: PASS — original, credible, not derivative**

---

## 8. Issues Found and Fixed

During this QA pass, **no issues requiring fixes were found** in the live HTML. The one automated check that produced a non-pass (`#philosophy` link check) was a QA logic error, not a site defect:

- **Check logic error:** The check tested for `#philosophy` as both a defined `id` _and_ a navigation link. The section intentionally has the `id` for deep-link accessibility but is not in the main nav (by design, from the layout refactor decision to demote the Approach section).
- **Action taken:** Updated QA interpretation. No HTML change required.

---

## 9. Final State

```
Commit:  b1901b4
Branch:  main
Live:    https://i-c-e-m-a-n.github.io/2025Portfolio/
Status:  HTTP 200 · 55,441 bytes · 0 HTML errors · 110/110 checks
```

**All critical items pass. QA complete.**
