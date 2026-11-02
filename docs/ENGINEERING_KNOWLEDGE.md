# Engineering Knowledge Reference

Reviewed: 2 November 2026. These are implementation guides for future applications. This repository remains a static documentation reader. Numeric policies are examples; provider settings and requirements must be verified for each environment.

## Databases & Storage

Site section: #databases

Choose storage by consistency, query patterns, tenancy and recovery requirements. Start with the data lifecycle before selecting a product.

### Storage types

Relational databases suit structured records, joins, constraints and transactions. Document stores suit evolving aggregate documents. Key-value stores suit simple lookups and caches. Object storage holds files and exports. Vector indexes support similarity retrieval; retain authoritative records separately. Search indexes support text discovery. Time-series and analytical stores support event analysis. A cache or search index should not silently become the only copy of critical data.

### Cloudflare reference mapping

D1 provides SQL storage for Workers applications; R2 holds objects; KV supports distributed key-value access; Durable Objects can coordinate state and concurrency. Evaluate each service’s current consistency and transaction semantics before choosing it for sessions, OTP counters or locks. Keep development, demo, staging and production resource identifiers separate. Bind resources to the backend; never place database credentials in public HTML.

### Schema and integrity

Model users, identities, memberships, roles, sessions, auth_challenges, email_outbox, delivery_events and audit_events. Include tenant_id where applicable, creation and expiry timestamps, unique identity constraints, foreign keys and indexes matching real queries. Authorize tenant access server-side on every operation. Use parameterized queries. Define deletion, retention and export rules before collecting sensitive data.

### Implementation and verification

Document access patterns → select store → define schema and constraints → apply versioned migrations → provision least-privilege bindings → implement repository/query layer → test isolation and concurrent writes → rehearse restore. Use additive migrations before destructive changes. A backup is useful only after a restore test; define recovery-point and recovery-time objectives. Measure query plans and latency before adding indexes or caches.

## Authentication & SSO

Site section: #authentication

Authentication proves identity; authorization decides what that identity can do. Keep the two responsibilities explicit.

### Methods and tradeoffs

Passwords require secure password hashing, recovery and abuse controls. Email OTP proves current access to a mailbox and is not phishing-resistant. Magic links are bearer credentials that can leak through forwarded messages. TOTP uses authenticator-generated time codes; recovery codes need protected storage and one-time consumption. Passkeys use WebAuthn and origin binding. OIDC provides federated sign-in; OAuth alone is delegated authorization. SAML supports enterprise federation.

### Role-specific policy

Create an explicit policy matrix for administrator, user, employee, client, applicant and demo roles. For the user’s projects that specify Duo-only administration, enforce the Duo SSO flow server-side and do not expose an alternative route that bypasses it. Other projects may have different approved policies; do not copy a single app’s policy globally. Employee application SSO and administrator Cloudflare Access protections are separate architectural decisions.

### Federated sign-in checklist

Use supported identity-provider libraries. Validate issuer, audience, signature, expiry, state and nonce where applicable; use PKCE for authorization-code flows. Allowlist redirect URIs. Link accounts only after proving control of the identities; matching an unverified email is insufficient. Apply application roles after identity verification and fail closed if provider checks fail.

### Enrollment and recovery

Require reauthentication for factor changes, email changes and account linking. Notify users of security changes. Protect recovery paths as strongly as sign-in and audit privileged recovery. Plan lost-device recovery, provider outage behavior, account suspension and session revocation. Test denied users, stale roles, invalid callbacks and blocked direct API requests.

## Sessions & Authorization

Site section: #sessions

A successful login must create a controlled, revocable session and enforce access to each resource.

### Session design

Generate high-entropy opaque session tokens; store a digest or keyed verifier server-side with user, tenant, assurance level, issued_at, last_seen_at and expires_at. Use Secure, HttpOnly cookies with an appropriate SameSite policy and narrow scope. Rotate identifiers after login and privilege changes. Enforce idle and absolute timeouts on the server. Logout must revoke server-side state.

### Access-control models

RBAC assigns permissions through roles; ABAC evaluates attributes such as tenant or resource ownership; relationship-based rules model shared access. Default deny. Verify permissions for every API request, object read, download and mutation. Hiding an admin button is not authorization. Do not accept roles or tenant identifiers from the browser without validating them against session membership.

