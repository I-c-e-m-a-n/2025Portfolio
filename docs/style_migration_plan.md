# Style Migration Plan — Material-Adjacent Visual System
**Date:** April 2026  
**Repo:** https://github.com/I-c-e-m-a-n/2025Portfolio  
**Status:** Plan only — do not implement until approved

---

## 1. Current UI Audit

### 1.1 Stack
- Tailwind CSS (CDN, v3, class-mode dark)
- Alpine.js (theme toggle, mobile nav, IntersectionObserver nav active)
- Lucide icons (UMD CDN)
- Fonts: Inter (300–800) + JetBrains Mono (400/600) from Google Fonts
- Single `index.html` — no build step, pure static, GitHub Pages

### 1.2 Colour System
| Token | Value | Role |
|---|---|---|
| `--brand` / `brand-500` | `#06b6d4` (cyan-500) | Primary accent, all interactive states |
| `--brand-l` / `brand-400` | `#22d3ee` (cyan-400) | Lighter accent variant |
| `brand-600` | `#0891b2` | Hover chip text |
| `bg-white` | `#ffffff` | Hero, Approach, Contact backgrounds |
| `bg-slate-50` | `#f8fafc` | Projects, Experience, Skills, Footer |
| `bg-slate-950` | `#020617` | Dark mode body |
| Text: `slate-900/700/600/500/400` | `#0f172a` → `#94a3b8` | Content hierarchy |

**Problems identified:**
- `#06b6d4` (cyan) is developer/hacker palette. It reads as "tech portfolio template" rather than "Google-adjacent professional." Cyan has no association with Google's design language and carries overtones of dark-mode dev tooling and crypto.
- `theme-color` meta is `#0f172a` (slate-950 — near-black). This is the dark mode colour, sent to every browser regardless of user preference. On a light-first portfolio this signals the wrong identity immediately on mobile.
- 84 `brand-` class references in the HTML. Brand colour is overused as the hover/accent for nearly every interactive element simultaneously. This creates visual noise — everything glows cyan on hover.
- Dark mode is class-toggled but light mode is the default. 87 `dark:` prefixes means significant design parity was built for dark mode — that's maintenance surface for a change.

### 1.3 Typography
| Token | Size | Weight(s) | Uses |
|---|---|---|---|
| `text-6xl` | 60px | semibold | Hero h1 (lg:) |
| `text-5xl` | 48px | semibold | Hero h1 (md:) |
| `text-4xl` | 36px | semibold | Hero h1 (base) |
| `text-3xl` | 30px | semibold | Hero h1 (lg), Project h3 (md:) |
| `text-2xl` | 24px | semibold | Project h3, Contact headline, Hero metrics |
| `text-xl` | 20px | — | Sub-tagline (md:) |
| `text-lg` | 18px | — | Sub-tagline (base) — 1 use only |
| `text-base` | 16px | semibold | Experience h3, Education h3 |
| `text-sm` | 14px | various | Section labels, body, nav links |
| `text-xs` | 12px | mono | Skill chip labels, metric sublabels, section label h2 |

**Problems identified:**
- Section heading labels (`h2`) use `text-xs font-mono uppercase tracking-widest` — 12px monospace uppercase. This is a developer documentation motif, not a professional product. It signals "built from a template" and creates excessive visual distance between labels and content.
- `tracking-tighter` on the hero `h1` (-0.03em) is aggressive. At 60px it's fine but the same token is applied at mid-size breakpoints where it reads slightly cramped.
- The type scale has a large jump between `text-xs` (section labels) and `text-sm` (body). There is no `text-sm` heading to bridge label → content. The hierarchy feels abrupt.
- `font-mono` for section labels, metric sublabels, Approach quotes, and skill chips means monospace appears in at least 6 distinct contexts. In a Google-adjacent system, mono is reserved for code/tech tokens only.
- Weight range is thin: mostly `font-semibold` or unset (regular). No `font-medium` used for body subheadings. Flat weight hierarchy.

