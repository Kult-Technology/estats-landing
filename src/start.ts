import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { signedInRedirect } from "./lib/session-hint";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Somebody who already has a session on the app asked for the marketing page, so send
// them to the work rather than the pitch. It answers here, before anything renders,
// because the answer is an HTTP redirect rather than something the page can decide.
const appRedirectMiddleware = createMiddleware().server(
  async ({ request, next }) => signedInRedirect(request) ?? next(),
);

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, appRedirectMiddleware],
}));
