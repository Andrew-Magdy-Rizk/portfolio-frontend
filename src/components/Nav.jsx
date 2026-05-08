"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PORTFOLIO from "@/lib/data";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#resume", label: "Resume" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["work", "skills", "resume"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <>
      <nav className="nav glass backdrop-blur-2xl backdrop-saturate-180">
        <Link href="/#top" className="brand">
          Andrew{" "}
          <span className="not-italic tracking-[0]">·</span> AD
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={active === l.href.replace("/#", "") ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a className="cta" href={`mailto:${PORTFOLIO.socials.email}`}>
          <span className="w-[7px] h-[7px] rounded-full bg-[#15131a] inline-block" />
          Get in touch
        </a>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
          }}
        >
          <span className={menuOpen ? "translate-y-[6.5px] rotate-45" : ""} />
          <span className={menuOpen ? "opacity-0" : ""} />
          <span className={menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="nav-mobile glass backdrop-blur-2xl backdrop-saturate-180"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${PORTFOLIO.socials.email}`}
            className="mt-2 text-(--accent) font-semibold"
          >
            Get in touch →
          </a>
        </div>
      )}
    </>
  );
}
