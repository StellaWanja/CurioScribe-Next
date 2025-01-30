import React from "react";

function SolidButton({ children }: { children: string }) {
  return (
    <button className="solid-button font-bold rounded-full py-2 px-6">
      {children}
    </button>
  );
}

export default SolidButton;
