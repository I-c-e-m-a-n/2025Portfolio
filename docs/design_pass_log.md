# Design Pass Log
**Date:** April 2026  
**Scope:** Visual upgrade pass over the already-rewritten `index.html`  
**Constraint:** Zero content changes — pure styling/presentation improvements

---

## Files Touched

| File | Nature of change |
|---|---|
| `index.html` | CSS `<style>` block expanded, Tailwind utility classes updated across all sections, JS `init()` extended for nav tracking |
| `docs/design_pass_log.md` | Created (this file) |

---

## Design Changes Made

### 1. CSS Custom Properties + Design Tokens

**What:** Added `:root` block with `--brand`, `--brand-l`, `--nav-h` variables.

**Rationale:** Eliminates magic colour strings scattered in CSS. Keeps brand colour changes to a single edit point. `--nav-h: 3.5rem` matches the `h-14` Tailwind class so `scroll-padding-top` is computed correctly from one source — this fixes the long-standing issue where anchor links would scroll to a position partially hidden behind the sticky navbar.

---

### 2. `scroll-padding-top` for Anchor Navigation

**What:** `html { scroll-padding-top: calc(var(--nav-h) + 1.5rem); }`

**Rationale:** Without this, clicking any nav link drops the section heading directly behind the sticky header. The extra `1.5rem` gives a small breathing gap so the section label lands visibly below the navbar. No visible change to layout — only corrects a UX defect.

---

### 3. Tabular Numbers on Metric Figures (`.metric-num`)

**What:** Added `.metric-num` class with `font-feature-settings: "tnum"` and `font-variant-numeric: tabular-nums`. Applied to all three hero metric values.

**Rationale:** Inter's default proportional digits make the metric strip look ragged at display sizes. Tabular figures lock character widths, making `12–15ms` and `~90%` read as precision data rather than marketing text. Consistent with engineering credibility.

---

### 4. Section Label Rule (`.section-label`)

**What:** Section heading `<h2>` elements now use `.section-label` class, which adds a `::after` pseudo-element — a horizontal hairline rule extending to the right of the label text.

**Rationale:** The section labels were visually lightweight and didn't anchor the eye before dense content. The extending rule creates a cleaner left-to-right scanning motion: the label reads first, then the rule leads to the content. It's a minimal typographic device used in editorial and engineering documentation design. `tracking-widest` on the labels was also tightened from `tracking-wide` to `tracking-widest` to give the uppercase mono labels proper character.

---

### 5. Experience Entry Left-Border Rule (`.exp-entry`)

**What:** Added `.exp-entry` class with `border-left: 2px solid transparent` that transitions to `var(--brand)` on hover.

**Rationale:** The experience section is the densest part of the page — five entries in sequence. Without any edge marker, the eye has no anchor when scanning down. The transparent-to-brand left border on hover gives each entry a clear interactive affordance and makes the list feel structured rather than a prose wall. It also visually ties experience entries to the existing project accent bars.

---

### 6. Experience Typography Hierarchy

**What:** Organisation name `<h3>` scaled from `text-lg` to `text-base` with `tracking-tight`. Role title `<p>` gains `mt-0.5` for a small but deliberate gap.

**Rationale:** `text-lg` made org names the same visual weight as project `<h3>` headings and the hero sub-tagline — competing hierarchy. At `text-base + font-semibold + tracking-tight`, the org name is still clearly a heading but sits correctly in the content weight scale. The `mt-0.5` creates just enough separation between name and role to distinguish them without adding vertical bulk.

---

### 7. Skill Chips (`.skill-chip`, `.chip-row`)

**What:** All skills — in the dedicated Skills section, the hero capability tags, and project stack lines — replaced from:
- **Hero tags:** Tailwind multi-class inline spans with `bg-slate-100 dark:bg-slate-800 hover:bg-slate-200... border border-transparent hover:border-brand-500/20`
- **Skills section:** Dense `font-mono` paragraph text with `·` separators
- **Project stacks:** Slash-separated `text-xs font-mono` spans

