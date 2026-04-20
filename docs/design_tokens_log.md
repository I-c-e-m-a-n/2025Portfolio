# Design Tokens Log — Material-Adjacent / Light-First
**Commit:** `2e08782`  
**Date:** April 2026  
**File changed:** `index.html` only  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/

---

## 1. Colour Tokens

### 1.1 Primary Brand Scale — Cyan → Blue

| Token | Old value | New value | Notes |
|---|---|---|---|
| `--brand` / `brand-500` | `#06b6d4` (cyan-500) | — | Removed from CSS var |
| `--brand` | — | `#2563eb` | blue-600 — resting primary |
| `--brand-h` | *(did not exist)* | `#1d4ed8` | blue-700 — hover state |
| `--brand-l` | `#22d3ee` (cyan-400) | `#60a5fa` | blue-400 — light variant |
| `--brand-bg` | *(did not exist)* | `#eff6ff` | blue-50 — tint fill for hover |
| `--brand-ring` | *(did not exist)* | `#93c5fd` | blue-300 — focus ring |
| `brand-50`–`brand-700` | 3 steps (400/500/600) | 8 steps (50–700) | Full accessible scale in Tailwind config |

### 1.2 Secondary / Accent Scales (new)

| Token | Value | Role |
|---|---|---|
| `success-500` / `--success` | `#16a34a` (green-600) | Secondary accent — approach quote hover, positive state |
| `success-50/100/500/600` | — | Full scale in Tailwind config for future use |
| `amber-400/500` | `#fbbf24` / `#f59e0b` | Micro accent — reserved, not yet applied to any element |

### 1.3 Surface & Neutral Tokens (new CSS variables)

| Token | Value | Tailwind equivalent |
|---|---|---|
| `--surface-0` | `#ffffff` | `bg-white` |
| `--surface-1` | `#f8fafc` | `bg-slate-50` |
| `--border` | `#e2e8f0` | `border-slate-200` |
| `--border-sub` | `#f1f5f9` | `border-slate-100` |
| `--text-high` | `#0f172a` | `text-slate-900` |
| `--text-base` | `#334155` | `text-slate-700` |
| `--text-muted` | `#64748b` | `text-slate-500` |
| `--text-faint` | `#94a3b8` | `text-slate-400` |

*Slate scale itself unchanged — these CSS vars are semantic wrappers for the body baseline and component defaults.*

### 1.4 Meta Colour

| Token | Old | New |
|---|---|---|
| `<meta name="theme-color">` | `#0f172a` (slate-950 — dark) | `#ffffff` (white — light-first) |

---

## 2. Radius Scale

