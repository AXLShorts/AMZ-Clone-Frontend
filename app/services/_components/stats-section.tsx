"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  heading?: string;
  darkMode?: boolean;
}

export default function StatsSection({
  stats,
  heading = "Proven Track Record",
  darkMode = false,
}: StatsSectionProps) {
  const bgClass = darkMode ? "bg-brand-dark" : "bg-gray-50";
  const textClass = darkMode ? "text-white" : "text-brand-dark";
  const labelClass = darkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section className={`py-16 lg:py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {heading && (
          <motion.h2
            className={`text-2xl sm:text-3xl font-display font-bold text-center mb-12 ${textClass}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h2>
        )}

        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-brand-primary to-brand-accent`}
              >
                {stat.value}
              </div>
              <div className={`text-sm sm:text-base uppercase tracking-wide ${labelClass}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
