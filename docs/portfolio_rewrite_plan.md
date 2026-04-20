# Portfolio Rewrite Plan
**Candidate:** Guruprasad Nayak  
**Source of truth:** `Guruprasad_Nayak_Resume_Research-SWE_Google-Research(draft1).pdf`  
**Audit reference:** `docs/portfolio_resume_audit.md`  
**Files to edit:** `index.html` (the entire site is one file)  
**Date:** April 2026

---

## 0. Design Constraints (Non-Negotiable Before Writing Any Copy)

These constraints govern every word written. They do not change.

| Constraint | Rule |
|---|---|
| **Fabrication prohibition** | Zero invented metrics, tools, titles, scope, or context. Resume is the ceiling. |
| **Reframing allowed** | Facts may be contextualized, sequenced, and framed for emphasis. Wording does not need to be verbatim. |
| **Precision over superlatives** | No "passionate," "innovative," "driven," or "cutting-edge." Use concrete technical language. |
| **Believability test** | Every claim must pass: "Could a senior engineer on the hiring committee verify this from the resume?" |
| **Metric fidelity** | Metrics used: 12–15 ms latency, ~90% relevant-context hit rate, ~80% manpower reduction, ~60 h/month saved, 200+ students. No others. The ~30% token reduction appears only in the bundled SWE resume, not the target resume — treat as unverifiable, do not use. |
| **Title fidelity** | AIRS title: "Software Engineer / AI Engineer, Software Infrastructure." No softening to "intern." |
| **Research program fidelity** | VIP = "Undergraduate Researcher, University of Delaware VIP Research Program, Aug 2022 – Jan 2023." |
| **EY dates** | June 2019 – July 2019. Not 2017. |
| **Education** | B.S. Computer Science, University of Delaware. No concentration. Coursework: DSA, OS, Database Systems, Software Engineering, Machine Learning. Dean's List. |

---

## 1. Final Recommended Site Narrative

### The Story in One Paragraph

Guruprasad Nayak is a software engineer with production experience in backend systems, retrieval and ranking pipelines, and applied ML infrastructure — combined with formal research-program work at the intersection of generative AI, accessibility, and HCI. He has shipped latency-sensitive backend services at a production AI company, owns eval harnesses and release validation pipelines, has refactored performance-critical Python into C++, and has built distributed agent infrastructure including MCP server integration. Separately, as an undergraduate researcher, he worked directly with DALL·E, GPT-3.5, and in-house neural networks on safety-oriented content filtering and model evaluation for an accessible AI system. This is a candidate with both production systems depth and research-program credibility — the combination is the differentiator.

### The Story Arc (Hero → CTA)

```
HERO
 ↓  Opens on the engineering identity: production SWE with applied ML and research depth.
    Three metrics that signal engineering impact, not ops/admin work.
    Capability tags that reflect the full resume stack.

EXPERIENCE
 ↓  The primary credential. Leads with AIRS Foundry — production backend work,
    retrieval/ranking at scale, C++ performance work, eval rigor, production ownership.
    Then VIP Research — the research credential. Accessible AI, generative AI systems,
    model evaluation, safety filtering.
    Then SAF — operational leadership, process digitization, measurable automation impact.
    Then TA + EY — supporting credentials, brief.

PROJECTS
 ↓  Two resume-supported projects with accurate names, accurate stacks, honest scope.
    Multi-Service Workflow & Integrations Platform as the technical depth project.
    Accessible Interactive Music System as the research/systems breadth project.
    No invented standalone projects. No fabricated third project.

SKILLS
 ↓  A dense, scannable skills section. Resume-exact categories.
    PyTorch, TF, HF, sentence-transformers, C++, MCP — all visible.
    Organized by the resume's own skill groupings.

PHILOSOPHY / APPROACH  (kept but repositioned as a supporting section, not a credibility proxy)
 ↓  Short. Grounded in demonstrated work. Not a substitute for experience.

CONTACT
    Specific. Names the kind of role being sought.
    No indiscriminate "available for everything."
```

### Why This Narrative Works

- It reflects the actual resume, not a narrowed or inflated version of it.
- It puts production engineering evidence first, research evidence second — the correct order for a Research SWE application where production experience is a prerequisite.
- It makes C++ systems work, distributed infrastructure, eval engineering, and MCP tooling visible — all of which are currently invisible.
- It restores the VIP research credential, which is the only formal research entry on the resume and is critical for research-adjacent applications.
- It eliminates the "agent memory specialist" over-narrowing of the current site without overclaiming.

