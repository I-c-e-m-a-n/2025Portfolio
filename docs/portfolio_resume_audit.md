# Portfolio × Resume Audit
**Candidate:** Guruprasad Nayak  
**Resume source of truth:** `Guruprasad_Nayak_Resume_Research-SWE_Google-Research(draft1).pdf`  
**Site repo:** https://github.com/I-c-e-m-a-n/2025Portfolio  
**Live URL:** https://i-c-e-m-a-n.github.io/2025Portfolio/  
**Audit date:** April 2026

---

## 1. Repo Map

```
2025Portfolio/
├── index.html                          # Entire site — single HTML file (507 lines)
├── Guruprasad_Nayak_Resume.pdf         # Bundled resume (older SWE-generic version)
├── .nojekyll                           # Suppresses GitHub Pages Jekyll processing
├── README.md                           # 11-line readme
└── .github/
    └── workflows/
        └── jekyll-docker.yml           # CI workflow (builds with Jekyll — contradicts .nojekyll)
```

No `assets/` directory exists in the repo. The `og:image` references `assets/og-card.png` — **this file does not exist**.

---

## 2. Stack / Build / Deploy Summary

| Concern | Detail |
|---|---|
| **Framework** | None — pure static HTML |
| **Styling** | Tailwind CSS via CDN (`cdn.tailwindcss.com`) |
| **JS runtime** | Alpine.js 3.x via CDN (`unpkg`) |
| **Icons** | Lucide via CDN (`unpkg`) |
| **Fonts** | Inter + JetBrains Mono via Google Fonts CDN |
| **Deployment** | GitHub Pages (static, branch: `main`) |
| **Build pipeline** | None — no bundler, no build step |
| **CI workflow** | `jekyll-docker.yml` — runs `jekyll build`, but `.nojekyll` suppresses Jekyll on Pages. The workflow is vestigial and does nothing useful in production. |
| **Dark mode** | Alpine.js `x-data` + `localStorage` persistence |
| **Structured data** | JSON-LD `Person` schema present, correctly formed |
| **Print CSS** | Present — collapses `.no-print` elements, appends link hrefs |

### Build / Runtime Risks

1. **Missing OG image** — `og:image` points to `assets/og-card.png` which does not exist. Every social share/unfurl will show a broken/missing card image.
2. **All dependencies are CDN-loaded at runtime** — Tailwind CDN, Alpine, Lucide, Google Fonts. No pinned versions for Alpine or Lucide (`@3.x.x`, `@latest`). A CDN outage or breaking release silently breaks the site.
3. **Tailwind CDN mode** — Generates classes at runtime via JIT in the browser. This is the development-only mode. For production it produces larger payloads and is explicitly flagged as not recommended by Tailwind for production use.
4. **Vestigial CI** — The Jekyll CI workflow runs on every push to `main` but produces no artifact used by Pages. It will pass or fail invisibly without affecting the deployed site.
5. **No 404 page** — GitHub Pages will serve its own default 404 for any path outside root.
6. **Resume PDF in repo is an older version** — The bundled `Guruprasad_Nayak_Resume.pdf` is a generic SWE resume variant (headline: "Software Engineer | Backend Systems, Scalable Infrastructure, Applied AI"). It does not match the Research/Google-target framing of the site.

---

## 3. Page / Section Inventory

The site is a single-page application with five anchored sections:

| # | Section ID | Heading label | Content type |
|---|---|---|---|
| 1 | `#top` | *(Hero)* | Title, tagline, capability tags, 3 metrics, contact links |
| 2 | `#work` | Featured Work | 1 featured case study + 3 project mini-cards |
| 3 | `#philosophy` | Engineering Philosophy | 4 principle quotes + tech stack categories |
| 4 | `#experience` | Experience | 4 job entries + inline education block |
| 5 | `#contact` | Contact | Open-to-work statement + contact links |

