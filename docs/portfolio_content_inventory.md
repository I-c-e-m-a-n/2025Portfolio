# Portfolio Content Inventory
**Source of truth:** Resume draft4 (`/Users/ice/Downloads/Guruprasad_Nayak_Resume_Research-SWE_Google-Research(draft4).pdf`), live site, and private repo inspection.
**Audit date:** April 2026

---

## 1. Certifications

| Certificate | Issuer | Status in Portfolio | Action |
|---|---|---|---|
| EC-Council Certified Ethical Hacker (CEH) | EC-Council | Buried — subtitle line in Education card | Promote to dedicated Certifications block |
| MIT Sloan Executive Education: AI Strategy | MIT Sloan | Buried — same subtitle line | Promote to dedicated Certifications block |
| Additional certs from Certificates PDF | TBD | Not verified — PDF not yet parsed | Inspect PDF; extract any additional entries |

> **Note:** The Certificates PDF at `/Users/ice/Downloads/Certificates.pdf` was not readable as text in this session (binary PDF). The two certs above are confirmed from the resume. The implementation phase must inspect the PDF and extract any additional certificates before the Certifications block is built.

---

## 2. Strongest Google-Relevant Technical Signals

### Python / C++
- **Python:** Production retrieval and ranking pipeline at AIRS Foundry (Python, FastAPI, async workers, structured logging)
- **Python:** BTC 24h Forecaster — LightGBM, FinBERT, quantile regression, walk-forward evaluation
- **Python:** Sensify Lab — AI integration pipeline (GPT-3.5, DALL-E, in-house neural net)
- **Python:** Web search microservice — Pydantic v2, httpx, circuit breaker state machine
- **C++:** Hot-path refactor at AIRS Foundry to reduce inference latency ("latency-critical Python components into C++ to reduce hot-path overhead")
- **C++:** Sensify Lab Unity runtime

### Data Structures & Algorithms
- **BM25 retrieval** — named in the AI backend (hybrid BM25 + embedding search)
- **Pathfinding (DnD map)** — stepwise pathfinding in mcp-world-ops-agent job queue
- **Intent compiler** — regex + rule-based classification, not LLM-dependent, O(1) dispatch
- **Circuit breaker state machine** — closed/open/half-open in web search service
- **Priority-ordered fallback chain** — ProviderRouter sequential fallback
- **Teaching Assistant credential** — DS&A course, 200+ students

### Core ML
- **Multi-horizon LightGBM forecaster** — 8h, 16h, 24h predictions with quantile regression (BTC 24h Forecaster)
- **Walk-forward validation** — rolling window evaluation methodology
- **Prediction intervals** — 80% and 95% confidence intervals via quantile regression
- **FinBERT sentiment** — applied NLP on financial headlines (rolling aggregation)
- **In-house neural network** — content safety filtering for generative AI outputs (Sensify Lab)
- **Hybrid BM25 + embedding search** — three-layer memory retrieval (AI backend)
- **Embedding models** — sentence-transformers for semantic similarity
- **Model evaluation** — regression suites gating every pipeline change at AIRS Foundry

### Transformer Understanding
- **Hugging Face Transformers** — listed in skills; used via sentence-transformers and FinBERT
- **FinBERT** — transformer-based financial NLP model integrated in BTC forecaster
- **GPT-3.5** — prompt optimization in Sensify Lab AI pipeline
- **sentence-transformers** — embedding generation for retrieval
- **Gap:** No prose currently demonstrates *understanding* of transformer internals (attention mechanism, MHA, positional encoding, tokenization) — this is the single largest content gap for the role.

---

## 3. Strongest Measurable Outcomes

| Metric | Source | Context | Credibility |
|---|---|---|---|
| 12–15 ms retrieval latency | Resume, live site | Multi-stage retrieval over multi-GB corpus at AIRS Foundry | High — resume-verified |
| ~90% relevant-context hit rate | Resume, live site | Same pipeline | High — resume-verified |
| ~80% manpower reduction | Resume, live site | First digital ops platform, Singapore Armed Forces | High — resume-verified |
| ~60 h/mo manual work eliminated | Resume, live site | Automation tooling, Singapore Armed Forces | High — resume-verified |
| 900+ unit and integration tests | Live site, AI backend codebase | Multi-service AI backend | High — codebase-verified |
| 200+ students supported | Resume, live site | TA, DS&A + systems courses | High — resume-verified |
| UDaily feature coverage | External URL, live | Sensify Lab project, March 2023 | High — live link |
| Walk-forward evaluation | BTC forecaster codebase | Directional accuracy, RMSE, MAE, MAPE, interval coverage | Medium — private repo, not yet on portfolio |

