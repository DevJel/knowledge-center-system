# Knowledge Center Chapter Standard

Version 2.0.0 · Reviewed 3 November 2026

## Purpose

Every public topic is a standalone HTML chapter. Chapters should teach a developer how to understand a problem, choose an approach, implement it safely, verify the result and maintain it. They should not be shallow technology lists or unexplained code dumps.

## Required chapter structure

Use the following structure where it fits the topic. A chapter may add sections when the subject needs more detail, but should not omit the explanation, process, implementation or verification layers.

1. **Title, scope and revision** — precise topic name, version, review date, audience and boundaries.
2. **Description and purpose** — definition, problem solved, why it matters, when it applies and when it does not.
3. **Concepts and terminology** — explain acronyms, important terms, roles and prerequisites.
4. **Architecture and responsibilities** — components, request/data flow, trust boundaries, ownership and dependencies.
5. **Decision process** — options, selection criteria, trade-offs, assumptions and examples of when to choose each.
6. **Step-by-step implementation** — prerequisites, ordered actions, configuration, server/browser boundaries and expected result after each step.
7. **Specific examples and code** — realistic scenario, annotated snippets, input/output, error handling and notes about what must change before production.
8. **Mermaid diagrams** — relevant flowchart, sequence, state or ER diagram with explanation and copyable source.
9. **Security, privacy and failure modes** — threat model, validation, authorization, secrets, abuse cases, timeouts, retries and recovery.
10. **Testing and acceptance evidence** — positive, negative, boundary, abuse and recovery tests with measurable acceptance criteria.
11. **Operations and lifecycle** — monitoring, ownership, versioning, maintenance, deprecation and rollback.
12. **Official references and related chapters** — stable primary sources, source dates where time-sensitive, and links to related standalone pages.
13. **Daily Reference Updates** — the chapter ID and its approved reference mapping, with source-check evidence rendered by the shared panel.

## Writing rules

- Write for a developer who may be new to the topic. Explain why each step exists.
- Define an acronym the first time it appears.
- Separate conceptual guidance, illustrative examples and production-ready configuration.
- Identify whether code runs in a browser, backend, Worker, queue consumer, CLI or CI environment.
- Use placeholders for secrets and explain secure secret provisioning. Never use real credentials.
- State assumptions, supported versions, limits and provider-specific behavior.
- Do not invent current product features, pricing, limits or performance figures. Verify them against current official sources and date time-sensitive claims.
- Explain failure paths, not only the happy path.
- Keep diagrams consistent with the prose, code and security model.
- Use accessible headings, meaningful link labels, readable code and mobile-friendly tables.
- Link to standalone chapter URLs rather than obsolete hash-only routes.
- Treat source-monitoring alerts as review signals, not automatic approval to change public technical content.

## Auto-sync requirements

The canonical registry is config/chapters.json. Every chapter record defines its ID, group, title, order, related chapters and approved official references. The Worker runtime mirrors this registry in workers/knowledge-center-updates/worker.mjs.

When adding or changing a chapter:

1. Create or update its standalone HTML file.
2. Add the chapter record and no more than the Worker-supported number of source URLs to config/chapters.json.
3. Synchronize the embedded Worker registry.
4. Update docs/HTML_PAGES.md and docs/CHAPTER_AUTOSYNC_MAP.md.
5. Add or update its search metadata by rebuilding the generated search index.
6. Ensure the page contains the Daily Reference Updates panel with the matching data-chapter-id.
7. Run the registry, documentation, search, JavaScript and Worker tests.
8. Deploy Worker changes separately from static HTML publication.
9. Verify the public page and source panel.

## Shared behavior

Shared styles and scripts provide the responsive reader, search, copy controls, theme and diagram enhancement. A chapter must remain readable if JavaScript, the search index, the update API or the Mermaid preview CDN is unavailable.

The source panel must use textContent or equivalent safe DOM construction for all remote values. It must never interpret fetched reference content as HTML or execute it. The public panel is read-only and must not expose the manual refresh secret.

## Review checklist

- Is the purpose and audience clear?
- Are prerequisites and assumptions explicit?
- Can a reader follow the implementation from start to finish?
- Are code samples explained and technically coherent?
- Are browser and server responsibilities distinguished?
- Are authentication and authorization treated separately?
- Are tenant/data boundaries and secrets handled safely?
- Are errors, retries, concurrency and recovery explained?
- Does each diagram match the described behavior?
- Are tests and acceptance evidence specific?
- Are official sources current and directly relevant?
- Are related page links valid standalone URLs?
- Does the chapter ID match the registry and its update panel?
- Does the search index include the chapter after rebuild?

## Related documents

- [Standalone HTML directory](HTML_PAGES.md)
- [Per-chapter reference mapping](CHAPTER_AUTOSYNC_MAP.md)
- [Daily Reference Updates operations](DAILY_UPDATES.md)
- [Reader Guide](USER_GUIDE.md)
- [System Architecture](ARCHITECTURE.md)
