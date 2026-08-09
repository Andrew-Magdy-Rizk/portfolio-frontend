"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import { Button } from "@/components/ui/button";

/** Screen-only toolbar on /print. Hidden by the @media print rules. */
export default function PrintBar() {
  return (
    <div className="no-print sticky top-0 z-20 border-b border-line-soft bg-(--bg-header) backdrop-blur-lg">
      <div className="shell-header-inner">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/resume">← Back</Link>
          </Button>
          <span className="brand-mark" aria-hidden="true">
            {PORTFOLIO.identity.initials}
          </span>
          <span className="label">Print / PDF view</span>
        </div>
        <Button type="button" className="h-10 px-5" onClick={() => window.print()}>
          <Download size={15} aria-hidden="true" />
          Save as PDF
        </Button>
      </div>
    </div>
  );
}
