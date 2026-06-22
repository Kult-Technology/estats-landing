import crypto from "node:crypto";

// Server-only (.server.ts) HMAC tokens for one-click unsubscribe links, so a
// link can only unsubscribe the exact address it was issued for and cannot be
// forged for arbitrary emails. The secret never reaches the client bundle.
const SECRET =
  process.env.UNSUBSCRIBE_SECRET ??
  process.env.RESEND_API_KEY ??
  "estats-unsubscribe-fallback-secret";

function normalize(email: string): string {
  return email.trim().toLowerCase();
}

export function createUnsubscribeToken(email: string): string {
  return crypto.createHmac("sha256", SECRET).update(normalize(email)).digest("base64url");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!token) return false;
  const expected = Buffer.from(createUnsubscribeToken(email));
  const provided = Buffer.from(token);
  if (expected.length !== provided.length) return false;
  return crypto.timingSafeEqual(expected, provided);
}

// Absolute one-click unsubscribe URL embedded in the welcome email.
export function buildUnsubscribeUrl(email: string, siteUrl: string): string {
  const normalized = normalize(email);
  const token = createUnsubscribeToken(normalized);
  return `${siteUrl}/wypisz?e=${encodeURIComponent(normalized)}&t=${token}`;
}
