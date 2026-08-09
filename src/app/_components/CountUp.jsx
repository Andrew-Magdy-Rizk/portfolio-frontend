"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { usePanelActive } from "./panelContext";

/**
 * Counts from 0 to `to` whenever its panel becomes active.
 *
 * Driven by a motion value rather than React state, so the per-frame updates
 * never trigger a re-render.
 */
export default function CountUp({ to, duration = 1.1 }) {
  const panelActive = usePanelActive();
  const reduced = useReducedMotion();

  const count = useMotionValue(to);
  const rounded = useTransform(count, (value) => Math.round(value));

  const shouldAnimate = panelActive === true && !reduced;

  useEffect(() => {
    if (!shouldAnimate) {
      count.set(to);
      return;
    }
    count.set(0);
    const controls = animate(count, to, { duration, ease: [0.2, 0.8, 0.2, 1] });
    return () => controls.stop();
  }, [shouldAnimate, to, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}