---

## 2. Section-by-Section Rewrite Strategy

---

### Section 1: Metadata (Head)

**Strategy:** Rewrite the `<title>`, `<meta description>`, OG tags, and JSON-LD to reflect the broader, research-aware positioning.

**Keep:**
- JSON-LD `Person` schema structure
- Canonical URL
- Charset, viewport, robots meta

**Remove:**
- "Agent Architect" from title — not a resume title
- "agentic architectures" as sole focus — too narrow

**Rewrite:**
- `<title>`: `Guruprasad Nayak | Software Engineer · Applied ML & Research Systems`
- `<meta name="description">`: Surface retrieval/ranking, applied ML, research engineering, backend systems, accessibility AI
- OG title: match `<title>` — remove "Agent Architect"
- JSON-LD `jobTitle`: `"Software Engineer, Applied ML & Research Systems"`
- JSON-LD `knowsAbout`: add PyTorch, retrieval systems, model evaluation, accessibility AI; keep Python/FastAPI

**Forbidden claims in metadata:**
- "Agent Architect" (not a resume title)
- "AI Systems Engineer" as standalone title (resume title is Software Engineer / AI Engineer)
- Any claim of specialization not on resume

---

### Section 2: Hero (`#top`)

**Strategy:** Replace the consumer-AI tagline and weak metric strip. Make the first 3 seconds communicate production engineering credibility and research depth simultaneously. Capability tags must map to the actual resume skill clusters.

**Keep:**
- The visual layout (monospace location line, headline, sub-tagline, tags, metrics, links)
- The `.dev` wordmark in the navbar
- The dark/light toggle and resume download link

**Remove:**
- "I build AI systems that reason reliably." — too consumer-AI, not precise enough for research/backend engineering audience
- Metric: "200+ students taught" — TA work is not a lead engineering credential; move this to the TA entry
- Metric: "60h saved monthly" — ops/admin metric; belongs in SAF entry only
- Metric: "80% workflow reduction" — same issue; belongs in SAF entry only
- Capability tags: "Agent Memory," "Context Selection" as the only descriptors — too narrow

**Rewrite — sub-tagline:**
Replace with language that names the actual stack and scope without hype. See draft copy block below.

**Rewrite — capability tags (8 tags, two rows):**
Use resume skill category names as the source:
- Row 1: `Retrieval & Ranking` · `Applied ML Systems` · `Backend Infrastructure` · `Model Evaluation`
- Row 2: `Agent / MCP Tooling` · `Distributed Systems` · `Accessible AI` · `Observability`

All eight are directly supported by resume skill categories or experience bullets.

**Rewrite — hero metrics (3 stats):**
Replace ops metrics with engineering-impact metrics:
- `12–15 ms` / `retrieval latency (production)` — AIRS resume bullet
- `~90%` / `relevant-context hit rate` — AIRS resume bullet
- `multi-GB` / `corpus scale` — AIRS resume bullet ("multi-GB corpus")

These three are on the target resume. They communicate production engineering credibility immediately. The ops/TA metrics move to their correct section entries.

**Forbidden in hero:**
- "reason reliably" as the headline (allowed to keep if reworded to be more engineering-precise; see draft)
- "200+ students," "60h/month," "80% reduction" as hero metrics — they belong in experience entries
- Any ML framework claim in tags that implies model training not supported by resume (e.g., "LLM Training")
- "Agent Architect" as a title

#### Draft Copy — Hero Sub-tagline

```
Software engineer with production experience in retrieval and ranking systems, 
applied ML infrastructure, and distributed backend services. Research background 
in accessible AI and generative AI systems at the University of Delaware VIP program.
```

#### Draft Copy — Hero Headline

Option A (keep structural form, replace content):
```
I build backend systems that
ship reliably at scale.
```

Option B (more precise for research-engineering audience):
```
Production systems engineer.
Applied ML depth.
```

Option C (keeps some rhetorical weight without consumer-AI tone):
```
I ship retrieval systems.
I ship evaluations.
I ship reliable backends.
```

**Recommendation:** Option A. It preserves the site's visual rhythm, eliminates the vague "reason reliably," and is technically accurate. The sub-tagline carries the specificity.

---

### Section 3: Experience (`#experience`)

