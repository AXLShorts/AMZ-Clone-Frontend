"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Performance-driven listing redesigns",
  "Keyword-anchored copy + visuals",
  "A+ Content built for ranking",
  "Storefront architecture that sells",
  "Continuous improvement reports",
];

export default function TransformationContent() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/service-assets/Full-Listing-Optimization/4 Design.jpg"
                alt="Performance-driven listing redesigns"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-xl shadow-2xl"
            >
              <div className="text-4xl font-bold text-brand-accent">29%</div>
              <div className="text-sm text-gray-300">Higher Revenue</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
              Merxpert builds{" "}
              <span className="text-brand-primary">
                high-converting brand systems
              </span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              That make the right buyers see you and impossible not to buy.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Proof Statement */}
            <div className="bg-linear-to-r from-emerald-500/10 to-blue-500/10 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-8">
              <p className="text-base lg:text-lg text-gray-800 font-semibold">
                &ldquo;On average, Merxpert partners see{" "}
                <span className="text-emerald-600">29% higher revenue</span> and{" "}
                <span className="text-blue-600">41% leaner ad spend</span>.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
