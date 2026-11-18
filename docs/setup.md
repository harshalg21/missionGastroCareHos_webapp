# ⚙️ Developer Setup & Environment Guide — Mission Gastrocare

**Local Development, Environment Variables, and Deployment Guide**  
*Document Version: 1.0.0*

---

## 1. System Requirements

- **Operating System**: Windows 10/11, macOS, or Linux
- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm` (v10+) or `pnpm`
- **Git**: Installed and configured
- **Database**: PostgreSQL (v15+) for backend phases

---

## 2. Frontend Local Setup

### 2.1 Repository Setup
```bash
git clone https://github.com/harshalg21/missionGastroCareHos_webapp.git
cd missionGastroCareHos_webapp
npm install
```

### 2.2 Running Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 2.3 Verification Commands
```bash
# TypeScript strict check (must report 0 errors)
npx tsc --noEmit

# Production bundle build
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Backend & Database Setup (For Backend Phase)

### 3.1 Initializing Server
```bash
cd server
npm install
```

### 3.2 Environment Variables (`server/.env`)
Create `server/.env` based on the following template:

```env
# Server Port
PORT=5000
NODE_ENV=development

# PostgreSQL Connection String (Render / Neon / Local)
DATABASE_URL="postgresql://gastrocare_user:password123@localhost:5432/gastrocare_db?schema=public&sslmode=prefer"

# JWT Secret Key for Doctor Admin Portal (Replace with randomly generated secret in production: `openssl rand -hex 32`)
JWT_SECRET="dev-only-secret-replace-with-openssl-rand-hex-32-in-prod"
JWT_EXPIRES_IN="7d"

# Google Gemini 1.5 API Key for Clinical Triage
GEMINI_API_KEY="AIzaSyYourGeminiApiKeyHere"

# Frontend Origin for CORS Whitelist
CLIENT_ORIGIN="http://localhost:5173"

# WhatsApp / Twilio Gateway (Optional in Phase 1)
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_WHATSAPP_NUMBER=""
```

### 3.3 Database Migration & Seeding
```bash
# Push schema to PostgreSQL database
npx prisma db push

# Open Prisma Studio web dashboard
npx prisma studio
```

---

## 4. Render Cloud Deployment Configuration

### 4.1 Static Frontend Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Rewrites**:
  - `public/_redirects` ensures all paths return `/index.html 200`.
  - `render.yaml` defines rewrite rules.
  - `public/404.html` acts as a static fallback.

### 4.2 Backend Web Service Deployment
- **Environment**: `Node`
- **Build Command**: `npm install && npx prisma generate && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**: Add `DATABASE_URL`, `JWT_SECRET`, `GEMINI_API_KEY`, and `CLIENT_ORIGIN`.

