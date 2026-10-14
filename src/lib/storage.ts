import { promises as fs } from "fs";
import path from "path";
import { WaitlistSubmission, ContactSubmission } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json");
const CONTACT_FILE = path.join(DATA_DIR, "contacts.json");

// In-memory cache
let waitlistCache: WaitlistSubmission[] = [];
let contactCache: ContactSubmission[] = [];
let initialized = false;

// Simple in-memory sliding window rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(identifier: string, limit = 10, windowMs = 60000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count };
}

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // Ignore error if already exists
  }
}

export async function initStorage() {
  if (initialized) return;
  await ensureDataDir();

  try {
    const waitlistData = await fs.readFile(WAITLIST_FILE, "utf-8");
    waitlistCache = JSON.parse(waitlistData);
  } catch {
    waitlistCache = [];
  }

  try {
    const contactData = await fs.readFile(CONTACT_FILE, "utf-8");
    contactCache = JSON.parse(contactData);
  } catch {
    contactCache = [];
  }

  initialized = true;
}

export async function addWaitlistEntry(entry: Omit<WaitlistSubmission, "id" | "createdAt">): Promise<WaitlistSubmission> {
  await initStorage();

  // Deduplication check
  const existing = waitlistCache.find((w) => w.email.toLowerCase() === entry.email.toLowerCase());
  if (existing) {
    return existing;
  }

  const newEntry: WaitlistSubmission = {
    id: `wl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    email: entry.email.trim().toLowerCase(),
    intendedUse: entry.intendedUse,
    createdAt: new Date().toISOString(),
    ipHash: entry.ipHash,
  };

  waitlistCache.unshift(newEntry);

  try {
    await fs.writeFile(WAITLIST_FILE, JSON.stringify(waitlistCache, null, 2), "utf-8");
  } catch {
    // File persistence is best effort in ephemeral serverless
  }

  return newEntry;
}

export async function getWaitlistEntries(): Promise<WaitlistSubmission[]> {
  await initStorage();
  return waitlistCache;
}

export async function addContactSubmission(entry: Omit<ContactSubmission, "id" | "createdAt" | "status">): Promise<ContactSubmission> {
  await initStorage();

  const newSubmission: ContactSubmission = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: entry.name.trim().slice(0, 100),
    email: entry.email.trim().toLowerCase().slice(0, 150),
    subject: entry.subject.trim().slice(0, 150),
    message: entry.message.trim().slice(0, 3000),
    createdAt: new Date().toISOString(),
    status: "New",
  };

  contactCache.unshift(newSubmission);

  try {
    await fs.writeFile(CONTACT_FILE, JSON.stringify(contactCache, null, 2), "utf-8");
  } catch {
    // Best-effort file write
  }

  return newSubmission;
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  await initStorage();
  return contactCache;
}
