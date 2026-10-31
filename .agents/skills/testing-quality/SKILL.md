---
name: testing-quality
description: Proportionate automated checks and reproducible evidence for every behaviour change.
---

# Testing and Quality Skill

## Testing principle
Test behaviour and security guarantees, not incidental implementation details. Use the narrowest test layer that provides meaningful confidence and add higher-level integration tests for trust boundaries.

## Test selection
- **Unit:** cohesive business rules, validation and utility behaviour.
- **Component:** UI interactions, loading/error/empty states and accessible controls.
- **API/integration:** routing, validation, persistence, transaction behaviour and access control.
- **WebSocket/integration:** authenticated connection and membership checks for subscriptions and messages.
- **End-to-end:** a few important workflows through browser/UI → API → data; avoid duplicating all lower-level tests.

## Change-to-test mapping
- New behaviour: successful case plus important failure paths.
- Bug fix: regression that fails before the fix and passes after it, when practicable.
- Protected resource: unauthenticated, forbidden, same-tenant allowed and cross-tenant denied cases.
- File upload/download: invalid type/size, path traversal attempts, access permissions and safe responses.
- Database migration: verify constraints, data compatibility and migration execution in a test database.
- Shared component: verify each supported variant, with no redundant tests for every consumer.

## Quality gates
Run the project's configured formatter, linter, type checker, relevant automated tests and dependency/security checks. Do not invent command names: inspect package scripts, task definitions and CI configuration first.

## Handling failures
- Never delete, weaken or skip a legitimate failing test just to obtain green CI.
- Differentiate pre-existing failures from failures introduced by the change, with evidence.
- Report exact commands, outcomes, and anything not run.

## Coursework security evidence
Keep authorised test scope, environment, timestamps, requests, responses, screenshots/logs and retest results. Security assessment needs human execution and verification, not AI-only assertions.

## Definition of done
The behaviour works, security boundaries hold, appropriate tests pass, lint/types pass where configured, the diff is scoped and reviewable, and limitations are documented.
