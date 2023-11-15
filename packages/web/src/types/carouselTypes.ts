export interface Slide {
  title: string;
  text: string;
}

export interface CarouselProps {
  slides: Slide[];
}