import { Redis } from "@upstash/redis";

// Server-only Upstash Redis client. The .server.ts suffix keeps this (and the
// credentials it reads) out of the client bundle.
//
// Env vars are injected automatically when you connect an Upstash Redis store
// to the project in the Vercel dashboard. We accept both the Vercel-native
// (KV_REST_API_*) and the direct-Upstash (UPSTASH_REDIS_REST_*) naming so it
// works however the store was provisioned. For local dev, copy the same two
// values into .env.

let client: Redis | null = null;

export function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  if (!client) {
    client = new Redis({ url, token });
  }

  return client;
}

// Redis key holding the set of unique waitlist sign-up emails.
// SADD dedupes on insert; SCARD returns the unique count.
export const WAITLIST_SET_KEY = "waitlist:emails";

// Set of addresses that explicitly unsubscribed (via the one-click link). Kept
// as an audit trail so we never re-contact them in future broadcasts.
export const WAITLIST_UNSUBSCRIBED_KEY = "waitlist:unsubscribed";
