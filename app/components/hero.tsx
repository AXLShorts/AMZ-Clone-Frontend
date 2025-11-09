"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const Hero = () => {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const heroRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative 2xl:max-w-[96%] w-full h-fit mx-auto rounded-b-[50px] text-white -mt-20 pt-20 pb-12 lg:pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Interactive Before/After Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BeforeAfterSlider
          beforeImage="/assets/homepage/hero/header-bg.png"
          afterImage="/assets/homepage/hero/header-bg-c.png"
          beforeAlt="Amazon store before optimization"
          afterAlt="Amazon store after optimization"
          // className="opacity-30"
          externalSliderPosition={sliderPosition}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-brand-dark/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-8 lg:pt-16">
        <div className="mx-auto text-center space-y-6 lg:space-y-8 container flex flex-col items-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[-2px] uppercase font-medium">
            Your Amazon listings don&apos;t have a traffic problem{" "}
            <span className="text-brand-primary relative inline-block bg-[url('/assets/homepage/hero/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
              they have a conversion problem.
            </span>
          </h1>

          <p className="font-sans text-xl sm:text-2xl lg:text-3xl text-gray-200 mx-auto max-w-4xl">
            See how brands using{" "}
            <span className="font-bold text-brand-accent">
              Merxpert&apos;s Brand Conversion System™
            </span>{" "}
            are driving{" "}
            <span className="font-bold text-white">29% more revenue</span> while
            reducing ad spend.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 lg:pt-6">
            <Link
              href="/audit"
              className="font-sans w-full sm:w-auto py-4 px-8 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-lg lg:text-xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              Claim Your Free Amazon Conversion Audit →
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Only 3 free audit slots open this month • No credit card required
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-28 sm:w-80 sm:h-32">
            <Image
              src="/assets/homepage/hero/6000-brands-trust-us.png"
              alt="Featured by 50+ Amazon brands"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
