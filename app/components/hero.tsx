"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { name: "Helium 10", src: "/assets/homepage/hero/logo-list/helium-10.png" },
  {
    name: "Lunch with Norm",
    src: "/assets/homepage/hero/logo-list/lunch-with-norm.png",
  },
  { name: "Forbes", src: "/assets/homepage/hero/logo-list/forbes.png" },
  {
    name: "Orange Klik",
    src: "/assets/homepage/hero/logo-list/orange-klink.png",
  },
  {
    name: "White Label World Expo",
    src: "/assets/homepage/hero/logo-list/white-label.png",
  },
  { name: "PickFu", src: "/assets/homepage/hero/logo-list/pick-fu.png" },
  { name: "AMZ Finder", src: "/assets/homepage/hero/logo-list/amz-finder.png" },
];

const Hero = () => {
  return (
    <section
      className="2xl:max-w-[96%] w-full h-fit bg-[#142337] lg:bg-[url('/assets/homepage/hero/header-bg.webp')] lg:bg-cover lg:bg-center lg:bg-no-repeat mx-auto rounded-b-[50px] text-white -mt-20 pt-20 pb-12 lg:pb-16"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-8 lg:pt-16">
        <div className="mx-auto text-center space-y-6 lg:space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[90px] leading-tight tracking-[-2px] mb-0">
            BOOST YOUR{" "}
            <span className="text-orange-500 relative inline-block bg-[url('/assets/homepage/hero/green-line.png')] bg-no-repeat bg-bottom-right bg-contain">
              AMAZON SALES
            </span>{" "}
            BY 30% WITH HIGH-CONVERTING CREATIVES
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-300 mx-auto">
            Without wasting money on expensive ads, product giveaways, and
            time-consuming launch strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 lg:pt-6">
            <Link
              href="/consultation"
              className="font-sans w-full sm:w-auto py-2 px-4 bg-transparent border border-emerald-500 text-white rounded-[20px] font-semibold hover:bg-emerald-500 transition-colors text-base lg:text-lg"
            >
              Book a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="font-sans w-full sm:w-auto py-2 px-4 bg-transparent border border-orange-500 text-orange-500 rounded-[20px] font-semibold hover:bg-orange-500 hover:text-white transition-colors text-base lg:text-lg"
            >
              See Portfolio
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center space-y-8">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-0">
            <div className="order-2 md:order-0 md:flex-1 flex justify-center md:justify-start">
              <div className="relative w-40 h-20 sm:w-48 sm:h-24">
                <Image
                  src="/assets/homepage/hero/spotlight-appearances.png"
                  alt="Spotlight Appearances"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>

            <div className="order-1 md:order-1 flex justify-center">
              <div className="relative w-56 h-24 sm:w-64 sm:h-28 md:w-72 md:h-32">
                <Image
                  src="/assets/homepage/hero/6000-brands-trust-us.png"
                  alt="6,000+ Brands trust us"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                />
              </div>
            </div>

            <div className="hidden md:block md:flex-1 order-2 md:order-2"></div>
          </div>

          <div className="w-full max-w-6xl mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={500}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 70,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 80,
                },
              }}
              className="logo-carousel"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={`${logo.name}-${index}`}>
                  <div className="flex items-center justify-center h-16 lg:h-20 opacity-70 hover:opacity-100 transition-opacity">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain w-auto h-12 lg:h-16 filter brightness-0 invert"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
