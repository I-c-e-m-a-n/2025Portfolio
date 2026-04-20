# Implementation Change Log
**Date:** April 2026  
**Applies to:** `docs/portfolio_resume_audit.md` + `docs/portfolio_rewrite_plan.md` → `index.html`

---

## Files Changed

| File | Type of change |
|---|---|
| `index.html` | Full content and structure rewrite — the only file changed |
| `docs/implementation_change_log.md` | Created (this file) |

**Not changed (deferred):**
- `Guruprasad_Nayak_Resume.pdf` — still the older generic SWE variant; needs manual replacement with target resume
- `.github/workflows/jekyll-docker.yml` — vestigial CI, not deleted; harmless but dead
- `assets/og-card.png` — still missing; OG image 404 unresolved

---

## Structural Changes Made

### DOM Section Order (Before → After)

| Before | After |
|---|---|
| Hero | Hero (unchanged position) |
| Projects / Work | Projects / Work (unchanged position) |
| Engineering Philosophy | **Experience** ← moved up |
| Experience | **Technical Skills** ← new section inserted |
| Contact | **Approach** ← was Philosophy, demoted |
| — | Contact |

**Result:** Experience is now the third section (above the fold on most desktops after Projects), visible before any abstract philosophical statements. This matches the navbar order and standard hiring-reader expectations.

### Navbar (Before → After)

| Before | After |
|---|---|
| Work · Experience · Philosophy · Contact | Projects · Experience · Skills · Contact |

- "Work" renamed to "Projects" in nav label (anchor `#work` unchanged — no 404 risk)
- "Philosophy" removed from nav
- "Skills" added as nav item pointing to new `#skills` section
- Mobile nav updated to match desktop nav

### New Section Added

`#skills` — **Technical Skills** — inserted between `#experience` and `#philosophy`. Uses resume's exact four skill category headings. All content is verbatim from the target resume skills section.

---

## Copy Sections Rewritten

### `<head>` — Metadata

| Element | Old | New |
|---|---|---|
| `<title>` | "Guruprasad Nayak \| AI Systems Engineer & Agent Architect" | "Guruprasad Nayak \| Software Engineer · Applied ML & Research Systems" |
| `<meta description>` | "AI Systems Engineer specializing in agentic architectures, RAG systems, LLM orchestration..." | "Software engineer with production experience in retrieval and ranking systems, applied ML infrastructure, distributed backend services, and research-program work in accessible AI..." |
| `<meta keywords>` | AI Engineer, Agent Architect, RAG, LLM, Agentic AI, Memory Systems | Software Engineer, Applied ML, Research Engineering, Retrieval Systems, Ranking, C++, MCP, Accessible AI |
| OG title | "...AI Systems Engineer & Agent Architect" | "...Software Engineer · Applied ML & Research Systems" |
| OG description | "agentic architectures, RAG pipelines, memory systems..." | "Production backend systems, retrieval and ranking pipelines, applied ML infrastructure..." |
| Twitter title | "...AI Systems Engineer" | "...Software Engineer · Applied ML & Research Systems" |
| JSON-LD `jobTitle` | "AI Systems Engineer" | "Software Engineer, Applied ML & Research Systems" |
| JSON-LD `knowsAbout` | AI, ML, RAG Systems, LLM Orchestration, Agent Architecture, Python, FastAPI | Retrieval Systems, Ranking Pipelines, Applied Machine Learning, Model Evaluation, Backend Systems, Python, C++, FastAPI, MCP Servers, Accessible AI, Distributed Systems, Observability |
| OG `og:image` | `assets/og-card.png` (missing file) | **Removed** — tag omitted rather than left pointing to a 404 |

### Hero Section

| Element | Old | New |
|---|---|---|
| Headline | "I build AI systems that reason reliably." | "I build backend systems that ship reliably at scale." |
| Sub-tagline | "AI Systems Engineer focused on agent infrastructure, context selection, and production-grade LLM orchestration. I design systems where determinism and observability are first-class concerns." | "Software engineer with production experience in retrieval and ranking systems, applied ML infrastructure, and distributed backend services. Research background in accessible AI and generative AI systems at the University of Delaware VIP program." |
| Capability tags | 4 tags: RAG Systems · Agent Memory · Context Selection · Evaluation | 8 tags: Retrieval & Ranking · Applied ML Systems · Backend Infrastructure · Model Evaluation · Agent / MCP Tooling · Distributed Systems · Accessible AI · Observability |
| Metric 1 | 80% / workflow reduction (SAF ops metric) | 12–15ms / retrieval latency (AIRS production metric) |
| Metric 2 | 60h / saved monthly (SAF ops metric) | ~90% / context hit rate (AIRS production metric) |
| Metric 3 | 200+ / students taught (TA metric) | multi-GB / corpus at scale (AIRS production metric) |

### Projects Section (was "Featured Work")

