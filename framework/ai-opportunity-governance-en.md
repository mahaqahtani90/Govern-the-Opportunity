# Govern the Opportunity — Layer 1 of AI Governance

## AI Opportunity Governance Framework — Layer 1 of AI Governance

### AI TaskFit 5D Method — v0.2 Public Draft
### Context, Authority & Accountability Update

## 1. Purpose

Govern the Opportunity is the principle that AI governance must begin by governing the selection of the opportunity—not only the solution created afterward.

The AI Opportunity Governance Framework establishes Layer 1 of AI Governance. The AI TaskFit 5D Method operationalizes it at task level by qualifying a clearly defined work task for possible AI use and routing it into the appropriate governance path before an organization commits to design, procure, or build a solution.

The method is technology-neutral. It can be applied to predictive systems, classification, recommendation, optimization, computer vision, generative systems, and autonomous agents. Technology-specific detailed assessments may follow after Gate 1.

---

## 2. Scope

### In scope

- Task definition and decomposition
- Business context and purpose for considering AI
- Initial opportunity, value, and readiness assessment
- Initial impact and risk screening
- Identification of users and affected parties
- Identification of relevant data and knowledge dependencies
- Proposed AI authority and human decision boundaries
- Initial risk ownership and governance routing
- Permitted usage mode and human-oversight level
- Pilot success criteria and evidence-based adoption decision
- Governance decision record

### Out of scope

- Detailed AI impact assessment
- Legal or regulatory determination
- Privacy impact assessment
- Threat modelling and security assessment
- Architecture approval
- Detailed model evaluation or red teaming
- Production monitoring and incident management

These remain mandatory where required by the organization or applicable obligations and are addressed through subsequent governance gates.

---

## 3. Framework Architecture

| Layer | Name | Function |
|---|---|---|
| Principle | Govern the Opportunity | Govern why and where AI should be used |
| Framework | AI Opportunity Governance | Establish the first layer and governance routing |
| Method | AI TaskFit 5D | Provide a repeatable task-level assessment |

---

## 4. Core Principles

1. Assess a task, not an entire job title.
2. Understand the business and decision context before assessing AI suitability.
3. Separate opportunity from risk.
4. Let risk determine authority, not merely priority.
5. Do not hide a critical risk inside an average.
6. Distinguish task ownership, risk ownership, and risk-acceptance authority.
7. AI capability does not automatically grant AI authority.
8. Name a human accountable for every adopted task.
9. Require evidence against pre-agreed thresholds.
10. Record governance decisions, their evidence, rationale, and authority.
11. Reassess when the task, data, model, users, AI authority, or context materially changes.

---

# 5. AI TaskFit 5D Method

## D1 — Decompose

Define one task in its business and decision context before assessing AI suitability.

Record:

- **Business purpose** — why the task exists and why AI is being considered
- **Task boundary** — clear start, end, input, and output
- **Users and affected parties**
- **Data and knowledge required**
- **Accountable business owner**
- **Current human decision authority**
- **Proposed AI authority** — advise, assist, or act within defined boundaries
- **Frequency, scale, and baseline time**
- **Potential consequence if the task or AI output is wrong**

Use the following context lens:

**WHY → WHAT → WHO → DATA → AUTHORITY → IMPACT**

### Exit criterion

A reviewer can explain:

- why AI is being considered,
- what task is being governed,
- who uses the system and who may be affected,
- what data and knowledge the task depends on,
- what authority AI may receive, and
- what may happen if the AI output is wrong.

The task must be assessable without relying on a job title or vague process description.

---

## D2 — Determine

Score each item from 1 (very low) to 5 (very high).

### AI Fit

- Task-to-AI capability match
- Pattern and data suitability
- Output verifiability
- Context and data availability

### Business Value

- Time or cost reduction
- Quality or consistency improvement
- Frequency and scale
- Strategic relevance

### Readiness

- Data and knowledge readiness
- Technical integration readiness
- Process and ownership readiness
- User adoption readiness

Calculate each dimension as the mean of its four criteria.

