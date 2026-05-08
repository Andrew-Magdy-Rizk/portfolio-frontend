import Image from "next/image";
import Link from "next/link";
import PrintTrigger from "@/components/PrintTrigger";
import PrintBar from "@/components/PrintBar";
import PORTFOLIO from "@/lib/data";

export const metadata = {
  title: "Andrew Dakran · CV Print",
  description: "Print / PDF version of Andrew Dakran's portfolio and résumé.",
};

/* =========================================================
   Print / PDF page — no framer-motion, no sticky nav.
   Navigate to /print to trigger window.print() automatically.
   ========================================================= */

export default function PrintPage() {
  const P = PORTFOLIO;
  const id = P.identity;

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Screen-only control bar — hidden in @media print */}
      <PrintBar />

      {/* Auto-trigger print dialog */}
      <PrintTrigger />

      <main>
        {/* ======================== HERO */}
        <section id="top" className="hero">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <div className="eyebrow hero-eyebrow">
                  {id.role.toUpperCase()} · {id.location}
                </div>
                <h1>
                  {id.tagline.pre}{" "}
                  <span className="it">{id.tagline.em}</span>
                  <span className="br">{id.tagline.post}</span>
                </h1>
                <p className="lede">{id.lede}</p>

                <div className="ctas">
                  <a className="btn btn-primary" href={`mailto:${P.socials.email}`}>
                    {P.socials.email} →
                  </a>
                  <a
                    className="btn"
                    href={P.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={P.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              <div className="portrait-wrap">
                <div className="portrait">
                  <Image
                    src="/avatar.jpg"
                    alt={id.name}
                    fill
                    sizes="33vw"
                    className="object-cover z-1 contrast-[1.05]"
                    priority
                  />
                  <div className="tag">
                    <span>
                      <span className="dot-live" /> Available for work
                    </span>
                    <span>{id.location.split(" · ")[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-meta">
              {id.stats.map((s, i) => (
                <div key={i} className="cell">
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== SKILLS */}
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
              {P.skills.map((s, i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== PROJECTS */}
        <section id="work" className="projects">
          <div className="shell">
            <div className="section-head">
              <div className="roman">ii.</div>
              <h2>
                Selected <em>work</em>
              </h2>
              <div className="meta">
                CASE STUDIES
                <br />
                {P.projects.length} projects · 2023 — 2025
              </div>
            </div>

            <div className="bento">
              {P.projects.map((p) => {
                const sizeClass = p.size === "hero" ? "hero-proj" : p.size;
                return (
                  <div key={p.slug} className={`proj ${sizeClass} cursor-default`}>
                    <div className="visual">
                      <span className="badge pill">{p.tag}</span>
                      {p.featured && <span className="featured-tag">Featured</span>}
                      <span className="glyph">{p.glyph}</span>
                    </div>
                    <div className="body">
                      <h3>{p.title}</h3>
                      <p className="desc">{p.summary}</p>
                      <div className="stack">
                        {p.stack.slice(0, 4).map((s, i) => (
                          <span key={i} className="pill">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================== RESUME */}
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
              {/* sidebar */}
              <aside className="resume-side">
                <div className="photo">
                  <Image
                    src="/avatar.jpg"
                    alt={id.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <h3>{id.name}</h3>
                <div className="role">{id.role}</div>
                <p className="text-[13.5px] text-(--ink-mute) m-0">
                  Based in {id.location}. Open to freelance &amp; full-time.
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
              </aside>

              {/* main CV */}
              <div className="cv">
                <p className="summary">&ldquo;{id.lede}&rdquo;</p>

                {/* Experience */}
                <div className="cv-block">
                  <h3>Experience</h3>
                  {P.experience.map((e, i) => (
                    <div key={i} className="cv-item">
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
                    </div>
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
      </main>

      {/* ======================== FOOTER */}
      <footer className="foot">
        <div className="shell">
          <div className="row1">
            <div>
              <h3>
                Have a build <em>in mind?</em>
              </h3>
              <a
                className="btn btn-primary mt-3.5"
                href={`mailto:${P.socials.email}`}
              >
                {P.socials.email} →
              </a>
            </div>
            <div className="col">
              <h4>Pages</h4>
              <Link href="/">Home</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#work">Work</Link>
              <Link href="/#resume">Resume</Link>
            </div>
            <div className="col">
              <h4>Elsewhere</h4>
              <a href={P.socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={P.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${P.socials.email}`}>Email ↗</a>
            </div>
          </div>
          <div className="row2">
            <span>© {new Date().getFullYear()} · {id.name}</span>
            <span>Built with intent · Cairo / Remote</span>
          </div>
        </div>
      </footer>
    </>
  );
}
