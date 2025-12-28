"use client";

import React, { useState, useMemo, useEffect } from "react";
import { PortfolioItem } from "@/lib/types";
import { useMousePosition } from "@/hooks/use-mouse-position";
import PortfolioCard from "./portfolio-card";
import PortfolioModal from "./portfolio-modal";

interface PortfolioClientProps {
  items: PortfolioItem[];
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const mousePosition = useMousePosition();

  // Extract unique categories from items
  const categories = useMemo(() => {
    const uniqueCategories = new Set(items.map((item) => item.category));
    return ["All", ...Array.from(uniqueCategories).sort()];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, items]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  // Handle modal navigation
  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item._id === selectedItem?._id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex(
      (item) => item._id === selectedItem?._id
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <>
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

      {/* Portfolio Gallery - Masonry Layout */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {filteredItems.map((item, index) => (
              <div key={item._id} className="break-inside-avoid mb-6">
                <PortfolioCard
                  item={item}
                  index={index}
                  onItemClick={handleItemClick}
                />
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                No items found in this category.
             </div>
          )}
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
    </>
  );
};

export default PortfolioClient;
