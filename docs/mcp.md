# 🔌 Model Context Protocol (MCP) Guide — Mission Gastrocare

**Tooling Integration, CodeLens Knowledge Graph, and Visual Feedback**  
*Document Version: 1.0.0*

---

## 1. What is Model Context Protocol (MCP)?

The Model Context Protocol (MCP) connects AI developer assistants (such as Antigravity, Claude Code, or Gemini CLI) directly to external developer tools, knowledge graphs, and execution environments without consuming unnecessary token context.

In the Mission Gastrocare repository, two MCP tools are actively configured:
1. **CodeLens Graph MCP**: Live symbol index and structural knowledge graph.
2. **Agentation MCP**: Interactive in-browser visual UI feedback and element annotation tool.

---

## 2. CodeLens Graph MCP — Search & Triage Protocol

CodeLens continuously indexes the workspace on every save, tracking 220+ symbols across 35+ files.

### 2.1 The 4 Triage Tiers
Before initiating any task, agents run `codelens_triage` to classify the problem:

| Tier | Task Type | Recommended Tool Path | Why It Saves Tokens |
|---|---|---|---|
| **Tier 1** | Typo or simple CSS fix | No search tools required | Avoids unnecessary index overhead |
| **Tier 2** | Symbol lookup / function search | `codelens_search` or `codelens_text_search` | Returns exact `file:line` without loading full file |
| **Tier 3** | Features / Bugfixes | `codelens_context` (mode: "short") | Generates a minimal subgraph of related files only |
| **Tier 4** | Refactoring & Schema changes | `codelens_context` + `codelens_impact` | Traces transitive callers and dependencies |

### 2.2 Available CodeLens MCP Tools
- `codelens_triage`: Classifies the task and recommends the most token-efficient search strategy.
- `codelens_search`: Locates function, interface, or class definitions.
- `codelens_text_search`: Fuzzy searches comments, strings, or config parameters.
- `codelens_context`: Pulls a focused subgraph of connected files.
- `codelens_impact`: Runs breadth-first search (BFS) to map the blast radius before refactoring.
- `codelens_relations`: Lists direct callers or callees of a function.
- `codelens_status`: Verifies health and symbol count of the knowledge graph.

---

## 3. Agentation Visual Feedback MCP

The repository integrates `agentation` (`^3.0.2`), which allows users and clinical stakeholders to click directly on web app UI elements and leave precise visual comments.

### 3.1 Implementation in Code
In `src/App.tsx`:
```tsx
import { Agentation } from 'agentation';

export default function App() {
  return (
    <div className="...">
      {/* ... routes ... */}
      <Agentation />
    </div>
  );
}
```

### 3.2 Workflow
1. Dr. Mistry or developer opens `http://localhost:5173/` or the Render live URL.
2. An annotation toolbar appears, allowing element selection, screenshot tagging, and feedback comments (e.g. *"Change button label to Dr. Mistry's Official Clinical Portal"*).
3. The AI agent inspects user annotations and applies surgical code edits directly to the referenced component.

