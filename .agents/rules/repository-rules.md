# AI Repository Rules — What's Up Teams

## Project context
React + TypeScript frontend → FastAPI (REST and WebSockets) → MySQL, protected attachment storage, Docker Compose development. Preserve the existing modular-monolith boundaries: auth, organisations, messaging, files, and audit.

## Non-negotiable rules
1. **Scope:** Work only on the requested ticket/issue. Make the smallest correct change. Never perform unrelated refactors, renames, dependency upgrades, reformatting, or folder reorganisations.
2. **Inspect first:** Read related code, tests, configuration, and shared components before editing. Match existing conventions.
3. **Simple code:** Keep functions/components focused and easy to scan. Prefer clear names, early returns, low nesting, and straightforward control flow. Avoid premature abstractions.
4. **Reuse responsibly:** Search for established components, hooks, services and utilities first. Share meaningful concepts (e.g., common chart presentation), but do not force unrelated use cases into generic abstractions.
5. **Security cannot be bypassed:** Never remove or relax authentication, server-side authorisation/RBAC, organisation isolation, upload validation, rate limits, protected storage, audit logging or TLS checks to make functionality pass.
6. **Never trust the browser:** Check resource membership/ownership and organisation boundary on every protected backend operation, including WebSockets and file downloads. Reject cross-organisation access even when IDs are guessed.
7. **Contracts:** Avoid breaking API, database or shared-component interfaces without explicit task scope. Make deliberate migrations for schema changes.
8. **Dependencies:** Do not add/update packages without a concrete necessity and a clear explanation. Never commit secrets or `.env` values.
9. **Tests:** Add or update focused automated tests for behaviour changes; include negative security cases when relevant. Do not weaken failing tests.
10. **Verification:** Run relevant formatting, linting, type checks, tests and security checks when available. Report exact commands/results; never claim unrun checks passed.
11. **Git:** Branch from updated `main`; commit using Conventional Commits; open a PR; obtain human review and passing CI before merge. Do not push directly to protected `main`.
12. **Coursework integrity:** A human must understand and verify the code and manually validate assessment security testing. Perform security tests only on explicitly authorised isolated environments.

## Workflow per ticket
1. Restate objective and acceptance criteria in one or two sentences.
2. Identify affected area, existing reusable primitives, relevant security boundaries and tests.
3. Implement the smallest coherent patch.
4. Add focused tests; check authorised and unauthorised cases as applicable.
5. Review the diff for out-of-scope files, unintended contract changes, duplicated logic and exposed secrets.
6. Report: changed files, behaviour, checks actually run and unresolved risks.

## Stop and flag when
- The ticket appears to require a broad redesign, data migration or changed external contract.
- A change would weaken a security control.
- Requirements conflict or repository state is unclear.
- Tests fail for unexplained reasons.

Do not silently increase scope. Explain the trade-off and use the narrowest safe implementation.

## Skill documents
- `.agents/skills/senior-software-developer/SKILL.md`
- `.agents/skills/frontend-react-typescript/SKILL.md`
- `.agents/skills/backend-python-fastapi/SKILL.md`
- `.agents/skills/git-workflow/SKILL.md`
- `.agents/skills/security-engineering/SKILL.md`
- `.agents/skills/testing-quality/SKILL.md`
