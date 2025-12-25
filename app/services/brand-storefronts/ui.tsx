"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Store, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ServicePage } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import ServiceStats from "../_components/service-stats";
import ServiceContentBlock from "../_components/service-content-block";
import ServiceFeatures from "../_components/service-features";
import ServiceProcess from "../_components/service-process";
import ServiceBenefits from "../_components/service-benefits";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

interface BrandStorefrontsClientProps {
  data: ServicePage | null;
}

export default function BrandStorefrontsClient({ data }: BrandStorefrontsClientProps) {
  if (!data) return null;

  let marqueeImages = data.marqueeImages?.map(img => urlFor(img).url()) || [];
  if (marqueeImages.length < 10) {
    marqueeImages = [...marqueeImages, ...marqueeImages, ...marqueeImages];
  }

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
                {data.hero.tagline || "Brand Storefronts"}
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
        stats={data.stats || []}
      />

      {/* Storefront Marquee Gallery */}
      {marqueeImages.length > 0 && (
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
              {marqueeImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[500px] w-auto mx-4 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 select-none"
                  style={{ userSelect: "none", WebkitUserSelect: "none" }}
                >
                  <Image
                    src={image}
                    alt={`Brand Storefront Example ${index + 1}`}
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
              className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-xl shadow-2xl"
            >
              <div className="text-3xl font-bold">25%</div>
              <div className="text-sm">Traffic Boost</div>
            </motion.div>
          }
        >
          <div className="space-y-4 pt-4">
            {data.contentBlock.listItems?.map((item, index) => (
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
