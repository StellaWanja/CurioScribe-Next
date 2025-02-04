"use client";
import React from "react";
import { useTheme } from "next-themes";

function BottomBlob() {
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
      <g transform="translate(868.1114626668515 557.9500602506723)">
        <path
          d="M116.1 -198.1C161.8 -174.7 218.2 -166.6 253.4 -136.1C288.7 -105.7 302.8 -52.8 300.2 -1.5C297.6 49.8 278.3 99.7 245.3 134C212.3 168.4 165.6 187.2 122.5 224.8C79.3 262.4 39.7 318.7 -9.7 335.6C-59.2 352.5 -118.3 330 -145.9 283.4C-173.5 236.8 -169.4 166.1 -183.5 114.9C-197.6 63.7 -229.8 31.8 -235.7 -3.4C-241.6 -38.7 -221.3 -77.3 -193.2 -104.4C-165.2 -131.5 -129.5 -146.9 -96 -177.4C-62.5 -207.9 -31.3 -253.5 2 -256.9C35.2 -260.2 70.3 -221.5 116.1 -198.1"
          fill={colour}
        ></path>
      </g>
    </svg>
  );
}

export default BottomBlob;
