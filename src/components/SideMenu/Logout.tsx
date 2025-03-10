"use client";

import React, { useState } from "react";
import { LogOut, Loader } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

import Dialog from "@/components/ui/Dialog";
import { SidebarLink } from "./MenuLinks";

function Logout({ sidebarIsClosed }: { sidebarIsClosed: boolean }) {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signOut } = useClerk();

  function handleSignOut() {
    setIsLoading(true);
    signOut({ redirectUrl: "/sign-in" });
    setIsLoading(false);
  }

  return (
    <Dialog
      trigger={
        <SidebarLink
          sidebarIsClosed={sidebarIsClosed}
          icon={<LogOut />}
          label="Log Out"
          href=""
        />
      }
      title="Confirm Log Out"
      description="Are you sure you want to log out?"
      className="bg-white dark:bg-dashboardblue absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-12 px-8 rounded-lg"
      dialogIsOpen={isLogoutDialogOpen}
      setDialogIsOpen={setIsLogoutDialogOpen}
    >
      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className="solid-button flex justify-center items-center gap-2 font-bold py-2 px-6  w-full rounded-md"
          onClick={handleSignOut}
        >
          Logout {isLoading && <Loader className="animate-spin" />}
        </button>
      </div>
    </Dialog>
  );
}

export default Logout;
