import AboutHero from "./components/about-hero";
import MissionSection from "./components/mission-section";
import StatsSection from "./components/stats-section";
import MethodologySection from "./components/methodology-section";
import TeamCTASection from "./components/team-cta-section";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col justify-center">
      <AboutHero />
      <MissionSection />
      <StatsSection />
      <MethodologySection />
      <TeamCTASection />
    </main>
  );
}
