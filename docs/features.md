# 🚀 Feature Catalog & Specifications — Mission Gastrocare

**Comprehensive Functional Breakdown & Acceptance Criteria**  
*Document Version: 1.0.0*

---

## 1. Feature Breakdown Matrix

| # | Feature Name | Component / Page | Status | Description |
|---|---|---|---|---|
| 1 | **Medical Discretion Blur Shield** | `src/pages/Media.tsx` | ✅ Completed | Soft Gaussian blur (`blur-xl`) on intraoperative organ images with one-tap reveal toggle and master protection switch. |
| 2 | **Categorized Campus Gallery** | `src/pages/Media.tsx` | ✅ Completed | 27 authentic scraped photos across Infrastructure, Surgery, Academic, News with instant keyword search (`#enteroscopy`). |
| 3 | **3D Doctor Interactive Flip Cards** | `src/components/DoctorCard.tsx` | ✅ Completed | Flippable card showing clinical credentials on front and fellowship details + Dr. Mistry personal portal link on back with full WCAG keyboard accessibility. |
| 4 | **Doctor Personal Clinical Portal** | `src/pages/About.tsx`, `DoctorCard.tsx` | ✅ Completed | Branded redirection buttons linking to `https://drjitendramistry.com/index.html` with `rel="noopener noreferrer"`. |
| 5 | **Online OPD Appointment Form** | `src/components/AppointmentForm.tsx` | ✅ Completed | 3-step scheduling wizard with real-time slot selection, doctor fee display, and confirmation ticket generation. |
| 6 | **Anti-Spam Honeypot Bot Trap** | `src/components/AppointmentForm.tsx` | ✅ Completed | Invisible form field that catches automated bots and silently drops spam submissions without user friction. |
| 7 | **Executive Doctor Admin Portal** | `src/pages/AdminPortal.tsx` | ✅ Completed | Role-protected dashboard for publishing clinical articles, broadcasting newsletters, and Facebook page sync. |
| 8 | **Floating Assistance Widget (FAB)** | `src/components/AIChatWidget.tsx` | ✅ Completed | Multi-action floating button with 24x7 ER hotline dialer, WhatsApp appointment booking, and AI triage chat. |
| 9 | **2-State Dark Mode Hover Cards** | `ReviewSystem.tsx`, `Facilities.tsx` | ✅ Completed | Cards transform smoothly from white to signature Executive Dark Emerald (`#0B2E28`) on cursor hover. |
| 10 | **Executive 404 Error Screen** | `src/pages/NotFound.tsx` | ✅ Completed | High-contrast dark card UI with glowing watermark `404` and single "Return to Home Page" action. |
| 11 | **Schema.org MedicalHospital SEO** | `index.html` | ✅ Completed | JSON-LD structured data providing rich snippets on Google Search for Dr. Mistry and hospital specialties. |
| 12 | **Legal Compliance Pages** | `PrivacyPolicy.tsx`, `TermsAndConditions.tsx` | ✅ Completed | Comprehensive clinical data privacy policies, EMR security standards, and emergency disclaimers. |
| 13 | **Google Maps Direction Integration** | `GoogleMapLocation.tsx` | ✅ Completed | Direct GPS navigation to "Doctor House, 19 Windward Business Park, Jetalpur Road, Vadodara". |
| 14 | **Real-Time Slot Conflict Locking** | Scheduled Backend | 📋 Phase 4 | PostgreSQL Partial Unique Index (`WHERE status != 'CANCELLED'`) preventing double-booking while reopening cancelled slots. |
| 15 | **Automated WhatsApp Booking Tickets** | Scheduled Backend | 📋 Phase 5 | Instant WhatsApp message delivery with appointment reference number and hospital navigation link. |
| 16 | **AI Clinical Symptom Triage** | `AITriage.tsx` / Backend | 📋 Phase 5 | Powered by Google Gemini 1.5 Flash API with strict safety prompts and non-diagnostic disclaimers. |
| 17 | **Route-Level Code Splitting & Error Boundary** | `src/App.tsx` | ✅ Completed | 15 code-split bundles via `React.lazy()` + `<Suspense>`, protected by `RouteErrorBoundary` against network drop crashes. |
| 18 | **CodeRabbit CI/CD Quality Compliance** | `.coderabbit.yaml` | ✅ Completed | Automated static analysis path filters and architectural review guards configured. |

---

## 2. In-Depth Acceptance Criteria for Key Features

### 2.1 Medical Discretion Blur Shield
- **Given** a patient navigates to the Hospital Campus Gallery (`/media`).
- **When** the page loads, all images categorized under `Surgery` MUST be blurred with `blur-xl` and display a `ShieldAlert` overlay.
- **When** the user clicks **"Tap to Reveal Photo"**, only that specific card unblurs.
- **When** the user clicks the top **"Protection: ACTIVE"** master switch, all photos unblur simultaneously.
- **When** an image is opened in the Lightbox modal, the sensitive warning overlay must also protect the full-size view until explicitly confirmed.

### 2.2 Live Gallery Keyword Search
- **Given** the user is viewing the Campus Gallery.
- **When** the user types `"enteroscopy"` in the search input.
- **Then** only intraoperative enteroscopy surgical cards must be displayed.
- **When** the search input is cleared.
- **Then** all 27 photos must reappear instantly without a page reload.

### 2.3 Doctor Personal Clinical Portal Redirection
- **Given** a visitor reads Dr. Jitendra Mistry's biography on the `/about` page or flips his card on `/doctors`.
- **When** they click **"Dr. Mistry's Official Clinical Portal"**.
- **Then** a new browser tab must open pointing to `https://drjitendramistry.com/index.html`.
- **And** the link must contain `target="_blank"` and `rel="noopener noreferrer"` for security.

