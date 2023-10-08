"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="leading-8 max-w-[80rem] self-center text-left flex flex-col sm:place-items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col items-center sm:flex-row sm:gap-[6rem]">
        <div className="relative w-full">
          <Image
            src="/images/ego.png"
            className="w-fit"
            alt="Mariana"
            width={900}
            height={900}
            quality={95}
          />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-[2rem]"
          >
            👋
          </motion.span>
        </div>
        <div>
          <p className="mb-3">
            I've been into computer stuff for a long time. I graduated in{" "}
            <span className="font-medium">
              Systems Analysis and Development
            </span>
            and since then I have been interested in learning new things. I
            really like things related to{" "}
            <span className="font-medium">User Interface</span> and in the
            architecture of the
            <span className="font-medium"> Front-End</span>, I intend to become
            a professional in this. But I am also interested in to become{" "}
            <span className="font-medium">Full-Stack</span> to broaden my
            knowledge.
          </p>
          <p>
            My main stack are{" "}
            <span className="font-medium">Vue.js, Nuxt.js and React</span>. I've
            also worked with{" "}
            <span className="font-medium">Angular and DjangoCMS</span>. On the
            Back-End side, I have some experience with
            <span className="font-medium">Node.js</span>.
          </p>
          <p>
            My hobbies are playing games, reading, or just learning something
            new.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
