import Image from "next/image";
import PORTFOLIO from "@/app/_data/portfolio";
import PrintBar from "@/app/_components/PrintBar";
import PrintTrigger from "@/app/_components/PrintTrigger";
import ResumeContent from "@/app/_components/ResumeContent";

export const metadata = {
  title: "Print CV",
  description: "Printable CV for Andrew Dakran.",
  robots: { index: false, follow: false },
};

/**
 * Print/PDF view. Renders the same `ResumeContent` as /resume rather than a
 * second copy of the markup, so the two can't drift apart.
 */
export default function PrintPage() {
  const { identity, socials } = PORTFOLIO;

  return (
    <>
      <PrintBar />
      <PrintTrigger />

      <main className="mx-auto max-w-[900px] px-6 py-10">
        <header className="flex flex-wrap items-center gap-6 border-b border-line pb-8">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-line">
            <Image src="/avatar.jpg" alt={identity.name} fill sizes="96px" className="object-cover object-top" />
          </div>
          <div className="grid gap-1">
            <h1 className="m-0 font-display text-3xl font-bold tracking-[-0.03em] text-ink-bright">
              {identity.fullName}
            </h1>
            <p className="m-0 text-ink-mute">{identity.role}</p>
            <p className="m-0 text-sm text-ink-body">
              {socials.emailLabel} · {socials.phoneLabel} · {identity.location}
            </p>
            <p className="m-0 text-sm text-ink-body">
              {socials.githubLabel} · {socials.linkedinLabel}
            </p>
          </div>
        </header>

        <div className="mt-10">
          <ResumeContent />
        </div>
      </main>
    </>
  );
}
