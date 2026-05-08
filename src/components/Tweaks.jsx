"use client";

import { useState, useCallback } from "react";

const FONT_PAIRINGS = {
  editorial: {
    label: "Editorial",
    serif: "var(--font-instrument-serif), 'Cormorant Garamond', serif",
    sans: "var(--font-geist-sans), 'IBM Plex Sans', system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },
  classical: {
    label: "Classical",
    serif: "var(--font-cormorant-garamond), 'Instrument Serif', serif",
    sans: "var(--font-ibm-plex-sans), system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), ui-monospace, monospace",
  },
  modern: {
    label: "Modern",
    serif: "var(--font-bricolage-grotesque), 'Instrument Serif', serif",
    sans: "var(--font-geist-sans), system-ui, sans-serif",
    mono: "var(--font-geist-mono), ui-monospace, monospace",
  },
};

const ACCENT_PALETTES = [
  ["#a78bfa", "#22d3ee"],
  ["#f472b6", "#a78bfa"],
  ["#22d3ee", "#4ade80"],
  ["#fbbf24", "#f472b6"],
  ["#fb7185", "#fb923c"],
];

function isLightColor(hex) {
  const h = hex.replace("#", "");
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, "0");
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

function SegmentedControl({ options, value, onChange }) {
  const idx = Math.max(0, options.findIndex((o) => o.value === value));
  const n = options.length;
  return (
    <div className="tweaks-seg">
      <div
        className="tweaks-seg-thumb"
        style={{
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`,
        }}
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Tweaks() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [blur, setBlur] = useState(18);
  const [fontPair, setFontPair] = useState("modern");

  const applyTheme = useCallback((t) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const applyPalette = useCallback((idx) => {
    setPaletteIdx(idx);
    const p = ACCENT_PALETTES[idx];
    document.documentElement.style.setProperty("--accent", p[0]);
    document.documentElement.style.setProperty("--accent-2", p[1]);
  }, []);

  const applyBlur = useCallback((b) => {
    setBlur(b);
    document.documentElement.style.setProperty("--glass-blur", b + "px");
  }, []);

  const applyFont = useCallback((f) => {
    setFontPair(f);
    const pair = FONT_PAIRINGS[f];
    document.documentElement.style.setProperty("--font-serif", pair.serif);
    document.documentElement.style.setProperty("--font-sans", pair.sans);
    document.documentElement.style.setProperty("--font-mono", pair.mono);
  }, []);

  return (
    <>
      <button
        className="tweaks-fab"
        aria-label="Open tweaks panel"
        onClick={() => setOpen((v) => !v)}
        title="Tweaks"
      >
        ⚙
      </button>

      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-panel-head">
            <b>Tweaks</b>
            <button
              className="tweaks-close"
              aria-label="Close tweaks"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Theme */}
          <div className="tweaks-section-label">Theme</div>
          <div className="tweaks-row">
            <div className="tweaks-row-label">Mode</div>
            <SegmentedControl
              value={theme}
              onChange={applyTheme}
              options={[
                { value: "dark", label: "Dark" },
                { value: "light", label: "Light" },
              ]}
            />
          </div>

          {/* Accent */}
          <div className="tweaks-section-label">Accent</div>
          <div className="tweaks-row">
            <div className="tweaks-row-label">Palette</div>
            <div className="tweaks-chips">
              {ACCENT_PALETTES.map((p, i) => {
                const active = i === paletteIdx;
                const light = isLightColor(p[0]);
                return (
                  <button
                    key={i}
                    type="button"
                    className={`tweaks-chip${active ? " active" : ""}`}
                    style={{ background: p[0] }}
                    title={p.join(" · ")}
                    onClick={() => applyPalette(i)}
                  >
                    <span className="tweaks-chip-swatch">
                      {p.slice(1).map((c, j) => (
                        <i key={j} style={{ background: c }} />
                      ))}
                    </span>
                    {active && (
                      <svg className="tweaks-chip-check" viewBox="0 0 14 14" aria-hidden="true">
                        <path
                          d="M3 7.2 5.8 10 11 4.2"
                          fill="none"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke={light ? "rgba(0,0,0,.78)" : "#fff"}
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Glass blur */}
          <div className="tweaks-section-label">Glass</div>
          <div className="tweaks-slider-row">
            <div className="tweaks-slider-head">
              <span>Blur</span>
              <span>{blur}px</span>
            </div>
            <input
              type="range"
              className="tweaks-slider"
              min={0}
              max={40}
              step={1}
              value={blur}
              onChange={(e) => applyBlur(Number(e.target.value))}
            />
          </div>

          {/* Font pairing */}
          <div className="tweaks-section-label">Type</div>
          <div className="tweaks-row">
            <div className="tweaks-row-label">Font pairing</div>
            <select
              className="tweaks-select"
              value={fontPair}
              onChange={(e) => applyFont(e.target.value)}
            >
              {Object.entries(FONT_PAIRINGS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