Navigation order in the navbar: Work → Experience → **Philosophy** → Contact. Philosophy is placed third in the nav but second in the page flow — the nav order does not match DOM order.

---

## 4. Mismatch Table: Current Site vs. Resume (Source of Truth)

### 4.1 Title / Positioning

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Page `<title>` | "AI Systems Engineer & Agent Architect" | "Software Engineer \| Applied ML Systems, Research, Accessible AI, Retrieval & Agent Infrastructure" | **Mismatch** — site title is narrower and drops research/ML/accessibility framing |
| Hero headline | "I build AI systems that reason reliably." | *(tagline not on resume — must be reframeable but not contradict)* | Acceptable as positioning, but "reason reliably" is a vague consumer-AI phrase, not research-engineering language |
| Hero sub-tagline | "AI Systems Engineer focused on agent infrastructure, context selection, and production-grade LLM orchestration." | Resume headline positions candidate as SWE with Applied ML, Research, Accessible AI, Retrieval & Agent Infrastructure depth | **Undersell** — drops "research," "applied ML," "accessible AI," "retrieval" — all resume-supported |
| Hero capability tags | RAG Systems / Agent Memory / Context Selection / Evaluation | Resume skills: PyTorch, TF, HuggingFace, sentence-transformers, NLP, embeddings, transformer-based systems, prompt optimization, model evaluation, MCP servers, tool schemas, async workers, distributed jobs | **Thin** — four tags leave out significant resume-supported depth |
| Meta description | "agentic architectures, RAG systems, LLM orchestration, production-grade AI infrastructure" | Resume: retrieval, ranking, applied ML research, accessible AI, multi-service backends | **Partial mismatch** — missing "ranking," "retrieval," "research," "applied ML" |

### 4.2 AIRS Foundry Experience Entry

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Title shown | "AI Engineering Intern · Agent Infrastructure" | "Software Engineer / AI Engineer, Software Infrastructure" | **Mismatch** — site says "Intern," resume says "Software Engineer / AI Engineer." "Intern" is a significant downgrade from the actual title on the resume. |
| Dates | "2025 - Present" | "December 2025 - Present" | Minor — month missing |
| Description content | "Designed unified ContextScorer replacing fragmented heuristics... two-stage scoring pipeline (absolute + marginal utility)... observability metrics tracking latency, token usage, and facet coverage." | Resume: latency reduced to 12–15 ms, ~90% relevant-context hit rate, ~30% token usage reduction, C++ refactoring, MCP server/tool integration, eval harnesses, ranking benchmarks, distributed AI infrastructure, async workers, queues, distributed jobs, release validation, incident debugging | **Severe undersell** — the site describes only the ContextScorer sub-component and omits: the 12–15 ms latency metric, ~90% hit rate, ~30% token reduction, C++ refactoring, MCP tool integration, eval harnesses, distributed infrastructure work, and production ownership |
| C++ refactoring | Not mentioned | "Refactored performance-sensitive Python components into C++ to improve execution speed in latency-critical backend paths" | **Missing** — resume-supported, strong systems signal |
| MCP / tool schemas | Not mentioned | "Built and integrated MCP servers and tool interfaces... tool schema definition, execution flow, structured logging, debugging instrumentation" | **Missing** |
| Eval harnesses | Not mentioned | "Built eval harnesses, ranking benchmarks, latency profiling, regression suites, and release validation gates" | **Missing** |
| Distributed infrastructure | Not mentioned | "Developed distributed AI infrastructure across multi-service backends, async workers, queues, distributed jobs, and parallel-processing components" | **Missing** |
| Production ownership | Not mentioned | "Owned production-facing responsibilities including release validation, incident debugging, alert response, and uptime-sensitive fixes" | **Missing** |
| Collaboration | Not mentioned | "Collaborated with engineers, model teams, infrastructure stakeholders, and product-aligned teams" | **Missing** |

