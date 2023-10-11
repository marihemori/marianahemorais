"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsBehance,
  BsCode,
  BsCodeSquare,
  BsDribbble,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="xl:mt-28 mb-10 mt-8">
      <div className="flex flex-col items-center xl:flex-row gap-6 sm:gap-12">
        <div className="w-fill xl:w-2/3">
          <motion.h1>
            <p className="text-4xl sm:text-5xl mb-6 font-medium leading-[3rem] sm:leading-[3.5rem]">
              Hi 👋 <br></br>
              I'am Mariana and I'm a{" "}
              <span className="font-bold">
                Front-End developer and UX/UI self-taught,
              </span>{" "}
              based in Brazil.
            </p>
            <p className="text-2xl text-black">
              Feel free to contact me or follow me on social media.
            </p>
          </motion.h1>
        </div>
        <motion.div className="grid grid-cols-4 gap-4 items-center w-full xl:w-1/3">
          <motion.div
            className="bg-zinc-800 text-white hover:bg-zinc-900 px:6 py-3 xl:px-8 xl:py-6 h-fit flex place-content-center gap-4 rounded-xl text-2xl active:scale-105 transition col-span-full font-medium cursor-grab bg-opacity-90
            shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a href="#contact" className="cursor-pointer">
              Contact me ✉️
            </a>
          </motion.div>
          <motion.div
            className="bg-white text-zinc-800 hover:text-gray-800 px-8 py-6 h-fit flex place-content-center gap-2 rounded-xl text-4xl active:scale-105 transition cursor-grab bg-opacity-60 hover:bg-opacity-95
            shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://github.com/marihemori"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub />
            </a>
          </motion.div>
          <motion.div
            className="bg-white text-zinc-800 hover:text-gray-800 px-8 py-6 h-fit flex place-content-center gap-2 rounded-xl text-4xl focus:scale-110 transition cursor-grab bg-opacity-60 hover:bg-opacity-95
            shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://www.linkedin.com/in/marianahemorais/"
              target="_blank"
              className="cursor-pointer"
            >
              <BsLinkedin />
            </a>
          </motion.div>
          <motion.div
            className="bg-white text-zinc-800 hover:text-gray-800 px-8 py-6 h-fit flex place-content-center gap-2 rounded-xl text-4xl focus:scale-110 transition cursor-grab bg-opacity-60 hover:bg-opacity-95
            shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://dribbble.com/marianahemorais"
              target="_blank"
              className="cursor-pointer"
            >
              <BsDribbble />
            </a>
          </motion.div>
          <motion.div
            className="bg-white text-zinc-800 hover:text-gray-800 px-8 py-6 h-fit flex place-content-center gap-2 rounded-xl text-4xl focus:scale-110 transition cursor-grab bg-opacity-60 hover:bg-opacity-95
            shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://www.behance.net/marianahemorais"
              target="_blank"
              className="cursor-pointer"
            >
              <BsBehance />
            </a>
          </motion.div>
          <motion.div
            className="bg-white text-zinc-800 hover:text-gray-800 px-8 py-6 h-fit flex place-content-center gap-2 rounded-xl text-4xl focus:scale-110 transition cursor-grab bg-opacity-60 hover:bg-opacity-95
            shadow-lg backdrop-blur-[0.5rem] col-span-1"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://codepen.io/marianahemorais"
              target="_blank"
              className="cursor-pointer"
            >
              <BsCode />
            </a>
          </motion.div>
          <motion.div
            className="bg-[#eaffe0] text-zinc-800 hover:text-gray-800 px-8 py-6 h-max flex place-content-center gap-4 rounded-xl text-2xl focus:scale-110 transition col-span-3 font-medium cursor-grab bg-opacity-80 shadow-lg backdrop-blur-[0.5rem]"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <a
              href="https://marihemori.github.io/garden/"
              target="_blank"
              className="cursor-pointer"
            >
              My garden of words 🌱
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
