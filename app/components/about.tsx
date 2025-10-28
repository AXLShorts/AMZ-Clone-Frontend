import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const About = () => {
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
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black uppercase leading-none font-display"
            >
              THE #1 CREATIVES AND ADS AGENCY
            </h2>

            <div className="text-gray-700 mb-0">
              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed">
                AMZ One Step is a creatives and advertising agency trusted by
                some of the top agencies, renowned experts and big brands on
                Amazon.
              </p>

              <p className="text-base sm:text-lg lg:text-[22px] leading-relaxed">
                Work with a global team of strategists on a project basis or
                subscription plans – designed to meet your outsourcing needs.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-base lg:text-lg hover:bg-orange-600 transition-colors group"
                aria-label="Request a quote for our services"
              >
                Get a Quote
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform -rotate-45"
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
                aria-label="AMZ One Step introduction video"
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

            {/* Video Play Indicator (optional overlay) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
