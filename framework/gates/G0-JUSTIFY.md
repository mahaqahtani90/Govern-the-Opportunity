# G0 — JUSTIFY

## Should AI be used for this task?

**Gate:** G0  
**Lifecycle Stage:** Opportunity  
**Primary Artifact:** Opportunity Record  
**Next Gate:** G1 — BOUND

---

## 1. Purpose

G0 determines whether the use of AI is justified before an organization commits to a model, architecture, vendor, or implementation approach.

The purpose of this gate is not to ask whether AI *can* perform a task.

It asks:

> **Should AI be used for this task, for these stakeholders, in this context?**

G0 moves AI governance upstream by requiring organizations to establish legitimate purpose, expected value, necessity, proportionality, affected stakeholders, and initial impact before proceeding.

---

## 2. Core Rule

> **Technical feasibility is not sufficient justification for AI use.**

An AI initiative should proceed only when there is a defined problem or opportunity, a legitimate purpose, a reasonable justification for using AI, and an initial understanding of who may benefit or be harmed.

---

## 3. Unit of Governance

G0 evaluates the **task**, not merely the overall AI system.

A single AI solution may perform multiple tasks with materially different impacts.

Example:

- search internal documents;
- summarize content;
- recommend an action;
- submit a transaction;
- modify a record;
- approve a consequential decision.

These tasks should not automatically inherit the same governance treatment.

Before assessment, the proposed AI use must therefore be decomposed into meaningful tasks or actions.

---

## 4. AI TaskFit 5D

G0 builds on the AI TaskFit 5D method introduced in Govern the Opportunity v0.1.

### D1 — DECOMPOSE

**What exactly are we asking AI to do?**

Identify:

- the business process;
- the specific task;
- the expected AI output or action;
- the decision affected by that output;
- the actor currently responsible;
- affected stakeholders.

A task must be sufficiently specific to evaluate independently.

---

### D2 — DETERMINE

**Why should AI be used for this task?**

Assess:

- problem or opportunity;
- expected benefit;
- AI suitability;
- non-AI alternatives;
- necessity;
- proportionality.

Key challenge:

> Could the objective be achieved adequately through a simpler, safer, or less intrusive approach?

AI should not be selected solely because the capability exists.

---

### D3 — DETECT

**What could happen if AI is wrong, misused, unavailable, or behaves unexpectedly?**

Identify potential impact across relevant dimensions, including:

- people;
- rights and dignity;
- fairness;
- privacy;
- safety;
- security;
- financial impact;
- organizational impact;
- societal impact;
- environmental impact, where relevant.

Also identify who bears the consequence of failure.

---

### D4 — DECIDE

**Is AI use justified for this task?**

Determine whether the proposed use should:

- proceed;
- proceed with conditions;
- be reassessed;
- be deferred; or
- not proceed.

G0 does **not** grant operational authority.

If AI use is justified, the task proceeds to **G1 — BOUND**, where the permitted authority of the AI will be defined.

---

### D5 — DEMONSTRATE

**What evidence supports the G0 decision?**

The decision must be supported by evidence appropriate to the context.

Examples include:

- business-process evidence;
- baseline performance;
- expected value;
- alternative analysis;
- stakeholder analysis;
- initial impact assessment;
- policy or regulatory requirements;
- relevant historical data;
- documented assumptions.

The purpose is not to demand full model validation at G0.

The purpose is to make the justification **traceable and challengeable**.

---

# 5. AI Necessity & Proportionality Test

Before G0 may pass, the initiative should answer the following questions.

### Purpose

Is there a clearly defined and legitimate objective?

### Necessity

Why is AI needed?

### Alternatives

Has a reasonable non-AI or lower-complexity alternative been considered?

### Benefit

What measurable or observable benefit is expected?

### Stakeholders

Who benefits from the system?

Who bears the consequences if it fails?

### Proportionality

Is the proposed use of AI proportionate to the expected benefit and potential impact?

