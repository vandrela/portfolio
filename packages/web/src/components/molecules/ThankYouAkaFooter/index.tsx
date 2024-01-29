import { useEffect, useState } from "react";
import { Button } from "../../atoms/Button";
import { TitleBlock } from "../../atoms/TitleBlock";

function scrollTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const violetColor =
  "bg-[radial-gradient(ellipse,rgba(79,0,107,1)_50%,transparent_70%)]";
const greenColor =
  "bg-[radial-gradient(ellipse,rgba(0,107,43,1)_50%,transparent_70%)]";

export const ThankYou = () => {
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
  return (
    <div className="mx-auto flex flex-col my-32 relative z-0">
      <div
        className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[110%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[50%] blur-[175px] z-[-2]`}
      ></div>
      {/* Needs to be done below ↓↓↓↓↓↓↓ We need To use Violet Color instead of gradientColor (take a look at WelcomeBlock index.tsx)*/}
      {/* Add please Green color as well (for Illia) */}
      {/* <div
        className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[110%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[-10%] blur-[175px] z-[-2]`}
      ></div> */}
      <TitleBlock
        name="Thank you for watching"
        classNames="text-center mb-[clamp(40px,5vw,80px)]"
      />
      <Button
        onClick={() => scrollTopFunction()}
        classNames="px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)] m-auto text-white bg-white20"
        label="Go up"
      />
    </div>
  );
};
