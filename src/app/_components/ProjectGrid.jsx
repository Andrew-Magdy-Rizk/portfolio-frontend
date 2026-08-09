"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StackBadge from "./StackBadge";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

export default function ProjectGrid({ projects }) {
  const tags = ["All", ...new Set(projects.map((project) => project.tag))];
  const [activeTag, setActiveTag] = useState("All");

  const visible =
    activeTag === "All" ? projects : projects.filter((project) => project.tag === activeTag);

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="filter"
            aria-pressed={tag === activeTag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
            <span className="ml-2 text-ink-faint">
              {tag === "All"
                ? projects.length
                : projects.filter((project) => project.tag === tag).length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              key={project.slug}
              className="proj flex flex-col p-0!"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={index}
            >
              <div className="proj-shot rounded-b-none! border-0! border-b! min-h-[168px]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <span className="grid h-full place-items-center font-mono text-xs tracking-[0.09em] text-ink-ghost">
                    {project.glyph}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="proj-index">
                  {project.tag} · {project.year}
                </div>
                <h3>
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>

                <div className="mt-[18px] flex flex-wrap gap-[7px]">
                  {project.stack.slice(0, 4).map((item) => (
                    <StackBadge key={item}>{item}</StackBadge>
                  ))}
                </div>

                <div className="proj-links mt-auto pt-5">
                  <Link href={`/projects/${project.slug}`}>Case study →</Link>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      Live
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      GitHub
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
