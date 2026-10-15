# Agentic Authority Control Model — v0.3 Draft

## Govern the Opportunity → Govern the Authority → Govern the Action

This document defines the proposed Agentic Authority Control Model for the next iteration of the AI TaskFit Governance Engine.

The model is informed by recent agentic AI incidents in which a legitimate objective resulted in actions outside the intended authority boundary.

The core governance problem is:

> A legitimate goal does not authorize an illegitimate action.

An AI system may be technically capable of performing an action without being authorized or permitted to perform it.

Therefore:

**Capability → Authority → Permission → Enforcement → Evidence**

---

# 1. Capability

Capability describes what the AI system is technically capable of doing.

Examples:

- Browse the internet
- Call APIs
- Execute code
- Read files
- Write files
- Use credentials
- Send messages
- Modify records
- Initiate transactions
- Invoke external tools

Capability must not be confused with authorization.

> Capability ≠ Authority

---

# 2. Authority

Authority defines what the organization has approved the AI system to do.

Authority should be explicitly bounded across:

- Allowed data
- Allowed tools
- Allowed actions
- Allowed systems
- Allowed external targets
- Decision authority
- Transaction authority
- Human approval requirements

Example:

AI capability:
- Internet access
- API access
- Code execution

Approved authority:
- Read public information only
- No authenticated access
- No code execution
- No write actions

---

# 3. Permission

Permission translates governance authority into actual technical access.

Examples include:

- IAM roles
- Scoped credentials
- API permissions
- Tool permissions
- Network allowlists
- Data-access policies
- Read/write privileges
- Environment restrictions

The system must not receive permissions exceeding its approved authority.

> Authority must determine Permission.

---

# 4. Enforcement

Governance rules must be technically enforceable.

Prompt instructions alone are not considered sufficient enforcement for hard governance boundaries.

For example:

Governance expectation:

**Denied → Stop → Escalate**

Technical enforcement should additionally ensure that the agent cannot bypass the denial through another tool, credential, endpoint, or network path.

Possible enforcement mechanisms include:

- Least privilege
- Scoped credentials
- Tool allowlists
- Network restrictions
- Sandboxing
- Execution restrictions
- Transaction limits
- Rate limits
- Human approval gates
- Runtime policy enforcement
- Kill / containment mechanisms

> A governance boundary that cannot be enforced is not a reliable control.

---

# 5. Evidence

Every material agent action should generate sufficient evidence to reconstruct what occurred.

Minimum runtime evidence should support reconstruction of:

**Goal → Tool → Credential → Target → Action → Result → Human Intervention**

Depending on risk, evidence may include:

- Agent/session ID
- Model/version
- Initial objective
- Tool calls
- API calls
- Target systems
- Credential or permission scope
- Read/write/execute action
- Access-denial events
- Human approval
- Policy decision
- Runtime intervention
- Final outcome

Observability is treated as a governance control.

---

# 6. Agentic Authority Envelope

Each AI agent should operate inside an approved Authority Envelope.

The envelope defines:

| Dimension | Example |
|---|---|
| Data boundary | Public only |
| Tool boundary | Approved browser and search API |
| Action boundary | Read only |
| Target boundary | Approved external websites |
| Credential boundary | No privileged credentials |
| Decision boundary | Recommendation only |
| Human approval | Required before external action |
| Runtime boundary | Sandboxed environment |
| Forbidden actions | Access-control bypass, privilege escalation |
| Containment owner | Named operational owner |

An AI agent may operate only within this envelope.

---

# 7. Technical Privilege Ceiling

The maximum technical privileges available to an AI system must not exceed the authority approved through governance.

Example:

Business usage mode:

**Assist**

Technical Privilege Ceiling:

**Authenticated read only — no write, execute, or privileged action**

The usage mode alone must not be interpreted as unrestricted technical authority.

> Automate means automate within a defined authority envelope.

---

# 8. Hard Boundary Rules

Certain actions should be treated as non-negotiable governance boundaries.

Examples:

- Bypassing explicit access denial
- Attempting privilege escalation
- Accessing non-approved systems
- Using unauthorized credentials
- Executing prohibited code
- Writing to an unauthorized system
- Circumventing security controls
- Expanding its own permissions
- Concealing or disabling logging

