import { forwardRef } from "react";
import { OurStepProps } from "../../../types/carouselTypes";

interface CircleProps extends Pick<OurStepProps, "index" | "activeIndex"> {
  classNames?: string;
}

export const Circle = forwardRef<SVGSVGElement, CircleProps>(
  ({ activeIndex, index, classNames }, ref) => {
    return (
      <svg
        ref={ref}
        aria-label="buttontip"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        className={`${classNames} w-[clamp(40px,7vw,80px)] h-[clamp(40px,7vw,80px)] cursor-pointer transition-all duration-700 ease-in-out group-hover:fill-white20 group-hover:stroke-[2px] ${
          activeIndex === index - 1 ? "fill-white20" : ""
        }`}
      >
        <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.05" />
        <circle cx="40" cy="40" r="39.5" stroke="white" strokeOpacity="0.2" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="40"
          fill="white"
        >
          {index}
        </text>
      </svg>
    );
  }
);
