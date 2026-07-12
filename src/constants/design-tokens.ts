/**
 * JavaScript-accessible design token constants.
 * Mirrors CSS custom properties defined in globals.css for use in
 * Framer Motion, charts, canvas, and runtime theming.
 */

export const COLORS = {
  brand: {
    primary: "oklch(0.45 0.18 265)",
    primaryLight: "oklch(0.55 0.16 265)",
    primaryDark: "oklch(0.35 0.14 265)",
    accent: "oklch(0.58 0.14 230)",
    accentLight: "oklch(0.72 0.10 230)",
  },
  semantic: {
    success: "oklch(0.55 0.15 155)",
    warning: "oklch(0.75 0.15 75)",
    error: "oklch(0.55 0.22 25)",
    info: "oklch(0.58 0.14 230)",
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: "var(--font-sans)",
    heading: "var(--font-heading)",
    mono: "var(--font-mono)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    display: "4.5rem",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.75,
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

export const SPACING = {
  section: {
    sm: "3rem",
    md: "5rem",
    lg: "7rem",
    xl: "9rem",
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
  gutter: {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
} as const;

export const RADIUS = {
  none: "0",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const SHADOWS = {
  xs: "0 1px 2px oklch(0.18 0.02 260 / 0.04)",
  sm: "0 1px 3px oklch(0.18 0.02 260 / 0.06), 0 1px 2px oklch(0.18 0.02 260 / 0.04)",
  md: "0 4px 6px oklch(0.18 0.02 260 / 0.05), 0 2px 4px oklch(0.18 0.02 260 / 0.04)",
  lg: "0 10px 15px oklch(0.18 0.02 260 / 0.06), 0 4px 6px oklch(0.18 0.02 260 / 0.04)",
  xl: "0 20px 25px oklch(0.18 0.02 260 / 0.08), 0 8px 10px oklch(0.18 0.02 260 / 0.04)",
  "2xl": "0 25px 50px oklch(0.18 0.02 260 / 0.12)",
  brand: "0 4px 14px oklch(0.45 0.18 265 / 0.25)",
  inner: "inset 0 2px 4px oklch(0.18 0.02 260 / 0.05)",
} as const;

export const ANIMATION = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 700,
  },
  easing: {
    default: [0.4, 0, 0.2, 1] as const,
    in: [0.4, 0, 1, 1] as const,
    out: [0, 0, 0.2, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
    spring: [0.34, 1.56, 0.64, 1] as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;
