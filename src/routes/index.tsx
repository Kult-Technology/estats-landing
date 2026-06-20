import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  FlaskConical,
  Hammer,
  HandCoins,
  Handshake,
  Layers3,
  Lightbulb,
  Loader2,
  MessageSquare,
  Minus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

import { getWaitlistCount, joinWaitlist } from "../lib/api/waitlist.functions";
import { OG_IMAGE, OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_URL } from "../lib/seo";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

type MockMetricProps = {
  label: string;
  value: string;
  tone?: "default" | "brand";
};

const heroHighlights = [
  "Status projektu w czasie rzeczywistym",
  "Koszty i budżet bez chaosu w Excelu",
  "Przejrzysta współpraca między flipperem a inwestorem",
];

const trustItems = [
  { value: "1 system", label: "zakup, remont, sprzedaż i raportowanie" },
  { value: "4 role", label: "osobne widoki dla każdego uczestnika projektu" },
  { value: "Live", label: "aktualizacje postępu, kosztów i ryzyk" },
  { value: "ROI", label: "pełna czytelność finansów dla inwestora" },
];

const features = [
  {
    icon: Layers3,
    title: "Śledzenie projektu od zakupu do sprzedaży",
    copy: "Każdy etap flipa jest widoczny w jednym przepływie: harmonogram, status, dokumenty, zdjęcia i odpowiedzialne osoby.",
  },
  {
    icon: Wallet,
    title: "Finanse bez ukrytych luk",
    copy: "Budżet, koszty, prognoza zysku i odchylenia od planu są zawsze pod ręką - bez ręcznego sklejania danych z kilku źródeł.",
  },
  {
    icon: ShieldCheck,
    title: "Transparentność dla inwestora",
    copy: "Inwestor widzi postęp, kapitał, ROI i kluczowe aktualizacje bez dostępu do nadmiarowej operacyjnej złożoności.",
  },
  {
    icon: Camera,
    title: "Aktualizacje z remontów bez tarcia",
    copy: "Koordynator dodaje zdjęcia, statusy i zadania w prostym rytmie pracy, a reszta zespołu widzi efekty natychmiast.",
  },
];

const roles = [
  {
    title: "Flipper",
    subtitle: "Widok operacyjny i finansowy",
    icon: Building2,
    bullets: [
      "portfel projektów, inwestycji i zespołów",
      "pełna kontrola kosztów i zysków",
      "zarządzanie firmami, inwestorami i dokumentami",
    ],
  },
  {
    title: "Inwestor",
    subtitle: "Widok budujący zaufanie",
    icon: HandCoins,
    bullets: [
      "czytelny ROI, kapitał i prognoza zysku",
      "postęp projektu bez zbędnych informacji",
      "raportowanie gotowe do udostępnienia",
    ],
  },
  {
    title: "Koordynator",
    subtitle: "Widok szybki i mobilny",
    icon: Clock3,
    bullets: [
      "duże akcje i proste aktualizacje z remontów",
      "timeline, zadania i terminy w jednym miejscu",
      "zdjęcia i statusy dodawane bez opóźnień",
    ],
  },
  {
    title: "Sprzedawca",
    subtitle: "Widok sprzedażowy i ofertowy",
    icon: Handshake,
    bullets: [
      "harmonogram prezentacji i oględzin z klientami",
      "zapytania i oferty kupujących w jednym miejscu",
      "dokumenty sprzedaży i finalizacja transakcji",
    ],
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Zakup i konfiguracja projektu",
    copy: "Estats porządkuje strukturę projektu, zespół, finansowanie i założenia marży od pierwszego dnia.",
  },
  {
    step: "02",
    title: "Remont i aktualizacje z placu",
    copy: "Każda aktualizacja, zdjęcie i przesunięcie terminu trafia do wspólnego strumienia, zamiast ginąć w wiadomościach.",
  },
  {
    step: "03",
    title: "Budżet kontra rzeczywistość",
    copy: "Koszty są widoczne na bieżąco, a inwestor przez cały proces ma wgląd w finanse projektu - łatwiej wyłapać, gdzie flip zjada marżę albo nabiera tempa.",
  },
  {
    step: "04",
    title: "Sprzedaż i rozliczenie",
    copy: "Po sprzedaży mieszkania inwestor może wygenerować raport z kompletem danych z projektu, a jego przejrzysta historia zostaje na kolejne flipy.",
  },
];

