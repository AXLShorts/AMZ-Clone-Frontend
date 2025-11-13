"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { PortfolioItem } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";
import { useParallaxScroll } from "@/hooks/use-parallax-scroll";

import "swiper/css";
import "swiper/css/effect-fade";

interface PortfolioColumnProps {
  items: PortfolioItem[];
  speed: number;
  onItemClick: (item: PortfolioItem) => void;
}

const PortfolioColumn: React.FC<PortfolioColumnProps> = ({
  items,
  speed,
  onItemClick,
}) => {
  const offset = useParallaxScroll(speed);
  const [visibleItems, setVisibleItems] = useState<PortfolioItem[]>([]);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initially load first few items
    setVisibleItems(items.slice(0, 8));
  }, [items]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load more items when scrolling near the bottom
            const loadedCount = visibleItems.length;
            if (loadedCount < items.length) {
              setVisibleItems(items.slice(0, loadedCount + 4));
            }
          }
        });
      },
      { rootMargin: "200px" }
    );

    const sentinel = columnRef.current?.lastElementChild;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, [items, visibleItems.length]);

  return (
    <div
      ref={columnRef}
      className="flex flex-col gap-6"
      style={{
        transform: `translateY(-${offset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {visibleItems.map((item, index) => {
        const imageUrls = (item.images || []).map((img) =>
          urlFor(img).width(800).url()
        );
        // Fallback: if no images, provide empty array
        const isFallback = imageUrls.length === 0;
        
        return (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -8 }}
            onClick={() => onItemClick(item)}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Carousel - Full width, auto height to maintain aspect ratio */}
            <div className="relative w-full bg-gray-100">
              {!isFallback && imageUrls.length > 0 ? (
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="w-full h-full"
                >
                  {imageUrls.map((imageUrl, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full aspect-square">
                        <Image
                          src={imageUrl}
                          alt={`${item.title} - Image ${imgIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Fallback for empty images
                <div className="relative w-full aspect-square bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No images</span>
                </div>
              )}
            </div>

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      })}
    </div>
  );
};

export default PortfolioColumn;
