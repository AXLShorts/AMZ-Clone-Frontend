import React, { Suspense } from "react";
import { getPortfolioItems } from "@/lib/sanity";
import PortfolioClient from "./components/portfolio-client";
import PortfolioSkeleton from "./components/portfolio-skeleton";

export const revalidate = 60;

// Hero Section Component
function PortfolioHero() {
  return (
    <section className="relative z-20 bg-brand-dark text-white -mt-20 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 rounded-b-[50px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="container mx-auto text-center space-y-4 sm:space-y-6">
          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[-1px] uppercase font-semibold"
          >
            See What&apos;s Possible When You{" "}
            <span className="text-brand-primary relative inline-block bg-[url('/assets/homepage/hero/orange-line.png')] bg-no-repeat bg-bottom bg-contain pb-2">
              Optimize for Performance
            </span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto!"
          >
            Real Amazon listings. Real results. Every project shows the
            conversion impact.
          </p>
        </div>
      </div>
    </section>
  );
}

// Async component that fetches data
async function PortfolioContent() {
  const items = await getPortfolioItems();
  return <PortfolioClient items={items} />;
}

export default function PortfolioPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <PortfolioHero />
      <Suspense fallback={<PortfolioSkeleton />}>
        <PortfolioContent />
      </Suspense>
    </main>
  );
}
