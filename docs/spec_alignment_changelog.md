# Spec Alignment Changelog
**Commit:** `baf53b4`  
**Date:** April 2026  
**Scope:** `index.html` only — no content changes, no structural changes  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/

---

## What changed and why

### 1. Primary color: `#2563eb` → `#1a73e8`

**Before:** Tailwind blue-600 (`#2563eb`), used as `--brand` and `brand-*` tokens  
**After:** Spec primary (`#1a73e8`), used as `--primary` and `primary-*` tokens

**Why:** `#2563eb` is standard Tailwind blue with a slightly more saturated, warmer tone. The spec calls for `#1a73e8` — a blue that reads as cleaner, more neutral, and more at home in a professional engineering context. It's also the token name from the spec (`--primary`), making the system vocabulary unambiguous.

All Tailwind usage migrated: `bg-primary`, `text-primary`, `hover:bg-primary-hover`, `hover:text-primary`, `rounded-[10px]` on buttons/CTAs.

---

### 2. Accent / secondary color: green-600 `#16a34a` → teal `#0f766e`

**Before:** `--success: #16a34a` (green) used as the secondary accent — VIP project label, SAF time-saved metric labels  
**After:** `--accent: #0f766e` (teal) as secondary accent; `--success: #137333` (darker, spec-aligned green) retained for genuine success state usage

**Why:** The spec distinguishes between accent (secondary brand color) and success (status signal). Teal (`#0f766e`) is visually distinct from the primary blue, less common in generic portfolio templates, and fits the "research / accessible AI" context — it reads as calm and technical rather than celebratory. Green is preserved for success-state-only use (`--success: #137333` per spec).

SAF metrics (manpower reduction, time saved) use teal since they are outcomes, not success signals. VIP project label uses teal since it's a contextual badge. All `text-accent` and `dark:text-accent-light` are correctly applied.

---

### 3. Page background: `#ffffff` → `#f8fafc`

**Before:** Body `bg-white text-slate-900` set via Alpine `:class`  
**After:** Body `background: var(--bg)` = `#f8fafc` in CSS; dark mode toggled via Alpine class

