"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Easing, motion } from "framer-motion";

const TeamCTASection = () => {
  const benefits = [
    "Free conversion audit of your current listings",
    "Detailed roadmap showing exact optimization opportunities",
    "Revenue projections based on proven benchmarks",
    "No commitment required — see the potential first",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Who We Work With */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl text-black leading-tight font-display mb-8! font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as Easing,
              }}
            >
              Who We Work With
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-6 text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1] as Easing,
                  },
                }}
                className="relative bg-linear-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-primary to-brand-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <h3 className="text-lg font-bold text-black mb-3 relative z-10">
                  Established Brands
                </h3>
                <p className="text-sm text-gray-600 relative z-10">
                  You&apos;re doing $50K+ monthly but conversion rates have
                  plateaued. We optimize and scale.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1] as Easing,
                  },
                }}
                className="relative bg-linear-to-br from-white to-emerald-50/30 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 to-emerald-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                />
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <h3 className="text-lg font-bold text-black mb-3 relative z-10">
                  Private Label Sellers
                </h3>
                <p className="text-sm text-gray-600 relative z-10">
                  Your product is great, but sales aren&apos;t reflecting it. We
                  fix the disconnect.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1] as Easing,
                  },
                }}
                className="relative bg-linear-to-br from-white to-blue-50/30 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                <h3 className="text-lg font-bold text-black mb-3 relative z-10">
                  DTC Brands on Amazon
                </h3>
                <p className="text-sm text-gray-600 relative z-10">
                  You&apos;ve nailed your website, but Amazon is different. We
                  translate DTC success to Amazon.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Card */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4! font-semibold">
                Ready to Stop Guessing and Start{" "}
                <span className="text-brand-primary">Scaling?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto!">
                Get a free Amazon Conversion Audit and see exactly where
                you&apos;re losing sales — and how to fix it.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-sm text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full text-base lg:text-lg font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Claim Your Free Audit Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 mt-4!">
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
