import { createFileRoute, Link } from "@tanstack/react-router";

import { unsubscribeFromWaitlist } from "../lib/api/waitlist.functions";

export const Route = createFileRoute("/wypisz")({
  head: () => ({
    meta: [{ title: "Wypisanie z listy - Estats" }, { name: "robots", content: "noindex" }],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    e: typeof search.e === "string" ? search.e : "",
    t: typeof search.t === "string" ? search.t : "",
  }),
  loaderDeps: ({ search }) => ({ e: search.e, t: search.t }),
  loader: async ({ deps }) => unsubscribeFromWaitlist({ data: { email: deps.e, token: deps.t } }),
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const result = Route.useLoaderData();

  const heading = result.ok ? "Wypisano z listy" : "Nie udało się wypisać";
  const message = result.ok
    ? "Nie będziemy już wysyłać Ci wiadomości o Estats. Jeśli to pomyłka, możesz w każdej chwili zapisać się ponownie."
    : "Ten link jest nieprawidłowy lub wygasł. Jeśli chcesz się wypisać, napisz do nas na kontakt@kulttechnology.pl.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-card/50 p-8 text-center sm:p-10">
        <span
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl ${
            result.ok
              ? "border-brand/30 bg-brand-soft text-brand"
              : "border-border bg-background/60 text-muted-foreground"
          }`}
          aria-hidden
        >
          {result.ok ? "✓" : "!"}
        </span>

        <h1 className="font-display mt-6 text-2xl font-semibold tracking-tight text-foreground">
          {heading}
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{message}</p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          {result.ok ? "Wróć na stronę Estats" : "Przejdź na stronę Estats"}
        </Link>

        <p className="mt-6 text-xs text-muted-foreground/70">
          Estats to produkt Kult Technology sp. z o.o.
        </p>
      </div>
    </main>
  );
}
