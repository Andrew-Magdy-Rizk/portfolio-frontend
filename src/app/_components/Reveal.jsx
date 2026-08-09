"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePanelActive } from "./panelContext";

const VALID_TAGS = [
  "div", "section", "article", "aside", "header", "footer",
  "main", "nav", "span", "p", "ul", "ol", "li", "form", "figure", "dl", "h1", "h2",
];

const EASE = [0.2, 0.7, 0.2, 1];

/**
 * Scroll-reveal wrapper with two modes.
 *
 * Inside a PanelShell it animates when its panel becomes active (the panels
 * never scroll into view, so whileInView would never fire). On deep routes,
 * where there is no panel context, it falls back to viewport-triggered reveal.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  style = {},
  ...rest
}) {
  const tag = VALID_TAGS.includes(as) ? as : "div";
  const MotionTag = motion[tag];
  const panelActive = usePanelActive();
  const reduced = useReducedMotion();

  const shown = { opacity: 1, y: 0 };
  const hidden = { opacity: 0, y: 14 };

  // Reduced motion: same element type as the animated branches (so no remount
  // leaves a stale inline opacity behind), just pinned to the final state.
  if (reduced) {
    return (
      <MotionTag
        className={className}
        style={style}
        initial={false}
        animate={shown}
        transition={{ duration: 0 }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  // Panel mode — re-runs every time the panel is entered.
  if (panelActive !== null) {
    return (
      <MotionTag
        className={className}
        style={style}
        initial={hidden}
        animate={panelActive ? shown : hidden}
        transition={{
          duration: 0.55,
          delay: panelActive ? Math.min(delay, 360) / 1000 : 0,
          ease: EASE,
        }}
        {...rest}
      >
        {children}
      </MotionTag>
    );
  }

  // Deep-route mode — classic scroll reveal.
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={shown}
      viewport={{ once: true, margin: "-40px 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
