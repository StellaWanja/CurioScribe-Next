"use client";

import React from "react";
import { motion } from "motion/react";
import clsx from "clsx";

import { homeCardIcon, homeCardText, homeCardTitle } from "@/utils/variants";

function Card({
  icon,
  iconBGColour,
  title,
  text,
}: {
  icon: React.ReactNode;
  iconBGColour: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <motion.div
        variants={homeCardIcon}
        initial="initial"
        whileInView="animate"
        className={clsx("homecard-div", iconBGColour)}
        viewport={{ once: true }}
      >
        {icon}
      </motion.div>
      <div className="mt-10">
        <motion.h3
          variants={homeCardTitle}
          initial="initial"
          whileInView="animate"
          className="font-bold text-xl"
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        <motion.p
          variants={homeCardText}
          initial="initial"
          whileInView="animate"
          className="mt-2 text-lg "
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}

export default Card;
