"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Users, BarChart, Shield, Headphones, Package, Star } from "lucide-react";

export default function AccountManagementPage() {
  return (
    <main>
      {/* Hero Section - Full Background */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/service-assets/Account-Management/5 Amazon Platform Management.jpg"
            alt="Full Service Amazon Account Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70"></div>
        </div>

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

      {/* Text Top + Image Bottom */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Top - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-4!">
                Stop wearing{" "}
                <span className="text-brand-primary">10 different hats</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Running an Amazon business means juggling advertising, inventory, customer service, optimization, compliance, and more. Most sellers burn out trying to do it all. We take the entire operation off your hands.
              </p>

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
            </motion.div>

            {/* Bottom - Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-5xl mx-auto"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/assets/service-assets/Account-Management/1 Full Service Account Management.jpg"
                  alt="Amazon platform management dashboard"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Rounded Section - What We Handle */}
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
                Everything <span className="text-brand-accent">managed for you</span>
              </h2>
              <p className="text-xl text-gray-300">
                Your dedicated team handles every aspect of your Amazon business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
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

      {/* Image Left + Text Right - Reporting */}
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
                  src="/assets/service-assets/Account-Management/7 Reporting.jpg"
                  alt="Monthly reporting and analytics"
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
                Complete transparency.{" "}
                <span className="text-brand-primary">No surprises.</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-3!">
                Get real-time access to your account dashboard plus monthly strategy sessions with your dedicated account manager. You&apos;re always in the loop.
              </p>

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
                We take over your Amazon operations in just 5 steps
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {[
                { number: "01", title: "Consultation Call", description: "Understand your business goals and current challenges" },
                { number: "02", title: "Account Audit", description: "Complete analysis of listings, PPC, inventory, and performance" },
                { number: "03", title: "Strategy Development", description: "Create customized roadmap for growth and optimization" },
                { number: "04", title: "Full Takeover", description: "Transition all account access and implement strategies" },
                { number: "05", title: "Monthly Growth", description: "Ongoing management, reporting, and continuous optimization" },
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
