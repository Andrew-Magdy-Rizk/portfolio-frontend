import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * The mono tech chip used for stacks, skills and tags — shadcn Badge with the
 * Neon Logic label treatment (JetBrains Mono, squared corners).
 */
export default function StackBadge({ className, ...props }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-[9px] px-2.5 py-1 font-mono text-[11px] font-normal text-ink-mute",
        className
      )}
      {...props}
    />
  );
}
