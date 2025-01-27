"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

function ThemeSwitcher() {
  const [mount, setMount] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  console.log(currentTheme);

  if (!mount) return null;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center border-none cursor-pointer w-[3rem] h-[3rem] rounded-full transition-colors delay-100 ease-in hover:bg-[#fff6cc] dark:hover:text-[#262642]"
      type="button"
      aria-label="Toggle dark/light mode"
    >
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeSwitcher;
