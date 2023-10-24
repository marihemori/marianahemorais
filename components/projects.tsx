"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 mt-8">
      <SectionHeading>My projects</SectionHeading>
      <p className="mb-10 text-2xl text-white">Some personal projects I did.</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
