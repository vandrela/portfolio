import { Button } from "../../atoms/Button";
import { TitleBlock } from "../../atoms/TitleBlock";
import { useEmployeeAnimation } from "../../../hooks/useEmployeeAnimation";

function scrollTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export const ThankYou = () => {
  const { gradientColor } = useEmployeeAnimation();
  return (
    <div className="mx-auto flex flex-col mt-32 relative z-0">
      <div
        className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[100%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[50%] blur-[175px] z-[-2]`}
      ></div>
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
