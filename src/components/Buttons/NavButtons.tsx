import React from "react";

function NavButtons({ children }: { children: string }) {
  return (
    <button className="nav-buttons font-bold rounded-full py-2 px-6">
      {children}
    </button>
  );
}

export default NavButtons;
