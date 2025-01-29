"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NotebookText, Menu, CircleX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ThemeSwitcher from "./ThemeSwitcher";
import NavButtons from "../Buttons/NavButtons";
import { menuVars, containerVars } from "@/utils/variants";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="px-4 bg-[#F5DF4D] text-[#262642] dark:bg-[#262642] dark:text-[#FFFFFF]">
      {!isOpen && (
        <nav className="flex justify-between items-center py-4 px-2">
          <Link
            href="/"
            aria-label="Curioscribe logo"
            className="flex gap-1 items-center"
          >
            <NotebookText />
            <span className="tracking-wide font-bold text-lg">Curioscribe</span>
          </Link>
          <div className="sm:flex hidden gap-2">
            <NavButtons>Sign up</NavButtons>
            <NavButtons>Log in</NavButtons>
            <ThemeSwitcher />
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="sm:hidden flex items-center justify-center nav-buttons w-[3rem] h-[3rem] rounded-full"
          >
            <Menu />
          </button>
        </nav>
      )}

      {/* sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-[#F5DF4D] text-[#262642] dark:bg-[#262642] dark:text-[#FFFFFF] p-10 z-50 origin-top"
          >
            <div className="flex h-full flex-col py-8 px-4">
              <div className="flex justify-between">
                <Link
                  href="/"
                  aria-label="Curioscribe logo"
                  className="flex gap-1 items-center text-[#262642] dark:text-[#FFFFFF]"
                >
                  <NotebookText />
                  <span className="tracking-wide font-bold">Curioscribe</span>
                </Link>

                <button
                  className="nav-buttons text-xl focus:outline-none w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <CircleX />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                <div className="overflow-hidden flex flex-col items-center">
                  <NavButtons>Sign up</NavButtons>
                  <NavButtons>Log in</NavButtons>
                </div>
              </motion.div>
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