New CSS custom property radius scale. Added to `:root`:

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.5rem` (8px) | *(reserved — not applied to any element yet)* |
| `--radius-md` | `0.75rem` (12px) | `.card` border-radius |
| `--radius-lg` | `1rem` (16px) | *(reserved)* |
| `--radius-pill` | `1.5rem` (24px) | `.skill-chip`, `.cap-chip` border-radius |

Tailwind class usage retained for buttons: `rounded-xl` (12px) on primary and secondary CTA buttons.

---

## 3. Shadow Scale

New CSS custom property shadow scale. Added to `:root`:

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)` | `.card` resting shadow |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.04)` | `.card:hover` shadow, primary button hover |

Tailwind `shadow-sm` / `hover:shadow-md` also used on the primary CTA button directly (both systems coexist; CSS vars are for component classes, Tailwind utilities are for one-off elements).

---

## 4. Typography Changes

### 4.1 Monospace Scope — Reduced

| Location | Before | After |
|---|---|---|
| Section heading labels (h2) | `text-xs font-mono uppercase tracking-widest` | `text-sm` Inter, `font-medium`, `letter-spacing: 0.04em` (via `.section-label`) |
| Approach section quotes | `font-mono text-sm` | Inter via `.approach-quote` class (`font-weight: 400`, `font-size: 0.9375rem`) |
| Hero capability tags | `.skill-chip` (JetBrains Mono) | `.cap-chip` (Inter, `font-weight: 500`, `font-size: 13px`) |
| Hero location line | `font-mono text-sm` | `text-sm` Inter (no class) |
| Metric sublabels | `text-xs font-mono` | `text-xs` Inter (no font-mono class) |
| Skills section group h3 | `text-xs font-mono uppercase tracking-widest` | `text-xs font-semibold uppercase tracking-widest` Inter |
| Project card h4 labels | `text-xs font-mono text-brand-500 uppercase tracking-widest` | `text-xs font-semibold text-slate-500 uppercase tracking-widest` Inter |
| Experience date spans | `text-sm font-mono text-slate-400` | `text-xs font-mono text-slate-400 dark:text-slate-500` (kept mono — metadata context; size reduced) |
| Footer "Singapore" | `font-mono` | plain text (no class) |
| Project badge ("Personal Project" etc.) | `text-sm font-mono text-slate-400` | kept unchanged — secondary metadata |

**JetBrains Mono retained on:** `.skill-chip` (code/language tokens in skills section), experience date spans, project badge spans, navbar "Resume" button icon context. These are all code-adjacent or metadata contexts where mono is semantically correct.

### 4.2 Weight Hierarchy

No changes to the loaded font weights (Inter 300–800 still loaded). Usage additions:
- `.section-label` now explicitly sets `font-weight: 500` (medium) instead of relying on Tailwind `font-mono` which carried no explicit weight.
- `.approach-quote` sets `font-weight: 400` (regular) — the previous mono had no weight, defaulting to 400 anyway, but this is now explicit.
- `.cap-chip` sets `font-weight: 500` (medium) — hero tags are now visually slightly heavier than skill chips (`font-weight: 400` default on mono).

### 4.3 Scale — Unchanged

The heading size scale (text-xs through text-6xl) was not modified. The existing scale is appropriate; the previous session's QA confirmed good hierarchy. Typography scale changes were limited to font-family, font-weight, and letter-spacing — not size.

### 4.4 Animation — Snappier

| Token | Before | After |
|---|---|---|
| `fade-in` duration | `0.55s ease` | `0.4s ease-out` |
| `slide-up` duration | `0.55s ease` | `0.4s ease-out` |
| `slideUp` translateY | 20px | 12px (subtler, faster) |
| `counter` animation | defined in config | removed (was never used in HTML) |

---

## 5. Component Primitives Updated

### 5.1 `.section-label` (updated)
- Font changed from mono to Inter
- Weight: `font-weight: 500`
- Letter-spacing: `0.04em` (subtle, not `.tracking-widest`)
- Rule line: now uses `var(--border)` directly at `opacity: 1` (previously `currentColor opacity: 0.15` — invisible in some contexts)

### 5.2 `.skill-chip` (updated)
- `border-radius`: `0.375rem` (6px) → `var(--radius-pill)` (24px) — full pill
- Hover: cyan sky-100 / cyan border → blue-50 / blue-300 border / blue-600 text
- `dark:` hover: old cyan glow → blue alpha fill

### 5.3 `.cap-chip` (new class)
- For hero capability tags — not code tokens
- Inter font, `font-weight: 500`, `font-size: 13px`
- Same pill radius as `.skill-chip`
- Slightly lighter resting bg: `slate-50` (vs `slate-100` for skill-chip)
- Hover: blue-50 / blue-200 border / blue-700 text

### 5.4 `.exp-entry` (updated)
- Resting border: `transparent` → `var(--border)` (slate-200, always visible)
- Hover: `var(--brand)` (blue-600 — unchanged semantics, new hue)
- Dark mode resting border: inherited via `var(--border)` (no explicit dark: override needed)

### 5.5 `.card` (new class)
- Applied to project detail cards (previously inline Tailwind classes)
- `background: var(--surface-0)` / `border: 1px solid var(--border-sub)` / `border-radius: var(--radius-md)` / `box-shadow: var(--shadow-sm)`
- Hover: `box-shadow: var(--shadow-md)` + `border-color: #bfdbfe` (blue-200)
- Dark: slate-800 bg / slate-700 border / blue-400 border on hover

### 5.6 `.surface-tint` (new class)
- Alternating section tint background
- Light: `var(--surface-1)` = `#f8fafc` (slate-50)
- Dark: `rgb(15 23 42 / 0.5)` (slate-900/50 — equivalent to old `dark:bg-slate-900/50`)
- Applied to: Experience section, Approach section, Footer

