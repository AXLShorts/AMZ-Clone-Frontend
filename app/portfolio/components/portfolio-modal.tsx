"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, TrendingUp, Loader2, ImageOff } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { PortfolioItem } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";

import "swiper/css";
import "swiper/css/effect-fade";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

// Image component with loading and error states
const ModalImage: React.FC<{
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}> = ({ src, alt, fill, width, height, className, sizes, priority }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const handleError = () => {
    if (retryCount < MAX_RETRIES) {
      // Retry loading the image
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIsLoading(true);
        setHasError(false);
      }, 1000 * (retryCount + 1)); // Exponential backoff
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
        <ImageOff className="w-12 h-12 mb-2 opacity-50" />
        <p className="text-sm">Failed to load image</p>
        <p className="text-xs mt-1">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
          <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
        </div>
      )}
      <Image
        key={`${src}-${retryCount}`}
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onPrevious,
  onNext,
}) => {
  const swiperRef = useRef<any>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  const imageUrls = (item.images || []).map((img) =>
    urlFor(img).width(1200).url()
  );
  const isFallback = imageUrls.length === 0;

  return (
    <AnimatePresence>
      {/* Desktop Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm hidden md:flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button - Desktop */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Navigation Buttons - Desktop */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Content - Desktop */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-6xl w-full mx-4 flex gap-8 items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Carousel */}
          <div className="relative flex-1 bg-transparent rounded-2xl overflow-hidden">
            <div className="relative h-[70vh]">
              {!isFallback && imageUrls.length > 0 ? (
                <Swiper
                  key={item._id}
                  ref={swiperRef}
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="w-full h-full"
                >
                  {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index} className="!flex items-center justify-center">
                      <ModalImage
                        src={imageUrl}
                        alt={`${item.title} - Image ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="60vw"
                        priority={index === 0}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Fallback for empty images
                <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">No images available</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          {item.category !== 'Brand Brandstory Design' && (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 w-96 shadow-2xl max-h-[70vh] h-fit"
            >
              <div className="space-y-2">
                {/* Category Badge */}
                <div className="inline-block px-4 py-2 bg-blue-100 text-brand-primary rounded-full text-sm font-semibold">
                  {item.category}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-display text-black">{item.title}</h2>

                {/* Description */}
                {item.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Metrics */}
                {item.showMetrics && item.metricType && item.metricBefore && item.metricAfter && (
                  <div className="border-t border-gray-200 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-bold text-black">Conversion Impact</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">Before</p>
                        <p className="text-xl font-bold text-red-600">
                          {item.metricBefore}% {item.metricType}
                        </p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-1">After</p>
                        <p className="text-xl font-bold text-emerald-600">
                          {item.metricAfter}% {item.metricType}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-4!">
                    Want similar results for your Amazon listings?
                  </p>
                  <a
                    href="/audit"
                    className="block w-full text-center px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-accent transition-colors"
                  >
                    Get Your Free Audit →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto"
      >
        {/* Close Button - Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>

        {/* Content - Mobile */}
        <div className="relative min-h-screen">
          {/* Image Container with Carousel */}
          <div className="relative h-[50vh]">
            {!isFallback && imageUrls.length > 0 ? (
              <Swiper
                key={item._id}
                ref={swiperRef}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop
                className="w-full h-full"
              >
                {imageUrls.map((imageUrl, index) => (
                  <SwiperSlide key={index} className="!flex items-center justify-center">
                    <ModalImage
                      src={imageUrl}
                      alt={`${item.title} - Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Fallback for empty images
              <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-base">No images available</span>
              </div>
            )}
          </div>

          {/* Navigation Arrows - Mobile (Fixed Position) */}
          <button
            onClick={onPrevious}
            className="fixed left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-40"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={onNext}
            className="fixed right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all z-40"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Details Section - Mobile */}
          <div className="px-4 py-6 space-y-6">
            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-blue-100 text-brand-primary rounded-full text-sm font-semibold">
              {item.category}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-display text-black">{item.title}</h2>

            {/* Description */}
            {item.description && (
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            )}

            {/* Metrics */}
            {item.showMetrics && item.metricType && item.metricBefore && item.metricAfter && (
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-black">Conversion Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Before</p>
                    <p className="text-xl font-bold text-red-600">
                      {item.metricBefore}% {item.metricType}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">After</p>
                    <p className="text-xl font-bold text-emerald-600">
                      {item.metricAfter}% {item.metricType}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-gray-200 pt-6 pb-8">
              <p className="text-sm text-gray-600 mb-4!">
                Want similar results for your Amazon listings?
              </p>
              <a
                href="/audit"
                className="block w-full text-center px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-accent transition-colors"
              >
                Get Your Free Audit →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;
