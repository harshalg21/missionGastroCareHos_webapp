## 🌟 Mission Gastrocare — Core Engineering & AI Agent Rules

### RULE 7 — Surgical Edits & Minimal Diff Protocol (MANDATORY)
- **NEVER rewrite or regenerate entire 50–200 line files when making 1–10 line changes.**
- Always target the exact lines that need editing using targeted contiguous diff tools.
- Preserve unrelated comments, docstrings, imports, and component lifecycle logic while permitting deliberate updates to lines targeted by the task.

### RULE 8 — Grounding in `docs/` Before Building
- Before modifying architecture, database, API, or styling, always consult the project documentation suite in `docs/`:
  - `docs/prd.md` — Product requirements, clinical user personas, and scope.
  - `docs/design.md` — Brand palette (`#1D5E54`), typography, Medical Discretion Blur Shield UX.
  - `docs/architecture.md` — Client-server system architecture & Render SPA rewrites.
  - `docs/database.md` — PostgreSQL models & Prisma ORM schemas.
  - `docs/api.md` — REST API contracts & JSON envelopes.
  - `docs/plan.md` — Phased implementation plan & next milestones.
  - `docs/testing.md` — QA strategy & Playwright E2E browser tests.
  - `docs/debugging.md` — Incident runbook & troubleshooting.

<!-- CODELENS_MANAGED_START -->
## CodeLens Graph — Mandatory Search Protocol

This workspace has a live codebase knowledge graph via **CodeLens Graph** MCP, updated on every save.
Run `codelens_status` for current symbol and file counts.

### RULE 1 — Triage first to establish the baseline
Before starting a task, call `codelens_triage` to classify it.
Use the triage response to pick the most efficient tool path. You have full flexibility to choose other tools as necessary:
- **Tier 1 (typo/formatting)**: No tools needed.
- **Tier 2 (symbol lookup / search)**: Call `codelens_search` (for classes, functions, types) or `codelens_text_search` (for strings, comments, local variables).
- **Tier 3 (features / bugfixes)**: Start with `codelens_context`. Use `mode: "short"` to quickly see the file/symbol map (cheapest), or `mode: "deep"` only if you need full implementations.
- **Tier 4 (refactoring)**: Use `codelens_context` + `codelens_impact` to map dependencies and prevent breaking changes.

### RULE 2 — Use specific tools instead of scanning files
Avoid generic workspace scans (grep, ls, find) or reading whole files. Use these targeted tools:
| Task / Need | Recommended Tool | Why It Saves Tokens |
|---|---|---|
| Locate symbol definition | `codelens_search` | Returns exact file:line + signature |
| Search text, comments, or strings | `codelens_text_search` | Searches line-by-line using fuzzy text index |
| Inspect 1 class/function code | `codelens_node` (with `with_snippet: true`) | Avoids reading the whole file containing it |
| Understand feature context | `codelens_context` | Returns a minimal subgraph of only related files |
| Find callers/callees of a function | `codelens_relations` | Lists callers, callees, or both for a given symbol |
| See transitive dependencies | `codelens_impact` | Automatically runs BFS to map the blast radius |
| Check directory structure | `codelens_files` | Returns category-grouped file list |

### RULE 3 — Read only what CodeLens points to (Source Code Files)
When CodeLens tools return a `file:line` range, read only that specific range using targeted file reading tools (with StartLine and EndLine).
Do NOT read whole source files, and never read source files that are not listed in the graph response.
*Exemption*: Architecture specifications, PRD, and design references in `docs/` are non-AST markdown files exempt from CodeLens symbol queries; consult `docs/` directly as mandated by RULE 8.

### RULE 4 — Check before creating
Before writing a new function, class, or file, run `codelens_search` to ensure you are not creating a duplicate. Duplication is the #1 source of code rot.

### RULE 5 — Keep the graph updated
The knowledge graph is updated automatically on file save. You can run `codelens_status` to verify the index is healthy and up to date.

### RULE 6 — Query dependencies and configs strategically
Only search for package dependencies, type definitions, or configuration files (like package.json, tsconfig.json) when asked or if context is missing.
Use `codelens_search` or `codelens_files` with `scope: "deps"`, or use `codelens_dependencies` directly.

### Available tools (MCP server: codelens)
`codelens_triage` · `codelens_search` · `codelens_context` · `codelens_dependencies`
`codelens_relations` · `codelens_impact` · `codelens_text_search`
`codelens_node` · `codelens_files` · `codelens_status`
<!-- CODELENS_MANAGED_END -->
