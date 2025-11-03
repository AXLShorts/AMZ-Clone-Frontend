"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Check } from "lucide-react";

const transformations = [
  {
    id: 1,
    beforeImage: "/assets/homepage/hero/header-bg.png",
    afterImage: "/assets/homepage/hero/header-bg-c.png",
    metric: "Before: 2.4% CTR → After: 6.7% CTR",
    title: "Performance Listing Redesign",
  },
  {
    id: 2,
    beforeImage: "/assets/homepage/transformation/before-2.jpg",
    afterImage: "/assets/homepage/transformation/after-2.jpg",
    metric: "Before: 8% Conversion → After: 15.2% Conversion",
    title: "Visual & Copy Optimization",
  },
  {
    id: 3,
    beforeImage: "/assets/homepage/transformation/before-3.jpg",
    afterImage: "/assets/homepage/transformation/after-3.jpg",
    metric: "Before: Page 3 Ranking → After: Page 1 Ranking",
    title: "SEO & Keyword Architecture",
  },
];

const features = [
  "Performance-driven listing redesigns",
  "Keyword-anchored copy + visuals",
  "A+ Content built for ranking",
  "Storefront architecture that sells",
  "Continuous improvement reports",
];

const Transformation = () => {
  return (
    <section
      className="w-full bg-linear-to-b from-gray-50 to-white py-16 lg:py-24"
      aria-labelledby="transformation-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="transformation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display mb-6"
          >
            Imagine listings that turn browsers into buyers —{" "}
            <span className="relative inline-block bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
              automatically.
            </span>
          </h2>
        </div>

        {/* Carousel with Before/After Sliders */}
        <div className="mb-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="transformation-carousel rounded-xl"
          >
            {transformations.map((transformation) => (
              <SwiperSlide key={transformation.id}>
                <div className="relative w-full aspect-video lg:aspect-21/9 mb-12">
                  <BeforeAfterSlider
                    beforeImage={transformation.beforeImage}
                    afterImage={transformation.afterImage}
                    beforeAlt={`Before - ${transformation.title}`}
                    afterAlt={`After - ${transformation.title}`}
                    className="rounded-xl shadow-2xl"
                  />
                  {/* Metric Overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base lg:text-lg">
                    {transformation.metric}
                  </div>
                </div>
              </SwiperSlide>
            ))}
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

          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            We optimize{" "}
            <span className="font-semibold text-black">
              every lever that impacts conversions
            </span>{" "}
            — visuals, copy, listings, storefront, and ranking architecture —
            engineered to <span className="italic">convert</span>, not just{" "}
            <span className="italic">impress</span>.
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

      <style jsx global>{`
        .transformation-carousel .swiper-button-next,
        .transformation-carousel .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .transformation-carousel .swiper-button-next:after,
        .transformation-carousel .swiper-button-prev:after {
          font-size: 20px;
        }

        .transformation-carousel .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 1;
        }

        .transformation-carousel .swiper-pagination-bullet-active {
          background: #f97316;
        }
      `}</style>
    </section>
  );
};

export default Transformation;
