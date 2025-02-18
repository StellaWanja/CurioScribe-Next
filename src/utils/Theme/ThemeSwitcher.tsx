"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const animationProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

function ThemeSwitcher() {
  const [mount, setMount] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const animationState =
    animationProperties[currentTheme === "dark" ? "light" : "dark"];

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="hover:text-white"
      type="button"
      aria-label="Toggle dark / light mode"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        animate={animationState.svg}
        transition={{ type: "spring", stiffness: 250, damping: 35 }}
      >
        <mask id="logoMask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            animate={animationState.mask}
            r="7"
            fill="black"
            transition={{ type: "spring", stiffness: 250, damping: 35 }}
          />
        </mask>

        <motion.circle
          cx="12"
          cy="12"
          animate={animationState.circle}
          fill="currentColor"
          stroke="none"
          mask="url(#logoMask)"
          transition={{ type: "spring", stiffness: 250, damping: 35 }}
        />

        <motion.g
          stroke="currentColor"
          strokeWidth="2.5"
          animate={animationState.lines}
          transition={{ duration: 0.3 }}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
}

export default ThemeSwitcher;
