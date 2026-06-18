import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Camera,
  ChevronRight,
  Clock3,
  HandCoins,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
import estatsLogo from "@/assets/estats-logo.png.asset.json";

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
  "Jeden widok dla flippera, inwestora i koordynatora",
];

const trustItems = [
  { value: "1 system", label: "zakup, remont, sprzedaż i raportowanie" },
  { value: "3 role", label: "osobne widoki dla każdego uczestnika projektu" },
  { value: "Live", label: "aktualizacje postępu, kosztów i ryzyk" },
  { value: "ROI", label: "pełna czytelność finansów dla inwestora" },
];

const features = [
  {
    icon: Layers3,
    title: "Tracking projektu od zakupu do sprzedaży",
    copy:
      "Każdy etap flipa jest widoczny w jednym przepływie: harmonogram, status, dokumenty, zdjęcia i odpowiedzialne osoby.",
  },
  {
    icon: Wallet,
    title: "Finanse bez ukrytych luk",
    copy:
      "Budżet, koszty, prognoza zysku i odchylenia od planu są zawsze pod ręką — bez ręcznego sklejania danych z kilku źródeł.",
  },
  {
    icon: ShieldCheck,
    title: "Transparentność dla inwestora",
    copy:
      "Inwestor widzi postęp, kapitał, ROI i kluczowe aktualizacje bez dostępu do nadmiarowej operacyjnej złożoności.",
  },
  {
    icon: Camera,
    title: "Aktualizacje z budowy bez tarcia",
    copy:
      "Koordynator dodaje zdjęcia, statusy i zadania w prostym rytmie pracy, a reszta zespołu widzi efekty natychmiast.",
  },
];

const roles = [
  {
    title: "Flipper",
    subtitle: "Widok operacyjny i finansowy",
    icon: Building2,
    bullets: [
      "portfel projektów, alerty i quick actions",
      "pełna kontrola kosztów i marży",
      "zarządzanie spółkami, inwestorami i dokumentami",
    ],
  },
  {
    title: "Inwestor",
    subtitle: "Widok budujący zaufanie",
    icon: HandCoins,
    bullets: [
      "czytelny ROI, kapitał i prognoza zysku",
      "postęp projektu bez zbędnego clutteru",
      "raportowanie gotowe do udostępnienia",
    ],
  },
  {
    title: "Koordynator",
    subtitle: "Widok szybki i mobilny",
    icon: Clock3,
    bullets: [
      "duże akcje i proste aktualizacje z budowy",
      "timeline, zadania i terminy w jednym miejscu",
      "zdjęcia i statusy dodawane bez opóźnień",
    ],
  },
];

const timelineSteps = [
  {
    step: "01",
    title: "Zakup i setup projektu",
    copy: "Estats porządkuje strukturę projektu, spółkę, finansowanie i założenia marży od pierwszego dnia.",
  },
  {
    step: "02",
    title: "Remont i aktualizacje z placu",
    copy: "Każdy update, zdjęcie i przesunięcie terminu trafia do wspólnego strumienia, zamiast ginąć w wiadomościach.",
  },
  {
    step: "03",
    title: "Budżet kontra rzeczywistość",
    copy: "Koszty są widoczne na bieżąco, więc wiesz szybciej, gdzie projekt zjada marżę albo nabiera tempa.",
  },
  {
    step: "04",
    title: "Sprzedaż i rozliczenie",
    copy: "Na końcu zostaje przejrzysta historia projektu — przydatna dla inwestora, zespołu i kolejnych flipów.",
  },
];