### 1.4 Surface / Section System
Section backgrounds in light mode:
```
Hero        → white + grid pattern + brand gradient overlay
Projects    → bg-slate-50 + border-y
Experience  → bg-slate-50 + border-y   ← same as above
Skills      → bg-slate-50 + border-y   ← same, third in a row
Approach    → white (no class)
Contact     → white (no class)
Footer      → bg-slate-50 + border-t
```
**Problems identified:**
- Three consecutive `bg-slate-50` sections (Projects → Experience → Skills) with only `border-y` separating them. On a light monitor these borders are nearly invisible — the page looks like one continuous grey block in the middle with no visual rhythm.
- The alternation is: white, grey, grey, grey, white, white, grey. There is no clean striped rhythm.
- No elevation or shadow is used on any section. Material's signature is subtle z-elevation to create depth — surfaces feel flat and undifferentiated.
- The grid pattern background in the Hero adds technical texture but reads as a dark-mode coding aesthetic layered over a light page. It's a mismatch: the grid pattern looks correct in dark mode but is incongruous in light mode with a 5% opacity cyan overlay on a white page.

### 1.5 Card / Component System
**Project detail cards:**
- `bg-white` + `border border-slate-200` + `rounded-lg` + `hover:border-brand-500/60 hover:shadow-sm`
- The card header labels use `text-xs font-mono text-brand-500 uppercase tracking-widest` — same monospace-uppercase-cyan pattern as section labels. Overloaded.

**Skill chips:**
- `font-family: JetBrains Mono` + `background: rgb(241 245 249)` + `border: 1px solid rgb(226 232 240)`
- The font choice (mono) signals "this is a code token." For languages and frameworks that is intentional, but for terms like "accessibility-oriented software design" or "multimodal interaction" it reads as misapplied.
- `border-radius: 0.375rem` (6px, equivalent to `rounded-md`) — fairly sharp for the target direction.

**Buttons:**
- Primary: `bg-brand-500 hover:bg-brand-400 text-white rounded-lg px-5 py-2.5` — `rounded-lg` (8px) is appropriate but cyan primary button is the boldest element on the page. Correct hierarchy but wrong hue.
- Secondary: `border border-slate-300 rounded-lg` with hover brand border — functional.

**Experience entries:**
- `border-left: 2px solid transparent` → brand on hover.
- No resting visual anchor — invisible until hovered. Requires user action to provide structure.

### 1.6 Hero Layout
The hero contains **7 visual layers**:
1. Grid pattern (absolute, opacity-40)
2. Brand gradient overlay (absolute, from-brand-500/5)
3. Cyan accent bar (w-16 h-1 gradient)
4. Monoline name/location (font-mono)
5. H1 with gradient clip text
6. Sub-tagline paragraph
7. Skill-chip capability tags
8. Metric strip (3 numbers)
9. Link row (email, GitHub, LinkedIn)

That is 9 distinct visual elements before the first section. This is dense for a Google-adjacent direction. The emphasis hierarchy is unclear — everything competes.

### 1.7 Motion
Animations defined: `fadeIn` (0.55s), `slideUp` (0.55s), `counter` (2s, defined but unused in HTML).  
Applied to hero `<p>` (fade-in class) and `<h1>` (slide-up class).  
IntersectionObserver for nav active state.  
No other motion.  
**Assessment:** Motion is already minimal — this is correct for the target direction.

### 1.8 Responsive
Breakpoints used: `sm:`, `md:`, `lg:` — all Tailwind defaults (640/768/1024px).  
Mobile nav is a hamburger with Alpine-toggled dropdown — functional.  
**Assessment:** Responsive foundation is solid. Migration will not require structural responsive changes.

### 1.9 Accessibility
- `focus-visible` ring: ✅
- `aria-label` on menu button: ✅
- `lang="en"` on html: ✅
- Colour contrast: body text `slate-600` on white = ~5.9:1 (AA). Brand cyan `#06b6d4` on white = ~2.8:1 (fails AA for normal text — OK only when used decoratively or large).
- **New concern for target palette:** must verify contrast on any new accent colour at normal text sizes.

---

## 2. Content Issues Amplified by Current Styling

The following content/styling combinations create the wrong impression and should be addressed during the style migration:

| Content | Current style | Problem | Recommendation |
|---|---|---|---|
| Section label h2 elements ("PROJECTS", "EXPERIENCE", etc.) | `text-xs font-mono uppercase tracking-widest` — 12px mono caps | Looks like a developer documentation template, not a professional portfolio. Reduces apparent seniority. | Replace with `text-sm font-medium text-slate-500` — same muted treatment but in Inter, natural case, no uppercase. |
| Approach section quotes | `font-mono text-sm border-l-2 border-brand-500` | Three short paragraphs in monospace with a cyan left border reads as "dev blog post", not engineering principle. Undermines the professional positioning. | Replace with Inter, `font-normal`, subtle left border in `slate-200` not cyan. |
| Hero capability tags | Using `skill-chip` (mono font) | Tags like "Accessible AI" or "Observability" in monospace look like shell flags, not professional capability labels. | Switch hero tags to Inter `text-sm font-medium` within the chip. Mono stays only in the dedicated Skills section. |
| Metric strip (12–15ms / ~90% / multi-GB) | Hero placement, large size | These are valid AIRS Foundry metrics. Presentation as hero-level stats implies they define the candidate. At 2–3 months of experience, leading with three numbers as primary identity anchors is slightly inflated in positioning. The metrics belong — they just need better context framing as "from production work at AIRS Foundry." | Add a one-line attribution below the metric strip: "from retrieval pipeline work at AIRS Foundry" in `text-xs text-slate-400`. |
| Gradient headline text `bg-clip-text from-brand-500` | Hero h1 | The gradient text on "ship reliably at scale" is fine in isolation but combined with the grid background, gradient overlay, accent bar, and brand chips creates a multi-cyan layer. | Keep gradient on headline (single decorative use), remove grid pattern and brand gradient overlay from hero background. |
| "guruprasad.dev" navbar brand | `font-mono text-sm` | Reads as implying ownership of a registered domain. `.dev` domain is not confirmed live or registered to this candidate. | Change display to `Guruprasad Nayak` in Inter, or `GN` monogram, without a fake TLD. |

---

## 3. Target Design Direction

**Principles:**
- White surfaces are the default. Backgrounds exist to structure, not to decorate.
- One accent colour used in exactly three places: primary CTA button, active nav indicator, key metric/data highlights. Everywhere else: slate.
- Typography does the hierarchy work. Surface colour is secondary to type weight and size.
- Rounded containment (12–16px radius on surfaces, 20px+ on chips) signals approachable rather than sharp/technical.
- Motion: entry only (once on load), never on hover.
- Section spacing rhythm: generous and consistent. Content breathes.
- Google-adjacent signals: clean white, strong contrast, restrained colour, generous whitespace, readable body, no texture.

**What to keep:**
- Inter + JetBrains Mono pairing (correct choice, just reduce mono scope)
- Chip-based skill display (scannable, correct UX)
- Section-label heading style (reduce, not eliminate)
- Metric strip (add attribution)
- Contact button hierarchy (solid primary + outline secondary)
- IntersectionObserver nav active state

**What to remove:**
- Cyan as the identity colour — replace with a professional blue
- Grid pattern background in hero
- Brand gradient overlay in hero
- Cyan accent bar in hero
- Gradient clip text on hero headline (optional — one gradient in correct direction is acceptable, but the new blue gradient is less aggressive)
- Monospace on section labels, hero tags, Approach quotes
- `theme-color` dark meta value

---

## 4. Exact Token Recommendations

### 4.1 Colour Palette

Replace the entire `brand` scale. The new primary is **Google Blue** (in spirit) — a professional medium blue that reads as credible, clean, and warm without being generic navy.

**New brand scale:**

```js
// In tailwind.config colors.brand:
brand: {
  50:  '#eff6ff',   // tint for hover backgrounds
  100: '#dbeafe',   // light chip hover bg
  200: '#bfdbfe',   // chip border hover
  400: '#60a5fa',   // lighter interactive
  500: '#3b82f6',   // primary — blue-500
  600: '#2563eb',   // hover state — blue-600
  700: '#1d4ed8',   // pressed / dark mode primary
}
```

**Rationale:** `#3b82f6` (blue-500) is the standard professional web blue. It reads as Google-adjacent (Google's primary UI blue is `#1a73e8`, close to blue-600 in Tailwind's scale). At blue-500, it's distinct from Google's exact value but in the same family. Contrast on white at 16px: ~4.6:1 (passes AA for large text, fails for small — use only on buttons and large interactive elements at this value; for body text use blue-700 `#1d4ed8` which is 7.2:1).

**Supporting neutrals (unchanged):** Continue using Tailwind `slate-*` for all text and non-accent surfaces.

