# 🩺 Debugging & Incident Runbook — Mission Gastrocare

**Troubleshooting Guide for Known Issues & Edge Cases**  
*Document Version: 1.1.0*

---

## 1. Issue: Windows Vite Lockfile / Cache `EPERM` Error

### Symptom
When running `npm run dev`, Vite fails with:
```text
Error: EPERM: operation not permitted, rmdir '...\node_modules\.vite\deps_temp_...'
Error: EPERM: operation not permitted, rmdir '...\node_modules\.vite\deps'
```

### Root Cause
On Windows, file locking during fast-refresh or dependency re-optimization can prevent Vite from removing its temporary dependency cache directory.

### Solution
1. Terminate running background tasks.
2. Clear the `.vite` cache directory via PowerShell:
   ```powershell
   Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
   ```
3. Launch Vite with forced re-optimization:
   ```bash
   npx vite --force
   ```

---

## 2. Issue: Render Static Hosting 404 "Not Found" on Page Refresh

### Symptom
Opening `https://missiongastrocarehos-webapp.onrender.com/` works fine, but refreshing or navigating directly to `/admin` or `/media` displays Render's plain text `Not Found` screen.

### Root Cause
Static web servers look for physical disk files (e.g. `/admin.html`). In a React Single Page Application (SPA), routes exist only in the client-side JavaScript router. If the server does not know to rewrite all non-file requests back to `/index.html`, it issues an HTTP 404.

### Solution
Ensure all four fallback files are present in `public/` and project root:
1. **`public/_redirects`**:
   ```text
   /*    /index.html   200
   ```
2. **`public/static.json`**:
   ```json
   { "routes": { "/*": "index.html" } }
   ```
3. **`render.yaml`**:
   ```yaml
   routes:
     - type: rewrite
       source: /*
       destination: /index.html
   ```
4. **`public/404.html`**: Universal SPA redirect fallback script.

---

## 3. Issue: Hard `<a href="/admin">` Causing Full Browser Reload

### Symptom
Clicking **"Doctor Admin Portal 🔒"** on the Media page triggers a full page browser reload rather than a smooth instant React transition.

### Root Cause
Using standard HTML `<a href="/admin">` forces the browser to send an HTTP GET request to the remote server.

### Solution
Always import and use React Router's `Link` component:
```tsx
import { Link } from 'react-router-dom';

<Link to="/admin" className="...">
  Doctor Admin Portal
</Link>
```

---

## 4. Issue: Playwright Browser Automation Driver CDN Timeout

### Symptom
Running Playwright E2E tests throws:
```text
404 Not Found from https://playwright.azureedge.net/builds/driver/playwright-...
```

### Root Cause
Microsoft's Azure Playwright driver CDN occasionally experiences temporary throttling or network latency on Windows machines.

### Solution
Install chromium directly into the user cache via npx:
```bash
npx -y playwright install chromium
```
Then run the live runner script:
```bash
npm run test:e2e
# or directly:
node tests/e2e/playwright_live_runner.mjs
```

---

## 5. Issue: TypeScript Path Alias `@/` Not Resolving

### Symptom
`Cannot find module '@/components/...' or its corresponding type declarations.`

### Root Cause
Missing or misaligned path mapping in `tsconfig.json` or `vite.config.ts`.

### Solution
Verify that `tsconfig.json` defines:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
And `vite.config.ts` includes `resolve.alias`:
```typescript
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

---

## 6. Issue: React Lazy Route Chunk Download Failures (Blank Screen Crash)

### Symptom
When a user navigates to a lazy-loaded route on a spotty mobile connection or after a new deployment where old chunk hashes are invalidated, React crashes to a completely blank white screen.

### Root Cause
`<Suspense fallback={<LoadingFallback />}>` only intercepts pending promises during normal component resolution. If dynamic `import('@/pages/...')` rejects with a network error (`ChunkLoadError: Loading chunk failed`), the error bubbles up past Suspense and unmounts the entire React tree unless caught by an Error Boundary.

### Solution
Wrap `<Suspense>` inside a dedicated class-based `RouteErrorBoundary` component (`src/App.tsx`) implementing `componentDidCatch` and `getDerivedStateFromError`. When a chunk fails to load, the boundary renders an accessible clinical recovery card with a **"Reload Page"** button (`window.location.reload()`) instead of crashing.

---

## 7. Issue: Cancelled Appointments Permanently Locking Out Booking Slots

### Symptom
A patient cancels an appointment (`status = 'CANCELLED'`), but subsequent patients are blocked from booking that same time slot with a `409 Conflict: Slot already booked`.

### Root Cause
An unconditional database unique constraint:
```prisma
@@unique([doctorId, opdDate, slotTime], name: "unique_slot_booking")
```
evaluates uniqueness across **all rows**, including cancelled records that remain in the database for auditing and accounting history.

### Solution
In PostgreSQL migrations, replace the unconditional unique constraint with a **Partial Unique Index**:
```sql
CREATE UNIQUE INDEX "unique_active_slot_booking" 
ON "appointments" ("doctorId", "opdDate", "slotTime") 
WHERE "status" != 'CANCELLED';
```
This guarantees slot exclusivity among active appointments (`PENDING`, `CONFIRMED`, `COMPLETED`), while automatically returning cancelled slots to the public booking pool.

---

## 8. Issue: Cross-Subdomain Auth Cookie Blocking on Render Public Suffix List (PSL)

### Symptom
In multi-service staging environments (e.g. frontend on `app.onrender.com` and backend API on `api.onrender.com`), doctors logging into the Admin Portal receive `200 OK` on `/auth/login`, but subsequent `/auth/me` requests fail with `401 Unauthorized` even with `credentials: 'include'`.

### Root Cause
`onrender.com` is registered on Mozilla's Public Suffix List (PSL) alongside `.com` and `.github.io`. Browsers treat separate `*.onrender.com` subdomains as completely distinct eTLD+1 origins. Consequently, `SameSite=Strict` cookies are blocked from being transmitted cross-origin.

### Solution
1. **For Render Staging**: Set `sameSite: 'none'` and `secure: true` on cookies so they cross subdomains safely with HTTPS credentials.
2. **For Production**: Bind custom apex domains (`missiongastrocare.com` for frontend and `api.missiongastrocare.com` for backend) and configure `domain: '.missiongastrocare.com'` with `sameSite: 'strict'` or `'lax'`.

---

## 9. Issue: Infinite Re-render Loop on Broken Image `onError` Handlers

### Symptom
A browser tab freezes or spikes CPU usage when rendering photos in the Gallery (`src/pages/Media.tsx`).

### Root Cause
If an image element's primary URL fails, `onError` sets `e.target.src = fallbackUrl`. If the fallback URL is also blocked, offline, or invalid, the image fails again, firing `onError` in an infinite synchronous re-render loop.

### Solution
Always nullify the error handler immediately before re-assigning the source:
```tsx
onError={(e) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.src = "https://images.unsplash.com/...";
}}
```
