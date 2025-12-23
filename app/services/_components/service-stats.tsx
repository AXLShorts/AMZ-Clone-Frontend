"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  stats: StatItem[];
}

export default function ServiceStats({ stats }: ServiceStatsProps) {
  return (
    <section className="w-full bg-brand-dark text-white py-12 mb-16 lg:mb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-brand-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
