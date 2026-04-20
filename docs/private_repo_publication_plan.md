# Private Repo Publication Plan
**Author:** Guruprasad Nayak
**Purpose:** Determine which private repos are suitable for public GitHub publication, sanitization steps, and publication order.
**GitHub org:** https://github.com/I-c-e-m-a-n
**Audit date:** April 2026

---

## Decision Matrix

| Repo | Path | Signal Quality | Publishable | Reason |
|---|---|---|---|---|
| `web-search-service` | `/Users/ice/Desktop/VS_Files/web-search-service` | **HIGH** | ✅ Yes | Production-quality Python FastAPI service, clean architecture, 495+ tests, Docker Compose, no sensitive data |
| `dnd_map_ui` | `/Users/ice/Desktop/Windsurf/dnd_map_ui` | **HIGH** | ✅ Yes | TypeScript pnpm monorepo, WebSocket authority server, Zod protocol, React Three Fiber — strong systems signal |
| `btc-24h-forecaster` | `/Users/ice/Desktop/Windsurf/Personal/btc-24h-forecaster` | **HIGH** | ✅ Yes | LightGBM ML pipeline, FinBERT, walk-forward eval, FastAPI, React dashboard, no sensitive data |
| `NS Lucky Draw` | `/Users/ice/Desktop/VS_Files/NS Lucky Draw` | LOW | ❌ No | SAF anniversary event tool; government/NS context; `arcade` GUI app; not a research/engineering signal |
| `team-11-main` | `/Users/ice/Desktop/VS_Files/team-11-main` | LOW | ❌ No | GitLab capstone boilerplate README, no real code, contains `key.txt` and `key.txt.pub` (potential credentials) |
| `RealtimeSTT` | `/Users/ice/Desktop/VS_Files/RealtimeSTT` | N/A | ❌ No | This is `KoljaB/RealtimeSTT` — an upstream OSS project, not original work. Publishing would imply authorship. |
| `Code_Slider_Clean` | `/Users/ice/Desktop/VS_Files/Code_Slider_Clean` | LOW | ❌ No | Contains `credentials.json` and `sheets-379102-73e1f035d3f9.json` (Google service account keys). Publish only after full credential audit and removal. Low signal. |
| `btc_lstm_tf2.2_out` | `/Users/ice/Desktop/VS_Files/btc_lstm_tf2.2_out` | N/A | ❌ No | Empty directory — nothing to publish |
| `Cisc361_Submissions` | `/Users/ice/Desktop/VS_Files/Cisc361_Submissions` | LOW | ❌ No | University coursework (OS projects). All subdirectories are empty — nothing to publish |
| `news_app` | `/Users/ice/Desktop/Windsurf/news_app` | LOW | ❌ No | Only contains `.vite/` cache directory — no code present |
| `AIRS` / `slider-v*` | Various | HIGH (private) | ❌ No — keep private | AIRS Foundry employment work. Must not be published without employer consent. |

---

## Publication Order

### Repo 1: `web-search-service` (publish first)
**Why first:** Cleanest codebase, most test coverage, most directly aligned to the portfolio's strongest project card, zero risk of sensitive data.

**Target GitHub repo name:** `web-search-service`
**Target URL after publish:** `https://github.com/I-c-e-m-a-n/web-search-service`
**Portfolio update:** Replace "Private repo, code walkthrough available on request" with live GitHub link on Project 1 card.

**Sanitization checklist:**
- [ ] Verify `.env.example` has no real API keys (confirmed — all placeholder values)
- [ ] Confirm `.gitignore` excludes `.env` (confirmed present)
- [ ] Confirm no `credentials.json`, service account keys, or tokens in any subdirectory
- [ ] Remove any `.DS_Store` files
- [ ] Confirm `README.md` is accurate and professional (confirmed — already clean)
- [ ] Run `grep -r "sk-" . --include="*.py" --include="*.env"` and `grep -r "Bearer " .` to check for leaked tokens
- [ ] Check `pyproject.toml` for any internal package references
- [ ] Check `docker/docker-compose.yml` for internal hostnames or private registry references

**README additions before publish:**
- Add a brief "Why this exists" section explaining the architectural problem it solves
- Confirm test count is accurate in README (495 tests per memory — verify before stating)
- Add "Architecture" section link pointing to the `openapi/` schema

---

### Repo 2: `btc-24h-forecaster` (publish second)
**Why second:** Highest ML signal for the Google Research role. LightGBM + FinBERT + walk-forward eval is a direct skills match for the JD. Well-structured with Poetry, Makefile, Docker.

**Target GitHub repo name:** `btc-24h-forecaster`
**Target URL after publish:** `https://github.com/I-c-e-m-a-n/btc-24h-forecaster`
**Portfolio update:** Add new BTC Forecaster project card (Phase 1) with this link.

**Sanitization checklist:**
- [ ] Verify `.env.example` has no real API keys (Binance, CryptoPanic keys — confirm all placeholder)
- [ ] Confirm `data/raw/`, `data/processed/`, `artifacts/`, `reports/` are empty or gitignored (contains real downloaded data)
- [ ] Confirm `models/` directory — check if pre-trained model artifacts should be included (may be large; consider `.gitignore` or LFS)
- [ ] Remove `__pycache__/` directories
- [ ] Remove `.DS_Store` files
- [ ] Check `configs/*.yaml` for any hardcoded paths to local machine
- [ ] Verify `poetry.lock` is committed (yes — confirmed present)
- [ ] Verify `frontend/` has no `node_modules/` committed
- [ ] Check for any hardcoded Singapore-specific API URLs or private endpoints
- [ ] Run `grep -r "api_key\|API_KEY\|secret\|token" configs/ src/ --include="*.yaml" --include="*.py"` — confirm all env-var referenced, not hardcoded

