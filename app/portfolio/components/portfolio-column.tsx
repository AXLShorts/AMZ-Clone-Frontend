"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PortfolioItem } from "@/lib/types";
import { urlFor } from "@/lib/sanity.client";
import { useParallaxScroll } from "@/hooks/use-parallax-scroll";

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
        const imageUrl = urlFor(item.image).width(800).url();
        
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
            {/* Image - Full width, auto height to maintain aspect ratio */}
            <div className="relative w-full bg-gray-100">
              <Image
                src={imageUrl}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading={index < 3 ? "eager" : "lazy"}
              />

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
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PortfolioColumn;
