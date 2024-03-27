import { useState, useEffect } from "react";

export const useResponsiveValue = (
  minWidth = 320,
  maxWidth = 2500,
  minValue = 40,
  maxValue = 160
): number => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value =
    ((windowWidth - minWidth) * (maxValue - minValue)) / (maxWidth - minWidth) +
    minValue;

  return Math.floor(Math.max(minValue, Math.min(maxValue, value)));
};
