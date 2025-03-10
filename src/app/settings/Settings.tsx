"use client";

import React, { useState } from "react";
import { CircleUserRound, Trash2 } from "lucide-react";
import Link from "next/link";

import Dialog from "@/components/ui/Dialog";
import UpdateForm from "./UpdateForm";

function Settings() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div className="py-8 px-5">
      <h1 className="font-medium text-lg">Settings</h1>
      <div className="mt-8">
        <h2>Account</h2>
        <div className="flex flex-col gap-8 mt-4">
          <div className="ml-4 settings-link cursor-pointer">
            <Dialog
              trigger={
                <button
                  aria-describedby="Update profile dialog"
                  className="flex items-center gap-2"
                >
                  <CircleUserRound />
                  <h3>Update profile</h3>
                </button>
              }
              title="Update Profile"
              description="Modify your profile details below."
              className="bg-white dark:bg-dashboardblue absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-12 px-8 rounded-lg"
              dialogIsOpen={dialogIsOpen}
              setDialogIsOpen={setDialogIsOpen}
            >
              <UpdateForm
                setDialogIsOpen={setDialogIsOpen}
              />
            </Dialog>
          </div>
          <Link href="/settings/update-profile" className="ml-4 settings-link">
            <Trash2 />
            <h3>Delete Account</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Settings;
