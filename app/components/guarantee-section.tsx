"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Truck, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    text: "Unlimited revisions to ensure your expectations.",
  },
  {
    icon: Truck,
    text: "1 Week Delivery Guarantee for the first revision",
  },
  {
    icon: BadgeDollarSign,
    text: "Not-satisfied Money-back Guarantee",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="w-full pb-8 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-6!"
            >
              Guarantee your launch day success
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-display font-medium text-brand-dark text-center mb-12!">
                What sets us apart is our commitment to your satisfaction
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-brand-primary/5 transition-colors duration-300">
                      <feature.icon 
                        className="w-12 h-12 text-brand-dark group-hover:text-brand-primary transition-colors duration-300" 
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-[250px]">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
