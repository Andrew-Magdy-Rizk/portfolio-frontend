import Reveal from "@/components/Reveal";
import PORTFOLIO from "@/lib/data";

export default function Skills() {
  const skills = PORTFOLIO.skills;

  return (
    <section id="skills" className="skills">
      <div className="shell">
        <div className="section-head">
          <div className="roman">i.</div>
          <h2>
            Things I <em>reach for</em>
          </h2>
          <div className="meta">
            CRAFT INDEX
            <br />
            06 categories
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`skill-cat ${s.size}${s.featured ? " featured" : ""}`}
            >
              <div className="num">{s.num}</div>
              <h3 className="title">{s.title}</h3>
              <p className="blurb">{s.blurb}</p>
              <div className="pills">
                {s.pills.map((p, j) => (
                  <span key={j} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