### Human Responsibility

Is there an identifiable human or organizational owner accountable for the use case?

---

## 6. Minimum Required Inputs

G0 requires, at minimum:

- use-case name;
- business owner;
- problem or opportunity statement;
- task description;
- proposed AI role;
- affected stakeholders;
- expected benefit;
- known alternatives;
- initial impact hypothesis;
- known legal, ethical, policy, or regulatory constraints;
- assumptions and uncertainties.

If material information is unavailable, G0 should not silently treat the missing information as low risk.

The appropriate outcome may instead be:

**REASSESS** or **DEFER**.

---

# 7. Initial Impact Screen

G0 performs an early impact screen.

The purpose is not to complete the full risk assessment.

It identifies conditions requiring stronger governance in later gates.

The screen should consider whether the AI task may materially affect:

### People

Could an individual experience meaningful financial, professional, legal, educational, health, safety, or service-related consequences?

### Rights and Fairness

Could the task affect access, eligibility, treatment, opportunity, or other consequential outcomes?

### Privacy and Data

Does the task require personal, confidential, sensitive, or otherwise protected data?

### Safety and Security

Could failure or misuse create physical, digital, operational, or cybersecurity harm?

### Scale

Could the task affect a large number of people, customers, employees, or citizens?

### Irreversibility

Would an incorrect action be difficult or impossible to reverse?

### Autonomy

Is the proposed AI expected only to inform, or eventually to recommend, prepare, execute, or independently plan actions?

---

# 8. G0 Decision Logic

G0 may produce five outcomes.

## PROCEED

Use of AI is sufficiently justified to continue to G1.

This does not authorize deployment or autonomous action.

---

## PROCEED WITH CONDITIONS

AI use appears justified, but identified conditions must be addressed in later gates.

Examples:

- human review required;
- sensitive-data controls required;
- fairness evaluation required;
- authority must remain limited;
- additional stakeholder analysis required.

---

## REASSESS

The use case may be viable, but the current justification or task definition is insufficient.

Typical reasons:

- task is too broad;
- affected stakeholders are unclear;
- AI role is ambiguous;
- alternatives have not been assessed;
- expected value is unsupported.

---

## DEFER

A decision cannot yet be made because material evidence, policy, technical capability, ownership, or external conditions are unresolved.

---

## DO NOT PROCEED

The proposed AI use is not sufficiently justified, is disproportionate to the expected value, conflicts with applicable constraints, or presents an unacceptable use under the current context.

---

# 9. Hard-Stop Conditions

G0 should not return PROCEED when any of the following remain unresolved:

- no legitimate or defined purpose;
- no accountable business owner;
- task cannot be clearly identified;
- prohibited use under applicable law or binding organizational policy;
- AI is proposed solely because the technology is available, without a defensible need;
- material impact is identified but no responsible party accepts accountability;
- the use would require assumptions that cannot reasonably be tested or governed.

A hard stop does not necessarily mean permanent rejection.

The initiative may re-enter G0 if the underlying conditions materially change.

---

# 10. Required Artifact — Opportunity Record

Every completed G0 assessment must create an **Opportunity Record**.

Minimum structure:

```yaml
opportunity_record:

  id: OR-0001

  use_case:
    name:
    business_owner:
    purpose:

  task:
    description:
    current_actor:
    proposed_ai_role:

  justification:
    expected_benefit:
    necessity:
    alternatives_considered:
    proportionality:

  stakeholders:
    beneficiaries:
    affected_parties:
    consequence_bearers:

  initial_impact:
    people:
    rights_fairness:
    privacy_data:
    safety_security:
    scale:
    irreversibility:
    anticipated_autonomy:

  constraints:
    legal:
    regulatory:
    policy:
    ethical:

  evidence:
    sources:
    assumptions:
    uncertainties:

  decision:
    outcome:
    conditions:
    rationale:

  accountability:
    decision_owner:
    decision_date:

  next_gate:
    G1_BOUND
