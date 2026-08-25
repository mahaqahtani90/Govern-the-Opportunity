# Govern the Opportunity — Layer 1 of AI Governance

## AI Opportunity Governance Framework — Layer 1 of AI Governance

### AI TaskFit 5D Method — v0.1 Public Draft

## 1. Purpose

Govern the Opportunity is the principle that AI governance must begin by governing the selection of the opportunity—not only the solution created afterward.

The AI Opportunity Governance Framework establishes **Layer 1 of AI Governance**. The AI TaskFit 5D Method operationalizes it at task level by qualifying a clearly defined work task for possible AI use and routing it into the appropriate governance path before an organization commits to design, procure, or build a solution.

The method is technology-neutral. It can be applied to predictive systems, classification, recommendation, optimization, computer vision, generative systems, and autonomous agents. Technology-specific detailed assessments may follow after Gate 1.

## 2. Scope

### In scope

- Task definition and decomposition
- Initial opportunity, value, and readiness assessment
- Initial impact and risk screening
- Permitted usage mode and human-oversight level
- Pilot success criteria and evidence-based decision

### Out of scope

- Detailed AI impact assessment
- Legal or regulatory determination
- Privacy impact assessment
- Threat modelling and security assessment
- Architecture approval
- Model evaluation, red teaming, or production monitoring

These remain mandatory where required by the organization or applicable obligations.

## 3. Framework architecture

| Layer | Name | Function |
|---|---|---|
| Principle | Govern the Opportunity | Govern why and where AI should be used |
| Framework | AI Opportunity Governance | Establish the first layer and governance routing |
| Method | AI TaskFit 5D | Provide a repeatable task-level assessment |

## 4. Core principles

1. Assess a task, not an entire job title.
2. Separate opportunity from risk.
3. Let risk determine authority, not merely priority.
4. Do not hide a critical risk inside an average.
5. Name a human accountable for every adopted task.
6. Require evidence against pre-agreed thresholds.
7. Reassess when the task, data, model, users, or context materially changes.

## 5. AI TaskFit 5D Method

### D1 — Decompose

Define one task with a clear start, end, input, output, accountable owner, affected parties, frequency, baseline time, and current decision authority.

**Exit criterion:** a reviewer can assess the task without relying on the job title or a vague process description.

### D2 — Determine

Score each item from 1 (very low) to 5 (very high).

#### AI Fit

- Task-to-AI capability match
- Pattern and data suitability
- Output verifiability
- Context and data availability

#### Business Value

- Time or cost reduction
- Quality or consistency improvement
- Frequency and scale
- Strategic relevance

#### Readiness

- Data and knowledge readiness
- Technical integration readiness
- Process and ownership readiness
- User adoption readiness

Calculate each dimension as the mean of its four criteria.

`Opportunity Score = average(AI Fit, Business Value, Readiness)`

| Score | Opportunity band |
|---:|---|
| 4.0–5.0 | High |
| 3.0–3.9 | Medium |
| 1.0–2.9 | Low |

### D3 — Detect

Score each risk domain from 1 (limited) to 5 (critical):

- Data sensitivity
- Impact on individuals or rights
- Consequence of error
- Legal or regulatory significance
- Security and misuse exposure
- Explainability and contestability need

`Initial Risk Level = highest material domain score`

| Score | Risk band |
|---:|---|
| 1–2 | Low |
| 3 | Medium |
| 4–5 | High |

The highest-domain rule is deliberately conservative. A documented governance reviewer may adjust a score only with evidence and a recorded rationale.

### D4 — Decide

| Opportunity | Initial risk | Default route |
|---|---|---|
| High | Low | Automate candidate |
| High or Medium | Medium | Assist with mandatory human review |
| Any viable opportunity | High | Advise only; detailed assessment required |
| Low | Any | Defer or reject |

Definitions:

- **Automate:** the system may complete the task within approved boundaries, monitoring, and exception handling.
- **Assist:** a human must review the output before it produces an operational effect.
- **Advise:** the system supplies information or a draft; an accountable human independently decides.
- **Avoid/Defer:** the task is rejected or paused pending value, readiness, or risk changes.

The matrix provides a default route, not automatic approval. A detailed assessment may impose a more restrictive mode.

### D5 — Demonstrate

Run a bounded pilot with approved data and predefined thresholds. At minimum, compare:

- Cycle time
- Cost per task, where measurable
- Output quality or task-specific accuracy
- Rework and human-correction rate
- Failure, incident, and exception rate
- User acceptance
- Residual risk after controls

`Evidence + Thresholds + Residual Risk + Impact → Adoption Decision`

Allowed decisions:

- Approve
- Approve with controls
- Repeat pilot
- Defer
- Reject

## 6. Governance integration

AI TaskFit is **Governance Gate 1: AI Opportunity Qualification**.

| Gate | Purpose | Primary decision |
|---|---|---|
| Gate 1 — AI TaskFit | Qualify task, opportunity, and initial risk | Route, defer, or reject |
| Gate 2 — Impact & Risk | Complete detailed assessments | Accept, mitigate, or reject risk |
| Gate 3 — Design & Controls | Approve architecture, data, security, and controls | Authorize build/test |
| Gate 4 — Validation | Evaluate performance, safety, compliance, and evidence | Release recommendation |
| Gate 5 — Release & Monitor | Authorize production and monitor outcomes | Continue, restrict, or stop |

## 7. Mandatory escalation triggers

A case must not be approved at AI TaskFit alone when it involves any of the following:

- Legal, employment, eligibility, financial, healthcare, safety, or enforcement decisions
- Significant effect on an individual's rights, access, or opportunity
- Sensitive or highly restricted data
- Autonomous external action or irreversible consequence
- Material cybersecurity or misuse exposure
- Affected persons cannot understand, contest, or obtain human review

Such cases are routed to detailed assessment even when opportunity is high.

## 8. Minimum record

Each assessment must preserve:

`Task → Scores → Evidence → Initial risk → Usage mode → Human owner → Controls → Pilot thresholds → Decision → Review date`

## 9. Alignment statement

Govern the Opportunity and AI TaskFit are designed to complement, not claim conformity with, recognized governance and risk-management references including:

- NIST AI Risk Management Framework
- ISO/IEC 42001 AI management systems
- ISO/IEC 42005 AI system impact assessment
- ISO/IEC 23894 guidance on AI risk management

Formal conformity requires independent assessment against the applicable standard or obligation.
