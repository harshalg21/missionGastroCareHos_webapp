# 🤖 AI Agent Guidelines & Engineering Protocols — Mission Gastrocare

**For AI Assistants, Subagents, and Pair-Programming Engineers**  
*Document Version: 1.0.0*

---

## 1. Prime Directives for AI Agents

All AI assistants (Antigravity, Cursor, Claude Code, Gemini CLI, etc.) working on this repository **MUST** strictly adhere to the following 5 Golden Rules:

### 🌟 Rule 1: Surgical Edits & Minimal Diff Protocol (STRICT)
- **Do NOT rewrite entire 50–200 line files when making a 1–10 line change.**
- Always target the exact lines that need editing using targeted contiguous diff tools (e.g. `edit_file` / `replace_file_content`).
- Preserving file structure prevents accidental regressions, reduces token expenditure by >80%, and maintains clean git history.
- **Exceptions**: Only overwrite a whole file when creating a new file from scratch or when explicitly directed by the user.

### 🌟 Rule 2: Grounding in `docs/` Before Modifying Architecture
- Before creating a new table, API route, or modifying state management, **read the corresponding documentation file**:
  - Changing database tables? Read `docs/database.md`.
  - Adding or modifying endpoints? Read `docs/api.md`.
  - Styling or altering components? Read `docs/design.md`.
  - Planning work phases? Read `docs/plan.md`.
- Never invent new data models or modify core conventions without consulting the specs.

### 🌟 Rule 3: Zero Regression & Comment Integrity
- Maintain documentation integrity.
- **Never delete or strip existing comments, docstrings, or TypeScript annotations** unless explicitly requested.
- Ensure all existing unit, build, or Playwright E2E tests continue to pass (`npx tsc --noEmit` and `npm run build`).

### 🌟 Rule 4: Clinical Safety & Patient Discretion UX
- **Medical Disclaimer**: Any AI triage or medical guidance UI must display clear disclaimers that it does not replace a clinical physician consultation.
- **Sensitive Content Shield**: Never unblur surgical organ photos by default. Intraoperative imagery must remain protected under the **Medical Discretion Blur Shield** (`blur-xl` + tap to reveal) to preserve patient comfort.

### 🌟 Rule 5: CodeLens Knowledge Graph MCP Protocol
When investigating the codebase:
- **Tier 1 (Typo/Formatting)**: No heavy search tools needed.
- **Tier 2 (Symbol lookup)**: Use targeted symbol lookup rather than scanning whole directories.
- **Tier 3 (Features/Bugfixes)**: Query the context subgraph to see exact relationships.
- **Tier 4 (Refactoring)**: Map transitive dependencies and blast radius before modifying shared interfaces.

---

## 2. Standard Coding Patterns in this Codebase

### 2.1 SPA Link Components (Zero Hard Reloads)
Never use plain HTML anchor tags `<a href="/internal-route">` for internal navigation. Always use:
```tsx
import { Link } from 'react-router-dom';

<Link to="/admin" className="...">
  Doctor Admin Portal
</Link>
```

### 2.2 External Link Security
All external hyperlinks (including Dr. Mistry's personal clinical portal) must include security rel attributes:
```tsx
<a
  href="http://drjitendramistry.com/index.html"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Dr. Mistry's Official Clinical Portal
</a>
```

### 2.3 Anti-Spam Honeypot Trap
Any public form (`AppointmentForm.tsx`, `Contact.tsx`) must maintain an invisible honeypot check:
```tsx
if (honeypot.trim() !== '') {
  // Silently drop bot submission without erroring
  return;
}
```

---

## 3. Subagent Roles & Responsibilities

| Subagent Role | Purpose | Permitted Actions |
|---|---|---|
| **Codebase Researcher** | Deep code reading and dependency tracing | Read-only access to files and graph |
| **E2E Browser Tester** | Automated Playwright walkthroughs on `localhost` or Render | Run tests, verify DOM elements, log steps |
| **Security Auditor** | Scans for exposed API keys, XSS vulnerabilities, and link hygiene | Code audits and build checks |
| **Performance Auditor** | Inspects bundle sizes and image optimizations | Run build analytics and Lighthouse audits |

---

## 4. Antigravity Skills & Skills Library (`agentic-awesome-skills`)

The workspace is configured with a unified catalog combining two major skill repositories:
1. **Antigravity Awesome Skills** ([benjaminasterA/antigravity-awesome-skills](https://github.com/benjaminasterA/antigravity-awesome-skills.git))
2. **Agentic Awesome Skills v20.7.0** ([sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills.git))

Together, this gives the workspace access to **2,964+ indexed agentic skills** and **2,864+ skill directories on disk**.

### 4.1 Architecture & Token Protection
- **Full Catalog Reference**: Unified into `.agents/awesome-skills/` (kept out of git tracking to preserve a lightweight project size).
- **Active Skills (`.agents/skills/`)**: Only active skills are loaded into Antigravity's system prompt to avoid token bloat (~50k+ tokens saved per turn).
- **CLI Manager**: A dedicated management script is available at `.agents/skills.cjs` and mapped to `npm run skill`.

### 4.2 Active Skills for Gastrocare
Currently activated skills in `.agents/skills/`:
- **Essentials**: `brainstorming`, `concise-planning`, `lint-and-validate`, `systematic-debugging`, `git-pushing`
- **Frontend & Web**: `frontend-design`, `react-best-practices`, `react-patterns`, `tailwind-patterns`, `ui-ux-pro-max`, `mobile-design`
- **Fullstack & Backend**: `senior-fullstack`, `backend-dev-guidelines`, `database-design`, `postgresql`, `database-migrations-sql-migrations`
- **Security**: `api-security-best-practices`, `auth-implementation-patterns`, `frontend-security-coder`
- **SEO**: `seo-audit`, `seo-fundamentals`
- **Testing**: `playwright-skill`

### 4.3 Invoking Skills
Invoke any active skill directly in chat:
```text
"Use @brainstorming to help me plan the medical triage wizard."
"Use @seo-audit to inspect meta tags and structured data."
"Use @react-best-practices to review src/components/AppointmentForm.tsx."
"Use @database-design to evaluate our PostgreSQL appointments schema."
```

### 4.4 Managing Skills via CLI
```bash
# 1. List active skills
npm run skill:list

# 2. View library statistics (2,964+ catalog skills)
npm run skill stats

# 3. View curated bundles
npm run skill:bundles

# 4. Search across all 2,964+ catalog skills by keyword or tag
npm run skill:search "whatsapp"
npm run skill:search "pdf"
npm run skill:search "docker"

# 5. Enable any skill from catalog
npm run skill enable whatsapp-cloud-api

# 6. Disable a skill
npm run skill disable whatsapp-cloud-api

# 7. Activate a curated bundle
npm run skill bundle web-wizard
```

