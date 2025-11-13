import React from "react";

const AboutHero = () => {
  return (
    <section
      className="relative w-full bg-brand-dark text-white -mt-20 pt-32 pb-16 lg:pb-24"
      aria-label="About hero section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[64px_64px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mx-auto text-center space-y-6 lg:space-y-8 flex flex-col items-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-[-1px] uppercase font-semibold">
            We&apos;re not just another{" "}
            <span className="text-brand-primary relative inline-block">
              Amazon agency.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We&apos;re the team that turns underperforming listings into revenue
            machines — using data, not guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
