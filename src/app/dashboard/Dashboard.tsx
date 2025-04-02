"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";

import DashboardCard from "./DashboardCard";
import DashboardList from "./DashboardList";
import Spinner from "@/components/ui/Spinner";
import Searchbar from "@/components/ui/Searchbar";

// get the current time to display greeting
const currentHour = new Date().getHours();
const time =
  (currentHour < 12 && "Morning") ||
  (currentHour < 18 && "Afternooon") ||
  "Evening";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  // check if user is signed in
  const { isSignedIn, user, isLoaded } = useUser();

  // check if user is loaded
  if (!isLoaded) return <Spinner />;

  // check if user is signed in
  if (!isSignedIn || !user) return;

  return (
    <div className="py-8 px-5">
      <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center ">
        <h1 className="font-medium text-lg">
          👋 Good {time}, {user?.firstName}!
        </h1>

        {/* search bar */}
        <Searchbar setSearchQuery={setSearchQuery} />
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
        </div>

        <DashboardList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default Dashboard;
