"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import DashboardCard from "./DashboardCard";
import Spinner from "../../components/ui/Spinner";

// get the current time to display greeting
const currentHour = new Date().getHours();
const time =
  (currentHour < 12 && "Morning") ||
  (currentHour < 18 && "Afternooon") ||
  "Evening";

function Dashboard() {
  // check if user is signed in
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  // check if user is loaded
  if (!isLoaded) {
    return <Spinner />;
  }

  // check if user is signed in
  if (!isSignedIn || !user) {
    router.push("/sign-in");
    return;
  }

  return (
    <div className="py-8 px-5">
      <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center ">
        <h1 className="font-medium text-lg">
          👋 Good {time}, {user?.firstName}!
        </h1>

        {/* search bar */}
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search your project"
            className="w-full pl-10 pr-4 py-2 input rounded-lg"
          />
        </div>
      </div>

      <div>
        <h1 className="mt-4 mb-10 text-2xl font-medium">
          What will you create today?
        </h1>

        <DashboardCard />
      </div>

      <div className="mt-8 ">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">Recent Content</h2>
          <Link href="" className="hover:underline">
            See All
          </Link>
        </div>

        <div className="mt-4 w-full bg-dashboardblue dark:bg-darkblue rounded-md p-4">
          <h2 className="text-white">Title text</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
