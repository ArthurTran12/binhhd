import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import Showcase from "@/components/sections/Showcase";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import BigName from "@/components/sections/BigName";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <Showcase />
        <About />
        <Experience />
        <Projects />
        <BigName />
        <SkillsMarquee />
      </main>
      <Footer />
    </>
  );
}
