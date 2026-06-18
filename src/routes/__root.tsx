import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Nie znaleziono strony</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ta strona nie istnieje albo została przeniesiona.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Strona nie załadowała się poprawnie
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Wystąpił błąd po naszej stronie. Spróbuj odświeżyć widok albo wrócić na stronę główną.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Spróbuj ponownie
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Strona główna
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#000000" },
      { name: "color-scheme", content: "dark light" },
      { title: "Estats — Platforma do zarządzania flipami nieruchomości" },
      {
        name: "description",
        content:
          "Estats to platforma SaaS do zarządzania flipami nieruchomości: tracking projektu, finanse, ROI i aktualizacje z budowy w jednym miejscu dla flippera, inwestora i koordynatora.",
      },
      {
        name: "keywords",
        content:
          "flipy nieruchomości, zarządzanie flipami, software dla flipperów, tracking projektu nieruchomości, ROI inwestycje, platforma dla inwestorów, Estats",
      },
      { name: "author", content: "Estats" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "Polish" },
      { property: "og:site_name", content: "Estats" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Estats — Platforma do zarządzania flipami nieruchomości" },
      {
        property: "og:description",
        content:
          "Tracking projektu, finanse i transparentność dla inwestorów. Wszystko, czego flipperzy potrzebują, w jednym systemie.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Estats — Platforma do zarządzania flipami nieruchomości" },
      {
        name: "twitter:description",
        content:
          "Tracking projektu, finanse i transparentność dla inwestorów w jednym narzędziu SaaS.",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/05b09d56-d0ec-4896-8666-414f2d45a668/estats-logo.png" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/05b09d56-d0ec-4896-8666-414f2d45a668/estats-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
