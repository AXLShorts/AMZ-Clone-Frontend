"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { OfferSection } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

const deliverables = [
  "Complete Listing Optimization",
  "Visual & Copy Revamp",
  "Brand Storefront Build",
  "Algorithmic SEO & Keyword Mapping",
  "Conversion Performance Dashboard",
];

interface OfferProps {
  data: OfferSection;
}

const Offer = ({ data }: OfferProps) => {
  const {
    sliderImages,
  } = data;

  return (
    <section
      className="w-full py-16 lg:py-24"
      aria-label="Offer section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-[-1px] mb-4 uppercase font-semibold text-black">
            Introducing the{" "}
            <span className="relative inline-block">
              Merxpert Brand Conversion System™
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700">
            Full-service, done-for-you brand transformation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6! leading-relaxed">
              Our done-for-you system rebuilds your Amazon brand from the ground
              up — every word, every visual, every keyword — scientifically
              designed to convert.
            </p>

            {/* Deliverables */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display mb-6! text-black font-semibold">
                What You Get:
              </h3>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base sm:text-lg text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/audit"
                className="inline-block w-full sm:w-auto py-4 px-8 bg-brand-primary text-white text-center rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book My Free Amazon Conversion Audit →
              </Link>
              <p className="text-xs sm:text-sm text-gray-600 mt-4! text-center sm:text-left">
                Only 3 free spots this month — closes in 48h
              </p>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="relative">
            <SloganSlider images={sliderImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SloganSliderProps {
  images: OfferSection["sliderImages"];
}

const SloganSlider = ({ images }: SloganSliderProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        className="offer-slider"
      >
        {images.map((slide) => {
          const imageUrl = urlFor(slide.image).width(1200).height(800).url();
          
          return (
            <SwiperSlide key={slide._key}>
              <div className="space-y-6">
                
                {/* Image */}
                <div className="relative w-full aspect-3/2 overflow-hidden rounded-2xl">
                  <Image
                    src={imageUrl}
                    alt={slide.altText || slide.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={images.indexOf(slide) === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Offer;
