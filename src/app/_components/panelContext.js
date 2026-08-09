"use client";

import { createContext, useContext } from "react";

/** Shell-wide navigation state: which panel is active and how to change it. */
export const ShellContext = createContext(null);

/**
 * Whether the panel a component sits inside is currently active.
 * `null` outside a PanelShell — that's how Reveal knows it is on a deep
 * route and should fall back to scroll-triggered animation.
 */
export const PanelContext = createContext(null);

export function useShell() {
  return useContext(ShellContext);
}

export function usePanelActive() {
  return useContext(PanelContext);
}
