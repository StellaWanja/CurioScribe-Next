"use client";

import React from "react";
import { motion } from "motion/react";
import { PenTool, LetterText, NotebookPen } from "lucide-react";

function FloatingIcons() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, rotate: 15 }}
        transition={{ duration: 0.5, ease: [0.37, 0, 0.63, 1] }}
        viewport={{ once: true }}
        className="floating-home-icon top-8 sm:top-0 left-8 sm:left-20 rotate-[15deg] bg-[#F5DF4D] "
      >
        <PenTool className="stroke-[#990066] size-8 sm:size-12" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, rotate: -15 }}
        transition={{ duration: 0.85, ease: [0.37, 0, 0.63, 1] }}
        viewport={{ once: true }}
        className="floating-home-icon top-40 right-5 sm:right-20 -rotate-[15deg] bg-[#94D483]"
      >
        <LetterText size={48} className="stroke-[#990066] size-8 sm:size-12" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0, rotate: 15 }}
        transition={{ duration: 0.75, ease: [0.37, 0, 0.63, 1] }}
        viewport={{ once: true }}
        className="floating-home-icon top-12 sm:top-16 left-[55%] rotate-[15deg]  bg-[#00CCBE]"
      >
        <NotebookPen size={48} className="stroke-[#990066] size-8 sm:size-12" />
      </motion.div>
    </div>
  );
}

export default FloatingIcons;
