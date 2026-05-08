import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PORTFOLIO from "@/lib/data";

export default function Hero() {
  const id = PORTFOLIO.identity;

  return (
    <section id="top" className="hero">
      <div className="shell">
        <div className="hero-grid">
          {/* copy column */}
          <div>
            <Reveal>
              <div className="eyebrow hero-eyebrow">
                {id.role.toUpperCase()} · {id.location}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1>
                {id.tagline.pre}{" "}
                <span className="it">{id.tagline.em}</span>
                <span className="br">{id.tagline.post}</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="lede">{id.lede}</p>
            </Reveal>

            <Reveal delay={360}>
              <div className="ctas">
                <Link className="btn btn-primary" href="/#work">
                  View Projects <span>→</span>
                </Link>
                <Link className="btn" href="/#resume">
                  <span>↓</span> Resume
                </Link>
                <a
                  className="btn btn-ghost"
                  href={`mailto:${PORTFOLIO.socials.email}`}
                >
                  Contact
                </a>
              </div>
            </Reveal>
          </div>

          {/* portrait column */}
          <Reveal delay={300} className="portrait-wrap">
            <div className="portrait">
              <Image
                src="/avatar.jpg"
                alt={id.name}
                fill
                sizes="(max-width: 980px) 420px, 33vw"
                className="object-cover z-1 contrast-[1.05]"
                priority
                loading="eager"
              />
              <div className="tag">
                <span>
                  <span className="dot-live" /> Available for work
                </span>
                <span>{id.location.split(" · ")[0]}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats strip */}
        <Reveal delay={500}>
          <div className="hero-meta">
            {id.stats.map((s, i) => (
              <div key={i} className="cell">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
