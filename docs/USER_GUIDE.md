# User guide

## Section reference

| Section | Link suffix | Purpose |
| --- | --- | --- |
| Overview & Vision | #overview | Understand the operating-system concept, users and intended outcomes. |
| Phase 1: Discovery & Scoping | #phase1 | Define workflows, requirements, priorities and success metrics. |
| Phase 2: System Architecture | #phase2 | Review orchestration, memory, routing, tool boundaries and security examples. |
| Phase 3: Data & Prototyping | #phase3 | Prepare a golden dataset and prototype acceptance criteria. |
| Phase 4: Agent Development | #phase4 | Compare agent patterns, prompts and evaluation thresholds. |
| Phase 5: Client-in-the-Loop | #phase5 | Plan reviews, feedback capture and weekly updates. |
| Phase 6: Deployment | #phase6 | Explore example deployment modes and monitoring. |
| Phase 7: Post-Launch & Scale | #phase7 | Review optimization, service targets and pricing examples. |
| Appendices | #appendices | Find the reference prompt, glossary and original content changelog. |

Append a suffix to the site URL to share a section. Selecting a navigation item updates the URL; browser Back and Forward restore it. Scrolling updates the highlighted section and browser title.

## Engineering knowledge sections

- [Databases & Storage](https://app-bible.jelvan.pro/#databases) — Choose storage by consistency, query patterns, tenancy and recovery requirements. Start with the data lifecycle before selecting a product.
- [Authentication & SSO](https://app-bible.jelvan.pro/#authentication) — Authentication proves identity; authorization decides what that identity can do. Keep the two responsibilities explicit.
- [Sessions & Authorization](https://app-bible.jelvan.pro/#sessions) — A successful login must create a controlled, revocable session and enforce access to each resource.
- [Email OTP & Recovery](https://app-bible.jelvan.pro/#otp) — Design challenge issuance, delivery and atomic verification together. The following numeric limits are example application policy, not universal provider requirements.
- [Email Sending & Deliverability](https://app-bible.jelvan.pro/#email) — Use a backend delivery service and observable queues. Keep transactional security messages distinct from marketing campaigns.
- [APIs, Webhooks & Integrations](https://app-bible.jelvan.pro/#apis) — Define contracts and failure handling before connecting external systems.
- [Cloud, DNS & Secrets](https://app-bible.jelvan.pro/#infrastructure) — Keep source, deployment, DNS, runtime resources and credentials as separate layers with explicit ownership.
- [Queues, Jobs & Reliability](https://app-bible.jelvan.pro/#queues) — Background work needs a durable state model and an explicit retry budget.
- [AI, RAG & Tool Security](https://app-bible.jelvan.pro/#ai-security) — Separate trusted policy and tool permissions from retrieved documents, email bodies and model output.
- [Testing & Accessibility](https://app-bible.jelvan.pro/#quality) — Validate complete user journeys and failure paths, not just whether code parses.
- [Monitoring, Privacy & Recovery](https://app-bible.jelvan.pro/#operations) — Operate the system with measurable service objectives, minimal data collection and rehearsed recovery.

See [Engineering Knowledge Reference](ENGINEERING_KNOWLEDGE.md) for the complete text and official sources. All twenty sections are reference material; the static site does not execute these backend patterns.

## Controls

- Search filters navigation labels, not full article text. Clear search to restore all twenty items.
- Ctrl+K / Command+K focuses the visible search field.
- On mobile, open the menu to see navigation and search; selecting a section closes it.
- Use the theme button to switch dark/light. Theme and search reset on reload.
- Use Copy on code/templates to copy their text. Clipboard behavior can depend on browser permissions.
- Changelog jumps to Appendices. Repository CHANGELOG.md records application changes separately.

## Branding

The red outlined hexagon and three dots are shared by the sidebar, mobile header and favicon. Every section uses the title “Section name | MASTER AI - Knowledge Center”.

## Scope

No account, AI execution, email sending, database or backend is implemented. Example dashboards and figures are illustrative. Do not place credentials or private information in the public repository.

## Troubleshooting

If navigation is missing, clear the search. If the icon is stale, hard-refresh or reopen the tab. If the page is blank, check the browser console and serve through HTTP. For custom-domain or certificate failures, follow DEPLOYMENT.md.

## AI research, diagrams and copy controls

The site now has twenty-four navigation sections. AI research is dated 2 November 2026; it does not refresh automatically. See [AI research](AI_RESEARCH.md) and [diagram source](DIAGRAMS.md).

Every section has Copy section and Copy link controls. Each code block has its own Copy button. Mermaid diagrams show both a rendered preview and source; copy the source into a fenced mermaid block for GitHub. If clipboard access fails, select the visible text manually. Diagram previews require the pinned external Mermaid module; readable source remains if it cannot load. The site logo remains unchanged.
