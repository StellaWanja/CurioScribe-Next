import clsx from "clsx";
import React from "react";

function Button({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <button className={clsx("font-bold rounded-full py-2 px-6", className)}>
      {children}
    </button>
  );
}

export default Button;