**New CSS custom properties:**
```css
:root {
  --brand:     #3b82f6;   /* blue-500 */
  --brand-h:   #2563eb;   /* blue-600 — hover */
  --brand-l:   #60a5fa;   /* blue-400 — light variant */
  --brand-bg:  #eff6ff;   /* blue-50  — tint bg */
  --nav-h:     3.5rem;
  --radius-sm: 0.5rem;    /* 8px  */
  --radius-md: 0.75rem;   /* 12px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px — chips */
}
```

**Update `theme-color` meta:** Change from `#0f172a` to `#ffffff`. Light-first portfolio should surface as white on mobile browsers.

### 4.2 Typography

**Keep:**
- Inter for all UI text
- JetBrains Mono **only for**: actual code tokens, language names in skills (Python, C++, TypeScript, SQL), version numbers, the `.dev` brand mark if kept

**Change:**

| Location | Current | New |
|---|---|---|
| Section labels (h2) | `text-xs font-mono uppercase tracking-widest text-slate-500` | `text-sm font-medium text-slate-400 tracking-wide` (Inter, natural case, slightly muted — still subordinate but legible) |
| Hero location line | `font-mono text-sm text-slate-500` | `text-sm font-normal text-slate-400` (Inter) |
| Hero capability tags | `skill-chip` (mono) | `text-sm font-medium text-slate-700` inside chip (Inter) |
| Approach quotes | `font-mono text-sm` | `text-sm font-normal leading-relaxed text-slate-600` (Inter) |
| Metric sublabels | `text-xs font-mono` | `text-xs font-normal text-slate-500` (Inter) |
| Skills section labels (h3) | `text-xs font-mono uppercase tracking-widest` | `text-xs font-semibold uppercase tracking-widest text-slate-400` (Inter) |
| Project card category labels (h4) | `text-xs font-mono text-brand-500 uppercase tracking-widest` | `text-xs font-semibold text-slate-500 uppercase tracking-widest` (Inter, remove brand colour from structural labels) |

**Keep mono:** Language/framework chips in Skills section: Python, C++, FastAPI, etc. These are code tokens — mono is appropriate. Keep `font-family: JetBrains Mono` on `.skill-chip` but override to Inter on hero tags specifically via a `.cap-chip` variant or by using a separate class for hero tags.

**Font weight additions to Tailwind config:**
The current weight range is 300/400/500/600/700/800. No changes needed in the font load — just use `font-medium` (500) more in the type system for intermediate-weight headings.

**Letter spacing:**
- Hero h1: keep `tracking-tighter` at large sizes, add `md:tracking-tight` breakpoint to soften at mid sizes
- Section labels: reduce from `tracking-widest` to `tracking-wide` — slightly less template-feeling

### 4.3 Card / Surface System

**Elevation model (Material-adjacent):**

Material uses z-elevation via shadows to express hierarchy. For this portfolio the three levels are:

| Level | Use | Style |
|---|---|---|
| Level 0 | Page surface | `bg-white` — no shadow, no border |
| Level 1 | Content sections (alternate) | `bg-slate-50/60` — very slight tint, no border needed |
| Level 2 | Cards (project detail cards, skill group headers) | `bg-white rounded-xl shadow-sm border border-slate-100` |
| Level 3 | Hover / active state | `shadow-md border-blue-200` transition |

**Specific changes:**

*Project detail cards:*
```
Current:  bg-white dark:bg-slate-800/80 border border-slate-200 rounded-lg hover:border-brand-500/60 hover:shadow-sm
New:      bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-brand-200 transition-shadow
```
Rationale: Border goes lighter (`slate-100` instead of `slate-200`), radius increases to `rounded-xl` (12px — more Material-adjacent), hover uses shadow deepening rather than colour border change.

*Section containers:*
```
Current:  bg-slate-50 border-y border-slate-200 (three in a row)
New:      alternate — Projects: white; Experience: bg-slate-50/70 (no border-y, use generous py instead); Skills: white
```
Remove `border-y` on sections entirely. Section separation comes from padding rhythm (`py-24`), not from border lines. Borders are for cards, not page sections.

*Navbar:*
```
Current:  bg-white/80 backdrop-blur-xl border-b border-slate-200
New:      bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm
```
Slightly heavier white (95% opacity vs 80%), subtler blur (Material-style navbars are not frosted-glass heavy), add `shadow-sm` for clear surface elevation signal.

