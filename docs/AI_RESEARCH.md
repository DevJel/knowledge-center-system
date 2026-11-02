# AI Research and Task-Specific LLM Selection

Reviewed: 2 November 2026. Manual research snapshot; no automatic refresh is configured. Candidate matching is engineering guidance, not a benchmark ranking. Confirm account access, exact model IDs, pricing, data terms and lifecycle before deployment.

## Task matrix

| Task | Candidates from current official catalogs | Evaluation focus |
| --- | --- | --- |
| Reasoning and difficult coding | OpenAI GPT-6 Astra; Claude Fable 5.1 or Opus 5.5 | Evaluate correctness on complex tasks, tool reliability and cost per successful completion. |
| Everyday coding and assistants | GPT-6.1 Sol; Claude Sonnet 5.5; Gemini 3.8 Flash | Compare repository tasks, editing quality, latency and regression rate. |
| High-volume extraction and routing | GPT-6 Luna; Claude Haiku 5.5; Gemini 3.5 Flash-Lite | Test schema validity, rare classes and escalation behavior before choosing the cheapest tier. |
| Visual reasoning and document interpretation | GPT-6.1 Terra; current vision-capable Claude or Gemini models | Evaluate document layout, small text and uncertainty; use OCR/layout tools where needed. |
| Deep multimodal reasoning | Gemini 4 Argon; evaluate other current vision-capable reasoning models | Use representative multimodal inputs; a large context window does not guarantee retrieval accuracy. |
| Retrieval embeddings | Gemini Embedding 2; appropriate embedding models in Workers AI | Embedding models create vectors, not answers. Match index dimensions and distance metric; changing models generally requires re-embedding. |
| Voice and transcription | Gemini 3.8 Live, Gemini 3.5 Transcribe; provider-specific realtime/STT models | Measure interruption handling, transcription accuracy, supported languages and end-to-end audio delay. |
| Image generation and editing | GPT-Image-2.5 family; Gemini Nano Banana family | Use dedicated image models for visual creation; compare edit preservation, text accuracy and rights requirements. |
| Edge and hosted open models | Cloudflare Workers AI catalog | Select an exact supported model identifier for text, embedding, reranking or speech. Verify plan, quota and runtime support; compatible endpoints do not imply identical features. |

## AI Research & Updates

Keep dated research separate from stable implementation principles. This snapshot was researched manually; no recurring update job has been enabled.

### Verified catalog refresh

Current official catalogs list the GPT-6 family, Claude Fable 5.1 / Opus 5.5 / Sonnet 5.5 / Haiku 5.5, and Gemini 4 Argon plus Gemini 3.8 Flash. Availability differs by provider, region and account. Consult linked model pages for exact IDs, lifecycle, modality, limits and pricing before rollout.

### Replace legacy recommendations

The original playbook’s claude-3.5, haiku and gpt-4o routing strings are historical examples, not suitable production defaults. Use a versioned model registry with exact IDs and declared capabilities. Keep temperature, reasoning effort and structured-output settings provider-specific; not every endpoint accepts the same parameters.

### How to evaluate research

Prefer official model cards, API docs, release notes and original papers. Record publication date, review date, task, dataset, metric, limitations and conflicts of interest. Separate provider claims from independently reproduced results. Benchmark contamination, tool configuration and prompt differences can invalidate comparisons.

### Update procedure

Check official release and deprecation notices → verify API access and capability schema → run held-out task/security evaluations → compare cost per successful task → canary with a rollback target → promote an approved registry version. Record changed behavior and sources. Do not silently replace production model aliases.

### Cost and privacy

Track input/output tokens, cached tokens, tool/search fees, embedding/index cost, retries and human review. Estimate cost per successful workflow rather than price per token alone. Compare retention, training-use terms, residency and contractual requirements before sending private data.

## Model Routing & Evaluation

Route by required capability and validated performance, then optimize cost. Treat model outputs and proposed tool calls as untrusted.

### Selection contract

Record task type, required modalities, structured schema, allowed tools, context budget, data classification, latency SLO and spend ceiling. Filter incompatible models before ranking candidates. Use the least expensive candidate that meets the measured quality bar; escalate only when policy and budget permit.

### Registry and fallbacks

Store provider, exact model ID, version or snapshot, verified capabilities, region, quotas, evaluation version, approved_at and rollback target. Distinguish transient capacity errors from unsupported requests and policy refusals. Do not use a fallback that weakens privacy, tool permissions or output schema.

### Evaluation rubric

Measure task correctness, grounded citations, tool argument validity, injection resistance, schema adherence, latency, cost and refusal appropriateness. Use paired task comparisons and enough representative examples; report uncertainty. A self-rating by the generating model is not a substitute for an independent acceptance test.

### RAG, tuning and long context

Use retrieval for changing or private knowledge with access filtering and provenance. Use fine-tuning only when measured behavior/style improvements justify dataset and maintenance costs. Use long context when the task needs it and test lost-in-context failures. Neither retrieval nor fine-tuning guarantees factuality.

### Deployment gate

Require approved evaluations, capability checks, bounded tool execution, telemetry, rollback and a human owner. Track drift on production-like samples. Model changes must not alter account authorization or allow retrieved instructions to override policy.

## Research sources

- [OpenAI models](https://developers.openai.com/api/docs/models)
- [Claude models](https://platform.claude.com/docs/en/models/overview)
- [Gemini models](https://ai.google.dev/gemini-api/docs/models)
- [Gemini embeddings](https://ai.google.dev/gemini-api/docs/embeddings)
- [Workers AI catalog](https://developers.cloudflare.com/workers-ai/models/)
- [Mermaid usage](https://mermaid.js.org/config/usage.html)

## Updates record

- 2026-11-02: added current task matrix and evaluation gates; replaced old hardcoded router model strings with approved registry entries.
- Future reviews: record source date, changed model IDs, deprecations, evaluation evidence, rollout decision and rollback version. Do not auto-promote a provider alias without review.
