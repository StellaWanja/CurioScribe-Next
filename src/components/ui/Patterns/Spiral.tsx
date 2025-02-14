import React from "react";

function Spiral() {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="w-full h-full"
    >
      <path
        d="M0 328L15 326.3C30 324.7 60 321.3 90 313.5C120 305.7 150 293.3 180 323C210 352.7 240 424.3 270 439.7C300 455 330 414 360 361.3C390 308.7 420 244.3 450 273.3C480 302.3 510 424.7 540 455.8C570 487 600 427 630 408.3C660 389.7 690 412.3 720 425.8C750 439.3 780 443.7 810 405.3C840 367 870 286 885 245.5L900 205"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        stroke="#FF3399"
        strokeWidth="52"
      ></path>
    </svg>
  );
}

export default Spiral;
