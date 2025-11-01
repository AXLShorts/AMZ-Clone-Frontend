import { ArrowRight } from "lucide-react";

export default function End() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated date */}
        <p className="mb-4! text-sm text-muted-foreground">
          Updated October 6, 2024
        </p>

        {/* Main heading with underline */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom-right pb-6! w-fit">
            Dear Amazon Seller,
          </h1>
        </div>

        {/* Body content */}
        <div className="space-y-4 md:space-y-6 text-base md:text-[22px] leading-12 text-foreground">
          <p>
            <span className="font-semibold">
              We get it. Scaling an Amazon business isn&apos;t easy.
            </span>{" "}
            Even when you&apos;re already successful.
          </p>

          <p>You&apos;re constantly balancing growth and profitability.</p>

          <p>
            You know how to rank a product, but{" "}
            <span className="font-semibold">maintaining that position?</span>{" "}
            That&apos;s a different challenge. Conversion rates are slipping,
            even with all the optimizations.
          </p>

          <p>
            PPC costs keep climbing, cutting deeper into your margins.
            You&apos;re spending more to stay visible, but it doesn&apos;t
            always translate to higher sales.
          </p>

          <p>
            <span className="font-semibold">
              Organic ranking feels like a moving target,
            </span>{" "}
            and keeping your products at the top takes more time and resources
            than ever.
          </p>

          <p>
            You&apos;ve got a catalog of SKUs, but the struggle is keeping them
            all performing at their peak. Launching new products is still a
            high-stakes game.
          </p>

          <p>You want to grow, but not at the expense of your bottom line.</p>

          <p>
            You know what success looks like—you&apos;ve tasted it. But scaling
            up means more complexity, more competition, and more pressure to
            keep winning.
          </p>

          <p>
            At <span className="font-semibold">AMZ One Step,</span> we get the
            demands of the big leagues. We&apos;re here to help you optimize
            every detail of your listings, boost conversion rates, and keep your
            products in front of the right customers.
          </p>

          <p>
            We take the creative work off your plate, so you can focus on what
            you do best—growing your business.
          </p>

          <p className="font-semibold">
            Let&apos;s take your brand to the next level.
          </p>

          <p className="bg-emerald-50 dark:bg-emerald-950/20 px-4 py-3 text-foreground w-fit">
            Together, we can turn every click into a sale and make sure your
            investment pays off.
          </p>

          <p>Here&apos;s to continued success,</p>

          <p className="font-semibold">Kamal from AMZ One Step</p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors duration-200"
          >
            Book A Call Now
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
