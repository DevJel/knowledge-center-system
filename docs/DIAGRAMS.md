# Mermaid Diagram Library

Copy the fenced blocks directly into GitHub Markdown. The app renders previews and exposes the same copyable source. The site loads pinned Mermaid 12.2.0 from jsDelivr; if unavailable, source remains readable. Logo artwork is preserved.

## Orchestrator and controlled tools

```mermaid
flowchart TD
  G["User goal"] --> O["Orchestrator"]
  O --> R["Model router"]
  O --> K["Authorized knowledge"]
  R --> A["Specialist agent"]
  K --> A
  A --> V{"Validate action"}
  V -->|Allowed| T["Scoped tool execution"]
  V -->|Approval needed| H["Human review"]
  H --> T
  T --> L["Audit and result"]
```

## Task-specific model selection

```mermaid
flowchart TD
  T["Task contract"] --> C{"Required capability"}
  C --> X["Text and reasoning"]
  C --> M["Vision or audio"]
  C --> E["Embedding or generation"]
  X --> Q["Quality and policy gate"]
  M --> Q
  E --> Q
  Q --> B{"Budget and latency fit"}
  B -->|Yes| P["Approved model"]
  B -->|No| F["Escalate or stop"]
  P --> V["Validate output"]
```

## OTP issuance and atomic redemption

```mermaid
sequenceDiagram
  participant U as User
  participant A as Auth API
  participant D as Database
  participant W as Mail worker
  U->>A: Request code and challenge token
  A->>A: Validate abuse controls
  A->>D: Store verifier and outbox job
  D-->>W: Claim unexpired job
  W-->>U: Deliver code through SES SMTP
  U->>A: Submit challenge and code
  A->>D: Atomically verify and consume
  alt Valid and unused
    D-->>A: Success
    A-->>U: Rotated secure session
  else Invalid or expired
    D-->>A: Reject
    A-->>U: Safe error
  end
```

## Identity and delivery data model

```mermaid
erDiagram
  USERS ||--o{ MEMBERSHIPS : has
  TENANTS ||--o{ MEMBERSHIPS : includes
  USERS ||--o{ SESSIONS : opens
  USERS ||--o{ AUTH_CHALLENGES : requests
  AUTH_CHALLENGES ||--o{ EMAIL_OUTBOX : schedules
  EMAIL_OUTBOX ||--o{ DELIVERY_EVENTS : receives
```

## Authorized retrieval and grounded answers

```mermaid
flowchart TD
  D["Approved documents"] --> P["Parse and chunk"]
  P --> E["Embedding model"]
  E --> I["Vector index and permissions"]
  Q["User question"] --> F["Tenant access filter"]
  F --> I
  I --> R["Retrieved evidence"]
  R --> G["Generation model"]
  G --> V["Citations and answer checks"]
```

## Email retries and delivery events

```mermaid
stateDiagram-v2
  [*] --> Queued
  Queued --> Sending: claim
  Sending --> Accepted: SMTP acknowledgement
  Sending --> RetryWait: transient error
  RetryWait --> Queued: bounded backoff
  Sending --> DeadLetter: permanent failure
  Queued --> Expired: expired security message
  Accepted --> Delivered: delivery event
  Accepted --> Suppressed: bounce or complaint
  Delivered --> [*]
  Suppressed --> [*]
  DeadLetter --> [*]
  Expired --> [*]
```

## Research to approved release

```mermaid
flowchart TD
  S["Official release or paper"] --> R["Dated research record"]
  R --> E["Held-out evaluation"]
  E --> G{"Quality and policy pass"}
  G -->|No| A["Archive findings"]
  G -->|Yes| C["Canary release"]
  C --> M{"Observed outcomes pass"}
  M -->|Yes| P["Promote registry version"]
  M -->|No| B["Rollback"]
```
