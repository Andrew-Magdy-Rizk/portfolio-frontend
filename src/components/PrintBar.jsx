"use client";

import Link from "next/link";

export default function PrintBar() {
  return (
    <div className="print-bar">
      <div className="print-bar-left">
        <Link
          href="/"
          className="btn btn-ghost py-1.5! px-3.5! text-[13px]!"
        >
          ← Back
        </Link>
        <span className="print-brand">Andrew · AD</span>
        <span className="print-note">Print / PDF view</span>
      </div>
      <button
        className="btn btn-primary text-[13px]! py-1.75! px-4!"
        onClick={() => window.print()}
      >
        ↓ Save as PDF
      </button>
    </div>
  );
}
