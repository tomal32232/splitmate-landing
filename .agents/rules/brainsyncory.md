

# Project Memory — splitmate-landing
> 86 notes | Score threshold: >40

## Safety — Never Run Destructive Commands

> Dangerous commands are actively monitored.
> Critical/high risk commands trigger error notifications in real-time.

- **NEVER** run `rm -rf`, `del /s`, `rmdir`, `format`, or any command that deletes files/directories without EXPLICIT user approval.
- **NEVER** run `DROP TABLE`, `DELETE FROM`, `TRUNCATE`, or any destructive database operation.
- **NEVER** run `git push --force`, `git reset --hard`, or any command that rewrites history.
- **NEVER** run `npm publish`, `docker rm`, `terraform destroy`, or any irreversible deployment/infrastructure command.
- **NEVER** pipe remote scripts to shell (`curl | bash`, `wget | sh`).
- **ALWAYS** ask the user before running commands that modify system state, install packages, or make network requests.
- When in doubt, **show the command first** and wait for approval.

**Stack:** Unknown stack

## 📝 NOTE: 1 uncommitted file(s) in working tree.\n\n## Important Warnings

- **gotcha in shared-context.json** — -     }
+     },
-   ]
+     {
- }
+       "id": "71e5aed28e203c69",
+
- **gotcha in shared-context.json** — -     }
+     },
-   ]
+     {
- }
+       "id": "0206e7d917954838",
+
- **⚠️ GOTCHA: problem-fix in agent-rules.md** — - - Fixed null crash in Contact
+ - problem-fix in agent-rules.md
- - 
- **⚠️ GOTCHA: problem-fix in agent-rules.md** — - - Fixed null crash in DOCTYPE — hardens HTTP security headers
+ - pr
- **gotcha in agent-rules.md** — File updated (external): .brainsync/agent-rules.md

Content summary (3

## Project Standards

- Strengthened types Optimized — optimizes data fetching with relational query ...
- Strengthened types Optimized — optimizes data fetching with relational query ...
- Strengthened types Architectural
- Strengthened types Fixed
- Strengthened types Patched
- Strengthened types Recent
- Strengthened types Project
- convention in .gitignore

## Known Fixes

- ❌ - - Fixed null crash in DOCTYPE — hardens HTTP security headers → ✅ problem-fix in agent-rules.md
- ❌ - - Fixed null crash in Contact → ✅ problem-fix in agent-rules.md

## Recent Decisions

- Optimized Added — optimizes data fetching with relational query instead of N+...
- Optimized Fixed — optimizes data fetching with relational query instead of N+...

## Verified Best Practices

- Agent generates new migration for every change (squash related changes)
- Agent installs packages without checking if already installed

## Available Tools (ON-DEMAND only)
- `sys_core_01(q)` — Deep search when stuck
- `sys_core_05(query)` — Full-text lookup
> Context above IS your context. Do NOT call sys_core_14() at startup.
