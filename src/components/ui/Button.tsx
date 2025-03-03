import clsx from "clsx";
import React from "react";

function Button({
  children,
  className,
  type
}: {
  children: string | React.ReactNode;
  className: string;
  type: "submit" | "button"
}) {
  return (
    <button type={type} className={clsx("font-bold rounded-full py-2 px-6", className)}>
      {children}
    </button>
  );
}

export default Button;