### Browser and API boundaries

Use CSRF protection for cookie-authenticated state changes, validate Origin where appropriate and restrict CORS to intended origins. CORS is not an authentication layer. Keep long-lived bearer tokens out of browser-accessible storage when a secure cookie session fits the architecture. Validate JWT signatures and claims; plan key rotation and revocation rather than merely decoding tokens.

### Acceptance checks

Test cross-tenant object IDs, revoked sessions, expired cookies, role downgrade, logout on another device, CSRF attempts, forged JWTs and direct privileged endpoints. Log decisions with correlation IDs while excluding raw tokens. Reauthenticate before sensitive exports, payment changes and factor enrollment.

## Email OTP & Recovery

Site section: #otp

Design challenge issuance, delivery and atomic verification together. The following numeric limits are example application policy, not universal provider requirements.

### Challenge lifecycle

POST /auth/otp/request validates input, abuse limits and the server-verified challenge. Generate codes with a cryptographic random generator. Return an opaque challenge identifier and a generic acknowledgement. Bind the stored challenge to identity, purpose and expiry. For short numeric codes, store a keyed HMAC verifier with a separately protected server key; an ordinary hash alone is easy to enumerate offline. Never log or return the code.

### Example policy and data

Example: an eight-digit code, five-minute lifetime, five verification attempts and a 60-second resend cooldown. Tune limits to risk and usability and apply aggregate limits by account and network. Store id, user or normalized identity reference, purpose, verifier, expires_at, attempts, consumed_at and generation. Make resend behavior explicit: invalidate the previous generation and clearly tell users only the newest code works.

### Atomic verification

POST /auth/otp/verify checks expiry, purpose, generation and attempt budget server-side. Atomically compare/consume the challenge or use a transaction/conditional update so two concurrent submissions cannot both succeed. Increment failed-attempt counters atomically. On success rotate/create the session, mark identity verification only for the correct purpose and reject replay. A reset code must not authorize an unrelated sensitive action.

### Abuse and delivery failures

Use generic responses and reasonably consistent timing to reduce account enumeration. Do not lock an account merely because someone requested codes. Apply request and verify throttles separately. Queue failures must not produce unlimited valid challenges. Expired email jobs should be dropped rather than delivering unusable codes. Avoid relying on email-link GET requests to consume credentials because mail scanners may prefetch links.

### Test matrix

Cover valid, incorrect, expired, reused, superseded and wrong-purpose codes; simultaneous verification; resend floods; exhausted attempts; delayed email; SMTP outage; forged Turnstile token; and account enumeration. Turnstile tokens require Siteverify validation, are single use and expire after 300 seconds. Validate expected hostname and action where used; a widget alone does not protect the endpoint.

## Email Sending & Deliverability

Site section: #email

Use a backend delivery service and observable queues. Keep transactional security messages distinct from marketing campaigns.

### SES SMTP configuration

For the established Sydney setup, configure email-smtp.ap-southeast-2.amazonaws.com with port 587 and STARTTLS. Require TLS and certificate validation. SES SMTP credentials differ from AWS access keys and are region-specific. Verify the sender identity, account production-access status and current sending quotas in the same region. Never embed SMTP credentials in browser code or publish them in the knowledge center.

### Domain authentication

Configure DKIM using the provider-issued records. Set SPF for the actual envelope sender; do not create multiple SPF records at one name. Publish DMARC with a monitored rollout and verify alignment. If using a custom MAIL FROM domain, use its exact region-specific MX/SPF instructions. Distinguish visible From, Reply-To, envelope MAIL FROM and return-path roles. DNS examples must not replace provider-issued values.

### Email catalog

Plan verification, sign-in OTP, welcome, password reset, security-change notification, invitation, application confirmation, inquiry confirmation, receipt and operational alert templates. Include an identifiable sender, purpose, expiry when relevant and support information. Send both plain text and HTML, use readable contrast and accessible structure, and avoid exposing sensitive data in subjects. Keep marketing content out of OTP messages.

### Outbox and delivery events

Write the application event and outbox record transactionally when possible. A worker claims the job, checks expiry/suppression and sends via SMTP. Record the provider message ID, attempts and next retry. Retry transient failures with backoff and jitter; stop on permanent rejection. SMTP acknowledgement means accepted for processing, not inbox delivery. An ambiguous timeout can cause duplicates; use application deduplication but do not promise exactly-once SMTP delivery.

