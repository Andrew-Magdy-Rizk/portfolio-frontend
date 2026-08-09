import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import PageChrome from "@/app/_components/PageChrome";
import Reveal from "@/app/_components/Reveal";
import StackBadge from "@/app/_components/StackBadge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return PORTFOLIO.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO.projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <PageChrome>
      <p className="crumb">
        <Link href="/projects">projects</Link> / {project.slug}
      </p>
      <h1 className="page-title max-w-[18ch]">{project.title}</h1>
      <p className="lede mt-6 max-w-[62ch]">{project.summary}</p>

      <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-6">
        {[
          { label: "Year", value: project.year },
          { label: "Type", value: project.tag },
          { label: "Status", value: project.featured ? "Featured" : "Shipped" },
        ].map((item) => (
          <div key={item.label}>
            <dt className="metric-lbl">{item.label}</dt>
            <dd className="metric-val">{item.value}</dd>
          </div>
        ))}
      </dl>

      {(project.live || project.repo) && (
        <div className="proj-links">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1"
            >
              Live preview
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
      )}

      {project.image && (
        <Reveal className="proj-shot mt-10 aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${project.title} — main screen`}
            fill
            priority
            sizes="(max-width: 1180px) 100vw, 1132px"
            className="object-cover object-top"
          />
        </Reveal>
      )}

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        <aside className="grid content-start gap-8 lg:sticky lg:top-24 lg:self-start">
          <div>
            <p className="label">Stack</p>
            <div className="mt-3 flex flex-wrap gap-[7px]">
              {project.stack.map((item) => (
                <StackBadge key={item}>{item}</StackBadge>
              ))}
            </div>
          </div>

          <div>
            <p className="label">Architecture</p>
            <p className="mt-3 text-sm leading-[1.7] text-ink-body">{project.arch}</p>
          </div>
        </aside>

        <div className="prose grid gap-10">
          <Reveal as="section">
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </Reveal>

          <Reveal as="section">
            <h2>The solution</h2>
            <p>{project.solution}</p>
          </Reveal>

          <Reveal as="section">
            <h2>Key features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>

          {project.screens?.length > 0 && (
            <Reveal as="section">
              <h2>Selected screens</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.screens.map((screen, index) => (
                  <div key={screen} className="proj-shot aspect-[3/4]">
                    <Image
                      src={screen}
                      alt={`${project.title} — screen ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Button asChild variant="outline" size="lg" className="h-12 px-6 text-[15px]">
          <Link href="/projects">← All projects</Link>
        </Button>
      </div>
    </PageChrome>
  );
}
