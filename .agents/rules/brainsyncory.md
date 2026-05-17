

# Project Memory — splitmate-landing
> 146 notes | Score threshold: >40

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

- **⚠️ GOTCHA: Added JWT tokens authentication — evolves the database schema to support new ...** — - > 138 notes | Score threshold: >40
+ > 141 notes | Score threshold: 
- **⚠️ GOTCHA: Added JWT tokens authentication — evolves the database schema to support new ...** — - > 135 notes | Score threshold: >40
+ > 138 notes | Score threshold: 
- **⚠️ GOTCHA: Added JWT tokens authentication — evolves the database schema to support new ...** — - > 132 notes | Score threshold: >40
+ > 135 notes | Score threshold: 
- **⚠️ GOTCHA: Replaced API key auth with JWT tokens — evolves the database schema to suppor...** — - > 128 notes | Score threshold: >40
+ > 132 notes | Score threshold: 
- **⚠️ GOTCHA: Added API key auth authentication — evolves the database schema to support ne...** — - > 125 notes | Score threshold: >40
+ > 128 notes | Score threshold: 
- **⚠️ GOTCHA: Added API key auth authentication — evolves the database schema to support ne...** — - > 123 notes | Score threshold: >40
+ > 125 notes | Score threshold: 

## Project Standards

- Added JWT tokens authentication — confirmed 3x
- what-changed in shared-context.json — confirmed 3x
- what-changed in shared-context.json — confirmed 3x
- Added JWT tokens authentication — confirmed 3x
- convention in agent-rules.md
- what-changed in brainsync_auto.md — confirmed 3x
- Added API key auth authentication — evolves the database schema to support ne... — confirmed 3x
- Added API key auth authentication — evolves the database schema to support ne... — confirmed 3x

## Known Fixes

- ❌ - - Fixed null crash in DOCTYPE — hardens HTTP security headers → ✅ problem-fix in agent-rules.md
- ❌ - - Fixed null crash in Contact → ✅ problem-fix in agent-rules.md

## Recent Decisions

- Optimized Added — optimizes data fetching with relational query instead of N+...
- Optimized Fixed — optimizes data fetching with relational query instead of N+...

## Learned Patterns

- Always: Added API key auth authentication — evolves the database schema to support ne... — confirmed 3x (seen 2x)
- Avoid: ⚠️ GOTCHA: Added JWT tokens authentication — evolves the database schema to support new ... (seen 2x)
- Avoid: ⚠️ GOTCHA: Added API key auth authentication — evolves the database schema to support ne... (seen 2x)
- Agent generates new migration for every change (squash related changes)
- Agent installs packages without checking if already installed

## Available Tools (ON-DEMAND only)
- `sys_core_01(q)` — Deep search when stuck
- `sys_core_05(query)` — Full-text lookup
> Context above IS your context. Do NOT call sys_core_14() at startup.
