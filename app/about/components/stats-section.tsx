import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "6000+",
      label: "Amazon Listings Optimized",
      highlight: false,
    },
    {
      value: "29%",
      label: "Average Revenue Increase",
      highlight: true,
    },
    {
      value: "41%",
      label: "Average Ad Spend Reduction",
      highlight: true,
    },
    {
      value: "200+",
      label: "Brands Scaled with Our System",
      highlight: false,
    },
    {
      value: "4.8★",
      label: "Average Client Rating",
      highlight: false,
    },
    {
      value: "45 Days",
      label: "Average Time to See Results",
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-12 text-center">
            Merxpert By The Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  stat.highlight
                    ? "bg-emerald-50 border-2 border-emerald-500"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 font-display ${
                    stat.highlight ? "text-emerald-600" : "text-orange-600"
                  }`}
                >
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            *Based on client data from January 2023 - December 2024. Individual
            results may vary based on market conditions, competition, and
            implementation speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
