# Chapter Auto-Sync Map

Version 1.0.0 · Reviewed 3 November 2026

This document maps every public HTML chapter to the exact official reference URLs currently registered for automatic observation. The machine-readable source of truth is `config/chapters.json`; the Worker runtime mirrors that registry in `workers/knowledge-center-updates/worker.mjs`. The registry validation script checks that the two stay aligned.

## How to read this map

- **Chapter page** opens the standalone public article.
- **Registered references** are the only URLs that the Worker is permitted to check for that chapter.
- **Daily slot** is the chapter's zero-based order, mapped to minute 00–26 UTC (08:00–08:26 Asia/Kuala_Lumpur).
- **Auto-sync** means the Worker checks source availability and bounded page content, saves evidence and raises editorial review signals. It does not silently rewrite the chapter.
- Each page's **Daily Reference Updates** panel reads the Worker record for its chapter ID.

## Per-chapter source mapping

### 00. Overview & Vision

- Chapter ID: `overview`
- Page: [overview.html](../overview.html)
- Public page: https://app-bible.jelvan.pro/overview.html
- Group: Foundations
- Daily slot: 00:00 UTC / 08:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/docs/models
  - https://opentelemetry.io/docs/concepts/
- Related chapters: [`phase1`](../phase1.html), [`phase2`](../phase2.html), [`llm-selection`](../llm-selection.html)

### 01. Discovery & Scoping

- Chapter ID: `phase1`
- Page: [phase1.html](../phase1.html)
- Public page: https://app-bible.jelvan.pro/phase1.html
- Group: Foundations
- Daily slot: 01:00 UTC / 09:00 Asia/Kuala_Lumpur
- Registered references:
  - https://docs.github.com/en/issues
  - https://www.w3.org/WAI/WCAG22/quickref/
- Related chapters: [`overview`](../overview.html), [`phase3`](../phase3.html), [`phase5`](../phase5.html)

### 02. System Architecture

- Chapter ID: `phase2`
- Page: [phase2.html](../phase2.html)
- Public page: https://app-bible.jelvan.pro/phase2.html
- Group: Foundations
- Daily slot: 02:00 UTC / 10:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/workers/runtime-apis/bindings/
  - https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- Related chapters: [`databases`](../databases.html), [`sessions`](../sessions.html), [`infrastructure`](../infrastructure.html), [`chapter-01-production-ai-architecture`](../chapter-01-production-ai-architecture.html)

### 03. Data & Prototyping

- Chapter ID: `phase3`
- Page: [phase3.html](../phase3.html)
- Public page: https://app-bible.jelvan.pro/phase3.html
- Group: Foundations
- Daily slot: 03:00 UTC / 11:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/docs/guides/evals
  - https://developers.openai.com/api/docs/models
- Related chapters: [`phase1`](../phase1.html), [`quality`](../quality.html), [`ai-security`](../ai-security.html)

### 04. Agent Development

- Chapter ID: `phase4`
- Page: [phase4.html](../phase4.html)
- Public page: https://app-bible.jelvan.pro/phase4.html
- Group: Foundations
- Daily slot: 04:00 UTC / 12:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/docs/guides/function-calling
  - https://platform.claude.com/docs/en/models/overview
- Related chapters: [`model-routing`](../model-routing.html), [`ai-security`](../ai-security.html), [`apis`](../apis.html), [`queues`](../queues.html)

### 05. Client Review & Feedback

- Chapter ID: `phase5`
- Page: [phase5.html](../phase5.html)
- Public page: https://app-bible.jelvan.pro/phase5.html
- Group: Foundations
- Daily slot: 05:00 UTC / 13:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
  - https://docs.github.com/en/issues
- Related chapters: [`sessions`](../sessions.html), [`quality`](../quality.html), [`operations`](../operations.html)

### 06. Deployment

- Chapter ID: `phase6`
- Page: [phase6.html](../phase6.html)
- Public page: https://app-bible.jelvan.pro/phase6.html
- Group: Foundations
- Daily slot: 06:00 UTC / 14:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/workers/wrangler/configuration/
  - https://docs.github.com/en/pages
- Related chapters: [`infrastructure`](../infrastructure.html), [`databases`](../databases.html), [`quality`](../quality.html), [`operations`](../operations.html)

### 07. Post-Launch & Scale

