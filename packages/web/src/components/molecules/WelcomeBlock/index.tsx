import { ArrowIcon } from "../../atoms/ArrowIcon";
import { Button } from "../../atoms/Button";
import { useEmployeeAnimation } from "../../../hooks/useEmployeeAnimation";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useRef, forwardRef, useCallback } from "react";

import { gsap } from "gsap";
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

type Image = {
  id: number;
  path: string;
  position: { top: string; left: string };
  speed: number;
  scale: number;
  opacity: number;
};

interface WelcomeBlockProps {
  images: Image[];
}

export const WelcomeBlock = ({ images }: WelcomeBlockProps) => {
  const {
    gradientColor,
    isEmployee,
    shouldAnimate,
    textColor,
    setShouldAnimate,
  } = useEmployeeAnimation();
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const hero = heroRef.current;
  const gallery = galleryRef.current;
  const imageWrapperRefsArray = imageWrapperRefs.current;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (hero && gallery) {
        imageWrapperRefsArray.forEach((image, index) => {
          const x = (e.clientX - window.innerWidth / 2) * images[index].speed;
          const y = (e.clientY - window.innerHeight / 1) * images[index].speed;

          gsap.to(image, { x, y, duration: 3, smoothOrigin: true });
        });
      }
    },
    [hero, gallery, imageWrapperRefsArray, images]
  );

  useEffect(() => {
    if (hero) hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (hero) hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <section
      className={`${
        !isSmallScreen ? "h-[167vh]" : "h-screen"
      } text-[#fefefe] overflow-x-clip relative`}
    >
      <div
        className={`transition-all absolute -translate-x-2/4 -translate-y-1/4 w-[100%] h-[100%] ${gradientColor} rounded-[50%] left-2/4 top-[-10%] blur-[175px]`}
      ></div>
      <header
        ref={heroRef}
        className={`${
          !isSmallScreen
            ? "pl-[clamp(200px,30vw,700px)]"
            : "pl-[clamp(10px,6vw,200px)]"
        } w-full h-full flex flex-col justify-center gap-10 relative z-[2]`}
      >
        <h1 className="flex flex-col font-bold text-[clamp(35px,9vw,120px)] self-start">
          <span className="self-start">Find your</span>
          <span className="text-left">
            best
            <span
              className={`${textColor} ${
                shouldAnimate ? "animate-text-focus-in" : ""
              }`}
              onAnimationEnd={() => setShouldAnimate(false)}
            >
              {isEmployee ? " employee" : " team"}
            </span>
          </span>
        </h1>
        <Button
          classNames="px-[clamp(40px,4vw,60px)] py-[clamp(12px,2vw,18px)] text-[clamp(18px,2vw,30px)] bg-white20 duration-[ease] self-start hover:scale-105"
          label="Let's find it"
          onClick={() => {}}
        />
      </header>
      <ArrowIcon className="absolute bottom-20  sm:bottom-7 text-center animate-bounce w-full  sm:h-6" />
      <div ref={galleryRef} className="w-full h-full absolute z-0 left-0 top-0">
        {images.map((item, index) => {
          return (
            <Image
              ref={(ref) => (imageWrapperRefs.current[index] = ref)}
              key={item.id}
              index={index}
              path={item.path}
              position={item.position}
              scale={item.scale}
              opacity={item.opacity}
            />
          );
        })}
      </div>
    </section>
  );
};

//This is only required for this component (WelcomeBlock)
interface ImageProps extends Omit<Image, "id" | "speed"> {
  index: number;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
  ({ path, position, scale, index, opacity }, ref) => {
    const responsiveValue = useResponsiveValue();
    const scaleZoom = `${scale * responsiveValue}%`;
    return (
      <div
        ref={ref}
        className="absolute xs:w-[130px] xs1:w-[140px] sm:w-[150px]"
        style={{
          top: position.top,
          left: position.left,
          scale: scaleZoom,
          opacity,
        }}
      >
        <img
          src={path}
          alt={`Background image - ${index + 1}`}
          className="w-full h-full block object-cover"
        />
      </div>
    );
  }
);
