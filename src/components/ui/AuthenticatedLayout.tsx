"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";

import useWindowsDimensions from "@/hooks/useWindowsDimensions";

import SideMenu from "@/components/SideMenu/SideMenu";

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [closedSidebar, setClosedSidebar] = useState(false);
  const { width } = useWindowsDimensions();

  useEffect(() => {
    if (width !== null && width < 768) {
      setClosedSidebar(true);
    }
  }, [width]);

  return (
    <main
      className={clsx(
        "font-sans w-full min-h-screen bg-darkblue grid transition-[grid-template-columns] duration-300 ease-in-out",
        closedSidebar ? "grid-cols-[80px_1fr]" : "grid-cols-[180px_1fr]"
      )}
    >
      {/* sidebar */}
      <section className="sticky top-0 bg-darkblue">
        <SideMenu
          sidebarIsClosed={closedSidebar}
          toggleSidebar={() => setClosedSidebar((prev) => !prev)}
        />
      </section>

      {/* dashboard */}
      <section className="bg-white dark:bg-dashboardblue text-darkgrey dark:text-white rounded-lg m-4">
        {children}
      </section>
    </main>
  );
}

export default AuthenticatedLayout;
