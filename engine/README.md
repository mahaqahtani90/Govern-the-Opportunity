# AI Governance Engine v0.3 — Minimal Draft

A deliberately small rules engine for one question:

**Do the AI system's technical permissions exceed its approved authority?**

Decision priority:
1. ESCALATE
2. FAIL
3. CONDITIONAL
4. PASS
5. N/A

Core principle:

**CAN > MAY = Governance Gap**

Run:
```bash
npm install
npm run example
npm run test:cases
```

This draft intentionally excludes UI, database, cloud integrations, automated permission discovery, full cybersecurity assessment, and LLM-based decision making.


## V4 development increment 1 — Clause 5 authority

This unreleased increment interprets the requested Clause 5 leadership scope.
It is not a final V4 release, ISO certification, or a claim of full conformity.
Clause 6 and later clauses are not implemented.

`evaluateAuthority(assessment, policy?)` retains the original return values for
legacy assessments without `governance` or a policy. To request a governance
decision, supply both `assessment.governance` and a separately trusted
`AuthorityPolicy`. Supplying only one returns `FAIL`.

The TypeScript contracts are in `src/types.ts`; the executable fixture and
examples of policy changes are in `src/clause5-tests.ts`. The independent TaskFit
JSON schema remains unchanged because it describes a different assessment.

### Decision rights

Each rule matches an exact tuple: `decisionType + riskCategory + residualRisk`.
Exactly one rule must match. Unknown or ambiguous tuples return `FAIL`.
The rule specifies the required authority token, escalation target, appetite
eligibility, outside-appetite response, and required control/evidence IDs.
Risk levels and authority tokens are organization-defined strings, with no
numeric ordering, implicit seniority, wildcard, or built-in job title.

`policy.assignments` maps principal IDs to authority tokens. `decisionOwner`,
`riskOwner`, and optional `businessOwner` identify responsibility; ownership
never grants a token. A senior decision-maker must also have an explicit grant.
The caller must authenticate `decisionOwner` and supply policy from a trusted
source. Do not allow an assessment submitter to supply their own policy.
This library evaluates trusted typed inputs; it is not an authentication service
or an untrusted-JSON validation endpoint.

### Acceptance and precedence

- `PASS`: requested governance decision is permitted under the matched rule;
  for `accept-risk`, this is authorized residual-risk acceptance. It does not
  change technical permissions or independently authorize deployment.
- `FAIL`: a hard boundary is violated/unverified, required assurance is absent,
  policy/context is incomplete, or configured appetite requires rejection.
- `ESCALATE`: authority is insufficient or configured appetite requires escalation.
- Existing capability `FAIL`, runtime `CONDITIONAL`, and bypass `ESCALATE`
  remain binding and cannot be promoted to `PASS` by risk acceptance.

Explicit hard boundaries always return `FAIL` before other governance paths,
including bypass escalation. Every configured boundary needs one explicit
non-violation check. No override path is implemented; `overrideAllowed` is false.
Legacy calls retain their original priority, including bypass `ESCALATE`.

The engine uses the supplied residual risk, not the inherent risk, to select
appetite and authority. It checks policy-required controls are applied and
required evidence is valid with a nonempty reference. It records treatment but
does not calculate risk reduction or verify the truth of externally supplied
control/evidence assertions. Organizations may explicitly configure empty
requirements where appropriate; absence of a matching policy never grants approval.
An outside-appetite escalation is a referral, not acceptance or an automatic override.

### Audit and scope

The existing result's `decision`, `reasons`, `requiredActions`, and `gaps`, plus
`audit`, form the decision record. Audit includes an evaluation timestamp, a
detached copy of the assessment and policy, matched rule, current/required
authority, authority-check result, appetite result, and escalation destination.
Benefit, harm, stakeholders, severity, and impact distribution stay in context.
`authoritySatisfied` describes the grant check only; acceptance also requires
all other checks to pass. The policy snapshot supports subsequent reconstruction.
Persist the entire result if an audit trail is required; storage, signatures,
notifications, and tamper protection are outside this increment.

Each call evaluates one risk/category/decision tuple. Multi-risk aggregation,
identity provisioning, delegation expiry, and approval workflows are not provided.
Material-change/reassessment behavior is unchanged. No lifecycle or risk
calculation subsystem was added.

Validation (Node.js with `structuredClone` and `--import` support):

```sh
npm test
npm run typecheck
npm run build
```

`npm test` includes the original four cases with assertions, N/A and material-change
regressions, and 26 Clause 5 tests. No new dependencies are required.
