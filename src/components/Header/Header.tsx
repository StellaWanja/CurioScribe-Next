"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NotebookText, Menu } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";
import NavButtons from "../Buttons/NavButtons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="bg-[#F5DF4D] text-[#262642] dark:bg-[#262642] dark:text-[#FFFFFF]">
      {isOpen && (
        <nav className="flex justify-between items-center py-8 sm:py-4 px-2">
          <Link
            href="/"
            aria-label="Curioscribe logo"
            className="flex gap-1 items-center"
          >
            <NotebookText />
            <span className="tracking-wide font-bold">Curioscribe</span>
          </Link>
          <div className="sm:flex hidden gap-4">
            <NavButtons>Sign up</NavButtons>
            <NavButtons>Log in</NavButtons>
            <ThemeSwitcher />
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="sm:hidden flex"
          >
            <Menu />
          </button>
        </nav>
      )}

      {/* sidebar */}
    </header>
  );
}

export default Header;
