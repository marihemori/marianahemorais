"use client";

import React from "react";
import { motion } from "framer-motion";

export default function sectionDivider() {
  return (
    <motion.div
      className="
      border-white
      border-opacity-40
      bg-white
      bg-opacity-70
      shadow-lg
      shadow-white/[0.03]
      backdrop-blur-[0.5rem]
      my-20 h-16 w-1 rounded-full hidden sm:flex flex-col self-left"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
