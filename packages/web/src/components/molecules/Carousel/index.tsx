import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "../../atoms/Chevron/Chevron";
import { CarouselProps } from "../../../types/carouselTypes";

const slideWidth = 520;
const slideMargin = 60;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};

export const Carousel = ({ slides }: CarouselProps) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLUListElement | null>(null);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <>
      <div className="h-[auto] overflow-hidden bg-transparent relative">
        <ul
          ref={sliderRef}
          onScroll={(e) => setSliderPosition(e.currentTarget.scrollLeft)}
          className="flex h-[auto] pb-[49px] mb-[-48px] overflow-x-auto snap-x snap-mandatory"
        >
          {slides.map(({ title, text }, i) => (
            <li
              className="shrink-0 mr-[clamp(40px,6vw,60px)] last:mr-0 snap-always flex"
              key={i}
            >
              <div className="slide-center relative bg-transparentWhite border border-solid border-white20 h-auto w-[clamp(276px,50vw,520px)] rounded-[18px] p-[clamp(28px,5vw,85px)]">
                <h2 className="text-white text-[clamp(20px,4vw,40px)] not-italic font-normal leading-[normal] mb-[clamp(20px,5vw,40px)] text-left">
                  {title}
                </h2>
                <p className="text-transparentWhite50 text-[clamp(16px,3vw,28px)] font-normal leading-[normal] text-left  max-w-[350px]">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {currentSlide !== 0 && (
          <button
            onClick={() => goToPreviousSlide()}
            className="w-14 h-14 border-2 border-transparent bg-transparentBlack30 rounded-full flex items-center justify-center absolute left-10 -translate-y-2/4 top-[50%] hover:scale-110 transition-all hover:bg-transparentBlack41 md:hidden"
          >
            <Chevron className="w-5 h-5 text-white" />
          </button>
        )}
        {(!scrolledToEndOfSlider || currentSlide === slides.length) && (
          <button
            disabled={scrolledToEndOfSlider || currentSlide === slides.length}
            onClick={() => goToNextSlide()}
            className="w-14 h-14 border-2 border-transparent bg-transparentBlack30 rounded-full flex items-center justify-center absolute right-10 -translate-y-2/4 top-[50%] hover:scale-110 transition-all hover:bg-transparentBlack41 md:hidden"
          >
            <Chevron className="rotate-180 w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </>
  );
};
