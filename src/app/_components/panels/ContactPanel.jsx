import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import Reveal from "../Reveal";
import { stagger } from "../stagger";
import ContactForm from "../ContactForm";
import Todo from "../Todo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const QUOTE_CARD = "quote gap-0 rounded-[18px] py-0";

function Testimonials({ items }) {
  if (items.length > 0) {
    return items.map((item, index) => (
      <Reveal key={item.name} delay={stagger(index + 2)}>
        <Card className={QUOTE_CARD}>
          <CardContent className="px-[22px] py-[22px]">
            <figure className="quote m-0">
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span aria-hidden="true" className="quote-avatar">
                  {item.initials}
                </span>
                <span>
                  <strong className="block font-medium text-ink">{item.name}</strong>
                  {item.role}
                </span>
              </figcaption>
            </figure>
          </CardContent>
        </Card>
      </Reveal>
    ));
  }

  // No testimonials supplied — show the slots rather than inventing quotes.
  return [0, 1].map((slot) => (
    <Reveal key={slot} delay={stagger(slot + 2)}>
      <Card className={QUOTE_CARD}>
        <CardContent className="px-[22px] py-[22px]">
          <Todo
            value="add a testimonial to `testimonials` in _data/portfolio.js — { quote, name, role, initials }"
            block
          />
        </CardContent>
      </Card>
    </Reveal>
  ));
}

export default function ContactPanel() {
  const { socials, identity, testimonials } = PORTFOLIO;

  return (
    <>
      <Reveal as="span" className="kicker" delay={0}>
        05 — Testimonials &amp; contact
      </Reveal>
      <Reveal as="h2" className="h-display max-w-[24ch]" delay={60}>
        Let&rsquo;s talk about what you&rsquo;re building.
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="grid content-start gap-4">
          <Testimonials items={testimonials} />

          <Reveal delay={stagger(4)}>
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

            <p className="contact-row">
              <span aria-hidden="true" className="contact-icon">
                <MapPin size={15} />
              </span>
              {identity.location}
            </p>

            <Separator className="bg-line" />

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={socials.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/resume">Résumé</Link>
              </Button>
            </div>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={stagger(5)}>
          <ContactForm />
        </Reveal>
      </div>

      <Reveal className="mt-8 border-t border-line pt-4 text-[12.5px] text-ink-faint" delay={stagger(6)}>
        © {new Date().getFullYear()} {identity.name} · Built with Next.js.
      </Reveal>
    </>
  );
}
