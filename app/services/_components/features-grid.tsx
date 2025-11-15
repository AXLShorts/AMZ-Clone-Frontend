"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: string | LucideIcon;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  darkMode?: boolean;
}

export default function FeaturesGrid({
  heading,
  subheading,
  features,
  columns = 3,
  darkMode = false,
}: FeaturesGridProps) {
  const bgClass = darkMode ? "bg-brand-dark" : "bg-gray-50";
  const textClass = darkMode ? "text-white" : "text-brand-dark";
  const descriptionClass = darkMode ? "text-gray-300" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-white/5 border-white/10 hover:bg-white/10"
    : "bg-white border-gray-200 hover:border-brand-primary/30 hover:shadow-lg";

  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {heading && (
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 ${textClass}`}
            >
              {heading}
            </h2>
            {subheading && (
              <p className={`text-lg sm:text-xl ${descriptionClass}`}>
                {subheading}
              </p>
            )}
          </motion.div>
        )}

        <div className={`max-w-6xl mx-auto grid grid-cols-1 ${gridColsClass} gap-8`}>
          {features.map((feature, index) => {
            const IconComponent =
              typeof feature.icon !== "string" ? feature.icon : null;

            return (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 ${cardBgClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">
                  {typeof feature.icon === "string" ? (
                    <span className="text-5xl">{feature.icon}</span>
                  ) : IconComponent ? (
                    <IconComponent className="w-12 h-12 text-brand-primary" />
                  ) : null}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${textClass}`}>
                  {feature.title}
                </h3>
                <p className={descriptionClass}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
