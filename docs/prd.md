# 📋 Product Requirements Document (PRD) — Mission Gastrocare

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Document Version: 1.0.0 | Status: Approved for Production & Backend Rollout*

---

## 1. Executive Summary & Vision

**Mission Gastrocare** is Vadodara’s premier super-specialty hospital dedicated exclusively to Gastroenterology, Hepato-Pancreato-Biliary (HPB) Surgery, Bariatric & Metabolic Surgery, GI Oncology, and Advanced Therapeutic Endoscopy & ERCP.

### Vision
Deliver an executive-grade, patient-friendly, and clinically accurate digital healthcare platform that:
1. Connects patients directly with expert specialists (**Dr. Jitendra Mistry**, **Dr. Saurabh Dey**, and team).
2. Simplifies OPD appointment scheduling with immediate confirmation and zero friction.
3. Provides 24x7 emergency GI guidance, AI-assisted symptom triage, and procedure preparation.
4. Maintains patient comfort with ethical medical discretion protection on intraoperative surgical photography.
5. Provides an integrated Doctor Admin Portal for publishing clinical advisories and managing patient queues.

---

## 2. Target Personas & User Journeys

### Persona A: The Elective Patient / Caregiver
- **Profile**: Experiencing chronic symptoms (acidity, GERD, abdominal pain, fatty liver, gallstones).
- **Goal**: Research hospital credentials, understand procedures, review doctor backgrounds, and book an OPD consultation.
- **Pain Point**: Confusing medical jargon, long hospital wait queues, anxiety about surgical procedures.

### Persona B: The Acute Emergency Patient
- **Profile**: Acute severe abdominal pain, GI bleeding (hematemesis/melena), acute jaundice, or pancreatitis.
- **Goal**: Instant access to emergency hotline, hospital address, and immediate triage.
- **Pain Point**: Time is critical; needs single-tap emergency calling without navigating multiple pages.

### Persona C: The Specialist Doctor (Dr. Jitendra Mistry & Senior Faculty)
- **Profile**: Director & Senior Consultant GI Surgeon.
- **Goal**: Review booked appointments, publish clinical articles and preventive health advisories, broadcast newsletters, and showcase authentic hospital infrastructure and academic achievements.
- **Pain Point**: Lacks simple, secure CMS tools; external web portals are often disconnected from hospital workflows.

### Persona D: Hospital Reception & Nursing Staff
- **Profile**: Administrative desk handling patient admissions and schedules.
- **Goal**: Monitor real-time booking queue, avoid slot conflicts, and issue printed payment receipts.

---

## 3. Core Functional Requirements

### 3.1 Public Portal & Information Architecture
- **Home (`/`)**: Hero banner, OPD Quick Booking bar, Doctor overview cards, core specialties, emergency callouts, Google Reviews, hospital location, and insurance partners.
- **About (`/about`)**: Hospital philosophy, NABH quality standards, and Dr. Jitendra Mistry’s biopic card with direct link to his official clinical portal (`http://drjitendramistry.com/index.html`).
- **Services (`/services`)**: In-depth procedure catalogs across Laparoscopy, ERCP, Liver/HPB, GI Oncology, and Bariatrics.
- **Doctors (`/doctors`)**: 3D interactive flip cards displaying qualifications, OPD timings, specialties, and personal portal links.
- **Facilities (`/facilities`)**: 4K UHD Modular OTs, 24x7 Surgical ICU, Day-care Endoscopy suite, and inpatient amenities.
- **Media & Health Hub (`/media`)**:
  - Doctor's Health Advisories & Blog posts.
  - Press Coverage & News clippings.
  - Categorized Campus & Clinical Gallery with instant keyword search (`enteroscopy`, `ICU`, `OT`).
  - **Medical Discretion Blur Shield**: Soft blur on intraoperative surgical images with one-tap reveal toggle to preserve patient comfort.
- **Contact Us (`/contact`)**: Interactive Google Maps navigation, emergency contact numbers, and OPD consultation hours.
- **Careers (`/careers`)**: Job openings and resume submission.

### 3.2 Clinical Tools & Patient Utilities
- **Online OPD Booking (`/book-appointment`)**:
  - 3-step wizard: Doctor & Slot Selection $\rightarrow$ Patient Details $\rightarrow$ Confirmation.
  - Real-time slot locking to prevent double-booking.
  - Hidden honeypot anti-spam protection against automated bots.
- **AI Symptom Triage (`/ai-triage`)**:
  - Symptom questionnaire assessing urgency (Emergency, Urgent OPD, Routine OPD).
  - Pre-procedure preparation guides (fasting rules, medication instructions).
- **Doctor Admin Portal (`/admin`)**:
  - Role-based secure access for Doctor/Super Admin.
  - Article creator with multi-channel publishing (Website, Blog, Facebook).
  - Appointment queue inspection and official receipt generation.

---

## 4. Non-Functional Requirements

| Metric | Requirement | Target Standard |
|---|---|---|
| **Performance** | First Contentful Paint (FCP) < 1.2s, Full Load < 2.5s | Lighthouse Score $\ge 90$ |
| **Availability** | High availability with zero cold-crash on static assets | 99.9% uptime on Render |
| **Security** | HTTPS/TLS 1.3, HttpOnly JWT cookies, XSS/CSRF protection | DISHA & HIPAA patient confidentiality |
| **Accessibility** | High contrast ratio (`#0F172A` on `#E1F2EE`), keyboard navigable | WCAG 2.1 AA |
| **Responsiveness** | Seamless rendering on all viewports (mobile, tablet, desktop) | 100% responsive fluid grid |
| **SEO** | Semantic HTML5, Schema.org MedicalHospital JSON-LD, sitemap, robots.txt | Rank #1 for GI queries in Vadodara |

---

## 5. Success Metrics & KPIs
1. **OPD Booking Conversion**: >15% of visitors to `/book-appointment` completing booking.
2. **Emergency Access Speed**: 1-click dial to `+91 99253 29142` within 2 seconds of landing on any page.
3. **Zero Patient Discomfort**: Zero complaints regarding graphic intraoperative surgical photos due to the Medical Discretion Blur Shield.
4. **Zero Booking Conflicts**: 100% prevention of duplicate slot allocations via real-time slot locking.

