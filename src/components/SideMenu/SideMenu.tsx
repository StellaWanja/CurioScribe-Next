"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import {
  Blocks,
  Folders,
  House,
  NotebookText,
  PanelLeftClose,
  File,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

import ThemeSwitcher from "../../utils/Theme/ThemeSwitcher";

function SideMenu() {
  const [toolTipIsOpen, setToolTipIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: toolTipIsOpen,
    onOpenChange: setToolTipIsOpen,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div className="py-8 px-4 relative min-h-screen">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Curioscribe logo"
          className="flex gap-1 items-center"
        >
          <NotebookText className="stroke-[2.5] w-8 h-8 text-white" />
          <span className="font-bold">CurioScribe</span>
        </Link>
        <button
          aria-describedby="tooltip"
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <PanelLeftClose />
        </button>
        {toolTipIsOpen && (
          <div
            id="tooltip"
            role="tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="bg-yellow px-3 py-2 text-darkgrey text-sm font-semibold rounded-md"
          >
            Close Sidebar
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-8 text-lightgrey text-sm">
        <Link href="/" className="sidebar-links">
          <House />
          <span>Home</span>
        </Link>
        <Link href="" className="sidebar-links">
          <Blocks />
          <span>Create New</span>
        </Link>
        <Link href="" className="sidebar-links">
          <File />
          <span>Templates</span>
        </Link>

        <div className="border-t-2 border-white my-8 opacity-50" />

        <div className="flex gap-3 items-center text-white">
          <div className="w-8 h-8 rounded-full bg-white" />
          <span>Happy Llama</span>
        </div>

        <div className="flex flex-col gap-2 mt-4 ml-4">
          <Link href="" className="sidebar-links">
            <Folders />
            <span>My Projects</span>
          </Link>
          <Link href="" className="sidebar-links">
            <Settings />
            <span>Settings</span>
          </Link>
        </div>
        <Link href="" className="sidebar-links">
          <CircleHelp />
          <span>Help & Support</span>
        </Link>
        <Link href="" className="sidebar-links">
          <LogOut />
          <span>Log Out</span>
        </Link>
      </div>

      <div aria-label="Theme Switcher" className="absolute bottom-8">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default SideMenu;