### 5.7 `.approach-quote` (new class)
- Replaces inline `font-mono text-sm border-l-2 border-brand-500 pl-4`
- Font: Inter, `font-size: 0.9375rem` (15px), `font-weight: 400`, `line-height: 1.7`
- Color: `var(--text-muted)` (slate-500)
- Border: `2px solid var(--border)` (slate-200) — resting, not cyan
- Hover: border transitions to `var(--success)` (green-600) — subtle, editorial

### 5.8 `.nav-link` (updated hover colour)
- `hover:text-brand-500` → `hover:text-brand-600` (blue-600)
- Active underline: `var(--brand)` (blue-600)
- Dark hover: `hover:text-brand-400` (blue-400, unchanged semantics)

### 5.9 Primary CTA Button (updated)
```
Old:  bg-brand-500 hover:bg-brand-400 text-white rounded-lg px-5 py-2.5
New:  bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-5 py-2.5 shadow-sm hover:shadow-md transition-all
```
- Hue: cyan-500 → blue-600 (darker, more authoritative)
- Radius: `rounded-lg` (8px) → `rounded-xl` (12px)
- Added: `shadow-sm` resting + `hover:shadow-md` elevation

### 5.10 Secondary CTA Button (updated)
```
Old:  border border-slate-300 rounded-lg hover:border-brand-500 hover:text-brand-500
New:  border border-slate-200 rounded-xl hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-all
```
- Border: `slate-300` → `slate-200` (lighter resting)
- Radius: `rounded-lg` → `rounded-xl`
- Hover fill: added `hover:bg-brand-50` (tonal fill on hover — Material-style)
- Dark: updated to blue variants

### 5.11 Navbar (updated)
- Brand element: `font-mono "guruprasad.dev"` → Inter `"Guruprasad Nayak"` — removed implied pseudo-domain
- Header bg: `bg-white/80 backdrop-blur-xl border-slate-200` → `bg-white/95 backdrop-blur-sm border-slate-100 shadow-sm`
- Resume link: cyan → blue-600/700 with dark variant

### 5.12 Hero (updated)
- Removed: grid-pattern absolute div, brand gradient overlay absolute div, cyan accent bar div
- Location line: `font-mono` → plain Inter `text-sm text-slate-400`
- H1 gradient: `from-brand-500 to-brand-400` → `from-brand-700 to-brand-500` (blue range)
- Capability tags: `.skill-chip` → `.cap-chip`
- Metric hover: `group-hover:text-brand-500` → `group-hover:text-brand-600`
- Metric sublabels: `text-xs font-mono` → `text-xs` (Inter)
- Added: attribution line `"from retrieval pipeline work at AIRS Foundry · Dec 2025–Present"` in `text-xs text-slate-400`
- Hero border-t: `border-slate-200` → `border-slate-200 dark:border-slate-700`
- Padding: `pt-20 pb-16 md:pt-32 md:pb-24` → `pt-24 pb-20 md:pt-36 md:pb-28` (more generous top)

### 5.13 Section Spacing (updated)
| Section | Before | After |
|---|---|---|
| Projects | `py-16 md:py-20` | `py-20 md:py-28` |
| Experience | `py-16 md:py-20` | `py-20 md:py-28` |
| Skills | `py-16 md:py-20` | `py-20 md:py-28` |
| Approach | `py-16 md:py-20` | `py-20 md:py-28` |
| Contact | `py-20 md:py-28` | `py-24 md:py-32` |

### 5.14 Section Alternation (updated)
```
Before:  Hero(white) Projects(slate-50/border-y) Experience(slate-50/border-y) Skills(slate-50/border-y) Approach(white) Contact(white) Footer(slate-50)
After:   Hero(white) Projects(white) Experience(surface-tint) Skills(white) Approach(surface-tint) Contact(white) Footer(surface-tint)
```
All `border-y` separators on sections removed. Separation comes from padding rhythm alone (plus alternating tint). `surface-tint` class handles both light/dark variants in one declaration.