### 4.4 Spacing Rhythm

Current section padding: `py-16 md:py-20` (64px / 80px).
This is adequate but not generous. Material's spacing principle is that whitespace is structural — it communicates importance.

**Recommendation:**
```
Hero:       pt-24 pb-20  md:pt-36 md:pb-28   (increase top, give it room)
Sections:   py-20 md:py-28                    (increase from py-16/py-20)
Contact:    py-24 md:py-32                    (already py-20/py-28, push further)
Max width:  max-w-4xl for content columns (prose/bullets), max-w-5xl for section containers
```

Section label heading `mb`:
```
Current:  mb-10
New:      mb-8  (tighter label-to-content — remove the large gap that makes labels feel disconnected)
```

Experience entry spacing:
```
Current:  space-y-12
New:      space-y-10  (slightly tighter — entries should read as a unified list, not isolated boxes)
```

Chip row gap:
```
Current:  gap: 0.4rem
New:      gap: 0.375rem  (trivial, keep as-is — chip spacing is already good)
```

### 4.5 Button / Chip / Link Styles

**Primary CTA button:**
```
Current:  bg-brand-500 hover:bg-brand-400 text-white rounded-lg px-5 py-2.5 font-medium text-sm
New:      bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-6 py-2.5 font-medium text-sm
          shadow-sm hover:shadow-md transition-all
```
Changes: (1) Use `brand-600` (blue-600, `#2563eb`) as resting state — stronger, more authoritative than blue-500 on white. (2) Increase radius to `rounded-xl` for Material-adjacent feel. (3) Add `shadow-sm` baseline elevation on button — Material buttons have a resting shadow.

**Secondary CTA button:**
```
Current:  border border-slate-300 text-slate-700 rounded-lg hover:border-brand-500 hover:text-brand-500
New:      border border-slate-200 text-slate-600 rounded-xl hover:border-brand-400 hover:text-brand-600
          hover:bg-brand-50 transition-all
```
Change: Add `hover:bg-brand-50` tint fill on hover (light blue tint background) — a Material-style filled tonal button on hover.

**Skill chips:**
```css
/* New .skill-chip */
.skill-chip {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1.5rem;          /* ~24px — pill shape, Material chip */
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace; /* keep for code tokens */
  line-height: 1.5;
  background: #f1f5f9;            /* slate-100 */
  color: #475569;                 /* slate-600 */
  border: 1px solid #e2e8f0;      /* slate-200 */
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.skill-chip:hover {
  background: #eff6ff;            /* blue-50 */
  border-color: #93c5fd;          /* blue-300 */
  color: #2563eb;                 /* blue-600 */
}
```
Key change: `border-radius: 1.5rem` (pill shape). Material chips are full-pill. This is the single most recognisable Material chip pattern and it is also friendlier/softer. Current `0.375rem` (6px) is too sharp for the target direction.

**New `.cap-chip` class for hero tags (Inter, not mono):**
```css
.cap-chip {
  display: inline-block;
  padding: 0.25rem 0.875rem;
  border-radius: 1.5rem;
  font-size: 0.8125rem;           /* 13px — between xs and sm */
  font-family: Inter, system-ui, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  background: #f8fafc;            /* slate-50 */
  color: #334155;                 /* slate-700 */
  border: 1px solid #e2e8f0;      /* slate-200 */
}
.cap-chip:hover {
  background: #eff6ff;            /* blue-50 */
  border-color: #bfdbfe;          /* blue-200 */
  color: #1d4ed8;                 /* blue-700 */
}
```
Hero capability tags use `.cap-chip` instead of `.skill-chip`. Same pill shape, Inter font, slightly larger size to work at hero scale.

**Nav links:**
```
Current:  hover:text-brand-500 (.nav-link::after brand underline)
New:      hover:text-brand-600 (.nav-link::after brand-600 underline)
```

**Experience entry rule:**
```
Current:  border-left: 2px solid transparent → var(--brand) on hover
New:      border-left: 2px solid #e2e8f0 (slate-200 — always visible, subtle)
          hover: border-left-color: var(--brand) (still interactive)
```
Rationale: A resting border gives visual structure even without hover. This also removes the requirement for user action to see the entry boundary. A `slate-200` resting left-border is a common pattern in Material-adjacent content lists.

