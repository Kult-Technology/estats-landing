# Estats — Design System & Styling Guide (for the web app)

> **How to use this file:** drop it into the Estats **app** repository as `CLAUDE.md`
> (or paste it into the app's existing `CLAUDE.md`). It tells Claude how to style the
> app so it matches the brand established by the marketing site. It is the **source of
> truth for visuals** — tokens, typography, surfaces, components, motion, and voice.
>
> **Stack assumed:** React + SCSS. Theming is done with **CSS custom properties**
> (so dark/light can switch at runtime); SCSS adds nesting, mixins, and structure on top.
> **Theme:** dark **and** light, dark-first (the brand is dark).
> **Style level:** *app-oriented* — same brand and tokens as the marketing site, but
> calmer: less decorative motion, denser layouts, legibility and function first.

---

## 0. Golden rules (read first)

1. **Never hard-code colors, radii, or font families.** Always use the CSS variables
   in §2. If you need a value that doesn't exist, add a token — don't inline a hex.
2. **Dark-first, but every screen must work in light too.** Test both. Use semantic
   tokens (`--surface`, `--text`, `--border`) so a theme flip "just works."
3. **This is an app, not a landing page.** Do **not** bring the marketing animations
   (animated grids, shimmer, floating panels, spotlights, marquees) into the app UI.
   Motion is subtle and functional (§8).
4. **One accent.** Electric blue (`--brand`) is the only brand color. Use it for primary
   actions, focus, active/selected state, and key data highlights — sparingly. Everything
   else is neutral greys.
5. **Respect `prefers-reduced-motion`** everywhere (§8).
6. **WCAG AA contrast minimum** for text and interactive elements (§9).
7. **Polish UI copy**, understated and concrete (§10).

---

## 1. Brand essence

Estats is a serious, premium tool for managing real‑estate flips. The feeling is
**calm, precise, and trustworthy** — a quiet dark interface with a single confident
electric‑blue accent and generous space. Think "financial‑grade software," not
"flashy startup."

- **Mood:** dark, refined, low‑noise, high‑signal.
- **Accent:** electric blue, used as punctuation — not wallpaper.
- **Surfaces:** soft, subtly elevated panels with hairline borders.
- **Type:** Geist — clean, modern, slightly technical.
- **Density (app):** comfortable but efficient; data should breathe without wasting space.

---

## 2. Design tokens

Put this in a global stylesheet (e.g. `styles/_tokens.scss` imported once at the root).
Switch themes by setting `data-theme="light"` / `data-theme="dark"` on `<html>`.
Dark is the default.

```scss
// _tokens.scss  — copy verbatim, then reference everywhere as var(--token)

:root {
  // ---- Shared (theme-independent) ----
  --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-display: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-signature: "Caveat", cursive; // accent only, used VERY sparingly

  // Radius scale (base 14px)
  --radius: 0.875rem;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --radius-2xl: 1.75rem;
  --radius-pill: 999px;

  // Spacing scale (4px base — use these, don't invent)
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.25rem;  --space-6: 1.5rem;
  --space-8: 2rem;     --space-10: 2.5rem;  --space-12: 3rem;  --space-16: 4rem;

  // Brand hue is blue ~255°. Brand stays recognizable across themes.
  --brand: oklch(0.61 0.21 255.3);        // electric blue  (~#3b76ff)
  --brand-contrast: #ffffff;              // text/icon ON a brand fill

  // Easing + durations (app motion is fast + subtle)
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 120ms;
  --dur: 180ms;
  --dur-slow: 260ms;
}

// ---- DARK (default) — these are the EXACT values from the marketing site ----
:root,
:root[data-theme="dark"] {
  color-scheme: dark;

  --background: oklch(0.11 0 0);          // page            (~#141416)
  --background-subtle: oklch(0.13 0 0);   // alt page band
  --surface: oklch(0.145 0 0);            // cards/panels     (~#1c1c1f)
  --surface-2: oklch(0.18 0 0);           // nested/raised
  --surface-foreground: oklch(0.985 0 0);

  --text: oklch(0.985 0 0);               // primary text     (~#fafafa)
  --text-muted: oklch(0.76 0 0);          // secondary text   (~#b3b3b3)
  --text-faint: oklch(0.60 0 0);          // tertiary / hints

  --border: oklch(1 0 0 / 0.12);          // hairline
  --border-strong: oklch(1 0 0 / 0.20);
  --input: oklch(1 0 0 / 0.14);

  --brand-text: oklch(0.72 0.16 255.3);   // brand-colored TEXT on dark (~#8fb0ff)
  --brand-soft: oklch(0.61 0.21 255.3 / 0.16); // tinted brand background
  --brand-ring: oklch(0.61 0.21 255.3 / 0.55);

  --success: oklch(0.72 0.17 150);
  --warning: oklch(0.80 0.15 80);
  --danger:  oklch(0.62 0.23 28);
  --danger-contrast: #ffffff;

  --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.4);
  --shadow-md: 0 8px 24px oklch(0 0 0 / 0.45);
  --shadow-lg: 0 24px 70px oklch(0 0 0 / 0.55);
  // subtle top highlight that gives panels their "lifted" feel
  --inset-hi: inset 0 1px 0 oklch(1 0 0 / 0.06);
}

// ---- LIGHT ----
:root[data-theme="light"] {
  color-scheme: light;

  --background: oklch(0.985 0 0);         // page            (~#fafafa)
  --background-subtle: oklch(0.965 0 0);  // alt page band
  --surface: oklch(1 0 0);                // cards/panels     (#ffffff)
  --surface-2: oklch(0.975 0 0);          // nested/raised
  --surface-foreground: oklch(0.20 0 0);

  --text: oklch(0.20 0 0);                // primary text     (~#1f2024)
  --text-muted: oklch(0.45 0 0);          // secondary text   (~#6b6f76)
  --text-faint: oklch(0.58 0 0);

  --border: oklch(0 0 0 / 0.10);
  --border-strong: oklch(0 0 0 / 0.16);
  --input: oklch(0 0 0 / 0.14);

  // Slightly darker brand for AA contrast on white surfaces.
  --brand: oklch(0.56 0.20 255.3);        // (~#345fe0)
  --brand-text: oklch(0.50 0.20 255.3);   // brand text on light
  --brand-soft: oklch(0.61 0.21 255.3 / 0.10);
  --brand-ring: oklch(0.56 0.20 255.3 / 0.40);

  --success: oklch(0.55 0.16 150);
  --warning: oklch(0.66 0.15 75);
  --danger:  oklch(0.55 0.22 27);

  --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.06);
  --shadow-md: 0 8px 24px oklch(0 0 0 / 0.08);
  --shadow-lg: 0 20px 50px oklch(0 0 0 / 0.12);
  --inset-hi: inset 0 1px 0 oklch(1 0 0 / 0.6);
}
```

**Notes**
- `oklch()` is the source of truth (it's what the marketing site uses). All modern
  browsers support it. Approx hex are only for picking in design tools.
- Don't reach for `--chart-*` etc. unless you build charts — use `--brand` + neutrals.
- The marketing site also exposes `--card`, `--muted-foreground`, `--primary`,
  `--brand-soft` etc.; the names above are the app-friendly aliases (same values).

---

## 3. Typography

**Fonts:** **Geist** for everything (UI + display). **Caveat** is a handwriting accent
used only for human/personal touches (e.g. a signature) — basically never in app chrome.

Load Geist + Caveat once (pick one):
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Geist:wght@400;500;600;700;800&display=swap">
```
…or via npm: `@fontsource/geist-sans` and `@fontsource/caveat`.

**Type scale** (use `clamp()` for fluid headings; values are desktop targets):

| Role            | Size / line-height        | Weight | Tracking | Notes |
|-----------------|---------------------------|--------|----------|-------|
| Display / h1    | 2.25–3rem / 1.1           | 600    | -0.02em  | page titles, rare in app |
| h2 / section    | 1.5–1.875rem / 1.2        | 600    | -0.015em |       |
| h3 / card title | 1.125–1.25rem / 1.3       | 600    | -0.01em  |       |
| Body            | 0.9375–1rem / 1.6         | 400    | 0        | default text |
| Body strong     | 0.9375–1rem / 1.6         | 500–600|          | emphasis |
| Small / meta    | 0.8125rem / 1.5           | 400–500| 0        | `--text-muted` |
| Overline/eyebrow| 0.6875rem / 1.4           | 600    | 0.16em   | UPPERCASE, `--text-muted` |

```scss
%h2 { font-family: var(--font-display); font-weight: 600;
      font-size: clamp(1.5rem, 1.1rem + 1.4vw, 1.875rem); line-height: 1.2;
      letter-spacing: -0.015em; color: var(--text); }
.eyebrow { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.16em;
           text-transform: uppercase; color: var(--text-muted); }
```

Rules: headings use `--font-display` + tight tracking; body stays comfortable
(line-height ≥ 1.5); secondary text uses `--text-muted`; never set body below ~13px.

---

## 4. Surfaces & elevation

The signature look is a **soft, subtly-lifted panel**: hairline border, faint top
highlight, gentle shadow. In the app, keep shadows lighter than the marketing site
(no 120px brand glows). Three levels:

```scss
@mixin surface($pad: var(--space-5)) {           // default card/panel
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--inset-hi), var(--shadow-md);
  padding: $pad;
}

@mixin surface-flat($pad: var(--space-4)) {       // quiet container, no shadow
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: $pad;
}

@mixin surface-brand($pad: var(--space-5)) {      // the "highlighted / primary" panel
  background: linear-gradient(180deg,
    color-mix(in oklab, var(--brand) 8%, var(--surface)), var(--surface));
  border: 1px solid color-mix(in oklab, var(--brand) 30%, var(--border));
  border-radius: var(--radius-xl);
  box-shadow: var(--inset-hi), 0 0 0 1px color-mix(in oklab, var(--brand) 8%, transparent);
  padding: $pad;
}
```

Elevation order: **page (`--background`) → surface (`--surface`) → nested
(`--surface-2`)**. Don't stack more than ~2 surface levels; use spacing and borders
to separate instead of ever-deeper shadows.

---

## 5. Component recipes

Build these as React components with SCSS modules. All reference the tokens — no inline
colors. (The marketing site only had buttons / pills / cards; the rest below are derived
from the same tokens so the app stays consistent.)

### Buttons
```scss
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  height: 2.5rem; padding: 0 var(--space-5);
  border-radius: var(--radius-pill);          // pills on the marketing site; pills or
  font: 600 0.9375rem/1 var(--font-sans);     // --radius-md is fine in dense app areas
  cursor: pointer; transition: transform var(--dur) var(--ease),
              background-color var(--dur) var(--ease), border-color var(--dur) var(--ease);
  &:focus-visible { outline: 2px solid var(--brand-ring); outline-offset: 2px; }
  &:disabled { opacity: 0.5; pointer-events: none; }

  &--primary {                                  // the main action
    background: var(--brand); color: var(--brand-contrast); border: 1px solid transparent;
    &:hover { transform: translateY(-1px);
      background: color-mix(in oklab, var(--brand) 92%, white); }
  }
  &--secondary {                                // neutral / "ghost outline"
    background: color-mix(in oklab, var(--surface) 80%, transparent);
    color: var(--text); border: 1px solid var(--border);
    &:hover { background: var(--surface-2); }
  }
  &--ghost { background: transparent; color: var(--text-muted); border: 1px solid transparent;
    &:hover { background: var(--surface-2); color: var(--text); } }
  &--danger { background: var(--danger); color: var(--danger-contrast); border: 1px solid transparent; }
  &--sm { height: 2rem; padding: 0 var(--space-3); font-size: 0.8125rem; }
}
```

### Inputs / forms
```scss
.field { display: grid; gap: var(--space-2); }
.label { font-size: 0.8125rem; font-weight: 500; color: var(--text-muted); }
.input, .select, .textarea {
  width: 100%; min-height: 2.5rem; padding: 0 var(--space-3);
  background: var(--surface); color: var(--text);
  border: 1px solid var(--input); border-radius: var(--radius-md);
  font: 400 0.9375rem/1.5 var(--font-sans);
  transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  &::placeholder { color: var(--text-faint); }
  &:focus-visible { outline: none; border-color: var(--brand);
    box-shadow: 0 0 0 3px var(--brand-ring); }
  &[aria-invalid="true"] { border-color: var(--danger); }
}
.hint { font-size: 0.75rem; color: var(--text-faint); }
.error { font-size: 0.75rem; color: var(--danger); }
```
Forms: label above input, generous gaps, one clear primary action, inline validation,
helper text in `--text-faint`. Group with `@include surface-flat`.

### Card
```scss
.card { @include surface; }
.card__title { font: 600 1.125rem/1.3 var(--font-display); letter-spacing: -0.01em; color: var(--text); }
.card__meta  { font-size: 0.8125rem; color: var(--text-muted); }
```

### Badges / chips / status pills
```scss
.badge { display: inline-flex; align-items: center; gap: var(--space-2);
  padding: 0.2rem 0.6rem; border-radius: var(--radius-pill);
  font: 600 0.6875rem/1 var(--font-sans); letter-spacing: 0.04em; text-transform: uppercase;
  background: var(--surface-2); color: var(--text-muted); border: 1px solid var(--border); }
