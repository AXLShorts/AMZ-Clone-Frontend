"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingDown, DollarSign, BarChart3, Zap } from "lucide-react";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

export default function PPCManagementPage() {
  return (
    <main>
      {/* Hero Section - Video Style with Overlay */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-[linear-gradient(145deg,var(--brand-dark)_0%,var(--brand-primary)_45%,var(--brand-dark)_100%)]">

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

      <ServiceStats
        stats={[
          { value: "$1.5M+", label: "Monthly Ad Spend Managed" },
          { value: "40%", label: "Avg TACOS Reduction" },
          { value: "3.5x", label: "Average ROAS" },
          { value: "250+", label: "Active Campaigns" },
        ]}
      />

      <ServiceContentBlock
        heading="We don't just manage campaigns—"
        headingHighlight="we engineer profitability"
        description="Most agencies set up campaigns and hope for the best. We use advanced bid automation, real-time analytics, and daily optimization to steadily lower your ACOS while scaling sales."
        imageSrc="/assets/service-assets/PPC-Management/2 Amazon Advertising Management.jpg"
        imageAlt="Amazon advertising dashboard"
        imagePosition="right"
      >
        <div className="bg-gray-50 border-l-4 border-brand-accent p-6 rounded-r-xl">
          <p className="text-gray-700 italic">
            &quot;After switching to Merxpert, our ACOS dropped from 42% to 18% in just 60 days—while sales increased 2.3x.&quot;
          </p>
          <p className="text-sm text-gray-600 mt-2!">— Electronics Brand, $2.1M annual revenue</p>
        </div>
      </ServiceContentBlock>

      <ServiceFeatures
        heading="Complete"
        headingHighlight="PPC coverage"
        subheading="All ad formats, one expert team"
        features={[
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
        ]}
      />

      <ServiceContentBlock
        heading="Real-time dashboards."
        headingHighlight="Complete transparency."
        description="Unlike agencies that send monthly PDFs, you get 24/7 access to live performance data. See exactly where every dollar goes and the returns it generates."
        imageSrc="/assets/service-assets/PPC-Management/Amazon advertising management.jpg"
        imageAlt="Real-time PPC analytics"
        imagePosition="left"
      >
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
      </ServiceContentBlock>

      <ServiceContentBlock
        heading="Daily optimization—"
        headingHighlight="not quarterly reviews"
        description="Your campaigns are continuously monitored and refined. We adjust bids, pause underperformers, test new keywords, and scale winners in real-time—not once every three months."
        imageSrc="/assets/service-assets/PPC-Management/1 Header Section.jpg"
        imageAlt="PPC campaign optimization"
        imagePosition="right"
      >
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
      </ServiceContentBlock>

      <ServiceContentBlock
        heading="Data-driven decisions—"
        headingHighlight="every single day"
        description="We analyze keyword performance, competitor activity, seasonal trends, and market opportunities to inform every decision. Your campaigns evolve based on what's actually working, not assumptions."
        imageSrc="/assets/service-assets/PPC-Management/2 PPC.jpg"
        imageAlt="PPC performance metrics"
        imagePosition="left"
      >
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
      </ServiceContentBlock>

      <ServiceProcess
        heading="Getting started is"
        headingHighlight="simple"
        subheading="Launch optimized PPC campaigns in 5 easy steps"
        steps={[
          { number: "01", title: "Free PPC Audit", description: "Analyze your current campaigns for inefficiencies and opportunities" },
          { number: "02", title: "Strategy & Goals", description: "Define target ACOS, sales goals, and campaign structure" },
          { number: "03", title: "Campaign Launch", description: "Build and deploy optimized campaigns across all ad types" },
          { number: "04", title: "Initial Optimization", description: "First 30 days of aggressive testing and keyword refinement" },
          { number: "05", title: "Scale & Maintain", description: "Ongoing management and continuous ROAS improvement" },
        ]}
      />
    </main>
  );
}
