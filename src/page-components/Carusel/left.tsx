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
  cardColor?: string; // background color for cards
  arrowColor?: string; // text/indicator color for arrows
  textColor?: string; // text color for card text
}

export default function Carousel({
  cards,
  cardColor = 'bg-[#4F78D6]',
  arrowColor = 'text-black',
  textColor = 'text-white',
}: CarouselProps) {
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
          {cards.map((card, index) => (
            <div
              key={index}
              className={`min-h-[350px] min-w-[300px] rounded-3xl ${cardColor}`}
            >
              <div className="flex flex-col items-start justify-start p-10">
                <p className={`font-brand text-[20px] ${textColor}`}>
                  {card.title}
                </p>
                <p className={`font-brand mt-10 text-[18px] ${textColor}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        <Button
          className={`h-10 w-10 rounded-full border-2 ${arrowColor}`}
          onClick={() => emblaApi?.scrollPrev()}
          isDisabled={!canScrollPrev}
        >
          <ChevronLeft className={arrowColor} />
        </Button>
        <Button
          className={`h-10 w-10 rounded-full border-2 ${arrowColor}`}
          onClick={() => emblaApi?.scrollNext()}
          isDisabled={!canScrollNext}
        >
          <ChevronRight className={arrowColor} />
        </Button>
      </div>
    </div>
  );
}
