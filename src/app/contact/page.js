import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import PageChrome from "@/app/_components/PageChrome";
import ContactForm from "@/app/_components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Andrew Dakran — full stack developer based in Cairo, Egypt.",
};

export default function ContactPage() {
  const { identity, socials } = PORTFOLIO;

  return (
    <PageChrome>
      <span className="kicker">Contact</span>
      <h1 className="page-title max-w-[18ch]">Let&rsquo;s talk about what you&rsquo;re building.</h1>
      <p className="lede mt-6 max-w-[58ch]">
        Full-stack roles or project work. I reply within two business days.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="grid content-start gap-4">
          <Card className="gap-3 rounded-[18px] px-[22px] py-[22px]">
            <a href={`mailto:${socials.email}`} className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <Mail size={15} />
              </span>
              {socials.emailLabel}
            </a>
            <a href={`tel:${socials.phone.replace(/\s/g, "")}`} className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <Phone size={15} />
              </span>
              {socials.phoneLabel}
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <ExternalLink size={15} />
              </span>
              {socials.githubLabel}
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <ExternalLink size={15} />
              </span>
              {socials.linkedinLabel}
            </a>
            <p className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <MapPin size={15} />
              </span>
              {identity.location}
            </p>
          </Card>

          <Card className="gap-0 rounded-[18px] py-0">
            <CardContent className="px-[22px] py-[22px]">
              <p className="label">Currently</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-body">
                {identity.availabilityLabel} · {identity.role}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/resume">Résumé</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <ContactForm />
      </div>
    </PageChrome>
  );
}
