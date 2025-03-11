"use client";

import React from "react";
import { motion } from "motion/react";
import { useUser } from "@clerk/clerk-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { sidebarLinkVariants } from "@/utils/variants";

function ProfileSection({ sidebarIsClosed }: { sidebarIsClosed: boolean }) {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  if (!isLoaded) return;

  if (!isSignedIn || !user) {
    router.push("/sign-in");
  }

  return (
    <div className="flex gap-3 items-center text-white">
      <div
        className={clsx(
          "w-8 h-8 rounded-full bg-white",
          sidebarIsClosed ? "mx-auto" : "ml-2"
        )}
      />
      {!sidebarIsClosed && (
        <motion.span
          initial="closed"
          animate={sidebarIsClosed ? "closed" : "open"}
          variants={sidebarLinkVariants}
        >
          {user?.fullName}
        </motion.span>
      )}
    </div>
  );
}

export default ProfileSection;