**Strategy:** This section needs the most work. Five entries, one completely missing (VIP Research), one with a fabricated title downgrade (AIRS), one with invented metrics (TA), one with wrong dates and invented tools (EY). Sequence changes: Experience moves above Philosophy in DOM order.

**DOM reorder:** Move `#experience` above `#philosophy`. The current DOM order (Work → Philosophy → Experience → Contact) buries the employment history behind abstract opinions. Hiring engineers scan credentials first.

**Nav update:** Navbar already lists Experience before Philosophy — the DOM must match.

#### Entry 1: AIRS Foundry (Primary — Expand Significantly)

**Keep:** The core context (retrieval/ranking/context selection, observability)  
**Fix title:** "Software Engineer / AI Engineer, Software Infrastructure" — exact resume title  
**Fix dates:** "Dec 2025 – Present"  
**Expand with all resume-supported bullets:**

**Allowed claims (direct from target resume):**
- Production FastAPI backend for context selection and ranking
- Latency reduced to 12–15 ms
- ~90% relevant-context hit rate through candidate filtering, similarity ranking, configuration-driven scoring
- Multi-stage retrieval pipeline over a multi-GB corpus balancing relevance, latency, and token-budget constraints
- Refactored performance-sensitive Python components into C++ for latency-critical backend paths
- Built and integrated MCP servers and tool interfaces — tool schema definition, execution flow, structured logging, debugging instrumentation, observability, agent-facing API integration
- Built eval harnesses, ranking benchmarks, latency profiling, regression suites, and release validation gates
- Developed distributed AI infrastructure — multi-service backends, async workers, queues, distributed jobs, parallel-processing components
- Owned production-facing responsibilities: release validation, incident debugging, alert response, uptime-sensitive fixes
- Built internal workflow tooling and orchestration interfaces, reducing manual setup effort via reusable nodes and API-driven workflow composition
- Collaborated with engineers, model teams, infrastructure stakeholders, and product-aligned teams

**Forbidden claims for AIRS:**
- "Intern" or any intern-level framing
- "ContextScorer" as a product name (it is an internal component; describe its function instead)
- ~30% token reduction metric (only in bundled SWE resume, not target resume — do not use)
- Any claim about independent project ownership not stated in resume

**Display strategy:** Show 4–5 bullets on the card, collapsible or scrollable if needed. The current single-paragraph approach undersells this role catastrophically. This should be the longest, most detailed entry on the page.

#### Draft Copy — AIRS Entry Description

```
Built and shipped production backend services for generative AI and agent workflows 
at a software infrastructure company. Work spans retrieval and ranking pipeline 
design over multi-GB corpora, latency optimization to 12–15 ms with ~90% 
relevant-context hit rate, MCP server and tool schema integration, eval harness 
and regression suite construction, and distributed infrastructure across async workers, 
queues, and parallel-processing components. Refactored performance-sensitive Python 
into C++ for latency-critical paths. Owns production reliability including release 
validation, incident debugging, and alert response.
```

---

#### Entry 2: VIP Research Program — RESTORE (Currently Absent)

**Action:** Add as a full experience entry. This is the most critical missing entry for research-adjacent applications.

**Title:** Undergraduate Researcher  
**Organization:** University of Delaware VIP Research Program  
**Dates:** Aug 2022 – Jan 2023  

**Allowed claims (all from target resume):**
- University research program focused on accessible AI systems for children on the autism spectrum
- Built software for controlled exposure to environmental sounds and stimuli through interactive experiences
- Developed AI integration components in Python and application/interface components in C++ and Unity, including Android plugin work and visual interface development
- Worked with generative AI systems including DALL·E, GPT-3.5, and in-house neural network components for image generation, prompt generation, prompt optimization, image filtering, and safety-oriented content tuning
- Supported model tuning and evaluation workflows by comparing outputs across parallel model runs, identifying data patterns associated with desirable outcomes, filtering high-variance or unsafe content pathways
- Integrated external web data sources and university HCI/AI research inputs to improve content relevance, safety, and usability
- Collaborated with researchers and HCI stakeholders to build accessible technology at the intersection of AI, interaction design, and user-centered systems

