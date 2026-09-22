# Govern the Opportunity — v0.2 Specification

## An Evidence-Based AI Governance Decision Lifecycle

**Status:** Working Draft  
**Version:** 0.2  
**Maintainer:** Maha Abomedrah  
**Last Updated:** September 2026

---

## 1. Purpose

Govern the Opportunity is an open, decision-centric AI governance framework designed to help organizations determine:

1. whether AI should be used for a given task;
2. what authority an AI system may exercise;
3. what controls must enforce that authority;
4. what evidence is required before deployment;
5. whether the system should be authorized to operate; and
6. whether that authorization remains valid throughout its lifecycle.

The framework is designed to translate AI governance principles into explicit, traceable, and eventually machine-readable governance decisions.

Its core proposition is:

> **Before governing the AI system, govern the decision to use AI — and the authority delegated to it.**

---

## 2. The Governance Problem

AI governance is often introduced after a solution, model, or architecture has already been selected.

Govern the Opportunity moves governance upstream.

It begins with the task and the decision to use AI, then maintains governance through design, assurance, authorization, operation, change, and retirement.

The framework does not assume that technical capability implies organizational permission.

> **Capability does not equal authority.**

An AI system may technically be capable of performing an action while the organization determines that the action should remain human-controlled, conditionally delegated, or prohibited.

---

## 3. Design Principles

### P1 — Justify AI before governing AI

The existence of an AI capability is not sufficient justification for its use.

AI use should have a legitimate purpose, expected value, and proportionate justification considering affected stakeholders, alternatives, and potential harm.

### P2 — Authority is contextual

Authority is not assigned to a model in isolation.

It depends on the combination of:

- task;
- action;
- data;
- tools;
- affected stakeholders;
- operating environment;
- human oversight; and
- potential consequences.

### P3 — Authority must be supported by evidence

The level of authority delegated to AI must not exceed what the available evidence and controls can justify.

Higher-impact or more autonomous uses require stronger assurance.

### P4 — Governance must be enforceable

Governance decisions should translate into technical, procedural, or organizational controls.

A policy requirement that cannot be traced to an enforceable control is incomplete governance.

### P5 — Authorization is conditional and revocable

Authorization is not permanent.

Material changes, incidents, evidence deterioration, control failure, or changes in context may require reassessment, restriction, suspension, or revocation.

### P6 — Governance should be proportional

The governance lifecycle remains consistent across AI projects, while the depth of controls and evidence adapts to the use case, impact, risk, and delegated authority.

> **Same governance spine. Different assurance depth.**

---

## 4. Governance Decision Lifecycle

Govern the Opportunity defines six governance gates.

### G0 — JUSTIFY

**Question:** Should AI be used for this task?

Purpose:

Evaluate the legitimate purpose, expected value, necessity, proportionality, affected stakeholders, alternatives, and initial impact of using AI.

Primary output:

**Opportunity Record**

Possible decisions:

- PROCEED
- PROCEED WITH CONDITIONS
- REASSESS
- DEFER
- DO NOT PROCEED

---

### G1 — BOUND

**Question:** What may the AI system do?

Purpose:

Define the permitted authority of the AI for specific tasks and actions.

Authority must be bounded by context, including permitted actions, tools, data, scope, duration, conditions, human oversight, and escalation requirements.

Primary output:

**Authority Envelope**

---

### G2 — DESIGN

**Question:** Does the solution design enforce the approved authority and governance requirements?

Purpose:

Translate governance decisions into architecture, security, data, access, human-oversight, operational, and organizational controls.

Primary output:

**Control Contract**

Core requirement:

Every material governance requirement should be traceable to one or more enforceable controls.

---

### G3 — PROVE

**Question:** Is there sufficient evidence that the system satisfies the required controls and performance thresholds?

Purpose:

Evaluate claims using defined tests, thresholds, results, and evidence appropriate to the system's impact and requested authority.

Primary output:

**Evidence Package**

Evidence structure:

**Claim → Test → Threshold → Result → Decision**

---

### G4 — AUTHORIZE

**Question:** May this exact AI configuration operate under the proposed authority?

Purpose:

Make an explicit authorization decision based on the outputs of G0–G3, residual risk, accountability, and evidence.

Primary output:

**AI Authority Grant**

An Authority Grant should be:

- task-bound;
- scope-bound;
- configuration-bound;
- evidence-bound;
- owner-bound; and
- time-bound.

Possible decisions:

- AUTHORIZE
- AUTHORIZE WITH CONDITIONS
- RESTRICT
- BLOCK
- RETURN TO PRIOR GATE

---

### G5 — SUSTAIN

**Question:** Does the AI system remain eligible to exercise its granted authority?

Purpose:

Continuously or periodically evaluate whether the assumptions, controls, evidence, context, and performance supporting authorization remain valid.

Primary output:

**Living Authority Status**

Possible decisions:

- CONTINUE
- RESTRICT
- REVALIDATE
- SUSPEND
- REVOKE
- RETIRE

---

## 5. Governance Chain

The core governance chain is:

**Task → Impact → Authority → Controls → Evidence → Authorization → Monitoring → Re-entry**

Each governance gate:

1. consumes defined inputs;
2. applies explicit decision logic;
3. records the rationale;
4. produces a governance artifact; and
5. determines whether the AI initiative may proceed.

---

## 6. Material Change and Governance Re-entry

Governance does not end at deployment.

Changes to an AI system may invalidate assumptions or evidence supporting an existing authorization.

Potential re-entry triggers include changes to:

- model;
- data;
- tools;
- permitted actions;
- authority;
- affected population;
- operating environment;
- system integrations;
- human oversight;
- risk exposure;
- applicable policy or regulation.

A material change must trigger reassessment at the earliest governance gate affected by that change.

---

## 7. Relationship to Existing Standards and Frameworks

Govern the Opportunity is not intended to replace established AI governance, risk, ethics, security, privacy, or management frameworks.

It is designed as an operational decision layer capable of consuming requirements and evidence from relevant sources, including, where applicable:

- UNESCO Recommendation on the Ethics of Artificial Intelligence;
- Saudi Data & AI Authority (SDAIA) AI ethics and risk-management guidance;
- NIST AI Risk Management Framework;
- ISO/IEC 42001;
- ISO/IEC 23894;
- cybersecurity requirements;
- privacy and data-governance requirements;
- enterprise architecture controls; and
- organization-specific policies.

These sources may inform governance requirements, controls, evidence, and decision criteria.

Govern the Opportunity focuses on translating such inputs into explicit lifecycle decisions about AI use, authority, assurance, and continued authorization.

---

## 8. Current Research Status

Version 0.2 is an experimental working specification.

Concepts including authority levels, authority envelopes, evidence thresholds, re-entry logic, and machine-readable governance require further validation against existing standards, research, regulatory requirements, and real-world AI projects.

The framework should therefore not be represented as certification, regulatory approval, or endorsement by UNESCO, SDAIA, NIST, ISO, or any other organization.

---

## 9. Next Build

The next implementation milestone will validate this specification using an enterprise AI agent with access to data and tools.

The proof of concept will test whether the framework can produce explicit outcomes such as:

**PASS → CONDITIONAL → BLOCK → RE-ENTER**

and provide traceable reasons and required remediation for each governance decision.

---

## 10. Working Thesis

> **Govern AI not only by what it is capable of doing, but by what it should be permitted to do, what evidence justifies that authority, and whether that authority remains justified over time.**