**Approach section quote border:**
```
Current:  border-l-2 border-brand-500 pl-4 font-mono
New:      border-l-2 border-slate-200 pl-4 font-normal (Inter)
          hover:border-slate-400 transition-colors
```
Remove brand colour from the quote border. Restrained, editorial — the kind of quote treatment used in Google blog posts.

### 4.6 Hero Layout

Remove the following elements:
1. **Grid pattern background** (`bg-grid-pattern bg-grid opacity-40`) — remove entirely. It is a dark-mode aesthetic pattern that does not belong on a white professional page.
2. **Brand gradient overlay** (`bg-gradient-to-br from-brand-500/5`) — remove entirely. On light mode this is nearly invisible noise. On the new blue palette it would be blue tinting white, which is off-brand for clean white surfaces.
3. **Cyan accent bar** (`w-16 h-1 bg-gradient-to-r from-brand-500 to-brand-400 mb-8`) — remove. The bar served to anchor the cyan brand. The new system doesn't use a single brand bar to introduce the page.

Add:
- More top padding (`pt-24 md:pt-36`) — let the hero breathe as a primary surface
- Attribution line below metric strip: `from production work at AIRS Foundry — Dec 2025–Present` in `text-xs text-slate-400` — adds context without inflating implied scope.

Keep:
- Hero h1 with gradient text (change from cyan to new blue gradient: `from-brand-600 to-brand-500`)
- Sub-tagline paragraph
- Capability tags (switch to `.cap-chip`)
- Metric strip
- Link row

**Hero element count after migration: 5** (down from 7 layers + 9 distinct elements):
1. Name/location line
2. H1 headline
3. Sub-tagline
4. Capability tags (`.cap-chip`)
5. Metric strip + attribution
6. Link row  
*(No background layers, no accent bar)*

### 4.7 Section Containment

**New alternation pattern:**
```
Hero          → white body bg, no overlay
Projects      → white body bg (remove bg-slate-50, let it breathe with padding alone)
Experience    → bg-[#f8fafc] (slate-50/70 — very subtle, no border-y)
Skills        → white body bg
Approach      → bg-[#f8fafc] (matches Experience rhythm: white/light/white/light)
Contact       → white body bg
Footer        → bg-[#f8fafc] border-t border-slate-100
```

This creates a clean white ↔ near-white alternation that provides rhythm without visual weight. Borders are removed from section boundaries — separation comes from padding and the alternating tint.

**Container widths:**
```
Section outer:      max-w-5xl (1024px, unchanged)
Prose/bullet cols:  max-w-3xl (apply to tagline, experience bullets, TA/EY paragraphs)
Contact prose:      max-w-lg (keep current max-w-xl)
```

### 4.8 Responsive Behaviour

No structural changes needed. The existing breakpoint strategy (`sm:`, `md:`, `lg:`) is sound.

One addition: `lg:` breakpoint on section `py` to widen spacing further on large screens:
```
py-20 md:py-28 lg:py-32
```
Keeps the design from feeling cramped on 1440px+ displays.

### 4.9 Motion Behaviour

Current motion is minimal and already appropriate. Keep as-is with one change:
```
Current: .fade-in { animation: fadeIn .55s ease both; }
New:     .fade-in { animation: fadeIn .4s ease-out both; }  (slightly snappier entry)

Current: .slide-up { animation: slideUp .55s ease both; }
New:     .slide-up { animation: slideUp .4s ease-out both; }  (match)
```
Remove the `counter` animation from the Tailwind config — it is defined but never applied to any element.

No hover animations beyond `transition-colors` and `transition-shadow`. Do not add transform-based hover effects — they feel consumer/hype, not engineering.

---

## 5. Content to De-emphasise or Remove

### 5.1 Must Change

| Item | Action | Reason |
|---|---|---|
| `theme-color` meta = `#0f172a` | Change to `#ffffff` | Sends dark-mode identity signal on a light-first site |
| `guruprasad.dev` navbar brand | Change to `Guruprasad Nayak` in Inter, remove `.dev` | `.dev` TLD is not a registered/live domain for this candidate — implies false ownership |
| Hero grid pattern background | Remove | Dark-mode developer aesthetic, incongruous on white professional page |
| Hero brand gradient overlay | Remove | Redundant noise on white surface |
| Hero cyan accent bar | Remove | No longer needed with the accent-reduced hero |
| Section label `font-mono uppercase` | Replace with Inter `font-medium` | Reduces template feel, increases apparent seniority |
| Approach quotes in `font-mono` | Replace with Inter `font-normal` | Mono quotes read as dev blog, not professional statement |
| Hero capability tags in `.skill-chip` (mono) | Switch to `.cap-chip` (Inter) | These are positioning labels, not code tokens |

