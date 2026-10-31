---
name: git-workflow
description: Branch-per-ticket workflow, Conventional Commits, focused PRs, review and safe merging into main.
---

# Git Workflow Skill

## Branch workflow
1. Start with a clean working tree and fetch the latest remote state.
2. Update local `main` from `origin/main` using the team's approved method.
3. Create a ticket-specific branch from the updated `main`.
4. Make small, logical commits tied to one feature/fix.
5. Push the branch, open a pull request targeting `main` and request human review.
6. Ensure CI is green and review comments are addressed before merging.
7. Merge using the repository's approved strategy (squash merge recommended for small feature PRs), then remove the feature branch when safe.

**Never commit directly to protected `main`; never force-push shared branches without explicit coordination.**

## Branch naming examples
- `feat/123-confidential-attachment-label`
- `fix/124-cross-tenant-message-access`
- `test/125-websocket-authorisation`
- `docs/126-security-test-notes`

## Commit convention
Use **Conventional Commits**: `type(scope): imperative summary` (scope optional).

Recommended types:
- `feat:` new feature
- `fix:` defect correction
- `refactor:` internal restructuring without behavioural change
- `test:` test additions/adjustments
- `docs:` documentation
- `chore:` maintenance
- `ci:` pipeline changes
- `build:` dependency/build tooling changes
- `perf:` measured optimisation
- `security:` security hardening (team-specific type; use `fix:` if strict tooling only accepts standard types)

Examples:
- `feat(chat): show confidential attachment badge`
- `fix(auth): enforce organisation membership on message reads`
- `test(files): reject unauthorised attachment downloads`
- `refactor(ui): extract shared chart frame`

Use a short, descriptive subject; one conceptual purpose per commit. Avoid messages such as `changes`, `fix stuff` or `final`.

## Pull-request checklist
- [ ] Linked ticket, concise summary and acceptance criteria
- [ ] Small scoped diff; no unrelated refactors or formatting churn
- [ ] Reused established patterns and shared components where suitable
- [ ] Relevant tests added/updated and commands/results recorded
- [ ] Authorisation, tenant isolation, sensitive data and input validation considered
- [ ] API/schema/migration/dependency changes called out explicitly
- [ ] Screenshot or short demo for visible UI changes when useful
- [ ] Output reviewed by developer
- [ ] Human review and required CI checks completed

## Recommended repository protection
Protect `main`: required PR, at least one human approval, required CI checks, no direct push, no force push, resolved conversations before merge. Use CODEOWNERS for high-risk security modules if the team can support it.

## Avoid
- Mixing multiple tickets into one PR.
- Committing generated artefacts, real secrets or local `.env` files.
- Rebasing/force-pushing someone else's branch without permission.
- Silently fixing unrelated issues encountered along the way.
