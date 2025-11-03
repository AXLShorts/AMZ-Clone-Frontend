"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, TrendingUp, DollarSign, Award } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "After the audit, our CTR doubled and sales jumped 28% in 45 days. Worth every penny.",
    author: "Sarah Johnson",
    role: "DTC Owner, Pet Supplies",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Merxpert rebuilt our brand store and listings. 32% revenue growth. Game-changer.",
    author: "Michael Chen",
    role: "Private Label Founder",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The conversion audit revealed issues we never knew existed. Fixed them and saw immediate results.",
    author: "Emily Rodriguez",
    role: "E-commerce Manager",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Professional, data-driven, and results-oriented. Best investment we made for our Amazon business.",
    author: "David Thompson",
    role: "Brand Owner, Home & Kitchen",
    rating: 5,
  },
];

const metrics = [
  {
    icon: TrendingUp,
    value: "29%",
    label: "Average Revenue Growth",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: DollarSign,
    value: "41%",
    label: "Ad Spend Reduction",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    value: "4.8",
    label: "Avg. Review Increase",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const SocialProof = () => {
  return (
    <section
      className="w-full bg-linear-to-b from-white to-gray-50 py-16 lg:py-24"
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            id="social-proof-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight font-display mb-4"
          >
            Trusted by Amazon brands that stopped{" "}
            <span className="relative inline-block bg-[url('/assets/homepage/portfolio/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
              guessing and started scaling.
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonials-carousel pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`${metric.bgColor} p-8 rounded-xl text-center hover:scale-105 transition-transform`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 ${metric.color} bg-white rounded-full flex items-center justify-center`}
                >
                  <metric.icon className="w-8 h-8" strokeWidth={2} />
                </div>
              </div>
              <div
                className={`text-4xl sm:text-5xl font-bold ${metric.color} mb-2`}
              >
                {metric.value}
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            <span className="font-bold text-gray-900">50+ brands</span> scaling
            with Merxpert&apos;s Brand Conversion System™
          </p>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-carousel .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 1;
        }

        .testimonials-carousel .swiper-pagination-bullet-active {
          background: #f97316;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
