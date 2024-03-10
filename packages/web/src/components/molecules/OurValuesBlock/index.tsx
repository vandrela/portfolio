import { CarouselProps } from "../../../types/carouselTypes";
import { TitleBlock } from "../../atoms/TitleBlock";
import { Carousel } from "../Carousel";
import { useMediaQuery } from "@react-hook/media-query";

export const OurValuesBlock = ({ slides }: CarouselProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 710px)");
  const gradientRotationDegree = !isSmallScreen
    ? "bg-[linear-gradient(180deg,#00360C_0%,#280036_100%)]"
    : "bg-[linear-gradient(0deg,#00360C_0%,#280036_100%)]";

  return (
    <section className="relative z-0" id="Our values">
      <TitleBlock
        name="Our values"
        classNames="text-center mb-[clamp(40px,5vw,80px)]"
      />
      <div
        className={`transition-all -top-[-40] absolute w-[100%] h-[150%]  blur-[175px] z-[-1] opacity-50 ${gradientRotationDegree}`}
      />
      <Carousel slides={slides} />
    </section>
  );
};
