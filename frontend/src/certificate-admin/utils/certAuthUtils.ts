// ─────────────────────────────────────────────────────────────
// Certificate Admin — Security & Auth Utilities
// Password hashing, session management, input sanitization
// ─────────────────────────────────────────────────────────────

const SESSION_KEY = 'cert_admin_session';
const SESSION_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours
const ADMIN_STORE_KEY = 'cert_admin_credentials';

export interface AdminSession {
  adminId: string;
  email: string;
  createdAt: number;
  expiresAt: number;
}

interface StoredAdmin {
  email: string;
  passwordHash: string;
}

// ── Password Hashing (SHA-256 via Web Crypto API) ──

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ── Input Sanitization (SQL Injection Protection) ──

const SQL_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|EXEC|EXECUTE|UNION|TRUNCATE|GRANT|REVOKE)\b)/gi,
  /(--|#|\/\*|\*\/)/g,           // SQL comments
  /(['";])/g,                     // Dangerous characters
  /(\bOR\b\s+\b\d+\b\s*=\s*\b\d+\b)/gi, // OR 1=1 patterns
  /(\bAND\b\s+\b\d+\b\s*=\s*\b\d+\b)/gi, // AND 1=1 patterns
];

export function sanitizeInput(input: string): string {
  let sanitized = input.trim();
  for (const pattern of SQL_PATTERNS) {
    sanitized = sanitized.replace(pattern, '');
  }
  return sanitized;
}

// ── Session Management ──

export function createSession(email: string): AdminSession {
  const now = Date.now();
  const session: AdminSession = {
    adminId: `admin_${now}`,
    email,
    createdAt: now,
    expiresAt: now + SESSION_TTL_MS,
  };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function validateSession(): AdminSession | null {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const session: AdminSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      destroySession();
      return null;
    }
    return session;
  } catch {
    destroySession();
    return null;
  }
}

export function destroySession(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

// ── Admin Credential Management ──

async function getDefaultAdmin(): Promise<StoredAdmin> {
  return {
    email: 'admin@scaro.com',
    passwordHash: await hashPassword('Scaro@2026'),
  };
}

export async function seedAdminIfNeeded(): Promise<void> {
  const existing = localStorage.getItem(ADMIN_STORE_KEY);
  if (!existing) {
    const admin = await getDefaultAdmin();
    localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify(admin));
  }
}

export async function authenticateAdmin(email: string, password: string): Promise<boolean> {
  await seedAdminIfNeeded();

  const raw = localStorage.getItem(ADMIN_STORE_KEY);
  if (!raw) return false;

  try {
    const stored: StoredAdmin = JSON.parse(raw);
    const inputHash = await hashPassword(password);
    return stored.email === email.toLowerCase().trim() && stored.passwordHash === inputHash;
  } catch {
    return false;
  }
}