### 4.3 VIP Research Program (University of Delaware)

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Entry present? | **No** — not listed anywhere in the Experience section | "University of Delaware VIP Research Program - Undergraduate Researcher \| August 2022 - January 2023" | **Missing entirely** — this is the entire research credential. For a Google Research application this is the single most relevant experience entry and it is completely absent. |
| DALL·E / GPT-3.5 / in-house NN | Not mentioned | "Worked with generative AI systems including DALL·E, GPT-3.5, and in-house neural network components... prompt optimization, image filtering, safety-oriented content tuning" | **Missing** |
| Model tuning / evaluation | Not mentioned | "Supported model tuning and evaluation workflows by comparing outputs across parallel model runs, identifying data patterns, filtering high-variance or unsafe content pathways" | **Missing** |
| HCI + accessibility research | Partially — one project mini-card says "HCI research project" | Full VIP research entry details this extensively | **Severely thin** |

### 4.4 Singapore Armed Forces Entry

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Award name | "RSM Coin and Safety Steward Award for SG60 NDP" | "Safety Steward Award and became the first Sergeant in battalion history to receive the 23SA Regimental Sergeant Major's Coin" | **Fabricated context** — "for SG60 NDP" does not appear anywhere in the resume. The award context is invented. |
| "Standardized fragmented operational processes" bullet | Not mentioned | Present in resume | **Missing** |

### 4.5 Teaching Assistant Entry

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Dates | "2022 - 2022" (displays as same year both ends) | "August 2022 - December 2022" | **Weak presentation** — "2022–2022" looks like a data error |
| "improved submission rates by 40%" | Present on site | **Not in resume** | **Fabricated metric** — this number does not exist in the resume. This is an invented achievement. |
| Research contribution | "Contributed to HCI research on AI-driven learning tools for autism support" | The VIP Research program is a separate, distinct entry; the TA role has no such bullet | **Conflation** — this sentence blends two separate roles into one |

### 4.6 EY / Maharashtra Cyber Police Entry

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Dates | "2017" | "June 2019 - July 2019" | **Factual error** — the year shown is 2017, but the resume states 2019 |
| "Penetration testing with Kali, Metasploit, Wireshark" | Present on site | **Not in resume** — resume says OSINT, anomaly analysis, vulnerability assessment, log correlation | **Invented tools/activities** — Kali, Metasploit, Wireshark are not mentioned in the resume |

### 4.7 Education

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| Concentration listed | "AI & Robotics concentration" | Resume: "B.S. in Computer Science" — no concentration listed | **Fabricated** — no AI & Robotics concentration appears on the resume |
| Coursework | Not listed | Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Machine Learning | **Missing** — these are specific resume-supported details |
| Dean's List | "Dean's List" | "Dean's List" (2019 per bundled resume) | Matches |

### 4.8 Projects

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| "Agentic Memory System" (featured case study) | Positioned as primary featured project with detailed architecture description | Resume project title is "Multi-Service Workflow & Integrations Platform" — no standalone "Agentic Memory System" project exists | **Mismatch** — the featured project is a renamed/reimagined version of the multi-service platform. The specific technical claims (tiered hot/warm/cold storage, two-stage scoring, redundancy penalties, gap-fill bonuses, grounding validation, early-stopping) are not supported by resume text as a standalone project |
| PostgreSQL listed in project tech stack | Present on site | Resume project stack: Python, FastAPI, React, TypeScript, SQLite | **Fabricated** — PostgreSQL is not in the resume project stack; SQLite is. PostgreSQL implies production-scale infra that is not claimed in the resume. |
| "Context Scorer" mini-card | Listed as separate project | This is an internal component of the AIRS Foundry work, not a standalone project | **Misleading** — presented as an independent project when it's a work deliverable |
| "Autism Learning Tool" mini-card | "TensorFlow · Flask · UX" | Resume VIP project stack: C++, C#, Unity, Python, Java, Arduino, Android, Bluetooth, Generative AI | **Wrong tech stack** — TensorFlow and Flask are not in the resume tech stack for this project |
| "Operations Platform" mini-card | "Python · ETL · Dashboards" | Resume SAF section: digital operations platform. No specific tech stack mentioned. ETL and Dashboards are not on the resume. | **Invented stack** — ETL and Dashboards labels are not resume-supported |

