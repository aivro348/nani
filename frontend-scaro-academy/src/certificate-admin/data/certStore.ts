// ─────────────────────────────────────────────────────────────
// Certificate Data Store — localStorage-backed CRUD
// ─────────────────────────────────────────────────────────────

import { sanitizeInput } from '../utils/certAuthUtils';
import { generateQRDataUrl } from '../utils/qrGenerator';

const CERTS_KEY = 'cert_admin_certificates';

export interface Certificate {
  id: string;
  studentName: string;
  program: string;
  issueDate: string;
  pdfDataUrl?: string;       // Base64 data URL of uploaded PDF
  qrDataUrl: string;         // Auto-generated QR code (data URL)
  createdAt: number;
  updatedAt: number;
}

// ── Helpers ──

function generateCertId(): string {
  const year = new Date().getFullYear();
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `SCA-${year}-${rand}`;
}

function getVerificationUrl(certId: string): string {
  const origin = window.location.origin;
  return `${origin}/verify-certificate?id=${certId}`;
}

// ── Storage ──

function loadAll(): Certificate[] {
  const raw = localStorage.getItem(CERTS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveAll(certs: Certificate[]): void {
  localStorage.setItem(CERTS_KEY, JSON.stringify(certs));
}

// ── Seed Data ──

export function seedCertificatesIfNeeded(): void {
  const existing = loadAll();
  if (existing.length > 0) return;

  const now = Date.now();
  const seedData: Omit<Certificate, 'qrDataUrl'>[] = [
    { id: 'SCA-2026-A1B2C3', studentName: 'Rahul Sharma', program: 'Full Stack Development', issueDate: '2026-03-15', createdAt: now, updatedAt: now },
    { id: 'SCA-2026-D4E5F6', studentName: 'Sneha Patel', program: 'Data Science with Python', issueDate: '2026-04-20', createdAt: now, updatedAt: now },
    { id: 'SCA-2026-G7H8I9', studentName: 'Aakash Reddy', program: 'IoT & Embedded Systems', issueDate: '2026-05-10', createdAt: now, updatedAt: now },
    { id: 'SCA-2026-J1K2L3', studentName: 'Priya Kumar', program: 'UI/UX Design Masterclass', issueDate: '2026-06-01', createdAt: now, updatedAt: now },
    { id: 'SCA-2026-M4N5O6', studentName: 'Vikram Singh', program: 'Machine Learning Engineering', issueDate: '2026-07-05', createdAt: now, updatedAt: now },
  ];

  const certs: Certificate[] = seedData.map(c => ({
    ...c,
    qrDataUrl: generateQRDataUrl(getVerificationUrl(c.id)),
  }));

  saveAll(certs);
}

// ── CRUD Operations ──

export function getAllCertificates(): Certificate[] {
  return loadAll();
}

export function getCertificateById(id: string): Certificate | null {
  const sanitizedId = sanitizeInput(id).toUpperCase().trim();
  const certs = loadAll();
  return certs.find(c => c.id === sanitizedId) || null;
}

export function searchCertificates(query: string): Certificate[] {
  const sanitizedQuery = sanitizeInput(query).toLowerCase().trim();
  if (!sanitizedQuery) return loadAll();

  const certs = loadAll();
  return certs.filter(c =>
    c.id.toLowerCase().includes(sanitizedQuery) ||
    c.studentName.toLowerCase().includes(sanitizedQuery) ||
    c.program.toLowerCase().includes(sanitizedQuery)
  );
}

export function addCertificate(data: {
  studentName: string;
  program: string;
  issueDate: string;
  pdfDataUrl?: string;
}): Certificate {
  const certs = loadAll();
  const id = generateCertId();
  const now = Date.now();

  const cert: Certificate = {
    id,
    studentName: sanitizeInput(data.studentName),
    program: sanitizeInput(data.program),
    issueDate: data.issueDate,
    pdfDataUrl: data.pdfDataUrl,
    qrDataUrl: generateQRDataUrl(getVerificationUrl(id)),
    createdAt: now,
    updatedAt: now,
  };

  certs.unshift(cert);
  saveAll(certs);
  return cert;
}

export function updateCertificate(id: string, data: {
  studentName?: string;
  program?: string;
  issueDate?: string;
  pdfDataUrl?: string;
}): Certificate | null {
  const certs = loadAll();
  const idx = certs.findIndex(c => c.id === id);
  if (idx === -1) return null;

  if (data.studentName !== undefined) certs[idx].studentName = sanitizeInput(data.studentName);
  if (data.program !== undefined) certs[idx].program = sanitizeInput(data.program);
  if (data.issueDate !== undefined) certs[idx].issueDate = data.issueDate;
  if (data.pdfDataUrl !== undefined) certs[idx].pdfDataUrl = data.pdfDataUrl;
  certs[idx].updatedAt = Date.now();

  saveAll(certs);
  return certs[idx];
}

export function deleteCertificate(id: string): boolean {
  const certs = loadAll();
  const filtered = certs.filter(c => c.id !== id);
  if (filtered.length === certs.length) return false;
  saveAll(filtered);
  return true;
}
