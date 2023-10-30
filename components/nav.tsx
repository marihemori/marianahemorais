"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="relative hidden md:block z-50">
      <motion.div
        className="
            flex
            flex-col
            justify-start
            fixed
            top-0
            right-[2rem]
            h-[3.5rem]
            w-full
            rounded-full
            border-opacity-50
            bg-white
            bg-opacity-40
            shadow-lg
            shadow-white/[0.03]
            backdrop-blur-[0.5rem]
            sm:w-[3rem]
            sm:h-[23rem]
            sm:top-[11rem]
        "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] right-[2rem] h-12 p-y sm:py-0 flex w-fit justify-center sm:h-[100vh] sm:flex sm:flex-col sm:justify-center">
        <ul className="flex flex-row sm:flex-col w-fit">
          {links.map((link) => (
            <motion.li
              className="text-2xl relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex flex-row items-center justify-start px-3 py-3 text-zinc-700 hover:text-zinc-800 transition w-fit",
                  {
                    "text-zinc-700": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}

                {link.name === activeSection && (
                  <span className="bg-white/90 rounded-full absolute inset-0 -z-10 "></span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
