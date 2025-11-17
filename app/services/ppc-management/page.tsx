"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingDown, DollarSign, BarChart3, Zap } from "lucide-react";

export default function PPCManagementPage() {
  return (
    <main>
      {/* Hero Section - Video Style with Overlay */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/service-assets/PPC-Management/Amazon advertising management.jpg"
            alt="Amazon PPC Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                PPC Advertising
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-4!"
            >
              Lower your ACOS.{" "}
              <span className="text-brand-accent">Scale profitably.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-4!"
            >
              Expert PPC management across Sponsored Products, Brands, Display, and Video—optimized daily for maximum ROAS.
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
                Get Free PPC Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="w-full bg-brand-dark text-white py-12 mb-16 lg:mb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "$1.5M+", label: "Monthly Ad Spend Managed" },
              { value: "40%", label: "Avg TACOS Reduction" },
              { value: "3.5x", label: "Average ROAS" },
              { value: "250+", label: "Active Campaigns" },
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

      {/* Image Right + Text Left */}
      <section className="w-full mb-16 lg:mb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4!">
                We don&apos;t just manage campaigns—
                <span className="text-brand-primary"> we engineer profitability</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                Most agencies set up campaigns and hope for the best. We use advanced bid automation, real-time analytics, and daily optimization to steadily lower your ACOS while scaling sales.
              </p>

              <div className="bg-gray-50 border-l-4 border-brand-accent p-6 rounded-r-xl">
                <p className="text-gray-700 italic">
                  &quot;After switching to Merxpert, our ACOS dropped from 42% to 18% in just 60 days—while sales increased 2.3x.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2!">— Electronics Brand, $2.1M annual revenue</p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/PPC-Management/2 Amazon Advertising Management.jpg"
                  alt="Amazon advertising dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Manage - Grid Section */}
      <section className="w-full mb-16 lg:mb-24">
        <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4! uppercase">
              Complete <span className="text-brand-accent">PPC coverage</span>
            </h2>
            <p className="text-xl text-gray-200">
              All ad formats, one expert team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {[
              {
                icon: TrendingDown,
                title: "Sponsored Products",
                description: "Auto and manual campaigns optimized for maximum profitability. Strategic negative keyword management to eliminate wasted spend.",
              },
              {
                icon: DollarSign,
                title: "Sponsored Brands",
                description: "Drive brand awareness and traffic with headline and video ads. Custom creative testing to identify winning combinations.",
              },
              {
                icon: BarChart3,
                title: "Sponsored Display",
                description: "Retarget shoppers and conquer competitor product pages. Audience targeting to reach high-intent customers.",
              },
              {
                icon: Zap,
                title: "Sponsored Video",
                description: "Capture attention with engaging video advertisements. Full creative production and A/B testing included.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-brand-accent mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3!">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full mb-16 lg:mb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-1 order-2"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/PPC-Management/Amazon advertising management.jpg"
                  alt="Real-time PPC analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-2 order-1"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
                Real-time dashboards.{" "}
                <span className="text-brand-primary">Complete transparency.</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                Unlike agencies that send monthly PDFs, you get 24/7 access to live performance data. See exactly where every dollar goes and the returns it generates.
              </p>

              <div className="space-y-4">
                {[
                  "Live ACOS, TACOS, and ROAS tracking",
                  "Keyword-level performance breakdowns",
                  "Competitor spend analysis and positioning",
                  "Custom alerts for budget or performance changes",
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

      {/* Text Left + Image Right - Campaign Optimization */}
      <section className="w-full mb-16 lg:mb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
                Daily optimization—
                <span className="text-brand-primary"> not quarterly reviews</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                Your campaigns are continuously monitored and refined. We adjust bids, pause underperformers, test new keywords, and scale winners in real-time—not once every three months.
              </p>

              <div className="space-y-4">
                {[
                  "Daily bid optimization across all campaign types",
                  "Continuous A/B testing of ad copy and creatives",
                  "Weekly negative keyword pruning and expansion",
                  "Real-time budget allocation to top performers",
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/PPC-Management/1 Header Section.jpg"
                  alt="PPC campaign optimization"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Left + Text Right - Performance Tracking */}
      <section className="w-full mb-16 lg:mb-24 bg-white">
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
                  src="/assets/service-assets/PPC-Management/2 PPC.jpg"
                  alt="PPC performance metrics"
                  fill
                  className="object-cover"
                />
              </div>
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
                Data-driven decisions—
                <span className="text-brand-primary"> every single day</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                We analyze keyword performance, competitor activity, seasonal trends, and market opportunities to inform every decision. Your campaigns evolve based on what&apos;s actually working, not assumptions.
              </p>

              <div className="space-y-4">
                {[
                  "Granular ACOS and ROAS tracking per campaign",
                  "Competitor spend monitoring and benchmarking",
                  "Seasonal demand forecasting and scaling",
                  "Attribution analysis across all ad types",
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
                Getting started is <span className="text-brand-accent">simple</span>
              </h2>
              <p className="text-xl text-gray-700">
                Launch optimized PPC campaigns in 5 easy steps
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {[
                { number: "01", title: "Free PPC Audit", description: "Analyze your current campaigns for inefficiencies and opportunities" },
                { number: "02", title: "Strategy & Goals", description: "Define target ACOS, sales goals, and campaign structure" },
                { number: "03", title: "Campaign Launch", description: "Build and deploy optimized campaigns across all ad types" },
                { number: "04", title: "Initial Optimization", description: "First 30 days of aggressive testing and keyword refinement" },
                { number: "05", title: "Scale & Maintain", description: "Ongoing management and continuous ROAS improvement" },
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
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
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
