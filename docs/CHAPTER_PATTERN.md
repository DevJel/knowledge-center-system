# Knowledge Center Chapter Pattern

Version: 1.1.0
Reviewed: 2 November 2026

Every topic remains a separate HTML page. The shared renderer applies this structure to all twenty-four topic tabs; the standalone architecture chapter retains its detailed implementation and adds matching process, software and ownership sections.

1. Exact title, version, review date and architecture scope.
2. Description, purpose, constraints and applicability.
3. Ordered process and decision gates.
4. Related apps, software and third-party roles with integration boundaries.
5. Existing detailed mechanics, examples and code.
6. Topic-specific Mermaid diagram with rendered preview and copyable source.
7. Copyable YAML review configuration, explicitly distinguished from a deployment manifest.
8. Failure modes, edge cases and security considerations.
9. Acceptance tests, evidence requirements and verification limitations.
10. Operations, ownership, maintenance, official references and related chapter links.

## Features

Each page retains Copy section and Copy link. Code and Mermaid blocks have separate Copy controls. The shared PageSection guard mounts only the current topic, so navigation still changes HTML documents rather than combining chapters. Related-product listings are candidate integrations, not a claim that the products are installed or configured.

## Implementation

assets/knowledge.js contains topicPatterns and KnowledgePattern. Add topic-specific data before publishing a new navigation entry. The current mapping covers all twenty-four navigation topic IDs. Changes to the shared renderer affect every topic, so check an original playbook page, an engineering knowledge page, and the Mermaid library after updating it.

## Validation performed

The new shared pattern passed JavaScript syntax validation and every current topic has a matching pattern record. Live browser behavior, external Mermaid loading and clipboard permissions remain environment-dependent and have not been verified in this update.
