"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceContentCenteredProps {
  heading: string;
  headingHighlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
}

export default function ServiceContentCentered({
  heading,
  headingHighlight,
  description,
  imageSrc,
  imageAlt,
  children,
}: ServiceContentCenteredProps) {
  return (
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
              {heading}
              {headingHighlight && (
                <>
                  {" "}
                  <span className="text-brand-primary">{headingHighlight}</span>
                </>
              )}
            </h2>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {description}
            </p>

            {children}
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
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>
  );
}
