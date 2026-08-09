import PORTFOLIO from "@/app/_data/portfolio";
import PageChrome from "@/app/_components/PageChrome";
import ProjectGrid from "@/app/_components/ProjectGrid";

export const metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects by Andrew Dakran — Next.js, Node, MongoDB, ASP.NET and more.",
};

export default function ProjectsPage() {
  return (
    <PageChrome>
      <span className="kicker">Selected work</span>
      <h1 className="page-title max-w-[20ch]">Everything I&rsquo;ve shipped.</h1>
      <p className="lede mt-6 max-w-[62ch]">
        Full-stack builds, a graduation project that placed second nationally, and the front-end
        work in between. Each one has a short case study.
      </p>

      <ProjectGrid projects={PORTFOLIO.projects} />
    </PageChrome>
  );
}
