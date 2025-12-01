"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, TrendingUp, DollarSign, Award, Quote } from "lucide-react";
import { motion, Easing, useInView } from "framer-motion";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

const testimonials = [
  {
    id: 1,
    quote:
      "After the audit, our CTR doubled and sales jumped 28% in 45 days. Worth every penny.",
    author: "Sarah Johnson",
    role: "DTC Owner, Pet Supplies",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote:
      "Merxpert rebuilt our brand store and listings. 32% revenue growth. Game-changer.",
    author: "Michael Chen",
    role: "Private Label Founder",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 3,
    quote:
      "The conversion audit revealed issues we never knew existed. Fixed them and saw immediate results.",
    author: "Emily Rodriguez",
    role: "E-commerce Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    quote:
      "Professional, data-driven, and results-oriented. Best investment we made for our Amazon business.",
    author: "David Thompson",
    role: "Brand Owner, Home & Kitchen",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 5,
    quote:
      "Their attention to detail in A+ Content design helped us stand out. Conversion rate up 45%.",
    author: "Jessica Lee",
    role: "Marketing Director",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 6,
    quote:
      "From listing optimization to brand strategy, they deliver. ROI speaks for itself.",
    author: "Marcus Williams",
    role: "CEO, Health & Wellness",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 7,
    quote:
      "Best agency we've worked with. Clear communication, measurable results, honest pricing.",
    author: "Amanda Foster",
    role: "Operations Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 8,
    quote:
      "They transformed our struggling listings into top performers. Sales tripled in 3 months.",
    author: "Robert Kim",
    role: "Brand Founder",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 9,
    quote:
      "The team's expertise in Amazon's algorithm is unmatched. Our visibility skyrocketed.",
    author: "Lisa Martinez",
    role: "Growth Lead",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=16",
  },
];

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
            className={`w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 ${metric.color.replace('text-', 'border-')}`}
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

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-[300px] h-80 flex flex-col group mx-2 sm:mx-3">
      {/* Quote Icon */}
      <div className="mb-3">
        <Quote className="w-8 h-8 text-orange-500 opacity-50" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote - fixed height with overflow handling */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 h-[120px] overflow-hidden">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author - always at the same position */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-auto">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500 ring-offset-2">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.author} avatar`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="min-w-0">
          <p className="font-bold text-gray-900 text-sm truncate">
            {testimonial.author}
          </p>
          <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const SocialProof = () => {
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
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