| Change | Detail |
|---|---|
| Section label | "Featured Work" → "Projects" |
| Featured project renamed | "Agentic Memory System" → "Multi-Service Workflow & Integrations Platform" (resume-exact title) |
| Featured project description | Replaced fabricated architecture claims (tiered hot/warm/cold storage, redundancy penalties, gap-fill bonuses, grounding validation, early-stopping) with honest resume-supported scope |
| Featured project stack | PostgreSQL removed → SQLite (resume-exact); Redis removed (not in resume project stack); Embeddings removed (not in resume project stack) |
| Featured project CTA | "View on GitHub" link pointing to general profile removed — no specific repo exists for this project |
| Three mini-cards — removed | "Context Scorer" (AIRS internal work, not a project) · "Operations Platform" (SAF work, belongs in Experience) · "Autism Learning Tool" (fabricated stack TensorFlow/Flask) |
| Second project added | "Accessible Interactive Music System" — resume-exact title, resume-exact stack (C++ · C# · Unity · Python · Java · Arduino · Android · Bluetooth · Generative AI), honest description from resume |

### Experience Section

| Entry | Changes |
|---|---|
| **AIRS Foundry** | Title: "AI Engineering Intern · Agent Infrastructure" → "Software Engineer / AI Engineer, Software Infrastructure". Dates: "2025 - Present" → "Dec 2025 – Present". Description: single 3-sentence paragraph → 6 bullet points covering all resume content: production backend, 12–15 ms / ~90% metrics, C++ refactoring, MCP server integration, eval harnesses/regression suites, distributed infrastructure, production ownership. |
| **Singapore Armed Forces** | Dates: "2023 - 2025" → "Jul 2023 – Aug 2025". Award: removed "for SG60 NDP" (fabricated context). Added missing bullet: "Standardized fragmented operational processes into structured digital workflows." Retained accurate metrics (~80%, ~60h). Format changed to bullet list. |
| **VIP Research Program** | **Added as new entry** — was completely absent. Title: "Undergraduate Researcher". Org: "University of Delaware VIP Research Program". Dates: Aug 2022 – Jan 2023. 4 bullets covering: accessible AI for autism spectrum, DALL·E / GPT-3.5 / in-house NN work, model evaluation workflows, C++/Unity/Python/Android implementation. |
| **Teaching Assistant** | Dates: "2022 - 2022" → "Aug 2022 – Dec 2022". Removed fabricated metric "improved submission rates by 40%". Removed conflated "Contributed to HCI research on AI-driven learning tools" (that belongs to VIP entry). |
| **EY / Maharashtra Cyber Police** | Date: "2017" → "Jun 2019 – Jul 2019". Removed "Penetration testing with Kali, Metasploit, Wireshark" (not on resume). Replaced with resume-supported: OSINT, anomaly analysis, vulnerability assessment, log correlation. |
| **Education** | Removed "AI & Robotics concentration" (fabricated). Added coursework list: Data Structures & Algorithms · Operating Systems · Database Systems · Software Engineering · Machine Learning. Reformatted certifications for clarity. |

### Technical Skills Section (New)

Five resume-derived category groups, all content verbatim from target resume:
- **Languages:** Python · C++ · Java · TypeScript · JavaScript · SQL
- **Applied ML / Research Engineering:** PyTorch · TensorFlow · Hugging Face Transformers · sentence-transformers · NLP · embeddings · transformer-based systems · prompt optimization · model evaluation · tuning workflows · retrieval · ranking systems · safety-oriented filtering
- **Backend / Systems:** FastAPI · Flask · REST APIs · async systems · distributed services · Redis · Docker Compose · GitHub Actions · Linux/Unix · observability · structured logging · regression testing · release validation
- **Agent / Infrastructure:** MCP servers · tool schemas · agent integration · API orchestration · multi-service architecture · async workers · distributed jobs · queues · parallel processing
- **Product / Accessibility:** Unity · Android plugin development · multimodal interaction · accessibility-oriented software design · HCI-aligned systems

### Approach / Philosophy Section (was "Engineering Philosophy")

| Change | Detail |
|---|---|
| Section label | "Engineering Philosophy" → "Approach" |
| DOM position | Moved from 2nd to 5th section (after Skills, before Contact) |
| Principles count | 4 → 3 |
| Removed principle | "Token budgets are constraints, not suggestions" (LLM product-advice tone) |
| Removed principle | "Ground truth matters. Hallucination guardrails should be evaluated, not assumed." (consumer AI tone) |
| Removed column | "What I build with" tech stack column (now covered by dedicated Skills section) |
| Rewritten principles | All 3 principles rewritten to be grounded in specific resume-supported work (AIRS latency/hit rate, eval harnesses, VIP accessibility research) rather than unanchored opinions |

### Contact Section

| Element | Old | New |
|---|---|---|
| Headline | "Open to AI engineering roles where I can design systems that reason reliably." | "Open to software engineering roles in applied ML systems, research infrastructure, and production backend work." |
| Sub-copy | "Available for full-time positions, contract work, and collaborations." | "Particularly interested in roles at the intersection of systems engineering and applied ML — retrieval, ranking, evaluation pipelines, agent infrastructure, or accessible AI research. Based in Singapore." |
| Links | Email · LinkedIn · GitHub | Email · LinkedIn · GitHub · **Resume PDF** (added explicit download link) |

---

## Notable Removed Content

| Removed | Location | Reason |
|---|---|---|
| "AI Systems Engineer & Agent Architect" title | `<title>`, OG, Twitter | Not a resume title |
| "Agent Architect" | All meta and structured data | Not a resume title |
| "agentic architectures, RAG systems, LLM orchestration" as sole positioning | Meta description | Too narrow; misses research/ML/accessibility framing |
| `og:image` tag pointing to missing file | `<head>` | `assets/og-card.png` does not exist — removed tag to prevent malformed social share |
| "I build AI systems that reason reliably." | Hero headline | Consumer-AI-sounding; replaced with production engineering language |
| 4 capability tags (RAG Systems, Agent Memory, Context Selection, Evaluation) | Hero | Too narrow for candidate's actual breadth |
| 80% / 60h / 200+ as hero metrics | Hero | SAF ops and TA metrics — belong in their entries, not leading the engineering identity |
| "AI Engineering Intern · Agent Infrastructure" | AIRS entry | Resume title is Software Engineer / AI Engineer — downgrade removed |
| 3-sentence ContextScorer description | AIRS entry | Covered only one internal component; replaced with full 6-bullet account |
| "for SG60 NDP" | SAF award | Not on resume — invented context |
| "improved submission rates by 40%" | TA entry | Not on resume — fabricated metric |
| "Contributed to HCI research on AI-driven learning tools for autism support" | TA entry | Conflation of two separate roles; VIP Research is now a separate entry |
| "2017" as EY date | EY entry | Resume says 2019 |
| "Penetration testing with Kali, Metasploit, Wireshark" | EY entry | Not on resume |
| "AI & Robotics concentration" | Education | Not on resume — fabricated credential |
| "Agentic Memory System" as project title | Projects | Does not appear in resume |
| Tiered hot/warm/cold storage, redundancy penalties, gap-fill bonuses, grounding validation | Featured project | Not resume-supported for the personal project |
| PostgreSQL in project stack | Featured project | Resume says SQLite |
| "View on GitHub" linking to general profile | Featured project | No specific repo exists; removed CTA rather than leaving it misleading |
| Context Scorer mini-card | Projects grid | AIRS internal work deliverable, not a personal project |
| Operations Platform mini-card | Projects grid | SAF platform; belongs in Experience, not Projects |
| Autism Learning Tool mini-card with TensorFlow/Flask | Projects grid | Wrong project name, wrong tech stack — replaced with correct "Accessible Interactive Music System" entry |
| "Token budgets are constraints, not suggestions" | Philosophy | LLM product-advice tone, removed |
| "Ground truth matters. Hallucination guardrails should be evaluated, not assumed." | Philosophy | Consumer AI tone, removed |
| "What I build with" stack column in Philosophy | Philosophy | Redundant — now covered by dedicated Skills section |
| "Fine-tuning" as skill | Philosophy/Skills | Resume says "tuning workflows" — different scope claim |
| "Secure System Design" | Philosophy/Skills | Not a resume claim |
| "Available for full-time positions, contract work, and collaborations." | Contact | No targeting — replaced with specific role interest statement |
| "reason reliably" in Contact CTA | Contact | Repetition of hero headline; also consumer-AI-sounding |

---

## Unresolved Items / Risks

| Item | Risk level | Detail |
|---|---|---|
| **`Guruprasad_Nayak_Resume.pdf`** | High | Bundled PDF is still the older generic SWE variant. Visitors who download it will see a different title and different positioning than the site. Must be manually replaced with the research/Google-target resume draft. |
| **`assets/og-card.png`** | Medium | OG image tag was removed (rather than pointing to a 404) but social share previews will now appear without an image. A proper 1200×630 card should be created and re-added with the correct tag. |
| **`.github/workflows/jekyll-docker.yml`** | Low | Vestigial CI workflow still present. It runs on every push and builds nothing useful. Does not affect deployment. Can be deleted without consequence — left unchanged to avoid scope creep. |
| **`#work` anchor vs "Projects" nav label** | None | Nav label changed to "Projects" but the section ID remains `#work`. Anchor navigation still works. No change needed unless the ID is refactored for consistency. |
| **Tailwind CDN in production** | Low-medium | Unchanged from original. Runtime JIT is the development-only mode. Not a content issue — a build infrastructure concern for a future step. |
| **Dark mode default** | Low | `darkMode: false` — site initializes to light mode. Unchanged. |
| **No 404 page** | Low | GitHub Pages serves its default 404 for any path outside root. Unchanged. |

---

*Implementation complete. No code was pushed. All changes are local to `index.html`.*
