"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Check } from "lucide-react";
import { TransformationSection } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

const features = [
  "Performance-driven listing redesigns",
  "Keyword-anchored copy + visuals",
  "A+ Content built for ranking",
  "Storefront architecture that sells",
  "Continuous improvement reports",
];

interface TransformationProps {
  data: TransformationSection;
}

const Transformation = ({ data }: TransformationProps) => {
  const {
    slides,
  } = data;

  return (
    <section
      className="w-full pb-16 lg:pb-24"
      aria-labelledby="transformation-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="transformation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display mb-6! uppercase font-medium"
          >
            Imagine listings that turn browsers into buyers —{" "}
            <span className="text-brand-accent">automatically.</span>
          </h2>
        </div>

        {/* Carousel with Before/After Sliders */}
        <div className="mb-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop
            pagination={{ clickable: true }}
            className="transformation-carousel rounded-xl"
          >
            {slides.map((slide) => {
              const beforeImageUrl = urlFor(slide.beforeImage).url();
              const afterImageUrl = urlFor(slide.afterImage).url();
              
              return (
                <SwiperSlide key={slide._key}>
                  <div className="relative w-full aspect-video lg:aspect-21/9 mb-12">
                    <BeforeAfterSlider
                      beforeImage={beforeImageUrl}
                      afterImage={afterImageUrl}
                      beforeAlt={`Before - ${slide.title}`}
                      afterAlt={`After - ${slide.title}`}
                      className="rounded-xl"
                      imgClassName="object-contain!"
                    />
                    {/* Metric Overlay */}
                    {slide.showStats && slide.statType && slide.beforeValue && slide.afterValue && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg">
                        Before: {slide.beforeValue} {slide.statType} → After: {slide.afterValue} {slide.statType}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Merxpert builds{" "}
            <span className="font-bold text-black">
              high-converting brand systems
            </span>{" "}
            that transform your Amazon presence into a performance engine.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" strokeWidth={3} />
                </div>
                <span className="text-gray-800 text-sm sm:text-base font-medium text-left">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Proof Statement */}
          <div className="bg-linear-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-12">
            <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold">
              &ldquo;On average, Merxpert partners see{" "}
              <span className="text-emerald-600">29% higher revenue</span> and{" "}
              <span className="text-blue-600">41% leaner ad spend</span>.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
