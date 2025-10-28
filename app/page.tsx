import Hero from "./components/hero";
import About from "./components/about";
import Benefits from "./components/benefits";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <About />
      <Benefits />
      <Portfolio />
    </div>
  );
}