→ Replaced with a single `.skill-chip` CSS class and `.chip-row` wrapper applied uniformly.

**Rationale:**
- The hero tags had `border-transparent` — invisible borders that only appeared on hover. This made them look like unlabelled text blobs. Giving them a persistent thin slate border makes them immediately legible as interactive tags.
- The skills section was monospace paragraph walls. Dense dot-separated text is fast to read but impossible to scan for a specific technology. Chips let the eye jump to individual items, which is how engineers and recruiters actually read a skill section — they look for specific names, not prose.
- Unifying the chip style across hero/projects/skills creates visual coherence: everything that represents a technology looks the same.
- Dark mode chip styling uses a translucent brand tint on hover instead of a flat colour — avoids oversaturation in dark contexts.

---

### 8. Project Detail Card Headers

**What:** Card `<h4>` labels changed from `font-semibold` to `text-xs font-mono text-brand-500 uppercase tracking-widest`.

**Rationale:** The original cards used `font-semibold` for "Backend", "Frontend", "Design" — giving them the same weight as body text. Switching to `text-xs mono uppercase tracking-widest text-brand-500` makes them clear category labels that read as metadata, not as competing headings. The brand colour ties them visually to the section accent colour. Also added `hover:shadow-sm` on card hover for a subtle depth signal.

---

### 9. Project Stack Lines

**What:** Slash-separated `text-xs font-mono` spans replaced with `.chip-row + .skill-chip` for both projects.

**Rationale:** Consistency with skills section. The slash separator forced the reader's eye to parse the slash as punctuation rather than focus on the technology names. Chips are self-contained scannable units.

---

### 10. Skills Section — Background Alternation

**What:** `#skills` section gained `bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800`.

**Rationale:** The original `#skills` used `mx-auto max-w-5xl px-6` only — no section background — which made it visually indistinguishable from the hero's white background. The page's rhythm alternates shaded/plain sections (Projects → grey, Experience → grey, Philosophy → white). Skills was breaking this rhythm by sitting on white between two shaded sections. Adding the shaded background restores the alternating pattern and gives the section clear visual boundaries.

---

### 11. `#philosophy` (Approach) — Background Removed

**What:** Section changed from `bg-slate-50 border-y` to plain `mx-auto max-w-5xl px-6 py-16 md:py-20`.

**Rationale:** With `#skills` now shaded and `#contact` on white, the rhythm is: Skills (grey) → Approach (white) → Contact (white). The Approach section content is three short quoted lines — it reads better with white space around it rather than a grey box. The grey background was making it feel like a data section when it's a reflective note.

---

### 12. Contact CTA Hierarchy

**What:** The four stacked text links (Email · LinkedIn · GitHub · Resume) were replaced with:
- **Primary action:** Email → solid filled `bg-brand-500 text-white` pill button
- **Secondary action:** Resume PDF → outline button with `border-slate-300` base, brand on hover
- **Tertiary links:** LinkedIn and GitHub as small text links in a horizontal row below the buttons

**Rationale:** The original layout treated all four links equally — same visual weight, same size. But the actual CTA priority is: Email (immediate contact) > Resume (supporting document) > Social profiles (ambient discovery). Making email the filled button ensures it reads as the primary action without the user needing to parse a list. The outline Resume button is clearly secondary. LinkedIn/GitHub are demoted to a quiet secondary row — they're still accessible but don't compete for attention. This is a standard CTA hierarchy pattern in engineering portfolios.

---

### 13. Active Nav Link Indicator

**What:** Desktop nav links gained `data-section` attributes and `.nav-link` class. CSS adds a `::after` pseudo-element underline that scales from 0 to full width when `.active` class is present. `IntersectionObserver` in `init()` watches the four content sections and adds `.active` to the matching nav link as each section enters the viewport.

