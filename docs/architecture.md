# 🏛️ System Architecture Specification — Mission Gastrocare

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Document Version: 1.0.0*

---

## 1. High-Level Architectural Overview

The Mission Gastrocare platform is designed as a modern, decoupled healthcare application combining a fast Single Page Application (SPA) client, a secure REST API backend, and an enterprise PostgreSQL relational database.

```
┌────────────────────────────────────────────────────────┐
│               React SPA Frontend (Vite)                │
│       Tailwind CSS • Lucide Icons • React Router       │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼ HTTPS / REST APIs
┌────────────────────────────────────────────────────────┐
│            Node.js + Express.js API Server             │
│  ├── Security Middleware (Helmet, CORS, Rate-Limit)    │
│  ├── Zod Input Validation & Anti-Spam Sanitation       │
│  ├── JWT Authentication & Role-Based Access Control    │
│  ├── AI Clinical Triage Engine (Gemini 1.5 API)        │
│  └── Prisma ORM Data Access Layer                      │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼ TLS 1.3 Encrypted Wire
┌────────────────────────────────────────────────────────┐
│          PostgreSQL Database (Render / Neon)           │
│   Appointments • Doctor Schedules • Articles • Media   │
└────────────────────────────────────────────────────────┘
```

---

## 2. Frontend Architecture (React 18 + Vite)

### 2.1 Technology Stack
- **Framework**: React 18 with TypeScript (`strict: true`)
- **Build Tool**: Vite 5 with automatic chunking and gzip compression
- **Styling**: Tailwind CSS 3.4 with custom executive emerald theme extensions
- **Icons**: Lucide React
- **Client Routing**: React Router DOM v6 with SPA history management
- **Visual Feedback**: Agentation React integration

### 2.2 Client-Side SPA Routing & Server Fallback
Because static web hosting platforms (like Render or Netlify) do not have native knowledge of client-side React routes (`/admin`, `/media`, `/doctors`), the following fallback mechanisms are maintained in `public/`:
- **`public/_redirects`**: `/*    /index.html   200`
- **`public/static.json`**:
  ```json
  { "routes": { "/*": "index.html" } }
  ```
- **`render.yaml`**:
  ```yaml
  routes:
    - type: rewrite
      source: /*
      destination: /index.html
  ```
- **`public/404.html`**: A static fallback that bootstraps the single-page application router if deep-linked directly on cold start.

---

## 3. Backend Architecture (Node.js + Express + Prisma)

### 3.1 Core Middleware Pipeline
1. **`Helmet`**: Sets HTTP security headers (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`).
2. **`CORS`**: Restricts origins strictly to `https://missiongastrocarehos-webapp.onrender.com` and `http://localhost:5173`.
3. **`express-rate-limit`**:
   - General APIs: 100 requests per 15 mins per IP.
   - Appointment Booking (`/api/v1/appointments/book`): 10 requests per hour per IP.
   - AI Triage (`/api/v1/ai/triage`): 5 requests per 10 mins per IP.
4. **`Zod Validation`**: Validates request body against strict TypeScript schemas before passing to controllers.
5. **`Auth & RBAC Middleware`**: Validates JWT from HttpOnly cookies and verifies role (`SUPER_ADMIN`, `DOCTOR`, `RECEPTIONIST`).

### 3.2 Directory Structure
```text
server/
├── prisma/
│   └── schema.prisma        # Database schema definitions & migrations
├── src/
│   ├── config/              # Database client, environment variables
│   ├── controllers/         # Business logic for auth, appointments, articles
│   ├── middleware/          # Security, validation, auth verification
│   ├── routes/              # Express route declarations
│   ├── services/            # Gemini AI service, WhatsApp notification service
│   ├── types/               # Shared TypeScript models and interfaces
│   └── server.ts            # Application bootstrap & port listener
├── package.json
└── tsconfig.json
```

---

## 4. External Services & Integrations

1. **Google Gemini 1.5 Flash API**: Powers the AI Clinical Triage engine. The API key is kept strictly on the backend server (`.env`) and never exposed to client bundles.
2. **WhatsApp / Twilio Messaging Engine**: Generates automated appointment booking confirmation tickets sent directly to the patient's phone.
3. **Cloud Storage (AWS S3 or Cloudinary)**: Houses high-resolution hospital campus images, clinical operative photos, and doctor certificates.
4. **Google Analytics 4 (GA4)**: Configured in `index.html` via `gtag.js` for patient traffic and OPD booking funnel tracking.

---

## 5. Security & Medical Data Governance

- **Data in Transit**: Enforced TLS 1.3 across all client-server-database connections.
- **Data at Rest**: AES-256 encrypted fields for patient mobile numbers and email addresses.
- **Honeypot Anti-Spam**: Invisible form fields trap automated bots, rejecting spam without disturbing real patients.
- **Link Hygiene**: All external links (e.g. Dr. Mistry’s personal site) strictly enforce `rel="noopener noreferrer"`.

