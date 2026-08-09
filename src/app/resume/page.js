import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Mail, MapPin, Phone, Printer } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import PageChrome from "@/app/_components/PageChrome";
import ResumeContent from "@/app/_components/ResumeContent";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Résumé",
  description: "Full CV for Andrew Dakran — experience, skills, education and certifications.",
};

export default function ResumePage() {
  const { identity, socials } = PORTFOLIO;

  return (
    <PageChrome>
      <span className="kicker">Curriculum vitae</span>
      <h1 className="page-title max-w-[16ch]">{identity.fullName}</h1>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <aside className="grid content-start gap-6 lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[20px] border border-line">
            <Image
              src="/avatar.jpg"
              alt={identity.name}
              fill
              sizes="280px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="font-display text-lg font-semibold text-ink-bright">{identity.name}</p>
            <p className="text-sm text-ink-mute">{identity.role}</p>
          </div>

          <div className="grid gap-2.5 text-sm">
            <a href={`mailto:${socials.email}`} className="flex items-center gap-2.5">
              <Mail size={14} aria-hidden="true" /> {socials.emailLabel}
            </a>
            <a href={`tel:${socials.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5">
              <Phone size={14} aria-hidden="true" /> {socials.phoneLabel}
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2.5">
              <ExternalLink size={14} aria-hidden="true" /> {socials.githubLabel}
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5"
            >
              <ExternalLink size={14} aria-hidden="true" /> {socials.linkedinLabel}
            </a>
            <p className="m-0 flex items-center gap-2.5 text-ink-body">
              <MapPin size={14} aria-hidden="true" /> {identity.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild size="lg" className="h-11 px-5">
              <a href="/CV Cairo.pdf" download>
                <Download size={16} aria-hidden="true" />
                Download PDF
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-5">
              <Link href="/print">
                <Printer size={16} aria-hidden="true" />
                Print view
              </Link>
            </Button>
          </div>
        </aside>

        <ResumeContent />
      </div>
    </PageChrome>
  );
}