### 5.2 Add Context

| Item | Addition | Reason |
|---|---|---|
| Hero metric strip | Add `text-xs text-slate-400` attribution: "from retrieval pipeline work at AIRS Foundry" | Prevents metrics from reading as career-level identity rather than specific work |

### 5.3 Content Already Clean (No Action)

The content rewrite from prior passes is factually sound. No claims to remove. The styling changes do not require content changes beyond the two items above.

---

## 6. Files That Need Edits

| File | Changes required |
|---|---|
| `index.html` | All styling changes — this is the only file |

**Specific locations within `index.html`:**

1. `<meta name="theme-color">` — line ~14
2. `tailwind.config` `colors.brand` block — lines ~46–52
3. `tailwind.config` `backgroundImage` — remove `grid-pattern` key
4. `tailwind.config` `animation` — remove `counter` key
5. `tailwind.config` `keyframes` — remove `counter` block
6. `<style>` block `:root` — update `--brand`, `--brand-l`, add `--brand-h`, `--brand-bg`, `--radius-*`
7. `<style>` block `.skill-chip` — change `border-radius` to pill, update hover colours
8. `<style>` block — add `.cap-chip` definition
9. `<style>` block `.exp-entry` — add resting left border `slate-200`
10. `<style>` block `.nav-link` hover/active colour
11. Navbar `<a>` brand element — remove `.dev` / change to Inter text
12. Hero section — remove `bg-grid-pattern bg-grid` div, remove gradient overlay div, remove accent bar div
13. Hero `<p>` location line — remove `font-mono`, use `text-sm text-slate-400`
14. Hero capability tags — change class from `skill-chip` to `cap-chip`
15. Hero `<h1>` gradient — update from `from-brand-500 to-brand-400` to `from-brand-700 to-brand-500`
16. Hero metric strip — add attribution line
17. Hero metric strip `max-w-xl` — increase top padding
18. Projects section — remove `bg-slate-50 border-y`, keep as plain white section
19. Projects detail card h4 labels — remove `text-brand-500`, use `text-slate-500`
20. Projects detail cards — increase radius to `rounded-xl`, lighten border to `border-slate-100`
21. Experience section — replace `border-y border-slate-200` with lighter `bg-[#f8fafc]` tint
22. Skills section — remove `bg-slate-50 border-y`, keep as plain white section
23. Approach section — add `bg-[#f8fafc]` tint, change quote font to Inter
24. Approach quote `border-l-2 border-brand-500` — change to `border-slate-200`, Inter font
25. Contact primary button — update colour to `bg-brand-600`, radius to `rounded-xl`, add `shadow-sm`
26. Contact secondary button — update hover to include `hover:bg-brand-50`, radius to `rounded-xl`
27. Footer — lighten border to `border-slate-100`
28. All nav `hover:text-brand-500` / `hover:text-brand-400` — update to `hover:text-brand-600`
29. All `dark:bg-slate-900/50` section backgrounds — update to match new alternation
30. All `from-brand-500`/`to-brand-400` gradient references — update to new blue scale

---

## 7. What Is Intentionally Not Changing

| Item | Reason |
|---|---|
| Inter + JetBrains Mono font load | Correct pairing — keep |
| Alpine.js / Tailwind CDN / Lucide | No framework changes per constraint |
| `.section-label::after` hairline rule | Keep — works in any colour scheme |
| `.metric-num` tabular numbers | Keep — correct detail |
| IntersectionObserver nav active | Keep — correct behaviour |
| `scroll-padding-top` anchor fix | Keep |
| `focus-visible` keyboard ring | Keep |
| Print CSS | Keep |
| All section `id` anchors | Keep — routing safety |
| All factual content | Keep — zero content changes in this pass |
| Dark mode support | Keep — reduce dark: class count slightly by simplifying section backgrounds, but preserve full dark mode functionality |

---

*Plan complete. Ready for implementation on approval.*
