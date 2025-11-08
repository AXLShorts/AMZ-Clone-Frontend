import React from "react";
import { Target, Zap, TrendingUp } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Performance Over Aesthetics",
      description:
        "Beautiful designs are worthless if they don't convert. We obsess over metrics, not just visuals.",
    },
    {
      icon: Zap,
      title: "Speed That Matters",
      description:
        "Amazon moves fast. So do we. Get optimization results in days, not months — with data to back it up.",
    },
    {
      icon: TrendingUp,
      title: "Growth That Compounds",
      description:
        "We don't just fix what's broken. We build systems that keep improving your conversion rates over time.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-8">
              Our Mission: Fix the Amazon{" "}
              <span className="relative inline-block bg-[url('/assets/homepage/portfolio/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
                Conversion Crisis
              </span>
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                Too many Amazon sellers are bleeding revenue because their
                listings <span className="font-bold">look good</span> but{" "}
                <span className="font-bold text-red-600">don&apos;t sell</span>.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                We saw brands burning thousands on traffic while their
                conversion rates stayed flat. Agencies selling "premium design"
                without measuring what actually drives sales. Sellers stuck in a
                cycle of tweaking images and hoping for results.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-semibold">
                So we built Merxpert to do what others won&apos;t: optimize for
                performance first, aesthetics second.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
                  <value.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
