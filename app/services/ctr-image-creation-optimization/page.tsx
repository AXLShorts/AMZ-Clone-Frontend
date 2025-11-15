"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer, Eye, TrendingUp, Target, Image as ImageIcon, Zap } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export default function CTROptimizationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-linear-to-br from-orange-900 via-brand-dark to-brand-dark">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6 py-2.5 bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6 text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Visual Optimization
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase"
            >
              Images that{" "}
              <span className="text-brand-accent">stop the scroll</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200"
            >
              Stand out in crowded search results with strategically optimized main images. Boost click-through rates by 30%+ with data-driven design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/audit"
                className="group inline-flex items-center gap-2 py-4 px-10 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get CTR Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-4 uppercase">
              <span className="text-brand-accent">Before & After</span> transformations
            </h2>
            <p className="text-xl text-gray-700">
              See real examples of CTR-optimized images that drive clicks
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/assets/homepage/portfolio/product-image1.png"
              afterImage="/assets/homepage/portfolio/product-image2.png"
            />
            <p className="text-center mt-6 text-lg text-gray-600 font-semibold">
              Result: <span className="text-brand-accent">+45% CTR increase</span> in first 30 days
            </p>
          </div>
        </div>
      </section>

      {/* Dark Features */}
      <section className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 uppercase">
                Data-driven <span className="text-brand-accent">image optimization</span>
              </h2>
              <p className="text-xl text-gray-300">
                Every design decision backed by CTR testing data
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Eye, title: "Strategic Design", description: "Visual hierarchy optimized to grab attention in crowded search results." },
                { icon: Target, title: "Competitor Analysis", description: "Study top performers and design images that stand out from the crowd." },
                { icon: ImageIcon, title: "Text Overlays", description: "Strategic use of text, badges, and callouts within Amazon guidelines." },
                { icon: Zap, title: "Detail Optimization", description: "Highlight key features and benefits that drive purchase decisions." },
                { icon: MousePointer, title: "Mobile Preview", description: "Ensure images work perfectly on mobile where most shoppers browse." },
                { icon: TrendingUp, title: "TOS Compliance", description: "Full Amazon compliance guaranteed on all image optimizations." },
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

      {/* Stats */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "30%+", label: "Avg CTR Improvement" },
              { value: "3000+", label: "Images Optimized" },
              { value: "48 Hours", label: "Turnaround Time" },
              { value: "100%", label: "TOS Compliant" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-brand-accent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 lg:py-28 bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase">
              Stop losing clicks to{" "}
              <span className="text-brand-accent">boring images</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get your CTR analysis and see how your images stack up
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 py-5 px-12 bg-brand-accent text-white rounded-full font-bold hover:bg-brand-accent/90 transition-all duration-300 text-xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free CTR Analysis
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
