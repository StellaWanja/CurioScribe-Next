import React from "react";
import { CircleUserRound, Trash2 } from "lucide-react";
import Link from "next/link";

function Settings() {
  return (
    <div className="py-8 px-5">
      <h1 className="font-medium text-lg">Settings</h1>
      <div className="mt-8">
        <h2>Account</h2>
        <div className="flex flex-col gap-8 mt-4">
          <div className="ml-4 settings-link cursor-pointer">
            {/* use dialogs */}
            <CircleUserRound />
            <h3>Update profile</h3>
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
