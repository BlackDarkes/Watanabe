"use client"

import { useEffect, useState } from "react"

export const useWindowSize = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [height, setHeight] = useState(() => window.innerWidth);

  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    }
  }, [width, height]);

  return { width, height };
}