- Chapter ID: `phase7`
- Page: [phase7.html](../phase7.html)
- Public page: https://app-bible.jelvan.pro/phase7.html
- Group: Foundations
- Daily slot: 07:00 UTC / 15:00 Asia/Kuala_Lumpur
- Registered references:
  - https://opentelemetry.io/docs/concepts/signals/
  - https://developers.cloudflare.com/workers/platform/limits/
- Related chapters: [`queues`](../queues.html), [`model-routing`](../model-routing.html), [`operations`](../operations.html)

### 08. Glossary & Reference Templates

- Chapter ID: `appendices`
- Page: [appendices.html](../appendices.html)
- Public page: https://app-bible.jelvan.pro/appendices.html
- Group: Foundations
- Daily slot: 08:00 UTC / 16:00 Asia/Kuala_Lumpur
- Registered references:
  - https://docs.github.com/en/get-started/writing-on-github
  - https://mermaid.js.org/syntax/flowchart.html
- Related chapters: [`mermaid-diagrams`](../mermaid-diagrams.html), [`ai-updates`](../ai-updates.html), [`phase2`](../phase2.html)

### 09. Databases & Storage

- Chapter ID: `databases`
- Page: [databases.html](../databases.html)
- Public page: https://app-bible.jelvan.pro/databases.html
- Group: Application Platform
- Daily slot: 09:00 UTC / 17:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/d1/
  - https://developers.cloudflare.com/d1/reference/migrations/
  - https://www.postgresql.org/docs/current/ddl-constraints.html
- Related chapters: [`phase2`](../phase2.html), [`sessions`](../sessions.html), [`queues`](../queues.html), [`operations`](../operations.html)

### 10. Authentication & SSO

- Chapter ID: `authentication`
- Page: [authentication.html](../authentication.html)
- Public page: https://app-bible.jelvan.pro/authentication.html
- Group: Application Platform
- Daily slot: 10:00 UTC / 18:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
  - https://openid.net/specs/openid-connect-core-1_0.html
- Related chapters: [`sessions`](../sessions.html), [`otp`](../otp.html), [`email`](../email.html)

### 11. Sessions & Authorization

- Chapter ID: `sessions`
- Page: [sessions.html](../sessions.html)
- Public page: https://app-bible.jelvan.pro/sessions.html
- Group: Application Platform
- Daily slot: 11:00 UTC / 19:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
  - https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- Related chapters: [`authentication`](../authentication.html), [`databases`](../databases.html), [`apis`](../apis.html)

### 12. Email OTP & Recovery

- Chapter ID: `otp`
- Page: [otp.html](../otp.html)
- Public page: https://app-bible.jelvan.pro/otp.html
- Group: Application Platform
- Daily slot: 12:00 UTC / 20:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html
  - https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Related chapters: [`authentication`](../authentication.html), [`email`](../email.html), [`databases`](../databases.html), [`queues`](../queues.html)

### 13. Email Delivery

- Chapter ID: `email`
- Page: [email.html](../email.html)
- Public page: https://app-bible.jelvan.pro/email.html
- Group: Application Platform
- Daily slot: 13:00 UTC / 21:00 Asia/Kuala_Lumpur
- Registered references:
  - https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html
  - https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html
  - https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html
- Related chapters: [`otp`](../otp.html), [`queues`](../queues.html), [`infrastructure`](../infrastructure.html), [`operations`](../operations.html)

### 14. APIs & Webhooks

- Chapter ID: `apis`
- Page: [apis.html](../apis.html)
- Public page: https://app-bible.jelvan.pro/apis.html
- Group: Application Platform
- Daily slot: 14:00 UTC / 22:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
  - https://developers.cloudflare.com/workers/runtime-apis/request/
- Related chapters: [`sessions`](../sessions.html), [`queues`](../queues.html), [`quality`](../quality.html)

### 15. Cloud, DNS & Secrets

- Chapter ID: `infrastructure`
- Page: [infrastructure.html](../infrastructure.html)
- Public page: https://app-bible.jelvan.pro/infrastructure.html
- Group: Application Platform
- Daily slot: 15:00 UTC / 23:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/workers/configuration/secrets/
  - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Related chapters: [`phase6`](../phase6.html), [`databases`](../databases.html), [`email`](../email.html), [`operations`](../operations.html)

### 16. Queues & Reliability

