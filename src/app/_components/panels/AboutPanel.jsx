import PORTFOLIO from "@/app/_data/portfolio";
import Reveal from "../Reveal";
import StackBadge from "../StackBadge";
import Todo, { isTodo } from "../Todo";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/** Matches the handoff's card padding while using shadcn's Card shell. */
const CARD = "gap-0 py-0";
const CARD_BODY = "px-[26px] py-[26px]";

const dotColour = (index, total) => {
  if (index === total - 1) return "rgba(255,255,255,.22)";
  return index % 2 === 0 ? "var(--neon-purple)" : "var(--neon-cyan)";
};

const dotGlow = (index, total) => {
  if (index === total - 1) return "none";
  return index % 2 === 0
    ? "0 0 0 3px rgba(157,0,255,.18)"
    : "0 0 0 3px rgba(0,245,255,.18)";
};

export default function AboutPanel() {
  const { about, experience, education, certifications, languages } = PORTFOLIO;

  return (
    <>
      <Reveal as="span" className="kicker" delay={0}>
        02 — About &amp; experience
      </Reveal>
      <Reveal as="h2" className="h-display max-w-[22ch]" delay={60}>
        Two years in, six roles deep.
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-[22px] lg:grid-cols-2">
        <div className="grid content-start gap-[22px]">
          <Reveal delay={120}>
            <Card className={CARD}>
              <CardContent className={CARD_BODY}>
                <h3 className="card-title">The story</h3>
                {isTodo(about.story) ? (
                  <p className="card-body">
                    <Todo value={about.story} block />
                  </p>
                ) : (
                  <p className="card-body">{about.story}</p>
                )}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={180}>
            <Card className={CARD}>
              <CardContent className={CARD_BODY}>
            <h3 className="card-title">Strengths</h3>
            <ul className="m-0 mt-4 grid list-none gap-3 p-0">
              {about.strengths.map((strength, index) => (
                <li
                  key={strength.title}
                  className="grid grid-cols-[16px_1fr] gap-[11px] text-[15px] leading-[1.65] text-ink-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full"
                    style={{
                      background: index % 2 === 0 ? "var(--neon-purple)" : "var(--neon-cyan)",
                    }}
                  />
                  <span>
                    <strong className="font-medium text-ink-strong">{strength.title}</strong>
                    {isTodo(strength.note) ? (
                      <>
                        {" "}
                        <Todo value={strength.note} />
                      </>
                    ) : (
                      <> — {strength.note}</>
                    )}
                  </span>
                </li>
              ))}
            </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={240}>
            <Card className={CARD}>
              <CardContent className={CARD_BODY}>
            <h3 className="card-title">Education &amp; certifications</h3>
            <div className="mt-4 grid gap-3.5">
              {education.map((item) => (
                <p key={item.title} className="m-0 text-[15px] leading-[1.6] text-ink-body">
                  <strong className="block font-medium text-ink-strong">{item.title}</strong>
                  {item.org} · {item.when}
                </p>
              ))}
              {certifications.map((cert) => (
                <p key={cert} className="m-0 text-[15px] leading-[1.6] text-ink-body">
                  {cert}
                </p>
              ))}
            </div>

            <Separator className="mt-5 bg-line" />

            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((item) => (
                <StackBadge key={item.lang}>
                  {item.lang} · {item.level}
                </StackBadge>
              ))}
            </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal as="ol" className="timeline" delay={180}>
          <li aria-hidden="true" className="timeline-rail" />
          {experience.map((job, index) => (
            <li key={`${job.title}-${job.when}`} className="relative">
              <span
                aria-hidden="true"
                className="timeline-dot"
                style={{
                  background: dotColour(index, experience.length),
                  boxShadow: dotGlow(index, experience.length),
                }}
              />
              <div className="timeline-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3>{job.title}</h3>
                  <span className="font-mono text-xs text-cyan">{job.when}</span>
                </div>
                <p className="mt-1.5! text-[13.5px] text-ink-mute">{job.org}</p>
                <p>{job.summary}</p>
                <div className="mt-4 flex flex-wrap gap-[7px]">
                  {job.stack.map((item) => (
                    <StackBadge key={item}>{item}</StackBadge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </>
  );
}
