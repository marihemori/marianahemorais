"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-8 sm:mb-40 mt-8"
      ref={ref}
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                borderRadius: "1rem",
                textAlign: "left",
                padding: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #f3f4f6",
              }}
              visible={true}
              icon={item.icon}
              date={item.date}
              iconStyle={{
                background: "white",
                fontSize: "5rem",
                boxShadow: "none",
              }}
            >
              <h3 className="font-semibold capitalize text-xl">{item.title}</h3>
              <p className="font-normal !text-lg text-gray-700 !mt-0">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal !text-lg">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
