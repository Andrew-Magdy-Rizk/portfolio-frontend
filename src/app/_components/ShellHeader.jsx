"use client";

import { useShell } from "./panelContext";
import PORTFOLIO from "@/app/_data/portfolio";
import { Button } from "@/components/ui/button";

const pad = (n) => String(n).padStart(2, "0");

export default function ShellHeader({ items }) {
  const { activeKey, goto, keys } = useShell();
  const position = keys.indexOf(activeKey) + 1;

  return (
    <header className="shell-header">
      <div className="shell-header-inner">
        <button type="button" className="brand" onClick={() => goto("home")}>
          <span className="brand-mark" aria-hidden="true">
            {PORTFOLIO.identity.initials}
          </span>
          {PORTFOLIO.identity.name}
        </button>

        <nav className="tabs hidden lg:flex" aria-label="Sections">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              className="tab"
              aria-current={item.key === activeKey ? "page" : undefined}
              onClick={() => goto(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <span className="font-mono text-xs tracking-[0.06em] text-ink-faint">
            {pad(position)} / {pad(keys.length)}
          </span>
          <Button
            type="button"
            variant="outline"
            className="hidden h-10 border-cyan/35 bg-cyan/10 px-4.5 text-cyan hover:bg-cyan/20 hover:text-cyan lg:inline-flex"
            onClick={() => goto("contact")}
          >
            Hire me
          </Button>
        </div>
      </div>
    </header>
  );
}
