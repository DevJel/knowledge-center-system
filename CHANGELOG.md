# Changelog

## 2.3.0 — 3 November 2026

- Added a senior engineering walkthrough to all 27 standalone chapters, with topic-specific worked scenarios, ordered implementation steps, code examples, Mermaid process diagrams, operational measures and review checklists.
- Expanded Worker source monitoring to create per-chapter editorial review signals and expose a read-only review queue.
- Added source changes for secret-protected on-demand chapter refresh, with same-day cache bypass and authorization tests.
- Updated the public chapter panels to display editorial review signals and aligned the daily schedule display to 08:00–08:26 Malaysia time.
- The new Worker endpoints require deployment and `UPDATE_TRIGGER_TOKEN` provisioning before they become live; automatic publication of unreviewed technical prose remains disabled by design.


## 2.2.0 — 3 November 2026

- Added Web Application Engineering end-to-end chapter covering UI, languages, identity, Duo, SSO, backend APIs, databases, storage, queues, security, testing, deployment and operations.
- Added official platform logo cards, vendor documentation links and implementation guidance to application, infrastructure, AI security, testing and operational chapters.
- Added chapter to navigation, search index, registry and HTML page map.
- Expanded shared CSS for responsive platform reference cards.
- Browser rendering, external logo CDN availability and production deployment still require live verification.


## 2.1.0 — 2 November 2026

- Added full chapter search, title filtering, static page outlines and previous/next navigation.
- Improved mobile navigation, keyboard access, print presentation, code wrapping and theme persistence.
- Fixed chapter-copy formatting and added clipboard fallback.
- Isolated Mermaid preview failures and kept sources readable.
- Added structural validation to the Pages workflow and updated architecture documentation.


## 2026-11-02

- Added researched task-specific model guidance, dated AI updates and evaluation/routing sections.
- Replaced the architecture SVG with Mermaid; added seven copyable flow, sequence, state and data diagrams.
- Added Copy section and Copy link controls throughout; retained per-code-block Copy.
- Replaced historical hardcoded model routing examples with registry-based choices.
- Expanded application JavaScript parses successfully; browser preview and Mermaid runtime rendering still require live verification.

- Added eleven engineering sections and forty-six topics covering storage, identity, sessions, OTP, SES SMTP, APIs, cloud, queues, AI security, testing and recovery.
- Added official references and an engineering guide; aligned the original prototype hallucination threshold with its evaluation table.
- Validation: expanded application JavaScript syntax check passed. Live browser validation remains outstanding.

- Confirmed application name: MASTER AI - Knowledge Center; aligned header, hero, footer and browser-title suffix.

- Added SVG favicon using the existing MASTER AI red hexagon and three-dot logo.
- Replaced React Artifact with section-specific MASTER AI browser titles.
- Added description and theme-color metadata.
- Added shareable navigation hashes, initial deep-link restoration and Back/Forward handling.
- Added active-navigation semantics, accessible control names and Ctrl+K / Command+K search focus.
- Corrected the sidebar status to identify a documentation site.
- Added user, deployment and maintenance guides while preserving the original README playbook.
- Recorded the intended custom domain in CNAME and aligned Cloudflare DNS in the preceding update.

Validation: updated main application JavaScript parses successfully with Node. Browser rendering and custom-domain HTTPS remain to be verified.
