"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 w-[100%]"
    >
      <div className="max-w-[42rem] border border-black/5 rounded-2xl overflow-hidden  relative transition bg-white bg-opacity-50 hover:bg-opacity-70 shadow-lg backdrop-blur-[0.5rem] h-[16rem]">
        <a href={url} target="_blank">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:max-w-[50%] flex flex-col h-full cursor-pointer">
            <h3 className="text-2xl font-semibold text-zinc-800">{title}</h3>
            <p className="mt-2 leading-relaxed text-zinc-800">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-zinc-800 px-3 py-1 text-sm tracking-wider text-white rounded-full cursor-pointer"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-16 -right-40 w-[30rem] rounded-t-lg shadow-2xl cursor-pointer
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
          "
          />
        </a>
      </div>
    </motion.section>
  );
}
