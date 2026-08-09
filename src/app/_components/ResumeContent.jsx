import PORTFOLIO from "@/app/_data/portfolio";
import StackBadge from "./StackBadge";

/** CV body shared by /resume and /print so the two can't drift apart. */
export default function ResumeContent() {
  const { identity, experience, skills, education, certifications, languages } = PORTFOLIO;

  return (
    <div className="grid gap-12">
      <section>
        <p className="lede max-w-[68ch]">{identity.lede}</p>
      </section>

      <section className="cv-block">
        <h3>Experience</h3>
        {experience.map((job) => (
          <div key={`${job.title}-${job.when}`} className="cv-item">
            <span className="when">{job.when}</span>
            <div>
              <div className="title">{job.title}</div>
              <div className="org">{job.org}</div>
              <p>{job.summary}</p>
              <div className="mt-3 flex flex-wrap gap-[7px]">
                {job.stack.map((item) => (
                  <StackBadge key={item}>{item}</StackBadge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cv-block">
        <h3>Skills</h3>
        {skills.map((skill) => (
          <div key={skill.title} className="cv-item">
            <span className="when">{skill.title}</span>
            <div>
              <p className="mt-0!">{skill.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-[7px]">
                {skill.pills.map((item) => (
                  <StackBadge key={item}>{item}</StackBadge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="cv-block">
        <h3>Education</h3>
        {education.map((item) => (
          <div key={item.title} className="cv-item">
            <span className="when">{item.when}</span>
            <div>
              <div className="title">{item.title}</div>
              <div className="org">{item.org}</div>
              <p>{item.summary}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="cv-block">
        <h3>Certifications</h3>
        <ul className="m-0 grid list-none gap-0 p-0">
          {certifications.map((cert) => (
            <li key={cert} className="border-t border-line py-3.5 text-[14.5px] text-ink-body">
              {cert}
            </li>
          ))}
        </ul>
      </section>

      <section className="cv-block">
        <h3>Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((item) => (
            <StackBadge key={item.lang}>
              {item.lang} · {item.level}
            </StackBadge>
          ))}
        </div>
      </section>
    </div>
  );
}
