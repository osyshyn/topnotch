import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';

interface Card {
  title: string;
  description: string;
}

interface CarouselProps {
  cards: Card[];
}

export default function Carousel({ cards }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col">
      <div className="max-h-screen max-w-screen overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10">
          {cards.map((card) => (
            <div className="min-h-[350px] min-w-[300px] rounded-3xl bg-[#4F78D6]">
              <div className="flex flex-col items-start justify-start p-10">
                <p className="font-brand text-[20px] text-white">
                  {card.title}
                </p>
                <p className="font-brand mt-10 text-[18px] text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        <Button
          className="h-10 w-10 rounded-full border-2 border-black"
          onClick={() => emblaApi?.scrollPrev()}
          isDisabled={!canScrollPrev}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="h-10 w-10 rounded-full border-2 border-black"
          onClick={() => emblaApi?.scrollNext()}
          isDisabled={!canScrollNext}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
