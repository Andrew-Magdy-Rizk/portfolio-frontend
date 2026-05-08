import { notFound } from "next/navigation";
import Link from "next/link";
import PORTFOLIO from "@/lib/data";

export function generateStaticParams() {
  return PORTFOLIO.projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = PORTFOLIO.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} · Andrew Dakran`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }) {
  const p = PORTFOLIO.projects.find((proj) => proj.slug === params.slug);
  if (!p) notFound();

  const idx = PORTFOLIO.projects.findIndex((x) => x.slug === p.slug);

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="detail-page">
        {/* sticky back bar */}
        <div className="detail-back">
          <Link href="/#work" className="back-btn">
            ← Back to work
          </Link>
          <span className="mono">
            PROJECT · {String(idx + 1).padStart(2, "0")} · {p.tag.toUpperCase()}
          </span>
        </div>

        {/* hero header */}
        <header className="detail-hero max-w-370 mx-auto">
          <div className="crumb">/ projects / {p.slug}</div>
          <h1>
            {p.title}
            {p.title.length < 14 && <em>.</em>}
          </h1>
          <p className="text-[19px] max-w-[60ch] text-(--ink-soft) m-0">
            {p.summary}
          </p>
          <div className="meta">
            <div className="item">
              <div className="lbl">Year</div>
              <div className="val">{p.year}</div>
            </div>
            <div className="item">
              <div className="lbl">Type</div>
              <div className="val">{p.tag}</div>
            </div>
            <div className="item">
              <div className="lbl">Status</div>
              <div className="val">Shipped</div>
            </div>
          </div>
        </header>

        {/* hero shot placeholder */}
        <div className="detail-shot max-w-[calc(1480px-var(--pad-x)*2)] -mt-10 mx-auto mb-0">
          <span className="ph-note">▦ HERO IMAGE · drop screenshot here</span>
          <span className="glyph">{p.glyph}</span>
        </div>

        {/* body */}
        <div className="detail-body">
          {/* aside */}
          <aside>
            <div className="block">
              <div className="lbl">Stack</div>
              <div className="stack-list">
                {p.stack.map((s, i) => (
                  <span key={i} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="block">
              <div className="lbl">Architecture</div>
              <div className="val">{p.arch}</div>
            </div>
            <div className="block">
              <div className="lbl">Links</div>
              <div className="links">
                {p.repo && (
                  <a
                    className="btn btn-primary"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub ↗
                  </a>
                )}
                <Link className="btn" href="/#work">
                  ← All projects
                </Link>
              </div>
            </div>
          </aside>

          {/* main content */}
          <div className="main">
            <div className="chunk">
              <h2>
                <span className="roman">i.</span> The problem
              </h2>
              <p>{p.problem}</p>
            </div>

            <div className="chunk">
              <h2>
                <span className="roman">ii.</span> The solution
              </h2>
              <p>{p.solution}</p>
            </div>

            <div className="chunk">
              <h2>
                <span className="roman">iii.</span> Key features
              </h2>
              <ul>
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="chunk">
              <h2>
                <span className="roman">iv.</span> Selected screens
              </h2>
              <div className="detail-gallery">
                <div className="g">
                  <span>SCREEN · 01</span>
                </div>
                <div className="g">
                  <span>SCREEN · 02</span>
                </div>
                <div className="g">
                  <span>SCREEN · 03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
