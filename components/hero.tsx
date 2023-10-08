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
    <section ref={ref} id="home">
      <div className="flex flex-col items-center lg:flex-row gap-8">
        <div className="sm:w-2/3">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-2xl sm:text-4xl mb-6 font-medium">
              Hi 👋 <br></br>
              I'am Mariana and I'm a{" "}
              <span>Front-End developer and UX/UI self-taught</span> based in
              Brazil.
            </p>
            <p className="text-xl">
              Feel free to contact me or follow me on social media.
            </p>
          </motion.h1>
        </div>
        <motion.div
          className="grid grid-cols-3 gap-4 sm:w-1/3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          drag
          dragMomentum={false}
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <motion.a
            href="#contact"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-2xl focus:scale-110 hover:scale-110 active:scale-105 transition col-span-2 font-medium"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Contact me ✉️
          </motion.a>
          <motion.a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-4xl focus:scale-110 hover:scale-110 active:scale-105 transition"
            drag
            dragMomentum={false}
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <BsGithub />
          </motion.a>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-4xl focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-4xl focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <BsDribbble />
          </a>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-4xl focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <BsBehance />
          </a>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-4xl focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <BsCode />
          </a>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            className="bg-white text-zinc-400 hover:text-gray-800 px-8 py-6 h-fit flex items-center gap-2 rounded-xl text-2xl focus:scale-110 hover:scale-110 active:scale-105 transition col-span-2 font-medium"
          >
            My garden of words 🌱
          </a>
        </motion.div>
      </div>
    </section>
  );
}
