"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Search,
  Target,
  Zap,
  TrendingUp,
  BarChart2,
  RefreshCw,
} from "lucide-react";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

export default function KeywordRankingPage() {
  return (
    <main>
      {/* Hero Section - Dual Image with Overlay */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-[linear-gradient(125deg,var(--brand-dark)_10%,var(--brand-primary)_50%,var(--brand-dark)_90%)]">

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
              Hit Page 1 Fast:{" "}
              <span className="text-brand-accent">14-Day Ranking System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 pb-6!"
            >
              With our unique Tri-Rank system, we combine PPC, organic boosts,
              and automation to rocket your listings to page 1 on Amazon.
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

      <ServiceStats
        stats={[
          { value: "500K+", label: "Products Ranked" },
          { value: "14 Days", label: "Avg Time to Page 1" },
          { value: "3-5x", label: "Sales Growth" },
          { value: "98%", label: "Success Rate" },
        ]}
      />

      <ServiceContentBlock
        heading="Buried on page 5?"
        headingHighlight="You're invisible."
        description="85% of Amazon shoppers never scroll past page 1. If you're not ranking in the top 20 for your main keywords, you're leaving massive revenue on the table."
        imageSrc="/assets/service-assets/Keyword-Ranking/Amazon SEO.jpg"
        imageAlt="Amazon SEO keyword ranking analysis"
        imagePosition="right"
      >
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
      </ServiceContentBlock>

      <ServiceFeatures
        heading="The"
        headingHighlight="Tri-Rank System"
        subheading="Three synchronized strategies working together for explosive growth"
        columns={3}
        features={[
          {
            icon: Search,
            title: "Keyword Strategy",
            description:
              "Target high-value keywords with proven conversion potential and realistic ranking timelines based on competition analysis.",
          },
          {
            icon: Target,
            title: "PPC Acceleration",
            description:
              "Strategic ad campaigns to boost initial visibility and sales velocity, signaling relevance to Amazon's algorithm.",
          },
          {
            icon: Zap,
            title: "Automation Tools",
            description:
              "Leverage chatbots and rebate systems for consistent sales momentum and sustained keyword performance.",
          },
          {
            icon: BarChart2,
            title: "Listing Optimization",
            description:
              "Ensure your listing converts visitors driven by ranking improvements with optimized titles, images, and content.",
          },
          {
            icon: TrendingUp,
            title: "Daily Tracking",
            description:
              "Monitor keyword positions and adjust strategy in real-time to capitalize on opportunities and prevent drops.",
          },
          {
            icon: RefreshCw,
            title: "Ongoing Support",
            description:
              "Maintain rankings with continuous optimization and adjustments as competition and market dynamics shift.",
          },
        ]}
      />

      <ServiceContentBlock
        heading="Dominate search results."
        headingHighlight="Scale sustainably."
        description="Higher rankings mean more visibility, more clicks, and more sales. Our ranking service puts your products in front of ready-to-buy customers searching for exactly what you sell."
        imageSrc="/assets/service-assets/Keyword-Ranking/3 Amazon SEO.jpg"
        imageAlt="Keyword ranking success metrics"
        imagePosition="left"
      >
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

        <div className="bg-brand-dark p-6 rounded-xl text-white mt-6">
          <p className="text-lg italic mb-2!">
            &quot;Went from page 4 to position 3 on page 1 for our main keyword
            in just 12 days. Sales tripled.&quot;
          </p>
          <p className="text-sm text-gray-400">
            — Kitchen & Home Brand, $850K annual revenue
          </p>
        </div>
      </ServiceContentBlock>

      <ServiceProcess
        heading="Fast-track to"
        headingHighlight="page 1"
        subheading="Our proven 5-step process delivers results in 14-21 days"
        steps={[
          {
            number: "01",
            title: "Strategy Call",
            description: "Identify target keywords and campaign goals",
          },
          {
            number: "02",
            title: "Market Analysis",
            description: "Analyze competition and ranking opportunities",
          },
          {
            number: "03",
            title: "Campaign Setup",
            description: "Deploy Tri-Rank system across multiple channels",
          },
          {
            number: "04",
            title: "Active Monitoring",
            description: "Daily tracking and performance optimization",
          },
          {
            number: "05",
            title: "Page 1 Achievement",
            description: "Secure top positions and maintain momentum",
          },
        ]}
      />
    </main>
  );
}
