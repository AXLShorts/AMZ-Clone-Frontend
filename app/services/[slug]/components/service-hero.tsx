import type { Service } from "@/lib/services-data";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section
      className="relative w-full bg-brand-dark text-white -mt-20 pt-32 pb-16 lg:pb-24"
      aria-label="Service hero section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      </div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Category Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-block px-6 py-2 bg-brand-primary/20 rounded-full border border-brand-primary/40">
              <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider">
                {service.category}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-6 lg:space-y-8 flex flex-col items-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-1px]">
              {service.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-brand-primary relative inline-block bg-[url('/assets/homepage/hero/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
                {service.heroTitle.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {service.heroDescription}
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 w-full max-w-3xl">
              {service.keyHighlights.slice(0, 3).map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/audit"
                className="font-sans w-full sm:w-auto py-4 px-8 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-accent transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                Get Started Today →
              </Link>
              <Link
                href="#process"
                className="font-sans w-full sm:w-auto py-4 px-8 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300 text-base text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
