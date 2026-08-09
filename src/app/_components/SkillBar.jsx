"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePanelActive } from "./panelContext";

/**
 * A single proficiency bar.
 *
 * `pct` is null when the data file has no figure for this skill yet — the bar
 * then renders in a hatched placeholder state and shows "—" instead of a
 * number, so no invented percentage is ever displayed.
 */
export default function SkillBar({ label, pct, alt = false }) {
  const panelActive = usePanelActive();
  const reduced = useReducedMotion();
  const unset = pct == null;

  // Outside a panel (deep routes) or with motion reduced, show the final value.
  const filled = unset ? false : reduced || panelActive === null || panelActive;

  return (
    <div>
      <div className="flex justify-between font-mono text-[11px] text-ink-body">
        <span>{label}</span>
        <span>{unset ? "—" : `${pct}%`}</span>
      </div>
      <div className="bar-track">
        {unset ? (
          <div className={`bar-fill is-todo${alt ? " alt" : ""}`} />
        ) : (
          <motion.div
            className={`bar-fill${alt ? " alt" : ""}`}
            initial={{ width: "0%" }}
            animate={{ width: filled ? `${pct}%` : "0%" }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 1.2, delay: filled ? 0.26 : 0, ease: [0.2, 0.8, 0.2, 1] }
            }
          />
        )}
      </div>
    </div>
  );
}
