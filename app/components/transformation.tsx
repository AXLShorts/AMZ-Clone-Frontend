"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TransformationSection } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";
import { BeforeAfterSlider } from "@/components/before-after-slider";

interface TransformationProps {
  data: TransformationSection;
}

const Transformation = ({ data }: TransformationProps) => {
  const {
    slides,
  } = data;

  return (
    <section
      className="w-[96%] mx-auto h-fit bg-brand-dark rounded-[20px] text-white py-16 lg:py-24"
      aria-labelledby="transformation-heading"
    >
      <style>{`
        .transformation-carousel .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.5;
        }
        
        .transformation-carousel .swiper-pagination-bullet-active {
          background-color: white;
          opacity: 1;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="transformation-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight font-display mb-6! uppercase font-semibold"
          >
            listings that turn browsers into buyers —{" "}
            <span className="text-brand-accent">On Autopilot</span>
          </h2>
        </div>

        {/* Side-by-Side Comparison Carousel */}
        <div className="mb-8 relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".transformation-carousel-next",
              prevEl: ".transformation-carousel-prev",
            }}
            className="transformation-carousel rounded-xl"
            breakpoints={{
              768: {
                spaceBetween: 24,
              },
            }}
          >
            {slides.map((slide) => {
              const beforeImageUrl = urlFor(slide.beforeImage).url();
              const afterImageUrl = urlFor(slide.afterImage).url();
              
              return (
                <SwiperSlide key={slide._key}>
                  <div className="mb-12 space-y-6">
                    {/* Before-After Slider */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden swiper-no-swiping">
                      <BeforeAfterSlider
                        beforeImage={beforeImageUrl}
                        afterImage={afterImageUrl}
                        beforeAlt={`Before - ${slide.title}`}
                        afterAlt={`After - ${slide.title}`}
                        className="w-full h-full"
                        imgClassName="object-contain!"
                      />
                    </div>

                    {/* Metric Overlay */}
                    {slide.showStats && slide.statType && slide.beforeValue && slide.afterValue && (
                      <div className="flex justify-center">
                        <div className="bg-black/80 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base text-center">
                          <span className="block sm:inline">Before: {slide.beforeValue} {slide.statType}</span>
                          <span className="hidden sm:inline mx-2!">→</span>
                          <span className="block sm:inline">After: {slide.afterValue} {slide.statType}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="transformation-carousel-prev absolute left-2 md:left-4 top-3/7 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-brand-dark" />
          </button>
          <button
            className="transformation-carousel-next absolute right-2 md:right-4 top-3/7 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-brand-dark" />
          </button>
        </div>


      </div>
    </section>
  );
};

export default Transformation;
