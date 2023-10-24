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
      className="leading-8 self-center text-left flex flex-col sm:place-items-center mt-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col items-center xl:flex-row sm:gap-[6rem]">
        <div className="relative">
          <Image
            src="/images/ego.png"
            className="w-[20rem] xl:w-[40rem] mb-8"
            alt="Mariana"
            width={700}
            height={700}
            quality={100}
          />
        </div>
        <div className="text-left xl:text-right xl:w-[64rem] text-white">
          <p className="mb-3 text-2xl">
            I've been into computer stuff for a long time taking basic computer
            courses and technical course that I had in the community but at home
            I didn't always have internet or computers but I took advantage of
            the opportunity to graduate in{" "}
            <span className="font-medium">
              Systems Analysis and Development{" "}
            </span>
            when I finished high school and since then I have been interested in
            to work with it and learn new things
          </p>
          <p className="text-2xl mb-3">
            I really like things related to{" "}
            <span className="font-medium">User Interface</span> and in the
            architecture of the
            <span className="font-medium"> Front-End</span>, I intend to become
            a professional in this. But I am also interested in learning
            important things related to{" "}
            <span className="font-medium">Back-End</span> to broaden my
            knowledge.
          </p>
          <p className="mb-3 text-2xl">
            My main stack are{" "}
            <span className="font-medium">Vue.js, Nuxt.js and React</span> and
            I've also worked with{" "}
            <span className="font-medium">Angular and DjangoCMS</span>. On the{" "}
            Back-End side, I have some experience with{" "}
            <span className="font-medium">Node.js</span>.
          </p>
          <p className="mb-3 text-2xl">
            My hobbies are playing games, reading, or just learning something
            new.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
