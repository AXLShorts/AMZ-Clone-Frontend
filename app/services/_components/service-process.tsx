"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  heading: string;
  headingHighlight?: string;
  subheading?: string;
  steps: ProcessStep[];
}

export default function ServiceProcess({
  heading,
  headingHighlight,
  subheading,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="w-full pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark uppercase">
              {heading}
              {headingHighlight && (
                <>
                  {" "}
                  <span className="text-brand-accent">{headingHighlight}</span>
                </>
              )}
            </h2>
            {subheading && (
              <p className="text-xl text-gray-700">{subheading}</p>
            )}
          </motion.div>

          {/* Bottom - Process Steps */}
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6`}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-brand-accent mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2! line-clamp-2 min-h-14">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-brand-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
