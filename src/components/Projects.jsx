"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PORTFOLIO from "@/lib/data";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

function ProjectCard({ p, index, onOpen }) {
  return (
    <motion.article
      className={`proj ${p.size}`}
      onClick={() => onOpen(p)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
    >
      <div className="visual">
        <span className="badge pill">{p.tag}</span>
        {p.featured && <span className="featured-tag">Featured</span>}
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 980px) 50vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <span className="glyph">{p.glyph}</span>
        )}
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
      <div className="arrow">→</div>
    </motion.article>
  );
}

function ProjectDetail({ p, onClose }) {
  const idx = PORTFOLIO.projects.findIndex((x) => x.slug === p.slug);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="detail-back">
        <button className="back-btn" onClick={onClose}>
          ← Back to work
        </button>
        <span className="mono">
          PROJECT · {String(idx + 1).padStart(2, "0")} · {p.tag.toUpperCase()}
        </span>
      </div>

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

      <div className="detail-shot max-w-[calc(1480px-var(--pad-x)*2)] -mt-10 mx-auto mb-0">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.title} — hero screenshot`}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        ) : (
          <>
            <span className="ph-note">▦ HERO IMAGE · drop screenshot here</span>
            <span className="glyph">{p.glyph}</span>
          </>
        )}
      </div>

      <div className="detail-body">
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
              <button className="btn" onClick={onClose}>
                ← All projects
              </button>
            </div>
          </div>
        </aside>

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
              {(p.screens && p.screens.length > 0
                ? p.screens
                : [null, null, null]
              ).map((src, i) => (
                <div key={i} className="g">
                  {src ? (
                    <Image
                      src={src}
                      alt={`${p.title} — screen ${i + 1}`}
                      fill
                      sizes="(max-width: 980px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span>SCREEN · {String(i + 1).padStart(2, "0")}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const all = PORTFOLIO.projects;
  const tags = ["All", ...Array.from(new Set(all.map((p) => p.tag)))];
  const [activeTag, setActiveTag] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const filtered =
    activeTag === "All" ? all : all.filter((p) => p.tag === activeTag);

  return (
    <>
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
              {all.length} projects · 2023 — 2025
            </div>
          </div>

          <div className="proj-filters">
            {tags.map((t) => (
              <button
                key={t}
                className={activeTag === t ? "active" : ""}
                onClick={() => setActiveTag(t)}
              >
                {t}
              </button>
            ))}
            <span className="count">
              {filtered.length} / {all.length} shown
            </span>
          </div>

          <div className="bento">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard
                  key={p.slug}
                  p={p}
                  index={i}
                  onOpen={setOpenProject}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openProject && (
          <ProjectDetail
            p={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
