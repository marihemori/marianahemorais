"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { worksData } from "@/lib/data";
import Work from "./work";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Works", 0.5);

  return (
    <section ref={ref} id="work-projects" className="scroll-mt-28 mb-28 mt-8">
      <SectionHeading>Works</SectionHeading>
      <p className="mb-10 text-2xl">Projects I've worked on.</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {worksData.map((work, index) => (
          <React.Fragment key={index}>
            <Work {...work} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
