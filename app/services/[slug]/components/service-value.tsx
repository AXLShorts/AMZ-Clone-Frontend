import type { Service } from "@/lib/services-data";
import { TrendingUp, Target, Zap, Shield } from "lucide-react";

const valuePoints = [
  {
    icon: TrendingUp,
    title: "ROI-Driven Results",
    description:
      "You're not paying for a service—you're investing in measurable revenue growth and market share.",
  },
  {
    icon: Target,
    title: "Strategic Partnership",
    description:
      "We become an extension of your team, fully invested in your long-term success and brand growth.",
  },
  {
    icon: Zap,
    title: "Proven Systems",
    description:
      "Battle-tested strategies refined over 6000+ successful projects that deliver consistent results.",
  },
  {
    icon: Shield,
    title: "Risk-Free Value",
    description:
      "Our track record speaks for itself—we only succeed when you succeed, that's our guarantee.",
  },
];

export default function ServiceValue({ service }: { service: Service }) {
  return (
    <section className="w-full py-16 lg:pt-24 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display mb-6!">
              You&apos;re Not Buying a Service,{" "}
              <span className="relative inline-block bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom-right bg-size-[200px]">
                You&apos;re Investing in Growth
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every dollar you invest with us is designed to multiply—through
              higher conversions, better rankings, and sustainable revenue
              growth.
            </p>
          </div>

          {/* Value Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {valuePoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          {service.stats && (
            <div className="bg-[#142337] rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-orange-400 font-display">
                      {stat.value}
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6! font-medium">
              Ready to see what this service can do for your business?
            </p>
            <a
              href="/audit"
              className="inline-block py-4 px-8 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Your Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
