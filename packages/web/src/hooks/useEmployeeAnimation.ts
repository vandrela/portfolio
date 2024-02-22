import { useState, useEffect } from "react";

const violetColor =
  "bg-[radial-gradient(ellipse,rgba(79,0,107,1)_50%,transparent_70%)]";
const greenColor =
  "bg-[radial-gradient(ellipse,rgba(0,107,43,1)_50%,transparent_70%)]";

export const useEmployeeAnimation = () => {
  const [isEmployee, setIsEmployee] = useState(true);
  const [textColor, setTextColor] = useState("text-brightViolet");
  const [gradientColor, setGradientColor] = useState(violetColor);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEmployee((prevIsEmployee) => !prevIsEmployee);
      setTextColor((prevColor) =>
        prevColor === "text-brightViolet"
          ? "text-brightGreen"
          : "text-brightViolet"
      );
      setGradientColor((prevColor) =>
        prevColor === violetColor ? greenColor : violetColor
      );
      setShouldAnimate(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    isEmployee,
    textColor,
    gradientColor,
    shouldAnimate,
    setShouldAnimate,
  };
};

