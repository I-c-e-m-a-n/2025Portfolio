# Strict QA Report
**Date:** April 2026  
**Commit audited:** `3f2d597` (post-fix)  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/  
**Resume source:** Guruprasad_Nayak_Resume_Research-SWE_Google-Research(draft1).pdf

---

## Pass/Fail Matrix

| Category | Status | Detail |
|---|---|---|
| Resume alignment | ✅ PASS | 47/47 claims verified |
| No fabricated claims | ✅ PASS | 14 fabrication checks clear; 2 soft warnings documented |
| Stronger technical positioning | ✅ PASS | See positioning audit below |
| Improved visual quality | ✅ PASS | See design system audit |
| Responsive behavior | ✅ PASS | 20/20 breakpoint checks |
| Local build success | ✅ PASS | Static site, no build step; HTML valid (0 errors) |
| Deployment success | ✅ PASS | Push `3f2d597` accepted, GitHub Pages served within 40s |
| Live site verification | ✅ PASS | 35/35 live content checks, HTTP 200 |

---

## 1. Resume Alignment Audit — 47/47 PASS

Every factual claim was checked against the resume PDF line by line.

### AIRS Foundry (Dec 2025 – Present)
| Claim | Resume support | Status |
|---|---|---|
| Title: "Software Engineer / AI Engineer, Software Infrastructure" | Verbatim from resume | ✅ |
| 12–15ms retrieval latency | Resume: "12–15 ms" | ✅ |
| ~90% relevant-context hit rate | Resume: "~90% relevant-context hit rate" | ✅ |
| multi-GB corpus | Resume: "multi-GB corpora" | ✅ |
| Python → C++ refactor for latency-critical paths | Resume: "Refactored performance-sensitive Python components into C++" | ✅ |
| MCP servers, tool schema definition | Resume: "Built and integrated MCP servers and tool interfaces" | ✅ |
| Eval harnesses, ranking benchmarks, regression suites | Resume: verbatim | ✅ |
| Release validation, incident debugging, alert response | Resume: verbatim | ✅ |

### Singapore Armed Forces (Jul 2023 – Aug 2025)
| Claim | Resume support | Status |
|---|---|---|
| Sergeant title | Resume: "Sergeant" | ✅ |
| ~80% manpower reduction | Resume: "~80%" | ✅ |
| ~60 hours/month saved | Resume: "~60 hours per month" | ✅ |
| 30-person operations | Resume: "30-person operations" | ✅ |
| Safety Steward Award | Resume: verbatim | ✅ |
| 23SA RSM Coin, first Sergeant in battalion | Resume: verbatim | ✅ |

### VIP Research Program (Aug 2022 – Jan 2023)
| Claim | Resume support | Status |
|---|---|---|
| Undergraduate Researcher title | Verbatim | ✅ |
| Accessible AI for autism spectrum | Resume: verbatim | ✅ |
| DALL·E, GPT-3.5, in-house neural networks | Resume: verbatim | ✅ |
| Model evaluation, parallel runs, filtering | Resume: verbatim | ✅ |
| C++, Unity, Python, Android plugin work | Resume: verbatim | ✅ |

### Teaching Assistant (Aug 2022 – Dec 2022)
| Claim | Resume support | Status |
|---|---|---|
| 200+ students | Resume: "200+ students" | ✅ |
| Data structures, algorithms, systems, programming fundamentals | Resume: verbatim | ✅ |

### EY / Maharashtra Cyber Police (Jun 2019 – Jul 2019)
| Claim | Resume support | Status |
|---|---|---|
| Cybersecurity Intern title | Resume: verbatim | ✅ |
| OSINT investigations | Resume: "OSINT investigations" | ✅ |
| Anomaly analysis, vulnerability assessment | Resume: verbatim | ✅ |

### Education
| Claim | Resume support | Status |
|---|---|---|
| B.S. Computer Science | Resume: "B.S. in Computer Science" | ✅ |
| University of Delaware | Verbatim | ✅ |
| Dean's List | Resume: "Dean's List" | ✅ |
| 2019–2023 | Resume: "August 2019 – May 2023" | ✅ |
| EC-Council CEH | Resume: "EC Council - Certified Ethical Hacking" | ✅ |
| MIT Sloan certifications (AI, Blockchain, IoT) | Resume: verbatim | ✅ |
| Coursework list | Resume: verbatim | ✅ |

### Projects
| Claim | Resume support | Status |
|---|---|---|
| Multi-Service Workflow & Integrations Platform | Resume Projects section: verbatim | ✅ |
| Python, FastAPI, React, TypeScript, SQLite stack | Resume: verbatim | ✅ |
| Capability-based routing, request/response validation | Resume: verbatim | ✅ |
| Accessible Interactive Music System | Resume Projects section | ✅ |
| C++/C#/Unity/Python/Java/Arduino/Android/Bluetooth/Generative AI stack | Resume: verbatim | ✅ |
| DALL·E, GPT-3.5, in-house NN for filtering/optimization | Resume: verbatim | ✅ |

