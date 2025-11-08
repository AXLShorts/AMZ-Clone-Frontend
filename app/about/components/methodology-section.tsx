import React from "react";
import { Database, LineChart, RefreshCw, Rocket } from "lucide-react";

const MethodologySection = () => {
  const methods = [
    {
      number: "01",
      icon: Database,
      title: "Data-First Analysis",
      description:
        "We audit your current performance, identify conversion leaks, and benchmark against top performers in your category. No assumptions, just numbers.",
    },
    {
      number: "02",
      icon: LineChart,
      title: "Performance-Driven Design",
      description:
        "Every visual, every word, every pixel is optimized for one thing: converting browsers into buyers. We test, measure, and iterate based on real data.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Rapid Implementation",
      description:
        "We move fast without breaking things. Get your optimized listings live in days, not weeks, and start seeing results immediately.",
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Continuous Optimization",
      description:
        "Amazon changes. Your competition evolves. We keep your listings performing at peak levels with ongoing monitoring and improvements.",
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-4!">
              Our Brand Conversion System™
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6!">
              The proven 4-step process that transformed over 200 Amazon brands
              from plateaued to profitable.
            </p>
          </div>

          <div className="space-y-8">
            {methods.map((method, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-20 h-20 bg-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-300 font-display">
                      {method.number}
                    </span>
                    <h3 className="text-2xl font-bold text-black">
                      {method.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {method.description}
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

export default MethodologySection;
