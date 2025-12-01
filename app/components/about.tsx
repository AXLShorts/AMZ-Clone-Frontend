import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingDown,
  DollarSign,
  BarChart3,
  Eye,
} from "lucide-react";

const About = () => {
  const painPoints = [
    { icon: Eye, text: "Traffic without conversions" },
    { icon: DollarSign, text: "Rising ad spend with shrinking margins" },
    { icon: BarChart3, text: "Stuck organic rankings" },
    { icon: TrendingDown, text: '"Looks good" visuals that don\'t sell' },
  ];

  return (
    <section className="w-full py-16 lg:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
        <h2
          id="about-heading"
          className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-tight font-display uppercase font-semibold"
        >
          Stop guessing why your sales are Stuck
        </h2>
        <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 mt-2">
          Your listings don&apos;t need just clicks. They need the right clicks that actually buy
        </p>
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center mt-4 lg:mt-8">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <div className="text-gray-700">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold">
                Most brands are losing conversions because they optimize for{" "}
                <span className="italic">looks</span>, not{" "}
                <span className="italic">performance</span>.
              </p>
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-1 gap-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 bg-red-50 border border-red-100 rounded-lg"
                >
                  <point.icon className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/assets/homepage/description/video-intro-poster.jpg"
                aria-label="Merxpert introduction video"
              >
                <source
                  src="/assets/homepage/description/video-intro.mp4"
                  type="video/mp4"
                />
                <track
                  kind="captions"
                  src="/assets/homepage/description/video-intro-captions.vtt"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag. Please upgrade to a
                modern browser to view this content.
              </video>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-r-lg mt-4 lg:mt-8">
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">
            The good news: these aren&apos;t permanent problems — they&apos;re
            fixable in days, not months.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full text-sm lg:text-base hover:bg-brand-accent transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
            aria-label="Get a Free Conversion Audit"
          >
            Get a Free Conversion Audit & See Where You&apos;re Leaking Revenue
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
