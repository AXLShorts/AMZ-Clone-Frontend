"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

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
          src: "/assets/homepage/carousel/1.png",
          alt: "Alphard product showcase - mobile view 1",
        },
        {
          id: "2",
          src: "/assets/homepage/carousel/2.png",
          alt: "Alphard product showcase - mobile view 2",
        },
        {
          id: "3",
          src: "/assets/homepage/carousel/3.png",
          alt: "Alphard product showcase - mobile view 3",
        },
        {
          id: "4",
          src: "/assets/homepage/carousel/1.png",
          alt: "Alphard product showcase - mobile view 4",
        },
        {
          id: "5",
          src: "/assets/homepage/carousel/2.png",
          alt: "Alphard product showcase - mobile view 5",
        },
        {
          id: "6",
          src: "/assets/homepage/carousel/3.png",
          alt: "Alphard product showcase - mobile view 6",
        },
      ];

      const extendedImages = [...originalImages, ...originalImages];

      resolve(extendedImages);
    }, 1000);
  });
}

export function ImageCarousel() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <section className="w-full py-12 px-4" aria-label="Product carousel">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 0.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 12
            },
          }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="relative aspect-9/16 rounded-3xl overflow-hidden sm:rounded-2xl mx-auto md:aspect-auto"
                style={{
                  width: "100%",
                  maxWidth: "calc(100vw - 2rem)",
                }}
              >
                <div className="sm:w-24 md:w-auto md:h-[520px] mx-auto h-full relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100px, auto"
                  />
                </div>
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
          Carousel auto-scrolls every 4 seconds. Drag to navigate.
        </div>
      </div>
    </section>
  );
}
