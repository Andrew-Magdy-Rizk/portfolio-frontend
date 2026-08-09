"use client";

import { useEffect } from "react";

export default function PrintTrigger() {
  useEffect(() => {
    async function go() {
      // Wait for fonts
      try {
        if (document.fonts?.ready) await document.fonts.ready;
      } catch (_) {}

      // Extra settle for layout + image paint
      await new Promise((r) => setTimeout(r, 900));
      window.print();
    }

    if (document.readyState === "complete") {
      go();
    } else {
      window.addEventListener("load", go, { once: true });
    }
  }, []);

  return null;
}
