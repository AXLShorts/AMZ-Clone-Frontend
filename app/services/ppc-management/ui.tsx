"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ServicePage } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";

interface PPCManagementClientProps {
  data: ServicePage | null;
}

export default function PPCManagementClient({ data }: PPCManagementClientProps) {
  if (!data) return null;

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
                {data.hero.tagline || "PPC Advertising"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-semibold uppercase mb-4!"
            >
              {data.hero.title}{" "}
              <span className="text-brand-accent">{data.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-200 mb-4!"
            >
              {data.hero.description}
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
        stats={data.stats || []}
      />

      {data.contentBlock && (
        <ServiceContentBlock
          heading={data.contentBlock.heading}
          headingHighlight={data.contentBlock.headingHighlight}
          description={data.contentBlock.description}
          imageSrc={data.contentBlock.image ? urlFor(data.contentBlock.image).url() : ""}
          imageAlt={data.contentBlock.heading}
          imagePosition="right"
        >
          {data.contentBlock.quote && (
            <div className="bg-gray-50 border-l-4 border-brand-accent p-6 rounded-r-xl">
              <p className="text-gray-700 italic">
                &quot;{data.contentBlock.quote}&quot;
              </p>
              {data.contentBlock.quoteAuthor && (
                <p className="text-sm text-gray-600 mt-2!">— {data.contentBlock.quoteAuthor}</p>
              )}
            </div>
          )}
        </ServiceContentBlock>
      )}

      {data.features && (
        <ServiceFeatures
          heading={data.features.heading}
          headingHighlight={data.features.headingHighlight}
          subheading={data.features.subheading}
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

      {data.contentBlock2 && (
        <ServiceContentBlock
          heading={data.contentBlock2.heading}
          headingHighlight={data.contentBlock2.headingHighlight}
          description={data.contentBlock2.description}
          imageSrc={data.contentBlock2.image ? urlFor(data.contentBlock2.image).url() : ""}
          imageAlt={data.contentBlock2.heading}
          imagePosition="left"
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock2.listItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
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
          imagePosition="right"
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock3.listItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </ServiceContentBlock>
      )}

      {data.contentBlock4 && (
        <ServiceContentBlock
          heading={data.contentBlock4.heading}
          headingHighlight={data.contentBlock4.headingHighlight}
          description={data.contentBlock4.description}
          imageSrc={data.contentBlock4.image ? urlFor(data.contentBlock4.image).url() : ""}
          imageAlt={data.contentBlock4.heading}
          imagePosition="left"
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock4.listItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </ServiceContentBlock>
      )}

      {data.process && (
        <ServiceProcess
          heading={data.process.heading}
          headingHighlight={data.process.headingHighlight}
          subheading={data.process.subheading}
          steps={data.process.steps}
        />
      )}
    </main>
  );
}
