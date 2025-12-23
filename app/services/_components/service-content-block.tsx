"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceContentBlockProps {
  heading: string;
  headingHighlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children?: ReactNode;
  imageOverlay?: ReactNode;
}

export default function ServiceContentBlock({
  heading,
  headingHighlight,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  children,
  imageOverlay,
}: ServiceContentBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="w-full mb-16 lg:mb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${isImageLeft ? "lg:order-2 order-1" : ""}`}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-dark mb-3!">
              {heading}
              {headingHighlight && (
                <>
                  {" "}
                  <span className="text-brand-primary">{headingHighlight}</span>
                </>
              )}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-3!">
              {description}
            </p>

            {children}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${isImageLeft ? "lg:order-1 order-2" : ""}`}
          >
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
            {imageOverlay}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
