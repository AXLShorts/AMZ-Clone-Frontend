import { Skeleton } from "@/components/ui/skeleton";

export default function PortfolioSkeleton() {
  return (
    <>
      {/* Filter Skeleton */}
      <section className="z-20 bg-white/90 border-b border-gray-200 sticky top-20 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Skeleton */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-full aspect-[3/4] rounded-2xl"
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-full aspect-[3/4] rounded-2xl"
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-full aspect-[3/4] rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