**README additions before publish:**
- Add "Model Architecture" section: describe LightGBM multi-horizon setup, quantile targets, FinBERT integration
- Add "Evaluation" section: describe walk-forward methodology, what metrics are used and why
- Add disclaimer section (already present in README — keep it)
- Add "Sample output" section showing an example forecast JSON response

---

### Repo 3: `dnd_map_ui` (publish third)
**Why third:** Strong TypeScript + protocol design signal. WebSocket authority server with intent/validate/ACK/PATCH is interesting systems architecture. Less Google Research-specific than the ML repos but adds systems breadth.

**Target GitHub repo name:** `dnd-map-ui`
**Target URL after publish:** `https://github.com/I-c-e-m-a-n/dnd-map-ui`
**Portfolio update:** Replace "Private repo, details on request" on Project 4 card with live GitHub link.

**Sanitization checklist:**
- [ ] Confirm `node_modules/` is gitignored (confirmed — listed in directory but likely gitignored)
- [ ] Check `pnpm-lock.yaml` for any private registry references
- [ ] Verify no `.env` files with real values committed
- [ ] Check `start` and `stop` shell scripts for hardcoded local paths or machine-specific commands
- [ ] Remove `.DS_Store` files
- [ ] Check `ui/` for any hardcoded API URLs to local services
- [ ] Confirm test suite passes before publishing (`pnpm test`)
- [ ] Check `assets/startup-maps/` (referenced in workspace layout) for any large binary files
- [ ] Verify `scripts/` directory has no credentials or private tokens

**README additions before publish:**
- The existing `README.md` is 26KB and detailed — review and trim for public audience
- Add "Protocol Design" section explaining the intent/validate/ACK/PATCH pattern and why it was chosen
- Add "Running locally" quickstart that is self-contained (no external dependencies)

---

## Do-Not-Publish List (with reasons)

| Repo | Reason | Risk if Published |
|---|---|---|
| `NS Lucky Draw` | SAF military anniversary event tool; NS context is government-adjacent; `autoemail.py` imports personal email credentials path | Privacy, government context |
| `team-11-main` | Contains `key.txt` and `key.txt.pub` files — potential SSH or API keys | Credential exposure |
| `RealtimeSTT` | Upstream OSS by `KoljaB` — not original work | Misrepresentation of authorship |
| `Code_Slider_Clean` | `credentials.json` (52 bytes) and `sheets-379102-73e1f035d3f9.json` (44 bytes) — likely Google service account credentials | Credential exposure; token abuse |
| `btc_lstm_tf2.2_out` | Empty directory | Nothing to publish |
| `Cisc361_Submissions` | Empty subdirectories | Nothing to publish; coursework not publication-appropriate |
| `news_app` | Only `.vite/` cache — no source code | Nothing to publish |
| `AIRS` work | Employment IP — requires employer consent | Legal / IP risk |

---

## Pre-Publication Security Checklist (applies to all three repos)

Run these commands against each repo before pushing to GitHub:

```bash
# Check for potential secrets
grep -r "sk-\|pk_\|ghp_\|token\|secret\|password\|api_key" . \
  --include="*.py" --include="*.ts" --include="*.js" \
  --include="*.yaml" --include="*.yml" --include="*.json" \
  --include="*.env" --include="*.txt" \
  --exclude-dir=".git" --exclude-dir="node_modules" --exclude-dir=".venv"

# Check for .env files that shouldn't be committed
find . -name ".env" -not -name ".env.example" -not -path "./.git/*"

# Check for credential files
find . -name "credentials.json" -o -name "*.pem" -o -name "*.key" -o -name "token.json" \
  -not -path "./.git/*"

# Check for large files that shouldn't be in git
find . -size +5M -not -path "./.git/*" -not -path "./node_modules/*" -not -path "./.venv/*"
```

---

## Portfolio Link Updates (after publishing)

| Project Card | Current CTA | Updated CTA after publish |
|---|---|---|
| Multi-Provider Web Search Service | "Repo private, code walkthrough available on request" | "GitHub: I-c-e-m-a-n/web-search-service" (linked) |
| BTC 24h Forecaster (new card) | N/A | "GitHub: I-c-e-m-a-n/btc-24h-forecaster" (linked) |
| Real-Time 3D Tactical Map | "Repo private, details on request" | "GitHub: I-c-e-m-a-n/dnd-map-ui" (linked) |
| Multi-Service AI Backend | "Repo private, code walkthrough available on request" | Keep private — AIRS employment work |
| Accessible Music Interaction System | External links (Sensify + UDaily) | Keep — no repo to publish |

---

## Timeline Estimate

| Step | Effort | Dependency |
|---|---|---|
| Sanitize and publish `web-search-service` | 1 session | None |
| Update Project 1 card with live link | Trivial | `web-search-service` published |
| Sanitize and publish `btc-24h-forecaster` | 1 session | None |
| Add BTC Forecaster project card | 1 session | `btc-24h-forecaster` published |
| Sanitize and publish `dnd-map-ui` | 1 session | None |
| Update Project 4 card with live link | Trivial | `dnd-map-ui` published |
