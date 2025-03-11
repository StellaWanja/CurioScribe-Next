"use client";

import React, { useState } from "react";
import { CircleUserRound, Trash2 } from "lucide-react";

import Dialog from "@/components/ui/Dialog";
import Tooltip from "@/components/ui/Tooltip";
import UpdateForm from "./UpdateForm";
import DeleteAccount from "./DeleteAccount";

function Settings() {
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [updateTooltipVisible, setUpdateTooltipVisible] = useState(false);

  return (
    <div className="py-8 px-5">
      <h1 className="font-medium text-lg">Settings</h1>

      <div className="w-full absolute top-10 left-1/2 -translate-x-1/2">
        <Tooltip
          text="Profile Updated successfully"
          visible={updateTooltipVisible}
          trigger="manual"
          className="bg-green-700 text-white"
        />
      </div>

      <div className="mt-8">
        <h2>Account</h2>
        <div className="flex flex-col gap-8 mt-4">
          {/* update profile */}
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
              dialogIsOpen={updateDialogOpen}
              setDialogIsOpen={setUpdateDialogOpen}
            >
              <UpdateForm
                setDialogIsOpen={setUpdateDialogOpen}
                setUpdateTooltipVisible={setUpdateTooltipVisible}
              />
            </Dialog>
          </div>

          {/* delete account */}
          <div className="ml-4 settings-link cursor-pointer">
            <Dialog
              trigger={
                <button
                  aria-describedby="Delete account dialog"
                  className="flex items-center gap-2"
                >
                  <Trash2 />
                  <h3>Delete Account</h3>
                </button>
              }
              title="Delete Account"
              description="Are you sure you want to delete your account?"
              className="bg-white dark:bg-dashboardblue absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 py-12 px-8 rounded-lg"
              dialogIsOpen={deleteDialogOpen}
              setDialogIsOpen={setDeleteDialogOpen}
            >
              <DeleteAccount />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
