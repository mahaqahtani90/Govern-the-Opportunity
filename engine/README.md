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
