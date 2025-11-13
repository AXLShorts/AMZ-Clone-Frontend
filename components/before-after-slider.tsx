"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  externalSliderPosition?: number;
  imgClassName?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
  externalSliderPosition,
  imgClassName
}) => {
  const [internalSliderPosition, setInternalSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use external position if provided, otherwise use internal
  const sliderPosition = externalSliderPosition ?? internalSliderPosition;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  React.useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;

      if (isDragging && externalSliderPosition === undefined) {
        e.preventDefault();
        setInternalSliderPosition(Math.min(Math.max(percentage, 0), 100));
      }
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const percentage = (x / rect.width) * 100;

      if (isDragging && externalSliderPosition === undefined) {
        e.preventDefault();
        setInternalSliderPosition(Math.min(Math.max(percentage, 0), 100));
      }
    };

    const handleWindowMouseUp = () => {
      setIsDragging(false);
    };

    const handleWindowTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
      window.addEventListener("touchmove", handleWindowTouchMove, { passive: false });
      window.addEventListener("touchend", handleWindowTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleWindowMouseMove);
        window.removeEventListener("mouseup", handleWindowMouseUp);
        window.removeEventListener("touchmove", handleWindowTouchMove);
        window.removeEventListener("touchend", handleWindowTouchEnd);
      };
    }
  }, [isDragging, externalSliderPosition]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden cursor-ew-resize ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="img"
      aria-label="Before and after comparison"
    >
      {/* After Image (Always visible - shows on all screen sizes) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className={`object-cover ${imgClassName}`}
          priority
          sizes="100vw"
        />
      </div>

      {/* Before Image (Top Layer with clip - Always visible) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className={`object-cover ${imgClassName}`}
          priority
          sizes="100vw"
        />
      </div>

      {/* Slider Line and Handle - Always visible */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white mix-blend-difference"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mix-blend-difference">
          {/* Left Arrow */}
          <svg
            className="w-4 h-4 absolute left-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {/* Right Arrow */}
          <svg
            className="w-4 h-4 absolute right-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Labels - Always visible */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
        After
      </div>
    </div>
  );
};
