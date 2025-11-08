import type { Service } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ServicePackages({ service }: { service: Service }) {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Flexible Packages
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all ${
                pkg.highlighted
                  ? "ring-2 ring-orange-500 shadow-2xl md:scale-105"
                  : "border border-slate-200 hover:border-orange-300 hover:shadow-lg"
              }`}
            >
              <div
                className={`${
                  pkg.highlighted
                    ? "bg-linear-to-r from-orange-500 to-orange-600"
                    : "bg-slate-100"
                } px-6 py-4`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    pkg.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pkg.name}
                </h3>
              </div>

              <div className="bg-white p-6">
                <div className="mb-6">
                  <p
                    className={`text-3xl font-bold mb-2 ${
                      pkg.highlighted ? "text-orange-600" : "text-slate-900"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  {pkg.description && (
                    <p className="text-sm text-slate-600">{pkg.description}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-3 items-start">
                      <Check
                        className={`w-5 h-5 ${
                          pkg.highlighted ? "text-orange-500" : "text-slate-400"
                        } shrink-0`}
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-lg ${
                    pkg.highlighted
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
