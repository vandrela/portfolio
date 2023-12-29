import { CarouselProps } from "../../../types/carouselTypes";
import { TitleBlock } from "../../atoms/TitleBlock";
import { Carousel } from "../Carousel";

export const OurValuesBlock = ({ slides }: CarouselProps) => {
  return (
    <>
      <TitleBlock
        name="Our values"
        classNames="text-center mb-[clamp(40px,5vw,80px)]"
      />
      <Carousel slides={slides} />
    </>
  );
};
