# Public HTML chapter directory

Each chapter is a separate, standalone HTML document with its own URL, article content, table of contents, examples, code and diagrams. The **Daily Reference Updates** panel on each page reads the monitoring record for its chapter ID from the reference Worker. Navigation opens the selected HTML document; it does not rely on hash navigation across one long page.

| Order | Section | Chapter | Local HTML | Public page |
|---:|---|---|---|---|
| 00 | Foundations | Overview & Vision | [overview.html](../overview.html) | [Open](https://app-bible.jelvan.pro/overview.html) |
| 01 | Foundations | Discovery & Scoping | [phase1.html](../phase1.html) | [Open](https://app-bible.jelvan.pro/phase1.html) |
| 02 | Foundations | System Architecture | [phase2.html](../phase2.html) | [Open](https://app-bible.jelvan.pro/phase2.html) |
| 03 | Foundations | Data & Prototyping | [phase3.html](../phase3.html) | [Open](https://app-bible.jelvan.pro/phase3.html) |
| 04 | Foundations | Agent Development | [phase4.html](../phase4.html) | [Open](https://app-bible.jelvan.pro/phase4.html) |
| 05 | Foundations | Client Review & Feedback | [phase5.html](../phase5.html) | [Open](https://app-bible.jelvan.pro/phase5.html) |
| 06 | Foundations | Deployment | [phase6.html](../phase6.html) | [Open](https://app-bible.jelvan.pro/phase6.html) |
| 07 | Foundations | Post-Launch & Scale | [phase7.html](../phase7.html) | [Open](https://app-bible.jelvan.pro/phase7.html) |
| 08 | Foundations | Glossary & Reference Templates | [appendices.html](../appendices.html) | [Open](https://app-bible.jelvan.pro/appendices.html) |
| 09 | Application Platform | Databases & Storage | [databases.html](../databases.html) | [Open](https://app-bible.jelvan.pro/databases.html) |
| 10 | Application Platform | Authentication & SSO | [authentication.html](../authentication.html) | [Open](https://app-bible.jelvan.pro/authentication.html) |
| 11 | Application Platform | Sessions & Authorization | [sessions.html](../sessions.html) | [Open](https://app-bible.jelvan.pro/sessions.html) |
| 12 | Application Platform | Email OTP & Recovery | [otp.html](../otp.html) | [Open](https://app-bible.jelvan.pro/otp.html) |
| 13 | Application Platform | Email Delivery | [email.html](../email.html) | [Open](https://app-bible.jelvan.pro/email.html) |
| 14 | Application Platform | APIs & Webhooks | [apis.html](../apis.html) | [Open](https://app-bible.jelvan.pro/apis.html) |
| 15 | Application Platform | Cloud, DNS & Secrets | [infrastructure.html](../infrastructure.html) | [Open](https://app-bible.jelvan.pro/infrastructure.html) |
| 16 | Application Platform | Queues & Reliability | [queues.html](../queues.html) | [Open](https://app-bible.jelvan.pro/queues.html) |
| 17 | AI Engineering | AI, RAG & Tool Security | [ai-security.html](../ai-security.html) | [Open](https://app-bible.jelvan.pro/ai-security.html) |
| 18 | Operations & Quality | Testing & Accessibility | [quality.html](../quality.html) | [Open](https://app-bible.jelvan.pro/quality.html) |
| 19 | Operations & Quality | Monitoring & Recovery | [operations.html](../operations.html) | [Open](https://app-bible.jelvan.pro/operations.html) |
| 20 | AI Engineering | LLMs by Task | [llm-selection.html](../llm-selection.html) | [Open](https://app-bible.jelvan.pro/llm-selection.html) |
| 21 | AI Engineering | AI Research & Updates | [ai-updates.html](../ai-updates.html) | [Open](https://app-bible.jelvan.pro/ai-updates.html) |
| 22 | AI Engineering | Model Routing & Evaluation | [model-routing.html](../model-routing.html) | [Open](https://app-bible.jelvan.pro/model-routing.html) |
| 23 | Operations & Quality | Mermaid Diagram Library | [mermaid-diagrams.html](../mermaid-diagrams.html) | [Open](https://app-bible.jelvan.pro/mermaid-diagrams.html) |
| 24 | Implementation Chapters | Production AI Architecture | [chapter-01-production-ai-architecture.html](../chapter-01-production-ai-architecture.html) | [Open](https://app-bible.jelvan.pro/chapter-01-production-ai-architecture.html) |
| 25 | Implementation Chapters | Worker Architecture & Implementation | [worker-implementation.html](../worker-implementation.html) | [Open](https://app-bible.jelvan.pro/worker-implementation.html) |
| 26 | Application Engineering | Web Application Engineering | [web-application-engineering.html](../web-application-engineering.html) | [Open](https://app-bible.jelvan.pro/web-application-engineering.html) |

The public home page is [MASTER AI Knowledge Center](https://app-bible.jelvan.pro/). The index page is a reader entry point; it is not a separate chapter and does not receive a duplicate scheduled reference check.

## Chapter content and auto-sync mapping

The complete mapping of chapter ID, registry order, group, exact official reference URLs and related chapters is maintained in [Chapter Auto-Sync Map](CHAPTER_AUTOSYNC_MAP.md). The machine-readable registry is config/chapters.json. Its Worker mirror is workers/knowledge-center-updates/worker.mjs.

## Reader behavior

- Every chapter contains its own content; reading does not require an API response.
- The shared assets provide responsive styling, navigation, copy controls, search and diagram enhancement.
- Mermaid source remains readable and copyable if the preview library is unavailable.
- The Daily Reference Updates panel is supplementary. If the monitoring service is unavailable, the chapter remains readable.
- Search index content is generated from the chapter pages and should be rebuilt after editorial changes.

## Maintenance

Follow [Chapter Pattern](CHAPTER_PATTERN.md) for new or revised pages and [Daily Reference Updates](DAILY_UPDATES.md) for source monitoring, endpoint behavior, testing, deployment and rollback. Static page publication and Cloudflare Worker deployment are separate release operations.
