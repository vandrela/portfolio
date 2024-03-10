import { useState } from "react";
import { TitleBlock } from "../../atoms/TitleBlock";
import { OurStep } from "../../atoms/OurStep";
import { MTransparentWrapper } from "../../atoms/TransparentWrapper/index";
import { useMediaQuery } from "@react-hook/media-query";
import { Carousel } from "../Carousel";

const ourSteps = [
  {
    title: "Choose a profiler",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    title: "Investigate his portfolio page",
    text: "Exploring a profiler's portfolio page provides a glimpse into their previous work. Analyze their projects, creativity",
  },
  {
    title: "Contact profiler",
    text: "Contacting a profiler allows you to establish direct communication. Ask relevant questions, discuss your project details, and gauge ",
  },
  {
    title: "Hire",
    text: "Hiring a profiler should involve careful consideration. Review their portfolio, interview them, negotiate terms",
  },
];

export const HiringProcessBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 710px)");

  const handleOurStepClick = (index: number) => {
    setActiveIndex(index);
  };

  const gradientRotationDegree = !isSmallScreen
    ? "bg-[linear-gradient(180deg,#00360C_0%,#280036_100%)]"
    : "bg-[linear-gradient(0deg,#00360C_0%,#280036_100%)]";

  return (
    <section className="mb-[clamp(80px,10vw,253px)] relative z-0"  id="Hiring process">
      <div
        className={`transition-all absolute w-[100%] h-[100%]  blur-[175px] z-[-1] opacity-50 ${gradientRotationDegree}`}
      />
      <TitleBlock
        name="Hiring Process"
        classNames="text-center mb-[clamp(20px,4vw,31px)] z-1"
      />
      <p className="text-white text-center text-[clamp(20px,4vw,40px)] not-italic font-medium leading-[normal] max-w-[1020px] mx-auto xs:text-left px-[clamp(16px,6vw,30px)] mb-[clamp(40px,6vw,70px)] ">
        Take a look at our steps, and a few tips to make your experience great
      </p>
      <div
        className={`${
          !isSmallScreen ? "max-w-[90%]" : ""
        } mx-auto flex gap-[clamp(20px,6vw,131px)] items-center`}
      >
        {isSmallScreen ? (
          <Carousel slides={ourSteps} circle />
        ) : (
          <>
            <ul className="w-1/2">
              {ourSteps.map((ourStep, index) => (
                <OurStep
                  activeIndex={activeIndex}
                  index={index + 1}
                  key={index}
                  title={ourStep.title}
                  isLast={index === ourSteps.length - 1}
                  onToggleOurStep={() => handleOurStepClick(index)}
                />
              ))}
            </ul>
            <MTransparentWrapper
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 8,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              additionalClasses="flex-1 max-w-[593px]"
            >
              {ourSteps[activeIndex] && (
                <>
                  <h2 className="text-white text-[clamp(16px,3vw,40px)] not-italic font-bold leading-[normal] mb-[clamp(20px,5vw,40px)] text-left">
                    {ourSteps[activeIndex].title}
                  </h2>
                  <p className="text-transparentWhite50 text-[clamp(12px,2vw,28px)] font-normal leading-[1.4] text-left">
                    {ourSteps[activeIndex].text}
                  </p>
                </>
              )}
            </MTransparentWrapper>
          </>
        )}
      </div>
    </section>
  );
};
