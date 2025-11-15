"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ProcessSectionProps {
  heading?: string;
  subheading?: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  heading = "How It Works",
  subheading = "Our proven process delivers results in record time",
  steps,
}: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-linear-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
            {heading}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-linear-to-r from-brand-primary/50 to-brand-accent/50 z-0" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="w-24 h-24 mb-6 rounded-full bg-linear-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