const showcaseStats = [
  { label: "Aktywne projekty", value: "12" },
  { label: "Prognozowany zysk", value: "3,4 mln zł" },
  { label: "Koszty pod kontrolą", value: "91%" },
  { label: "Aktualizacje w tym tygodniu", value: "48" },
];

const comparisonRows = [
  {
    dzis: "Budżet rozjechany po kilku arkuszach",
    estats: "Jeden budżet projektu, zawsze aktualny",
  },
  { dzis: "Inwestor dzwoni i pyta o status", estats: "Inwestor sam widzi postęp i ROI" },
  { dzis: "Zdjęcia i ustalenia giną w czacie", estats: "Feed z placu podpięty pod projekt" },
  { dzis: "Marża liczona dopiero po sprzedaży", estats: "Odchylenie od budżetu widać na bieżąco" },
  {
    dzis: "Każdy kolejny flip ogarniany od zera",
    estats: "Powtarzalny proces dla kolejnych flipów",
  },
];

const testerBenefits = [
  {
    icon: Rocket,
    title: "Wcześniejszy dostęp",
    copy: "Wchodzisz do Estats przed publicznym startem, zanim ruszą zapisy dla wszystkich.",
  },
  {
    icon: Tag,
    title: "Preferencyjne warunki na start",
    copy: "Wcześni testerzy dostają lepsze warunki, gdy uruchomimy pełną wersję produktu.",
  },
  {
    icon: MessageSquare,
    title: "Realny wpływ na produkt",
    copy: "Twój feedback trafia bezpośrednio do twórców i realnie wpływa na rozwój Estats.",
  },
  {
    icon: ShieldCheck,
    title: "Zero zobowiązań",
    copy: "Zapis jest darmowy, bez płatności. Odezwiemy się przy starcie, a możesz wypisać się jednym mailem.",
  },
];

const storySteps = [
  {
    icon: Layers3,
    title: "Lata w chaosie",
    copy: "Dominik od lat prowadzi flipy na dużą skalę. Im więcej projektów, tym więcej arkuszy, wiadomości na WhatsAppie i plików na dysku - dane rozjeżdżały się szybciej, niż dało się je ogarnąć.",
  },
  {
    icon: Lightbulb,
    title: "Spojrzenie od środka",
    copy: "Kamil poznał jego firmy i procesy od podszewki. Widział, gdzie znika czas, gdzie ucieka marża i czego naprawdę brakuje, żeby skala przestała oznaczać chaos.",
  },
  {
    icon: Wrench,
    title: "Z wiedzy w system",
    copy: "Z tej wiedzy Kamil ułożył operacje i zbudował narzędzie, które porządkuje cały proces flipa w jednym miejscu. Tak powstał Estats - nie z teorii, ale z praktyki.",
  },
];

