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
import { motion } from "motion/react";

import { sidebarLinkVariants } from "@/utils/variants";
import ProfileSection from "./ProfileSection";

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
        "sidebar-links",
        sidebarIsClosed && "flex justify-center"
      )}
    >
      {icon}
      {!sidebarIsClosed && (
        <motion.span
          initial="closed"
          animate={sidebarIsClosed ? "closed" : "open"}
          variants={sidebarLinkVariants}
          className="overflow-hidden whitespace-nowrap"
        >
          {label}
        </motion.span>
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

      {/* divider */}
      <div className="border-t-2 border-white my-8 opacity-50" />

      {/* Profile Section */}
      <div>
        <ProfileSection sidebarIsClosed={sidebarIsClosed} />

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
