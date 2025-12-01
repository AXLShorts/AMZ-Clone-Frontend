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
      className="w-[96%] mx-auto bg-brand-dark rounded-[20px] text-white py-16 lg:py-24"
      aria-label="Offer section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4! uppercase font-semibold text-white">
            Introducing the{" "}
            <span className="text-brand-accent">
              Merxpert Brand Conversion System™
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Zero Impact? You pay nothing + get your money back.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4!">
              A done-for-you system that gets your product in front of the right buyers & turns clicks into sales with high-converting creatives.
            </p>

            {/* Deliverables */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display mb-6! text-white font-semibold">
                What You Get:
              </h3>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base sm:text-lg text-gray-300 font-medium">
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
                className="inline-block w-full sm:w-auto py-4 px-8 bg-brand-accent text-white text-center rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book My Free Amazon Conversion Audit →
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 mt-4! text-center sm:text-left">
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
