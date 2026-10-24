# WhatsUp Coursework | Proposed Way of Working

**From:** Ambroise Petin (Cyber Security Top-up)
**To:** The group
**Date:** 24 October 2026
**Status:** For discussion and agreement by the team

---
## 1. What we are actually marked on
Quick recap of the briefing:

| # | Artefact | Marks | Type |
|---|----------|-------|------|
| 1 | Scoping Document (app info, architecture, deployment evidence, recon) | 15 | Group |
| 2 | Threat Model (STRIDE/PASTA, attack surface, risk matrix, testing plan, risk register) | 35 | Group |
| 3 | Basic Security Assessment Report (auth/session, API access, XSS, headers, TLS, OWASP Top 10, CVSS scores, evidence, remediation) | 35 | Group |
| 4 | Reflection (personal contribution + appraisal of the group) | 15 | Individual |
70 of the 100 marks sit on the **security analysis**, not on the app itseft. The app needs to be up and running locally, and be worth attacking. 
## 2. The method
I use for develop a story-based pipeline [1] adapted for a team of 6 person and this coursework.

To sum'up, I propose: 

**Faming (once, together):** Product → User Stories → Stories Review → Architecture +
Design System.
**Per story (one story = one branch = one pull request):**
`Research → Design → Plan → Execute → Review → Ship`, with two mechanical gates:

- No execution without a validated plan: the plan must be marked `validated: yes`
  before anyone writes code or runs a test.
- No ship without review: a second pair of eyes marks `Ship allowed: yes`; only a
  critical finding blocks the merge.

**Mapping to the marks:**
| Method phase | Produces |
|---|---|
| PRD + scoping | Artefact 1 — Scoping Document |
| Architecture | App design + deployment → attack surface analysis |
| Stories (build) | The application itself |
| Stories (assess) | Artefacts 2 & 3 — Threat Model, Assessment Report |
| Review | CVSS scoring, findings write-up, QA of evidence |
## 3. Proposed stories:  build phase, then assessment phase
Full detail (owners, complexity, dependencies, status) lives in `04. Stories/stories.md`.

**Build : one story per member (B1–B6):** skeleton & auth · channels & messaging ·
profiles & avatar upload · Docker/nginx/TLS deployment · design system & docs
infrastructure · PRD freeze & QA. The blueprint, architecture and design proposals are
in `01. Product/PRD.md`, `02. Architecture/architecture.md` and
`03. Design-system/design-system.md`.

**Assessment, where 70% of the marks are (A1–A6):** STRIDE threat model ·
authentication & session testing · unauthenticated API access · input validation/XSS ·
HTTP headers & TLS · OWASP Top 10 sweep + risk register. Each is run by a pair - executor + reviewer - so the method's review gate doubles as cross-checking.
## 4. Roles
To discuss:
- **App build lead** (Application code).
- **DevOps** (Docker, local deployment, environment for evidence capture).
- **Documentation lead** (word counts, IEEE referencing, PDF formatting).
- **Testing support** (assists assessment stories, captures evidence).
- **Project manager** (timeline, chasing artefacts by use Github).
## 5. Tools and conventions
- **GitHub** (`WhatsUp_Coursework`): branch per story, one PR per story, at least one reviewer, squash-merge.
- **Stack proposal:** Python/Flask web app + Docker Compose: app + nginx. Everyone can read it , runs on PC and has realistic security flaws to find. Open to alternatives.
- **Docker workstation ** for the local instance the brief wants deployment evidence.
- **Evidence discipline:** every test gets a timestamped screenshot or terminal capture.
## 6. Use of AI
As I undestand, we can use AI to build the app but not executing tests, capturing evidence, judging findings and write the memo. We can use Claude Code (or another coding assistant) in full transparency: the team executes and the AI only assists. Traceability: commits made with AI assistance carry a `Co-Authored-By: xxxxxxxxx`
## 7. Timeline to 05/01/2027 (≈10 weeks)
| When | Milestone |
|------|-----------|
| Week 1 (by 31 Oct) | Method + roles + stack agreed; app chosen; repo conventions set |
| Weeks 2–3 | B1–B4: app built and deployed locally (Scoping Document largely done) |
| Weeks 4–5 | A1 STRIDE threat model complete |
| Weeks 5–8 | A2–A6 assessment stories |
| Week 9 | Consolidation: reports assembled, CVSS review, referencing |
| Week 10 (by 05 Jan) | Buffer, proofread, PDFs, submit on Moodle |## 8. Decisions
## 8. Decisions
1. Do we adopt this method and story list (amended as you like)?
2. App and stack: Flask web app OK?
3. Roles volunteers?
4. Group position on AI declaration (section 6)?
5. Meeting cadence weekly, and which day?

---

**References**
[1] M. Codeur, *method documentation*, GitHub, 2026. [Online]. Available:
https://github.com/MikeCodeur/killer-saas/blob/main/DOC.md

