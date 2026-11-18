# 🔒 Authentication & Authorization Architecture — Mission Gastrocare

**Executive Doctor Admin Security & Role-Based Access Control (RBAC)**  
*Document Version: 1.0.0*

---

## 1. Authentication Overview

The Mission Gastrocare security architecture protects the **Doctor Admin Portal (`/admin`)** and future clinical management endpoints against unauthorized access, credential stuffing, and session hijacking.

### Key Principles
1. **Zero Client Secrets**: No database credentials, JWT private keys, or third-party API tokens are ever packaged into the client-side JavaScript bundle.
2. **HttpOnly Cookie Storage**: JWT tokens are stored exclusively in `HttpOnly`, `SameSite=Strict`, `Secure` cookies, preventing cross-site scripting (XSS) token theft.
3. **Bcrypt Password Encryption**: All staff passwords are salted and hashed using Bcrypt with 12 salt rounds.

---

## 2. Role-Based Access Control (RBAC) Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                   SUPER_ADMIN                          │
│  Full privileges: publish blogs, manage all accounts,  │
│  access appointment queues, export clinical reports    │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                     DOCTOR                             │
│  Manage own schedule, view assigned patient queues,    │
│  publish health advisories, issue payment receipts     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                  RECEPTIONIST                          │
│  View daily OPD queue, check-in arriving patients,     │
│  reschedule slots, mark consultations as completed     │
└────────────────────────────────────────────────────────┘
```

---

## 3. Token Architecture & Lifecycle

### 3.1 Token Payload (JWT Claims)
```json
{
  "sub": "usr-uuid-dr-mistry",
  "email": "dr.mistry@missiongastrocare.com",
  "name": "Dr. Jitendra Mistry",
  "role": "SUPER_ADMIN",
  "iat": 1794300000,
  "exp": 1794904800
}
```

### 3.2 Cookie Configuration & Cross-Domain Deployment Considerations
```typescript
const isProductionCustomDomain = process.env.NODE_ENV === 'production' && !process.env.IS_RENDER_STAGING;

res.cookie('mgc_jwt', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  // On Render staging (app.onrender.com vs api.onrender.com), onrender.com is in Mozilla's Public Suffix List (PSL).
  // Cross-subdomain cookies require sameSite: 'none' and secure: true.
  // When custom apex domain (missiongastrocare.com) is bound, lock down to sameSite: 'strict' or 'lax'.
  sameSite: isProductionCustomDomain ? 'strict' : 'none',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});
```

### 3.3 Refresh Token Storage (Deterministic Hashing)
- Never store raw refresh tokens or use non-deterministic salted bcrypt hashes in the database.
- Store high-entropy tokens as SHA-256 digests (`crypto.createHash('sha256').update(token).digest('hex')`) so lookup and revocation queries (`WHERE token_hash = ?`) remain fast, indexed, and deterministic.
- Allow logout endpoints to revoke refresh tokens even if the access token has already expired.

---

## 4. Middleware Implementation (`auth.middleware.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const token = req.cookies.mgc_jwt;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Authentication required. Please log in.' }
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
    req.user = { id: decoded.sub, email: decoded.email, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: { code: 'INVALID_TOKEN', message: 'Session expired or invalid. Please log in again.' }
    });
  }
}

export function requireRole(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: { code: 'FORBIDDEN', message: 'Access denied. Insufficient clinical privileges.' }
      });
    }
    next();
  };
}
```

---

## 5. Frontend Route Protection Pattern

In `src/App.tsx` and `src/pages/AdminPortal.tsx`:
- Before rendering admin tabs, the client calls `GET /api/v1/auth/me`.
- If unauthenticated, the portal renders the **Protected Executive Admin Portal** login form.
- Upon successful authentication, the full management dashboard (Queue, Articles, Facebook broadcast) is unlocked.

