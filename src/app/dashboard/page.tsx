import React from "react";

import SideMenu from "@/components/SideMenu/SideMenu";

function Dashboard() {
  return (
    <main className="w-full min-h-screen grid grid-cols-4 lg:grid-cols-6 bg-darkblue ">
      {/* sidebar */}
      <section className="sticky top-0 bg-darkblue col-span-1">
        <SideMenu />
      </section>

      {/* dashboard */}
      <section className="col-span-3 lg:col-span-5 bg-white dark:bg-dashboardblue text-darkgrey dark:text-white rounded-lg m-4">
        Dashboard
      </section>
    </main>
  );
}

export default Dashboard;
