import PORTFOLIO from "@/app/_data/portfolio";
import Reveal from "../Reveal";
import { stagger } from "../stagger";
import SkillBar from "../SkillBar";
import TechMarquee from "../TechMarquee";
import Todo, { isTodo } from "../Todo";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Until a category defines `bars`, the bars are labelled from its `pills` and
 * rendered without a figure — real labels, no invented percentages.
 */
function barsFor(skill) {
  if (Array.isArray(skill.bars) && skill.bars.length > 0) return skill.bars;
  return skill.pills.slice(0, 3).map((label) => ({ label, pct: null }));
}

export default function SkillsPanel() {
  const { skills } = PORTFOLIO;
  const marqueeItems = [...new Set(skills.flatMap((skill) => skill.pills))];
  const anyUnset = skills.some((skill) => !Array.isArray(skill.bars) || skill.bars.length === 0);

  return (
    <>
      <Reveal as="span" className="kicker" delay={0}>
        03 — Skills &amp; stack
      </Reveal>
      <Reveal as="h2" className="h-display max-w-[24ch]" delay={60}>
        Depth where it matters, range where it helps.
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <Reveal key={skill.title} delay={stagger(index + 2)}>
            <Card className={`card-hover h-full gap-0 py-0${index % 2 === 1 ? " purple" : ""}`}>
              <CardContent className="px-6 py-6">
                <div className="skill-head">
                  <h3>{skill.title}</h3>
                  {isTodo(skill.level) ? (
                    <Todo value={null} fallback="level" />
                  ) : (
                    <span
                      className={`font-mono text-[11px] ${
                        index % 2 === 1 ? "text-purple-soft" : "text-cyan"
                      }`}
                    >
                      {skill.level}
                    </span>
                  )}
                </div>

                <p className="skill-blurb">{skill.blurb}</p>

                <div className="grid gap-[13px]">
                  {barsFor(skill).map((bar) => (
                    <SkillBar
                      key={bar.label}
                      label={bar.label}
                      pct={bar.pct}
                      alt={index % 2 === 1}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {anyUnset && (
        <Reveal className="mt-6" delay={stagger(8)}>
          <Todo
            value="set skills[].level and skills[].bars in _data/portfolio.js — bars are labelled from `pills` and left unfilled until then"
            block
          />
        </Reveal>
      )}

      <Reveal className="mt-8 border-t border-line pt-[26px]" delay={stagger(9)}>
        <TechMarquee items={marqueeItems} />
      </Reveal>
    </>
  );
}
