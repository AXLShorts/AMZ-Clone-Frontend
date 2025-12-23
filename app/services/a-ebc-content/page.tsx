"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Camera,
  FileText,
  Upload,
  Star,
  Sparkles,
} from "lucide-react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

export default function AEBCContentPage() {
  const ebcMarqueeImages = [
    "/assets/service-assets/A+EBC-Content/A +/1.png",
    "/assets/service-assets/A+EBC-Content/A +/2.png",
    "/assets/service-assets/A+EBC-Content/A +/3.png",
    "/assets/service-assets/A+EBC-Content/A +/1.png",
    "/assets/service-assets/A+EBC-Content/A +/2.png",
    "/assets/service-assets/A+EBC-Content/A +/3.png",
    "/assets/service-assets/A+EBC-Content/A +/1.png",
    "/assets/service-assets/A+EBC-Content/A +/2.png",
    "/assets/service-assets/A+EBC-Content/A +/3.png",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-linear-to-br from-brand-dark via-brand-primary to-brand-dark">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Brand Content
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-6!"
            >
              A+ Content that{" "}
              <span className="text-brand-accent">converts 15% higher</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-6!"
            >
              Transform your product pages into visual stories that build trust,
              showcase benefits, and dramatically increase sales.
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
                Get A+ Content Quote
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

      {/* EBC Marquee Gallery */}
      <section className="w-full mb-16 lg:mb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-4! uppercase">
              Premium <span className="text-brand-primary">A+ Modules</span>
            </h2>
            <p className="text-xl text-gray-700">
              Award-winning designs that tell your brand story
            </p>
          </motion.div>
        </div>

        {/* Draggable Marquee Showcase */}
        <div className="w-full select-none">
          <SimpleMarquee
            className="py-8"
            baseVelocity={1.5}
            repeat={2}
            direction="left"
            slowdownOnHover={true}
            slowDownFactor={0.1}
            draggable={true}
            dragSensitivity={0.5}
            dragAwareDirection={true}
            grabCursor={true}
          >
            {ebcMarqueeImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[500px] w-auto mx-4 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 select-none"
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              >
                <Image
                  src={image}
                  alt={`A+ EBC Content Module ${index + 1}`}
                  height={500}
                  width={350}
                  className="object-contain select-none pointer-events-none"
                  style={{ height: "500px", width: "auto" }}
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </SimpleMarquee>
        </div>
      </section>

      {/* Dark Rounded Features Section */}
      <section className="w-full mb-16 lg:mb-24">
        <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4! uppercase">
                Complete{" "}
                <span className="text-brand-accent">A+ Content Service</span>
              </h2>
              <p className="text-xl text-gray-300">
                From concept to upload—we handle every aspect
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Palette,
                  title: "Custom Module Design",
                  description:
                    "Bespoke layouts that tell your brand story and showcase products beautifully.",
                },
                {
                  icon: Camera,
                  title: "Professional Photography",
                  description:
                    "Product and lifestyle images that highlight features and build desire.",
                },
                {
                  icon: FileText,
                  title: "Strategic Copywriting",
                  description:
                    "SEO-friendly, benefit-driven text that complements visuals perfectly.",
                },
                {
                  icon: Sparkles,
                  title: "Brand Consistency",
                  description:
                    "Designs aligned with your brand guidelines and visual identity.",
                },
                {
                  icon: Upload,
                  title: "Upload & Management",
                  description:
                    "We handle all technical aspects of uploading and managing your content.",
                },
                {
                  icon: Star,
                  title: "Unlimited Revisions",
                  description:
                    "Refine until perfect—your satisfaction is guaranteed.",
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
                  <h3 className="text-2xl font-bold text-white mb-3!">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Storefront Showcase - Image Left + Text Right */}
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
                  src="/assets/service-assets/A+EBC-Content/1.png"
                  alt="Professional storefront design"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-xl shadow-2xl"
              >
                <div className="text-3xl font-bold text-brand-accent">100%</div>
                <div className="text-sm text-gray-400">Brand Aligned</div>
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
                Complete brand storytelling—
                <span className="text-brand-primary"> from scroll to sold</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your A+ Content isn&apos;t just pretty pictures. It&apos;s
                strategic visual selling that addresses objections, highlights
                benefits, and builds emotional connection with every scroll.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "SEO-optimized copy that ranks and converts",
                  "Lifestyle imagery that creates desire",
                  "Infographics that communicate value instantly",
                  "Brand consistency across all touchpoints",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 py-3 px-8 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  See What&apos;s Possible
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section - Image Right */}
      <section className="w-full mb-16 lg:mb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
                Proven case studies—
                <span className="text-brand-primary"> results that speak</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                See real transformations from brands like yours. Our A+ content
                strategies have consistently driven double-digit conversion
                increases through stunning visuals and compelling storytelling.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "15%+ average conversion rate increase",
                  "Dramatic improvement in customer engagement",
                  "Higher average order value per customer",
                  "Sustainable long-term sales growth",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 py-3 px-8 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full aspect-10/9 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/A+EBC-Content/A +/new.png"
                  alt="A+ Content portfolio example showcasing results"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section - Image Left */}
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
              <div className="relative w-full aspect-10/9 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/service-assets/A+EBC-Content/3.png"
                  alt="Professional A+ content module design"
                  fill
                  className="object-cover"
                  loading="lazy"
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
                Modular design excellence—
                <span className="text-brand-primary">
                  {" "}
                  flexibility meets impact
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Each module is meticulously crafted to stand alone or as part of
                a complete brand narrative. Our modular approach lets you tell
                multiple stories that build trust and drive conversions at every
                stage.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Adaptable modules for any product category",
                  "Scalable designs across your entire catalog",
                  "Consistent brand voice throughout",
                  "Easy to update and maintain",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 py-3 px-8 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
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
                Fast-track to <span className="text-brand-accent">page 1</span>
              </h2>
              <p className="text-xl text-gray-700">
                Our proven 5-step process delivers results in 14-21 days
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  number: "01",
                  title: "Strategy & Audit",
                  description:
                    "Review your product page and identify conversion opportunities",
                },
                {
                  number: "02",
                  title: "Concept Development",
                  description:
                    "Design custom A+ modules that tell your brand story",
                },
                {
                  number: "03",
                  title: "Content Creation",
                  description:
                    "Professional photography, copywriting, and design execution",
                },
                {
                  number: "04",
                  title: "Revisions & Refinement",
                  description: "Unlimited iterations until it's perfect",
                },
                {
                  number: "05",
                  title: "Launch & Optimization",
                  description: "Upload content and monitor performance metrics",
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
