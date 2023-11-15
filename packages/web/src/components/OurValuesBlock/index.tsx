import { TitleBlock } from "../TitleBlock";
import { Carousel } from "../Carousel";
import { CarouselProps } from "../../types/carouselTypes";

export const OurValuesBlock = ({ slides }: CarouselProps) => {
  return (
    <>
      <TitleBlock name="Our values" classNames="text-center" />
      <Carousel slides={slides} />
    </>
  );
};
