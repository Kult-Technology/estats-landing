// Single source of truth for SEO/canonical URLs. Change SITE_URL here if the
// production domain changes — every meta tag, canonical, OG/Twitter image and
// structured-data reference is derived from it.

export const SITE_URL = "https://estats.pl";

// Social share image. Ideally a dedicated 1200x630 PNG at /og-image.png; until
// one is added we point at the existing 512x512 brand icon (it still renders,
// just center-cropped on large cards).
export const OG_IMAGE = `${SITE_URL}/favicon-512x512.png`;
export const OG_IMAGE_WIDTH = "512";
export const OG_IMAGE_HEIGHT = "512";
export const OG_IMAGE_ALT = "Estats - platforma do zarządzania flipami nieruchomości";
