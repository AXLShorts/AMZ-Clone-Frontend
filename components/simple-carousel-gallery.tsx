"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

async function fetchCarouselImages(): Promise<CarouselImage[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const originalImages = [
        {
          id: "1",
          src: "/assets/homepage/portfolio/product-image1.png",
          alt: "Product showcase 1",
        },
        {
          id: "2",
          src: "/assets/homepage/portfolio/product-image1.png",
          alt: "Product showcase 2",
        },
        {
          id: "3",
          src: "/assets/homepage/portfolio/product-image1.png",
          alt: "Product showcase 3",
        },
        {
          id: "4",
          src: "/assets/homepage/portfolio/product-image1.png",
          alt: "Product showcase 4",
        },
      ];

      resolve(originalImages);
    }, 800);
  });
}

export function SimpleCarouselGallery() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Fetch images on mount
  useEffect(() => {
    fetchCarouselImages().then((data) => {
      setImages(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="w-full py-12 px-4" aria-label="Loading carousel">
        <div className="flex items-center justify-center h-96 bg-muted rounded-lg animate-pulse">
          <p className="text-muted-foreground">Loading carousel...</p>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 px-4" aria-label="Gallery carousel">
      <div className="max-w-6xl mx-auto">
        {/* Main Carousel */}
        <div className="mb-8">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as React.CSSProperties
            }
            loop
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
            className="w-full rounded-lg overflow-hidden mySwiper2"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="flex justify-center">
                <div className="relative w-full aspect-video">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gallery Thumbnails */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          role="region"
          aria-label="Gallery thumbnails"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="cursor-pointer">
              <div className="relative w-full h-20 rounded-md overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`Thumbnail: ${image.alt}`}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Carousel auto-scrolls every 5 seconds. Click thumbnails to navigate.
        </div>
      </div>
    </section>
  );
}
