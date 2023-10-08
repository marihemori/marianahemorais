"use client";

import React from "react";
import { motion } from "framer-motion";

export default function sectionDivider() {
  return (
    <motion.div
      className="bg-gray-500 my-24 h-16 w-1 rounded-full hidden sm:flex flex-col self-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