**Why:** Pure white page backgrounds are high-contrast, harsh on calibrated screens, and common in template portfolios. `#f8fafc` (the spec's `--bg`) is near-white with a very slight cool tint — it creates the correct separation between the page ground and card surfaces (`--surface: #ffffff`), so white cards "lift" naturally off the page without needing shadows. This is the standard approach used in Google Workspace, Notion, Linear, and similar products.

---

### 4. Card and panel radii: chips 24px → 10px, panels 16px → 20px

**Before:** `--radius-pill: 1.5rem` (24px) for chips; `--radius-lg: 1rem` (16px) for panels  
**After:** `--r-chip: 0.625rem` (10px) for chips and buttons; `--r-card: 1rem` (16px) for cards; `--r-panel: 1.25rem` (20px) for the hero trust panel

**Why:** Full-pill chips (`border-radius: 24px`) are a common aesthetic choice in flashier portfolio templates. 10px radius is more restrained and technical — it reads like UI in a professional tool, not a marketing landing page. The trust panel gets 20px (`--r-panel`) to distinguish it as a larger container surface. Cards stay at 16px. The 4px scale (8/10/16/20) is clean and intentional.

All `rounded-[10px]` applied to buttons and CTAs; `--r-chip` applied to `.skill-chip` and `.cap-chip`; `--r-panel` applied to `.trust-panel`.

---

### 5. Shadow system: heavy → thin-border-first

**Before:** Three shadow levels (`--shadow-sm/md/lg`) with relatively high opacity values; `--shadow-lg` (0 10px 20px) used on `proj-card:hover`  
**After:** Two shadow levels only — `--shadow-sm` (1px, 0.04 opacity) and `--shadow-md` (6px, 0.07 opacity); no `--shadow-lg`; proj-card hover now uses `--shadow-md` and a border color change

**Why:** The spec explicitly says "prefer thin borders over strong shadows." Heavy shadows read as Material v2 or Bootstrap — dated, heavy-handed, and not in keeping with a calm, information-first design. The current system uses borders as the primary surface delineation; shadows are additive only when hovered.

---

### 6. Hover lift: 2px → 1px max

**Before:** `translateY(-2px)` on `exp-card:hover` and `proj-card:hover`  
**After:** `translateY(-1px)` on all card hovers (spec: "hover lift at most 1px")

**Why:** 2px lift is perceptible and slightly exaggerated on dense content cards. 1px is subtle enough to feel like feedback without drawing attention away from the content.

---

### 7. H1 gradient removed → plain primary color

**Before:** `bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent` on the H1 second line  
**After:** `text-primary` — plain `#1a73e8`

**Why:** The text gradient was restrained (two shades of the same blue), but the spec says no excessive gradients and the design should feel information-first. A plain `text-primary` on the H1 second line achieves the same visual hierarchy — the blue highlights the technical descriptor — without the gradient rendering complexity. Also removes one `bg-gradient-to-r` instance.

---

### 8. Contact headline gradient removed → plain primary color

**Before:** `bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent` on the contact section span  
**After:** `text-primary`

**Why:** Same rationale as #7. The previous version had 2 text gradients total; now 0. The blue text creates enough visual emphasis on its own.

---

### 9. Tailwind color config: `brand.*` → `primary.*`, `accent.*`

**Before:** `brand: { 50, 100, 200, 300, 400, 500, 600, 700 }` in Tailwind config  
**After:** `primary: { DEFAULT, hover, soft, light }`, `accent: { DEFAULT, soft, light }`, `success`, `warning`, `danger`

**Why:** Token names should describe semantic intent, not a color. `primary` and `accent` are semantic. `brand-600` means "the 600 shade of brand" — meaningless. `primary` means "the action color." This also maps the Tailwind config directly to the spec's CSS variable naming, making the system coherent in both CSS and class usage.

---

### 10. Container width: `max-w-5xl` (1024px) → `max-w-content` (1120px)

**Before:** All section containers used `max-w-5xl` = 1024px  
**After:** All section containers use `max-w-content` = 1120px (added to Tailwind's `maxWidth` config)

**Why:** The spec says 1120px max content width. 1024px is the default Tailwind 5xl, which is tight for experience and project cards with multiple columns. 1120px gives cards more room to breathe at large desktop widths without going too wide. The difference is subtle at laptop screen sizes (1280–1440px) but meaningful on 1440px+ displays.

---

### 11. `prefers-reduced-motion` added

**Before:** No reduced-motion handling  
**After:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Spec requirement. WCAG 2.1 SC 2.3.3 (AAA) / 2.3.4. Users who have configured their OS to reduce motion (common for users with vestibular disorders) should not see animations on this page. The hero `fade-in` / `slide-up` and all card transitions are suppressed to near-instant.

---

### 12. Transition system: renamed and simplified

**Before:** `--transition-base`, `--transition-lift` (composite shorthand)  
**After:** `--t-fast: 0.15s`, `--t-base: 0.18s`, `--t-lift: border-color 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease`

**Why:** Naming convention aligned to spec's simpler vocabulary. `t-fast` for color transitions, `t-base` for border/interactive state transitions, `t-lift` (still a composite) for card hover. Slightly faster than before (0.18s vs 0.2s) — more responsive feeling.

---

### 13. Section label CSS self-contained

**Before:** `section-label` class relied on inline Tailwind classes (`text-sm text-slate-400`) alongside the CSS rule  
**After:** `section-label` CSS rule now includes `font-size: 0.75rem`, `font-weight: 600`, `letter-spacing: 0.06em`, `text-transform: uppercase`, `color: var(--text-3)` — no inline color classes needed

**Why:** Removes the coupling between the CSS rule and ad-hoc Tailwind classes. The section label is a complete, self-contained component rule. Consistency across all section labels is now guaranteed by CSS, not by remembering to add the right Tailwind classes.

---

### 14. Focus ring updated

**Before:** `outline: 2px solid var(--brand-ring)` (blue-300, `#93c5fd`)  
**After:** `outline: 2px solid var(--primary-ring)` (`#a8c7fa`)

**Why:** `#a8c7fa` is slightly lighter than `#93c5fd` but correctly matches the new primary (`#1a73e8`) — the ring should be a lighter tint of the primary, not of the old brand blue.

---

### 15. `approach-quote` hover uses `--accent`

**Before:** `.approach-quote:hover { border-left-color: var(--success); }` — a green border on hover  
**After:** `.approach-quote:hover { border-left-color: var(--accent); }` — teal border on hover

**Why:** The approach quotes are philosophical / methodology statements, not status indicators. Teal is more appropriate as the secondary accent here; green (`--success`) should only appear on positive outcome metrics. This is a small but semantically meaningful distinction.

---

### 16. Print styles updated

**Before:** `body { background: inherit }` in print (would inherit `#f8fafc`)  
**After:** `body { background: #fff !important }` — print is always white

**Why:** `#f8fafc` would print as a light grey tint on some printers, wasting ink and making the page look dirty. Print is always `#ffffff`.

---

## What was NOT changed

| Item | Reason |
|---|---|
| All factual content | Zero modifications — resume is sole source of truth |
| Section structure and layout | All layouts (hero two-col, exp-card, proj-card, skills grid) unchanged |
| Alpine.js logic | No functional changes |
| SEO / structured data | Unchanged |
| Fonts (Inter + JetBrains Mono) | Matches spec — "Inter for body, JetBrains Mono for code labels" |
| Dark mode support | All dark mode variants updated to use new token values |
| Navigation structure | Unchanged |
| Accessibility (aria-labels, focus, scroll-padding, x-cloak) | All preserved and intact |
| Responsive breakpoints | All sm/md/lg/xl breakpoints unchanged |

---

## Automated validation results

```
Spec tokens present:  29/29
Stale old tokens:      0
HTML nesting errors:   0
Unclosed tags:         0
Factual checks:       16/16
File size:            55,299 bytes (source)
Live response:        HTTP 200
```

**All checks pass. Commit `baf53b4` on `main`.**
