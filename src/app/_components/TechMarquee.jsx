/**
 * Edge-masked infinite marquee. Pure CSS — the track holds the list twice and
 * translates by -50%, so the loop is seamless.
 */
export default function TechMarquee({ items }) {
  const run = (hidden) => (
    <div className="marquee-run" aria-hidden={hidden ? "true" : undefined}>
      {items.map((item) => (
        <span key={item} className="chip-lg">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div className="marquee-track">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