---

## 4. Strongest Research / Accessibility Signals

| Signal | Source | Strength | Action |
|---|---|---|---|
| Sensify Lab VIP researcher | Sensify Lab profile URL + UDaily | **Strongest** — external institutional proof | Keep; expand methodology |
| ASD population user research | UDaily article, Sensify Lab | Strong differentiator for this role | Add one concrete behavioral finding |
| HCI collaboration | Research section prose | Medium — stated but not detailed | Add: what changed based on session data |
| Hardware-software bridge (Arduino, Android, Unity) | Project card | Medium | Good systems depth; already present |
| Content safety filtering for ASD population | Project card | Strong ethical-AI signal | Currently in AI Integration detail; keep |
| In-house neural network for safety | Project card | ML + accessibility intersection | Keep; clarify it was trained/evaluated, not just called |
| BTC forecaster as applied research | BTC codebase | Medium | Not yet on portfolio; add as research-framed project |

---

## 5. Strongest Systems / Backend / ML Signals

| Signal | Project | Currently Visible | Action |
|---|---|---|---|
| Multi-stage retrieval pipeline | AIRS Foundry (experience) | Yes — hero metric | Keep |
| BM25 + embedding hybrid | AI backend (project) | Partial — in collapsed detail | Promote to visible prose |
| Circuit breaker state machine | Web search service | Yes — case-study Hard part | Keep |
| SSRF guards + DNS validation | Web search service | Yes — Security detail | Keep |
| Intent compiler + execution planner | AI backend | Yes — Routing detail | Keep |
| WebSocket authority server (server-reconciled diffs) | DnD map | Yes | Keep |
| LightGBM quantile regression | BTC forecaster | Not visible | Add project card |
| Walk-forward evaluation | BTC forecaster | Not visible | Add to Research section |
| FinBERT NLP integration | BTC forecaster | Not visible | Add to project card |
| Prediction intervals (80%, 95%) | BTC forecaster | Not visible | Add to project card |
| FastAPI + Docker Compose production stack | Web search service | Implied | Keep |
| pnpm monorepo + Zod shared schemas | DnD map | Yes — Architecture detail | Keep |

---

## 6. Current Section-by-Section Inventory

### Hero
- **Headline:** "Building retrieval and ranking systems that can be measured and improved." ✅ accurate
- **Sub:** Describes retrieval work + Sensify Lab background ✅
- **Capability chips:** Python · C++, Retrieval & Ranking, Model Evaluation, FastAPI · Docker, MCP / Agent Tooling
  - Missing: "Transformer Models", "Generative AI", "ML Evaluation"
- **Trust panel:** 4 metric cards (12-15ms, ~90%, ~80%, ~60h/mo) ✅

### Projects (4 cards)
| # | Title | Label | Proof | Repo |
|---|---|---|---|---|
| 1 | Multi-Provider Web Search Service | Personal | proof-tag only | Private |
| 2 | Multi-Service AI Backend with Capability Routing | Personal | 900+ tests | Private |
| 3 | Accessible Music Interaction System | Sensify Lab / VIP Research | UDaily + Sensify Lab links ✅ | N/A (research) |
| 4 | Real-Time 3D Tactical Map | Personal | proof-tag only | Private |
| **MISSING** | BTC 24h Forecaster | Personal/ML Research | — | Private (publishable) |

### Experience (5 entries)
| Entry | Date | Key signals |
|---|---|---|
| AIRS Foundry | Dec 2025–Present | Retrieval, C++, evaluation harnesses, MCP servers |
| Singapore Armed Forces | Jul 2023–Aug 2025 | Digital transformation, automation, ~80%, ~60h |
| Sensify Lab VIP | Aug–Jan 2022-23 | Accessible AI, hardware bridge, generative AI |
| UD Teaching Assistant | Aug–Dec 2022 | DS&A, 200+ students |
| EY / Maharashtra Cyber Police | Jun–Jul 2019 | OSINT, cybersecurity intern |

### Research (1 entry)
| Entry | Status |
|---|---|
| Accessible Interactive Systems, Sensify Lab | Present — needs methodology expansion |
| BTC 24h Forecaster (ML research framing) | **MISSING** |