### 4.9 Skills / Philosophy Section

| Element | Current Site | Resume (source of truth) | Verdict |
|---|---|---|---|
| "Fine-tuning" listed under ML & NLP | Present | Resume lists "tuning workflows" — not explicit fine-tuning of models | **Borderline oversell** — resume says "tuning workflows" in a general evaluation context, not model fine-tuning |
| PyTorch / TensorFlow / Hugging Face | Not mentioned anywhere on site | Explicitly listed in resume skills | **Missing** — these are the primary ML framework credentials and they are absent from the portfolio |
| sentence-transformers | Not mentioned | Resume skills | **Missing** |
| C++ | Not mentioned | Resume skills + AIRS bullet (refactoring Python → C++) | **Missing** — a real systems differentiator absent entirely |
| Java | Not mentioned | Resume skills | **Missing** |
| GitHub Actions | Not mentioned | Resume backend/systems skills | **Missing** |
| Docker listed | Present | Present in resume | Match |
| "Security" category | "CEH · OSINT · Secure System Design" | Resume: EC-Council CEH, OSINT investigations. "Secure System Design" is not on the resume. | **Partial fabrication** — "Secure System Design" is not a resume claim |

---

## 5. Credibility Issues

### 5.1 Fabricated / Invented Content (Critical — Non-Negotiable to Fix)

| # | Location | Fabricated claim | Impact |
|---|---|---|---|
| F1 | TA entry | "improved submission rates by 40%" | Invented metric. Not on resume. If a recruiter or hiring committee verifies this it will be disqualifying. |
| F2 | Cybersecurity intern dates | "2017" | Resume says 2019. Factual error that could be caught in basic background checks. |
| F3 | SAF award | "for SG60 NDP" | Invented context. Not in resume. |
| F4 | Education | "AI & Robotics concentration" | Resume states B.S. Computer Science with no concentration. Fabricated credential. |
| F5 | Project stack | "PostgreSQL" in Agentic Memory System | Resume says SQLite. PostgreSQL implies infrastructure scale not claimed. |
| F6 | Autism Learning Tool stack | "TensorFlow · Flask" | Resume VIP project stack is C++, C#, Unity, Python, Java, Arduino, Bluetooth, Generative AI. Neither TensorFlow nor Flask appear. |
| F7 | Operations Platform stack | "ETL · Dashboards" | Neither term appears in resume. |
| F8 | EY intern | "Penetration testing with Kali, Metasploit, Wireshark" | None of these tools appear in the resume for this role. |
| F9 | Philosophy/skills | "Secure System Design" | Not a resume claim. |
| F10 | Featured project | "Agentic Memory System" — described with tiered hot/warm/cold storage, redundancy penalties, gap-fill bonuses, grounding validation as a standalone project | The resume project is "Multi-Service Workflow & Integrations Platform." The architectural claims may describe real work but are presented as a standalone project that does not appear in the resume. |

### 5.2 Missing Resume-Supported Content (Significant Omissions)

