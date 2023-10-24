import Image from "next/image";
import Hero from "@/components/hero";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Works from "@/components/works";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Works />
      <SectionDivider />
      <Projects />
      {/* <SectionDivider /> */}
      {/* <Contact /> */}
    </main>
  );
}