### Operations and diagnostics

Handle provider bounce and complaint events through an authenticated, validated event path; deduplicate events and update suppression. Track queue age, send failure, bounce/complaint rates and accepted-to-delivered outcomes where available. Diagnose missing OTP by correlation ID: request → challenge → outbox → SMTP response → provider event → recipient filtering. Check region, credentials, identity, sandbox restrictions, suppression, quota and spam folder without logging the message’s code.

## APIs, Webhooks & Integrations

Site section: #apis

Define contracts and failure handling before connecting external systems.

### API design

Use explicit request/response schemas, server-side validation, pagination, bounded payload sizes and consistent errors. Authenticate callers and authorize each resource. Add request IDs and per-principal rate limits. Use idempotency keys for retryable mutations and persist the outcome atomically with the operation. Never trust client-reported payment or identity-verification success.

### Webhooks

Verify the provider signature against the raw payload using its documented algorithm and freshness checks. Reject unauthenticated events, deduplicate event IDs, persist receipt and acknowledge promptly before asynchronous processing. Support out-of-order delivery and retries with a state machine. Keep replay tooling and a dead-letter queue. A public endpoint and a secret URL alone are insufficient verification.

### External calls and files

Set timeouts, bounded retries, circuit breakers and cancellation. Apply SSRF controls to user-provided URLs. Validate upload size, content and ownership; scan where appropriate and use short-lived download grants. Store attachments in object storage with tenant-aware access. Treat all third-party content as untrusted data.

### Contract checks

Exercise malformed payloads, missing fields, oversized input, bad signatures, duplicated events, timeout-after-success, dependency outage and rate-limit responses. Document versioning, deprecation and incident ownership.

## Cloud, DNS & Secrets

Site section: #infrastructure

Keep source, deployment, DNS, runtime resources and credentials as separate layers with explicit ownership.

### Deployment model

GitHub holds source and CI. This knowledge center itself is static GitHub Pages with Cloudflare DNS. A future interactive app may use Cloudflare Workers or Pages Functions for API execution, resource bindings for data and an SMTP-capable backend for SES. Confirm runtime TCP/TLS and library support before choosing a mail implementation. Static HTML cannot safely send authenticated SMTP.

### Environment and bindings

Maintain separate production/demo/staging databases, buckets, sessions and secrets. Record resource IDs and binding names in non-secret configuration. Use a managed secret store with scoped runtime access and a documented rotation procedure. Store SMTP username/password, OTP HMAC key, signing keys and provider client secrets server-side. Public Turnstile site keys are distinct from secret verification keys.

### DNS and TLS

Use the hosting provider’s required custom-domain mapping. GitHub Pages CNAME targets the account’s github.io hostname; Cloudflare Pages uses the project’s pages.dev hostname and an attached Pages custom domain. Confirm domain ownership, DNS resolution, certificate issuance and HTTPS redirects separately. Avoid changing unrelated mail or production records during a web-domain fix.

### Release controls

Review → validate → build → stage → migrate compatibly → deploy → smoke-test → observe. Keep rollback instructions and avoid incompatible schema rollback. Pin dependencies and scan for secrets. Preserve existing production access controls until replacement authentication is implemented and tested. Document any paid resource before enabling it.

## Queues, Jobs & Reliability

Site section: #queues

Background work needs a durable state model and an explicit retry budget.

### Job lifecycle

Use queued, claimed, succeeded, retry_wait and dead_letter states with timestamps, attempt counts and correlation IDs. Assume at-least-once delivery unless the provider contract says otherwise; make handlers idempotent. Use leases/visibility timeouts so crashed workers do not strand jobs. Bound parallelism to downstream capacity.

### Choosing execution tools

Queues decouple producers and consumers; scheduled jobs trigger periodic maintenance; durable workflows coordinate multi-step work; coordinated state handles contention. Keep security-message jobs short-lived. For expensive AI jobs persist progress, cancellation and budgets. Do not use a browser timer as the sole scheduler for critical operations.

### Failure and recovery

Classify retryable versus permanent errors. Use exponential backoff with jitter, maximum attempts and a dead-letter path. Preserve enough redacted context to replay safely. Apply backpressure when provider quotas are exhausted. Monitor oldest-job age as well as queue length.

