"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Target, Zap, TrendingUp } from "lucide-react";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

export default function FullListingOptimizationPage() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-[linear-gradient(155deg,var(--brand-dark)_0%,var(--brand-primary)_60%,var(--brand-dark)_100%)]">

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Listing Optimization
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-6!"
            >
              From Click to Sale:{" "}
              <span className="text-brand-accent">
                Listings That Actually Sell
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-6!"
            >
              Data-backed keyword strategy, conversion-optimized copy, and
              performance-focused A+ modules designed to lift organic rank and
              increase revenue across your catalog.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/audit"
                className="group py-4 px-10 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="group py-4 px-10 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm flex items-center justify-center gap-2"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceStats
        stats={[
          { value: "500K+", label: "Optimized Listings" },
          { value: "14–21 Days", label: "Typical Time to Page 1" },
          { value: "3-5x", label: "Sales Growth" },
          { value: "98%", label: "Success Rate" },
        ]}
      />

      <ServiceContentBlock
        heading="Precision‑Optimized Listings—"
        headingHighlight="Built to Rank and Convert"
        description="Your Amazon listing is your most important sales asset. MerXpert engineer every element, from keywords to creatives to maximize visibility, boost click‑through rate, and increase conversions."
        imageSrc="/assets/service-assets/Full-Listing-Optimization/4 Design.jpg"
        imageAlt="Professional listing design"
        imagePosition="left"
        imageOverlay={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-xl shadow-2xl"
          >
            <div className="text-4xl font-bold text-brand-accent">29%</div>
            <div className="text-sm text-gray-300">Avg Conversion Lift</div>
          </motion.div>
        }
      >
        <div className="space-y-4 pt-4">
          {[
            "Data-backed keyword intelligence + competitor gap mapping",
            "Persuasion-driven copywriting that elevates clarity and desire",
            "Strategic A+ Content + visual guidelines proven to increase CVR",
            "Backend indexing architecture to improve organic ranking",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </ServiceContentBlock>

      <ServiceFeatures
        heading="What You Get:"
        headingHighlight="A Data-Engineered Listing Built to Win"
        subheading="A complete, data-driven listing rebuild — delivered in 3–5 days for maximum visibility and conversions."
        columns={3}
        features={[
          {
            icon: Target,
            title: "Buyer-Intent Keyword Intelligence",
            description:
              "Advanced keyword clustering + competitor gap detection to ensure every term is mapped for maximum ranking power.",
          },
          {
            icon: Zap,
            title: "Conversion-Engineered Copywriting",
            description:
              "Persuasion-driven titles, bullets, and backend copy built to increase clarity, trust, and purchase intent.",
          },
          {
            icon: TrendingUp,
            title: "Backend Indexing Architecture",
            description:
              "Full optimization of hidden keywords, attributes, and search term fields to expand organic reach.",
          },
          {
            icon: Target,
            title: "A+ Content Strategy & Visual Blueprint",
            description:
              "High-performance A+ framework designed around storytelling, benefits clarity, and conversion psychology.",
          },
          {
            icon: Zap,
            title: "Competitor Performance Breakdown",
            description:
              "Actionable competitive analysis with direct steps to outperform category leaders.",
          },
          {
            icon: TrendingUp,
            title: "Ongoing Listing Health Monitoring",
            description:
              "Tracking for ranking, clicks, and conversion shifts, plus recommended next actions to maintain momentum.",
          },
        ]}
      />

      <ServiceContentBlock
        heading="Creative + Copy + Data ="
        headingHighlight="Conversion Power"
        description="Your listing’s visuals, messaging, and backend structure are engineered together for maximum conversion impact."
        imageSrc="/assets/service-assets/Full-Listing-Optimization/Amazon.jpg"
        imageAlt="Professional listing design"
        imagePosition="right"
        imageOverlay={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-brand-dark text-white p-6 rounded-xl shadow-2xl"
          >
            <div className="text-4xl font-bold text-brand-accent">29%</div>
            <div className="text-sm text-gray-300">Avg Conversion Lift</div>
          </motion.div>
        }
      >
        <div className="space-y-4 pt-4">
          {[
            "High-performance A+ frameworks + image briefs designed for engagement",
            "A/B-tested titles & bullets built to increase conversion rates",
            "Image sequencing & layout tactics proven to raise CTR",
            "Backend indexing architecture that strengthens long-term organic rank",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </ServiceContentBlock>

      <ServiceProcess
        heading="Fast-track to"
        headingHighlight="page 1"
        subheading="MerXpert 5‑step data driver system designed to deliver ranking momentum in as little as 14–21 days."
        steps={[
          {
            number: "01",
            title: "Strategic Call",
            description:
              "Align goals, define opportunities, and lock target keyword clusters.",
          },
          {
            number: "02",
            title: "Market Analysis",
            description:
              "Deep competitor + ranking gap analysis to set a winning path.",
          },
          {
            number: "03",
            title: "Conversion-Optimized Content",
            description:
              "Full optimization of titles, bullets, images, and A+ built around ranking signals.",
          },
          {
            number: "04",
            title: "Performance Monitoring",
            description:
              "Daily monitoring with rapid iteration to push keywords upward.",
          },
          {
            number: "05",
            title: "Sustained Growth Engine",
            description:
              "Long-term visibility and conversion improvements that compound over time.",
          },
        ]}
      />
    </main>
  );
}