.badge--brand   { background: var(--brand-soft); color: var(--brand-text);
                  border-color: color-mix(in oklab, var(--brand) 30%, transparent); }
.badge--success { color: var(--success); border-color: color-mix(in oklab, var(--success) 35%, transparent);
                  background: color-mix(in oklab, var(--success) 14%, transparent); }
.badge--warning { color: var(--warning); background: color-mix(in oklab, var(--warning) 16%, transparent); }
.badge--danger  { color: var(--danger);  background: color-mix(in oklab, var(--danger) 14%, transparent); }
```
Use status pills for flip stages, ROI flags, role tags, etc. Pick **one** semantic color
per state; keep them small.

### Tabs / segmented control
```scss
.tabs { display: inline-flex; gap: var(--space-1); padding: var(--space-1);
  background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-md); }
.tab { padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
  font: 500 0.875rem/1 var(--font-sans); color: var(--text-muted); cursor: pointer;
  &[aria-selected="true"] { background: var(--surface); color: var(--text); box-shadow: var(--shadow-sm); } }
```

### Table (key for a data app)
```scss
.table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
.table th { text-align: left; padding: var(--space-3) var(--space-4);
  font: 600 0.6875rem/1 var(--font-sans); letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--text-muted); border-bottom: 1px solid var(--border); }
