"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Star,
  TrendingUp,
  DollarSign,
  Award,
  ThumbsUp,
  Flag,
  X,
} from "lucide-react";
import { motion, Easing, useInView } from "framer-motion";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import { TestimonialsSection, Testimonial } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

const metrics = [
  {
    icon: TrendingUp,
    value: "29%",
    label: "Average Revenue Growth",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: DollarSign,
    value: "41%",
    label: "Ad Spend Reduction",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    value: "4.8",
    label: "Avg. Review Increase",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

// Metric Card Component
interface MetricCardProps {
  metric: (typeof metrics)[0];
}

const MetricCard = ({ metric }: MetricCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Extract numeric value from metric value
  const getNumericValue = (value: string): number => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  const numericValue = getNumericValue(metric.value);
  const isDecimal = metric.value.includes(".");

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Ease out function
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        const currentCount = easeOutProgress * numericValue;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    return Math.floor(num).toLocaleString();
  };

  // Extract suffix (%, Days, etc.)
  const getSuffix = (value: string): string => {
    return value.replace(/[\d.]/g, "").trim();
  };

  const suffix = getSuffix(metric.value);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as Easing,
          },
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as Easing },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-center p-8 rounded-xl cursor-pointer bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
    >
      {/* Animated background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 ${metric.bgColor}`}
      />

      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className={`w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 ${metric.color.replace("text-", "border-")}`}
          >
            <metric.icon
              className={`w-8 h-8 transition-colors duration-300 ${metric.color}`}
              strokeWidth={2}
            />
          </motion.div>
        </div>
        <div
          className={`text-3xl sm:text-4xl font-bold mb-2 font-display transition-colors duration-300 ${metric.color}`}
        >
          {formatNumber(count)}
          {suffix}
        </div>
        <div
          className={`font-medium text-xs sm:text-sm transition-colors duration-300 text-gray-600`}
        >
          {metric.label}
        </div>
      </div>
    </motion.div>
  );
};

// Trustpilot Card Component
const TrustpilotCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // Helper to get initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatExperienceDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-[450px] flex flex-col mx-4 relative font-sans h-[400px] pointer-events-none select-none">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {testimonial.avatar ? (
            <div className="w-10 h-10 rounded-full overflow-hidden bg-green-100 relative shrink-0">
              <Image
                src={urlFor(testimonial.avatar).url()}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#166534] font-medium text-sm shrink-0">
              {getInitials(testimonial.author)}
            </div>
          )}
          <div>
            <h3 className="font-medium text-gray-900 text-sm">
              {testimonial.author}
            </h3>
            <p className="text-xs text-gray-500">
              {testimonial.role || "US • 1 review"}
            </p>
          </div>
        </div>
        <div className="text-gray-400">
          <X className="w-5 h-5" />
        </div>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 ${i < testimonial.rating ? "bg-[#00b67a]" : "bg-gray-200"} flex items-center justify-center rounded-[2px]`}
            >
              <Star className="w-4 h-4 fill-white text-white" />
            </div>
          ))}
        </div>
        <span className="text-gray-500 text-sm">
          {formatDate(testimonial.date)}
        </span>
      </div>

      {/* Content */}
      <h4 className="font-medium text-gray-900 mb-2! text-base">
        {testimonial.title}
      </h4>
      <p className="text-gray-700 text-sm leading-relaxed mb-4! line-clamp-4 overflow-hidden">
        {testimonial.quote}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {testimonial.experienceDate && (
          <span className="inline-block px-3! py-1! bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
            {formatExperienceDate(testimonial.experienceDate)}
          </span>
        )}
        <span className="inline-block px-3! py-1! bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
          Unprompted review
        </span>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
          <ThumbsUp className="w-4 h-4" />
          Useful
        </div>
        <div className="text-gray-400 ml-auto">
          <Flag className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const SocialProof = ({ data }: { data?: TestimonialsSection }) => {
  const testimonials = data?.testimonials || [];

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="w-full overflow-hidden pb-8 lg:pb-16"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12 flex flex-col items-center">
          <h2
            id="social-proof-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-tight font-display mb-4! uppercase font-semibold"
          >
            Trusted by Amazon brands that stopped guessing and started scaling.
          </h2>
          <p className="text-gray-600 text-center text-base sm:text-lg max-w-3xl mx-auto">
            Join the brands experiencing real, measurable growth with our
            data-driven strategies.
          </p>
        </div>

        {/* Testimonials Marquee - Single Row */}
        <div className="mb-16">
          <SimpleMarquee
            className="w-full"
            baseVelocity={2}
            repeat={2}
            direction="left"
            slowdownOnHover={true}
            slowDownFactor={0.2}
            draggable={true}
            dragSensitivity={0.1}
            dragAwareDirection={true}
            grabCursor={true}
          >
            {testimonials.map((testimonial) => (
              <TrustpilotCard
                key={testimonial._key}
                testimonial={testimonial}
              />
            ))}
          </SimpleMarquee>
        </div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </motion.div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-base">
            <span className="font-bold text-gray-900">50+ brands</span> scaling
            with Merxpert&apos;s Brand Conversion System™
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
