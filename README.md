# Guruprasad Nayak — Portfolio

Static portfolio. Research SWE · Applied ML, Retrieval & Evaluation Systems.

**Live:** [i-c-e-m-a-n.github.io/2025Portfolio](https://i-c-e-m-a-n.github.io/2025Portfolio/)
**Resume:** [Guruprasad_Nayak_Resume.pdf](./Guruprasad_Nayak_Resume.pdf)

---

## Stack

| Layer | Technology |
|---|---|
| Styling | `assets/style.css` — custom design system (no framework, no runtime CSS) |
| Icons | Lucide `v0.475.0` — self-hosted at `assets/lucide.min.js`, pinned UMD build |
| Fonts | Google Fonts — Inter · JetBrains Mono (loaded via `<link>`, `font-display=swap`) |
| Behaviour | Vanilla JS `assets/main.js` — zero framework dependencies |
| Hosting | GitHub Pages — static, no build step, deployed via Actions |

No Tailwind CDN. No React. No bundler. No runtime CSS generation.

## Features

- Dark/light mode — persisted to `localStorage`, applied before first paint (no flash)
- Scroll progress bar — 2px indicator in the nav bar
- Active section tracking — `IntersectionObserver`, sets `aria-current` and `--section-accent` CSS variable
- Section-aware accent colour — nav label line shifts between blue (most sections) and teal (Research)
- Scroll reveal — `translateY(8px)` fade-in on viewport entry; auto-stagger by sibling group; bypassed for `prefers-reduced-motion`
- Mobile nav overlay — slide-in drawer with full focus trap, `Escape` to close, `aria-modal`, focus return to trigger
- Expandable technical detail panels — native `<details>`/`<summary>` per project card
- Proof strips and artifact rows — truthful external links or explicit "private repo on request" labels
- Case-study project format — Problem, Design, Hard part, Outcome per project
- Inline SVG architecture diagrams — sourced from verified local repos; `currentColor` for dark mode
- Accessibility — skip link, `aria-modal`, `aria-expanded`, `aria-current`, semantic HTML, `focus-visible` on all interactive surfaces, `:focus-within` card elevation
- SEO — `<title>`, `description`, OG, Twitter Card, `canonical`, JSON-LD structured data (`Person` schema), SVG favicon, OG image

## File Structure

```
index.html                    Main content and layout
assets/
  style.css                   Full design system — tokens, typography, all components
  main.js                     Theme, nav, mobile overlay, section tracking, scroll reveal
  lucide.min.js               Lucide icons v0.475.0 (self-hosted, pinned)
  og-image.svg                Open Graph / social preview image (1200×630)
Guruprasad_Nayak_Resume.pdf   Resume PDF (linked from nav and contact section)
.nojekyll                     Prevents GitHub Pages from running Jekyll
.github/
  workflows/
    deploy.yml                GitHub Actions — deploy static site to Pages on push to main
docs/
  portfolio_upgrade_checklist.md   Audit and upgrade log
```

## Local Development

No build step. Serve with any static file server:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Or with Node:

```bash
npx serve .
```

## Deployment

Push to `main`. The `deploy.yml` workflow runs `actions/deploy-pages` and publishes the repo root to GitHub Pages automatically.

The GitHub Pages source must be set to **GitHub Actions** (not the legacy `gh-pages` branch) in the repo Settings → Pages → Source.

## Updating the Lucide Icon Set

The icon file is pinned at `v0.475.0`. To upgrade:

```bash
curl -L -o assets/lucide.min.js \
  "https://unpkg.com/lucide@<NEW_VERSION>/dist/umd/lucide.min.js"
```

Update the version comment in `index.html` and `README.md` after replacing the file.

## OG Image

The source is `assets/og-image.svg` (1200×630). Most modern social crawlers (LinkedIn, Discord, Slack) accept SVG. Twitter/X requires a rasterized PNG for `summary_large_image`. To generate a PNG:

```bash
# macOS with Homebrew
brew install librsvg
rsvg-convert -w 1200 -h 630 assets/og-image.svg -o assets/og-image.png
```

Then update `og:image` and `twitter:image` references in `index.html` to point to `og-image.png`.

## Design Principles

- **No runtime dependencies in production** — styling is compiled CSS, scripting is vanilla JS
- **Restrained, typography-led** — Inter for all display and body; JetBrains Mono for code, dates, and metadata chips
- **Dark mode first in tokens** — all colours defined as CSS variables; dark overrides via `.dark` class
- **Truthful content only** — all metrics, claims, and project details traceable to resume or verified local repos
- **Accessibility is load-bearing** — focus states, keyboard traps, skip links, `aria-*` attributes are tested behaviours, not decorative

## Content Sources

All metrics, claims, and project descriptions are sourced from:

- Resume: `Guruprasad_Nayak_Resume-SWE.pdf`
- Project repositories (private — details available on request)
- Sensify Lab profile and UDaily article for the accessible AI research project
