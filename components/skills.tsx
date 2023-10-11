"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <motion.section ref={ref} className="scroll-mt-28 mt-8" id="skills">
      <SectionHeading>My skills</SectionHeading>
      <p className="mb-10 text-2xl">
        My skills that I got from working with them or studying.
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-zinc-800 px-5 py-1 tracking-wider rounded-full text-white cursor-pointer backdrop-blur-[0.5rem] bg-opacity-90 text-center"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
