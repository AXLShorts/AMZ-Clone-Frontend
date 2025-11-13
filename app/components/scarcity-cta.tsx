"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Users } from "lucide-react";

const ScarcityCTA = () => {
  const [spotsFilled] = useState(2);
  const totalSpots = 3;
  const progressPercentage = (spotsFilled / totalSpots) * 100;

  return (
    <section
      className="w-full bg-white py-8 lg:py-16"
      aria-labelledby="scarcity-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 flex flex-col items-center">
            <h2
              id="scarcity-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-tight font-display mb-6! uppercase font-semibold"
            >
              We Only Work with 3 New Brands Each Month
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mx-auto">
              We keep our client pool intentionally small to deliver deep
              performance and one-on-one focus.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mt-4 font-medium">
              Audit slots close monthly — when they&apos;re gone, they&apos;re
              gone.
            </p>
          </div>

          {/* Urgency Card */}
          <div className="bg-linear-to-br from-blue-50 to-purple-50 border-2 border-brand-primary rounded-2xl p-8 sm:p-10 shadow-xl mb-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-primary" />
                  <span className="font-bold text-gray-900">
                    Spots Available This Month
                  </span>
                </div>
                <span className="font-bold text-brand-primary">
                  {spotsFilled} of {totalSpots} filled
                </span>
              </div>

              {/* Progress Bar Visual */}
              <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progressPercentage}%`,
                    background: "linear-gradient(to right, #043299, #6d2cf8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white drop-shadow-md">
                    {totalSpots - spotsFilled} spot
                    {totalSpots - spotsFilled !== 1 ? "s" : ""} remaining
                  </span>
                </div>
              </div>
            </div>

            {/* Timer (optional decorative element) */}
            <div className="flex items-center justify-center gap-2 mb-6 text-red-600">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-sm">
                Next reset: End of month
              </span>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/audit"
                className="inline-block w-full sm:w-auto py-4 px-8 bg-brand-primary text-white text-center rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105"
              >
                Claim My Free Conversion Audit Now →
              </Link>
            </div>
          </div>

          {/* Subtext */}
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Join{" "}
              <span className="font-bold text-gray-900">
                50+ brands scaling
              </span>{" "}
              with Merxpert&apos;s Brand Conversion System™
              <br />
              <span className="text-brand-primary font-semibold">
                Where growth isn&apos;t guessed. It&apos;s engineered.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcityCTA;
