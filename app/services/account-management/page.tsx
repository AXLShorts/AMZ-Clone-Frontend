"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Users, BarChart, Shield, Headphones, Package, Star } from "lucide-react";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";
import ServiceContentCentered from "../_components/service-content-centered";

export default function AccountManagementPage() {
  return (
    <main>
      {/* Hero Section - Full Background */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-[linear-gradient(115deg,var(--brand-dark)_0%,var(--brand-primary)_40%,var(--brand-dark)_100%)]">

        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Full Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-6!"
            >
              Your dedicated{" "}
              <span className="text-brand-accent">Amazon success team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-6!"
            >
              We run your entire Amazon operation—PPC, inventory, listings, customer service, and everything in between.
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
                Schedule Consultation
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

      <ServiceContentCentered
        heading="Stop wearing"
        headingHighlight="10 different hats"
        description="Running an Amazon business means juggling advertising, inventory, customer service, optimization, compliance, and more. Most sellers burn out trying to do it all. We take the entire operation off your hands."
        imageSrc="/assets/service-assets/Account-Management/1 Full Service Account Management.jpg"
        imageAlt="Amazon platform management dashboard"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
          {[
            { icon: BarChart, label: "PPC Management" },
            { icon: Package, label: "Inventory Planning" },
            { icon: Star, label: "Listing Optimization" },
            { icon: Headphones, label: "Customer Support" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </ServiceContentCentered>

      <ServiceFeatures
        heading="Everything"
        headingHighlight="managed for you"
        subheading="Your dedicated team handles every aspect of your Amazon business"
        columns={3}
        features={[
          {
            icon: BarChart,
            title: "Daily Performance Monitoring",
            description: "Track sales, rankings, inventory, and key metrics with daily oversight and proactive optimization.",
          },
          {
            icon: Users,
            title: "PPC Campaign Management",
            description: "Optimize advertising spend and maximize ROAS across Sponsored Products, Brands, Display, and Video.",
          },
          {
            icon: Package,
            title: "Inventory Management",
            description: "Prevent stockouts and overselling with proactive inventory planning and FBA shipment coordination.",
          },
          {
            icon: Star,
            title: "Review & Reputation Management",
            description: "Monitor reviews, respond to feedback, and protect your brand reputation with active management.",
          },
          {
            icon: Shield,
            title: "Listing Optimization",
            description: "Continuous A/B testing and optimization of titles, images, bullets, and backend keywords.",
          },
          {
            icon: Headphones,
            title: "Customer Service Support",
            description: "Handle customer inquiries, returns, and issues professionally to maintain high seller ratings.",
          },
        ]}
      />

      <ServiceContentBlock
        heading="Complete transparency."
        headingHighlight="No surprises."
        description="Get real-time access to your account dashboard plus monthly strategy sessions with your dedicated account manager. You're always in the loop."
        imageSrc="/assets/service-assets/Account-Management/7 Reporting.jpg"
        imageAlt="Monthly reporting and analytics"
        imagePosition="left"
      >
        <div className="space-y-4">
          {[
            "Live dashboard with sales, PPC, inventory metrics",
            "Weekly email updates on performance and actions taken",
            "Monthly video strategy sessions",
            "Detailed monthly reports with growth recommendations",
            "Direct Slack/email access to your account manager",
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
        subheading="We take over your Amazon operations in just 5 steps"
        steps={[
          { number: "01", title: "Consultation Call", description: "Understand your business goals and current challenges" },
          { number: "02", title: "Account Audit", description: "Complete analysis of listings, PPC, inventory, and performance" },
          { number: "03", title: "Strategy Development", description: "Create customized roadmap for growth and optimization" },
          { number: "04", title: "Full Takeover", description: "Transition all account access and implement strategies" },
          { number: "05", title: "Monthly Growth", description: "Ongoing management, reporting, and continuous optimization" },
        ]}
      />
    </main>
  );
}
