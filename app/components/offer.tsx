"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const deliverables = [
  "Complete Listing Optimization",
  "Visual & Copy Revamp",
  "Brand Storefront Build",
  "Algorithmic SEO & Keyword Mapping",
  "Conversion Performance Dashboard",
];

const Offer = () => {
  return (
    <section
      className="w-[96%] mx-auto h-fit bg-[#142337] rounded-[20px] text-white py-16 lg:py-24"
      aria-label="Offer section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-2px] mb-4">
            Introducing the{" "}
            <span className="relative inline-block">
              Merxpert Brand Conversion System™
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Full-service, done-for-you brand transformation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6! leading-relaxed">
              Our done-for-you system rebuilds your Amazon brand from the ground
              up — every word, every visual, every keyword — scientifically
              designed to convert.
            </p>

            {/* Deliverables */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-display mb-6! text-emerald-400">
                What You Get:
              </h3>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base sm:text-lg text-gray-200 font-medium">
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
                className="inline-block w-full sm:w-auto py-4 px-8 bg-orange-500 text-white text-center rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book My Free Amazon Conversion Audit →
              </Link>
              <p className="text-sm text-gray-400 mt-4! text-center sm:text-left">
                Only 3 free spots this month — closes in 48h
              </p>
            </div>
          </div>

          {/* Right Column - MacBook Visual */}
          <div className="relative">
            <MacBookMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const MacBookMockup = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* MacBook Frame */}
      <div className="relative bg-gray-900 rounded-t-2xl p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

        {/* Screen */}
        <div className="relative bg-white rounded-lg overflow-hidden aspect-16/10">
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="h-full overflow-y-auto custom-scrollbar"
          >
            <Image
              src="/assets/homepage/hero/header-bg.png"
              alt="Merxpert Dashboard and Listing Preview"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* MacBook Base */}
      <div className="relative">
        <div className="h-2 bg-linear-to-b from-gray-800 to-gray-900"></div>
        <div className="h-4 bg-linear-to-b from-gray-900 to-gray-950 rounded-b-xl"></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-t from-orange-500/20 to-transparent opacity-50 pointer-events-none blur-2xl"></div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Offer;
