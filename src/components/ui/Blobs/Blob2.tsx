"use client";
import React from "react";
import { useTheme } from "next-themes";

function Blob2() {
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
      <g transform="translate(405.93929096498573 311.84798076200184)">
        <path
          d="M121.7 -137.5C168.8 -105.5 225.7 -77.7 250.4 -30.4C275 16.8 267.4 83.4 230.4 119.4C193.4 155.4 127 160.9 71.4 169.6C15.8 178.2 -28.8 190.1 -60.6 174.9C-92.3 159.7 -111.1 117.3 -132.8 77.7C-154.6 38 -179.2 1 -176.3 -33.8C-173.4 -68.6 -142.9 -101.4 -109 -135.7C-75 -170 -37.5 -206 -0.1 -205.9C37.3 -205.8 74.6 -169.5 121.7 -137.5"
          fill={colour}
        ></path>
      </g>
    </svg>
  );
}

export default Blob2;
