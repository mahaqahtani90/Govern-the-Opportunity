# Govern the Opportunity — Layer 1 of AI Governance

**AI TaskFit 5D Method — v0.2 Public Draft**

> Govern the opportunity before governing the solution.

**Govern the Opportunity** is an open governance principle and framework for qualifying AI opportunities before solution design, procurement, or development begins.

The framework is operationalized through the **AI TaskFit 5D Method** and applies across AI types, including predictive systems, classification, recommendation, optimization, computer vision, generative systems, and autonomous agents.

AI TaskFit helps organizations determine not only whether AI should be used for a task, but also under what authority, risk ownership, evidence, and decision conditions that opportunity should proceed.

## The six questions

Before an organization commits to an AI solution, AI TaskFit asks:

1. **WHY** — Why is AI being considered, and what business purpose does it serve?
2. **WHAT** — What specific task is being governed, and is it suitable and valuable for AI?
3. **WHO** — Who uses the system, who may be affected, and who is accountable?
4. **DATA** — What data and knowledge does the task depend on?
5. **AUTHORITY** — What decision or action authority should AI receive, and who may accept the associated risk?
6. **IMPACT** — What could happen if the AI output is wrong, and what level of governance is required?

**WHY → WHAT → WHO → DATA → AUTHORITY → IMPACT**

AI TaskFit is **Governance Gate 1**.

It is not a complete AI governance system and does not replace detailed legal, privacy, cybersecurity, architecture, model-validation, or AI impact assessments.

---

## Framework architecture

| **Layer** | **Name** | **Purpose** |
|---|---|---|
| Principle | Govern the Opportunity | Govern why and where AI should be used |
| Framework | AI Opportunity Governance | Define the first governance layer and routing |
| Method | AI TaskFit 5D | Assess a task through five repeatable stages |

---

## AI TaskFit 5D Method

| **Stage** | **Purpose** | **Primary output** |
|---|---|---|
| **D1 — Decompose** | Define the task in its business and decision context | Context & task definition |
| **D2 — Determine** | Score AI fit, business value, and readiness | Opportunity score |
| **D3 — Detect** | Screen impact and risk and identify risk ownership | Initial risk profile |
| **D4 — Decide** | Set the permitted AI authority and human-oversight route | Governance route |
| **D5 — Demonstrate** | Validate value, controls, evidence, and residual risk through a bounded pilot | Auditable adoption decision |

The core decision logic is:

**Evidence + Thresholds + Residual Risk + Impact → Adoption Decision**

---

## What changed in v0.2

v0.2 strengthens AI TaskFit from an opportunity-scoring method toward a more explicit and auditable **Gate 1 governance decision model**.

### Context

D1 now explicitly establishes the business and decision context before AI suitability is assessed.

### AI Authority

The method distinguishes what AI is technically capable of doing from what it should be authorized to do.

> **Capability does not automatically grant authority.**

### Accountability and decision rights

v0.2 distinguishes between:

- Accountable business/task owner
- Risk owner
- Residual-risk acceptance authority

Risk ownership does not automatically grant authority to accept residual risk.

### Human oversight

Human-in-the-loop is no longer treated as sufficient risk reduction by default.

The effectiveness of human oversight must be appropriate to the impact and decision context.

### Auditable decisions

D5 introduces a **Governance Decision Record** documenting:

- Decision
- Rationale
- Evidence reviewed
- Initial and residual risk
- Risk owner
- Acceptance authority
- Required controls and conditions
- Review trigger or review date

The objective is to make it possible to answer:

> **Who decided what, based on which evidence, under which authority, and subject to which conditions?**

### Material change and reassessment

An approved AI opportunity is not permanently approved.

Material changes to the task, data, model, users, AI authority, or operating context may trigger reassessment.

> **Approval is a state, not a permanent status.**

---

## Governance position

AI TaskFit sits at the beginning of a broader AI governance lifecycle:

`Business Request → Gate 1: AI TaskFit → Gate 2: Impact & Risk → Gate 3: Design & Controls → Gate 4: Validation → Gate 5: Release & Monitor`

| **Gate** | **Purpose** |
|---|---|
| Gate 1 — AI TaskFit | Qualify the opportunity and establish its initial governance route |
| Gate 2 — Impact & Risk | Complete detailed impact and risk assessments |
| Gate 3 — Design & Controls | Review architecture, data, security, and controls |
| Gate 4 — Validation | Evaluate performance, safety, compliance, and evidence |
| Gate 5 — Release & Monitor | Authorize production and monitor outcomes |

Only **Gate 1 — AI TaskFit** is operationalized by the current public framework.

The remaining gates describe the governance path into which qualified opportunities may be routed and are not claimed as implemented components of this release.

---

## Alignment

Govern the Opportunity and AI TaskFit are designed to complement, without claiming conformity with:

- **NIST AI Risk Management Framework**
- **ISO/IEC 42001 AI Management Systems**
- **ISO/IEC 42005 AI System Impact Assessment**
- **ISO/IEC 23894 Guidance on AI Risk Management**

AI TaskFit provides an early governance mechanism for understanding context, opportunity, initial risk, AI authority, and governance routing before detailed solution governance begins.

Formal conformity with any standard requires assessment against the applicable standard, organizational requirements, and relevant obligations.

---

## Public draft

This repository is **v0.2 Public Draft**.

The scoring thresholds, routing rules, and governance logic remain open for validation through documented pilots, expert review, and future iteration.

They must not be treated as regulatory approval, certification, or evidence of conformity with any referenced standard.

---

## Contents

- `framework/ai-opportunity-governance-en.md` — English framework specification
- `framework/ai-opportunity-governance-ar.md` — Arabic framework specification
- `toolkit/AI-TaskFit-Assessment-v0.2.xlsx` — assessment workbook operationalizing the AI TaskFit 5D v0.2 governance method
- `examples/candidate-screening.md` — worked high-impact example
- `CHANGELOG.md` — version history
- `CONTRIBUTING.md` — contribution process
- `GOVERNANCE.md` — project governance
- `NOTICE.md` — attribution and licensing notice


---

## Licensing

- Framework text, documentation, examples, and templates: **CC BY 4.0**
- Software code and machine-readable schemas: **Apache License 2.0**

Suggested attribution:

> Govern the Opportunity: Layer 1 of AI Governance. AI Opportunity Governance Framework and AI TaskFit 5D Method, created by Maha Abomedrah. v0.2 Public Draft, licensed under CC BY 4.0.

---

## Important limitation

Govern the Opportunity and AI TaskFit are open governance resources.

They are not certification, regulatory approval, legal opinion, or replacements for organization-specific risk, security, privacy, architecture, procurement, sectoral, or detailed AI impact assessments.
