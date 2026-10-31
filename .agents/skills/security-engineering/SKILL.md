---
name: security-engineering
description: Security-by-default controls and explicit adversarial tests for the corporate messaging platform.
---

# Security Engineering Skill

## Context
The application handles private corporate messages and attachments across separate organisations. Main threat scenarios: unauthorised message access, cross-organisation leakage, malicious attachments, account/session abuse and privilege escalation.

## Mandatory controls
- Server-side authentication and role-based authorisation on every protected action.
- Organisation/tenant isolation enforced in queries and resource checks; IDs never grant access by themselves.
- Group membership and permission checks for chat history, membership changes and live messaging.
- Validate WebSocket authentication on connection and authorisation for every room/subscription/action.
- Validate all incoming data including paths, JSON, query parameters, filenames and files.
- Strict attachment access checks; controlled storage paths, type/size restrictions and safe download responses.
- Secure session/cookie handling, modern password hashing and throttling/rate limits in the established application design.
- Minimise audit logging while retaining security-relevant events; never log confidential message bodies or secrets by default.
- Enforce safe error handling, appropriate HTTP security headers and HTTPS/TLS in deployed environments.
- Use safe ORM/parameterised database access; protect against injection and stored XSS.

## Every security-impacting change
1. Identify assets, callers, trust boundaries and the possible abuse case.
2. Preserve existing authentication and authorisation checks.
3. Add positive **and** negative tests, including a different-organisation actor where relevant.
4. Check that logs/audit events are useful without leaking sensitive content.
5. Document risk, mitigation and evidence where applicable to the coursework threat model or assessment.

## Testing ethics
- Test only explicitly approved, isolated coursework systems; never production, public-facing services or university infrastructure.
- AI can assist test design and reporting but may not substitute for human-executed, evidenced security assessment.
- Keep reproducible commands, timestamps, screenshots/log evidence and remediation/retest results where required.
- Record relevant OWASP categories and use CVSS appropriately for documented findings.

## Prohibited shortcuts
Never disable validation, bypass checks, hardcode admin privileges, skip tenant filtering, suppress security tests or expose credentials to make a feature pass.
