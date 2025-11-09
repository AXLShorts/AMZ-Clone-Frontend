"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  portfolioItems,
  categories,
  PortfolioItem,
} from "@/lib/portfolio-data";
import { useMousePosition } from "@/hooks/use-mouse-position";
import PortfolioColumn from "./components/portfolio-column";
import PortfolioModal from "./components/portfolio-modal";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const mousePosition = useMousePosition();

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Distribute items across 3 columns
  const columns = useMemo(() => {
    const col1: PortfolioItem[] = [];
    const col2: PortfolioItem[] = [];
    const col3: PortfolioItem[] = [];

    filteredItems.forEach((item, index) => {
      if (index % 3 === 0) col1.push(item);
      else if (index % 3 === 1) col2.push(item);
      else col3.push(item);
    });

    return [col1, col2, col3];
  }, [filteredItems]);

  // Handle modal navigation
  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem?.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedItem?.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <main className="relative bg-white min-h-screen">
      {/* Mouse-Following Glow Effect */}
      <div
        className="fixed pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(4, 50, 153, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative z-20 bg-brand-dark text-white -mt-20 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 rounded-b-[50px]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="container mx-auto text-center space-y-4 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[-2px] uppercase font-medium"
            >
              See What&apos;s Possible When You{" "}
              <span className="text-brand-primary relative inline-block bg-[url('/assets/homepage/hero/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
                Optimize for Performance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto!"
            >
              Real Amazon listings. Real results. Every project shows the
              conversion impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="z-20 bg-white/90 border-b border-gray-200 sticky top-20 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-brand-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - 3 Column Parallax */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Column 1 - Slow (or single column on mobile) */}
            <PortfolioColumn
              items={columns[0]}
              speed={0.3}
              onItemClick={handleItemClick}
            />

            {/* Column 2 - Medium (hidden on mobile if single column) */}
            <PortfolioColumn
              items={columns[1]}
              speed={0.5}
              onItemClick={handleItemClick}
            />

            {/* Column 3 - Fast */}
            <PortfolioColumn
              items={columns[2]}
              speed={0.7}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-brand-dark text-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display">
              Ready to See These Results for{" "}
              <span className="text-brand-primary">Your Brand?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Get a free Amazon Conversion Audit and discover exactly
              what&apos;s holding your listings back.
            </p>
            <a
              href="/audit"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white rounded-full text-base sm:text-lg font-bold hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Claim Your Free Audit →
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </main>
  );
};

export default PortfolioPage;
