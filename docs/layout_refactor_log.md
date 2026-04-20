# Layout Refactor Log
**Commit:** `f939fd3`  
**Date:** April 2026  
**File changed:** `index.html` only  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/

---

## 1. Sections Changed

### 1.1 Hero → Two-Column Asymmetric Layout

**Before:**  
Single-column stacked layout: eyebrow → h1 → summary → 8 cap-chips → metric grid → attribution → link row. Very tall, dense, scrolls before any content sections.

**After:**  
`grid grid-cols-1 lg:grid-cols-[1fr_340px]` — left column holds identity, right column holds a trust panel.

**Left column:**
- Eyebrow (location · role)
- H1 headline (shortened, tighter: "Backend systems & applied ML infrastructure.")
- Summary paragraph (2 lines, max-w-xl)
- 6 capability tags (reduced from 8 — trimmed `Model Evaluation` and `Observability` as they're implied by the Skills section)
- CTA row: primary email button + secondary Resume PDF button + tertiary GitHub/LinkedIn text links

**Right column — Trust Panel (`.trust-panel`):**
- "Proof points" eyebrow label
- 4 contained metric cards, each with: number, category label, and source attribution
  - `12–15 ms` — retrieval latency · AIRS Foundry
  - `~90%` — context hit rate · AIRS Foundry  
  - `~80%` — manpower reduction · Singapore Armed Forces
  - `~60 h/mo` — time saved · Singapore Armed Forces
- All 4 are directly traceable to resume; no invention
- AIRS metrics in `text-brand-600`, SAF metrics in `text-success-600` (green) for visual differentiation

**Mobile:** Right column stacks below left at `< lg` breakpoint.

---

### 1.2 Projects → Contained `proj-card` Layout

**Before:**  
`<article class="relative group">` with an absolutely positioned `<div>` accent bar (3px gradient), content offset via `pl-6 md:pl-8`. Project 2 had a faded variant. No surface containment.

**After:**  
Each project is a `.proj-card` — a white card with `border-radius: var(--radius-lg)`, `border: 1px solid var(--border-sub)`, `box-shadow: var(--shadow-sm)`. Structure:

```
.proj-card
  .proj-card-header        ← padded, bordered bottom
    category badge (text-brand-600 or text-success-600)
    h3 title
    chip-row (stack tokens)
  .proj-card-body          ← padded
    description paragraph
    3-column detail sub-grid (tinted bg-slate-50 cells)
```

- Detail sub-grid renamed: "Backend / Frontend / Architecture" for P1; "Hardware Layer / AI Integration / Research Context" for P2
- All card cells: `bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3.5` — contained, not floating
- Removes the raw absolute-positioned gradient accent bar
- Section background changed: `plain white` → `surface-tint` (alternates with hero above)

---

### 1.3 Experience → `exp-card` Per Entry

**Before:**  
`.exp-entry` — left border only (2px), `padding-left: 1.25rem`, no surface. All entries in `space-y-12`. No visual containment, very long vertical stack.

**After:**  
`.exp-card` — full white card surface with `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)`, `padding: 1.5rem 1.75rem`, and a 3px `::before` pseudo-element left stripe.

- **AIRS Foundry** card gets `.exp-card.primary` — left stripe is always `var(--brand)` (blue), not just on hover. Visually communicates this is the current/primary role.
- All other cards: left stripe is `var(--border)` (slate-200) resting, transitions to `var(--brand)` on hover.
- **TA + EY** entries: placed in a `grid md:grid-cols-2 gap-4` row — compact side-by-side on tablet/desktop. Single column on mobile. Reduces vertical scroll for the two shorter entries.
- **Education** moved from a standalone `border-t` div to its own `.exp-card` immediately below experience entries, with a small "Education" eyebrow label inside the card. Keeps it visually anchored in the experience section without taking up full section space.
- Section background: `surface-tint` → **plain white** (alternates with Projects' tint above it).
- `space-y-12` → `space-y-4` (cards provide their own separation via shadow/border).

---

### 1.4 Skills → `skill-cluster` Card Grid

**Before:**  
`grid md:grid-cols-2 gap-x-12 gap-y-8` — plain divs with a heading and chip-row each. No surface, no containment. Flat list of 5 groups. Noisy tag cloud appearance.

**After:**  
`grid sm:grid-cols-2 xl:grid-cols-3 gap-4` — each group is a `.skill-cluster` card (white surface, `border: 1px solid var(--border-sub)`, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-sm)`, padded).

Span assignments for visual balance:
- **Languages** — 1 col (6 chips, compact)
- **Applied ML / Research Engineering** — `sm:col-span-2 xl:col-span-2` (13 chips, wide)
- **Backend / Systems** — `sm:col-span-2` (13 chips, full width on sm)
- **Agent / Infrastructure** — `xl:col-span-1` (9 chips)
- **Product / Accessibility** — 1 col (5 chips)

Section background: plain white → `surface-tint` (alternates with Experience above).

---

### 1.5 Approach → Compact Three-Column, Demoted

**Before:**  
Full section with `section-label` heading ("Approach"), `max-w-2xl`, vertical stack of 3 `approach-quote` paragraphs. `py-20 md:py-28` padding. `surface-tint` background. Felt like a featured section.

**After:**  
Compact: `py-16 md:py-20` padding (reduced), no `section-label` h2 — just a tiny `text-xs uppercase tracking-widest` eyebrow ("How I work"). Three `.approach-quote` blocks in `grid sm:grid-cols-3 gap-4` — side by side on tablet/desktop, single column on mobile.

- Visual weight: reduced from a section-level landmark to a supporting paragraph cluster
- Quote text trimmed slightly (same meaning, fewer words)
- Section background: `surface-tint` → **plain white**
- No `id` nav anchor (section is not in the main nav)

---

### 1.6 Contact → Two-Column with Proof Strip

**Before:**  
Single column: section label → h2 headline → supporting text → button row → link row. `py-24 md:py-32`.

**After:**  
`grid lg:grid-cols-[1fr_auto] gap-10 items-start` — left side has the headline + CTA row + social links; right side has a small proof strip (`min-w-[220px]`) of three `.trust-item` cards:
- Location: Singapore
- Open to: Full-time SWE / Research Eng
- Focus areas: Retrieval · ML Infra · Backend

Padding reduced: `py-24 md:py-32` → `py-20 md:py-28` (matches other sections).  
Section background: plain white → `surface-tint`.

---

## 2. Hierarchy Changes

| Section | Before rank | After rank | Change |
|---|---|---|---|
| Hero | 1 — full-width headline + metrics | 1 — two-col, metric trust panel contained right | More structured; trust data is scannable not narrative |
| Projects | 2 — oversized h3 (text-2xl/3xl), open layout | 2 — contained proj-cards, h3 text-xl/2xl | Consistent containment, same visual level |
| Experience | 3 — border-only entries | 3 — elevated exp-cards, AIRS visually primary | Clear hierarchy within section |
| Skills | 4 — flat chip cloud | 4 — clustered cards | Grouped, scannable, not flat |
| Approach | 5 — featured section w/ h2 | 5 — subordinate 3-col paragraph block | Correctly demoted; supports not dominates |
| Contact | 6 — standalone CTA | 6 — two-col with proof strip | More complete, proof-anchored |

---

## 3. Mobile / Responsive Changes

| Breakpoint | Change |
|---|---|
| `< sm` (mobile) | Hero: single column (trust panel stacks below CTA). Projects: detail sub-grid stacks to 1 col. Skills: 1 col. Approach: 1 col stack. Contact: 1 col (proof strip stacks below CTA). |
| `sm` (640px+) | Skills: 2-col grid. Approach: 3-col grid. Project sub-grids: 3-col. TA+EY row: inline. |
| `lg` (1024px+) | Hero: unlocks two-column layout. Contact: unlocks two-column layout. |
| `xl` (1280px+) | Skills: 3-col grid. |

**Specific mobile improvements:**
- Hero CTA now fits on mobile without the old sprawling metric grid (metrics live in the contained trust panel which stacks neatly)
- TA + EY entries now 1-col on mobile (previously both were already 1-col but the `space-y-12` gap was wasteful)
- Education card no longer has a separate `pt-8 border-t` block — it's just another card in the flow
- Project cards: header and body padding reduces on small screens naturally via `p-3.5` inner cells (no media query needed)
- Trust items in contact stack to 1-col on mobile automatically

---

## 4. Content Blocks Visually Reduced

| Block | Before | After | Reason |
|---|---|---|---|
| Hero metrics | 3-cell grid (large `text-2xl/3xl` numbers) with full attribution line below | Moved to compact trust panel cards (right col, `text-xl`) | Metrics are proof, not headline. Right column keeps them available without dominating. |
| Approach section | Full section, `section-label` h2, prominent spacing | Compact 3-col below Skills, eyebrow only | Philosophy is supportive context, not a recruiting pitch. |
| Project h3 size | `text-2xl md:text-3xl` (first project), `text-xl md:text-2xl` (second) | Both `text-xl md:text-2xl` | Visual consistency; Projects section should feel uniform. |
| Hero capability tags | 8 tags in `gap-2` | 6 tags in `gap-1.5` (slightly tighter) | Reduced to high-signal labels only; full detail is in Skills. |
| Section padding (Approach) | `py-20 md:py-28` | `py-16 md:py-20` | Demoted section shouldn't have primary-section padding. |

---

## 5. Content Blocks Visually Elevated

| Block | Before | After | Reason |
|---|---|---|---|
| AIRS Foundry exp entry | Same visual weight as all other entries | `.exp-card.primary` — always-blue left stripe, same card size | Current role deserves immediate visual distinction. |
| Project cards | Open layout, accent bar decoration | `.proj-card` with header/body structure | Projects are portfolio evidence; they need containment to be credible. |
| Skill clusters | Flat divs | `.skill-cluster` cards with surface | Groups need to read as distinct capability areas, not one flat list. |

---

## 6. New CSS Classes Added

| Class | Purpose |
|---|---|
| `.exp-card` | Experience entry card — white surface, shadow, 3px left stripe via `::before` |
| `.exp-card.primary` | Modifier — left stripe always blue (AIRS Foundry only) |
| `.proj-card` | Project container card — white surface, shadow, hover border |
| `.proj-card-header` | Padded top zone with bottom border separator |
| `.proj-card-body` | Padded content zone |
| `.trust-item` | Small KV card for contact proof strip |
| `.skill-cluster` | Skill group container card |
| `.trust-panel` | Hero right-column tint container |

---

## 7. Section Alternation Rhythm (Updated)

```
Hero          → white  (surface-0)
Projects      → tint   (surface-1)
Experience    → white  (surface-0)
Skills        → tint   (surface-1)
Approach      → white  (surface-0)
Contact       → tint   (surface-1)
Footer        → tint   (surface-1, border-t)
```

Previous rhythm had Experience and Approach both on tint and Projects on white, creating an unbalanced pattern. Now alternates consistently from top to bottom.

---

## 8. Intentionally Left Unchanged

| Item | Reason |
|---|---|
| All factual content | Zero content invention. Resume is sole source. |
| Navbar structure | Already correct — links, theme toggle, Resume link. No hierarchy issue. |
| Footer | Already correct — minimal border-top + copyright. |
| `.section-label` rule treatment | Retained on Projects, Experience, Skills, Contact. Approach intentionally demoted to eyebrow-only. |
| `.approach-quote` CSS | Retained. Content trimmed slightly; class unchanged. |
| `.skill-chip` / `.cap-chip` CSS | Unchanged. Only their containers changed. |
| Alpine.js interactivity | Unchanged. Dark mode toggle, mobile menu, IntersectionObserver nav active. |
| SEO metadata / JSON-LD | Unchanged. |
| Lucide icon usage | Unchanged. |
| Focus ring / accessibility | Unchanged. |
| Print media query | Unchanged. |
| Animation classes (fade-in, slide-up) | Retained on hero eyebrow and h1. Not added to other sections (no dramatic animation). |

---

*Layout refactor complete. 43/43 local checks pass. Commit: `f939fd3`.*