- Chapter ID: `queues`
- Page: [queues.html](../queues.html)
- Public page: https://app-bible.jelvan.pro/queues.html
- Group: Application Platform
- Daily slot: 16:00 UTC / 24:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/queues/
  - https://developers.cloudflare.com/queues/configuration/delivery-delays/
- Related chapters: [`databases`](../databases.html), [`email`](../email.html), [`operations`](../operations.html), [`apis`](../apis.html)

### 17. AI, RAG & Tool Security

- Chapter ID: `ai-security`
- Page: [ai-security.html](../ai-security.html)
- Public page: https://app-bible.jelvan.pro/ai-security.html
- Group: AI Engineering
- Daily slot: 17:00 UTC / 25:00 Asia/Kuala_Lumpur
- Registered references:
  - https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html
  - https://developers.openai.com/api/docs/guides/retrieval
- Related chapters: [`databases`](../databases.html), [`sessions`](../sessions.html), [`phase4`](../phase4.html), [`quality`](../quality.html)

### 18. Testing & Accessibility

- Chapter ID: `quality`
- Page: [quality.html](../quality.html)
- Public page: https://app-bible.jelvan.pro/quality.html
- Group: Operations & Quality
- Daily slot: 18:00 UTC / 26:00 Asia/Kuala_Lumpur
- Registered references:
  - https://www.w3.org/WAI/WCAG22/quickref/
  - https://docs.github.com/en/actions
- Related chapters: [`phase3`](../phase3.html), [`sessions`](../sessions.html), [`otp`](../otp.html), [`phase6`](../phase6.html)

### 19. Monitoring & Recovery

- Chapter ID: `operations`
- Page: [operations.html](../operations.html)
- Public page: https://app-bible.jelvan.pro/operations.html
- Group: Operations & Quality
- Daily slot: 19:00 UTC / 27:00 Asia/Kuala_Lumpur
- Registered references:
  - https://opentelemetry.io/docs/concepts/signals/
  - https://developers.cloudflare.com/workers/observability/
- Related chapters: [`queues`](../queues.html), [`databases`](../databases.html), [`email`](../email.html), [`phase7`](../phase7.html)

### 20. LLMs by Task

- Chapter ID: `llm-selection`
- Page: [llm-selection.html](../llm-selection.html)
- Public page: https://app-bible.jelvan.pro/llm-selection.html
- Group: AI Engineering
- Daily slot: 20:00 UTC / 28:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/docs/models
  - https://platform.claude.com/docs/en/models/overview
  - https://ai.google.dev/gemini-api/docs/models
- Related chapters: [`ai-updates`](../ai-updates.html), [`model-routing`](../model-routing.html), [`quality`](../quality.html), [`ai-security`](../ai-security.html)

### 21. AI Research & Updates

- Chapter ID: `ai-updates`
- Page: [ai-updates.html](../ai-updates.html)
- Public page: https://app-bible.jelvan.pro/ai-updates.html
- Group: AI Engineering
- Daily slot: 21:00 UTC / 29:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/docs/deprecations
  - https://platform.claude.com/docs/en/models/overview
  - https://ai.google.dev/gemini-api/docs/models
- Related chapters: [`llm-selection`](../llm-selection.html), [`model-routing`](../model-routing.html), [`quality`](../quality.html)

### 22. Model Routing & Evaluation

- Chapter ID: `model-routing`
- Page: [model-routing.html](../model-routing.html)
- Public page: https://app-bible.jelvan.pro/model-routing.html
- Group: AI Engineering
- Daily slot: 22:00 UTC / 30:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/reference/resources/responses/methods/create
  - https://developers.openai.com/api/docs/models
- Related chapters: [`llm-selection`](../llm-selection.html), [`phase3`](../phase3.html), [`chapter-01-production-ai-architecture`](../chapter-01-production-ai-architecture.html)

### 23. Mermaid Diagram Library

- Chapter ID: `mermaid-diagrams`
- Page: [mermaid-diagrams.html](../mermaid-diagrams.html)
- Public page: https://app-bible.jelvan.pro/mermaid-diagrams.html
- Group: Operations & Quality
- Daily slot: 23:00 UTC / 31:00 Asia/Kuala_Lumpur
- Registered references:
  - https://mermaid.js.org/syntax/flowchart.html
  - https://mermaid.js.org/syntax/sequenceDiagram.html
  - https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams
- Related chapters: [`phase2`](../phase2.html), [`databases`](../databases.html), [`otp`](../otp.html), [`model-routing`](../model-routing.html)