| # | What is missing | Why it matters |
|---|---|---|
| M1 | Entire VIP Research Program entry | The only formal research credential. Critical for Google Research positioning. Completely absent from the site. |
| M2 | DALL·E / GPT-3.5 / in-house neural network work | Applied generative AI experience from 2022 — relevant for any AI/ML role |
| M3 | 12–15 ms latency metric at AIRS | A concrete, specific production metric that establishes real engineering impact |
| M4 | ~90% relevant-context hit rate | Another specific metric from AIRS — completely absent from the site |
| M5 | ~30% token usage reduction (bundled resume) | A third concrete metric from AIRS — absent |
| M6 | C++ refactoring of Python components | Strong systems engineering signal. Absent. |
| M7 | MCP servers, tool schemas, agent integration | Directly relevant to AI infrastructure roles. Absent. |
| M8 | Eval harnesses, ranking benchmarks, regression suites | Shows engineering rigor. Absent. |
| M9 | Distributed AI infrastructure — async workers, queues, distributed jobs | Systems depth signal. Absent. |
| M10 | Production ownership — release validation, incident debugging, alert response | Demonstrates production responsibility. Absent. |
| M11 | PyTorch, TensorFlow, Hugging Face Transformers, sentence-transformers | The actual ML framework stack. Absent from the entire site. |
| M12 | Model evaluation and tuning workflows from VIP research | Research-relevant ML work. Absent. |
| M13 | Safety-oriented content tuning and filtering | Relevant for responsible AI / safety-conscious research roles. Absent. |
| M14 | Resume title framing: "Applied ML Systems, Research, Accessible AI, Retrieval & Agent Infrastructure" | The site title does not reflect the breadth of the resume headline. |
| M15 | AIRS title is "Software Engineer / AI Engineer" not "Intern" | A title downgrade that directly underrepresents seniority. |

---

## 6. Design / UX Issues

| # | Issue | Severity |
|---|---|---|
| D1 | **Missing OG image** (`assets/og-card.png` 404s) | High — every LinkedIn/Twitter share will show broken preview |
| D2 | **Nav order ≠ DOM order** — navbar shows Work → Experience → Philosophy → Contact, but page flows Work → Philosophy → Experience → Contact | Medium — creates disorientation and breaks "Experience" anchor navigation expectation |
| D3 | **Hero metrics are the weakest possible** — 80% workflow reduction and 60h/month are from military ops work, and "200+ students" is from a TA role. No technical engineering metrics lead the hero. The first three numbers a visitor sees have nothing to do with software engineering. | High — credibility damage on first impression |
| D4 | **No skills section visible in the page** — The resume has a full skills list (PyTorch, TF, HF, sentence-transformers, C++, MCP, etc.). The site buries tech keywords inside the Philosophy section under vague category headers. | High — keyword scanability for both humans and ATS |
| D5 | **The featured project has no link** — "View on GitHub" links to the general GitHub profile (`github.com/I-c-e-m-a-n`), not to any specific repository | Medium — CTA leads nowhere specific, reduces trust |
| D6 | **"2022 - 2022" date range** on TA entry looks like a rendering error | Low-medium — attention to detail signal |
| D7 | **No project section for the VIP Research project** — the only research credential is either absent or folded into a tiny mini-card with wrong tech labels | High — research depth is invisible |
| D8 | **Philosophy section appears before Experience in DOM flow** — a hiring reader scanning top-to-bottom sees abstract engineering opinions before any employment history | Medium — poor information hierarchy for technical evaluators |
| D9 | **Contact CTA is generic** — "Open to AI engineering roles where I can design systems that reason reliably" says nothing about research interest, ML depth, or the specific seniority level being targeted | Medium |
| D10 | **No projects section anchor in nav** — projects are folded inside "Work" but there is no way to navigate directly to them | Low |
| D11 | **Dark mode default is `false`** (light mode) — the site initializes to light mode. On a dark-first developer portfolio this is a minor but noticeable stylistic mismatch with the aesthetic the dark theme is clearly designed around | Low |
| D12 | **Bundled PDF resume is out of sync with site framing** — the PDF in the repo is a generic SWE variant; a visitor who downloads it will see a different positioning and different title than the site presents | High — incoherent candidate package |
| D13 | **No mobile menu close-on-scroll** — the mobile nav stays open after tap-scrolling to a section in some scroll behaviors | Low |

