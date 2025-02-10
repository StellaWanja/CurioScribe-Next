"use client";
import React from "react";
import { useTheme } from "next-themes";

function Blob3() {
  const { theme } = useTheme();

  const colour = theme === "dark" ? "#FF3399" : "#262642";

  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g transform="translate(483.0592797381005 287.1338054593227)">
        <path
          d="M110.2 -174.8C145.7 -170.3 179.4 -146.7 185.7 -114.3C192 -82 171 -41 157.2 -8C143.3 25 136.6 50 127.1 76.8C117.6 103.7 105.3 132.4 83.7 152.7C62 173.1 31 185 -9.5 201.5C-50 217.9 -100 238.9 -131 224C-162.1 209 -174.1 158.3 -193.3 115C-212.5 71.7 -238.7 35.8 -248.5 -5.7C-258.4 -47.2 -251.7 -94.3 -229.9 -133C-208.1 -171.7 -171 -201.9 -130.2 -203.3C-89.3 -204.7 -44.7 -177.4 -3.7 -171C37.3 -164.7 74.7 -179.3 110.2 -174.8"
          fill={colour}
        ></path>
      </g>
    </svg>
  );
}

export default Blob3;
