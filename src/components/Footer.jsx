import Link from "next/link";
import PORTFOLIO from "@/lib/data";

export default function Footer() {
  const P = PORTFOLIO;
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="shell">
        <div className="row1">
          <div>
            <h3>
              Have a build <em>in mind?</em>
            </h3>
            <a
              className="btn btn-primary mt-3.5"
              href={`mailto:${P.socials.email}`}
            >
              {P.socials.email} <span>→</span>
            </a>
          </div>

          <div className="col">
            <h4>Pages</h4>
            <Link href="/#top">Home</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#resume">Resume</Link>
          </div>

          <div className="col">
            <h4>Elsewhere</h4>
            <a href={P.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a
              href={P.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={`mailto:${P.socials.email}`}>Email ↗</a>
          </div>
        </div>

        <div className="row2">
          <span>
            © {year} · {P.identity.name}
          </span>
          <span>Built with intent · Cairo / Remote</span>
        </div>
      </div>
    </footer>
  );
}
