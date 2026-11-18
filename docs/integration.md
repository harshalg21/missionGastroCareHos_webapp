# 🔗 Third-Party Integrations & External Services — Mission Gastrocare

**Technical Specifications for External APIs, Gateways, and Links**  
*Document Version: 1.0.0*

---

## 1. Summary of External Services

| Service | Category | Integration Point | Environment |
|---|---|---|---|
| **Google Analytics 4 (GA4)** | Analytics & Funnel Tracking | `index.html` via `gtag.js` | Frontend Client |
| **Google Maps Embed & Directions** | Location & Geocoding | `src/components/GoogleMapLocation.tsx` | Frontend Client |
| **Dr. Mistry's Clinical Portal** | External Healthcare Website | `About.tsx`, `DoctorCard.tsx` | External Redirection |
| **Hospital Facebook Page** | Social Media & Broadcasting | `AdminPortal.tsx`, `Footer.tsx` | External Link / Graph API |
| **Google Gemini 1.5 Flash API** | Clinical Symptom Triage AI | `server/src/services/ai.service.ts` | Backend Server |
| **WhatsApp Business / Twilio** | Automated Booking Notifications | `server/src/services/sms.service.ts` | Backend Server |
| **AWS S3 or Cloudinary** | Medical Asset & Photo Storage | `server/src/services/storage.service.ts` | Backend Server |

---

## 2. Detailed Integration Specifications

### 2.1 Google Analytics 4 (GA4)
- **Tag Implementation (`index.html`)**:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-MGCGA4TAG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-MGCGA4TAG');
  </script>
  ```
- **Custom Events to Track**:
  - `opd_appointment_started` (when user selects doctor & slot)
  - `opd_appointment_completed` (when booking confirmation renders)
  - `emergency_call_clicked` (when user dials `+91 99253 29142`)
  - `clinical_portal_visited` (when user clicks Dr. Mistry’s personal site)

### 2.2 Google Maps Navigation API
- **Location Target**:
  `"Doctor house, 19 Windward Business Park, Jetalpur Road, Anandnagar, Haripura, Vadodara, Gujarat 390020"`
- **URL Pattern**:
  ```text
  https://www.google.com/maps/search/?api=1&query=Doctor+house+19+Windward+Business+Park+Jetalpur+Road+Anandnagar+Haripura+Vadodara+Gujarat+390020
  ```
- **Coordinates**: Latitude `22.3072° N`, Longitude `73.1812° E`

### 2.3 Dr. Jitendra Mistry's Personal Clinical Portal
- **Target URL**: `https://drjitendramistry.com/index.html`
- **Branding**: *"Dr. Mistry's Official Clinical Portal"*
- **Security Rule**: Must use `target="_blank"` and `rel="noopener noreferrer"`.

### 2.4 Google Gemini 1.5 Flash API (Clinical Triage Engine)
- **SDK**: `@google/generative-ai`
- **Security Rule**: The `GEMINI_API_KEY` is maintained strictly in backend server environment variables (`.env`).
- **Prompt Engineering Guardrails**:
  - Constrained by strict NABH clinical guidelines.
  - Generates structured JSON urgency levels: `EMERGENCY_ER`, `URGENT_OPD`, or `ROUTINE_OPD`.
  - Always appends the non-diagnostic disclaimer.

### 2.5 Automated WhatsApp Messaging Gateway
- **Provider**: Twilio API for WhatsApp / Interakt WhatsApp Business API.
- **Trigger**: Fired immediately upon successful booking insert in PostgreSQL.
- **Message Template**:
  ```text
  Namaste {patientName},
  Your OPD Consultation with {doctorName} at Mission Gastrocare has been scheduled for {opdDate} at {slotTime}.
  Booking Reference: {bookingRef}
  Hospital Address: "Doctor House", 19 Windward Park, Jetalpur Road, Vadodara.
  Directions: https://www.google.com/maps/search/?api=1&query=Doctor+house+19+Windward+Business+Park+Jetalpur+Road+Anandnagar+Haripura+Vadodara+Gujarat+390020
  Emergency: +91 99253 29142
  ```

### 2.6 Notification Delivery Resilience
If the WhatsApp delivery provider is temporarily unreachable during booking creation, the transaction must NOT fail or rollback the patient's appointment booking. Instead:
- Appointment record is saved with `notificationStatus: "PENDING"`.
- A resilient background retry worker dispatches pending notifications with exponential backoff.

