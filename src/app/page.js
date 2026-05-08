import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import Tweaks from "@/components/Tweaks";

export default function Home() {
  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
      </main>

      <Footer />
      <Tweaks />
    </>
  );
}
