"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Truck, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    description: "Unlimited revisions to ensure your expectations.",
    className: "text-brand-primary",
    bgClassName: "bg-blue-50",
    borderClassName: "border-blue-100/50 hover:border-blue-200"
  },
  {
    icon: Truck,
    title: "1 Week Delivery",
    description: "1 Week Delivery Guarantee for the first revision",
    className: "text-brand-accent-secondary",
    bgClassName: "bg-orange-50",
    borderClassName: "border-orange-100/50 hover:border-orange-200"
  },
  {
    icon: BadgeDollarSign,
    title: "Money-Back Guarantee",
    description: "Not-satisfied Money-back Guarantee",
    className: "text-emerald-600",
    bgClassName: "bg-emerald-50",
    borderClassName: "border-emerald-100/50 hover:border-emerald-200"
  },
];

const GuaranteeSection = () => {
  return (
    <section className="w-full pb-16 lg:pb-24 bg-linear-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary font-semibold text-sm mb-6 border border-brand-primary/10"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Risk-Free Partnership</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-6!"
            >
              Guarantee your launch day success
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto! font-medium"
            >
              What sets us apart is our commitment to your satisfaction
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={cn(
                  "relative p-8 rounded-4xl bg-white border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center md:items-start md:text-left",
                  feature.borderClassName
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6! transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 mx-auto",
                  feature.bgClassName
                )}>
                  <feature.icon 
                    className={cn("w-8 h-8", feature.className)} 
                    strokeWidth={2}
                  />
                </div>
                
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3! mx-auto!">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
