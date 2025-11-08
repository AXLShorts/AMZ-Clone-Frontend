import type { Service } from "@/lib/services-data";

export default function ServiceBenefits({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-4!">
              {service.benefitsTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {service.benefitsDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-6 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
