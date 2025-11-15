"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  category: string;
  title: string;
  titleAccent?: string; // Optional highlighted word(s) at the end
  description: string;
  highlights: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function ServiceHeroNew({
  category,
  title,
  titleAccent,
  description,
  highlights,
  ctaPrimary = "Get Started Today",
  ctaSecondary = "See How It Works",
}: ServiceHeroProps) {
  return (
    <section
      className="relative w-full bg-brand-dark text-white -mt-20 pt-32 pb-20 lg:pb-28 overflow-hidden"
      aria-label="Service hero section"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      </div>

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px] opacity-20"
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
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[120px] opacity-20"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Category Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2.5 bg-brand-primary/20 rounded-full border border-brand-primary/40 backdrop-blur-sm">
              <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider">
                {category}
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="text-center space-y-8 flex flex-col items-center">
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}{" "}
              {titleAccent && (
                <span className="text-brand-accent relative inline-block">
                  {titleAccent}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C60 4 140 2 198 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              )}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8 w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 text-left bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-200 leading-relaxed">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/audit"
                className="group font-sans w-full sm:w-auto py-4 px-8 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#process"
                className="font-sans w-full sm:w-auto py-4 px-8 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base text-center backdrop-blur-sm"
              >
                {ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
