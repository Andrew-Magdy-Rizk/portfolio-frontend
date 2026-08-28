import { ArrowUpRight } from "lucide-react"

import { portfolioNavigation } from "@/features/portfolio/data/portfolio-content"

export function PortfolioHeader() {
  return (
    <header className="site-nav">
      <a className="wordmark" href="#home" aria-label="Andrew Magdy home">
        AM<span>&reg;</span>
      </a>
      <nav aria-label="Main navigation">
        {portfolioNavigation.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
    </header>
  )
}