**Opportunity Score = average(AI Fit, Business Value, Readiness)**

| Score | Opportunity band |
|---|---|
| 4.0–5.0 | High |
| 3.0–3.9 | Medium |
| 1.0–2.9 | Low |

The Opportunity Score indicates whether the task is a promising candidate for AI. It does not determine whether the associated risk is acceptable.

---

## D3 — Detect

Score each risk domain from 1 (limited) to 5 (critical):

- Data sensitivity
- Impact on individuals or rights
- Consequence of error
- Legal or regulatory significance
- Security and misuse exposure
- Explainability and contestability need

**Initial Risk Level = highest material domain score**

| Score | Risk band |
|---|---|
| 1–2 | Low |
| 3 | Medium |
| 4–5 | High |

The highest-domain rule is deliberately conservative.

A documented governance reviewer may adjust a score only with evidence and a recorded rationale.

### Risk ownership

Each material risk must be assigned to an accountable risk owner or governance domain before the task advances.

Where multiple risk domains are involved, ownership may differ by domain.

**Risk ownership does not automatically grant authority to accept residual risk.**

A risk owner may be responsible for understanding, managing, or treating a risk while formal acceptance remains with another authorized role under the organization's decision-rights model.

---

## D4 — Decide

Use opportunity and initial risk together to determine the default governance route.

| Opportunity | Initial risk | Default route |
|---|---|---|
| High | Low | Automate candidate |
| High or Medium | Medium | Assist with mandatory human review |
| Any viable opportunity | High | Advise only; detailed assessment required |
| Low | Any | Defer or reject |

### Definitions

**Automate**

The system may complete the task within approved boundaries, monitoring, and exception handling.

**Assist**

A human must review the output before it produces an operational effect.

**Advise**

The system supplies information, analysis, or a draft; an accountable human independently makes the decision.

**Avoid/Defer**

The task is rejected or paused pending changes in value, readiness, risk, or operating conditions.

The matrix provides a default route, not automatic approval.

A detailed assessment may impose a more restrictive mode.

### Human oversight

The presence of a human reviewer must not automatically be treated as sufficient risk reduction.

Human oversight should be appropriate to:

- the potential impact,
- the complexity of the decision,
- the ability of the reviewer to challenge the AI output,
- the information available to the reviewer, and
- the consequences of accepting an incorrect recommendation.

**Human-in-the-loop does not automatically mean effective human oversight.**

---

## D5 — Demonstrate

Run a bounded pilot using approved data and predefined thresholds.

At minimum, compare:

- Cycle time
- Cost per task, where measurable
- Output quality or task-specific accuracy
- Rework and human-correction rate
- Failure, incident, and exception rate
- User acceptance
- Residual risk after controls

The evidence required should be proportionate to the task's risk, impact, and proposed AI authority.

Use the following decision logic:

**Evidence + Thresholds + Residual Risk + Impact → Adoption Decision**

### Residual-risk acceptance

Where residual risk requires formal acceptance, the decision must be made by the authorized role defined by the organization's risk and decision-rights model.

The task owner, technical team, risk owner, or AI governance function must not be assumed to hold residual-risk acceptance authority by default.

Residual risk must not proceed solely because the opportunity score or pilot performance is strong when:

- the residual risk exceeds an approved tolerance,
- a mandatory or hard boundary is violated,
- required evidence is missing, or
- the required acceptance authority has not approved the risk.

### Allowed decisions

- Approve
- Approve with controls
- Repeat pilot
- Defer
- Reject

### Governance Decision Record

Every completed AI TaskFit assessment should preserve an auditable decision record.

At minimum, record:

**Decision**

- Approve
- Approve with controls
- Repeat pilot
- Defer
- Reject

**Decision rationale**

Why was this governance route selected?

**Evidence reviewed**

What evidence and pilot results supported the decision?

**Initial and residual risk**

What material risks were identified, and what remained after controls?

**Risk owner**

Who is accountable for managing the relevant material risk?

**Acceptance authority**