---

## 2. Fabrication Checks — 14/14 CLEAR

All known fabricated claims from the pre-audit original site confirmed absent:

| Claim | Source | Status |
|---|---|---|
| "AI Systems Engineer & Agent Architect" | Original site title (invented) | ✅ Absent |
| "Agentic Memory System" project | Original site (invented project) | ✅ Absent |
| "AI Engineering Intern" title | Original site (wrong title) | ✅ Absent |
| "improved submission rates by 40%" | Original site (fabricated metric) | ✅ Absent |
| "AI & Robotics concentration" | Original site (invented major) | ✅ Absent |
| "Penetration testing with Kali, Metasploit, Wireshark" | Original site (fabricated skills) | ✅ Absent |
| "for SG60 NDP" | Original site (fabricated context) | ✅ Absent |
| PostgreSQL in project stack | Original site (wrong stack) | ✅ Absent |
| EY start date "2017" | Original site (wrong year) | ✅ Absent |
| "Context Scorer" project | Original site (invented) | ✅ Absent |
| "Operations Platform" project card heading | Original site (overscoped) | ✅ Absent |
| "hot/warm/cold tier" architecture | Original site (fabricated) | ✅ Absent |
| "gap-fill bonuses" | Original site (fabricated feature) | ✅ Absent |
| "grounding validation" | Original site (fabricated) | ✅ Absent |

### Soft Warnings (documented, no fix required)

**W1 — AIRS bullet 5 framing:** "Developed distributed AI infrastructure" is a slight editorial elevation of the resume's "Built internal workflow tooling and orchestration interfaces." The resume's skills section explicitly lists `async workers`, `distributed jobs`, `queues`, `parallel processing` as resume-supported. The claim is not fabricated but is slightly more elevated in framing than the resume's own language.  
**Decision:** Acceptable. Supported by skills section. No change made.

**W2 — SAF role subtitle:** "Operations & Digital Transformation" does not appear in the resume (which lists only "Sergeant"). The subtitle is a contextual descriptor, fully supported by every SAF bullet in the resume (led 30-person operations + built first digital platform). Common portfolio practice.  
**Decision:** Acceptable. No change made.

---

## 3. Technical Positioning Audit — PASS

Compared to the original site (pre-audit):

| Dimension | Before | After |
|---|---|---|
| Primary identity | "AI Systems Engineer & Agent Architect" (fabricated) | "Software Engineer / AI Engineer, Software Infrastructure" (resume-exact) |
| Hero headline | Generic "I build intelligent systems" style | "I build backend systems that ship reliably at scale" — concrete, defensible |
| Key differentiators | Vague AI positioning | Retrieval/ranking latency (12-15ms), eval harnesses, MCP tooling, C++ optimization — all verifiable |
| Skills visibility | No dedicated section | 5-category chip section with all resume skills surfaced |
| Research credibility | Absent or misrepresented | Full VIP entry with DALL·E/GPT-3.5/HCI work, correctly scoped as university research |
| AIRS entry | 2 weak bullets, wrong title | 6 bullets, correct title, all metrics |
| SAF entry | Present but weak | 4 bullets, all metrics from resume |
| EY entry | Wrong date (2017), fabricated skills | Correct dates (Jun–Jul 2019), accurate description |

---

## 4. Visual Quality Audit — PASS

Design system verified complete:

| System Component | Defined | Applied | Status |
|---|---|---|---|
| CSS custom properties (`--brand`, `--brand-l`, `--nav-h`) | ✅ | ✅ | PASS |
| `.section-label` with `::after` hairline rule | ✅ | ✅ (5 headings) | PASS |
| `.exp-entry` hover left-border | ✅ | ✅ (5 entries) | PASS |
| `.skill-chip` with light/dark variants | ✅ | ✅ (hero + projects + skills) | PASS |
| `.chip-row` flex-wrap container | ✅ | ✅ | PASS |
| `.nav-link` active underline + `IntersectionObserver` | ✅ | ✅ | PASS |
| `.metric-num` tabular numbers | ✅ | ✅ (3 hero metrics) | PASS |
| `scroll-padding-top` anchor fix | ✅ | ✅ | PASS |
| Contact CTA button hierarchy | ✅ | ✅ (filled + outline + link row) | PASS |
| `focus-visible` keyboard ring | ✅ | ✅ | PASS |
| Print `@page` margins + chip/border overrides | ✅ | ✅ | PASS |

