# 🧪 Testing Strategy & QA Protocols — Mission Gastrocare

**Quality Assurance, Automated E2E Testing, and Code Review Standards**  
*Document Version: 1.0.0*

---

## 1. Multi-Tiered Testing Strategy

To ensure clinical software reliability, Mission Gastrocare utilizes a 4-layer testing pipeline:

```
┌────────────────────────────────────────────────────────┐
│ Layer 4: Playwright Automated Headless Browser E2E     │
│   • Multi-page navigation, link clicks, form fills     │
├────────────────────────────────────────────────────────┤
│ Layer 3: CodeRabbit Quality & Security Compliance      │
│   • Link hygiene (rel="noopener noreferrer"), RBAC     │
├────────────────────────────────────────────────────────┤
│ Layer 2: TypeScript Strict Compilation (`tsc --noEmit`)│
│   • 0 implicit any, 0 type regressions                │
├────────────────────────────────────────────────────────┤
│ Layer 1: Unit & Component Validation                   │
│   • State machines, search filters, form validation    │
└────────────────────────────────────────────────────────┘
```

---

## 2. Playwright Automated Headless Browser E2E Suite

The repository includes a tracked, autonomous Playwright E2E browser test runner script located in `tests/e2e/playwright_live_runner.mjs`.

### 2.1 Running the Live E2E Browser Suite
```bash
npm run test:e2e
# or directly:
node tests/e2e/playwright_live_runner.mjs
```

### 2.2 Verified Test Steps & Output Log
1. **Home Page Render (`/`)**: Confirms HTTP 200 and document title.
2. **Navigation Header Check**: Confirms visibility of Home, About, Services, Doctors, Facilities, Media, Careers, Contact.
3. **Media Page & Gallery (`/media`)**: Confirms article loading and category filter tabs.
4. **Doctor Admin Portal Routing (`/admin`)**: Clicks **"Doctor Admin Portal 🔒"** on Media page and verifies client-side navigation without server 404s.
5. **Admin Portal UI Verification**: Confirms login inputs, role selector, and executive branding.
6. **Direct Page Reload on `/admin`**: Tests browser address bar hard refresh to verify Render SPA rewrites.
7. **Official Clinical Portal Link**: Confirms existence and security attributes of Dr. Mistry’s personal site link (`drjitendramistry.com`).
8. **Medical Discretion Blur Shield**: Verifies that surgical photos are softly blurred by default.
9. **Live Gallery Keyword Search**: Types `"enteroscopy"` and verifies that matching surgical cards are filtered.

---

## 3. Pre-Commit Quality Checklist (CodeRabbit Standard)

Before committing and pushing code to git (`Dev` or `main`), developers and AI agents must verify:

- [ ] `npx tsc --noEmit` exits with **code 0 (zero errors)**.
- [ ] `npm run build` succeeds cleanly in under 20 seconds.
- [ ] All `target="_blank"` anchor tags include `rel="noopener noreferrer"`.
- [ ] All internal links use React Router `<Link to="...">` (zero hard `<a href="/...">` tags).
- [ ] Surgical organ photos retain the **Medical Discretion Blur Shield** by default.
- [ ] Appointment forms retain the hidden **Honeypot anti-spam check**.
- [ ] No API keys, passwords, or secrets are committed to git.

---

## 4. Mobile & Viewport Verification Matrix

All pages must be verified across three primary viewports:
- **Mobile (390 x 844)**: iPhone 12/13/14 portrait.
- **Tablet (768 x 1024)**: iPad portrait.
- **Desktop (1440 x 900)**: Standard desktop monitor.

---

## 5. CodeRabbit Automated Quality & Architecture Compliance

Mission Gastrocare enforces CodeRabbit static analysis before merging changes into `Dev` and `main`.

### 5.1 Configuration (`.coderabbit.yaml`)
To prevent external noise from third-party markdown skills and build outputs, the project includes `.coderabbit.yaml`:
```yaml
version: "2"
reviews:
  profile: "chill"
  request_changes_workflow: false
  high_level_summary: true
  path_filters:
    - "!**/.agents/**"
    - "!**/dist/**"
    - "!**/node_modules/**"
    - "!**/scratch/**"
```

### 5.2 Key CodeRabbit Rules Enforced in CI
1. **WCAG Keyboard Accessibility (`jsx-a11y`)**: Interactive `div` elements with `onClick` must declare `role="button"`, `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers.
2. **Error Boundaries on Suspense**: Route-level lazy loading (`React.lazy`) must be wrapped with an `ErrorBoundary` to prevent white-screens on chunk download failures.
3. **Safe Image Fallbacks**: Image `onError` handlers must nullify `target.onerror = null` before setting fallback URLs to prevent infinite loop crashes.
4. **PostgreSQL Partial Unique Constraints**: Any status-based exclusivity (such as OPD slot locking) must use partial unique indexes (`WHERE status != 'CANCELLED'`) so cancelled records don't lock slots.
5. **Cookie Security on Render**: Staging deployments across multiple Render subdomains must account for the Public Suffix List (PSL) using `SameSite=None; Secure`.

