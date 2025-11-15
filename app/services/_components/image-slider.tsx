"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  heading?: string;
  subheading?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageSlider({
  images,
  heading,
  subheading,
  autoPlay = false,
  interval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useState(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  });

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

        <div className="max-w-5xl mx-auto">
          {/* Main Slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-contain cursor-pointer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {images[currentIndex].caption}
                </p>
              </div>
            )}

            {/* Progress Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-brand-accent shadow-lg scale-105"
                    : "ring-2 ring-transparent hover:ring-gray-300 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
