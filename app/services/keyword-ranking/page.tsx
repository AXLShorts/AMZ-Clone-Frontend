"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Search, Target, Zap, TrendingUp, BarChart2, RefreshCw } from "lucide-react";

export default function KeywordRankingPage() {
  return (
    <main>
      {/* Hero Section - Dual Image with Overlay */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/service-assets/Keyword-Ranking/3 Amazon SEO.jpg"
            alt="Amazon Keyword Ranking Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/85 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Organic Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase pb-6!"
            >
              Page 1 rankings{" "}
              <span className="text-brand-accent">in 14 days</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 pb-6!"
            >
              Our proprietary Tri-Rank Strategy combines PPC, organic tactics, and automation to rocket your products to the top of Amazon search results.
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
                Start Ranking Today
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
              { value: "500K+", label: "Products Ranked" },
              { value: "14 Days", label: "Avg Time to Page 1" },
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

      {/* The Problem - Text Left + Image Right */}
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
                Buried on page 5?{" "}
                <span className="text-brand-primary">You&apos;re invisible.</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                85% of Amazon shoppers never scroll past page 1. If you&apos;re not ranking in the top 20 for your main keywords, you&apos;re leaving massive revenue on the table.
              </p>

              <div className="space-y-4">
                {[
                  "Competitors stealing your customers with better rankings",
                  "Limited organic traffic forcing you to rely on expensive PPC",
                  "Slower sales velocity hurting your overall account health",
                  "Missing out on the compounding benefits of high organic placement",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✗</span>
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
                  src="/assets/service-assets/Keyword-Ranking/Amazon SEO.jpg"
                  alt="Amazon SEO keyword ranking analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Rounded Section - Tri-Rank System */}
      <section className="w-full mb-16 lg:mb-24">
        <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 uppercase">
                The <span className="text-brand-accent">Tri-Rank System</span>
              </h2>
              <p className="text-xl text-gray-300">
                Three synchronized strategies working together for explosive growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "Keyword Strategy",
                  description: "Target high-value keywords with proven conversion potential and realistic ranking timelines based on competition analysis.",
                },
                {
                  icon: Target,
                  title: "PPC Acceleration",
                  description: "Strategic ad campaigns to boost initial visibility and sales velocity, signaling relevance to Amazon's algorithm.",
                },
                {
                  icon: Zap,
                  title: "Automation Tools",
                  description: "Leverage chatbots and rebate systems for consistent sales momentum and sustained keyword performance.",
                },
                {
                  icon: BarChart2,
                  title: "Listing Optimization",
                  description: "Ensure your listing converts visitors driven by ranking improvements with optimized titles, images, and content.",
                },
                {
                  icon: TrendingUp,
                  title: "Daily Tracking",
                  description: "Monitor keyword positions and adjust strategy in real-time to capitalize on opportunities and prevent drops.",
                },
                {
                  icon: RefreshCw,
                  title: "Ongoing Support",
                  description: "Maintain rankings with continuous optimization and adjustments as competition and market dynamics shift.",
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
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results/Benefits Section - Image Left + Text Right */}
      <section className="w-full mb-16 lg:mb-24">
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
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/Keyword-Ranking/3 Amazon SEO.jpg"
                  alt="Keyword ranking success metrics"
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
                Dominate search results.{" "}
                <span className="text-brand-primary">Scale sustainably.</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                Higher rankings mean more visibility, more clicks, and more sales. Our ranking service puts your products in front of ready-to-buy customers searching for exactly what you sell.
              </p>

              <div className="space-y-4">
                {[
                  "Achieve page 1 rankings in 14-21 days, not months",
                  "Dominate search results for your most profitable keywords",
                  "More organic traffic = sustainable revenue growth",
                  "Daily reports showing exact ranking positions and progress",
                  "Full transparency with real-time performance dashboards",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-dark p-6 rounded-xl text-white">
                <p className="text-lg italic mb-2!">
                  &quot;Went from page 4 to position 3 on page 1 for our main keyword in just 12 days. Sales tripled.&quot;
                </p>
                <p className="text-sm text-gray-400">— Kitchen & Home Brand, $850K annual revenue</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Text Top + Visual Bottom */}
      <section className="w-full mb-16 lg:mb-24 bg-white">
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
                Our proven 5-step process delivers results in 14-21 days
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { number: "01", title: "Strategy Call", description: "Identify target keywords and campaign goals" },
                { number: "02", title: "Market Analysis", description: "Analyze competition and ranking opportunities" },
                { number: "03", title: "Campaign Setup", description: "Deploy Tri-Rank system across multiple channels" },
                { number: "04", title: "Active Monitoring", description: "Daily tracking and performance optimization" },
                { number: "05", title: "Page 1 Achievement", description: "Secure top positions and maintain momentum" },
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
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
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
