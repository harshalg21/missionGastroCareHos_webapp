# 🏥 MISSION GASTROCARE - ARCHITECTURE & IMPLEMENTATION PLAN
**Institute of Gastroenterology & GI Surgery, Vadodara**

---

## 📌 Executive Overview
This document specifies the technical architecture, backend infrastructure, AI integration strategy, database schema, and security framework for the **Mission Gastrocare** web application.

---

## 🏛️ 1. Backend Architecture (Node.js + Express.js API)

### 1.1 Architecture Diagram
```
┌────────────────────────────────────────────────────────┐
│               React SPA Frontend (Vite)                │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼ HTTPS / REST APIs
┌────────────────────────────────────────────────────────┐
│            Node.js + Express.js API Server             │
│  ├── Security Middleware (Helmet, CORS, Rate-Limit)    │
│  ├── Zod Input Validation & Sanitization               │
│  ├── AI Triage Engine (Google Gemini 1.5 API)          │
│  └── Prisma ORM Data Access Layer                      │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼ (TLS 1.3 Encrypted DB Wire)
┌────────────────────────────────────────────────────────┐
│            PostgreSQL / Supabase Database              │
└────────────────────────────────────────────────────────┘
```

### 1.2 REST API Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/appointments` | Book new patient appointment | No |
| `GET` | `/api/appointments` | Fetch appointments (Admin Panel) | Yes (JWT) |
| `POST` | `/api/ai/triage` | Execute AI Clinical Symptom Triage | No (Rate Limited) |
| `GET` | `/api/reviews` | Fetch verified patient reviews | No |
| `POST` | `/api/reviews` | Submit patient feedback & rating | No |
| `POST` | `/api/careers/apply` | Submit job application & resume | No |

---

## 🤖 2. AI Service Architecture (Clinical Triage & Patient Guide)

### 2.1 Technology Stack
- **Provider**: Google Gemini 1.5 Flash API (`@google/generative-ai`)
- **Key Characteristics**: Sub-second latency, structured JSON response mode, medical terminology comprehension.

### 2.2 Core AI Workflows
1. **Clinical Symptom Triage Engine**:
   - **Input**: Patient symptoms (e.g. *"Severe right upper abdomen pain after eating, accompanied by nausea"*).
   - **System Prompt**: Medical triage safety protocol constraining AI to NABH/clinical triage guidelines.
   - **Structured Output**:
     ```json
     {
       "urgency_level": "URGENT_OPD",
       "urgency_badge_color": "#D97706",
       "recommended_doctor": "Dr. Saurabh Dey (Senior Consultant GI & HPB Surgeon)",
       "specialty_department": "Hepato-Pancreato-Biliary (HPB) & Gallbladder",
       "triage_summary": "Symptoms suggest possible acute cholecystitis or gallstone colic.",
       "first_aid_guidelines": [
         "Avoid fatty or oily food immediately.",
         "Stay hydrated with plain water.",
         "Seek immediate emergency consultation if fever or jaundice develops."
       ]
     }
     ```
2. **Pre-Procedure AI Patient Guide**:
   - Answers patient queries regarding fasting hours (6-8 hrs before Endoscopy/ERCP), blood thinner pause protocols, and admission document checklists.

### 2.3 API Security & Isolation Rule
- The Gemini API key (`GEMINI_API_KEY`) resides **100% on the server (`.env`)**. No API keys are shipped in the React client JavaScript bundle.

---

## 🗄️ 3. Database Architecture & Schema Specification

### 3.1 Database Engine
- **Database**: PostgreSQL (hosted on Supabase or AWS RDS) with Prisma ORM / SQL.

### 3.2 Database Tables

#### Table: `appointments`
```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(15) NOT NULL,
  email VARCHAR(100) NOT NULL,
  doctor_name VARCHAR(100) NOT NULL,
  service_name VARCHAR(100) NOT NULL,
  appointment_date DATE NOT NULL,
  time_slot VARCHAR(30) DEFAULT 'Morning Slot',
  status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, CONFIRMED, CANCELLED, COMPLETED
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table: `patient_reviews`
```sql
CREATE TABLE patient_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name VARCHAR(100) NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  treatment_category VARCHAR(50) NOT NULL,
  review_text TEXT NOT NULL,
  verified_patient BOOLEAN DEFAULT TRUE,
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Table: `job_applications`
```sql
CREATE TABLE job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  applicant_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  position_applied VARCHAR(100) NOT NULL,
  experience_years VARCHAR(50) NOT NULL,
  resume_url VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🔒 4. Security & Compliance Architecture

### 4.1 Data Protection Standards
- **HTTPS & TLS 1.3**: Encryption in transit across all endpoints.
- **AES-256 Storage Encryption**: Sensitive patient mobile numbers & emails encrypted at rest.
- **CORS Whitelist**: API restricts incoming requests to authorized domain origins only.

### 4.2 Anti-Spam & Rate Limiting Controls
- `express-rate-limit` configuration:
  - **AI Endpoint (`/api/ai/triage`)**: Max 5 requests per 10 minutes per IP.
  - **Appointment Booking (`/api/appointments`)**: Max 10 submissions per hour per IP.
  - **General APIs**: Max 100 requests per 15 minutes per IP.

### 4.3 Input Sanitization
- All incoming payloads sanitized using `Zod` schemas to prevent SQL Injection, NoSQL Injection, and Cross-Site Scripting (XSS).

---

## 🗺️ 5. Implementation & Action Plan Roadmap

```
┌────────────────────────────────────────────────────────────────────────┐
│ Phase 1: Backend Infrastructure                                        │
│   • Initialize Node.js + Express.js API server inside /server          │
│   • Configure Helmet, CORS, Rate-Limiter & Body Parsers                │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Phase 2: Database Layer & Persistence                                  │
│   • Connect PostgreSQL / Supabase DB via Prisma ORM                    │
│   • Connect Frontend Booking, Review, & Career forms to live APIs      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Phase 3: AI Service Integration                                        │
│   • Implement secure Gemini 1.5 Flash API endpoint (/api/ai/triage)   │
│   • Connect React AI Triage Widget & Patient Prep Assistant            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Phase 4: Production Hardening & Launch                                 │
│   • Enforce SSL, rate limiting, and Zod input validation               │
│   • Run automated build & end-to-end integration tests                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

*Document generated for Mission Gastrocare Institute of Gastroenterology & GI Surgery.*
