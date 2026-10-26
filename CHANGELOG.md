# Changelog

All notable changes to **Govern the Opportunity** and the **AI TaskFit 5D Method** are documented here.

---

## [Unreleased] — V4 development increment 1: Clause 5 authority

- Extend the existing authority evaluator with optional governance context and
  trusted organization-defined decision rights; preserve legacy calls.
- Distinguish responsibility from authority to accept residual risk.
- Enforce non-overridable boundaries, required controls/evidence, appetite,
  authority checks, and explicit escalation using existing decision states.
- Return a structured audit snapshot with decision context and policy provenance.
- Add Clause 5 tests and assertions for legacy scenarios.
- Record interpretation and evidence in `V4_ISO_IMPROVEMENT_LOG.md`.
- No Clause 6 work, release tag, or certification claim.

## [v0.2] — Context, Authority & Accountability

### Added

- Added an explicit **business and decision context** to D1 — Decompose.
- Introduced the context lens:

  **WHY → WHAT → WHO → DATA → AUTHORITY → IMPACT**

- Added explicit identification of:
  - Users and affected parties
  - Data and knowledge dependencies
  - Proposed AI authority
  - Human decision authority
  - Potential consequences of incorrect AI output

- Added explicit **Risk Ownership** to D3 — Detect.

- Distinguished between:
  - Task Owner
  - Risk Owner
  - Residual-Risk Acceptance Authority

- Added the principle:

  **AI capability does not automatically grant AI authority.**

- Added guidance for evaluating the effectiveness of **Human Oversight**, rather than treating Human-in-the-Loop as sufficient risk reduction by default.

- Added explicit **Residual-Risk Acceptance** requirements to D5 — Demonstrate.

- Added an auditable **Governance Decision Record** capturing:
  - Decision
  - Decision rationale
  - Evidence reviewed
  - Initial and residual risk
  - Risk owner
  - Acceptance authority
  - Required controls and conditions
  - Review trigger or review date

- Added **Material Change & Reassessment** logic covering material changes to:
  - Task or business purpose
  - Users or affected parties
  - Data or knowledge sources
  - AI model or provider
  - System capability
  - AI decision/action authority
  - Operating environment
  - Relevant obligations

### Changed

- Expanded Gate 1 from task-level opportunity qualification toward a more explicit **context-aware and authority-aware governance decision**.

- Strengthened the Minimum Record to improve decision traceability and auditability.

- Clarified that a strong Opportunity Score does not imply acceptable risk.

- Clarified that high business value cannot override mandatory escalation triggers.

- Clarified that material change does not automatically require repeating every assessment; reassessment should focus on affected governance assumptions and evidence.

### Decision Logic

v0.2 retains the core decision equation:

**Evidence + Thresholds + Residual Risk + Impact → Adoption Decision**

and strengthens the governance surrounding that decision by explicitly identifying:

**Context → AI Authority → Risk Owner → Evidence → Residual Risk → Acceptance Authority → Decision → Reassessment**

### Alignment

The framework remains designed to complement, without claiming conformity with:

- NIST AI Risk Management Framework
- ISO/IEC 42001 AI Management Systems
- ISO/IEC 42005 AI System Impact Assessment
- ISO/IEC 23894 Guidance on AI Risk Management

---

## [v0.1] — Initial Public Draft

### Added

- Introduced the **Govern the Opportunity** principle.
- Introduced the **AI Opportunity Governance Framework** as Layer 1 of AI Governance.
- Introduced the **AI TaskFit 5D Method**:
  - D1 — Decompose
  - D2 — Determine
  - D3 — Detect
  - D4 — Decide
  - D5 — Demonstrate
- Added opportunity scoring across AI Fit, Business Value, and Readiness.
- Added initial risk screening using the highest-material-domain rule.
- Added Automate, Assist, Advise, and Avoid/Defer governance routes.
- Added bounded pilot and evidence-based adoption decisions.
- Defined AI TaskFit as **Governance Gate 1 — AI Opportunity Qualification**.
- Introduced mandatory escalation triggers and minimum assessment records.

# Govern the Opportunity — Changelog

## 0.1.0 — Public Draft

- Established Govern the Opportunity as the first-layer governance principle
- Defined the AI Opportunity Governance Framework architecture
- Defined the AI TaskFit 5D task-level qualification method
- Generalized AI Fit criteria across AI types
- Separated opportunity scoring from initial risk screening
- Introduced highest-material-risk routing
- Defined four usage modes: Automate, Assist, Advise, Avoid/Defer
- Positioned TaskFit as Governance Gate 1
- Added bilingual framework text, workbook, and worked example
