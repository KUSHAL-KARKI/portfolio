// animations/variants.ts
import type { Transition, Variants } from "framer-motion";

// Cast directly to Framer's expected type via the Transition interface
const easeOut: Transition["ease"] = [0.25, 0.1, 0.25, 1];
const easeOutBack: Transition["ease"] = [0.34, 1.56, 0.64, 1];

// ─── Primitive Transition Builder ─────────────────────────────────────────────

const t = (duration = 0.65, delay = 0, ease: Transition["ease"] = easeOut): Transition => ({
  duration,
  ease,
  delay,
});

// ─── Page Fade ────────────────────────────────────────────────────────────────

export const pageFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: t(0.8) },
};

// ─── Stagger Container ────────────────────────────────────────────────────────

export const staggerContainer = (staggerSec = 0.15, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerSec, delayChildren },
  },
});

// ─── Child Variants ───────────────────────────────────────────────────────────

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: t(0.65) },
};

export const childFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: t(0.65) },
};

export const childFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: t(0.65) },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: t(0.55, 0, easeOutBack) },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: t(0.75) },
};

// ─── Standalone Directional ───────────────────────────────────────────────────

export const fromLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: t(1.0, delay) },
});

export const fromRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: t(1.0, delay) },
});

export const fromBottom = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: t(0.75, delay) },
});

// ─── Skill Pill ───────────────────────────────────────────────────────────────

export const skillItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: t(0.45, 0, easeOutBack) },
};

// ─── Timeline Item ────────────────────────────────────────────────────────────

export const timelineItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: t(0.7) },
};

// ─── Sidebar ─────────────────────────────────────────────────────────────────

export const sidebarVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: t(0.6, 0.3) },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: t(0.4, 0.5 + i * 0.08),
  }),
};