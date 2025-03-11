import React from "react";
import Link from "next/link";
import { NotebookText, PanelLeftClose } from "lucide-react";
import clsx from "clsx";

import ThemeSwitcher from "@/utils/Theme/ThemeSwitcher";
import Tooltip from "../ui/Tooltip";
import MenuLinks from "./MenuLinks";

function SideMenu({
  sidebarIsClosed,
  toggleSidebar,
}: {
  sidebarIsClosed: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div
      className={clsx(
        "py-8 relative min-h-screen text-white",
        sidebarIsClosed ? "px-2" : "px-4"
      )}
    >
      <div
        className={clsx(
          "flex mb-8",
          sidebarIsClosed ? "justify-center" : "justify-end"
        )}
      >
        {/* tooltip on hover */}
        <Tooltip
          text={sidebarIsClosed ? "Open Sidebar" : "Close Sidebar"}
          trigger="hover"
          className="bg-yellow text-darkgrey"
        >
          <button aria-describedby="sidebar toggle" onClick={toggleSidebar}>
            <PanelLeftClose />
          </button>
        </Tooltip>
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

      <MenuLinks sidebarIsClosed={sidebarIsClosed} />

      <div
        aria-label="Theme Switcher"
        className={clsx("mt-12", sidebarIsClosed ? "ml-4" : "ml-0")}
      >
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default SideMenu;