### Technical Skills (4 clusters)
| Cluster | Chips | Missing |
|---|---|---|
| Languages | Python, C++, TypeScript, SQL, Java | — |
| ML & Retrieval | PyTorch, Hugging Face Transformers, sentence-transformers, embeddings, model evaluation | LightGBM, BM25, hybrid search, quantile regression, FinBERT |
| Backend & Systems | FastAPI, Docker Compose, Redis, async workers, structured logging, Linux/Unix | — |
| Agent & Tooling | MCP servers, GitHub Actions, OpenAPI, Unity/Android | Remove Unity/Android (wrong cluster) |
| **MISSING cluster** | Evaluation & Benchmarking | walk-forward eval, regression suites, latency profiling, prediction intervals |

### Certifications (currently in Education subtitle)
- EC-Council CEH ← needs standalone block
- MIT Sloan Executive Education: AI Strategy ← needs standalone block

### Contact
- "Open to full-time roles in retrieval systems, ML infrastructure, or research engineering."
- Should add: "generative AI research" and "accessible AI systems"

---

## 7. Content to Be Written (New)

### BTC 24h Forecaster — Project Card Content

**Problem:** Building a multi-horizon Bitcoin price forecasting system requires feature engineering across heterogeneous data sources (OHLCV, sentiment, events) and evaluation methodology that avoids look-ahead bias.

**Design:** LightGBM multi-output forecaster with separate models per horizon (8h, 16h, 24h). Feature set combines technical indicators (RSI, MACD, Bollinger, ATR, OBV), FinBERT sentiment scores on financial headlines (rolling 4h/8h/24h windows), and exponential-decay event impact features. Prediction intervals via quantile regression at 2.5%, 10%, 50%, 90%, 97.5% quantiles.

**Hard part:** Walk-forward validation with rolling windows to prevent look-ahead bias — each evaluation fold uses only data prior to the forecast date. Directional accuracy (not just RMSE) used as primary quality signal because direction is what matters operationally.

**Outcome:** Automated daily forecasting pipeline (07:00 SGT, APScheduler), REST API with FastAPI, React/Recharts dashboard. Metrics: RMSE, MAE, MAPE, directional accuracy, 80%/95% interval coverage.

**Tech:** Python, LightGBM, FinBERT, pandas, FastAPI, React, Docker Compose, Poetry

**Artifacts:** Walk-forward evaluation report, feature importance by horizon, prediction interval coverage chart

---

### Research Entry — BTC Forecaster (research framing)

**Research question:** Can gradient boosting over heterogeneous time-series features (price, sentiment, events) produce calibrated prediction intervals for short-horizon cryptocurrency price direction?

**Methodology:** Walk-forward evaluation with rolling 90-day train windows, 7-day test windows. Quantile regression targets at 5 percentiles. Directional accuracy and interval coverage rate as primary metrics. FinBERT applied to CryptoPanic headlines with 4h/8h/24h rolling aggregations.

**Outcome:** Calibrated prediction intervals at 80% and 95% confidence. Feature importance analysis shows sentiment aggregation (FinBERT 8h window) ranks in top-10 features for 24h horizon.

---

### Certifications Block Content

```
EC-Council Certified Ethical Hacker (CEH)
Issuer: EC-Council
Status: Certified
Proof: Certificate PDF on request

MIT Sloan Executive Education: AI Strategy
Issuer: MIT Sloan School of Management
Status: Completed
Proof: Certificate PDF on request
```

---

### Research Section — Sensify Lab Methodology Addition

**Experimental setup:** Controlled pilot sessions with children on the autism spectrum (ages TBD per UDaily — defer to article). Each session logged individual layer toggle events (melody/rhythm/harmony) with millisecond timestamps to CSV. Sessions run with HCI researchers observing.

**Behavioral metrics collected:** Toggle frequency per layer, session duration, return rate to specific layers (as a preference proxy).

**Concrete design change from data:** [To be confirmed from UDaily article or researcher notes — do not fabricate. Use: "Session replay data showed X pattern, which informed the decision to Y."]

> **IMPORTANT:** The specific design change claim must come from the UDaily article or the researcher's notes. Do not invent a finding. If the UDaily article does not specify it, the text should read: "Session replay data directly informed iterative design changes with the HCI research team" — which is already in the current portfolio and is defensible.

---

## 8. What Must NOT Be Changed

- All four current metric values (12-15ms, ~90%, ~80%, ~60h/mo) — resume-verified, do not round or embellish
- Sensify Lab and UDaily links — confirmed live, do not modify URLs
- AIRS Foundry as employer name — confirmed
- "900+ tests" claim — codebase-verified
- "200+ students" TA claim — resume-verified
- All "Private repo, details on request" labels on AIRS work — do not fabricate public links