const showcaseStats = [
  { label: "Aktywne projekty", value: "12" },
  { label: "Prognozowany zysk", value: "3,4 mln zł" },
  { label: "Koszty pod kontrolą", value: "91%" },
  { label: "Aktualizacje w tym tygodniu", value: "48" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estats — kontrola nad flipem od zakupu do sprzedaży" },
      {
        name: "description",
        content:
          "Estats to nowoczesna platforma SaaS do zarządzania flipami nieruchomości: finanse, postęp projektu, ROI, inwestorzy i aktualizacje z budowy w jednym miejscu.",
      },
      { property: "og:title", content: "Estats — kontrola nad flipem od zakupu do sprzedaży" },
      {
        property: "og:description",
        content:
          "Jedno miejsce do śledzenia projektu, kosztów i postępu inwestycji dla flipperów, inwestorów i koordynatorów.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/__l5e/assets-v1/05b09d56-d0ec-4896-8666-414f2d45a668/estats-logo.png" },
      { name: "twitter:title", content: "Estats — kontrola nad flipem od zakupu do sprzedaży" },
      {
        name: "twitter:description",
        content:
          "Platforma SaaS do zarządzania flipami nieruchomości z pełną transparentnością dla inwestorów.",
      },
      { name: "twitter:image", content: "/__l5e/assets-v1/05b09d56-d0ec-4896-8666-414f2d45a668/estats-logo.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Estats",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Platforma SaaS do zarządzania flipami nieruchomości: tracking projektu, finanse, ROI i aktualizacje z budowy.",
          inLanguage: "pl-PL",
          offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" },
        }),
      },
    ],
  }),
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
    <a href="/" className="flex items-center gap-3" aria-label="Estats — strona główna">
      <img
        src={estatsLogo.url}
        alt="Logo Estats"
        className="h-8 w-auto object-contain sm:h-9"
      />
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">Estats</span>
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
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-10 hidden rounded-2xl border border-border bg-card/75 px-4 py-3 text-sm text-muted-foreground shadow-2xl lg:block"
      >
        <div className="mb-2 flex items-center gap-2 text-foreground">
          <BadgeCheck className="h-4 w-4 text-brand" />
          Opóźnienie wykryte wcześniej
        </div>
        <div>Korekta harmonogramu przed wzrostem kosztów.</div>
      </motion.div>
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -right-6 bottom-14 hidden rounded-2xl border border-brand/20 bg-brand-soft px-4 py-3 text-sm text-foreground shadow-2xl xl:block"
      >
        <div className="mb-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">ROI</div>
        <div className="text-lg font-semibold">+18,4%</div>
      </motion.div>

      <div className="estats-panel estats-shimmer relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
        <div className="flex items-center justify-between rounded-[1.4rem] border border-border/70 bg-card/70 px-4 py-3">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Projekt</div>
            <div className="mt-1 text-lg font-semibold text-foreground">Warszawa / Mokotów / M-47</div>
          </div>
          <div className="rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium text-foreground">
            Remont w toku
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_1.4fr_0.9fr]">
          <div className="space-y-3 rounded-[1.5rem] border border-border/70 bg-card/65 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Portfel</div>
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
                    <div className="mt-1 text-xs text-muted-foreground">Ostatnia aktualizacja 2h temu</div>
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
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Timeline</div>
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
                <div key={label} className="rounded-2xl border border-border/70 bg-background/55 px-3 py-3">
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-muted-foreground">{progress}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={reduceMotion ? undefined : { width: 0 }}
                      animate={reduceMotion ? undefined : { width: progress }}
                      transition={{ delay: 0.5 + index * 0.16, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="estats-pulse-line h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <MockMetric label="Budżet vs actual" value="92%" tone="brand" />
            <MockMetric label="Prognoza marży" value="312 tys. zł" />
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

function Index() {
  const reduceMotion = useReducedMotion();

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
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Real-time tech platform dla flipów nieruchomości
              </div>

              <div className="space-y-6">
                <h1 className="font-display max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Kontroluj każdy etap flipa w jednym systemie.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Estats łączy tracking projektu, finanse, dokumenty i aktualizacje z budowy w jednym uporządkowanym widoku dla flippera, inwestora i koordynatora.
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

      <section id="funkcje" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          <FadeIn>
            <SectionHeading
              eyebrow="Projekt tracking first"
              title="Najpierw widzisz postęp. Potem wszystko inne zaczyna się zgadzać."
              copy="Pierwsze sekundy w Estats mają odpowiedzieć na jedno pytanie: co dzieje się z projektem teraz. Dlatego tracking, status i ryzyka są na pierwszym planie — zanim wejdziesz głębiej w finanse i dokumenty."
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
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">{feature.title}</h3>
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
              eyebrow="Role-based UX"
              title="Każda rola widzi tylko to, czego naprawdę potrzebuje."
              copy="Estats nie próbuje zmusić wszystkich do jednego dashboardu. Widok flippera jest gęsty i decyzyjny, inwestora — klarowny i zaufaniowy, a koordynatora — szybki i mobilny."
            />
          </FadeIn>

          <div className="grid gap-4 xl:grid-cols-3">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <FadeIn key={role.title} delay={index * 0.1}>
                  <article className={`rounded-[1.9rem] p-6 ${index === 0 ? "estats-panel-strong" : "estats-panel"}`}>
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{role.subtitle}</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{role.title}</h3>
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
              eyebrow="Workflow"
              title="Od zakupu do sprzedaży — jeden rytm pracy zamiast dziesięciu narzędzi."
              copy="Projekt nie rozjeżdża się między Excelem, komunikatorem i zdjęciami z budowy. W Estats każda decyzja i każdy update trafia do wspólnego przebiegu projektu."
            />
          </FadeIn>

          <div className="grid gap-4 lg:grid-cols-4">
            {timelineSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.08}>
                <article className="estats-panel h-full rounded-[1.75rem] p-6">
                  <div className="text-sm font-semibold text-brand">{step.step}</div>
                  <div className="estats-gradient-line mt-5 h-px w-full" />
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
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
                  Financial clarity
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Decyzje oparte na danych, a nie na domysłach.
                </h2>
                <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                  Gdy status projektu, wydatki i marża są widoczne razem, szybciej wyłapujesz ryzyko i łatwiej budujesz zaufanie inwestorów. Estats ma wyglądać dokładnie tak: czysto, szybko i bez niedopowiedzeń.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {showcaseStats.map((stat, index) => (
                    <FadeIn key={stat.label} delay={0.08 + index * 0.05}>
                      <div className="rounded-2xl border border-border bg-background/70 px-4 py-4">
                        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</div>
                        <div className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{stat.value}</div>
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
                      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Portfolio board</div>
                      <div className="mt-1 text-lg font-semibold text-foreground">Widok operacyjny flippera</div>
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
                        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.label}</div>
                        <div className="mt-2 text-xl font-semibold text-foreground">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="estats-panel estats-float-delay rounded-[1.8rem] p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Investor view</div>
                    <div className="mt-2 text-lg font-semibold text-foreground">Przejrzysty raport</div>
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
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Coordinator updates</div>
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

      <section id="waitlista" className="relative z-10 px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-brand/20 bg-card/55 p-6 sm:p-8 lg:p-12">
          <FadeIn className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Early access
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Chcesz zobaczyć Estats wcześniej?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Zostaw kontakt do waitlisty i sprawdź, jak może wyglądać nowy standard zarządzania flipami nieruchomości. Sekcja ma charakter prezentacyjny — formularz jest częścią landing page demo.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10">
            <div className="estats-panel mx-auto grid max-w-3xl gap-4 rounded-[2rem] p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5">
              <label className="min-w-0">
                <span className="sr-only">Adres e-mail</span>
                <input
                  type="email"
                  placeholder="Twój e-mail służbowy"
                  className="h-14 w-full rounded-[1.2rem] border border-input bg-background px-5 text-base text-foreground outline-none transition focus:border-ring"
                />
              </label>
              <button
                type="button"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[1.2rem] bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Dołącz do waitlisty
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <EstatsLogo />
          <div>Estats — nowoczesna platforma do zarządzania flipami nieruchomości.</div>
        </div>
      </footer>
    </main>
  );
}
