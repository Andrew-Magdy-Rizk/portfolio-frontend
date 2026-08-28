import { skillGroups } from "@/features/portfolio/data/portfolio-content"

export function SkillsSection() {
  return <section className="skills-section" id="skills" aria-labelledby="skills-heading"><div className="skills-intro"><p className="section-mark">Technical skills</p><h2 id="skills-heading">A practical stack<br />for complete products.</h2></div><div className="skills-groups">{skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.skills.join(" · ")}</p></article>)}</div></section>
}