---

## 7. Weak / Thin Copy Issues

| # | Location | Problem |
|---|---|---|
| C1 | Hero tagline | "I build AI systems that reason reliably" is memorable but consumer-AI-sounding. For a research/backend engineering audience it reads as marketing copy rather than engineering substance. |
| C2 | AIRS description | Three sentences describe a single internal component (ContextScorer) and omit 80% of the resume's actual content for this role. Reads as an intern's one project rather than a software engineer owning production infrastructure. |
| C3 | Philosophy principles | "Token budgets are constraints, not suggestions" and "Ground truth matters" read as opinions rather than demonstrated practices. Without linking these to actual work done, they are unsupported assertions. |
| C4 | Project mini-cards | All three have 1-sentence descriptions. The Autism Learning Tool card ("adaptive learning with model-backed personalization and usability testing") uses vague language and wrong tech labels. |
| C5 | Education block | "AI & Robotics concentration" is invented. The actual Dean's List and specific ML coursework are resume-supported and stronger than an invented concentration. |
| C6 | Contact section | "Available for full-time positions, contract work, and collaborations" has zero targeting — it signals indiscriminate availability rather than a confident candidate with a specific direction. |
| C7 | AIRS title "Intern" | One word that reframes the entire experience tier downward. The resume title is "Software Engineer / AI Engineer." This should not be softened. |

---

## 8. Prioritized Fix List

### Priority 1 — Remove Fabricated Content (Integrity Blockers)

| ID | Fix |
|---|---|
| P1-A | Change AIRS title from "AI Engineering Intern" to "Software Engineer / AI Engineer, Software Infrastructure" — the exact resume title |
| P1-B | Remove "improved submission rates by 40%" from TA entry — not on resume |
| P1-C | Change EY intern date from "2017" to "June 2019 - July 2019" |
| P1-D | Remove "for SG60 NDP" from SAF award description |
| P1-E | Remove "AI & Robotics concentration" — replace with resume-supported coursework list |
| P1-F | Change project stack from PostgreSQL → SQLite in the memory/agent platform project |
| P1-G | Remove TensorFlow and Flask from Autism Learning Tool — replace with resume-supported C++, C#, Unity, Python, Java, Arduino, Bluetooth, Generative AI |
| P1-H | Remove "ETL · Dashboards" from Operations Platform mini-card |
| P1-I | Remove "Penetration testing with Kali, Metasploit, Wireshark" — replace with resume-supported OSINT/log correlation/anomaly analysis |
| P1-J | Remove "Secure System Design" from skills |

### Priority 2 — Restore Missing Research Credential

| ID | Fix |
|---|---|
| P2-A | Add VIP Research Program as a full experience entry — "Undergraduate Researcher, University of Delaware VIP Program \| Aug 2022 – Jan 2023" with full resume-supported bullets |
| P2-B | Restore DALL·E, GPT-3.5, in-house NN work within that entry |
| P2-C | Restore model tuning and evaluation workflow bullets |
| P2-D | Restore safety-oriented content filtering context |

### Priority 3 — Restore Missing AIRS Metrics and Depth

| ID | Fix |
|---|---|
| P3-A | Add 12–15 ms latency metric and ~90% relevant-context hit rate to AIRS description |
| P3-B | Add C++ refactoring bullet to AIRS |
| P3-C | Add MCP servers / tool schemas / agent integration bullet to AIRS |
| P3-D | Add eval harnesses / ranking benchmarks / regression suites bullet to AIRS |
| P3-E | Add distributed AI infrastructure (async workers, queues, distributed jobs) bullet to AIRS |
| P3-F | Add production ownership bullet (release validation, incident debugging) to AIRS |

### Priority 4 — Fix Structural / Navigation Issues

