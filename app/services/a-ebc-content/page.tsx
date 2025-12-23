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

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

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

      <ServiceStats
        stats={[
          { value: "500K+", label: "Products Ranked" },
          { value: "14 Days", label: "Avg Time to Page 1" },
          { value: "3-5x", label: "Sales Growth" },
          { value: "98%", label: "Success Rate" },
        ]}
      />

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

      <ServiceFeatures
        heading="Complete"
        headingHighlight="A+ Content Service"
        subheading="From concept to upload—we handle every aspect"
        columns={3}
        features={[
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
        ]}
      />

      <ServiceContentBlock
        heading="Complete brand storytelling—"
        headingHighlight="from scroll to sold"
        description="Your A+ Content isn't just pretty pictures. It's strategic visual selling that addresses objections, highlights benefits, and builds emotional connection with every scroll."
        imageSrc="/assets/service-assets/A+EBC-Content/1.png"
        imageAlt="Professional storefront design"
        imagePosition="left"
        imageOverlay={
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
        }
      >
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
      </ServiceContentBlock>

      <ServiceContentBlock
        heading="Proven case studies—"
        headingHighlight="results that speak"
        description="See real transformations from brands like yours. Our A+ content strategies have consistently driven double-digit conversion increases through stunning visuals and compelling storytelling."
        imageSrc="/assets/service-assets/A+EBC-Content/A +/new.png"
        imageAlt="A+ Content portfolio example showcasing results"
        imagePosition="right"
      >
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
      </ServiceContentBlock>

      <ServiceContentBlock
        heading="Modular design excellence—"
        headingHighlight="flexibility meets impact"
        description="Each module is meticulously crafted to stand alone or as part of a complete brand narrative. Our modular approach lets you tell multiple stories that build trust and drive conversions at every stage."
        imageSrc="/assets/service-assets/A+EBC-Content/3.png"
        imageAlt="Professional A+ content module design"
        imagePosition="left"
      >
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
      </ServiceContentBlock>

      <ServiceProcess
        heading="Fast-track to"
        headingHighlight="page 1"
        subheading="Our proven 5-step process delivers results in 14-21 days"
        steps={[
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
        ]}
      />
    </main>
  );
}
