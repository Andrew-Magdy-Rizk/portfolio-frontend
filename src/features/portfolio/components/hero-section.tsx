import Image from "next/image"
import { ArrowDownRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="intro">Full-stack Node.js developer</p>
        <h1 id="hero-heading">Full-stack engineer<br />building <em>business-focused</em><br />systems that hold up.</h1>
        <p className="hero-summary">I&apos;m Andrew Magdy - a full-stack developer with a careful eye for useful, expressive experiences on the web.</p>
        <a className="text-cta" href="#contact">Start a conversation <ArrowDownRight aria-hidden="true" /></a>
      </div>
      <div className="hero-art" aria-label="Portrait of Andrew Magdy Rizk Dakran">
        <div className="art-ring art-ring-one" aria-hidden="true" />
        <div className="art-ring art-ring-two" aria-hidden="true" />
        <Image src="/images/andrew-magdy-portrait.png" alt="Andrew Magdy Rizk Dakran" fill priority sizes="(max-width: 700px) 92vw, 42vw" />
        <p className="art-caption"><strong>Andrew Magdy</strong><span>Rizk Dakran · Full-stack Node.js Developer</span></p>
      </div>
      <a className="scroll-cue" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  )
}
