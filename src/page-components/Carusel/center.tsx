import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';

interface Card {
  title: string;
  description: string;
  icon?: string; // Додаємо шлях до іконки
}

interface CarouselProps {
  cards: Card[];
}

export default function CarouselCenter({ cards }: CarouselProps) {
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
              className="min-h-[350px] min-w-[300px] rounded-3xl bg-white shadow-lg"
            >
              <div className="flex flex-col items-start justify-start p-10">
                {card?.icon && (
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="mb-4 h-12 w-12"
                  />
                )}

                <p className="font-brand text-brand-black text-[20px]">
                  {card.title}
                </p>
                <p className="font-brand text-brand-black mt-10 text-[18px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-5">
        <Button
          className="h-10 w-10 rounded-full border-2 border-white"
          onClick={() => emblaApi?.scrollPrev()}
          isDisabled={!canScrollPrev}
        >
          <ChevronLeft className="text-white" />
        </Button>
        <Button
          className="h-10 w-10 rounded-full border-2 border-white"
          onClick={() => emblaApi?.scrollNext()}
          isDisabled={!canScrollNext}
        >
          <ChevronRight className="text-white" />
        </Button>
      </div>
    </div>
  );
}
