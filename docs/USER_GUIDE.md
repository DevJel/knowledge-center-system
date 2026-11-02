# Reader Guide — MASTER AI Knowledge Center

## Open and navigate the chapters

The Knowledge Center is organized as separate, standalone HTML pages. Select a topic from the reader navigation or use the direct links below. A chapter opens as its own document with its own URL; it is not an anchor inside a single long article.

Start at [MASTER AI Knowledge Center](https://app-bible.jelvan.pro/). For the full list of local files, topic descriptions and direct links, see [HTML Page Directory](HTML_PAGES.md).

### Foundations

- [Overview & Vision](https://app-bible.jelvan.pro/overview.html) — understand the purpose, operating model, intended users and system goals.
- [Discovery & Scoping](https://app-bible.jelvan.pro/phase1.html) — define the problem, users, constraints, workflows, priorities and success measures.
- [System Architecture](https://app-bible.jelvan.pro/phase2.html) — understand system boundaries, components, trust zones and architecture decisions.
- [Data & Prototyping](https://app-bible.jelvan.pro/phase3.html) — prepare data, build a focused prototype and define acceptance criteria.
- [Agent Development](https://app-bible.jelvan.pro/phase4.html) — design agent roles, tool use, prompts, validation and evaluation.
- [Client Review & Feedback](https://app-bible.jelvan.pro/phase5.html) — plan human approvals, feedback and audit trails.
- [Deployment](https://app-bible.jelvan.pro/phase6.html) — understand build, release, environment, verification and rollback.
- [Post-Launch & Scale](https://app-bible.jelvan.pro/phase7.html) — operate, monitor, optimize and scale a live system.
- [Glossary & Reference Templates](https://app-bible.jelvan.pro/appendices.html) — reusable terms, checklists and templates.

### Application platform

- [Databases & Storage](https://app-bible.jelvan.pro/databases.html)
- [Authentication & SSO](https://app-bible.jelvan.pro/authentication.html)
- [Sessions & Authorization](https://app-bible.jelvan.pro/sessions.html)
- [Email OTP & Recovery](https://app-bible.jelvan.pro/otp.html)
- [Email Delivery](https://app-bible.jelvan.pro/email.html)
- [APIs & Webhooks](https://app-bible.jelvan.pro/apis.html)
- [Cloud, DNS & Secrets](https://app-bible.jelvan.pro/infrastructure.html)
- [Queues & Reliability](https://app-bible.jelvan.pro/queues.html)

These chapters explain how application identity, data, APIs, email, cloud resources and background jobs fit together. Read Authentication before Sessions; read OTP together with Email Delivery; read Databases alongside Queues when designing durable workflows.

### AI engineering

- [AI, RAG & Tool Security](https://app-bible.jelvan.pro/ai-security.html)
- [LLMs by Task](https://app-bible.jelvan.pro/llm-selection.html)
- [AI Research & Updates](https://app-bible.jelvan.pro/ai-updates.html)
- [Model Routing & Evaluation](https://app-bible.jelvan.pro/model-routing.html)
- [Production AI Architecture](https://app-bible.jelvan.pro/chapter-01-production-ai-architecture.html)

These topics cover model choice, retrieval, prompt-injection defenses, tool authorization, evaluation and a complete request lifecycle. Treat model-generated text and retrieved documents as untrusted input; enforce permissions in the application, not in a prompt.

### Operations and implementation

- [Testing & Accessibility](https://app-bible.jelvan.pro/quality.html)
- [Monitoring & Recovery](https://app-bible.jelvan.pro/operations.html)
- [Mermaid Diagram Library](https://app-bible.jelvan.pro/mermaid-diagrams.html)
- [Worker Architecture & Implementation](https://app-bible.jelvan.pro/worker-implementation.html)
- [Web Application Engineering](https://app-bible.jelvan.pro/web-application-engineering.html)

## Daily Reference Updates panel

Each chapter includes a **Daily Reference Updates** panel. It displays source-check evidence for the reference URLs registered to that chapter. The panel may show a pending first check, a baseline, unchanged source content, a changed outline/content, a partial result or a failed source check.

### What the panel tells you

- When the last source-check attempt occurred.
- When the last fully successful chapter check occurred.
- Which registered official sources were checked.
- Whether the compared title, headings or bounded main text changed.
- Whether a source could not be checked and its previous successful evidence may be stale.
- Whether editorial review signals were recorded for the chapter.

A source change is a prompt for human review, not proof that the chapter is wrong. Open the source, verify the actual technical change, update the relevant guidance and record the editorial decision. The Worker does not silently rewrite public chapters.

For the full schedule, reference mapping, endpoint behavior, refresh procedure and failure handling, read [Daily Reference Updates](DAILY_UPDATES.md) and [Chapter Auto-Sync Map](CHAPTER_AUTOSYNC_MAP.md).

## Reader controls

- **Search:** filters the chapter navigation and, where enabled, searches indexed chapter content. Clear the query to restore the full directory.
- **Keyboard shortcut:** Ctrl+K or Command+K focuses the search field where supported.
- **Mobile navigation:** open the navigation menu to access the chapter list; selecting a chapter opens its standalone page.
- **Theme:** use the theme control to switch between supported light and dark presentations.
- **Copy code:** use the Copy control on a code block. If clipboard permission is unavailable, select and copy the visible source manually.
- **Copy diagram:** Mermaid source remains available as text even if the diagram preview library cannot load.
- **Related topics:** use a chapter's related links to continue along the learning path.

## Important scope boundaries

The reader is static documentation. It does not provide user accounts, run the example backend, send OTP or other email, execute AI agents, connect to a user's database or create cloud infrastructure. Those systems are described for educational use and must be implemented and secured separately.

Never enter credentials, private customer information or production secrets into public documentation or examples.

## Troubleshooting

- If a chapter is missing from navigation, clear the search filter and reload the page.
- If the Daily Reference Updates panel cannot load, the chapter remains available; retry later and check the update service status through the operator procedure.
- If a source shows a failed check, open the official reference directly. Some providers block automated fetches or rate-limit requests.
- If a diagram preview is unavailable, use its visible Mermaid source.
- If a custom domain or certificate fails, follow [Deployment Guide](DEPLOYMENT.md).
