# 🗄️ Database Architecture & Schema Specification — Mission Gastrocare

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Document Version: 1.0.0*

---

## 1. Database Overview & Technology Stack

- **Database Engine**: PostgreSQL (v15+)
- **Hosting**: Render PostgreSQL / Neon / Supabase
- **ORM**: Prisma ORM (`@prisma/client`)
- **Connection Mode**: SSL Required (`sslmode=require`)
- **Connection Pooling**: Supported via PgBouncer / Prisma Accelerate

---

## 2. Complete Prisma Schema Definition (`schema.prisma`)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  SUPER_ADMIN
  DOCTOR
  RECEPTIONIST
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  COMPLETED
  CANCELLED
}

enum ConsultType {
  IN_PERSON
  ONLINE
}

enum GalleryCategory {
  Infrastructure
  Surgery
  Academic
  News
}

// 1. Staff and Doctor Administrative Accounts
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  passwordHash String
  name         String
  role         Role      @default(DOCTOR)
  isActive     Boolean   @default(true)
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  doctorProfile Doctor?
  articles      Article[]

  @@map("users")
}

// 2. Doctor Profiles & Clinical Practice Settings
model Doctor {
  id             String    @id @default(uuid())
  userId         String    @unique
  user           User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  title          String    // e.g. "Senior Consultant GI Surgeon"
  qualification  String    // e.g. "MBBS, MS, DNB, FAIS"
  opdFee         Decimal   @db.Decimal(10, 2) @default(800.00)
  availableSlots Json      // Array of available time slots e.g. ["10:00", "11:30", "16:00"]
  clinicalPortal String?   // https://drjitendramistry.com/
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  appointments   Appointment[]

  @@map("doctors")
}

// 3. Patient OPD Appointments & Booking Queue
model Appointment {
  id           String            @id @default(uuid())
  bookingRef   String            @unique // e.g. "MGC-784291"
  patientName  String
  phone        String
  email        String?
  age          Int?
  gender       String?           // "Male" | "Female" | "Other"
  doctorId     String
  doctor       Doctor            @relation(fields: [doctorId], references: [id])
  opdDate      DateTime          @db.Date
  slotTime     String            // Canonical 24h format e.g. "10:00", "11:30", "16:00"
  consultType  ConsultType       @default(IN_PERSON)
  status       AppointmentStatus @default(PENDING)
  symptoms     String?           @db.Text
  feePaid      Decimal           @db.Decimal(10, 2)
  isEmergency  Boolean           @default(false)
  createdAt    DateTime          @default(now())
  updatedAt    DateTime          @updatedAt

  // Note: Unconditional unique constraint would permanently block cancelled slots from being re-booked.
  // In PostgreSQL migration, enforce active slot exclusivity via partial unique index:
  // CREATE UNIQUE INDEX "unique_active_slot_booking" ON "appointments" ("doctorId", "opdDate", "slotTime") WHERE "status" != 'CANCELLED';
  @@index([doctorId, opdDate, slotTime])
  @@index([opdDate, status])
  @@map("appointments")
}

// 4. Clinical Health Advisories & Blog Posts
model Article {
  id           String    @id @default(uuid())
  slug         String    @unique
  title        String
  summary      String    @db.Text
  content      String    @db.Text // Markdown formatting
  category     String    // e.g. "Gastroenterology", "Surgical Innovation", "Hepatology"
  readTime     String    @default("4 min read")
  authorId     String
  author       User      @relation(fields: [authorId], references: [id])
  views        Int       @default(0)
  isPublished  Boolean   @default(true)
  publishedAt  DateTime  @default(now())
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  @@index([category, isPublished])
  @@map("articles")
}

// 5. Scraped & Uploaded Hospital Photo Gallery
model GalleryImage {
  id          String          @id @default(uuid())
  title       String
  category    GalleryCategory @default(Infrastructure)
  description String          @db.Text
  imageUrl    String
  tags        String[]        // ["enteroscopy", "surgery", "ot", "icu"]
  isSensitive Boolean         @default(false) // Triggers Medical Discretion Blur Shield
  sortOrder   Int             @default(0)
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt

  @@index([category, isSensitive])
  @@map("gallery_images")
}

// 6. Patient Feedback & Verified Testimonials
model PatientReview {
  id          String    @id @default(uuid())
  patientName String
  rating      Int       @default(5) // 1 to 5
  specialty   String    // e.g. "ERCP Gallbladder Surgery"
  comment     String    @db.Text
  isVerified  Boolean   @default(false) // Requires clinic verification before display
  createdAt   DateTime  @default(now())

  @@map("patient_reviews")
}

// 7. Careers & Job Applications
model JobApplication {
  id          String    @id @default(uuid())
  fullName    String
  email       String
  phone       String
  position    String    // e.g. "Staff Nurse - ICU", "Endoscopy Technician"
  experience  String    // e.g. "3+ Years"
  resumeUrl   String?
  createdAt   DateTime  @default(now())

  @@map("job_applications")
}
```

---

## 3. Database Migration & Deployment Commands

```bash
# Generate Prisma Client
npx prisma generate

# Apply Schema directly in local development prototyping
npx prisma db push

# Create and apply a tracked SQL migration in development
npx prisma migrate dev --name init_gastrocare_schema

# Apply existing migrations safely in production CI/CD (Never run migrate dev in prod)
npx prisma migrate deploy

# Open Prisma Studio web dashboard
npx prisma studio
```

---

## 4. Key Performance & Integrity Constraints

1. **Slot Conflict Locking & Cancellation Reopening**:
   - Instead of an unconditional unique constraint that locks slots even after cancellation, production PostgreSQL uses a **Partial Unique Index**:
     ```sql
     CREATE UNIQUE INDEX "unique_active_slot_booking" 
     ON "appointments" ("doctorId", "opdDate", "slotTime") 
     WHERE "status" != 'CANCELLED';
     ```
   - This guarantees that no two patients can hold the same active slot, while cancelled slots automatically re-open for new patient bookings.
2. **Canonical Slot Format**:
   - `slotTime` is strictly stored in 24h canonical format (`"10:00"`, `"11:30"`) to prevent case/spacing mismatches (`10:00 AM` vs `10:00 am`).
3. **Medical Discretion Index**:
   - `@@index([category, isSensitive])` on `GalleryImage` optimizes fast queries when separating surgical images from infrastructure tours.
4. **Optimized Search Indexing**:
   - Standard GIN indexes can be applied to `tags` array on `gallery_images` for sub-millisecond keyword lookups (`#enteroscopy`, `#ICU`).

