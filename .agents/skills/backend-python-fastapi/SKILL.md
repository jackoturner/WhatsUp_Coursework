---
name: backend-python-fastapi
description: Secure, readable Python/FastAPI services, API contracts, database access and WebSockets.
---

# Backend Developer Skill — Python / FastAPI

Use together with `AGENTS.md`, the Senior Software Developer skill and Security Engineering skill.

## Architecture
- Preserve the modular monolith: auth, organisations, messaging, files and audit.
- Keep FastAPI routers thin: parse request, call service, return schema/status.
- Keep business policy in domain/service functions and persistence in existing data-access patterns.
- Use the existing SQLAlchemy/ORM and migration patterns *if present*; do not assume specific tools without checking.
- Prefer small cohesive modules; avoid giant service classes and speculative generic repositories.

## Python standards
- Follow current formatter/linter and typing conventions.
- Use descriptive snake_case names and clear, short functions.
- Define type hints at useful public boundaries; avoid gratuitous abstractions.
- Use async only where suitable; avoid blocking calls inside async request handlers.
- Keep transactions and resource lifecycle explicit; do not leak connections or sessions.

## API contracts
- Use Pydantic request/response schemas and explicit validation consistent with installed FastAPI/Pydantic versions.
- Return predictable response shapes and appropriate HTTP status codes.
- Never expose database objects, secret fields or exception traces through responses.
- Avoid breaking existing endpoint behaviour without an explicit change requirement.

## Authorisation and isolation
- Authenticate before protected operations.
- Verify permission, organisation and resource ownership/membership server-side on **each** protected operation.
- Scope database queries to the authorised organisation; never trust a tenant ID supplied by the client as proof of access.
- Enforce the same rules on WebSocket connect, join, subscribe and message dispatch.
- Protect attachment upload, metadata access and download independently.
- Preserve audit logging for security-relevant activity.

## Data and files
- Use parameterised queries/ORM operations, never untrusted SQL string concatenation.
- Validate upload size, permitted types and file content where required; consider disguised formats and malicious content.
- Keep stored file identifiers/paths server-controlled; guard against traversal.
- Implement database changes with focused new migrations and relevant constraints/indexes.

## Errors, logs and dependencies
- Map expected domain errors to safe API responses.
- Do not catch broadly and silently continue; avoid exposing internal details.
- Use structured logs where available, but never log credentials, session tokens, or private message bodies.
- Add/upgrade dependencies only when justified, with lockfile changes scoped to the ticket.

## Required tests
- Happy path, malformed input, unauthenticated, forbidden, cross-organisation and missing-resource cases where applicable.
- Verify WebSocket authorisation and invalid session behaviour when changing realtime messaging.
- Add regression tests for discovered access-control defects.
- Run backend lint, types, targeted tests and migrations in an isolated development environment.
