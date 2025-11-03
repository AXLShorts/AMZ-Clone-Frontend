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
      className="w-full bg-white py-16 lg:py-24"
      aria-labelledby="scarcity-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              id="scarcity-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display mb-6"
            >
              We Only Work with{" "}
              <span className="relative inline-block bg-[url('/assets/homepage/portfolio/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
                3 New Brands Each Month
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We keep our client pool intentionally small to deliver deep
              performance and one-on-one focus.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mt-4 font-medium">
              Audit slots close monthly — when they&apos;re gone, they&apos;re
              gone.
            </p>
          </div>

          {/* Urgency Card */}
          <div className="bg-linear-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 sm:p-10 shadow-xl mb-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="font-bold text-gray-900">
                    Spots Available This Month
                  </span>
                </div>
                <span className="font-bold text-orange-600">
                  {spotsFilled} of {totalSpots} filled
                </span>
              </div>

              {/* Progress Bar Visual */}
              <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-orange-500 to-red-500 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
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
                className="inline-block w-full sm:w-auto py-5 px-10 bg-orange-500 text-white text-center rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-lg lg:text-xl shadow-lg hover:shadow-xl hover:scale-105"
              >
                Claim My Free Conversion Audit Now →
              </Link>
            </div>
          </div>

          {/* Subtext */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Join{" "}
              <span className="font-bold text-gray-900">
                50+ brands scaling
              </span>{" "}
              with Merxpert&apos;s Brand Conversion System™ —
              <br />
              <span className="text-emerald-600 font-semibold">
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
