import { useEffect, useRef, useState } from "react";
import { OurStepProps } from "../../../types/carouselTypes";
import { Circle } from "../Circle";

export const OurStep = ({
  index,
  title,
  isLast = false,
  onToggleOurStep,
  activeIndex,
}: OurStepProps) => {
  const [height, setHeight] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svgHeight = svgRef.current.getBoundingClientRect().height;
      setHeight(svgHeight);
    }
  }, []);

  return (
    <li className="flex gap-[clamp(20px,4vw,63px)] justify-end">
      <div>
        <span
          style={{
            height: `${height}px`,
            display: "flex",
            alignItems: "center",
          }}
          className="text-[clamp(16px,2vw,28px)] text-white font-semibold leading-normal  text-right flex-1"
        >
          {title}
        </span>
      </div>
      <div>
        <div className="group">
          <button onClick={() => onToggleOurStep(index)}>
            <Circle activeIndex={activeIndex} index={index} ref={svgRef} />
          </button>
        </div>
        {!isLast && (
          <div className="w-[2px] h-[clamp(40px,4vw,80px)] border-l-2 border-l-[white] border-dashed mx-auto my-[clamp(10px,2vw,20px)]"></div>
        )}
      </div>
    </li>
  );
};
