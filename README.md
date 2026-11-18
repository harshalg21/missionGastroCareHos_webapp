# 🏥 Mission Gastrocare — Web Application & Healthcare Portal

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Director: Dr. Jitendra Mistry (Consultant GI & HPB Surgeon)*  
*Senior Consultant: Dr. Saurabh Dey (Senior GI & Laparoscopic Surgeon)*

---

## 🌟 Overview

**Mission Gastrocare** is Vadodara’s premier super-specialty hospital for advanced Gastroenterology, Hepato-Pancreato-Biliary (HPB) Surgery, Bariatric & Metabolic Surgery, GI Oncology, and Advanced Therapeutic Endoscopy & ERCP.

This repository contains the complete frontend web application, clinical triage system, interactive campus & surgical photo gallery, and specifications for the scheduled Node.js + PostgreSQL backend.

---

## 🚀 Live Production & Deployment Status

- 🌐 **Live Website URL**: [https://missiongastrocarehos-webapp.onrender.com/](https://missiongastrocarehos-webapp.onrender.com/)
- 🔒 **Doctor Admin Portal**: [https://missiongastrocarehos-webapp.onrender.com/admin](https://missiongastrocarehos-webapp.onrender.com/admin)
- 👨‍⚕️ **Dr. Mistry's Official Clinical Portal**: [https://drjitendramistry.com/index.html](https://drjitendramistry.com/index.html)
- 📌 **Active Git Branch**: `Dev` $\rightarrow$ `main`
- ⚙️ **Hosting Platform**: Render (Static Web Service with SPA Rewrite Routing)
- 🛡️ **Code Quality**: CodeRabbit Audited • 15 Code-Split Bundles • WCAG A11y Verified

---

## 📚 Complete Project Documentation Suite (`docs/`)

All architecture, database, API, and engineering standards are documented in detail within the [`docs/`](./docs/) directory:

| Document | Description |
|---|---|
| [**`docs/prd.md`**](./docs/prd.md) | Product Requirements Document, personas, functional & non-functional requirements. |
| [**`docs/design.md`**](./docs/design.md) | UI/UX Design System, Executive Emerald palette, Medical Discretion Blur Shield UX. |
| [**`docs/architecture.md`**](./docs/architecture.md) | System Architecture, React 18 SPA client, Node.js API, Render SPA routing rules. |
| [**`docs/database.md`**](./docs/database.md) | PostgreSQL database schema, Prisma models, constraints, and migrations. |
| [**`docs/api.md`**](./docs/api.md) | REST API endpoints, request/response payloads, and error codes. |
| [**`docs/agents.md`**](./docs/agents.md) | Mandatory AI agent guidelines, **Surgical Edit / Minimal Diff Protocol**, and triage rules. |
| [**`docs/plan.md`**](./docs/plan.md) | Master phased implementation plan for frontend polish & backend rollout. |
| [**`docs/setup.md`**](./docs/setup.md) | Local developer setup, environment variables, and deployment instructions. |
| [**`docs/features.md`**](./docs/features.md) | Comprehensive feature catalog with acceptance criteria. |
| [**`docs/auth.md`**](./docs/auth.md) | JWT authentication, bcrypt hashing, and Role-Based Access Control (RBAC). |
| [**`docs/mcp.md`**](./docs/mcp.md) | Model Context Protocol (MCP) tooling (CodeLens Graph & Agentation). |
| [**`docs/integration.md`**](./docs/integration.md) | Third-party integrations (GA4, Google Maps, Gemini 1.5 AI, WhatsApp). |
| [**`docs/testing.md`**](./docs/testing.md) | Testing strategy, Playwright automated E2E browser tests, and CodeRabbit review. |
| [**`docs/debugging.md`**](./docs/debugging.md) | Troubleshooting runbook (Windows Vite EPERM, Render 404s, CORS). |

---

## ⚡ Quick Start for Developers

### Prerequisites
- Node.js `v20.x` or higher
- npm or pnpm

### 1. Clone & Install
```bash
git clone https://github.com/harshalg21/missionGastroCareHos_webapp.git
cd missionGastroCareHos_webapp
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 3. Verify TypeScript & Production Build
```bash
npx tsc --noEmit
npm run build
```

---

## 🛠️ Tech Stack & Key Libraries

- **Frontend Core**: React 18, TypeScript, Vite 5, React Router v6
- **Styling**: Tailwind CSS 3.4, Lucide Icons, Framer Motion
- **SEO & Compliance**: Schema.org JSON-LD Structured Data, `sitemap.xml`, `robots.txt`, GA4
- **Scheduled Backend**: Node.js, Express.js, Prisma ORM, PostgreSQL (v15+)
- **Testing**: Playwright Headless Browser Automation, TypeScript Compiler

---

*Mission Gastrocare Institute of Gastroenterology & GI Surgery, "Doctor House", 19 Windward Business Park, Jetalpur Road, Vadodara, Gujarat 390020.*

