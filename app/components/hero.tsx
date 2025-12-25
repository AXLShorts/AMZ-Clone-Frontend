"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor, fileUrl } from "@/lib/sanity.client";
import { SanityImageAsset } from "@/lib/types";

interface HeroProps {
  data?: {
    video: { asset: { _ref: string } };
    poster: SanityImageAsset;
  };
}

const Hero = ({ data }: HeroProps) => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const videoUrl = data?.video ? fileUrl(data.video) : null;
  const posterUrl = data?.poster ? urlFor(data.poster).url() : null;

  if (!videoUrl && !posterUrl) return null;

  return (
    <section
      ref={heroRef}
      className="relative w-full h-fit mx-auto text-white -mt-20 pt-20 pb-12 lg:pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterUrl || undefined}
            className="w-full h-full object-cover"
            aria-label="Hero background video"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 hidden video-not-supported">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt="Amazon store optimization"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="absolute inset-0 bg-brand-dark/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-8 lg:pt-16">
        <div className="mx-auto text-center space-y-6 lg:space-y-8 container flex flex-col items-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-1px] uppercase font-semibold z-20">
            You don&apos;t need more traffic{" "}
            <span className="text-brand-primary relative inline-block bg-[url('/assets/homepage/hero/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
              you need the right traffic and better conversion
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-200 mx-auto max-w-4xl">
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
      </div>
    </section>
  );
};

export default Hero;
