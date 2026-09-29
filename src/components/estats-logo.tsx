export function EstatsLogo() {
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
