import { ArrowDownRight } from "lucide-react"
import { profileStats } from "@/features/portfolio/data/portfolio-content"

export function AboutSection() {
  return <section className="about-section" id="about" aria-labelledby="about-heading"><p className="section-mark">About me</p><div className="about-layout"><h2 id="about-heading">Full-stack thinking,<br />built to ship.</h2><div className="about-content"><p>Full-Stack Node.js Developer with 2+ years of experience delivering production systems across web and mobile. I build reliable products with Node.js, React, Next.js, PostgreSQL, and MongoDB.</p><a className="text-cta" href="#projects">Explore projects <ArrowDownRight aria-hidden="true" /></a><dl className="profile-facts">{profileStats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div></div></section>
}
