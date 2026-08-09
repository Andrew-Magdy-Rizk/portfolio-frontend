"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { ShellContext } from "./panelContext";
import { getHash, getServerHash, setHash, subscribeHash } from "./panelHash";
import Panel from "./Panel";
import ShellHeader from "./ShellHeader";
import BottomNav from "./BottomNav";
import Backdrop from "./Backdrop";

/**
 * Fixed-viewport app shell. Panels are passed in as already-rendered server
 * nodes, so every panel's content is in the initial HTML — only the switching
 * logic is client-side.
 */
export default function PanelShell({ panels }) {
  const keys = panels.map((panel) => panel.key);
  const keySig = keys.join(",");

  const hash = useSyncExternalStore(subscribeHash, getHash, getServerHash);
  const activeKey = keys.includes(hash) ? hash : panels[0].key;

  const goto = useCallback(
    (key) => {
      if (keySig.split(",").includes(key)) setHash(key);
    },
    [keySig]
  );

  // ← / → and PageUp / PageDown page between panels.
  useEffect(() => {
    const onKey = (event) => {
      const target = event.target;
      if (target?.isContentEditable) return;
      if (target?.tagName && /^(input|textarea|select)$/i.test(target.tagName)) return;

      const order = keySig.split(",");
      const index = order.indexOf(activeKey);
      if (index < 0) return;

      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        setHash(order[Math.min(index + 1, order.length - 1)]);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setHash(order[Math.max(index - 1, 0)]);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeKey, keySig]);

  const navItems = panels.map(({ key, label }) => ({ key, label }));

  return (
    <ShellContext.Provider value={{ activeKey, goto, keys }}>
      <div className="app-shell">
        <Backdrop />
        <ShellHeader items={navItems} />

        <main className="stage">
          {panels.map((panel) => (
            <Panel
              key={panel.key}
              panelKey={panel.key}
              label={panel.label}
              active={panel.key === activeKey}
            >
              {panel.node}
            </Panel>
          ))}
        </main>

        <BottomNav items={navItems} />
      </div>
    </ShellContext.Provider>
  );
}
