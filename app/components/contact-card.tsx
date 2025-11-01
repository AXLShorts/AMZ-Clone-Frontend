import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export function ContactCard() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Customer support representative image */}
      <div className="relative">
        <div className="size-fit max-w-72 flex items-center justify-center overflow-hidden">
          <img
            src="/assets/homepage/faq/suport.png"
            alt="Customer support representative"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
      >
        Book A Free Call
        <ArrowRight
          className="w-5 h-5 group-hover:translate-x-1 transition-transform -rotate-45"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