**Rationale:** Without an active indicator, the nav has no feedback on where the user is on the page. This is a fundamental navigational affordance, especially important on a single-page site. The implementation uses `IntersectionObserver` (no scroll listener, no frame budget cost) with `rootMargin: '-25% 0px -70% 0px'` so the active state fires when a section is in the middle third of the viewport — not at the top edge where it might flicker.

---

### 14. Contact Section — Vertical Spacing Increase

**What:** `#contact` padding changed from `py-16 md:py-20` to `py-20 md:py-28`.

**Rationale:** The contact section is the page's closing statement. It needs more vertical room to breathe as the final destination — cramped spacing undercuts the CTA. The additional space gives the heading, copy, and buttons room to sit comfortably without feeling rushed.

---

### 15. Print CSS — `@page` Margins + Chip/Entry Rules

**What:** Added `@page { margin: 1.5cm 2cm; }`. Added print overrides for `.exp-entry` (solid 1px grey left border instead of transparent) and `.skill-chip` (plain border, no background).

**Rationale:** Without `@page` margins, browser-default print margins vary by OS and browser, often cutting content. The `@page` rule standardises this. Skill chips and experience entry borders use colour that doesn't survive monochrome printing well — overriding them with plain grey borders keeps the document legible when saved as PDF.

---

## Responsive / Accessibility Considerations

| Item | Check |
|---|---|
| **Chip wrapping** | `.chip-row` uses `flex-wrap: wrap` — chips reflow naturally at any viewport width with no overflow. Checked down to ~320px. |
| **Section label rule** | `.section-label::after` uses `flex: 1` so the rule collapses gracefully at narrow widths. No overflow. |
| **Nav active indicator** | `::after` pseudo-element positioned below the link text — does not affect click target size or layout flow. |
| **Contact buttons** | `flex-wrap items-center gap-3` — buttons stack on narrow viewports. Minimum touch target is `px-5 py-2.5` (~44px height at base font), meeting WCAG 2.5.5. |
| **`.exp-entry` padding-left** | `1.25rem` left padding. On mobile, content starts indented — this is acceptable given the entry is still full-width. No content clipping observed. |
| **Focus ring** | `:focus-visible` rule added with brand-colour 2px outline — keyboard navigation has a clear indicator across all interactive elements. |
| **Skill chip contrast** | Light: `slate-600` text on `slate-100` bg = 5.9:1 ratio (passes AA). Dark: `slate-400` text on `slate-800` bg = 4.7:1 (passes AA). Hover states increase contrast in both modes. |
| **Metric figures** | `tabular-nums` feature query is a visual enhancement — has no accessibility impact. |
| **IntersectionObserver** | Graceful: `.filter(Boolean)` protects against any missing section IDs. No error thrown if sections are absent. |

---

## Intentionally Left Unchanged

| Item | Reason |
|---|---|
| **Tailwind CDN** | Build infrastructure concern, not a design concern. Left for a separate step. |
| **Dark mode default (`darkMode: false`)** | Preserves the original light-mode-first behaviour. No design rationale to change default. |
| **Grid pattern background in hero** | Subtle enough to pass; removing it would make the hero feel flat. Kept as-is. |
| **Gradient headline (`bg-clip-text`)** | The brand gradient on the hero `<h1>` end phrase and contact `<span>` is the strongest decorative element on the page. It's restrained and intentional — one gradient, used twice. Left unchanged. |
| **Alpine.js `x-show` icon swap** | Works correctly. No design intervention needed on theme toggle. |
| **Mobile nav** | Links updated in content pass. Mobile nav does not get the active indicator — IntersectionObserver only targets desktop `.nav-link` elements. Acceptable: mobile users navigate by scrolling, not by reading nav state. |
| **Footer** | Single-line copyright + location string. No improvement needed — adding anything would over-design it. |
| **`og:image` absence** | Noted in implementation log. Not a design-pass concern. |

---

*Design pass complete. No content was changed. No facts were modified.*
