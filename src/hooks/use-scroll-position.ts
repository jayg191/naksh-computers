"use client";

import { useEffect, useState } from "react";

type ScrollPosition = {
  x: number;
  y: number;
  direction: "up" | "down" | "none";
};

/**
 * Tracks scroll position and direction for sticky headers, scroll reveals, etc.
 */
export function useScrollPosition(): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: "none",
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setPosition({
        x: window.scrollX,
        y: currentY,
        direction:
          currentY > lastY ? "down" : currentY < lastY ? "up" : "none",
      });
      lastY = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return position;
}
