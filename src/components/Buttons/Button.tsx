import React from "react";

function Button({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <button className={`${className} font-bold rounded-full py-2 px-6`}>
      {children}
    </button>
  );
}

export default Button;
