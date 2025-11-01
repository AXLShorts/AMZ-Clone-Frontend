"use client";

import React from "react";
import { ImageCarousel } from "@/components/image-carousel";
import { SimpleCarouselGallery } from "@/components/simple-carousel-gallery";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      className="w-[96%] mx-auto h-fit bg-[#142337] rounded-[20px] text-white"
      aria-label="Portfolio section"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-8 lg:pt-16">
        <div className="mx-auto text-center space-y-6 lg:space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-2px] mb-0">
            <span className="relative inline-block bg-[url('/assets/homepage/portfolio/orange-line.png')] bg-no-repeat bg-bottom-right pb-3!">
              STORE FRONT PORTFOLIO
            </span>
          </h2>
          <ImageCarousel />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-2px] mb-0">
            <span className="relative inline-block bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom-right pb-3!">
              PRODUCT IMAGES
            </span>
          </h2>
          <SimpleCarouselGallery />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-2px] mb-0">
            <span className="relative inline-block bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom-right pb-3!">
              A+ Content
            </span>
          </h2>
          <div className="relative w-full">
            <Image
              src="/assets/homepage/portfolio/a-plus-content.png"
              alt="A+ Content example"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
