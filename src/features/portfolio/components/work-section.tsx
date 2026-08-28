import { ArrowUpRight } from "lucide-react"
import { projects } from "@/features/portfolio/data/portfolio-content"

export function WorkSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-heading">
      <p className="section-mark">Selected projects</p>
      <h2 id="projects-heading">Built for real work.<br /><em>Designed to last.</em></h2>
      <div className="projects-list">
        {projects.map((project) => {
          const isExternal = project.href.startsWith("http")

          return (
            <article className="project-entry" key={project.title}>
              <div className="project-meta"><span>{project.year}</span><span>{project.label}</span></div>
              <div className="project-main"><h3>{project.title}</h3><p className="project-technologies">{project.technologies}</p><p>{project.description}</p></div>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <a aria-label={isExternal ? `View ${project.title}` : `Contact Andrew about ${project.title}`} href={project.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}><ArrowUpRight /></a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
