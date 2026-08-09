"use client";

import { useShell } from "./panelContext";

const pad = (n) => String(n).padStart(2, "0");

/** 5-up tab bar that replaces the header tabs below 1024px. */
export default function BottomNav({ items }) {
  const { activeKey, goto } = useShell();

  return (
    <nav className="bottom-nav lg:hidden" aria-label="Sections">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className="bottom-tab"
            aria-current={item.key === activeKey ? "page" : undefined}
            onClick={() => goto(item.key)}
          >
            <span aria-hidden="true" className="text-[13px]">
              {pad(index + 1)}
            </span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
