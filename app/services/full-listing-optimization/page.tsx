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
              Turn browsers into buyers with{" "}
              <span className="text-brand-accent relative inline-block">
                listings that sell
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Complete listing transformation—from keyword research to A+ Content—scientifically designed to rank higher and convert better.
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
                Your listing isn&apos;t just text on a page—it&apos;s your 24/7 salesperson. We rebuild it from the ground up using conversion psychology, SEO best practices, and competitive intelligence to turn browsers into buyers.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Deep keyword research with competitor gap analysis",
                  "Conversion-focused copywriting that speaks to pain points",
                  "Strategic A+ Content modules that build trust",
                  "Backend SEO optimization for maximum visibility",
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
                description: "Identify high-converting keywords your competitors are missing with advanced market analysis."
              },
              {
                icon: Zap,
                title: "Conversion Copywriting",
                description: "Sales-focused content that speaks to customer pain points and drives action."
              },
              {
                icon: TrendingUp,
                title: "Backend SEO Optimization",
                description: "Maximize hidden search terms and backend fields for complete visibility."
              },
              {
                icon: Target,
                title: "A+ Content Strategy",
                description: "Visual storytelling modules that build trust and increase conversion rates."
              },
              {
                icon: Zap,
                title: "Competitor Intelligence",
                description: "Analyze top performers and position your product to win."
              },
              {
                icon: TrendingUp,
                title: "Performance Tracking",
                description: "Monitor rankings, conversions, and ROI with detailed analytics."
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

      {/* Text Top + Image Bottom */}
      <section className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-6!">
              The results speak for themselves
            </h2>
            <p className="text-xl text-gray-700">
              6,000+ listings optimized. 29% average conversion increase. 98% client satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/service-assets/Full-Listing-Optimization/Amazon Seo section.jpg"
                alt="SEO optimization results"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-24">
              {[
                { value: "6000+", label: "Listings Optimized" },
                { value: "29%", label: "Avg Conversion Lift" },
                { value: "3-5 days", label: "Turnaround Time" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
