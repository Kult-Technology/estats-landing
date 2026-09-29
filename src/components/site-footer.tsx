import { Link } from "@tanstack/react-router";

import { EstatsLogo } from "./estats-logo";

const linkClass =
  "font-medium text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border px-5 py-8 sm:px-6 lg:px-8 print:hidden">
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
              className={linkClass}
            >
              Kult Technology
            </a>
          </span>
          <nav aria-label="Dokumenty" className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
            <Link to="/regulamin" className={linkClass}>
              Regulamin
            </Link>
            <Link to="/prywatnosc" className={linkClass}>
              Polityka prywatności
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
