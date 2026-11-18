# 🔌 REST API Specification & Contract — Mission Gastrocare

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Document Version: 1.0.0 | Base Path: `/api/v1`*

---

## 1. Global Standards & Envelope Formats

### 1.1 Base URL
- **Local**: `http://localhost:5000/api/v1`
- **Production**: `https://gastrocare-api.onrender.com/api/v1`

### 1.2 Standard Success Response Envelope
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "timestamp": "2026-11-10T08:30:00.000Z"
}
```

### 1.3 Standard Error Response Envelope
```json
{
  "success": false,
  "error": {
    "code": "SLOT_ALREADY_BOOKED",
    "message": "The selected time slot (10:00 AM) is no longer available. Please select another slot.",
    "details": []
  },
  "timestamp": "2026-11-10T08:30:00.000Z"
}
```

---

## 2. API Endpoint Catalog

### 2.1 Authentication Endpoints

#### `POST /api/v1/auth/login`
- **Description**: Doctor / Admin Portal login.
- **Request Body**:
  ```json
  {
    "email": "dr.mistry@missiongastrocare.com",
    "password": "SecurePassword123!",
    "role": "SUPER_ADMIN"
  }
  ```
- **Response**: Sets `HttpOnly` secure cookie `mgc_jwt` and returns user profile.

#### `POST /api/v1/auth/logout`
- **Description**: Clears session cookie and invalidates token.

#### `GET /api/v1/auth/me`
- **Description**: Checks current logged-in doctor session.

---

### 2.2 OPD Appointment Endpoints

#### `POST /api/v1/appointments/book`
- **Description**: Creates a new patient OPD appointment slot.
- **Rate Limit**: Max 10 submissions per hour per IP.
- **Request Body**:
  ```json
  {
    "patientName": "Ramesh Patel",
    "phone": "+91 98250 12345",
    "email": "ramesh.patel@example.com",
    "doctorId": "doc-uuid-dr-mistry",
    "opdDate": "2026-11-15",
    "slotTime": "10:00 AM",
    "consultType": "IN_PERSON",
    "age": 48,
    "gender": "Male",
    "symptoms": "Acid reflux, upper abdominal burning for 2 weeks",
    "honeypot": "" 
  }
  ```
- **Security Check**: If `honeypot` is filled, the request is silently dropped as bot spam.
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "bookingRef": "MGC-849201",
      "doctorName": "Dr. Jitendra Mistry",
      "opdDate": "2026-11-15",
      "slotTime": "10:00 AM",
      "status": "CONFIRMED",
      "consultationFee": "₹800.00"
    }
  }
  ```

#### `GET /api/v1/appointments/available-slots`
- **Description**: Returns open time slots for a doctor on a specific date.
- **Query Params**: `?doctorId=...&date=2026-11-15`
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "date": "2026-11-15",
      "availableSlots": ["11:30 AM", "01:00 PM", "04:00 PM", "05:30 PM"],
      "bookedSlots": ["10:00 AM"]
    }
  }
  ```

#### `GET /api/v1/admin/appointments` (Auth Required)
- **Description**: Fetches queue of appointments for Doctor Admin Portal.
- **Allowed Roles**: `SUPER_ADMIN`, `DOCTOR`, `RECEPTIONIST`.
- **Authorization Scope**:
  - `SUPER_ADMIN` and `RECEPTIONIST`: Returns appointments across all doctors.
  - `DOCTOR`: Scoped strictly to `where: { doctorId: req.user.doctorId }` to prevent cross-doctor patient data disclosure.
- **Query Params**: `?status=PENDING&date=2026-11-15`

---

### 2.3 AI Clinical Triage Endpoints

#### `POST /api/v1/ai/triage`
- **Description**: Clinical symptom urgency classification via Gemini 1.5 Flash.
- **Rate Limit**: Max 5 requests per 10 minutes per IP.
- **Request Body**:
  ```json
  {
    "symptoms": "Severe pain in right upper abdomen after fatty meal, mild nausea",
    "duration": "2 days"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "urgencyLevel": "URGENT_OPD",
      "urgencyBadgeColor": "#D97706",
      "recommendedSpecialist": "Dr. Saurabh Dey (Consultant GI & HPB Surgeon)",
      "department": "Gallbladder & Hepato-Pancreato-Biliary",
      "triageSummary": "Symptoms suggest possible acute cholecystitis or biliary colic.",
      "firstAidGuidelines": [
        "Avoid heavy, fatty, or fried food immediately.",
        "Maintain plain water hydration.",
        "Proceed immediately to 24x7 ER if fever or yellowing of eyes (jaundice) develops."
      ],
      "disclaimer": "This is an automated preliminary guidance tool, not a definitive clinical diagnosis. Please consult a qualified gastroenterologist."
    }
  }
  ```

---

### 2.4 Health Advisories & Blog Endpoints

#### `GET /api/v1/articles`
- **Description**: Retrieves published articles with category filter and search.
- **Query Params**: `?category=Gastroenterology&search=gerd`

#### `POST /api/v1/admin/articles` (Auth Required)
- **Description**: Creates and publishes a new health advisory or press release.
- **Request Body**:
  ```json
  {
    "title": "Monsoon Acid Reflux & Hydration Guide",
    "summary": "Doctor's preventive tips on avoiding GERD during rainy season.",
    "content": "Full markdown content...",
    "category": "Gastroenterology",
    "readTime": "4 min read"
  }
  ```

---

### 2.5 Campus & Surgical Gallery Endpoints

#### `GET /api/v1/gallery`
- **Description**: Fetches gallery images with category filter and live keyword search.
- **Query Params**: `?category=Surgery&search=enteroscopy`
- **Response**: Array of images with `isSensitive` flags for the Medical Discretion Blur Shield.

---

### 2.6 Reviews & Careers

- `GET /api/v1/reviews`: Retrieves verified patient Google reviews.
- `POST /api/v1/careers/apply`: Accepts job applications with resume attachment upload.

