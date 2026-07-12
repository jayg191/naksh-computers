import type { Variants, Transition } from "framer-motion";
import { ANIMATION } from "@/constants";

const { duration, easing, stagger } = ANIMATION;

/** Shared transition presets for consistent motion across the site. */
export const transitions = {
  fast: {
    duration: duration.fast / 1000,
    ease: easing.out,
  } satisfies Transition,
  normal: {
    duration: duration.normal / 1000,
    ease: easing.default,
  } satisfies Transition,
  slow: {
    duration: duration.slow / 1000,
    ease: easing.inOut,
  } satisfies Transition,
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  } satisfies Transition,
} as const;

/** Fade in from below — primary entrance animation for sections and cards. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

/** Fade in with scale — for modals, dialogs, and featured elements. */
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

/** Stagger children — for grids, feature lists, and stat rows. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

/** Slide in from left — for sidebar panels and navigation drawers. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

/** Slide in from right — for CTAs and complementary content blocks. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.normal,
  },
};

/** Page transition wrapper for route-level animations. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: transitions.fast,
  },
};

/** Hover lift effect for interactive cards. */
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: transitions.fast,
  },
};
