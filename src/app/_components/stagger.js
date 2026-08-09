/**
 * Reveal delay for the nth element in a panel, in milliseconds.
 * Matches the handoff: index * 60ms, capped at 6 steps.
 *
 * Plain module (no "use client") so server components can call it.
 */
export function stagger(index) {
  return Math.min(index, 6) * 60;
}
