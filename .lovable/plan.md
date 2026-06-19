# Plan for Estats landing page

## What I’ll build

- Replace the placeholder homepage with a polished, responsive landing page for Estats.
- Use your branding kit directly: black/white foundation, grayscale support tones, and the blue accent from the kit.
- Keep the page in Polish.
- Make the main CTA a visual-only waitlist capture section.
- Build the hero around an animated product UI, with motion intensity pushed high while still keeping the page usable and premium.

## Page structure

1. Hero
   - Strong headline for Estats
   - Short positioning copy for real-estate flip management
   - Visual-only waitlist CTA
   - Animated product mockup showing project tracking, progress, finances, and role-based views
2. Trust/value band
   - Short statements about transparency, speed, and investor clarity
3. Core features section
   - Project tracking
   - Financial control
   - Investor visibility
   - Role-based workflows
4. Role-based experience section
   - Flipper, Investor, Coordinator cards/panels with distinct benefits
5. Product story / timeline section
   - Motion-led narrative showing how a flip moves from purchase to renovation to sale
6. KPI / dashboard showcase
   - Animated stats and UI fragments inspired by Vercel-style clarity
7. Final CTA
   - Waitlist form UI and closing brand statement

## Visual direction

- A dark, premium, minimal SaaS aesthetic similar in discipline to Vercel, but customized to Estats.
- Large clean typography, precise spacing, sharp hierarchy, restrained palette.
- Motion inspired by dropship.io-style energy: layered reveals, parallax-like depth, animated panels, counters, beams/glows, and scroll-driven transitions.
- The blue accent will be used sparingly for emphasis so the brand stays premium rather than flashy.

## Motion approach

- Hero: staged entrance, animated grid/light treatment, product UI floating/revealing in layers.
- Scroll sections: progressive reveal, card transforms, stat counting, timeline motion.
- CTA and key panels: subtle spotlight/shimmer/beam effects where useful.
- Respect reduced-motion preferences so the page still feels polished without overwhelming users.

## Technical details

- Update `src/routes/index.tsx` to become the full landing page.
- Update global styling tokens in `src/styles.css` to match the Estats brand system.
- Improve page SEO metadata in the route head and root head where appropriate.
- Use responsive layouts so the page works on desktop, tablet, and mobile.
- Use the uploaded branding assets as reference and likely embed the logo as part of the UI.
- Keep the CTA visual-only for now: no backend or data storage.

## Notes before implementation

- I’ll write the copy in Polish and prioritize project tracking in the early sections, as requested.
- Since this is a landing page, I’ll focus on presentation and storytelling rather than building product functionality.
- If needed during implementation, I may create lightweight mock dashboard visuals directly in the page to sell the product experience.
