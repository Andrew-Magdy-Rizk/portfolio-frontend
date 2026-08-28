import { ArrowUpRight } from "lucide-react"
import { contactLinks } from "@/features/portfolio/data/portfolio-content"

export function PortfolioFooter() {
  return <footer className="site-footer" id="contact"><p className="section-mark">Contact me</p><h2 className="footer-title">Let&apos;s make<br /><em>something good.</em></h2><address className="contact-list">{contactLinks.map((link) => <a href={link.href} key={link.label} rel={link.href.startsWith("http") ? "noreferrer" : undefined} target={link.href.startsWith("http") ? "_blank" : undefined}><span>{link.label}</span><strong>{link.value}</strong><ArrowUpRight aria-hidden="true" /></a>)}</address><div className="footer-bottom"><span>&copy; {new Date().getFullYear()} Andrew Magdy Rizk Dakran · Cairo, Egypt</span></div></footer>
}
