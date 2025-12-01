import Hero from "./components/hero";
import About from "./components/about";
import Transformation from "./components/transformation";
import TransformationContent from "./components/transformation-content";
import Offer from "./components/offer";
import LeadMagnet from "./components/lead-magnet";
import SocialProof from "./components/social-proof";
import GuaranteeSection from "./components/guarantee-section";
import ScarcityCTA from "./components/scarcity-cta";
import { getHomepage } from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  const homepageData = await getHomepage();

  // Fallback data in case Sanity content is not available
  const defaultTransformationData = {
    heading: "Imagine listings that turn browsers into buyers —",
    accentText: "automatically.",
    description: "Merxpert builds high-converting brand systems that transform your Amazon presence into a performance engine.",
    slides: [
      {
        _key: "1",
        title: "Performance Listing Redesign",
        beforeImage: {
          _type: "image" as const,
          asset: { _ref: "", _type: "reference" as const },
        },
        afterImage: {
          _type: "image" as const,
          asset: { _ref: "", _type: "reference" as const },
        },
        showStats: true,
        statType: "CTR",
        beforeValue: "2.4%",
        afterValue: "6.7%",
      },
    ],
    features: [
      "Performance-driven listing redesigns",
      "Keyword-anchored copy + visuals",
      "A+ Content built for ranking",
      "Storefront architecture that sells",
      "Continuous improvement reports",
    ],
    proofStatement: "On average, Merxpert partners see 29% higher revenue and 41% leaner ad spend.",
  };

  const defaultOfferData = {
    heading: "Introducing the Merxpert Brand Conversion System™",
    subheading: "Full-service, done-for-you brand transformation.",
    description: "Our done-for-you system rebuilds your Amazon brand from the ground up — every word, every visual, every keyword — scientifically designed to convert.",
    deliverables: [
      "Complete Listing Optimization",
      "Visual & Copy Revamp",
      "Brand Storefront Build",
      "Algorithmic SEO & Keyword Mapping",
      "Conversion Performance Dashboard",
    ],
    ctaText: "Book My Free Amazon Conversion Audit →",
    ctaUrl: "/audit",
    ctaSubtext: "Only 3 free spots this month — closes in 48h",
    sliderImages: [
      {
        _key: "1",
        image: {
          _type: "image" as const,
          asset: { _ref: "", _type: "reference" as const },
        },
        caption: "Creatives That Convert",
        altText: "High-converting Amazon creatives",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <About />
      <Transformation 
        data={homepageData?.transformationSection || defaultTransformationData} 
      />
      <TransformationContent />
      <Offer 
        data={homepageData?.offerSection || defaultOfferData} 
      />
      <LeadMagnet />
      <SocialProof />
      <GuaranteeSection />
      <ScarcityCTA />
    </div>
  );
}