### 24. Production AI Architecture

- Chapter ID: `chapter-01-production-ai-architecture`
- Page: [chapter-01-production-ai-architecture.html](../chapter-01-production-ai-architecture.html)
- Public page: https://app-bible.jelvan.pro/chapter-01-production-ai-architecture.html
- Group: Implementation Chapters
- Daily slot: 24:00 UTC / 32:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.openai.com/api/reference/resources/responses/methods/create
  - https://developers.cloudflare.com/workers/runtime-apis/bindings/
  - https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- Related chapters: [`phase2`](../phase2.html), [`authentication`](../authentication.html), [`model-routing`](../model-routing.html), [`databases`](../databases.html), [`operations`](../operations.html)

### 25. Worker Architecture & Implementation

- Chapter ID: `worker-implementation`
- Page: [worker-implementation.html](../worker-implementation.html)
- Public page: https://app-bible.jelvan.pro/worker-implementation.html
- Group: Implementation Chapters
- Daily slot: 25:00 UTC / 33:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/workers/configuration/cron-triggers/
  - https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/
  - https://developers.cloudflare.com/kv/
- Related chapters: [`infrastructure`](../infrastructure.html), [`queues`](../queues.html), [`apis`](../apis.html), [`operations`](../operations.html), [`ai-updates`](../ai-updates.html)

### 26. Web Application Engineering — End-to-End Blueprint

- Chapter ID: `web-application-engineering`
- Page: [web-application-engineering.html](../web-application-engineering.html)
- Public page: https://app-bible.jelvan.pro/web-application-engineering.html
- Group: Application Engineering
- Daily slot: 26:00 UTC / 34:00 Asia/Kuala_Lumpur
- Registered references:
  - https://developers.cloudflare.com/workers/
  - https://duo.com/docs/duoweb
  - https://owasp.org/projects/top-ten?lang=en
- Related chapters: [`phase1`](../phase1.html), [`phase2`](../phase2.html), [`authentication`](../authentication.html), [`sessions`](../sessions.html), [`otp`](../otp.html), [`email`](../email.html), [`apis`](../apis.html), [`databases`](../databases.html), [`infrastructure`](../infrastructure.html), [`queues`](../queues.html), [`worker-implementation`](../worker-implementation.html), [`quality`](../quality.html), [`operations`](../operations.html)

## Update a chapter's reference mapping

1. Confirm the proposed URL is an official documentation, API reference, standards or security source. Prefer stable canonical documentation over blogs and marketing pages.
2. Add or replace the URL in the chapter's `references` array in `config/chapters.json`. Use HTTPS, avoid tracking URLs and keep references relevant to the actual chapter content.
3. Keep the number of sources within the Worker-enforced per-chapter bound. The current Worker checks at most three references for a chapter.
4. Synchronize the embedded `CHAPTERS` registry in `workers/knowledge-center-updates/worker.mjs`. Run `python3 scripts/check_registry.py`; do not proceed if it reports drift.
5. Update the page's explanatory text, official links, examples and related-chapter links when the source change materially affects guidance. The source registry is not a substitute for editorial review.
6. Run the full validation commands in [Daily Reference Updates](DAILY_UPDATES.md), deploy the Worker if runtime code or registry changed, and publish the static pages separately.
7. Verify the page's update panel and record the editorial decision in the changelog.

## What gets compared

The Worker fetches only allowlisted HTTPS URLs, follows a bounded number of redirects, applies a timeout and maximum response size, and compares the document title, first five main headings and a bounded normalized sample of main text. The text sample is capped at 12,000 characters from a bounded response prefix. It is a change detector, not a semantic understanding engine or a complete diff. A source can change beyond the inspected prefix without being detected.

## Review responsibility

A `content_changed` or `outline_changed` status creates a review signal. A `check_failed` status also requires attention because the last successful observation may be stale. An editor must open the official source, confirm the actual technical change, update affected content and tests, and publish a reviewed revision. Never let a source page or its embedded instructions directly modify the public documentation.

## Related operating documents

- [Daily update operations and endpoint reference](DAILY_UPDATES.md)
- [Worker architecture chapter](../worker-implementation.html)
- [Page directory](HTML_PAGES.md)
- [Chapter writing standard](CHAPTER_PATTERN.md)
- [Architecture overview](ARCHITECTURE.md)