**Forbidden claims for VIP:**
- Any claim about model fine-tuning ownership (resume says "supported" evaluation/tuning workflows — not "owned" or "led")
- Any specific dataset sizes or model performance metrics not on resume
- TensorFlow or Flask (not in this project's stack on resume)

**Display strategy:** 3–4 bullets. Position between AIRS and SAF in the timeline (chronologically: AIRS is current, VIP was 2022–2023 during undergrad, SAF was 2023–2025).

**Chronological note:** The correct timeline order displayed top-to-bottom should be:
1. AIRS Foundry — Dec 2025–Present (most recent)
2. Singapore Armed Forces — Jul 2023–Aug 2025
3. VIP Research Program — Aug 2022–Jan 2023 (overlaps with TA)
4. Teaching Assistant — Aug 2022–Dec 2022 (overlaps with VIP)
5. EY / Cybersecurity Intern — Jun 2019–Jul 2019

#### Draft Copy — VIP Research Entry Description

```
Undergraduate researcher in a university program building accessible AI systems 
for children on the autism spectrum. Developed Python AI integrations and C++/Unity 
interface components, including Android plugin work and visual interface development. 
Worked with DALL·E, GPT-3.5, and in-house neural network components for image 
generation, prompt optimization, and safety-oriented content filtering. Supported 
model evaluation workflows: comparing outputs across parallel model runs, identifying 
desirable outcome patterns, and filtering high-variance or unsafe content pathways. 
Collaborated with HCI researchers and accessibility stakeholders.
```

---

#### Entry 3: Singapore Armed Forces

**Keep:** Core story — digital transformation, measurable impact  
**Fix:** Remove "for SG60 NDP" — invented context  
**Add:** "Standardized fragmented operational processes into structured digital workflows" bullet (on resume, currently missing)

**Allowed claims:**
- Led 30-person operations in high-accountability environment, coordinating execution, scheduling, and cross-team activities under changing priorities and time-sensitive constraints
- Architected and launched the unit's first digital operations platform, replacing paper-based workflows and reducing manpower requirements by ~80%
- Built internal automation tools for personnel accounting and reporting, eliminating repetitive manual work and saving ~60 hours per month
- Standardized fragmented operational processes into structured digital workflows, improving consistency, traceability, and turnaround for recurring unit tasks
- Received the Safety Steward Award and became the first Sergeant in battalion history to receive the 23SA Regimental Sergeant Major's Coin

**Forbidden claims for SAF:**
- "for SG60 NDP" — not on resume
- Any tech stack labels (the resume does not specify tools used for the SAF platform)
- "Python · ETL · Dashboards" — the resume does not name these tools in the SAF context

**Display strategy:** Keep as a 3-bullet summary. The leadership + automation impact story is compelling and already on the resume. Don't over-expand this in a software engineering portfolio. The 80%/60h metrics belong here, not in the hero.

---

#### Entry 4: Teaching Assistant

**Fix dates:** Aug 2022 – Dec 2022 (not "2022 - 2022")  
**Remove:** "improved submission rates by 40%" — fabricated metric, not on resume  
**Remove:** "Contributed to HCI research on AI-driven learning tools" — conflation with VIP entry; they are separate roles

**Allowed claims:**
- Supported 200+ students across data structures, algorithms, systems, and programming fundamentals through debugging help, technical walkthroughs, and problem-solving guidance
- Reinforced core CS concepts including algorithmic complexity, recursion, data structures, and systems behavior

**Forbidden claims for TA:**
- Any metric about submission rates, pass rates, or grade improvements — not on resume
- Any research attribution — research work belongs to VIP entry only

**Display strategy:** 2 sentences or 1 brief paragraph. This is a supporting credential, not a lead entry. Keep proportional.

---

#### Entry 5: EY / Maharashtra Cyber Police

**Fix dates:** Jun 2019 – Jul 2019 (not "2017")  
**Remove:** "Penetration testing with Kali, Metasploit, Wireshark" — not on resume  
**Keep:** OSINT, anomaly analysis, vulnerability assessment, log correlation — all on resume

**Allowed claims:**
- Conducted OSINT investigations, anomaly analysis, and vulnerability assessment across security-sensitive environments using multiple technical data sources
- Correlated logs, open-source signals, and investigative artifacts to support threat triage, incident analysis, and evidence-based reporting

**Forbidden claims for EY:**
- Kali, Metasploit, Wireshark — not on resume
- Any claim about specific vulnerabilities found or systems compromised
- "Penetration testing" as a framing (resume says vulnerability assessment and OSINT, not pentest)

**Display strategy:** 1–2 sentences. Brief entry. Supports the CEH certification and security background without over-claiming.

---

#### Education Block (within Experience or separate subsection)

**Keep:** University of Delaware, B.S. CS, 2019–2023, Dean's List  
**Remove:** "AI & Robotics concentration" — fabricated  
**Add:** Coursework list — Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Machine Learning  
**Keep:** CEH, MIT Sloan certifications  

**Allowed:**
- `B.S. Computer Science · University of Delaware · 2019–2023 · Dean's List`
- `Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Machine Learning`
- `EC-Council Certified Ethical Hacker (CEH)`
- `MIT Sloan: AI: Implications for Business Strategy · Blockchain Technologies: Business Innovation and Application · Internet of Things: Business Implications`

**Forbidden:**
- "AI & Robotics concentration" — not on resume

---

### Section 4: Projects (`#work`)

**Strategy:** Stop presenting internal work components as independent projects. Stop using fabricated project names. Present two clear, honest, accurately-titled projects from the resume. The "Context Scorer" mini-card is work done at AIRS and should not appear as an independent project. The "Agentic Memory System" title does not appear on the resume. Rename and scope-correct.

**Remove entirely:**
- "Context Scorer" mini-card — this is AIRS internal work, not a personal project
- "Agentic Memory System" as a standalone featured project — this name does not appear in the resume

**Keep and correct:**
- Multi-Service Workflow & Integrations Platform (rename from "Agentic Memory System")
- Accessible Interactive Music System (rename and re-stack from "Autism Learning Tool")

**Remove mini-card:**
- "Operations Platform" mini-card — the SAF platform belongs in the Experience section, not Projects

**Section becomes:** Two projects with honest titles, accurate stacks, honest scope.

#### Project 1: Multi-Service Workflow & Integrations Platform

**Title (resume-exact):** Multi-Service Workflow & Integrations Platform  
**Label:** Personal Project  
**Stack (resume-exact):** Python · FastAPI · React · TypeScript · SQLite  

**Allowed claims:**
- Multi-service platform spanning chat, memory retrieval, task orchestration, and web research
- Central router coordinating requests across independently scoped backend services
- Designed service boundaries, request/response validation, and capability-based routing for integration safety, observability, and maintainability
- Implemented frontend and backend components across React, TypeScript, FastAPI, and SQLite supporting multi-step workflows, persisted state, and inter-service communication
- Built event-driven and streaming interactions across CLI and web interfaces supporting asynchronous workflows and service coordination

**Forbidden claims:**
- "Agentic Memory System" as title
- PostgreSQL (resume says SQLite)
- "Tiered hot/warm/cold storage" — not on resume for this project
- "Redundancy penalties," "gap-fill bonuses," "grounding validation" — not resume-supported for this project
- Any production metrics attributed to this personal project (the 12–15 ms and ~90% metrics belong to AIRS)

**Display strategy:** The project card should be prominent but honest. No inflated architecture claims. The multi-service, event-driven, full-stack scope is genuinely impressive on its own.

#### Project 2: Accessible Interactive Music System

**Title (resume-exact):** Accessible Interactive Music System  
**Label:** Modular Music VIP Research Program  
**Stack (resume-exact):** C++ · C# · Unity · Python · Java · Arduino · Android · Bluetooth · Generative AI  

**Allowed claims:**
- Interactive accessibility system for children on the autism spectrum using Android, Unity, Bluetooth-connected hardware, and real-time UI feedback
- C++/Unity interface components and Python AI integrations
- Session logging, replay/visualization, and controller-driven workflows across Unity, Arduino, Python, and Java for cross-platform debugging and reliability
- DALL·E, GPT-3.5, and in-house neural network components for image generation, prompt optimization, filtering, and safety-oriented content tuning
- Accessibility-oriented interaction patterns using alternative hardware inputs and real-time feedback

**Forbidden claims:**
- TensorFlow (not in this project's stack)
- Flask (not in this project's stack)
- "adaptive learning with model-backed personalization and usability testing" — vague/inaccurate framing
- Any model performance metrics for the generative AI components

**Display strategy:** This project demonstrates the research + systems breadth that differentiates this candidate. The hardware + AI + accessibility combination is unusual and should be presented as such — not reduced to "HCI research project."

---

### Section 5: Skills / Technical Depth (New dedicated section)

**Strategy:** The current site has no standalone skills section. Technical keywords are buried in the Philosophy section under vague headers, and the most important ML frameworks (PyTorch, TF, HuggingFace, sentence-transformers) appear nowhere. Add a dedicated, scannable skills section between Projects and Philosophy (or between Experience and Projects). Use the resume's own skill category structure.

**Section ID:** `#skills`  
**Nav label:** "Skills" (add to navbar between Experience and Philosophy, or replace Philosophy in nav)

**Structure (four resume-derived categories):**

```
Languages
  Python · C++ · Java · TypeScript · JavaScript · SQL

Applied ML / Research Engineering  
  PyTorch · TensorFlow · Hugging Face Transformers · sentence-transformers
  NLP · embeddings · transformer-based systems · prompt optimization
  model evaluation · tuning workflows · retrieval · ranking systems
  safety-oriented filtering

Backend / Systems
  FastAPI · Flask · REST APIs · async systems · distributed services
  Redis · Docker Compose · GitHub Actions · Linux/Unix
  observability · structured logging · regression testing · release validation

Agent / Infrastructure
  MCP servers · tool schemas · agent integration · API orchestration
  multi-service architecture · async workers · distributed jobs
  queues · parallel processing

Product / Accessibility
  Unity · Android plugin development · multimodal interaction
  accessibility-oriented software design · HCI-aligned systems
```

**All items above are directly from the target resume skills section. Zero fabrication.**

**Forbidden in Skills:**
- "Fine-tuning" as a standalone skill (resume says "tuning workflows" — scope is evaluation and workflow support, not model fine-tuning ownership)
- "Secure System Design" — not a resume claim
- Any tool not on the resume (e.g., Kubernetes, Postgres without SQLite, MongoDB)

**Display strategy:** Two-column or grouped chip layout. Monospace font to match the site's existing aesthetic. Each category as a labeled group. Dense but readable. Visible above the fold on desktop for at least one category.

---

### Section 6: Engineering Philosophy (`#philosophy`)

**Strategy:** Demote this section. It is currently the second visible section after Featured Work, which means abstract opinions appear before employment history. Move it to fourth (after Experience, before Contact). Trim to a brief section. Ground each principle in work described elsewhere on the page — principles stated without evidence are marketing copy.

**Keep (structure):** The two-column layout with principles left and stack right  
**Remove (stack column):** Since skills now have a dedicated section, the "What I build with" column in Philosophy becomes redundant. Replace with something brief about approach.  
**Trim principles from 4 to 3** — remove "Ground truth matters. Hallucination guardrails should be evaluated, not assumed." (weakest principle — reads as consumer-AI advice rather than engineering practice)

**Rewrite principles to tie to demonstrated work:**

```
Principle 1 (AIRS-anchored):
"Retrieval accuracy is measurable. A ~90% relevant-context hit rate at 12–15 ms 
doesn't happen without scoring pipelines that are deterministic and tunable."

Principle 2 (AIRS + eval work-anchored):
"Eval harnesses before shipping. If a ranking change can't be measured 
against a regression suite, it isn't production-ready."

Principle 3 (VIP research-anchored):
"Systems that serve people with different needs require more rigorous design, 
not less. Accessibility work taught me to build with deliberate constraints 
as a feature, not an afterthought."
```

**Note:** These three principles are grounded in specific resume-supported work. They read as observed practice rather than opinions. They differentiate without overclaiming.

**Forbidden in Philosophy:**
- "Token budgets are constraints, not suggestions" — remove (sounds like prompt-engineering advice, not backend engineering principle)
- Any principle that sounds like LLM product advice rather than backend/systems engineering practice
- The "What I build with" tech stack column — now redundant since Skills section covers this properly

---

### Section 7: Contact / CTA (`#contact`)

**Strategy:** Replace the generic "available for everything" framing with specific directional language. The current CTA — "Available for full-time positions, contract work, and collaborations" — signals indiscriminate availability. For a targeted research/applied-ML application, the contact section should name what the candidate is specifically interested in.

**Keep:** Layout, email, LinkedIn, GitHub links  
**Rewrite headline:** Remove "reason reliably" repetition from hero  
**Rewrite body:** Be specific about role type and interest

#### Draft Copy — Contact Section

**Headline:**
```
Open to software engineering roles in applied ML systems, 
research infrastructure, and production backend work.
```

**Sub-copy:**
```
Particularly interested in roles at the intersection of systems engineering 
and applied ML — retrieval, ranking, evaluation pipelines, agent infrastructure, 
or accessible AI research. Based in Singapore.
```

**CTA button/link:**  
Keep email + LinkedIn + GitHub. Add: Resume PDF download link clearly labeled.

**Forbidden in Contact:**
- "reason reliably" (repetition — it was the hero headline, shouldn't be the CTA too)
- "Available for full-time positions, contract work, and collaborations" — too generic
- Any invented role titles or claimed specializations not on resume

---

## 3. Exact Claims Allowed Per Section (Consolidated Reference)

| Section | Allowed metrics / claims |
|---|---|
| Hero metrics | 12–15 ms (retrieval latency), ~90% (relevant-context hit rate), multi-GB (corpus scale) |
| Hero tags | Retrieval & Ranking · Applied ML Systems · Backend Infrastructure · Model Evaluation · Agent / MCP Tooling · Distributed Systems · Accessible AI · Observability |
| AIRS | All bullets from target resume. Title: Software Engineer / AI Engineer. Dec 2025–Present. |
| VIP Research | All bullets from target resume. Aug 2022–Jan 2023. |
| SAF | All bullets from target resume. ~80% manpower reduction. ~60 h/month saved. Awards as stated. Jul 2023–Aug 2025. |
| TA | 200+ students. Aug 2022–Dec 2022. No other metrics. |
| EY | OSINT, anomaly analysis, vulnerability assessment, log correlation. Jun 2019–Jul 2019. |
| Project 1 | Multi-service platform. Python/FastAPI/React/TypeScript/SQLite. Service routing, event-driven, streaming, full-stack. |
| Project 2 | Accessible Interactive Music System. C++/C#/Unity/Python/Java/Arduino/Android/Bluetooth/Generative AI. All bullets from target resume project entry. |
| Skills | All items in the resume's four skill categories verbatim. |
| Education | B.S. CS, UD, 2019–2023, Dean's List. Coursework: DSA, OS, DB, SWE, ML. CEH. MIT Sloan certs as listed. |
| Philosophy | Three grounded principles tied to specific work. No stack list (covered in Skills). |
| Contact | Open to applied ML systems / research infrastructure / backend roles. Singapore. |

---

## 4. Exact Claims Forbidden (Consolidated Reference)

| Claim | Location(s) | Reason |
|---|---|---|
| "Intern" / "AI Engineering Intern" | AIRS entry | Resume title is Software Engineer / AI Engineer |
| "improved submission rates by 40%" | TA entry | Not on resume — fabricated |
| "2017" as EY date | EY entry | Resume says 2019 |
| "for SG60 NDP" | SAF entry | Not on resume — fabricated context |
| "AI & Robotics concentration" | Education | Not on resume — fabricated |
| PostgreSQL | Projects | Resume says SQLite |
| TensorFlow · Flask | Autism/VIP project | Not in resume stack for this project |
| "ETL · Dashboards" | Operations Platform | Not on resume |
| Kali, Metasploit, Wireshark | EY entry | Not on resume |
| "Secure System Design" | Skills / Philosophy | Not on resume |
| "Agentic Memory System" as standalone project | Projects | This project name does not appear in the resume |
| "tiered hot/warm/cold storage" | Projects | Architectural claim not on resume for this project |
| "redundancy penalties," "gap-fill bonuses" | Projects | Not resume-supported for the personal project |
| "grounding validation" as project feature | Projects | Not in project description on resume |
| ~30% token reduction | Any section | Appears only in bundled SWE resume (different variant), not target resume |
| "Fine-tuning" as a skill | Skills | Resume says "tuning workflows" — different scope |
| "Agent Architect" as title | Title/meta/hero | Not a resume title |
| "Contributed to HCI research" in TA entry | TA entry | Conflation — VIP is a separate entry |
| Context Scorer as independent project | Projects | It is a work deliverable at AIRS, not a personal project |
| Operations Platform as a project card | Projects | SAF platform belongs in Experience, not Projects |
| "Available for full-time, contract, collaborations" | Contact | Too generic — replace with targeted framing |
| "reason reliably" repeated in Contact | Contact | Already used in hero; repetition weakens both |

---

## 5. Proposed Content Hierarchy (DOM Order)

```
<head>
  Metadata: title, description, OG, Twitter card, JSON-LD — all rewritten

<header> Navbar
  guruprasad.dev wordmark
  Nav links: Work | Experience | Skills | Contact  ← Philosophy removed from nav / renamed
  Theme toggle + Resume PDF download

#top — Hero
  Monospace location line
  Headline: "I build backend systems that ship reliably at scale."
  Sub-tagline: Production SWE + applied ML + research depth (3 sentences max)
  Tags: 8 capability chips (2 rows)
  Metrics: 12–15 ms / ~90% hit rate / multi-GB corpus
  Links: Email · GitHub · LinkedIn

#work — Projects
  Section label: "Projects"
  Project 1: Multi-Service Workflow & Integrations Platform (featured card, full description)
  Project 2: Accessible Interactive Music System (secondary card, honest stack)

#experience — Experience
  Section label: "Experience"
  1. AIRS Foundry — Dec 2025–Present (expanded, 5–6 bullets)
  2. Singapore Armed Forces — Jul 2023–Aug 2025 (3 bullets)
  3. VIP Research Program — Aug 2022–Jan 2023 (3–4 bullets)
  4. Teaching Assistant — Aug 2022–Dec 2022 (2 bullets)
  5. EY Cybersecurity Intern — Jun 2019–Jul 2019 (2 bullets)
  — — — divider — — —
  Education + Certifications block

#skills — Technical Skills  ← NEW section, replaces Philosophy's "What I build with" column
  Languages
  Applied ML / Research Engineering
  Backend / Systems
  Agent / Infrastructure
  Product / Accessibility

#philosophy — Approach  ← Demoted, shortened, renamed
  3 grounded principles tied to specific work

#contact — Contact
  Targeted headline
  Role interest statement (applied ML systems / research infrastructure / backend)
  Email · LinkedIn · GitHub · Resume PDF

<footer>
  © year · Singapore
```

---

## 6. Files / Components to Edit

The entire site is a single file. All changes are to `index.html`.

| Area in `index.html` | Lines (approx) | Change type |
|---|---|---|
| `<head>` metadata | 1–130 | Rewrite title, description, OG tags, JSON-LD |
| Navbar links + order | 140–168 | Add Skills anchor; reorder nav to match DOM |
| Hero headline | 183–186 | Rewrite headline text |
| Hero sub-tagline | 188–191 | Full rewrite |
| Hero capability tags | 194–199 | Replace all 4 tags with 8 new tags (2 rows) |
| Hero metrics strip | 202–215 | Replace all 3 metrics + labels |
| `#work` section label | 238 | Rename from "Featured Work" to "Projects" |
| Featured project | 241–283 | Rename, re-scope, correct stack (SQLite), remove fabricated architectural claims |
| Project mini-cards | 286–302 | Remove Context Scorer card; replace Operations Platform card; correct Autism Tool stack |
| `#philosophy` section | 307–351 | Move in DOM to after #skills; trim to 3 grounded principles; remove stack column |
| `#experience` section | 352–433 | Move to before #skills in DOM; expand AIRS; add VIP entry; fix SAF; fix TA; fix EY; fix education |
| Skills section | ~435 (new) | Insert new `#skills` section between #experience and #philosophy |
| `#contact` section | 436–463 | Rewrite headline and sub-copy |
| `<footer>` | 465–471 | No change needed |
| `<script>` Alpine init | 473–504 | Add `#skills` to any scroll/nav logic if needed |
| Navbar anchor list | 140–145 | Add `href="#skills"` link |

**Other files:**
- `Guruprasad_Nayak_Resume.pdf` — Replace with target resume variant (Research/Google draft1)
- `.github/workflows/jekyll-docker.yml` — Can be deleted (vestigial; does not affect deployment)
- `assets/og-card.png` — Create this file (currently missing; all social shares 404)

---

## 7. Tone and Language Guidelines

**Use:** concrete technical nouns, specific system names, active voice, past tense for completed work  
**Avoid:** "passionate," "innovative," "cutting-edge," "impactful," "world-class," "leverage," "utilize," "robust"  
**Sentence length:** Short to medium. Technical audiences skim. Each sentence should carry one claim.  
**Credential language:** "Worked with DALL·E, GPT-3.5, and in-house NNs" — not "built state-of-the-art generative AI"  
**Metric language:** "~90% relevant-context hit rate" — not "near-perfect accuracy"  
**Scope language:** "Supported model evaluation workflows" (VIP) vs "Owned retrieval pipeline" (AIRS) — the distinction in agency matters  
**Research language:** "University research program," "collaborated with researchers," "supported evaluation workflows" — not "led research"  
**Production language:** "Shipped production backend services," "owned release validation," "incident debugging" — specific, credible  

---

*Plan complete. No code changes made. Ready for implementation phase.*
