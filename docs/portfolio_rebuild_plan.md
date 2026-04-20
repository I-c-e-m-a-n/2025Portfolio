# Portfolio Rebuild Plan — Google Research SWE Alignment
**Repo:** `portfolio-audit-temp` → deploys to `https://i-c-e-m-a-n.github.io/2025Portfolio/`
**Target role:** Research Software Engineer, Google Research (Singapore, req #127218283102249670)
**Audit date:** April 2026

---

## Role Requirements Decoded

### Minimum qualifications
| Requirement | Current signal | Gap |
|---|---|---|
| B.S. CS or equivalent | B.S. CS, University of Delaware, Dean's List | None |
| 1 yr Python or C++ | Python (AIRS Foundry production), C++ (hot-path refactor + Unity/Sensify) | Covered, needs stronger surfacing |
| 1 yr data structures & algorithms | TA for DS&A (200+ students), Cisc361 OS coursework | Covered but not foregrounded |
| 1 yr core ML concepts | LightGBM multi-horizon forecaster, FinBERT, BM25+embedding hybrid, retrieval/ranking pipeline | Covered, partially buried |

### Preferred qualifications — gap assessment
| Preferred requirement | Current signal | Gap rating | Notes |
|---|---|---|---|
| Master's / PhD in CS | B.S. only | **HIGH** — unresolvable | Compensate with research depth |
| University / industry lab AI research | Sensify Lab VIP 2022, UDaily coverage | MEDIUM | Research section is thin — needs more technical depth on methodology |
| Accessible technologies experience | Sensify Lab: children with ASD, full hardware/software stack | LOW — strong signal, needs better framing | Currently best differentiator for this role |
| Transformer architecture understanding | Hugging Face Transformers in skills; FinBERT used | **HIGH** — not demonstrated architecturally | No prose shows *understanding* of attention, positional encoding, MHA |
| AI/ML peer-reviewed publication | No publications | **HIGH** — unresolvable | Can partially compensate with research narrative + methodology section |

### Responsibilities — gap assessment
| Responsibility | Current signal | Gap |
|---|---|---|
| Abstract key problems, design elegant solutions | Case-study format in projects covers this | Partially covered |
| Prototype, profile, benchmark solutions | Latency profiling, regression suites at AIRS mentioned | Present but not foregrounded as a skill |
| Lead and collaborate with research teams globally | Sensify Lab (HCI team), SAF (30-person ops) | Covered; framing could be sharper |
| Drive collaborations with product teams | SAF digital platform replacing paper workflows | Weak signal — mostly ops, not research-to-product |
| Collaborate with hardware/infra teams | Sensify Lab: Arduino + Android + Unity hardware bridge | Good signal, underused |

---

## Gap Matrix

| Dimension | Current State | Target State | Priority |
|---|---|---|---|
| **Python / C++** | Named in skills, C++ mentioned in AIRS bullet and Sensify | Concrete C++ artifact or scope (e.g., what module, what overhead was reduced) | HIGH |
| **Data structures & algorithms** | TA credential + coursework | Explicit DSA signal: pathfinding in DnD map, BM25 retrieval, intent compiler | HIGH |
| **Core ML** | BM25+embedding hybrid named, LightGBM forecaster exists as private project | Quantile regression, feature engineering pipeline, walk-forward eval — need to be visible | HIGH |
| **Transformer understanding** | "Hugging Face Transformers" chip, FinBERT integration | No prose demonstrates understanding of architecture internals (attention, MHA, positional encoding) | **CRITICAL** |
| **Research / lab experience** | Sensify Lab VIP, UDaily coverage | Research section shows outcomes but lacks methodology (IRB? user studies? metrics?) | HIGH |
| **Accessible technologies** | Sensify Lab hardware/software stack, ASD population | Strongest differentiator for *this specific role* — needs expansion in Research section | MEDIUM |
| **Profiling / benchmarking** | 12-15ms latency mentioned, regression suites mentioned | No dedicated mention of profiling tools, benchmark methodology, or what was measured | HIGH |
| **Prototyping** | BTC forecaster, DnD map, web search service | None are presented as research prototypes explicitly | MEDIUM |
| **Systems thinking** | Web search service (circuit breaker, resilience), AI backend (capability routing) | Good coverage — maintain and reinforce | LOW |
| **Backend / distributed systems** | FastAPI, Docker Compose, async workers, structured logging | Multi-service architecture well described | LOW |
| **Communication quality** | Case-study prose is clean and direct | Research section methodology depth is insufficient | MEDIUM |
| **Evidence / credibility** | UDaily link, Sensify Lab link, 900+ tests, latency metrics | No public repos, no publications — must compensate via well-constructed private-repo write-ups | HIGH |

---

## Issues Requiring Fixes

### Content
- [ ] **C-1** Research section has only one entry — thin for a "research engineering" role. Add BTC Forecaster as a second research-framed entry (ML methodology, walk-forward evaluation, prediction intervals).
- [ ] **C-2** Transformer architecture understanding is completely invisible. Add a "Technical Depth" or "How I think about models" subsection or add prose in the relevant project/research cards.
- [ ] **C-3** C++ usage is mentioned but has zero specificity ("hot-path overhead"). State which component, what the latency improvement was, or what tooling was used.
- [ ] **C-4** Profiling / benchmarking is named in AIRS bullets but not foregrounded as a capability. Add a dedicated "Evaluation & Benchmarking" axis either in skills or as a named project artifact.
- [ ] **C-5** The Sensify Lab section should include at least one methodological statement: what was measured, how user studies worked, what changed based on data.
- [ ] **C-6** Contact section says "retrieval systems, ML infrastructure, or research engineering" — should explicitly say "generative AI, research engineering, accessible AI" to match Google Research's stated focus area.

### Layout / IA
- [ ] **L-1** "How I Work" section (philosophy) is below Skills — it reads as filler. Either remove it or promote its content into the hero sub-paragraph and delete the standalone section.
- [ ] **L-2** Research section has one card — sparse. Either add a second entry or expand the single entry to full case-study width.
- [ ] **L-3** Skills section has no "Evaluation & Benchmarking" cluster despite it being a named responsibility in the role. This is a direct alignment gap.
- [ ] **L-4** Certifications are buried at the bottom of the Education card in small text. They should be a named block, not a subtitle line.

### Hero
- [ ] **H-1** Hero headline is about retrieval/ranking — accurate but not directly aligned to the role (which is about generative AI research). Needs a second framing layer: "generative AI systems" alongside retrieval.
- [ ] **H-2** Hero capability chips do not include "transformer models" or "model evaluation" as a standalone chip — these are directly named in the JD.
- [ ] **H-3** "Open to work" in the hero eyebrow is weak. Replace with the exact signal Google Research wants: "Singapore PR · Open to Research SWE roles."

### Project Presentation
- [ ] **P-1** BTC 24h Forecaster (private) is not on the portfolio at all. It contains walk-forward evaluation, FinBERT integration, LightGBM quantile regression, and prediction intervals — all directly relevant ML signals. Add as a project card.
- [ ] **P-2** The web search project's "Hard part" section does not mention the algorithmic design choices (why circuit breaker, what the state machine is). Could be sharper.
- [ ] **P-3** AI Backend project does not mention the three-layer memory architecture or the retrieval mechanics (BM25 + embeddings). These are the most Google-relevant signals and are buried in collapsed details.
- [ ] **P-4** DnD Map project: pathfinding algorithm (stepwise, A*-style job queue) is mentioned abstractly. Make the algorithm explicit — it is a direct DSA signal.

### Skills Taxonomy
- [ ] **S-1** Add "Evaluation & Benchmarking" cluster: walk-forward eval, regression suites, latency profiling, prediction intervals, A/B eval.
- [ ] **S-2** ML cluster should include "LightGBM", "quantile regression", "FinBERT" — currently only lists framework names.
- [ ] **S-3** Remove "Unity / Android" from "Agent & Tooling" cluster — it belongs under a "Platforms & Runtimes" cluster or the Sensify project card only.
- [ ] **S-4** Add "BM25" and "hybrid search" explicitly — these are core retrieval primitives that the role cares about.

### Certifications Visibility
- [ ] **CV-1** EC-Council CEH is buried in an education subtitle. Give it a dedicated Certifications block with issue date (if known) and a PDF proof CTA.
- [ ] **CV-2** MIT Sloan AI Strategy certificate is similarly buried. Surface it.
- [ ] **CV-3** If the Certificates PDF has additional certs, they need to be extracted and listed individually.

### Research Proof
- [ ] **R-1** No methodology section for the Sensify Lab research. Add: what was the experimental setup, how many sessions, what behavioral metrics were collected, what changed as a result.
- [ ] **R-2** BTC Forecaster has walk-forward evaluation methodology and directional accuracy metrics — present these as a second research entry.
- [ ] **R-3** The phrase "results informed design changes" is vague. State one concrete design change that came from the session data.

### Private Repo Proof Strategy
- [ ] **PR-1** Publish `web-search-service` as a public repo — it is the cleanest, most production-grade artifact and has no sensitive material.
- [ ] **PR-2** Publish `dnd_map_ui` as a public repo — TypeScript, protocol design, WebSocket authority server are all strong signals.
- [ ] **PR-3** Publish `btc-24h-forecaster` as a public repo — strong ML methodology signal.
- [ ] **PR-4** For private repos (AIRS work, AI backend), add a dedicated "Code Artifacts" section with architecture diagrams that live publicly in the portfolio repo itself.
- [ ] **PR-5** NS Lucky Draw and team-11-main should NOT be published — low signal, NS Lucky Draw has government context.

### Design System
- [ ] **DS-1** The design system is solid — preserve it. No changes needed.
- [ ] **DS-2** The expandable `<details>` panels work well — extend this pattern to the new BTC Forecaster and Research entries.
- [ ] **DS-3** Consider adding a light "Certifications" card style (similar to `exp-card` but with a badge/icon).

### CSS / JS / Animation
- [ ] **FE-1** No issues — the existing implementation is clean. Keep as-is.
- [ ] **FE-2** Lucide version is pinned at 0.475.0 — maintain.

### Responsiveness
- [ ] **RE-1** No reported issues. The grid-auto-2 pattern is sound.

### Accessibility
- [ ] **A-1** Skip link, focus trap, aria-modal are all in place — no action needed.
- [ ] **A-2** New Certifications block must follow the same accessible card pattern (heading hierarchy, aria-label on external links).

### Performance
- [ ] **PERF-1** No build step, static HTML — optimal. Maintain.

### Repo / Live Mismatch
- [ ] **MISMATCH-1** The live site at `i-c-e-m-a-n.github.io/2025Portfolio/` reflects the current `portfolio-audit-temp` content. Confirmed consistent.
- [ ] **MISMATCH-2** `Guruprasad_Nayak_Resume.pdf` in the repo is `draft4`. The audit was performed against `draft4`. Confirm resume PDF in repo is the correct version to serve.

### Deployment / Workflow
- [ ] **DEP-1** GitHub Actions workflow deploys from `main` on push — correct and minimal. No changes needed.
- [ ] **DEP-2** The workflow uploads the entire repo root, which means `docs/` markdown files are served publicly. This is acceptable (they are planning documents, not sensitive).

---

## Implementation Phases

### Phase 0 — Branch setup (trivial, do immediately)
- Create branch `rebuild/google-research-alignment`
- All changes land on this branch before merging to `main`

### Phase 1 — Content additions (highest impact, no design risk)
**Files:** `index.html`
**Changes:**
1. Add BTC 24h Forecaster as a 5th project card (ML-focused case study)
2. Expand Research section: add methodology detail to Sensify entry + add BTC Forecaster as second research entry
3. Add Certifications block to Experience/Education area
4. Add "Evaluation & Benchmarking" skills cluster
5. Update hero contact text and chip set
6. Update Contact section to name generative AI and research engineering

### Phase 2 — Transformer depth signal
**Files:** `index.html`
**Changes:**
1. In the AI Backend project technical details, add a paragraph on transformer inference pipeline (embedding generation, similarity computation, BM25 hybrid weighting)
2. In Skills ML cluster, add "transformer inference" and "FinBERT" as chips
3. Add a brief "Model Understanding" note somewhere — either a How-I-Think paragraph or a Research section addendum

### Phase 3 — Public repo publication
**Repos to create:**
1. `web-search-service` → sanitize, create public GitHub repo
2. `dnd-map-ui` → sanitize, create public GitHub repo
3. `btc-24h-forecaster` → sanitize, create public GitHub repo

**Steps per repo:**
- Remove any credentials, API keys, .env files with real values
- Ensure README is clean and technical
- Push to `github.com/I-c-e-m-a-n/<repo-name>`
- Update portfolio project cards with live GitHub links

### Phase 4 — Polish and proof
**Files:** `index.html`, `assets/style.css`
1. Add architecture diagram to BTC Forecaster project card (SVG inline, same pattern)
2. Make C++ usage more specific in AIRS Foundry bullet
3. Make Sensify Lab research methodology more specific
4. DnD map: name the pathfinding algorithm explicitly
5. Final link audit: every new public repo link resolves

### Phase 5 — Merge and deploy
1. Merge `rebuild/google-research-alignment` → `main`
2. Verify GitHub Actions deploy succeeds
3. Verify live site matches expected state

---

## Flagship Case Study Recommendation

**Primary (flagship): Accessible Music Interaction System (Sensify Lab)**
- Only entry with external institutional proof (UDaily, Sensify Lab)
- Directly addresses the most differentiated preferred qualification ("accessible technologies")
- Multi-stack: C++, Python, Unity, Arduino, Android, generative AI
- Human subjects research → closest signal to "lab experience"
- **Action:** Expand to full-width case study with methodology section; make it the visual anchor of the Research section

**Supporting projects (in order of Google-relevance):**
1. **Multi-Provider Web Search Service** — systems engineering, production quality, publishable code
2. **BTC 24h Forecaster** — ML methodology, quantile regression, FinBERT, walk-forward evaluation
3. **Multi-Service AI Backend** — retrieval architecture, BM25+embedding hybrid, 900+ tests
4. (Optional 4th) **DnD Map** — protocol design, WebSocket authority, TypeScript type safety — useful for systems depth but lower ML signal

---

## File Change Summary

| File | Action | Phase |
|---|---|---|
| `docs/portfolio_rebuild_plan.md` | CREATE (this file) | 0 |
| `docs/portfolio_content_inventory.md` | CREATE | 0 |
| `docs/private_repo_publication_plan.md` | CREATE | 0 |
| `index.html` | EDIT — add project card, expand research, add certs block, update skills | 1, 2, 4 |
| `assets/style.css` | EDIT — certifications card style | 1 |
| `assets/main.js` | No changes expected | — |
| `Guruprasad_Nayak_Resume.pdf` | VERIFY — confirm draft in repo is current | 0 |
| New public repos (3) | CREATE on GitHub | 3 |

---

## What the Portfolio Currently Gets Right

1. **Honest metrics** — every number (12-15ms, ~90%, ~80%, ~60h/mo) is traceable to the resume
2. **Clean case-study format** — Problem/Design/Hard part/Outcome is readable and scannable
3. **Architecture diagrams** — inline SVG diagrams are professional and lightweight
4. **Accessibility** — skip link, focus trap, aria-modal, keyboard nav are all correct
5. **No gimmicks** — no particle effects, fake terminals, or gratuitous animation
6. **Expandable detail panels** — `<details>`/`<summary>` pattern for technical depth without cluttering the page
7. **Proof strips** — per-project proof tags with external links where real proof exists
8. **Dark mode / reduced motion** — implemented correctly
9. **Static deploy** — no build step, GitHub Actions pipeline is minimal and correct
10. **Research credential** — Sensify Lab + UDaily are live external links

## What Is Blocking Google-Readiness

1. **No transformer architecture understanding visible anywhere** — the role explicitly lists this as preferred; nothing in the current portfolio demonstrates it
2. **No ML project with full methodology** — the retrieval pipeline is described but not the ML thinking behind it; BTC Forecaster (best ML artifact) is invisible
3. **Certifications are buried** — CEH and MIT Sloan are in a subtitle line; they need to be first-class visible
4. **Zero public repos** — every project says "private repo, details on request"; for a Google RSE reviewing candidates, this is a friction point
5. **Research section is thin** — one entry, no user study methodology, no behavioral metrics
6. **Profiling and benchmarking not foregrounded** — directly named as a responsibility in the JD but described only in one AIRS bullet
7. **Contact section misalignment** — names "retrieval systems, ML infrastructure" but not "generative AI research" which is the explicit Singapore focus area

## What Changes in the Next Steps

**Next (Phase 1):**
- Add BTC 24h Forecaster project card
- Expand Research section with methodology
- Add Certifications block
- Update hero and contact copy

**Then (Phase 2):**
- Add transformer understanding prose
- Strengthen ML and benchmarking signal in skills and project details

**Then (Phase 3):**
- Publish `web-search-service`, `dnd-map-ui`, and `btc-24h-forecaster` as public repos
- Replace "private repo, details on request" with live GitHub links for those three projects
