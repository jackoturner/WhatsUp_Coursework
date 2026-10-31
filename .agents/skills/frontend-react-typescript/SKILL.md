---
name: frontend-react-typescript
description: Small, accessible, strongly typed React and TypeScript features that reuse existing UI patterns.
---

# Frontend Developer Skill — React / TypeScript

Use together with `AGENTS.md` and the Senior Software Developer skill.

## Approach
- Inspect existing screens, component library, hooks, routing, styling, state patterns and tests before editing.
- Prefer a small feature-local implementation; elevate a component to `shared` only when multiple features genuinely use the same concept.
- Keep component props narrow, names descriptive and render logic easy to scan.
- Prefer composition over a monolithic component with many boolean flags.

## Structure
- Separate presentational UI from remote-data fetching and business behaviour where useful.
- Keep state close to where it is needed; do not introduce global state for local interactions.
- Use existing server-state/cache and form patterns, if present; do not add new libraries without need.
- Extract hooks for reusable stateful behaviour, not simply to move code between files.
- Reuse established loading, error, empty and permission-denied components.

## TypeScript
- Use strict types; avoid `any`, unsafe casts and non-null assertions without justification.
- Represent API responses with explicit types and validate untrusted responses where needed.
- Use unions for distinct UI states when it reduces invalid combinations.
- Prefer inferable types; do not add excessive generic infrastructure.

## React quality
- Keep effects for external synchronisation, not redundant derived-state calculations.
- Avoid unnecessary `useMemo`/`useCallback`; measure actual render concerns.
- Use stable keys, controlled inputs where appropriate and clean async cancellation/cleanup.
- Avoid creating deeply nested JSX; extract conceptually meaningful components.
- Use semantic HTML, keyboard-accessible controls, labels, focus handling and visible feedback.

## Shared components example
Use a reusable chart wrapper for shared presentation concerns (layout, title, loading, empty state, legend/style conventions). Keep data transformation or domain-specific interactions close to each feature; avoid a huge generic chart API.

## Security boundaries
- Never treat hidden buttons or frontend route guards as authorisation.
- Do not store sensitive tokens in insecure locations; use established session design.
- Do not render untrusted HTML or bypass escaping without strong justification and sanitisation.
- Do not log secrets, message content or private attachment metadata unnecessarily.
- Treat every permission and organisation boundary as a backend responsibility.

## Tests and finishing
- Cover interaction, validation, loading/error/empty states and accessibility where practical.
- Verify no accidental API changes, unnecessary network requests or duplicate UI implementation.
- Run repository frontend formatting, lint, type-check and targeted tests.
- Keep responsive layouts consistent with the application's chat/admin design.