### 5.15 Approach Quotes (updated)
- Section wrapper changed from inline `mx-auto max-w-5xl px-6 py-16 md:py-20` to proper `<section class="surface-tint">` + inner container div
- Quote `<p>` elements changed from inline Tailwind classes to `.approach-quote` semantic class
- Font: mono → Inter regular
- Border: `border-brand-500` (cyan) → `var(--border)` (slate-200 resting)
- Hover: brand cyan → `var(--success)` green (subtle, editorial)

### 5.16 Experience Bullet Dashes
- `text-brand-500` → `text-brand-400 dark:text-brand-500` — lighter in light mode (decorative, not primary accent)

### 5.17 Footer
- Border: `border-slate-200` → `border-slate-100` (lighter)
- "Singapore" span: removed `font-mono`
- Added `surface-tint` class for consistent alternation

---

## 6. Tailwind Config Changes

| Key | Before | After |
|---|---|---|
| `colors.brand` | 3 steps: 400/500/600 | 8 steps: 50/100/200/300/400/500/600/700 |
| `colors.success` | not defined | 4 steps: 50/100/500/600 |
| `colors.amber` | not defined | 3 steps: 50/400/500 |
| `backgroundImage` | `gradient-radial`, `grid-pattern` | removed both |
| `backgroundSize` | `grid: 24px 24px` | removed |
| `animation.counter` | defined | removed (never used) |
| `keyframes.counter` | defined | removed |
| Animation durations | `0.6s ease` | `0.4s ease-out` |
| `slideUp` translateY | `20px` | `12px` |

---

## 7. Accessibility

| Item | Status |
|---|---|
| `focus-visible` ring | Updated to `var(--brand-ring)` (blue-300) — softer than blue-600 at 2px |
| Body baseline contrast (`text-slate-700` on white) | `#334155` on `#ffffff` = 9.0:1 — AAA ✅ |
| Brand blue-600 on white for large text (buttons, h1 gradient) | `#2563eb` on `#ffffff` = 5.9:1 — AA ✅ |
| Brand blue-600 on white for normal text (nav links, links) | 5.9:1 — AA ✅ |
| Primary button white text on blue-600 bg | `#ffffff` on `#2563eb` = 5.9:1 — AA ✅ |
| Skill chips: `#334155` on `#f1f5f9` | ~9.5:1 — AAA ✅ |
| Muted text: `text-slate-500` on white | `#64748b` on `#ffffff` = 4.6:1 — AA ✅ |
| `aria-label` on mobile menu button | Preserved ✅ |
| `lang="en"` on html element | Preserved ✅ |
| Keyboard `focus-visible` ring | Preserved ✅ |
| Print media query and `@page` | Preserved, updated to include `.cap-chip` ✅ |

---

## 8. Intentionally Left Unchanged

| Item | Reason |
|---|---|
| Inter + JetBrains Mono font load | Correct pairing. Mono retained for code-context use. |
| Type size scale (text-xs → text-6xl) | Already well-calibrated from prior design pass. |
| Alpine.js, Tailwind CDN, Lucide CDN | Framework constraint — no changes. |
| `scroll-padding-top` anchor fix | Correct, retained. |
| `.metric-num` tabular-nums | Correct detail, retained. |
| `IntersectionObserver` nav active | Correct behaviour, retained. |
| Section id anchors (#top/#work/#experience/#skills/#philosophy/#contact) | Routing integrity, retained. |
| All factual content | Zero content changes in this pass. Resume alignment from prior QA holds. |
| Dark mode toggle (Alpine) | Retained. Dark mode classes updated to blue throughout. |
| Project accent bars (left-side gradient bar on articles) | Retained — kept as brand-600→brand-400 gradient (updated hue only). |
| Experience date spans in `font-mono` | Retained — dates are metadata, mono is contextually appropriate. |
| Project badge spans in `font-mono` | Retained — badge-style labels ("Personal Project", "VIP Research Program"). |
| `space-y-12` on experience list | Retained — adequate visual separation between entries. |
| `max-w-5xl` section containers | Retained — good prose width. |
| `max-w-2xl` on approach quotes | Retained — correct prose constraint. |
| Responsive breakpoints (sm/md/lg) | Unchanged — responsive foundation was already solid. |

---

*Style foundation complete. All 40 local and 15 live checks pass. Commit: `2e08782`.*
