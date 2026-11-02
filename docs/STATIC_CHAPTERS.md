# Complete Standalone HTML Chapters

Version 2.0.0 — 2 November 2026

Each topic file now contains its complete article in its own HTML source. The former shared content renderer is no longer loaded by these pages. assets/chapters.css supplies presentation; assets/chapters.js supplies optional copy, theme and diagram enhancements. The source and complete text remain visible if those enhancements cannot run.

## Consistent organization

1. Description, purpose and boundaries
2. Architectural principles and decisions
3. Process, inputs and outputs
4. Related apps, software and third parties
5. Detailed mechanics and topic features
6. Implementation pattern and copyable code
7. Mermaid architecture and process diagram
8. Failure modes, edge cases and security
9. Acceptance, testing and verification matrix
10. Operations, ownership and maintenance
11. Official references and related chapters

Each topic preserves its preceding technical content and adds a specific implementation example. The detailed architecture chapter includes the complete lifecycle module and tests from Page 1. Product listings describe candidate roles rather than claiming active integrations. Config examples distinguish review records from provider manifests.

## Verification

Checked: all twenty-four topic files contain all eleven numbered sections; every topic has visible implementation code, Mermaid source and navigation; optional enhancement JavaScript parses successfully. Live browser, provider integration, external Mermaid loading and production deployment behavior have not been tested by these static checks.

## Maintenance

Edit the HTML file for the relevant topic directly. Keep metadata and evidence current; update references when provider contracts change. Use the same numbered organization for new chapters. Keep credentials out of all public files. Run browser checks for long code blocks, mobile navigation, copy controls, diagram failure fallback and script-disabled reading before production approval.
