/** Brand palette — dark base + vibrant orange accent */
export const BRAND = {
  bg: "#050505",
  surface: "#0a0a0a",
  surfaceElevated: "#111111",
  text: "#f4f4f5",
  textMuted: "#a1a1aa",
  border: "#27272a",
  accent: "#ff5b00",
  accentHover: "#ff7a33",
} as const;

/** Hash sections on the home page */
export const SECTION_IDS = {
  home: "home",
  contact: "contact",
} as const;

/**
 * Main navigation — Home scrolls on `/`; Portfolio, About, and Contact are dedicated routes.
 */
export const NAV_LINKS = [
  { href: `/#${SECTION_IDS.home}`, label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;
