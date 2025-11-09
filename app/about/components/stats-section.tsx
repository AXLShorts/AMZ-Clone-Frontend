"use client";

import React, { useEffect, useState } from "react";
import { Easing, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "6000+",
      numericValue: 6000,
      label: "Amazon Listings Optimized",
      highlight: false,
      suffix: "+",
    },
    {
      value: "29%",
      numericValue: 29,
      label: "Average Revenue Increase",
      highlight: true,
      suffix: "%",
    },
    {
      value: "41%",
      numericValue: 41,
      label: "Average Ad Spend Reduction",
      highlight: true,
      suffix: "%",
    },
    {
      value: "200+",
      numericValue: 200,
      label: "Brands Scaled with Our System",
      highlight: false,
      suffix: "+",
    },
    {
      value: "4.8★",
      numericValue: 4.8,
      label: "Average Client Rating",
      highlight: false,
      suffix: "★",
      decimal: true,
    },
    {
      value: "45 Days",
      numericValue: 45,
      label: "Average Time to See Results",
      highlight: false,
      suffix: " Days",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="w-full pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-black leading-tight font-display mb-12! text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as Easing }}
          >
            Merxpert By The Numbers
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} variants={cardVariants} />
            ))}
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 text-center mt-8!"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            *Based on client data from January 2023 - December 2024. Individual
            results may vary based on market conditions, competition, and
            implementation speed.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: string;
    numericValue: number;
    label: string;
    highlight: boolean;
    suffix: string;
    decimal?: boolean;
  };
  variants: Variants;
}

const StatCard = ({ stat, variants }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Ease out function
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        const currentCount = easeOutProgress * stat.numericValue;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, stat.numericValue]);

  const formatNumber = (num: number) => {
    if (stat.decimal) {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as Easing },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-center p-6 rounded-xl cursor-pointer bg-white ${
        stat.highlight
          ? "border-2 border-brand-primary/50 shadow-lg shadow-brand-accent/20"
          : "border border-gray-200 shadow-md"
      } hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
    >
      {/* Animated background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 ${
          stat.highlight ? "bg-brand-primary" : "bg-brand-accent"
        }`}
      />

      <div
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 font-display relative z-10 transition-colors duration-300 ${
          isHovered
            ? "text-white"
            : stat.highlight
              ? "text-brand-primary"
              : "text-brand-accent"
        }`}
      >
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <p
        className={`text-sm sm:text-base font-medium relative z-10 transition-colors duration-300 ${
          isHovered ? "text-white" : "text-gray-600"
        }`}
      >
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatsSection;
