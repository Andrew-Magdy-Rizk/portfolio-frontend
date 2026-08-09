"use client";

import { PanelContext } from "./panelContext";

/**
 * One cross-fading, independently scrolling panel.
 *
 * Inactive panels stay mounted (instant switching, and all content ships in
 * the HTML) but are removed from the accessibility tree and tab order via
 * `visibility: hidden` + `inert`.
 */
export default function Panel({ panelKey, label, active, children }) {
  return (
    <section
      className="panel"
      data-panel={panelKey}
      data-active={active ? "true" : "false"}
      aria-label={label}
      aria-hidden={!active}
      inert={!active}
    >
      <PanelContext.Provider value={active}>
        <div className="panel-inner">{children}</div>
      </PanelContext.Provider>
    </section>
  );
}
