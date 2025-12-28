"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { PortfolioItem } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";
import { Loader2, ImageOff } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

interface PortfolioCardProps {
  item: PortfolioItem;
  onItemClick: (item: PortfolioItem) => void;
  index: number;
}

// Image component with loading and error states
const CardImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
}> = ({ src, alt, width, height, className, sizes, loading }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  const handleError = () => {
    if (retryCount < MAX_RETRIES) {
      // Retry loading the image with exponential backoff
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIsLoading(true);
        setHasError(false);
      }, 1000 * (retryCount + 1));
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
      <div className="w-full aspect-4/3 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <p className="text-xs">Failed to load image</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <Loader2 className="w-6 h-6 text-brand-primary animate-spin" />
        </div>
      )}
      <Image
        key={`${src}-${retryCount}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  onItemClick,
  index
}) => {
    const imageUrls = (item.images || []).map((img) =>
        urlFor(img).width(800).url()
    );
    // Fallback: if no images, provide empty array
    const isFallback = imageUrls.length === 0;
    
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ scale: 1.03, y: -8 }}
        onClick={() => {
            if (item.category === 'EBC') {
            const imageUrl = item.images?.[0] ? urlFor(item.images[0]).url() : null;
            if (imageUrl) {
                window.open(imageUrl, '_blank');
            }
            } else {
            onItemClick(item);
            }
        }}
        className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-fit"
        >
        {/* Image Carousel - Full width, auto height to maintain aspect ratio */}
        <div className="relative w-full bg-gray-100">
            {!isFallback && imageUrls.length > 0 ? (
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                }}
                loop
                className="w-full"
            >
                {imageUrls.map((imageUrl, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                    <CardImage
                    src={imageUrl}
                    alt={`${item.title} - Image ${imgIndex + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 6 ? "eager" : "lazy"}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            ) : (
            // Fallback for empty images
            <div className="relative w-full aspect-4/3 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm">No images</span>
            </div>
            )}
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="inline-block px-3 py-1 bg-brand-primary rounded-full text-xs font-semibold mb-2">
                {item.category}
            </div>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            {item.showMetrics && item.metricType && item.metricBefore && item.metricAfter && (
                <p className="text-sm text-emerald-400 font-semibold">
                {item.metricBefore}% {item.metricType} → {item.metricAfter}% {item.metricType}
                </p>
            )}
            </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-brand-primary/20 blur-xl"></div>
        </div>
        </motion.div>
    );
};

export default PortfolioCard;
