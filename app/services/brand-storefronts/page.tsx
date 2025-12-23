/* eslint-disable @next/next/no-img-element */
"use client";

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

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";
import ServiceBenefits from "../_components/service-benefits";

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

      <ServiceStats
        stats={[
          { value: "500K+", label: "Products Ranked" },
          { value: "14 Days", label: "Avg Time to Page 1" },
          { value: "3-5x", label: "Sales Growth" },
          { value: "98%", label: "Success Rate" },
        ]}
      />

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

      <ServiceContentBlock
        heading="Your brand's headquarters—"
        headingHighlight="on Amazon"
        description="Your Amazon Storefront isn't just a product gallery. It's your brand's premium destination that tells your complete story, showcases your full catalog, and creates an immersive shopping experience."
        imageSrc="/assets/service-assets/Brand-Storefront/2.png"
        imageAlt="Professional brand storefront design"
        imagePosition="left"
        imageOverlay={
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
        }
      >
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
      </ServiceContentBlock>

      <ServiceFeatures
        heading="Complete"
        headingHighlight="Storefront Solution"
        subheading="From strategy to launch—everything you need for a premium brand presence"
        columns={3}
        features={[
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
        ]}
      />

      <ServiceBenefits
        heading="The Storefront"
        headingHighlight="Advantage"
        subheading="Why leading brands invest in premium Amazon Storefronts"
        columns={3}
        benefits={[
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
        ]}
      />

      <ServiceProcess
        heading="Launch your"
        headingHighlight="storefront"
        subheading="From concept to live storefront in 4 strategic steps"
        steps={[
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
        ]}
      />
    </main>
  );
}
