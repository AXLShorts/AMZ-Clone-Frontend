"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  heading: string;
  subheading: string;
  benefits: BenefitItem[];
  ctaText?: string;
  ctaLink?: string;
  darkMode?: boolean;
}

export default function BenefitsSection({
  heading,
  subheading,
  benefits,
  ctaText = "Start Growing Today",
  ctaLink = "/audit",
  darkMode = false,
}: BenefitsSectionProps) {
  const bgClass = darkMode
    ? "bg-brand-dark text-white"
    : "bg-white text-brand-dark";
  const descriptionClass = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            {heading}
          </h2>
          <p className={`text-lg sm:text-xl ${descriptionClass}`}>
            {subheading}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border ${
                darkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              } transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className={descriptionClass}>{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={ctaLink}
            className="group py-4 px-10 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <Check className="w-5 h-5" />
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
