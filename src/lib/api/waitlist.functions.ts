import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

import { EmailTemplate } from "../email-template";
import { WaitlistWelcomeEmail } from "../waitlist-welcome-email";
import { getRedis, WAITLIST_SET_KEY, WAITLIST_UNSUBSCRIBED_KEY } from "../redis.server";
import { buildUnsubscribeUrl, verifyUnsubscribeToken } from "../unsubscribe.server";
import { SITE_URL } from "../seo";

// Server-side waitlist handlers invoked from the client:
//   await joinWaitlist({ data: { email: "ada@example.com" } })
//   await getWaitlistCount()
// The .handler bodies run server-only, so the Resend client, the Redis
// credentials and the RESEND_API_KEY never reach the browser bundle.

const WAITLIST_RECIPIENT = "kontakt@kulttechnology.pl";
const WAITLIST_SENDER = "estats@kulttechnology.pl";
// Branded "from" for the subscriber-facing thank-you (verified kulttechnology.pl domain).
const WAITLIST_WELCOME_SENDER = "Estats <estats@kulttechnology.pl>";

// Social-proof baseline added to the real sign-up count before it is shown.
// Change this single number to adjust the displayed starting point.
export const WAITLIST_BASE_COUNT = 23;

// Reads the unique sign-up count from Redis and applies the base offset.
// Returns the base count alone if Redis is unconfigured or unreachable, so the
// page always renders with a sensible number instead of crashing.
async function readDisplayCount(): Promise<number> {
  const redis = getRedis();
  if (!redis) return WAITLIST_BASE_COUNT;

  try {
    const count = await redis.scard(WAITLIST_SET_KEY);
    return WAITLIST_BASE_COUNT + (count ?? 0);
  } catch (error) {
    console.error("Failed to read waitlist count from Redis:", error);
    return WAITLIST_BASE_COUNT;
  }
}

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.string().email() }))
  .handler(async ({ data }) => {
    const email = data.email.trim().toLowerCase();

    // Persist the sign-up first (source of truth for the count). SADD returns 1
    // for a new address and 0 if it was already in the set, so we can both
    // dedupe and detect a returning visitor. Persistence failures are
    // non-fatal: we fall back to treating the sign-up as new.
    let alreadyJoined = false;
    const redis = getRedis();
    if (redis) {
      try {
        const added = await redis.sadd(WAITLIST_SET_KEY, email);
        alreadyJoined = added === 0;
      } catch (error) {
        console.error("Failed to record waitlist sign-up in Redis:", error);
      }
    }

    // Only notify for genuinely new sign-ups, so a returning visitor doesn't
    // trigger a duplicate email. If Redis was unreachable we can't tell, so we
    // still send to avoid silently dropping the lead.
    if (!alreadyJoined) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error("RESEND_API_KEY is not configured");
      }

      const resend = new Resend(apiKey);

      // Thank-you email to the subscriber. Best-effort: the sign-up is already
      // persisted, so a delivery hiccup here must not fail the request. Replies
      // (problem reports / feature requests) go to the team inbox.
      try {
        const unsubscribeUrl = buildUnsubscribeUrl(email, SITE_URL);
        const { error: welcomeError } = await resend.emails.send({
          from: WAITLIST_WELCOME_SENDER,
          to: email,
          replyTo: WAITLIST_RECIPIENT,
          subject: "Dziękujemy za dołączenie do Estats 🎉",
          react: WaitlistWelcomeEmail({ email, unsubscribeUrl }),
          // Native client "Unsubscribe" button: opens the one-click link (or
          // the mailto fallback to the monitored team inbox).
          headers: {
            "List-Unsubscribe": `<${unsubscribeUrl}>, <mailto:${WAITLIST_RECIPIENT}?subject=Wypisz%20mnie%20z%20Estats>`,
          },
        });
        if (welcomeError) {
          console.error("Failed to send waitlist welcome email:", welcomeError);
        }
      } catch (welcomeException) {
        console.error("Failed to send waitlist welcome email:", welcomeException);
      }

      // Internal notification to the team.
      const { error } = await resend.emails.send({
        from: WAITLIST_SENDER,
        to: WAITLIST_RECIPIENT,
        replyTo: email,
        subject: `Estats - nowy zapis na waitlistę: ${email}`,
        react: EmailTemplate({ email }),
      });

      // Resend reports API failures (e.g. unverified domain) via `error`
      // instead of throwing, so surface it to fail the request explicitly.
      if (error) {
        throw new Error(error.message ?? "Nie udało się wysłać wiadomości.");
      }
    }

    return { ok: true, alreadyJoined, count: await readDisplayCount() } as const;
  });

export const getWaitlistCount = createServerFn({ method: "GET" }).handler(async () => {
  return { count: await readDisplayCount() };
});

// One-click unsubscribe, called from the /wypisz page loader. The HMAC token in
// the link proves the request is for that exact address, so nobody can remove
// someone else. Removes the address from the live set (so the count drops too)
// and records it in a suppression set we never re-contact.
export const unsubscribeFromWaitlist = createServerFn({ method: "POST" })
  .inputValidator(z.object({ email: z.string(), token: z.string() }))
  .handler(async ({ data }) => {
    const email = data.email.trim().toLowerCase();

    if (!email || !verifyUnsubscribeToken(email, data.token)) {
      return { ok: false, reason: "invalid" } as const;
    }

    const redis = getRedis();
    if (redis) {
      try {
        const removed = await redis.srem(WAITLIST_SET_KEY, email);
        await redis.sadd(WAITLIST_UNSUBSCRIBED_KEY, email);
        return { ok: true, alreadyRemoved: removed === 0 } as const;
      } catch (error) {
        console.error("Failed to unsubscribe from waitlist:", error);
        return { ok: false, reason: "error" } as const;
      }
    }

    // No store configured (e.g. local dev) - the token was still valid, so
    // confirm to the user; nothing to remove.
    return { ok: true, alreadyRemoved: false } as const;
  });
