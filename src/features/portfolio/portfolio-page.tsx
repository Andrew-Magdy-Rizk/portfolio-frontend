import { AboutSection } from "@/features/portfolio/components/about-section"
import { DisciplineMarquee } from "@/features/portfolio/components/discipline-marquee"
import { HeroSection } from "@/features/portfolio/components/hero-section"
import { PortfolioFooter } from "@/features/portfolio/components/portfolio-footer"
import { PortfolioHeader } from "@/features/portfolio/components/portfolio-header"
import { SkillsSection } from "@/features/portfolio/components/skills-section"
import { WorkSection } from "@/features/portfolio/components/work-section"

export function PortfolioPage() {
  return (
    <main className="portfolio-shell" id="home">
      <PortfolioHeader />
      <HeroSection />
      <DisciplineMarquee />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <PortfolioFooter />
    </main>
  )
}
