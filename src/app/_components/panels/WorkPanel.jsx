import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import Reveal from "../Reveal";
import StackBadge from "../StackBadge";
import { stagger } from "../stagger";
import { Button } from "@/components/ui/button";

const pad = (n) => String(n).padStart(2, "0");

function ProjectLinks({ project }) {
  return (
    <div className="proj-links">
      <Link href={`/projects/${project.slug}`}>Case study →</Link>
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
          Live preview
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default function WorkPanel() {
  const [hero, ...rest] = PORTFOLIO.projects;

  return (
    <>
      <Reveal as="span" className="kicker" delay={0}>
        04 — Selected work
      </Reveal>
      <Reveal as="h2" className="h-display max-w-[22ch]" delay={60}>
        Five things I&rsquo;ve built end to end.
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-[18px] md:grid-cols-3">
        <Reveal
          as="article"
          className="proj-hero card-hover md:col-span-3 lg:grid-cols-[1.05fr_1fr]"
          delay={stagger(2)}
        >
          <div className="p-[26px]">
            <div className="proj-index">
              <span className="text-cyan">{pad(1)}</span> {hero.tag} · {hero.year}
            </div>
            <h3>
              <Link href={`/projects/${hero.slug}`}>{hero.title}</Link>
            </h3>
            <p>{hero.summary}</p>
            <div className="mt-5 flex flex-wrap gap-[7px]">
              {hero.stack.map((item) => (
                <StackBadge key={item}>{item}</StackBadge>
              ))}
            </div>
            <ProjectLinks project={hero} />
          </div>

          <div className="proj-shot mx-[26px] mb-[26px] lg:mt-[26px] lg:mb-[26px] lg:ml-0">
            {hero.image && (
              <Image
                src={hero.image}
                alt={`${hero.title} screenshot`}
                fill
                sizes="(max-width: 1024px) 92vw, 520px"
                className="object-cover object-top"
              />
            )}
          </div>
        </Reveal>

        {rest.map((project, index) => (
          <Reveal
            as="article"
            key={project.slug}
            className={`proj${index === rest.length - 1 ? " proj-accent" : ""}`}
            delay={stagger(index + 3)}
          >
            <div className="proj-index">
              <span className={index % 2 === 0 ? "text-purple-soft" : "text-cyan"}>
                {pad(index + 2)}
              </span>{" "}
              {project.tag} · {project.year}
            </div>
            <h3>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p>{project.summary}</p>

            {project.metrics && (
              <dl className="m-0 mt-[18px] grid grid-cols-3 gap-2.5 border-t border-line-strong pt-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="metric-lbl">{metric.label}</dt>
                    <dd className="metric-val">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-[18px] flex flex-wrap gap-[7px]">
              {project.stack.slice(0, 4).map((item) => (
                <StackBadge key={item}>{item}</StackBadge>
              ))}
            </div>
            <ProjectLinks project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8" delay={stagger(7)}>
        <Button asChild variant="outline" size="lg" className="h-12 px-6 text-[15px]">
          <Link href="/projects">
            All projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Button>
      </Reveal>
    </>
  );
}
