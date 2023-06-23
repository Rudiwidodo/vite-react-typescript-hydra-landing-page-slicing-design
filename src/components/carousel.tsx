import { CarouselProps } from '../interface/carousel-interface';

export default function Carousel({ children }: CarouselProps) {
  return (
    <>
      <div className="relative overflow-hidden">{children}</div>
    </>
  );
}
