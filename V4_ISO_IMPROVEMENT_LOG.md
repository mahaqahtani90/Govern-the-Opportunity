# V4 ISO Improvement Log

Development increment 1 — Clause 5 leadership / executable decision authority.
Date: 2026-10-25. Baseline: `f858e6f1d522a5d909c2be009f419cec5dbc7d95`.
Status describes the requested engineering scope, not full ISO/IEC 42001 compliance.
Requirements below are implementation interpretations, not reproduced ISO text.
Older v0.2 documents are design input; they are not evidence of prior executable V4 work.

| ISO requirement interpretation | Governance intent | Existing capability | Gap | Engine change / artifact | Evidence | Test | Status |
|---|---|---|---|---|---|---|---|
| Clause 5: allocate decision responsibilities and authorities | Responsibility does not confer decision rights | v0.3 capability envelope; v0.2 ownership guidance | No principal authority checks | `AuthorityPolicy.assignments`, `GovernanceContext`, existing `evaluateAuthority` | Current and required authority in audit | 1, 2, risk-owner-without-grant test | Implemented + tested |
| Clause 5: organizational decision rights | Determine who can decide which category/level/type | Fixed capability comparisons | No configurable rights matrix | Exact `DecisionRight` tuple; fail closed for unmatched/ambiguous rules | Policy snapshot and matched rule ID | 3, unknown type/category/level, ambiguous-rule, custom-label tests | Implemented + tested |
| Clause 5: accountable residual-risk acceptance | Separate risk treatment from acceptance | Runtime controls; documented risk acceptance intent | No residual-risk/appetite/authority decision | Supplied inherent/residual risk, treatment, required control/evidence checks, configured appetite response | Assessment and policy in audit | 1, 4, 6, 7 | Implemented + tested |
| Clause 5: mandatory constraints bind all authorities | No authority bypass of hard boundaries | Capability gaps and bypass detection | No configurable non-overridable boundaries | Required boundary checks, `overrideAllowed: false`, `FAIL` precedence | Boundary definitions and checks in audit; reasons | 5, missing/duplicate boundary tests | Implemented + tested |
| Clause 5: escalate decisions beyond delegated authority | Explicit referral without automatic acceptance | `ESCALATE` for attempted runtime bypass | No authority-related routing | Reuse `ESCALATE`, include target, required/current authority and actions | Escalation target in audit | 2, 3, 7 | Implemented + tested |
| Clause 5: defensible, attributable decisions | Record what, why, who, risk, treatment, assurance, impact | Reasons/actions/gaps | No structured governance decision record | Optional detached `GovernanceAudit`, timestamp, benefit/harm/stakeholders | Complete result contains context and policy used | 8 and input-immutability assertions | Implemented + tested |
| Clause 5 increment compatibility | Preserve existing working behavior | v0.3 evaluator | Prevent acceptance overriding existing safeguards | Original capability evaluator retained and composed | Legacy result and final result | Original cases, N/A, material change, three safeguard integration tests | Implemented + tested |

## Validation

- `npm test`: 10 legacy regression scenarios and 26 Clause 5 tests pass.
- `npm run typecheck`: passes.
- `npm run build -- --outDir /private/tmp/govern-clause5-build`: passes; repository-generated files remain unchanged.
- The compiled JavaScript also passes all 26 Clause 5 tests.
- Compared full legacy result objects against the baseline evaluator in 12,288 combinations of capability permissions, agentic status, material change, and runtime controls: all identical.
- `git diff --check`: passes. No regressions or validation failures observed.

## Boundaries and remaining work

This is the requested Clause 5 executable subset. It does not implement every
leadership obligation of a management-system standard. Policy approval and
communication, organizational accountability practices, authenticated identity,
external evidence verification, durable/tamper-evident audit storage, and actual
permission enforcement remain integration/organizational responsibilities.
Each call considers one risk tuple. Evidence validity and residual-risk assessment
are supplied by the caller; no scoring engine, lifecycle, delegation workflow,
or automatic risk reduction was introduced. Clause 6 and later clauses remain
out of scope. No release or tag was created.


## Manual dry run — 2026-10-26

The governance lead operated the actual TypeScript evaluator in a Node session
using CASE-001-MANUAL / Enterprise AI Agent for citizen requests. User-provided
terminal output confirmed these outcomes with one condition changed at a time:

| Scenario | Observed result |
|---|---|
| Business Owner without required acceptance authority | ESCALATE |
| Explicitly authorized Risk Owner with requirements satisfied | PASS |
| Required evidence removed | FAIL |
| Residual risk outside configured appetite | ESCALATE to configured review board |
| Non-overridable boundary violation | FAIL despite sufficient authority and appetite eligibility |

The user inspected the complete final audit record, including the assessment,
policy, authority check, boundary check, reasons, actions, and timestamp.
Evidence references and risk assessments were dry-run inputs, not independently
verified external evidence. No implementation changes were made during the dry run.

Clause 5 requested scope: IMPLEMENTED + TESTED + MANUALLY DRY-RUN.

## Future V4 product backlog — not implemented

**V4-PRODUCT-001: Operation by governance professionals without programming**

Requirement: A governance professional must be able to operate the platform
without writing code or understanding TypeScript schemas.

Origin: The Clause 5 manual dry run exposed the burden of entering schema-shaped
inputs in a Node session. A future product experience should let the professional
load/review a use case, provide or adjust authorized governance inputs, invoke
the real engine, and inspect the decision, reasons, escalation, and audit record
without writing code. Interface design is deferred.

Status: FUTURE BACKLOG ONLY. No UI, CLI, dashboard, or other interface is built
or authorized by this entry. This requirement does not expand the current
Clause 5 implementation or start Clause 6.
