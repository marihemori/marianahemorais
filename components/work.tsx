"use client";

import { useRef } from "react";
import { worksData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type WorkProps = (typeof worksData)[number];

export default function Work({ title, imageUrl, url }: WorkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group w-full h-full"
    >
      <section className="border border-black/5 rounded-2xl overflow-hidden px-5 relative transition bg-white bg-opacity-50 hover:bg-opacity-70 shadow-lg backdrop-blur-[0.5rem]">
        <a href={url} target="_blank">
          <div className="pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full cursor-pointer">
            <h3 className="text-2xl font-semibold text-zinc-800">{title}</h3>
          </div>
          <div className="flex w-100 place-content-center">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="sm:block top-10 w-[30rem] h-[15rem] rounded-t-lg shadow-2xl cursor-pointer
              transition
              group-hover:scale-[1.04]
            "
            />
          </div>
        </a>
      </section>
    </motion.div>
  );
}