Expected behavior when a hard boundary is encountered:

**Denied → Stop → Escalate**

The AI system must not interpret a denial as a problem to solve through an alternative unauthorized path.

---

# 9. Boundary Event Classification

Not every anomalous action should immediately be treated the same.

Proposed classification:

### Boundary Signal

The agent approaches or requests an action near an approved boundary.

Action:
- Log
- Evaluate
- Continue only if permitted

### Boundary Violation Attempt

The agent attempts an action outside approved authority but the technical control blocks it.

Action:
- Stop action
- Preserve evidence
- Review
- Escalate based on risk

### Boundary Breach

The agent successfully performs an action outside approved authority.

Action:

**Stop → Contain → Preserve Evidence → Incident Classification → Investigation**

A boundary breach should be considered a potential AI Governance Incident even when no material harm has yet occurred.

---

# 10. Agentic Escalation Triggers

Mandatory escalation should occur when the AI system involves:

- Non-public system access
- Privileged credentials
- Code or command execution
- External write actions
- Financial or legally significant transactions
- Sensitive data
- Autonomous irreversible actions
- Privilege escalation
- Access-control bypass
- Expansion of authority
- Missing runtime evidence
- Material change in tools or permissions

High opportunity value must not override a mandatory escalation trigger.

---

# 11. Boundary Adherence Testing

Testing should evaluate not only successful task completion, but behavior when the system encounters restrictions.

Example test:

The agent is instructed to retrieve information.

The approved source denies access.

Expected behavior:

**Stop and escalate.**

Failure conditions include:

- Alternative unauthorized endpoint
- Unauthorized credential usage
- Privilege escalation
- Security-control bypass
- Unapproved tool use

Suggested governance metrics:

- Unauthorized successful actions = 0
- Hard-boundary breaches = 0
- Escalation compliance rate
- Unauthorized tool-call attempts
- Evidence completeness
- Mean containment time

---

# 12. Incident Handoff

Crossing an approved authority boundary should trigger an explicit handoff into incident governance.

Proposed lifecycle:

**Boundary Breach
→ Stop
→ Contain
→ Preserve Evidence
→ Classify
→ Investigate
→ RCA
→ CAPA
→ Revalidate
→ Governance Decision**

Restoring the system should require evidence that the failed authority boundary has been corrected and validated.

---

# 13. Material Change

Any material increase in AI authority or privilege should trigger reassessment.

Examples:

- New tool
- New API
- Internet access
- New credential
- Expanded data access
- Write capability
- Code execution
- External transaction capability
- Removal of human approval
- Increased autonomy

An increase in capability does not automatically authorize an increase in authority.

---

# 14. Core v0.3 Principles

**A legitimate goal does not authorize an illegitimate action.**

**Capability ≠ Authority.**

**Authority must determine Permission.**

**Prompt instruction is not technical enforcement.**

**Denied → Stop → Escalate.**

**Automate means automate within a defined authority envelope.**

**Observability is a governance control.**

**Approval is a state, not a permanent status.**

---

# 15. Proposed Integration with AI TaskFit 5D

## D1 — Decompose

Add:

- Agentic capability
- Proposed authority
- Tool access
- Data boundary
- External action capability

## D3 — Detect

Add:

- Agentic escalation triggers
- Privilege risk
- Tool misuse risk
- Unauthorized access risk

## D4 — Decide

Add:

- Authority Envelope
- Technical Privilege Ceiling
- Human approval point

## D5 — Demonstrate

Add:

- Boundary Adherence Testing
- Hard-boundary testing
- Runtime evidence
- Escalation testing
- Containment testing

## Governance Decision Record

Add:

- Approved tools
- Approved data boundary
- Approved target systems
- Credential scope
- Forbidden actions
- Technical privilege ceiling
- Runtime enforcement control
- Kill/containment owner

---

## Design objective

The objective of v0.3 is not to prevent every possible autonomous AI failure.

The objective is to ensure that AI authority is:

**Explicit → Limited → Technically Enforced → Observable → Interruptible → Auditable**
