import Image from "next/image";
import { Download } from "lucide-react";
import PORTFOLIO from "@/app/_data/portfolio";
import { Button } from "@/components/ui/button";
import Reveal from "../Reveal";
import CountUp from "../CountUp";
import GotoButton from "../GotoButton";

export default function HomePanel() {
  const { identity } = PORTFOLIO;

  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
      <div>
        <Reveal as="p" className="pill-status" delay={0}>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
          {identity.availabilityLabel}
        </Reveal>

        <Reveal as="h1" className="hero-title" delay={60}>
          {identity.headline}
        </Reveal>

        <Reveal as="p" className="lede mt-6 max-w-[54ch]" delay={120}>
          {identity.lede}
        </Reveal>

        <Reveal className="mt-9 flex flex-wrap gap-3" delay={180}>
          <GotoButton to="work">View selected work</GotoButton>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 text-[15px]">
            <a href="/CV Cairo.pdf" download>
              <Download size={16} aria-hidden="true" />
              Download résumé
            </a>
          </Button>
        </Reveal>

        <Reveal
          as="dl"
          className="mt-11 grid grid-cols-2 gap-[26px] border-t border-line pt-7 sm:grid-cols-4"
          delay={240}
        >
          {identity.stats.map((stat) => (
            <div key={stat.lbl}>
              <dd className="stat-num">
                {stat.count == null ? (
                  stat.num
                ) : (
                  <>
                    <CountUp to={stat.count} />
                    {stat.suffix && <span className="text-cyan">{stat.suffix}</span>}
                  </>
                )}
              </dd>
              <dt className="stat-lbl">{stat.lbl}</dt>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="portrait" delay={300}>
        <div className="portrait-ring">
          <div className="portrait-frame">
            <Image
              src="/avatar.jpg"
              alt={`${identity.name}, ${identity.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 82vw, 360px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div aria-hidden="true" className="portrait-chips">
          {identity.heroChips.map((chip) => (
            <span key={chip} className="portrait-chip">
              {chip}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