const roadmap = [
  {
    phase: "Teraz",
    title: "MVP - rdzeń Estats",
    icon: Hammer,
    current: true,
    items: [
      "Zakładasz flipy i grupujesz je w inwestycje",
      "Budżet, koszty i prognoza ROI każdego flipa pod kontrolą",
      "Postęp remontu, zdjęcia i dokumenty w jednym miejscu",
      "Inwestor sam widzi postęp i ROI - bez ręcznego raportowania",
      "A gdy działasz z zespołem - osobne widoki dla 4 ról",
    ],
  },
  {
    phase: "Wkrótce",
    title: "Zamknięte testy z waitlistą",
    icon: FlaskConical,
    current: false,
    items: [
      "Pierwsi testerzy korzystają z Estats na żywo",
      "Zbieramy feedback i szlifujemy produkt",
      "Kierunek rozwoju wyznacza realna praca z flipami",
    ],
  },
  {
    phase: "W planach",
    title: "Więcej kontroli nad flipem",
    icon: FileText,
    current: false,
    items: [
      "Śledzenie zakupów i materiałów na każdym flipie",
      "Generator umów: szkic, uzupełniasz dane, dokument gotowy do podpisu",
      "Kolejne usprawnienia zgłaszane przez testerów",
    ],
  },
  {
    phase: "Później",
    title: "Automatyzacja z AI",
    icon: Bot,
    current: false,
    items: [
      "Wrzucasz faktury, a AI rozdziela je na właściwe flipy",
      "Mniej ręcznej pracy, więcej gotowych danych",
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estats - kontrola nad flipem od zakupu do sprzedaży" },
      {
        name: "description",
        content:
          "Estats to nowoczesna platforma do zarządzania flipami nieruchomości: finanse, postęp projektu, ROI, inwestorzy i aktualizacje z remontów w jednym miejscu.",
      },
      { property: "og:title", content: "Estats - kontrola nad flipem od zakupu do sprzedaży" },
      {
        property: "og:description",
        content:
          "Jedno miejsce do śledzenia projektu, kosztów i postępu inwestycji dla flipperów, inwestorów i koordynatorów.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: OG_IMAGE_WIDTH },
      { property: "og:image:height", content: OG_IMAGE_HEIGHT },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:title", content: "Estats - kontrola nad flipem od zakupu do sprzedaży" },
      {
        name: "twitter:description",
        content:
          "Platforma do zarządzania flipami nieruchomości z pełną transparentnością dla inwestorów.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "pl-PL", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Estats",
          url: SITE_URL,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Platforma do zarządzania flipami nieruchomości: tracking projektu, finanse, ROI i aktualizacje z remontów.",
          inLanguage: "pl-PL",
          image: OG_IMAGE,
          publisher: {
            "@type": "Organization",
            name: "Kult Technology",
            url: "https://kulttechnology.pl",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Estats",
          url: SITE_URL,
          inLanguage: "pl-PL",
        }),
      },
    ],
  }),
  loader: async () => ({ waitlistCount: (await getWaitlistCount()).count }),
  // The count is a one-shot SSR read that the form updates optimistically, so
  // the loader never needs to re-run on the client. Pinning it this way keeps
  // the router from revalidating and re-rendering the page (which would restart
  // the entrance animations and look like a reload).
  staleTime: Infinity,
  shouldReload: false,
  component: Index,
});

function FadeIn({ children, className, delay = 0, y = 28 }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>
    </div>
  );
}

function MockMetric({ label, value, tone = "default" }: MockMetricProps) {
  return (
    <div
      className={[
        "rounded-2xl border px-4 py-4 backdrop-blur-sm",
        tone === "brand"
          ? "border-brand/30 bg-brand-soft text-foreground"
          : "border-border bg-card/80 text-foreground",
      ].join(" ")}
    >
      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

function EstatsLogo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Estats - strona główna">
      <img
        src="/estats-icon.png"
        alt="Logo Estats"
        width="1024"
        height="1024"
        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
      />
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        Estats
      </span>
    </a>
  );
}

function DashboardMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 24 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative mx-auto w-full max-w-3xl"
    >
      <div className="estats-panel estats-shimmer relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
        <div className="flex items-center justify-between rounded-[1.4rem] border border-border/70 bg-card/70 px-4 py-3">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Projekt</div>
            <div className="mt-1 text-lg font-semibold text-foreground">
              Warszawa / Mokotów / M-47
            </div>
          </div>
          <div className="rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium text-foreground">
            Remont w toku
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_1.4fr_0.9fr]">
          <div className="space-y-3 rounded-[1.5rem] border border-border/70 bg-card/65 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Portfel
                </div>
                <div className="mt-1 font-medium text-foreground">Aktywne projekty</div>
              </div>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </div>
            {[
              ["Mokotów / M-47", "w toku"],
              ["Praga / Loft 12", "sprzedaż"],
              ["Wola / Bianco 8", "zakup"],
            ].map(([name, status], index) => (
              <motion.div
                key={name}
                initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.12, duration: 0.6 }}
                className="rounded-2xl border border-border/70 bg-background/60 px-3 py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-foreground">{name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Ostatnia aktualizacja 2h temu
                    </div>
                  </div>
                  <span className="rounded-full border border-border px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 rounded-[1.5rem] border border-border/70 bg-card/65 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Timeline
                </div>
                <div className="mt-1 font-medium text-foreground">Widoczność postępu projektu</div>
              </div>
              <Sparkles className="h-4 w-4 text-brand" />
            </div>
            <div className="space-y-3">
              {[
                ["Oferta przyjęta", "100%"],
                ["Demontaż i instalacje", "78%"],
                ["Wykończenie", "54%"],
                ["Przygotowanie do sprzedaży", "22%"],
              ].map(([label, progress], index) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border/70 bg-background/55 px-3 py-3"
                >
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">{progress}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={reduceMotion ? undefined : { width: 0 }}
                      animate={reduceMotion ? undefined : { width: progress }}
                      transition={{
                        delay: 0.5 + index * 0.16,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="estats-pulse-line h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <MockMetric label="Predykcje vs budżet" value="92%" tone="brand" />
            <MockMetric label="Prognoza marży" value="103 tys. zł" />
            <div className="rounded-[1.5rem] border border-border/70 bg-card/65 p-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span>Wydatki</span>
                <span>7 dni</span>
              </div>
              <div className="mt-4 flex h-28 items-end gap-2">
                {[45, 62, 54, 70, 58, 90, 76].map((height, index) => (
                  <motion.div
                    key={height}
                    initial={reduceMotion ? undefined : { scaleY: 0.25, opacity: 0.4 }}
                    animate={reduceMotion ? undefined : { scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.8 }}
                    className={`estats-kpi-bar w-full rounded-t-xl ${index === 5 ? "bg-primary" : "bg-foreground/30"}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Polish plural agreement for "osoba": 1 → osoba, 2-4 → osoby, otherwise osób,
// with the standard 12-14 exception.
function osobyLabel(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (n === 1) return "osoba";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "osoby";
  return "osób";
}

function WaitlistForm({ initialCount }: { initialCount: number }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "invalid" | "error"
  >("idle");
  const [count, setCount] = useState(initialCount);

  const formattedCount = new Intl.NumberFormat("pl-PL").format(count);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setStatus("invalid");
      return;
    }

    try {
      setStatus("loading");
      const result = await joinWaitlist({ data: { email: value } });
      setEmail("");
      setStatus(result?.alreadyJoined ? "already" : "success");
      if (typeof result?.count === "number") setCount(result.count);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="estats-panel mx-auto grid max-w-3xl gap-4 rounded-[2rem] p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5"
      noValidate
    >
      <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground sm:col-span-2">
        <Users className="h-4 w-4 text-brand" />
        <span>
          Już <span className="font-semibold text-foreground">{formattedCount}</span>{" "}
          {osobyLabel(count)} na waitliście
        </span>
      </p>
      <label className="min-w-0">
        <span className="sr-only">Adres e-mail</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "loading") setStatus("idle");
          }}
          aria-invalid={status === "invalid"}
          disabled={status === "loading"}
          placeholder="Twój e-mail"
          className="h-14 w-full rounded-[1.2rem] border border-input bg-background px-5 text-base text-foreground outline-none transition focus:border-ring disabled:opacity-60 aria-[invalid=true]:border-destructive"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-[1.2rem] cursor-pointer bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "loading" ? "Wysyłanie..." : "Dołącz do waitlisty"}
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </button>
      <div className="min-h-5 sm:col-span-2" aria-live="polite">
        {status === "success" && (
          <p className="inline-flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-brand" />
            Dziękujemy! Twój adres trafił na waitlistę - odezwiemy się wkrótce.
          </p>
        )}
        {status === "already" && (
          <p className="inline-flex items-center gap-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-brand" />
            Ten adres jest już na waitliście - czekaj na wiadomość od nas.
          </p>
        )}
        {status === "invalid" && (
          <p className="text-sm text-destructive">Podaj poprawny adres e-mail.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            Nie udało się zapisać. Spróbuj ponownie za chwilę.
          </p>
        )}
      </div>
    </form>
  );
}

function Index() {
  const reduceMotion = useReducedMotion();
  const { waitlistCount } = Route.useLoaderData();

  return (
    <main className="estats-noise relative overflow-hidden bg-background text-foreground">
      <div className="estats-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand)_16%,transparent),transparent)] opacity-80" />

      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <EstatsLogo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#funkcje" className="transition-colors hover:text-foreground">
              Funkcje
            </a>
            <a href="#role" className="transition-colors hover:text-foreground">
              Role
            </a>
            <a href="#workflow" className="transition-colors hover:text-foreground">
              Workflow
            </a>
            <a href="#waitlista" className="transition-colors hover:text-foreground">
              Waitlista
            </a>
          </nav>
          <a
            href="#waitlista"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Dołącz do waitlisty
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section className="relative z-10 px-5 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="max-w-2xl">
            <FadeIn className="space-y-8">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[0.65rem] font-medium uppercase leading-tight tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                Platforma dla flipów nieruchomości
              </div>

              <div className="space-y-6">
                <h1 className="font-display max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Kontroluj każdy etap flipa w jednym systemie.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Estats łączy tracking projektu, finanse, dokumenty i aktualizacje z remontów w
                  jednym uporządkowanym widoku dla flippera, inwestora, koordynatora i sprzedawcy.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlista"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Dołącz do waitlisty
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Zobacz przepływ projektu
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-brand/25 bg-brand-soft text-brand">
                  <Users className="h-3.5 w-3.5" />
                </span>
                <span>
                  Już{" "}
                  <span className="font-semibold text-foreground">
                    {new Intl.NumberFormat("pl-PL").format(waitlistCount)}
                  </span>{" "}
                  {osobyLabel(waitlistCount)} na waitliście
                </span>
              </div>

              <div className="grid gap-3 pt-2">
                {heroHighlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.12, duration: 0.6 }}
                    className="inline-flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-brand/25 bg-brand-soft text-brand">
                      <BadgeCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} y={38}>
            <DashboardMockup />
            <p className="mt-3 text-center text-xs text-muted-foreground/70">
              Dane w podglądzie są przykładowe i ilustrują interfejs Estats.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border bg-card/50 px-5 py-4 sm:px-6">
          <div className="estats-marquee flex min-w-max items-center gap-4 sm:gap-6">
            {[...trustItems, ...trustItems].map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center gap-4">
                <div className="estats-chip rounded-full px-4 py-2">
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="h-6 w-px bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dlaczego" className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 hidden overflow-hidden lg:block lg:inset-y-12">
          <motion.img
            src="/zalozyciele.webp"
            alt="Kamil i Dominik - współzałożyciele Estats"
            className="h-full w-full select-none object-cover object-[center_28%] 2xl:object-top"
            initial={{ scale: reduceMotion ? 0.9 : 0.88 }}
            animate={reduceMotion ? { scale: 0.9 } : { scale: [0.88, 0.92, 0.88] }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 26, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-96 overflow-hidden lg:hidden">
          <img
            src="/zalozyciele.webp"
            alt="Kamil i Dominik - współzałożyciele Estats"
            className="h-full w-full select-none object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,transparent_32%,var(--background)_72%)]" />
        </div>
        <div className="absolute inset-0 hidden bg-background/60 lg:block lg:bg-background/30" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--background),var(--background)_24%,transparent_48%)] lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(270deg,var(--background),var(--background)_24%,transparent_48%)] lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,var(--background),var(--background)_9%,transparent_24%,transparent_80%,var(--background)_91%,var(--background))] lg:block" />

        <div className="relative mx-auto max-w-[1640px] px-5 pb-20 pt-64 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid w-full gap-10 lg:min-h-[36rem] lg:grid-cols-[1fr_0.5fr_1fr] lg:items-stretch lg:gap-8">
            <div className="flex flex-col justify-center gap-7 lg:min-h-[26rem]">
              <FadeIn y={36}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Dlaczego powstał Estats?
                </div>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Estats nie powstał w sali konferencyjnej.{" "}
                  <span className="text-brand">
                    Powstał podczas zarządzania prawdziwymi flipami.
                  </span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.25} className="pt-2 lg:text-right">
                <div className="font-signature text-4xl leading-none text-foreground">Kamil</div>
                <div className="mt-3 text-sm leading-6 text-muted-foreground">
                  <div className="font-medium text-foreground">Założyciel Estats</div>
                  <div>Twórca platformy i systemu</div>
                  <div>Dziesiątki wdrożeń produkcyjnych</div>
                </div>
              </FadeIn>
            </div>

            <div aria-hidden className="hidden lg:block" />

            <div className="flex flex-col justify-center gap-6 lg:min-h-[26rem] lg:text-right">
              <FadeIn delay={0.1} y={36}>
                <div className="font-display text-6xl leading-none text-brand">“</div>
                <blockquote className="mt-3 text-2xl font-medium leading-9 text-foreground sm:text-3xl sm:leading-10">
                  Przez lata szukałem systemu, który nadąży za skalą mojego biznesu.{" "}
                  <span className="text-brand">Nie znalazłem go.</span> Dlatego powstał Estats.
                </blockquote>
              </FadeIn>
              <div className="flex flex-col gap-3 lg:items-end">
                {[
                  { icon: Building2, label: "Setki decyzji", sub: "każdego dnia" },
                  { icon: BarChart3, label: "Dziesiątki inwestycji", sub: "w jednym czasie" },
                  { icon: Clock3, label: "Niekończący się chaos", sub: "do uporządkowania" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeIn key={item.label} delay={0.2 + index * 0.08}>
                      <div className="flex items-center gap-2.5 lg:flex-row-reverse">
                        <Icon className="h-6 w-6 shrink-0 text-brand" />
                        <div>
                          <div className="text-base font-semibold leading-tight text-foreground">
                            {item.label}
                          </div>
                          <div className="text-sm text-muted-foreground">{item.sub}</div>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
              <FadeIn delay={0.3} className="pt-2 lg:text-left">
                <div className="font-signature text-4xl leading-none text-foreground">Dominik</div>
                <div className="mt-3 text-sm leading-6 text-muted-foreground">
                  <div className="font-medium text-foreground">Ambasador Estats</div>
                  <div>Wieloletni flipper</div>
                  <div>Praktyk rynku nieruchomości</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Historia Estats"
              title="Z chaosu jednego flippera - w narzędzie dla każdego."
              copy="Estats nie zaczął się od pomysłu na aplikację. Zaczął się od konkretnego problemu, który trzeba było rozwiązać."
            />
          </FadeIn>

          <div className="relative grid gap-4 md:grid-cols-3">
            <div
              aria-hidden
              className="estats-gradient-line absolute left-0 right-0 top-[2.4rem] hidden h-px md:block"
            />
            {storySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={index * 0.12}>
                  <article className="estats-panel relative h-full rounded-[1.75rem] p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand/25 bg-brand-soft text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.copy}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Excel kontra Estats"
              title="Arkusz i czat dają radę na jeden flip. Przy kilku naraz zaczynają gubić pieniądze."
              copy="Nie walczymy z Excelem - sami tak zaczynaliśmy. Excel, WhatsApp i Dysk Google sprawdzają się na jednym flipie, ale przy kilku naraz dane się rozjeżdżają, a czas i marża uciekają. Estats zastępuje je wszystkie jednym miejscem."
            />
          </FadeIn>

          <div className="grid gap-4 lg:grid-cols-2">
            <FadeIn>
              <div className="estats-panel h-full rounded-[1.9rem] p-6 sm:p-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Dziś: Excel, WhatsApp i Dysk Google
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                  {comparisonRows.map((row) => (
                    <li key={row.dzis} className="flex gap-3">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      <span>{row.dzis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="estats-panel-strong h-full rounded-[1.9rem] p-6 sm:p-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
                  Z Estats
                </div>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground">
                  {comparisonRows.map((row) => (
                    <li key={row.estats} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{row.estats}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="funkcje" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Najpierw postęp projektu"
              title="Najpierw widzisz postęp. Potem wszystko inne zaczyna się zgadzać."
              copy="Pierwsze sekundy w Estats mają odpowiedzieć na jedno pytanie: co dzieje się z projektem teraz. Dlatego postęp projektu, status i zużycie budżetu są na pierwszym planie - zanim wejdziesz głębiej w finanse i dokumenty."
            />
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.08} className="h-full">
                  <article className="estats-panel estats-spotlight h-full rounded-[1.75rem] p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/80 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{feature.copy}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="role" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Widoki dla każdej roli"
              title="Każda rola widzi tylko to, czego naprawdę potrzebuje."
              copy="Estats nie próbuje zmusić wszystkich do jednego dashboardu. Widok flippera jest gęsty i decyzyjny, inwestora - klarowny i wzbudzający zaufanie, koordynatora - szybki i mobilny, a sprzedawcy - skupiony na ofertach i finalizacji."
            />
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={index * 0.1}>
                  <article
                    className={`rounded-[1.9rem] p-6 ${index === 0 ? "estats-panel-strong" : "estats-panel"}`}
                  >
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {role.subtitle}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          {role.title}
                        </h3>
                      </div>
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-background/70 text-brand">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Przepływ projektu"
              title="Od zakupu do sprzedaży - jeden rytm pracy zamiast dziesięciu narzędzi."
              copy="Sam decydujesz, czy prowadzisz flip w pojedynkę, czy z zespołem - inwestorem i koordynatorem. Estats działa tak samo dobrze solo, jak i przy wielu osobach, a każda decyzja, aktualizacja i zdjęcie z remontów trafiają do wspólnego przebiegu projektu zamiast ginąć w Excelu i komunikatorach."
            />
          </FadeIn>

          <div className="grid gap-4 lg:grid-cols-4">
            {timelineSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.08}>
                <article className="estats-panel h-full rounded-[1.75rem] p-6">
                  <div className="text-sm font-semibold text-brand">{step.step}</div>
                  <div className="estats-gradient-line mt-5 h-px w-full" />
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.copy}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-border bg-card/45 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <FadeIn>
              <div className="max-w-xl space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <BarChart3 className="h-3.5 w-3.5 text-brand" />
                  Czytelność finansów
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Decyzje oparte na danych, a nie na domysłach.
                </h2>
                <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                  Gdy status projektu, wydatki i marża są widoczne razem, szybciej wyłapujesz ryzyko
                  i łatwiej budujesz zaufanie inwestorów. Estats ma wyglądać dokładnie tak: czysto,
                  szybko i bez niedopowiedzeń.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {showcaseStats.map((stat, index) => (
                    <FadeIn key={stat.label} delay={0.08 + index * 0.05}>
                      <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {stat.label}
                        </div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          {stat.value}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="estats-panel estats-float rounded-[1.8rem] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Portfolio board
                      </div>
                      <div className="mt-1 text-lg font-semibold text-foreground">
                        Widok operacyjny flippera
                      </div>
                    </div>
                    <TrendingUp className="h-4 w-4 text-brand" />
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Przychód planowany", value: "5,8 mln zł", brand: true },
                      { label: "Budżet wykorzystany", value: "74%", brand: false },
                      { label: "Ryzyka otwarte", value: "03", brand: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-2xl border px-4 py-4 ${item.brand ? "border-brand/25 bg-brand-soft" : "border-border bg-background/60"}`}
                      >
                        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="mt-2 text-xl font-semibold text-foreground">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="estats-panel estats-float-delay rounded-[1.8rem] p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Investor view
                    </div>
                    <div className="mt-2 text-lg font-semibold text-foreground">
                      Przejrzysty raport
                    </div>
                    <div className="mt-5 space-y-3">
                      <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                        <div className="text-xs text-muted-foreground">Kapitał</div>
                        <div className="mt-1 text-lg font-semibold text-foreground">1,2 mln zł</div>
                      </div>
                      <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                        <div className="text-xs text-muted-foreground">Prognozowany ROI</div>
                        <div className="mt-1 text-lg font-semibold text-foreground">17,8%</div>
                      </div>
                    </div>
                  </div>
                  <div className="estats-panel rounded-[1.8rem] p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Coordinator updates
                    </div>
                    <div className="mt-2 text-lg font-semibold text-foreground">Feed z placu</div>
                    <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                      <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                        Zdjęcia kuchni dodane • dziś • 09:12
                      </div>
                      <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                        Dostawa materiałów potwierdzona • wczoraj
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Roadmapa"
              title="Co już budujemy, a co pojawi się dalej."
              copy="Estats jest jeszcze przed startem, więc gramy w otwarte karty. Bez sztywnych dat - tempo wyznacza feedback testerów i realne potrzeby flipperów."
            />
          </FadeIn>

          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand)_45%,transparent),var(--border),transparent)]"
            />
            <div className="space-y-5">
              {roadmap.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <FadeIn key={phase.phase} delay={index * 0.1}>
                    <div className="relative flex gap-5">
                      <span
                        className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl border ${
                          phase.current
                            ? "border-brand/40 bg-brand-soft text-brand"
                            : "border-border bg-card/80 text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div
                        className={`flex-1 rounded-[1.5rem] p-5 ${
                          phase.current ? "estats-panel-strong" : "estats-panel"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span
                            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                              phase.current ? "text-brand" : "text-muted-foreground"
                            }`}
                          >
                            {phase.phase}
                          </span>
                          {phase.current && (
                            <span className="rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-brand">
                              W toku
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                          {phase.title}
                        </h3>
                        <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                          {phase.items.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlista" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-brand/20 bg-card/55 p-6 sm:p-8 lg:p-12">
          <FadeIn className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Program wczesnych testów
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Chcesz zobaczyć Estats wcześniej?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Dołącz do grona pierwszych testerów Estats. Oto, co dostajesz w zamian.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {testerBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <div className="estats-panel flex h-full gap-4 rounded-2xl p-5 text-left">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand-soft text-brand">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.1} className="mt-8">
            <WaitlistForm initialCount={waitlistCount} />
          </FadeIn>

          <FadeIn delay={0.15} className="mt-6">
            <details className="group mx-auto max-w-3xl">
              <summary className="flex cursor-pointer list-none flex-wrap items-center justify-center gap-x-1.5 text-center text-xs text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                <span>
                  Administratorem Twoich danych jest{" "}
                  <span className="font-medium text-foreground">Kult Technology sp. z o.o.</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-foreground/70">
                  <span className="group-open:hidden">Szczegóły</span>
                  <span className="hidden group-open:inline">Zwiń</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
                Zapisując się na listę oczekujących, wyrażasz zgodę na przetwarzanie Twojego adresu
                e-mail przez Kult Technology sp. z o.o. - administratora Twoich danych osobowych - w
                celu poinformowania Cię o starcie i wczesnym dostępie do Estats (podstawa prawna:
                art. 6 ust. 1 lit. a RODO). Podanie adresu jest dobrowolne, a zgodę możesz wycofać w
                każdej chwili, pisząc na{" "}
                <a
                  href="mailto:kontakt@kulttechnology.pl"
                  className="underline underline-offset-2 transition-colors hover:text-foreground"
                >
                  kontakt@kulttechnology.pl
                </a>
                , co nie wpływa na zgodność z prawem przetwarzania sprzed wycofania. Masz prawo
                dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania oraz
                wniesienia skargi do Prezesa UODO. Dane przechowujemy do czasu wycofania zgody lub
                zakończenia zapisów na listę oczekujących.
              </p>
            </details>
          </FadeIn>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <EstatsLogo />
          <div className="flex flex-col gap-1 sm:items-end">
            <span>Estats - nowoczesna platforma do zarządzania flipami nieruchomości.</span>
            <span>
              Stworzone przez{" "}
              <a
                href="https://kulttechnology.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Kult Technology
              </a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
