"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Target, Zap, TrendingUp } from "lucide-react";

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

      {/* Stats Banner */}
      <section className="w-full bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "500K+", label: "Optimized Listings" },
              { value: "14–21 Days", label: "Typical Time to Page 1" },
              { value: "3-5x", label: "Sales Growth" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
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

      {/* Image + Text Split Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/Full-Listing-Optimization/4 Design.jpg"
                  alt="Professional listing design"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
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
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
                Precision‑Optimized Listings—
                <span className="text-brand-primary">
                  {" "}
                  Built to Rank and Convert
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your Amazon listing is your most important sales asset. MerXpert
                engineer every element, from keywords to creatives to maximize
                visibility, boost click‑through rate, and increase conversions.
              </p>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get - Dark Section */}
      <section
        id="how-it-works"
        className="w-[96%] mx-auto bg-brand-dark rounded-[20px] text-white py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4! uppercase">
              What You Get:{" "}
              <span className="text-brand-accent">
                A Data-Engineered Listing Built to Win
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto!">
              A complete, data-driven listing rebuild — delivered in 3–5 days
              for maximum visibility and conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-brand-accent mb-4" />
                <h3 className="text-xl font-bold mb-3!">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text Split Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
                Creative + Copy + Data =
                <span className="text-brand-primary"> Conversion Power</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your listing’s visuals, messaging, and backend structure are
                engineered together for maximum conversion impact.
              </p>

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
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/Full-Listing-Optimization/Amazon.jpg"
                  alt="Professional listing design"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Text Top + Visual Bottom */}
      <section className="w-full pb-16 lg:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Top - Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark uppercase">
                Fast-track to <span className="text-brand-accent">page 1</span>
              </h2>
              <p className="text-xl text-gray-700">
                MerXpert 5‑step data driver system designed to deliver ranking
                momentum in as little as 14–21 days.
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {[
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
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 h-full">
                    <div className="text-5xl font-bold text-brand-accent mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2! line-clamp-2 min-h-14">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-brand-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
