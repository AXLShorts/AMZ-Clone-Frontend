"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon?: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  heading: string;
  headingHighlight?: string;
  subheading?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
}

export default function ServiceBenefits({
  heading,
  headingHighlight,
  subheading,
  benefits,
  columns = 3,
}: ServiceBenefitsProps) {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-4! uppercase">
            {heading}{" "}
            {headingHighlight && (
              <span className="text-brand-primary">{headingHighlight}</span>
            )}
          </h2>
          {subheading && <p className="text-xl text-gray-700">{subheading}</p>}
        </motion.div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8 max-w-6xl mx-auto`}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {benefit.emoji && (
                <div className="text-5xl mb-4">{benefit.emoji}</div>
              )}
              {benefit.icon && (
                <benefit.icon className="w-12 h-12 text-brand-primary mb-4" />
              )}
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
