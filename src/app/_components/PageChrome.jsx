import Link from "next/link";
import PORTFOLIO from "@/app/_data/portfolio";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/resume", label: "Résumé" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

/**
 * Header + footer for the deep routes. The panel shell at `/` has its own
 * chrome; everything else scrolls normally and uses this.
 */
export default function PageChrome({ children }) {
  const { identity, socials } = PORTFOLIO;

  return (
    <div className="relative min-h-screen">
      <div className="backdrop fixed" aria-hidden="true" />

      <header className="page-header">
        <div className="shell-header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              {identity.initials}
            </span>
            {identity.name}
          </Link>

          <nav className="tabs hidden md:flex" aria-label="Pages">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="tab">
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            asChild
            variant="outline"
            className="h-10 border-cyan/35 bg-cyan/10 px-4.5 text-cyan hover:bg-cyan/20 hover:text-cyan"
          >
            <a href={`mailto:${socials.email}`}>Hire me</a>
          </Button>
        </div>
      </header>

      <main className="page-main relative">{children}</main>

      <footer className="page-foot relative">
        <div className="shell-header-inner flex-wrap gap-4 text-[13px] text-ink-faint">
          <span>
            © {new Date().getFullYear()} {identity.name}
          </span>
          <span className="flex flex-wrap gap-4">
            <a href={socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${socials.email}`}>Email</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
