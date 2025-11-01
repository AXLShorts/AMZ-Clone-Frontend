import Hero from "./components/hero";
import About from "./components/about";
import Benefits from "./components/benefits";
import Portfolio from "./components/portfolio";
import { FAQSection } from "./components/faq-section";
import End from "./components/end";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <About />
      <Benefits />
      <Portfolio />
      <FAQSection />
      <End />
    </div>
  );
}
