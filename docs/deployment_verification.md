# Deployment Verification
**Date:** April 2026  
**Repo:** https://github.com/I-c-e-m-a-n/2025Portfolio  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/

---

## Deployment Method Detected

| Property | Value |
|---|---|
| Hosting | GitHub Pages |
| Source | `main` branch, repository root |
| Build | None — pure static HTML. `.nojekyll` present, bypasses Jekyll processing |
| Trigger | Push to `main` automatically triggers GitHub Pages redeploy |
| Workflow file | `.github/workflows/jekyll-docker.yml` — vestigial, runs `jekyll build` in Docker but has no Pages publish step; actual deployment is the native GitHub Pages from-branch mechanism |

---

## Pre-Commit Validation

### HTML Structure Check

```
python3 -c "from html.parser import HTMLParser ..."
```

**Result:** `HTML structure: OK — no nesting errors detected`  
File: 41,752 bytes, 730 lines

### Content Integrity Check (30 assertions)

All 30 checks passed:

**Required present (18):**
- `Software Engineer · Applied ML` ✓
- `12–15ms`, `~90%`, `multi-GB` (AIRS metrics) ✓
- `Dec 2025`, `Jul 2023`, `Aug 2022 – Jan 2023` (correct dates) ✓
- `Multi-Service Workflow & Integrations Platform` ✓
- `Accessible Interactive Music System` ✓
- `VIP Research Program` ✓
- `skill-chip`, `section-label`, `exp-entry`, `nav-link` (design classes) ✓
- `IntersectionObserver`, `metric-num`, `scroll-padding-top` (JS/CSS) ✓
- `Guruprasad_Nayak_Resume.pdf` ✓

**Required absent (12 — previously fabricated/incorrect):**
- `AI Systems Engineer & Agent Architect` ✓
- `Agentic Memory System` ✓
- `Context Scorer`, `Operations Platform` ✓
- `AI & Robotics concentration` ✓
- `improved submission rates by 40%` ✓
- `AI Engineering Intern` ✓
- `PostgreSQL` ✓
- `2017` (wrong EY date) ✓
- `Penetration testing with Kali` ✓
- `for SG60 NDP` ✓

### Asset Reference Check

```
python3 -c "import re, os ..."
```

**Result:** One local asset reference — `Guruprasad_Nayak_Resume.pdf` — present and resolves correctly.  
All other references (Tailwind CDN, Alpine.js, Lucide, Google Fonts) are external HTTPS — no local path issues.

---

## Commands Run

```bash
# Verify repo state
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp remote -v
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp branch -a
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp status
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp log --oneline -5

# Pre-commit validation
python3 -c "..."   # HTML structure validator
python3 -c "..."   # 30-assertion content check
python3 -c "..."   # Asset reference check

# Stage and commit
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp add index.html docs/
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp diff --cached --stat
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp commit -m "Portfolio rewrite + design pass: ..."

# Push
git -C /Users/ice/Desktop/Windsurf/portfolio-audit-temp push origin main

# Post-deploy live check
curl -s -o /dev/null -w "%{http_code} | ..." -L "https://i-c-e-m-a-n.github.io/2025Portfolio/"
curl -s -L "https://i-c-e-m-a-n.github.io/2025Portfolio/" | python3 -c "..."  # 15-assertion live check
```

---

## Errors Found

None. No build errors (no build step exists). No broken imports. No missing assets. No HTML nesting errors. No content validation failures.

---

## Fixes Applied

None required during this deployment step. All issues had been resolved during the content rewrite and design passes.

The `jekyll-docker.yml` workflow was intentionally left unchanged — it runs but has no publish step and does not affect Pages deployment. Removing or modifying it was out of scope.

---

## Commit

| Property | Value |
|---|---|
| **Hash** | `6ffbf2f` |
| **Branch** | `main` |
| **Remote** | `origin` → `https://github.com/I-c-e-m-a-n/2025Portfolio` |
| **Push result** | `0a9ff39..6ffbf2f  main -> main` |
| **Objects written** | 8 objects, 42.17 KiB |

**Commit message summary:**  
`Portfolio rewrite + design pass: factual audit, content overhaul, visual system upgrade`

**Files committed:**
- `index.html` — full rewrite + design pass
- `docs/portfolio_resume_audit.md` — created
- `docs/portfolio_rewrite_plan.md` — created
- `docs/implementation_change_log.md` — created
- `docs/design_pass_log.md` — created

---

## Deployment Status

| Property | Value |
|---|---|
| Deployment method | GitHub Pages, auto-deploys on push to `main` |
| Deploy triggered by | Push of commit `6ffbf2f` |
| Wait time | ~45 seconds after push |
| HTTP status | **200 OK** |
| Final URL | `https://i-c-e-m-a-n.github.io/2025Portfolio/` (no redirect) |
| Response size | 41,752 bytes |
| Response time | 0.318s |

---

## Live Site Verification (15 assertions, all passed)

| Status | Check | Type |
|---|---|---|
| ✓ | `Software Engineer · Applied ML` in title | Content present |
| ✓ | `12–15ms` AIRS latency metric | Content present |
| ✓ | `Multi-Service Workflow` project name | Content present |
| ✓ | `Accessible Interactive Music System` | Content present |
| ✓ | `VIP Research Program` entry | Content present |
| ✓ | `skill-chip` CSS class | Design present |
| ✓ | `section-label` CSS class | Design present |
| ✓ | `exp-entry` CSS class | Design present |
| ✓ | `IntersectionObserver` nav JS | Behaviour present |
| ✓ | `Dec 2025` AIRS start date | Content present |
| ✓ | `Aug 2022 – Jan 2023` VIP date | Content present |
| ✓ | `AI Systems Engineer & Agent Architect` absent | Fabrication removed |
| ✓ | `Agentic Memory System` absent | Fabrication removed |
| ✓ | `AI Engineering Intern` absent | Wrong title removed |
| ✓ | `PostgreSQL` absent | Wrong stack removed |

---

## Known Remaining Issues (not deployment blockers)

| Issue | Risk | Notes |
|---|---|---|
| `Guruprasad_Nayak_Resume.pdf` is the old generic SWE variant | Medium | Visitors downloading the PDF see a different title/positioning than the site. Needs manual PDF replacement — out of scope for this pass. |
| `og:image` tag absent | Low | Social share previews will appear without a card image. No 404 — tag was removed proactively in the content pass. |
| `jekyll-docker.yml` is vestigial | Low | Runs on every push, builds nothing useful. Harmless. Left unchanged to avoid scope creep. |

---

*Deployment complete. Live site verified at commit `6ffbf2f`.*
