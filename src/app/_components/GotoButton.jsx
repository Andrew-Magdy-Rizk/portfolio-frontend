"use client";

import { useShell } from "./panelContext";
import { Button } from "@/components/ui/button";

/** shadcn Button that switches the shell to another panel. */
export default function GotoButton({ to, className = "h-12 px-6 text-[15px]", variant = "default", children }) {
  const { goto } = useShell();

  return (
    <Button type="button" variant={variant} size="lg" className={className} onClick={() => goto(to)}>
      {children}
    </Button>
  );
}