### Verification

Test duplicate messages, worker crash after side effect but before acknowledgement, expired leases, poison payloads, retry storms, downstream throttling and safe manual replay. Design compensation for partially completed multi-step workflows.

## AI, RAG & Tool Security

Site section: #ai-security

Separate trusted policy and tool permissions from retrieved documents, email bodies and model output.

### Knowledge pipeline

Collect approved sources, record provenance and access permissions, parse and chunk documents, create embeddings and index them. At retrieval time filter by tenant/authorization before sending context to a model. Include source references and allow unknown answers. Plan reindexing and deletion so removed private data does not remain retrievable.

### Agents and tools

Give each tool a narrow schema and least-privilege credential. Validate arguments outside the model, enforce budgets and require the project’s approval gates for consequential actions. Retrieved instructions must not override system policy. Treat prompt injection as an ongoing threat; a prompt disclaimer alone is not a control.

### Evaluation and memory

Use a held-out dataset for groundedness, task accuracy, injection resistance, privacy leakage, tool misuse, latency and cost. Store only necessary user-approved memory with retention and deletion controls. Avoid raw secrets and sensitive identifiers in prompts, embeddings and traces. Log tool decisions and redacted outcomes rather than hidden reasoning.

### Deployment decisions

Compare quality, data-processing terms, region, latency and cost using verified current provider information. Treat the legacy playbook’s model names, prices, improvement percentages and autonomy thresholds as examples, not production guarantees.

## Testing & Accessibility

Site section: #quality

Validate complete user journeys and failure paths, not just whether code parses.

### Test layers

Use focused unit tests for policy decisions, integration tests for database and mail boundaries, contract tests for providers and end-to-end tests for critical journeys. Verify registration → OTP delivery → verification → session → authorized action → logout. Use controlled test mailboxes and provider test modes; never repeatedly send unsolicited test mail.

### Security cases

Test authorization and tenant isolation, replay, injection, token expiry, account enumeration, CSRF, CORS assumptions, upload abuse and secret exposure. Include concurrent OTP redemption and session revocation. Scan dependencies and inspect emitted static assets for accidentally bundled secrets.

### Accessibility and UX

Use semantic landmarks, labelled controls, keyboard access, visible focus, sufficient contrast and descriptive errors. Test mobile layout, zoom, reduced motion and screen readers. Do not make a countdown the only indication of expiry. Keep OTP entry compatible with paste and assistive technologies; provide a clear resend status without exposing account existence.

### Release evidence

Record tested commit, environment, steps, expected and actual results and remaining limitations. A green deployment does not prove application correctness. A syntax check does not establish browser rendering, email delivery or live TLS.

## Monitoring, Privacy & Recovery

Site section: #operations

Operate the system with measurable service objectives, minimal data collection and rehearsed recovery.

### Observability

Collect request latency, error rates, authentication failures, OTP request/verify outcomes, outbox age, email events, database latency and job retries. Use correlation IDs across the flow. Alert on meaningful symptoms and define ownership/runbooks. Exclude credentials, codes, raw session tokens and unnecessary message contents from logs.

### Privacy and retention

Inventory personal data and define purpose, access, retention and deletion across databases, objects, logs, indexes and backups. Keep demo data synthetic. Audit privileged access. Verify applicable legal obligations for the deployment and audience before using templates for marketing or regulated workflows.

### Incident response

Prepare severity definitions, contacts and steps to contain access, revoke sessions, rotate exposed keys and preserve redacted evidence. Investigate delivery incidents without exposing OTPs. Document user-impact assessment and notification decisions. After recovery, record root cause and corrective actions.

### Recovery and launch gate

Define backups, restore tests, failover assumptions and dependency outage behavior. Before launch verify identity/role policies, resource isolation, migration recovery, secret rotation, domain/TLS, SMTP sender authentication, abuse controls, delivery monitoring, accessibility and budget limits. Record unverified dependencies explicitly rather than marking everything production ready.

## Sources

- [OWASP Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP Recovery Tokens](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- [Cloudflare Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/)
- [Cloudflare Turnstile Validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html)
- [AWS SES SMTP TLS](https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html)
- [AWS SES Regions](https://docs.aws.amazon.com/ses/latest/dg/regions.html)
