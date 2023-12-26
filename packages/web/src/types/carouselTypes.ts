export interface Slide {
  title: string;
  text: string;
}

export interface CarouselProps {
  slides: Slide[];
  circle?: boolean;
}

export interface OurStepProps {
  index: number;
  title: string;
  isLast: boolean;
  onToggleOurStep: (index: number) => void;
  activeIndex?: number;
}
