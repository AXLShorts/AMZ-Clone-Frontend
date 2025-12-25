"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  type LucideIcon
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import { ServicePage } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

interface AEBCContentClientProps {
  data: ServicePage | null;
}

export default function AEBCContentClient({ data }: AEBCContentClientProps) {
  if (!data) return null;

  let ebcMarqueeImages = data.marqueeImages?.map(img => urlFor(img).url()) || [];
  if (ebcMarqueeImages.length < 5) {
    ebcMarqueeImages = [...ebcMarqueeImages, ...ebcMarqueeImages, ...ebcMarqueeImages];
  }

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
                {data.hero.tagline || "Brand Content"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-6!"
            >
              {data.hero.title}{" "}
              <span className="text-brand-accent">{data.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-6!"
            >
              {data.hero.description}
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
        stats={data.stats || []}
      />

      {/* EBC Marquee Gallery */}
      {ebcMarqueeImages.length > 0 && (
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
      )}

      {data.features && (
        <ServiceFeatures
          heading={data.features.heading}
          headingHighlight={data.features.headingHighlight}
          subheading={data.features.subheading}
          columns={3}
          features={data.features.featureList?.map(f => {
            const IconComponent = (f.icon && (LucideIcons as unknown as Record<string, LucideIcon>)[f.icon]) || LucideIcons.HelpCircle;
            return {
              icon: IconComponent,
              title: f.title,
              description: f.description
            };
          }) || []}
        />
      )}

      {data.contentBlock && (
        <ServiceContentBlock
          heading={data.contentBlock.heading}
          headingHighlight={data.contentBlock.headingHighlight}
          description={data.contentBlock.description}
          imageSrc={data.contentBlock.image ? urlFor(data.contentBlock.image).url() : ""}
          imageAlt={data.contentBlock.heading}
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
            {data.contentBlock.listItems?.map((item, index) => (
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
      )}

      {data.contentBlock2 && (
        <ServiceContentBlock
          heading={data.contentBlock2.heading}
          headingHighlight={data.contentBlock2.headingHighlight}
          description={data.contentBlock2.description}
          imageSrc={data.contentBlock2.image ? urlFor(data.contentBlock2.image).url() : ""}
          imageAlt={data.contentBlock2.heading}
          imagePosition="right"
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock2.listItems?.map((item, index) => (
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
      )}

      {data.contentBlock3 && (
        <ServiceContentBlock
          heading={data.contentBlock3.heading}
          headingHighlight={data.contentBlock3.headingHighlight}
          description={data.contentBlock3.description}
          imageSrc={data.contentBlock3.image ? urlFor(data.contentBlock3.image).url() : ""}
          imageAlt={data.contentBlock3.heading}
          imagePosition="left"
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock3.listItems?.map((item, index) => (
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
      )}

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
