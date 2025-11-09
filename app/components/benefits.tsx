"use client";

import React from "react";
import { Check } from "lucide-react";

interface Benefit {
  id: number;
  text: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    text: "You struggle with visibility and conversion due to limited resources and expertise in optimizing your product listings on Amazon.",
  },
  {
    id: 2,
    text: "You are an established brand that is new to Amazon and lack the knowledge and internal resources required to effectively optimize your online listings to maximize sales.",
  },
  {
    id: 3,
    text: "You are a private label seller who invest significantly in your product lines and need to ensure a high return on investment.",
  },
  {
    id: 4,
    text: "You are continously launching new products and need an efficient team to create optimized product listings to accelerating sales growth.",
  },
];

const Benefits = () => {
  return (
    <section
      className="w-full bg-white py-16 lg:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black uppercase leading-tight font-display mb-12 lg:mb-16 text-center pb-8!"
          >
            You&apos;ll Benefit of our Services IF:
          </h2>

          {/* Benefits List */}
          <div className="space-y-6 lg:space-y-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex gap-4 lg:gap-6 pb-6 lg:pb-8 border-b border-gray-300 last:border-b-0"
              >
                {/* Checkmark Icon */}
                <div className="shrink-0 pt-1">
                  <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 text-brand-primary shrink-0">
                    <Check className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg lg:text-[22px] text-gray-600 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
