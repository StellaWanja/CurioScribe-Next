import React from "react";

function TextButton({ children }: { children: string }) {
  return (
    <button className="text-button font-bold rounded-full py-2 px-6">
      {children}
    </button>
  );
}

export default TextButton;
