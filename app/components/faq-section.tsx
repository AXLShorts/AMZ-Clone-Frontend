import { FAQItems } from "./faq-items";
import { ContactCard } from "./contact-card";

export function FAQSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight mb-4 font-semibold">
            <span className="text-balance bg-[url('/assets/homepage/portfolio/green-line.png')] bg-no-repeat bg-bottom-right pb-3!">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="inline-block mb-4">
            <div className="h-1 w-24 rounded-full"></div>
          </div>
          <p className="text-base text-muted-foregroundl text-center">
            Here are answers to most common questions. Can&apos;t find an
            answer?{" "}
            <a
              href="#contact"
              className="text-foreground font-semibold hover:underline"
            >
              Call us!
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <FAQItems />
          </div>

          <div className="flex items-center justify-center">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