| ID | Fix |
|---|---|
| P4-A | Move Experience section above Philosophy in DOM order — match nav order |
| P4-B | Replace hero metrics with engineering metrics (12–15 ms latency, ~90% hit rate, multi-GB corpus) |
| P4-C | Fix "2022 - 2022" TA date to "Aug 2022 – Dec 2022" |
| P4-D | Fix "View on GitHub" link to point to the specific project repository (or remove it until one exists) |
| P4-E | Sync the bundled PDF resume with the Research/Google-target variant |

### Priority 5 — Fix Missing Skills and Tech Labels

| ID | Fix |
|---|---|
| P5-A | Add a dedicated Skills section with resume-supported tools: PyTorch, TensorFlow, Hugging Face Transformers, sentence-transformers, C++, Java, MCP servers, GitHub Actions |
| P5-B | Expand hero capability tags to reflect actual ML depth: add Retrieval & Ranking, Applied ML, Model Evaluation, MCP / Tool Integration |
| P5-C | Update page title to reflect research + ML framing |
| P5-D | Update meta description to include "retrieval," "ranking," "applied ML research" |

### Priority 6 — Missing OG Image and PDF Sync

| ID | Fix |
|---|---|
| P6-A | Create or add `assets/og-card.png` to fix broken social card unfurl |
| P6-B | Replace bundled `Guruprasad_Nayak_Resume.pdf` with the Research/Google-target resume variant |

### Priority 7 — Copy and Positioning Quality

| ID | Fix |
|---|---|
| P7-A | Rewrite hero sub-tagline to include "research engineering," "applied ML systems," and "accessible AI" — all resume-supported |
| P7-B | Rewrite Contact CTA to signal research/applied-ML interest specifically |
| P7-C | Expand Philosophy section to link principles to demonstrated work rather than leaving them as unanchored assertions |

---

## 9. Narrative Direction Recommendation

### Current Narrative (as the site stands)
The site presents the candidate as a **narrow AI infrastructure / agent memory specialist** — someone who built one context-scoring system at an AI startup. The framing is technically polished but thin, over-specialized, and importantly **does not match the resume**, which presents a substantially more capable and broader candidate.

### What the Resume Actually Supports

The resume supports a narrative of a **software engineer with genuine applied ML and research engineering depth**, specifically:

1. **Production backend systems** — FastAPI services, multi-stage retrieval/ranking pipelines over multi-GB corpora, latency at 12–15 ms, ~90% hit rates, token budget management, C++ performance refactoring, production ownership (incidents, release validation)
2. **ML systems engineering** — PyTorch, TensorFlow, Hugging Face, sentence-transformers, model evaluation workflows, ranking benchmarks, eval harnesses, regression suites
3. **Research-adjacent AI work** — Generative AI systems (DALL·E, GPT-3.5, in-house NNs), prompt optimization, safety-oriented content filtering, accessibility-oriented AI, HCI-informed system design, university research program
4. **Agent and tool infrastructure** — MCP servers, tool schemas, agent integration, distributed AI infrastructure, async workers, queues
5. **Systems and accessibility breadth** — C++, Unity, Android, Bluetooth hardware, cross-platform event-driven systems, accessibility interaction design

### Recommended Narrative

**"Software Engineer who operates at the intersection of production backend systems and applied ML infrastructure — with research-program depth in accessible AI, a production record of shipping retrieval/ranking systems at latency targets, and hands-on experience across the full ML engineering stack from model evaluation to distributed agent infrastructure."**

This narrative is:
- Fully supported by the resume
- Broader and more credible than the current narrow "agent memory" framing
- Directly relevant to Google Research SWE and applied ML research engineering roles
- Differentiated by the VIP research credential + production systems track record + C++ systems work — a combination that most pure "AI engineer" candidates cannot claim

The site should stop positioning the candidate as a **product-facing AI agent specialist** and start presenting them as a **technically rigorous SWE with applied ML and research engineering depth**. Every section should reinforce that.

---

*Audit complete. No code changes made.*