.table td { padding: var(--space-3) var(--space-4); color: var(--text);
  border-bottom: 1px solid var(--border); }
.table tbody tr:hover { background: color-mix(in oklab, var(--surface-2) 60%, transparent); }
.table tbody tr[data-selected="true"] { background: var(--brand-soft); }
```
Numbers (money, ROI, %) → tabular figures (`font-variant-numeric: tabular-nums;`),
right-aligned. Highlight the meaningful column subtly; don't color whole rows unless
they're a state.

### Sidebar / app nav
```scss
.sidebar { background: var(--background-subtle); border-right: 1px solid var(--border);
  padding: var(--space-4); }
.navitem { display: flex; align-items: center; gap: var(--space-3);
  padding: var(--space-2) var(--space-3); border-radius: var(--radius-md);
  color: var(--text-muted); font: 500 0.9375rem/1 var(--font-sans); cursor: pointer;
  &:hover { background: var(--surface-2); color: var(--text); }
  &[aria-current="page"] { background: var(--brand-soft); color: var(--brand-text); } }
```

### Dialog / modal, toast, tooltip
- **Dialog:** centered `@include surface` (use `--radius-2xl`), backdrop
  `background: color-mix(in oklab, var(--background) 70%, black)` with light blur; trap
  focus; close on `Esc`.
- **Toast:** small `@include surface-flat`, `--shadow-lg`, a left accent border in the
  semantic color, auto-dismiss, bottom/right.
- **Tooltip:** `--surface-2` bg, `--text` fg, `--radius-sm`, small shadow, 12–13px.

### Empty / loading states
- Empty: a muted icon (lucide, `--text-faint`), one line of `--text` + one of
  `--text-muted`, and a primary action. Never a blank screen.
- Loading: skeletons using `--surface-2` (a slow opacity pulse, ≤1 cycle under reduced
  motion), or a small spinner in `--brand`. Avoid layout shift.

---

## 6. Iconography

- Library: **lucide** (`lucide-react`). It's what the marketing site uses — consistent,
  clean, outline icons.
- Stroke ~1.75–2; size 16/18/20 in UI, 24 for feature/empty states.
- Color: inherit `currentColor`; muted by default (`--text-muted`), `--brand` only when
  the icon is the accent (active nav, primary action, key metric).
- One icon set only — don't mix lucide with another family.

---

## 7. Layout, spacing & density

- **Spacing:** only use the `--space-*` scale. Default gaps: 16–24px between fields,
  24–32px between cards/sections. App areas can go denser (8–12px) where data is tight.
- **Radius:** cards `--radius-xl`, inner elements `--radius-md`, pills `--radius-pill`.
  Keep radii consistent within a view.
- **Containers:** content max-width ~1200–1280px for marketing-ish pages; app shells go
  full-width with a fixed sidebar + fluid main and a comfortable content max (~1100px) for
  reading-heavy panels.
- **Grid:** 12-col or CSS grid with `gap: var(--space-4)`; align to the spacing scale.
- **Borders over shadows** to separate dense regions; reserve shadows for true elevation
  (cards, popovers, dialogs).

---

## 8. Motion (app = subtle)

- **Defaults:** `--dur` (180ms) with `--ease`. Transitions on color, background, border,
  transform, opacity — not on `all`.
- **Allowed in app:** hover lifts (`translateY(-1px)`), fades/slides on mount for new
  content (≤8px, ≤260ms), skeleton pulses, focus-ring transitions, expanding rows/accordions.
- **Marketing-only — DO NOT use in the app:** the `estats-grid` drift, `estats-shimmer`,
  `estats-float`, `estats-spotlight`, `estats-marquee`, `estats-pulse-line`, big brand
  glows, infinite Ken-Burns image loops. Those belong on the landing page.
- **Reduced motion:** wrap all non-essential motion:
```scss
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important; animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important; scroll-behavior: auto !important;
  }
}
```

---

## 9. States & accessibility

- **Focus:** always visible — `outline: 2px solid var(--brand-ring); outline-offset: 2px`
  (or the `box-shadow` ring on inputs). Never remove focus styles.
- **Contrast:** body text vs background ≥ 4.5:1; large text / UI ≥ 3:1. The light-theme
  `--brand`/`--brand-text` are pre-darkened for this — verify any new brand-on-light usage.
- **Hit areas:** interactive targets ≥ 40px tall.
- **Color is never the only signal:** pair status colors with text/icons (a red dot alone
  isn't enough).
- **Semantics:** real `<button>`/`<a>`, labels tied to inputs, `aria-current`,
  `aria-selected`, `aria-invalid`, dialog focus trapping, logical heading order.

---

## 10. Voice & microcopy (Polish)

The product is Polish. Match the marketing site's tone: **understated, credible,
concrete — no hype.**

- Sentence case for UI labels and buttons; verbs for actions ("Dodaj flip", "Zapisz",
  "Generuj raport").
- Short, plain, specific. Prefer concrete nouns the user knows (flip, inwestycja,
  remont, ROI, marża, koordynator).
- The product name is always **Estats**.
- Empty/error states are helpful and human, not cute. Be honest (the brand avoids
  over-promising — e.g. don't invent fake numbers or dates).
- Money/dates: Polish formatting (`pl-PL`, `zł`).

---

## 11. Quick checklist (before shipping any screen)

- [ ] Only token variables used — no inline hex, px radii, or font names.
- [ ] Looks correct in **both** dark and light (`data-theme` flip).
- [ ] Text meets AA contrast; focus rings visible on every interactive element.
- [ ] Brand blue used only for primary action / focus / active / key data.
- [ ] No marketing animations; motion respects reduced-motion.
- [ ] Spacing/radii come from the scales; numbers use tabular figures.
- [ ] Copy is Polish, concise, sentence-case, honest.

---

## 12. Provenance (where these values come from)

These tokens are lifted from the Estats marketing site so the app and the site read as
one product:
- **Brand blue:** `oklch(0.61 0.21 255.3)` (~`#3b76ff`).
- **Dark theme:** background `oklch(0.11 0 0)`, surface `oklch(0.145 0 0)`, muted text
  `oklch(0.76 0 0)`, hairline border `oklch(1 0 0 / 12%)`.
- **Fonts:** Geist (400–800) for UI/display, Caveat (500/600) as a rare handwritten accent.
- **Light theme** here is derived to match (same brand/hue, inverted neutrals, brand
  darkened for AA on white).

If anything is ambiguous, prefer the **dark** values as canonical and ask the design
owner before introducing a new color or a new motion pattern.
