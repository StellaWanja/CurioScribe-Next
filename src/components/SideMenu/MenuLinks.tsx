import React from "react";
import {
  Blocks,
  CircleHelp,
  File,
  Folders,
  House,
  LogOut,
  Settings,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const sidebarLinks = [
  { id: 1, href: "", icon: <House />, label: "Home" },
  { id: 2, href: "", icon: <Blocks />, label: "Create New" },
  { id: 3, href: "", icon: <File />, label: "Templates" },
  { id: 4, href: "", icon: <Folders />, label: "Projects" },
  { id: 5, href: "", icon: <Settings />, label: "Settings" },
  { id: 6, href: "", icon: <CircleHelp />, label: "FAQ" },
  { id: 7, href: "", icon: <LogOut />, label: "Log Out" },
];

type SidebarLinkProps = {
  href: string;
  sidebarIsClosed: boolean;
  icon: React.JSX.Element;
  label: string;
};

export function SidebarLink({
  href,
  sidebarIsClosed,
  icon,
  label,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "sidebar-links transition-all duration-300 ease-in-out",
        sidebarIsClosed && "flex justify-center"
      )}
    >
      {icon}
      {!sidebarIsClosed && (
        <span
          className={clsx(
            "inline-block overflow-hidden transition-[max-width,opacity] duration-500 ease-in-out",
            sidebarIsClosed ? "max-w-0 opacity-0" : "max-w-[150px] opacity-100"
          )}
        >
          {label}
        </span>
      )}
    </Link>
  );
}

function MenuLinks({ sidebarIsClosed }: { sidebarIsClosed: boolean }) {
  return (
    <div className="flex flex-col gap-2 mt-8 text-lightgrey text-sm">
      {/* first 3 links */}
      {sidebarLinks.slice(0, 3).map((sidebarLink) => (
        <SidebarLink
          key={sidebarLink.id}
          sidebarIsClosed={sidebarIsClosed}
          {...sidebarLink}
        />
      ))}

      {/* line */}
      <div className="border-t-2 border-white my-8 opacity-50" />

      {/* Profile Section */}
      <div>
        <div className="flex gap-3 items-center text-white">
          <div
            className={clsx(
              "w-8 h-8 rounded-full bg-white",
              sidebarIsClosed ? "ml-4" : "ml-0"
            )}
          />
          {!sidebarIsClosed && <span>Happy Llama</span>}
        </div>

        <div
          className={clsx(
            "flex flex-col gap-2 mt-4",
            sidebarIsClosed ? "ml-0" : "ml-4"
          )}
        >
          {sidebarLinks.slice(3, 5).map((sidebarLink) => (
            <SidebarLink
              key={sidebarLink.id}
              sidebarIsClosed={sidebarIsClosed}
              {...sidebarLink}
            />
          ))}
        </div>
      </div>

      {/* last 2 links */}
      {sidebarLinks.slice(5, 7).map((sidebarLink) => (
        <SidebarLink
          key={sidebarLink.id}
          sidebarIsClosed={sidebarIsClosed}
          {...sidebarLink}
        />
      ))}
    </div>
  );
}

export default MenuLinks;
