"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onPrevious,
  onNext,
}) => {
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
          className="relative max-w-6xl w-full mx-4 flex gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative flex-1 bg-transparent rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-[70vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="60vw"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 w-96 shadow-2xl max-h-[70vh]"
          >
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                {item.category}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-display text-black">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              {item.metrics && (
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-black">
                      Conversion Impact
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-xs text-gray-600 mb-1">Before</p>
                      <p className="text-xl font-bold text-red-600">
                        {item.metrics.before}
                      </p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <p className="text-xs text-gray-600 mb-1">After</p>
                      <p className="text-xl font-bold text-emerald-600">
                        {item.metrics.after}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 mb-4">
                  Want similar results for your Amazon listings?
                </p>
                <a
                  href="/audit"
                  className="block w-full text-center px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                  Get Your Free Audit →
                </a>
              </div>
            </div>
          </motion.div>
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
          {/* Image Container */}
          <div className="relative h-[70vh] bg-gray-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
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
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              {item.category}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-display text-black">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Metrics */}
            {item.metrics && (
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-black">
                    Conversion Impact
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">Before</p>
                    <p className="text-xl font-bold text-red-600">
                      {item.metrics.before}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <p className="text-xs text-gray-600 mb-1">After</p>
                    <p className="text-xl font-bold text-emerald-600">
                      {item.metrics.after}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-gray-200 pt-6 pb-8">
              <p className="text-sm text-gray-600 mb-4">
                Want similar results for your Amazon listings?
              </p>
              <a
                href="/audit"
                className="block w-full text-center px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
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
