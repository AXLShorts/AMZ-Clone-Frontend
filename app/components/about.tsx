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
    <section
      className="w-full bg-white py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display"
            >
              Stop guessing why your{" "}
              <span className="relative inline-block bg-[url('/assets/homepage/portfolio/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
                Amazon sales plateaued.
              </span>
            </h2>

            <div className="text-gray-700 space-y-4">
              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed">
                If your listings look great but your numbers don&apos;t —
                you&apos;re not alone.
              </p>

              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed font-semibold">
                Most brands are losing conversions because they optimize for{" "}
                <span className="italic">looks</span>, not{" "}
                <span className="italic">performance</span>.
              </p>
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-lg"
                >
                  <point.icon className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold">
                The good news: these aren&apos;t permanent problems —
                they&apos;re fixable in days, not months.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full text-base lg:text-lg hover:bg-orange-600 transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Get a Free Conversion Audit"
              >
                Get a Free Conversion Audit & See Where You&apos;re Leaking
                Revenue
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
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
      </div>
    </section>
  );
};

export default About;
