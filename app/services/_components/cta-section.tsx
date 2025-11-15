"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  heading: string;
  subheading: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  darkMode?: boolean;
}

export default function CtaSection({
  heading,
  subheading,
  ctaText = "Get Started Now",
  ctaLink = "/audit",
  secondaryCtaText,
  secondaryCtaLink,
  darkMode = true,
}: CtaSectionProps) {
  const bgClass = darkMode ? "bg-brand-dark" : "bg-gray-50";
  const textClass = darkMode ? "text-white" : "text-brand-dark";
  const subTextClass = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`py-20 lg:py-28 ${bgClass} relative overflow-hidden`}>
      {/* Background Elements */}
      {darkMode && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 ${textClass}`}
          >
            {heading}
          </h2>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-10 ${subTextClass}`}>
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ctaLink}
              className="group w-full sm:w-auto py-4 px-10 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className={`w-full sm:w-auto py-4 px-10 bg-transparent border-2 ${
                  darkMode
                    ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    : "border-brand-dark/30 text-brand-dark hover:bg-brand-dark/10 hover:border-brand-dark/50"
                } rounded-full font-bold transition-all duration-300 text-lg backdrop-blur-sm`}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
