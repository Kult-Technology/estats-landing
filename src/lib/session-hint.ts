import { APP_URL } from "./site";

// The app writes `es_signed_in` on estats.pl whenever it confirms a session on
// app.estats.pl (the estats repo, frontend/src/utils/sessionHint.ts). Reading it back here
// is what sends someone who already works in Estats to their flips rather than to the pitch.
//
// It is a hint, never an authorization: it carries no token and no identity, so trusting it
// grants nothing — the app authenticates normally, and the worst a stale or forged value can
// do is put someone on a login screen. The cookie name is the whole contract between the two
// repos and is written down in both.
const COOKIE_NAME = "es_signed_in";

// A signed-in visitor still has pricing, the founders and a shared link to read here, so the
// redirect keeps a way out: ?stay leaves the marketing page open.
const STAY_PARAM = "stay";

const hasSessionHint = (request: Request): boolean => {
  const cookies = request.headers.get("cookie") ?? "";

  return cookies.split(";").some((entry) => entry.trim() === `${COOKIE_NAME}=1`);
};

// A crawler sends no cookie and so is never redirected, which is what keeps the marketing
// page indexable — the home page is the site's canonical URL.
// /wypisz is reached from an e-mail by someone who may well be signed in, and the legal pages
// are linked from inside the app, so only "/" here.
export function signedInRedirect(request: Request): Response | undefined {
  if (request.method !== "GET") return undefined;
  if (!(request.headers.get("accept") ?? "").includes("text/html")) return undefined;

  const url = new URL(request.url);

  if (url.pathname !== "/") return undefined;
  if (url.searchParams.has(STAY_PARAM)) return undefined;
  if (!hasSessionHint(request)) return undefined;

  return new Response(null, {
    status: 302,
    headers: {
      location: APP_URL,
      // The answer depends on a cookie, so it must never be handed to the next visitor.
      // Load-bearing the day anything puts an s-maxage on this route.
      "cache-control": "no-store",
      vary: "cookie",
    },
  });
}
