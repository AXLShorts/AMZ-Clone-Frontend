/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Store,
  Palette,
  ShoppingBag,
  Sparkles,
  Users,
  Layout,
} from "lucide-react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

export default function BrandStorefrontsPage() {
  const storefrontMarqueeImages = [
    "/assets/service-assets/Brand-Storefront/1.jpg",
    "/assets/service-assets/Brand-Storefront/2.jpg",
    "/assets/service-assets/Brand-Storefront/3.jpg",
    "/assets/service-assets/Brand-Storefront/4.jpg",
    "/assets/service-assets/Brand-Storefront/5.jpg",
    "/assets/service-assets/Brand-Storefront/6.jpg",
    "/assets/service-assets/Brand-Storefront/7.jpg",
    "/assets/service-assets/Brand-Storefront/1.jpg",
    "/assets/service-assets/Brand-Storefront/2.jpg",
    "/assets/service-assets/Brand-Storefront/3.jpg",
    "/assets/service-assets/Brand-Storefront/4.jpg",
    "/assets/service-assets/Brand-Storefront/5.jpg",
    "/assets/service-assets/Brand-Storefront/6.jpg",
    "/assets/service-assets/Brand-Storefront/7.jpg",
  ];

  return (
    <main>
      {/* Hero Section - Gradient Background */}
      <section className="relative w-full h-[600px] lg:h-[700px] -mt-20 pt-20 overflow-hidden bg-linear-to-br from-brand-primary via-brand-dark to-brand-dark">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-3xl space-y-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6! py-2.5! bg-brand-accent/20 rounded-full border border-brand-accent/40 backdrop-blur-sm mb-6! text-brand-accent text-sm font-semibold uppercase tracking-wider">
                Brand Building
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-6!"
            >
              Your brand&apos;s{" "}
              <span className="text-brand-accent">premium destination</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-6!"
            >
              Build a stunning Amazon Storefront that showcases your full
              product line, tells your brand story, and drives cross-selling
              opportunities.
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
                Get Storefront Design
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

      {/* Storefront Marquee Gallery */}
      <section className="w-full mb-16 lg:mb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-4! uppercase">
              Stunning{" "}
              <span className="text-brand-accent">brand storefronts</span>
            </h2>
            <p className="text-xl text-gray-700">
              Create an immersive shopping experience that builds loyalty
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
            {storefrontMarqueeImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[500px] w-auto mx-4 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 select-none"
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              >
                <img
                  src={image}
                  alt={`Brand Storefront Example ${index + 1}`}
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

      {/* Storefront Showcase - Image Left + Text Right (FROM EBC SECTION 4) */}
      <section className="w-full">
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
                  src="/assets/service-assets/Brand-Storefront/2.png"
                  alt="Professional brand storefront design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-xl shadow-2xl"
              >
                <div className="text-3xl font-bold">25%</div>
                <div className="text-sm">Traffic Boost</div>
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
                Your brand&apos;s headquarters—
                <span className="text-brand-primary"> on Amazon</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your Amazon Storefront isn&apos;t just a product gallery.
                It&apos;s your brand&apos;s premium destination that tells your
                complete story, showcases your full catalog, and creates an
                immersive shopping experience.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Multi-page navigation for organized product discovery",
                  "Shoppable hero images and lifestyle content",
                  "Strategic cross-selling and product bundling",
                  "Mobile-first design for 70%+ of shoppers",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full shrink-0 mt-1">
                      <Store className="w-4 h-4 text-white" strokeWidth={3} />
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
                  Start Building Your Storefront
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Rounded Features Section (FROM EBC SECTION 2) */}
      <section className="w-full pt-16 lg:pt-24">
        <div className="w-[96%] mx-auto bg-brand-dark rounded-[20px] py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 uppercase">
                Complete{" "}
                <span className="text-brand-accent">Storefront Solution</span>
              </h2>
              <p className="text-xl text-gray-300">
                From strategy to launch—everything you need for a premium brand
                presence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Palette,
                  title: "Custom Design",
                  description:
                    "Unique layouts tailored to your brand identity and product mix for maximum impact.",
                },
                {
                  icon: Layout,
                  title: "Multi-Page Architecture",
                  description:
                    "Organized navigation with category pages, collections, and brand story sections.",
                },
                {
                  icon: Sparkles,
                  title: "Visual Storytelling",
                  description:
                    "High-quality images, videos, and hero banners that showcase your brand narrative.",
                },
                {
                  icon: ShoppingBag,
                  title: "Shoppable Content",
                  description:
                    "Strategic product placement, cross-sells, and bundling opportunities built-in.",
                },
                {
                  icon: Users,
                  title: "Customer Journey Design",
                  description:
                    "Guide visitors through a strategic experience from discovery to purchase.",
                },
                {
                  icon: Store,
                  title: "Brand Compliance",
                  description:
                    "100% Amazon guidelines compliant with SEO optimization and performance tracking.",
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
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Storefront Journey Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-brand-dark mb-4! uppercase">
              The Storefront{" "}
              <span className="text-brand-primary">Advantage</span>
            </h2>
            <p className="text-xl text-gray-700">
              Why leading brands invest in premium Amazon Storefronts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                emoji: "🎯",
                title: "Own Your Brand Space",
                description:
                  "Create a dedicated destination where you control the entire customer experience without competitor distractions.",
              },
              {
                emoji: "📈",
                title: "Drive Discovery",
                description:
                  "Showcase your full product catalog with strategic organization that encourages exploration and cross-category shopping.",
              },
              {
                emoji: "💎",
                title: "Premium Positioning",
                description:
                  "Elevate brand perception with professional design that matches your off-Amazon presence and builds trust.",
              },
              {
                emoji: "🔗",
                title: "External Traffic Ready",
                description:
                  "Use your custom Amazon URL in ads, social media, and marketing to drive qualified traffic directly to your brand.",
              },
              {
                emoji: "📊",
                title: "Performance Insights",
                description:
                  "Access exclusive storefront analytics to understand visitor behavior and optimize your brand strategy.",
              },
              {
                emoji: "🚀",
                title: "Launch Platform",
                description:
                  "Perfect for new product launches, seasonal campaigns, and building long-term brand loyalty on Amazon.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
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
                Launch your{" "}
                <span className="text-brand-accent">storefront</span>
              </h2>
              <p className="text-xl text-gray-700">
                From concept to live storefront in 4 strategic steps
              </p>
            </motion.div>

            {/* Bottom - Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  number: "01",
                  title: "Brand Discovery",
                  description:
                    "Understand your brand identity, products, and strategic goals",
                },
                {
                  number: "02",
                  title: "Storefront Strategy",
                  description:
                    "Plan page architecture, product organization, and customer journey",
                },
                {
                  number: "03",
                  title: "Design & Build",
                  description:
                    "Create custom design, integrate assets, and optimize for mobile",
                },
                {
                  number: "04",
                  title: "Launch & Optimize",
                  description:
                    "Go live, gather analytics, and continuously improve",
                },
                {
                  number: "05",
                  title: "Growth & Scale",
                  description:
                    "Leverage storefront for campaigns, launches, and cross-selling",
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
