import Hero from "./components/hero";
import About from "./components/about";
import Transformation from "./components/transformation";
import Offer from "./components/offer";
import LeadMagnet from "./components/lead-magnet";
import SocialProof from "./components/social-proof";
import ScarcityCTA from "./components/scarcity-cta";
// import End from "./components/end";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <About />
      <Transformation />
      <Offer />
      <LeadMagnet />
      <SocialProof />
      <ScarcityCTA />
    </div>
  );
}
