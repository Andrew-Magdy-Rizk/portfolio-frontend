"use client";

/**
 * The URL hash is the single source of truth for which panel is active.
 *
 * Exposed as an external store so PanelShell can read it with
 * useSyncExternalStore — no state to keep in sync, and back/forward plus
 * hand-edited hashes work for free. `replaceState` is used rather than
 * assigning `location.hash` so panel switching doesn't pile up history
 * entries, and listeners are notified manually because replaceState does
 * not fire `hashchange`.
 */

const listeners = new Set();

function notify() {
  for (const listener of listeners) listener();
}

export function subscribeHash(onChange) {
  listeners.add(onChange);
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

export function getHash() {
  return window.location.hash.replace("#", "");
}

/** Server render has no hash — the shell falls back to its first panel. */
export function getServerHash() {
  return "";
}

export function setHash(key) {
  try {
    window.history.replaceState(null, "", `#${key}`);
  } catch {
    window.location.hash = key;
  }
  notify();
}
