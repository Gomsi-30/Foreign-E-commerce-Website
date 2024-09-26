'use client';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);

    const interval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, onSelect, scrollNext]);

  const slides = [
    {
      title: '',
      subtitle: '',
      button: '',
      image: '/frame.png',
    },
    {
      title: '',
      subtitle: '',
      button: '',
      image: '/frame.png',
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative w-full mt-[-40px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-full h-[240px] sm:h-[400px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-center object-fit sm:object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-lg">{slide.subtitle}</p>
                {/* Uncomment this to add a button */}
                {/* <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded">
                  {slide.button}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>

      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
