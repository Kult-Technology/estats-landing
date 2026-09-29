import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useEffect, type ReactNode } from "react";

import { COMPANY, LEGAL_EFFECTIVE_DATE } from "../lib/company";
import { EstatsLogo } from "./estats-logo";
import { SiteFooter } from "./site-footer";

export type LegalSection = {
  // The anchor a link or the contents list jumps to, e.g. /regulamin#reklamacje
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  sections: LegalSection[];
};

// The postcode and city never part across a line; the hyphen in "15-025" would otherwise
// break it after "15-".
export function CompanyAddress() {
  return (
    <>
      {COMPANY.street},{" "}
      <span className="whitespace-nowrap">
        {COMPANY.postcode} {COMPANY.city}
      </span>
    </>
  );
}

function Contents({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-1 text-sm">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="block rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
          >
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalDocument({ title, sections }: LegalDocumentProps) {
  const hash = useLocation({ select: (location) => location.hash });

  // A link into a section (the privacy policy's "§ 15", or one from the app) lands on it. The
  // router's scroll restoration puts the page back at the top after the browser has jumped, so
  // the jump is made again once the page is on screen.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
  }, [hash]);

  return (
    <div className="legal-page relative min-h-screen bg-background text-foreground">
      <header className="relative z-20 print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <EstatsLogo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Strona główna
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-5 pb-24 pt-6 sm:px-6 lg:px-8 lg:pt-12">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block print:hidden">
            <nav aria-label="Spis treści" className="sticky top-8 -ml-3">
              <Contents sections={sections} />
            </nav>
          </aside>

          <article className="min-w-0 max-w-[46rem]">
            <header className="legal-prose">
              <h1>{title}</h1>
              <p className="legal-effective">Obowiązuje od {LEGAL_EFFECTIVE_DATE}</p>
            </header>

            <details className="group mt-8 rounded-2xl border border-border bg-card/50 lg:hidden print:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                Spis treści
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <nav aria-label="Spis treści" className="px-1 pb-3">
                <Contents sections={sections} />
              </nav>
            </details>

            <div className="legal-prose">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2>{section.title}</h2>
                  {section.body}
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
