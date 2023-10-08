"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar fixed top-0 right-0 h-3 bg-white origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
