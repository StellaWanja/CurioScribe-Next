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

import ThemeSwitcher from "@/utils/Theme/ThemeSwitcher";
import clsx from "clsx";

function SideMenu({
  sidebarIsClosed,
  toggleSidebar,
}: {
  sidebarIsClosed: boolean;
  toggleSidebar: () => void;
}) {
  // tooltip state
  const [toolTipIsOpen, setToolTipIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: toolTipIsOpen,
    onOpenChange: setToolTipIsOpen,
  });
  // tooltip hover animation
  const hover = useHover(context);
  // tooltip position
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div
      className={clsx(
        "py-8 relative min-h-screen",
        sidebarIsClosed ? "px-2" : "px-4"
      )}
    >
      <div
        className={clsx(
          "flex mb-8",
          sidebarIsClosed ? "justify-center" : "justify-end"
        )}
      >
        <button
          aria-describedby="tooltip"
          ref={refs.setReference}
          {...getReferenceProps()}
          onClick={toggleSidebar}
        >
          <PanelLeftClose />
        </button>
        {/* tooltip */}
        {toolTipIsOpen && (
          <div
            id="tooltip"
            role="tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="bg-yellow px-3 py-2 text-darkgrey text-sm font-semibold rounded-md"
          >
            {sidebarIsClosed ? "Open Sidebar" : "Close Sidebar"}
          </div>
        )}
      </div>

      <Link
        href="/"
        aria-label="Curioscribe logo"
        className={clsx(
          "flex gap-1 items-center",
          sidebarIsClosed ? "justify-center" : "justify-start"
        )}
      >
        <NotebookText className="stroke-[2.5] w-8 h-8 text-white" />
        {!sidebarIsClosed && <span className="font-bold">CurioScribe</span>}
      </Link>

      <div className="flex flex-col gap-2 mt-8 text-lightgrey text-sm">
        <Link
          href="/"
          className={clsx(
            "sidebar-links",
            sidebarIsClosed && "flex justify-center"
          )}
        >
          <House />
          {!sidebarIsClosed && <span>Home</span>}
        </Link>
        <Link
          href="/"
          className={clsx(
            "sidebar-links",
            sidebarIsClosed && "flex justify-center"
          )}
        >
          <Blocks />
          {!sidebarIsClosed && <span>Create New</span>}
        </Link>
        <Link
          href="/"
          className={clsx(
            "sidebar-links",
            sidebarIsClosed && "flex justify-center"
          )}
        >
          <File />
          {!sidebarIsClosed && <span>Templates</span>}
        </Link>

        <div className="border-t-2 border-white my-8 opacity-50" />

        <div className="flex gap-3 items-center text-white">
          <div className="w-8 h-8 rounded-full bg-white" />
          {!sidebarIsClosed && <span>Happy Llama</span>}
        </div>

        <div className="flex flex-col gap-2 mt-4 ml-4">
          <Link
            href="/"
            className={clsx(
              "sidebar-links",
              sidebarIsClosed && "flex justify-center"
            )}
          >
            <Folders />
            {!sidebarIsClosed && <span>My Projects</span>}
          </Link>
          <Link
            href="/"
            className={clsx(
              "sidebar-links",
              sidebarIsClosed && "flex justify-center"
            )}
          >
            <Settings />
            {!sidebarIsClosed && <span>Settings</span>}
          </Link>
        </div>
        <Link
          href="/"
          className={clsx(
            "sidebar-links",
            sidebarIsClosed && "flex justify-center"
          )}
        >
          <CircleHelp />
          {!sidebarIsClosed && <span>Help & Support</span>}
        </Link>
        <Link
          href="/"
          className={clsx(
            "sidebar-links",
            sidebarIsClosed && "flex justify-center"
          )}
        >
          <LogOut />
          {!sidebarIsClosed && <span>Log Out</span>}
        </Link>
      </div>

      <div aria-label="Theme Switcher" className="absolute bottom-12 sm:left-10">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default SideMenu;
