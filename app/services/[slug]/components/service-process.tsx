import type { Service } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export default function ServiceProcess({ service }: { service: Service }) {
  return (
    <section id="process" className="pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-4!">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process for delivering results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-2xl mb-4 shrink-0 shadow-xl font-display">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-black text-center mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < service.processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-10 left-[calc(2.5rem)] right-[calc(-100%+2.5rem)] items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
