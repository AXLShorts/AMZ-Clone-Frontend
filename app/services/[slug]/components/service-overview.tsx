import type { Service } from "@/lib/services-data";
import { Check } from "lucide-react";

export default function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-black leading-tight mb-6! font-semibold">
                {service.overviewTitle}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8! leading-relaxed">
                {service.overviewDescription}
              </p>

              <div className="space-y-4">
                {service.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 text-base">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-8!">
                Why Choose Us
              </h3>
              <div className="space-y-6">
                {service.whyChooseUs.map((reason, idx) => (
                  <div
                    key={idx}
                    className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-bold text-base text-black mb-2!">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
