"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Target, Zap, TrendingUp } from "lucide-react";



export default function FullListingOptimizationPage() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative w-full bg-brand-dark text-white -mt-20 pt-32 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/service-assets/Full-Listing-Optimization/Amazon.jpg"
            alt="Amazon SEO Optimization"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-dark via-brand-dark/10 to-brand-dark"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2.5 bg-brand-primary/20 rounded-full border border-brand-primary/40 backdrop-blur-sm mb-6"
            >
              <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider">
                Listing Optimization
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight uppercase font-semibold"
            >
              Maximize conversions with listings engineered to win
              <span className="text-brand-accent relative inline-block">
                on Amazon and beyond
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              An end-to-end listing overhaul that combines buyer-intent keyword intelligence, conversion-focused copy, high-impact A+ modules, and backend optimization to improve rank and boost sales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link
                href="/audit"
                className="group w-full sm:w-auto py-4 px-10 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto py-4 px-10 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm"
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
                Every word, every image, every keyword—
                <span className="text-brand-primary"> strategically optimized</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The listing is your product storefront — we sharpen titles, bullets, images and backend fields so your listing finds shoppers and converts them into loyal customers.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Buyer-intent keyword research & gap analysis",
                  "Conversion-first product copy and optimized bullets",
                  "A+ Content & photography strategy for higher conversion",
                  "Backend search term optimization & indexing",
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
      <section id="how-it-works" className="w-[96%] mx-auto bg-brand-dark rounded-[20px] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4! uppercase">
              What you <span className="text-brand-accent">actually get</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto!">
              A complete listing transformation in 3-5 days
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Keyword Research & Mapping",
                description: "Pinpoint buyer-intent keywords and map them to title, bullets, and backend fields for maximum visibility."
              },
              {
                icon: Zap,
                title: "Conversion Copywriting",
                description: "High-conversion titles, bullets and backend copy tailored to your category and shoppers."
              },
              {
                icon: TrendingUp,
                title: "Backend Search Term Optimization",
                description: "Optimize backend keyword fields, indexing and hidden attributes to improve discoverability."
              },
              {
                icon: Target,
                title: "A+ Modules & Visual Strategy",
                description: "Design and structure A+ content for storytelling, trust-building and higher click-to-conversion."
              },
              {
                icon: Zap,
                title: "Listing Competitor Benchmark",
                description: "Deep competitive audit with direct, prioritized actions to close gaps and outperform rivals."
              },
              {
                icon: TrendingUp,
                title: "Listing Health & Conversion Tracking",
                description: "Real-time rank and conversion monitoring with clear next steps to maintain momentum."
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
                Design, copy, and data—
                <span className="text-brand-primary"> tuned to convert</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                We pair high-impact visuals with buyer-focused messaging and a testing framework so your listing not only ranks—it converts shoppers into customers. From photography direction to A+ module sequencing and backend indexing, every change is driven by measurable lift.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "A+ module blueprints + photography briefs to boost engagement",
                  "Split-tested titles & bullets for measurable conversion lift",
                  "Image optimization & A/B layouts for higher click-through rates",
                  "Backend attribute mapping & indexing for long-term discoverability",
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
                Our proven 5-step listing program focuses on speed and measurable growth — typical gains in 14–21 days
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {[
                { number: "01", title: "Strategy Call", description: "Identify target keywords and campaign goals" },
                { number: "02", title: "Market Analysis", description: "Analyze competition and ranking opportunities" },
                { number: "03", title: "Optimized Content", description: "Update title, bullets, images and A+ to reflect keyword priorities" },
                { number: "04", title: "Performance Monitoring", description: "Daily rank & conversion checks with rapid iteration" },
                { number: "05", title: "Ongoing Wins", description: "Sustained visibility and conversion improvements" },
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
                    <div className="text-5xl font-bold text-brand-accent mb-3">{step.number}</div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2! line-clamp-2 min-h-14">{step.title}</h3>
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