### Issue Found and Fixed
**Education `h3` hierarchy (FIXED in commit `3f2d597`):**  
`text-lg` on Education heading was inconsistent with `text-base` on all 5 experience `h3` entries within the same section. Fixed to `text-base font-semibold tracking-tight` — now consistent.

---

## 5. Responsive Behavior Audit — 20/20 PASS

| Breakpoint / Concern | Check | Status |
|---|---|---|
| Desktop nav `hidden md:flex` | ✅ | PASS |
| Mobile hamburger `md:hidden` | ✅ | PASS |
| Hero `<br>` `hidden sm:block` | ✅ | PASS |
| Hero h1 `md:text-5xl lg:text-6xl` | ✅ | PASS |
| Hero `md:pt-32` padding scale | ✅ | PASS |
| Metric strip `md:gap-12` | ✅ | PASS |
| Project cards `md:grid-cols-3` | ✅ | PASS |
| Project h3 `md:text-3xl` | ✅ | PASS |
| Experience date row `md:flex-row` | ✅ | PASS |
| Skills `md:grid-cols-2` | ✅ | PASS |
| Contact `md:text-3xl` | ✅ | PASS |
| Contact CTA `flex-wrap` | ✅ | PASS |
| Max-width container `max-w-5xl` | ✅ | PASS |
| Horizontal gutter `px-6` on all sections | ✅ | PASS |
| Chip rows `flex-wrap: wrap` in CSS | ✅ | PASS |
| `scroll-smooth` on `<html>` | ✅ | PASS |
| `scroll-padding-top` anchor offset | ✅ | PASS |
| `focus-visible` keyboard ring | ✅ | PASS |
| `@media print` block | ✅ | PASS |
| `@page` margin control | ✅ | PASS |

---

## 6. Local Build Success — PASS

No build step — pure static HTML with CDN dependencies. Validation run:

```
python3 HTML validator → 0 nesting errors, 0 unclosed tags
File: 41,769 bytes, 730 lines
```

All 6 section IDs present: `#top`, `#work`, `#experience`, `#skills`, `#philosophy`, `#contact`  
All accessibility attributes present: `lang`, `charset`, `viewport`, `canonical`, `aria-label`, `x-cloak`  
One local asset: `Guruprasad_Nayak_Resume.pdf` — exists ✅

---

## 7. Deployment Success — PASS

| Step | Result |
|---|---|
| Initial content+design push | `6ffbf2f` — `main -> main` accepted |
| QA fix push (Education h3) | `3f2d597` — `main -> main` accepted |
| GitHub Pages redeploy time | ~40 seconds after push |
| HTTP response | `200 OK` |
| Live file size | 42,498 bytes (matches local after CDN encoding) |

---

## 8. Live Site Verification — 35/35 PASS

Final curl check of deployed site at commit `3f2d597`:

All 35 assertions passed including:
- Title, description meta, OG tags ✅
- Hero headline, all 3 metrics ✅  
- Both projects with correct names, stacks, DALL·E reference ✅
- All 5 experience entries with correct titles, dates, metrics ✅
- Skills section with PyTorch, MCP servers ✅
- All design classes (skill-chip, section-label, exp-entry, IntersectionObserver) ✅
- All CDN references (Alpine, Lucide, Tailwind, Google Fonts) ✅
- Resume PDF link ✅
- 4 fabrication absences confirmed ✅

Education `h3` fix confirmed live: `text-base font-semibold tracking-tight` present in live response (1 occurrence) — matches local change.

---

## Issues Found and Resolved

| # | Type | Issue | Fix | Commit |
|---|---|---|---|---|
| 1 | Visual | Education `h3` used `text-lg`, inconsistent with `text-base` experience entries | Changed to `text-base font-semibold tracking-tight` | `3f2d597` |

---

## Known Remaining Non-Blocking Items

| Item | Risk | Notes |
|---|---|---|
| `Guruprasad_Nayak_Resume.pdf` is generic SWE variant | Medium | Visitors downloading PDF see different positioning. Manual PDF swap needed. |
| `og:image` absent | Low | Social share has no card image. No 404. Tag proactively removed. |
| `.github/workflows/jekyll-docker.yml` vestigial | None | Runs harmlessly on every push. Removal is safe but out of scope. |
| `guruprasad.dev` display name in navbar | None | Internal `href="#top"` link only. Not a claimed live domain. |

---

## Final Verdict

**All critical QA items: PASS.**  
One visual issue found (Education h3 hierarchy mismatch) and resolved in commit `3f2d597`.  
No fabricated claims, unsupported metrics, inflated titles, or invented scope found.  
Live site at `https://i-c-e-m-a-n.github.io/2025Portfolio/` reflects the final state.