Who had the organizational authority to accept any residual risk requiring formal acceptance?

**Conditions and required controls**

What controls, restrictions, or conditions must remain in place?

**Review trigger or review date**

When must the decision be reconsidered?

The Governance Decision Record should allow an independent reviewer to understand:

**Who decided what, based on which evidence, under which authority, and subject to which conditions?**

---

# 6. Governance Integration

AI TaskFit is **Governance Gate 1: AI Opportunity Qualification.**

| Gate | Purpose | Primary decision |
|---|---|---|
| Gate 1 — AI TaskFit | Qualify task, opportunity, and initial risk | Route, defer, or reject |
| Gate 2 — Impact & Risk | Complete detailed assessments | Accept, mitigate, escalate, or reject risk |
| Gate 3 — Design & Controls | Approve architecture, data, security, and controls | Authorize build/test |
| Gate 4 — Validation | Evaluate performance, safety, compliance, and evidence | Release recommendation |
| Gate 5 — Release & Monitor | Authorize production and monitor outcomes | Continue, restrict, reassess, or stop |

Gate 1 does not replace the detailed assessments, control design, validation, or production governance required in later gates.

Its purpose is to ensure that an AI opportunity enters subsequent governance gates with:

- a defined business and decision context,
- identified users and affected parties,
- an initial risk profile,
- a proposed AI authority boundary,
- accountable ownership,
- an evidence expectation, and
- a documented governance route.

---

# 7. Mandatory Escalation Triggers

A case must not be approved at AI TaskFit alone when it involves any of the following:

- Legal, employment, eligibility, financial, healthcare, safety, or enforcement decisions
- Significant effect on an individual's rights, access, or opportunity
- Sensitive or highly restricted data
- Autonomous external action or irreversible consequence
- Material cybersecurity or misuse exposure
- A proposed increase in AI decision or action authority
- A mandatory organizational, legal, or regulatory boundary
- Affected persons cannot understand, contest, or obtain meaningful human review

Such cases are routed to detailed assessment even when opportunity is high.

High business value must never override a mandatory escalation trigger.

---

# 8. Minimum Record

Each assessment must preserve:

**Context → Task → Affected Parties → Data → AI Authority → Scores → Evidence → Initial Risk → Risk Owner → Usage Mode → Controls → Pilot Thresholds → Residual Risk → Acceptance Authority → Decision → Review Trigger/Date**

The record should be sufficient for an independent reviewer to reconstruct:

- why AI was considered,
- what task was assessed,
- who uses the system,
- who may be affected,
- what data and knowledge are involved,
- what authority was proposed for AI,
- what material risks were identified,
- what evidence supported the decision,
- who owned the relevant risks,
- who was authorized to accept residual risk,
- what conditions were imposed, and
- why the final governance route was selected.

---

## Material Change and Reassessment

An approved opportunity is not permanently approved.

Reassessment is required when a material change may affect the assumptions, risk, impact, evidence, or authority underlying the original decision.

Potential triggers include material changes to:

- the task or business purpose,
- users or affected parties,
- data or knowledge sources,
- AI model or provider,
- system capability,
- AI decision or action authority,
- operating environment, or
- relevant organizational or external obligations.

The scope of reassessment should be proportionate to the change.

A material change does not automatically require repeating every assessment from the beginning; it requires reconsidering the governance assumptions and evidence affected by the change.

**Approval is a state, not a permanent status.**

---

# 9. Alignment Statement

Govern the Opportunity and AI TaskFit are designed to complement, not claim conformity with, recognized governance and risk-management references including:

- NIST AI Risk Management Framework
- ISO/IEC 42001 AI management systems
- ISO/IEC 42005 AI system impact assessment
- ISO/IEC 23894 guidance on AI risk management

The framework uses these references as alignment inputs while maintaining a distinct purpose:

**governing AI opportunity selection, authority, and routing before detailed solution governance begins.**

The references above should not be interpreted as certification, endorsement, or formal conformity.

Formal conformity requires assessment against the applicable standard, organizational requirements, and relevant obligations.
