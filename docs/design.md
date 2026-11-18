# 🎨 UI/UX Design System & Guidelines — Mission Gastrocare

**Institute of Gastroenterology & GI Surgery, Vadodara**  
*Document Version: 1.0.0*

---

## 1. Brand Identity & Color Philosophy

Mission Gastrocare uses an **Executive Medical Emerald** color system designed to evoke surgical precision, medical authority, cleanliness, and reassuring calm.

### 1.1 Color Palette Tokens

| Token Name | Hex Code | Tailwind Utility | Primary Usage |
|---|---|---|---|
| **Primary Brand Emerald** | `#1D5E54` | `bg-[#1D5E54]`, `text-[#1D5E54]` | Main brand color, active navigation tabs, primary CTA buttons |
| **Deep Forest Emerald** | `#164E43` | `from-[#164E43]`, `hover:bg-[#164E43]` | Header gradients, card headers, hover states |
| **Executive Dark Emerald** | `#0B2E28` / `#0A1F1C` | `bg-[#0B2E28]`, `bg-[#0A1F1C]` | 2-State dark hover transform, 404 Error Card, modal backdrops |
| **Soft Medical Cyan Canvas** | `#BFD4D9` | `bg-[#BFD4D9]` | Global page background canvas (soothing non-glare clinical backdrop) |
| **Pastel Mint Surface** | `#E1F2EE` | `bg-[#E1F2EE]` | Category filter chips, badges, pill tags, subtle card backgrounds |
| **Mint Border Accent** | `#BDE3DB` / `#A9C3C9` | `border-[#BDE3DB]`, `border-[#A9C3C9]` | Clean card outlines, modal dividers, table borders |
| **Vibrant Neon Mint** | `#5EEAD4` | `text-[#5EEAD4]`, `text-emerald-300` | High-contrast highlights in dark modes, active status indicators |
| **Deep Slate Ink** | `#0F172A` / `#1E293B` | `text-[#0F172A]`, `text-[#1E293B]` | Primary headings, body copy (maximum WCAG readability) |
| **Emergency Rose Accent** | `#E11D48` / `#F43F5E` | `bg-rose-600`, `text-rose-500` | 24x7 ER hotlines, sensitive surgery tags, urgent medical callouts |

---

## 2. Typography Hierarchy

The web app strictly utilizes **Inter** via Google Fonts for clean legibility across small medical details, tables, and mobile viewports.

- **Display Headings (H1)**: `text-3xl sm:text-5xl font-black tracking-tight leading-tight`
- **Section Headings (H2)**: `text-2xl sm:text-3xl font-extrabold text-[#0F172A]`
- **Subheadings (H3)**: `text-lg sm:text-xl font-bold text-[#0F172A]`
- **Body Text**: `text-xs sm:text-sm text-[#475569] font-medium leading-relaxed`
- **Badges & Micro-Copy**: `text-[10px] sm:text-xs font-extrabold uppercase tracking-wider`

---

## 3. Signature UI Components & UX Patterns

### 3.1 Medical Discretion Sensitive Content Blur Shield
- **Problem**: Intraoperative surgical organ photographs (enteroscopy, bowel resections, cysts) cause anxiety or discomfort for everyday patients while remaining critical clinical proof for doctors.
- **UX Solution**:
  1. Default State: Photos in `Surgery` category are automatically softened with `filter blur-xl scale-110 brightness-50`.
  2. Overlay: A semi-transparent dark shield (`bg-[#061815]/75`) with a `ShieldAlert` badge and warning text: *"Sensitive Clinical Photo — Contains intraoperative surgical organ imagery"*.
  3. Interaction: A prominent **"Tap to Reveal Photo"** button unblurs the specific card. An active eye-toggle allows re-blurring at any time.
  4. Global Control: A master toggle bar at the top of the gallery allows the user to switch protection between **ACTIVE (Blur ON)** and **OFF (Unblurred)**.

### 3.2 2-State Interactive Dark Hover Transform
Cards across **Google Reviews**, **Hospital Facilities**, **Google Maps Location**, and **Patient FAQs** feature a subtle, delightful 2-state transformation:
- **Default State**: Crisp white background (`bg-white`), slate border (`border-[#A9C3C9]`), dark ink text.
- **Hover State**: Smooth 500ms transition into Executive Dark Emerald (`hover:bg-[#0B2E28] hover:border-[#3A9D8F]`), with text and badge colors automatically adapting to high-contrast emerald and white.

### 3.3 3D Doctor Profile Cards
- **Front Side**: High-res doctor portrait, executive name, qualifications (MBBS, MS, DNB), consultation timings, and quick appointment trigger.
- **Back Side**: Procedural specialties, career accomplishments, fellowship credentials, and a branded button linking to **"Dr. Mistry's Official Clinical Portal"** (`target="_blank"` with `rel="noopener noreferrer"`).

### 3.4 Floating Assistance Action Button (FAB)
- Fixed at bottom-right viewport (`z-50`).
- Provides 1-tap quick assistance:
  - 📞 **24x7 Emergency Room Hotline**
  - 💬 **WhatsApp OPD Consultation Booking**
  - 🤖 **Interactive AI Health Chat Widget**

### 3.5 Executive 404 Error Screen
- Distinct from normal pages to prevent user confusion.
- Styled as a dark card (`#0A1F1C`) with glowing watermark `404` typography, an `AlertTriangle` warning badge, a clean explanation, and a single prominent **"← Return to Home Page"** CTA button.

---

## 4. Accessibility & Responsive Breakpoints

- **WCAG 2.1 AA Compliance**: All text pairings maintain a contrast ratio $> 4.5:1$.
- **Touch Target Sizes**: All interactive buttons, chips, and links maintain a minimum touch target of $44 \times 44 \text{ px}$ on mobile screens.
- **Breakpoints**:
  - Mobile: `< 640px` (single column, full-width inputs, collapsible menus)
  - Tablet: `640px - 1024px` (2-column grids, compact action bars)
  - Desktop: `> 1024px` (multi-column layouts, max container width `max-w-7xl` centered)

