"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageShowcaseProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  heading?: string;
  subheading?: string;
  layout?: "grid" | "masonry" | "split";
}

export default function ImageShowcase({
  images,
  heading,
  subheading,
  layout = "grid",
}: ImageShowcaseProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {heading && (
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
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

        {layout === "grid" && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-4/3 bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {layout === "split" && images.length >= 2 && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-3/4 bg-gray-100">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-8">
              {images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative aspect-video bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {layout === "masonry" && (
          <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative w-full aspect-auto bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
