import type { Service } from "@/lib/services-data";

export default function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-4!">
              What&apos;s Included
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Everything you need to dominate your category on Amazon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-brand-accent hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
