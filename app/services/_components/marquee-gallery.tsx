"use client";

import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  heading?: string;
  subheading?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function MarqueeGallery({
  images,
  heading,
  subheading,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: MarqueeGalleryProps) {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        {heading && (
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
              {heading}
            </h2>
            {subheading && (
              <p className="text-lg sm:text-xl text-gray-600">{subheading}</p>
            )}
          </motion.div>
        )}
      </div>

      <Marquee className="py-8">
        <MarqueeContent
          speed={speed}
          direction={direction}
          pauseOnHover={pauseOnHover}
        >
          {images.map((image, index) => (
            <MarqueeItem key={index} className="mx-6">
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </section>
  );
}
