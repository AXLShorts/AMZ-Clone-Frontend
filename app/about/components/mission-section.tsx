"use client";

import React from "react";
import { Target, Zap, TrendingUp } from "lucide-react";
import { Easing, motion } from "framer-motion";

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Performance Over Aesthetics",
      description:
        "Beautiful designs are worthless if they don't convert. We obsess over metrics, not just visuals.",
    },
    {
      icon: Zap,
      title: "Speed That Matters",
      description:
        "Amazon moves fast. So do we. Get optimization results in days, not months — with data to back it up.",
    },
    {
      icon: TrendingUp,
      title: "Growth That Compounds",
      description:
        "We don't just fix what's broken. We build systems that keep improving your conversion rates over time.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as Easing,
      },
    },
  };

  return (
    <section className="w-full py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl text-black leading-tight font-display mb-8 font-semibold"
              variants={headingVariants}
            >
              Our Mission: Fix the Amazon{" "}
              <span className="relative inline-block pb-3!">
                Conversion Crisis
              </span>
            </motion.h2>
            <div className="space-y-6 text-gray-700">
              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed"
                variants={paragraphVariants}
              >
                Too many Amazon sellers are bleeding revenue because their
                listings <span className="font-bold">look good</span> but{" "}
                <span className="font-bold text-red-600">don&apos;t sell</span>.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
                variants={paragraphVariants}
              >
                We saw brands burning thousands on traffic while their
                conversion rates stayed flat. Agencies selling &quot;premium
                design&quot; without measuring what actually drives sales.
                Sellers stuck in a cycle of tweaking images and hoping for
                results.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base lg:text-lg leading-relaxed font-semibold"
                variants={paragraphVariants}
              >
                So we built Merxpert to do what others won&apos;t: optimize for
                performance first, aesthetics second.
              </motion.p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1] as Easing,
                  },
                }}
                className="relative bg-linear-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Animated background accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />

                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6 relative z-10"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <value.icon className="w-8 h-8 text-brand-primary" />
                </motion.div>

                <h3 className="text-xl font-bold text-black mb-4 relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
