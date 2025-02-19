"use client";

import { useEffect, useState } from "react";

function useWindowsDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : null,
    height: typeof window !== "undefined" ? window.innerHeight : null,
  });

  // set windows dimensions
  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial dimensions after mounting
    handleResize();

    // add event listener
    window.addEventListener("resize", handleResize);

    // remove event listener to prevent memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowsDimensions;
