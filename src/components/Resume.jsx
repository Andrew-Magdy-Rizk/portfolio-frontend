import Image from "next/image";
import Reveal from "@/components/Reveal";
import PORTFOLIO from "@/lib/data";

export default function Resume() {
  const P = PORTFOLIO;

  return (
    <section id="resume" className="resume">
      <div className="shell">
        <div className="section-head">
          <div className="roman">iii.</div>
          <h2>
            <em>Résumé</em> in long form
          </h2>
          <div className="meta">
            CV / 2025
            <br />
            available as PDF
          </div>
        </div>

        <div className="resume-grid">
          {/* sticky sidebar */}
          <Reveal as="aside" className="resume-side">
            <div className="photo">
              <Image
                src="/avatar.jpg"
                alt={P.identity.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <h3>{P.identity.name}</h3>
            <div className="role">{P.identity.role}</div>
            <p className="text-[13.5px] text-(--ink-mute) m-0">
              Based in {P.identity.location}. Open to freelance &amp; full-time.
            </p>

            <div className="contact">
              <a href={P.socials.github} target="_blank" rel="noopener noreferrer">
                <span className="mono text-[11px]! min-w-6">GH</span>
                {P.socials.githubLabel}
              </a>
              <a href={P.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="mono text-[11px]! min-w-6">IN</span>
                {P.socials.linkedinLabel}
              </a>
              <a href={`mailto:${P.socials.email}`}>
                <span className="mono text-[11px]! min-w-6">EM</span>
                {P.socials.emailLabel}
              </a>
              {P.socials.phone && (
                <a href={`tel:${P.socials.phone.replace(/\s/g, "")}`}>
                  <span className="mono text-[11px]! min-w-6">TEL</span>
                  {P.socials.phoneLabel}
                </a>
              )}
            </div>

            <a className="btn btn-primary download" href="/CV Cairo.pdf" download>
              <span>↓</span> Download PDF
            </a>
            <a
              className="btn download mt-2"
              href="/print"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Print / PDF view
            </a>
          </Reveal>

          {/* main CV content */}
          <div className="cv">
            <Reveal>
              <p className="summary">&ldquo;{P.identity.lede}&rdquo;</p>
            </Reveal>

            {/* Experience */}
            <div className="cv-block">
              <h3>Experience</h3>
              {P.experience.map((e, i) => (
                <Reveal key={i} delay={i * 80} className="cv-item">
                  <div className="when">{e.when}</div>
                  <div className="what">
                    <div className="title">{e.title}</div>
                    <div className="org">{e.org}</div>
                    <p>{e.summary}</p>
                    <div className="stack">
                      {e.stack.map((s, j) => (
                        <span key={j} className="pill">{s}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Skills */}
            <div className="cv-block">
              <h3>Skills</h3>
              <div className="cv-skills">
                {P.skills.map((s, i) => (
                  <div key={i} className="cv-skill">
                    <div className="h">{s.title}</div>
                    <div className="pills">
                      {s.pills.map((p, j) => (
                        <span key={j} className="pill">{p}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="cv-block">
              <h3>Education</h3>
              {P.education.map((e, i) => (
                <div key={i} className="cv-item">
                  <div className="when">{e.when}</div>
                  <div className="what">
                    <div className="title">{e.title}</div>
                    <div className="org">{e.org}</div>
                    <p>{e.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            {P.languages && (
              <div className="cv-block">
                <h3>Languages</h3>
                <div className="cv-skills">
                  {P.languages.map((l, i) => (
                    <div key={i} className="cv-skill">
                      <div className="h mb-1!">{l.lang}</div>
                      <div className="text-[13px] text-(--ink-mute) font-mono tracking-[.08em]">
                        {l.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            <div className="cv-block">
              <h3>Certifications</h3>
              <div className="cv-skills grid-cols-1!">
                {P.certifications.map((c, i) => (
                  <div key={i} className="cv-skill">
                    <div className="h text-base! m-0!">→ {c}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
