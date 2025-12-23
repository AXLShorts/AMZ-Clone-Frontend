"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  heading: string;
  headingHighlight?: string;
  subheading?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
}

export default function ServiceFeatures({
  heading,
  headingHighlight,
  subheading,
  features,
  columns = 2,
}: ServiceFeaturesProps) {
  const gridColsClass = columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  const maxWClass = columns === 3 ? "max-w-6xl" : "max-w-5xl";

  return (
    <section className="w-full mb-16 lg:mb-24">
      <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4! uppercase">
            {heading}
            {headingHighlight && (
              <>
                {" "}
                <span className="text-brand-accent">{headingHighlight}</span>
              </>
            )}
          </h2>
          {subheading && (
            <p className="text-xl text-gray-200">{subheading}</p>
          )}
        </motion.div>

        <div className={`grid grid-cols-1 ${gridColsClass} gap-8 ${maxWClass} mx-auto mb-8`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3!">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
