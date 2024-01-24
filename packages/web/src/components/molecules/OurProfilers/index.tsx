//import { getSuggestedQuery } from "@testing-library/react";
import { TitleBlock } from "../../atoms/TitleBlock";
import { Button } from "../../atoms/Button";
import { useState } from "react";
import { useHover } from "@uidotdev/usehooks";

export const OurProfilers = () => {
  const [isHovered, setHovered] = useState(false);
  const [ref, hovering] = useHover();

  return (
    <div className="relative z-1">
      <TitleBlock classNames="text-center text-white" name="Our profilers" />
      <div className="w-full h-auto flex gap-[75px] flex justify-center items-center pt-20 mb-[347px]">
        <div
          className="w-[375px] h-auto bg-[#171927] flex flex-col gap-10 p-4 rounded-[20px]"
          ref={ref}
        >
          <img src="/images/profile_image.png" alt="some photo" />

          <div className="flex flex-col items-center ">
            <h3 className="text-white text-center text-2xl font-semibold mb-5 ">
              Tobias Williams
            </h3>
            <span className="text-white text-xl font-base border-t border-white20 pt-3 ">
              Frontend developer
            </span>
          </div>
          <Button
            label="View profile"
            classNames={`px-10 py-4 text-white font-semibold text-[20px] self-center  ${
              hovering ? "scale-x-150 " : ""
            }  `}
          />
        </div>
        <div className="w-[375px] h-[705px] bg-[#7e22ce]">2</div>
        <div className="w-[375px] h-[705px] bg-[#7e22ce]">3</div>
        <div className="w-[375px] h-[705px] bg-[#7e22ce]">4</div>
      </div>
    </div>
  );
};
