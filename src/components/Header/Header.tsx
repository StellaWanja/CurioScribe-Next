"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NotebookText, Menu, CircleX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import ThemeSwitcher from "../../utils/Theme/ThemeSwitcher";
import { menuVars, containerVars } from "@/utils/variants";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="font-sans px-4 bg-yellow  text-darkblue dark:bg-darkblue dark:text-white">
      {/* navbar on large screens */}
      {!isOpen && (
        <nav className="flex justify-between items-center py-4 px-2">
          <Link
            href="/"
            aria-label="Curioscribe logo"
            className="flex gap-1 items-center"
          >
            <NotebookText className="stroke-[2.5] w-12 h-12 text-darkblue sm:text-white dark:text-white z-20" />
          </Link>
          <div className="sm:flex hidden gap-2 z-20">
            <Link
              href="/sign-up"
              className="solid-button font-bold rounded-full py-2 px-6"
            >
              Sign up
            </Link>
            <Link
              href="/sign-in"
              className="text-button  font-bold rounded-full py-2 px-6"
            >
              Log in
            </Link>
            <ThemeSwitcher />
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="sm:hidden flex items-center justify-center text-button text-darkblue bg-white w-[3rem] h-[3rem] rounded-xl shadow-md rotate-[0.3rad] z-20"
          >
            <Menu className="stroke-[2.5] " />
          </button>
        </nav>
      )}

      {/* navbar on small screens, allowing for a sliding menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-yellow text-darkblue dark:bg-darkblue dark:text-white p-10 z-50 origin-top"
          >
            <div className="flex h-full flex-col py-8 px-4">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  aria-label="Curioscribe logo"
                  className="flex gap-1 items-center text-darkblue dark:text-white"
                >
                  <NotebookText className="stroke-[2.5] w-10 h-10" />
                </Link>

                <button
                  className="text-button text-xl focus:outline-none w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <CircleX className="stroke-[2.5]" />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                <div className="overflow-hidden flex flex-col items-center gap-2">
                  <Link
                    href="/sign-up"
                    className="solid-button font-bold rounded-full py-2 px-6"
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/sign-in"
                    className="text-button  font-bold rounded-full py-2 px-6"
                  >
                    Log in
                  </Link>
                </div>
              </motion.div>
              {/* <ThemeSwitcher /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
