import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const TeamCTASection = () => {
  const benefits = [
    "Free conversion audit of your current listings",
    "Detailed roadmap showing exact optimization opportunities",
    "Revenue projections based on proven benchmarks",
    "No commitment required — see the potential first",
  ];

  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Who We Work With */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-8">
              Who We Work With
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Established Brands
                </h3>
                <p className="text-gray-600">
                  You&apos;re doing $50K+ monthly but conversion rates have
                  plateaued. We optimize and scale.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  Private Label Sellers
                </h3>
                <p className="text-gray-600">
                  Your product is great, but sales aren&apos;t reflecting it. We
                  fix the disconnect.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  DTC Brands on Amazon
                </h3>
                <p className="text-gray-600">
                  You&apos;ve nailed your website, but Amazon is different. We
                  translate DTC success to Amazon.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#142337] text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4">
                Ready to Stop Guessing and Start{" "}
                <span className="text-orange-500">Scaling?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get a free Amazon Conversion Audit and see exactly where
                you&apos;re losing sales — and how to fix it.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full text-lg lg:text-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Claim Your Free Audit Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                Only 3 audit slots available this month • No credit card
                required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTASection;
