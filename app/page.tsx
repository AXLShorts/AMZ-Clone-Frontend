import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "./components/hero";
import About from "./components/about";
import { getHomepage } from "@/lib/sanity";

const Transformation = dynamic(() => import("./components/transformation"));
const TransformationContent = dynamic(() => import("./components/transformation-content"));
const Offer = dynamic(() => import("./components/offer"));
const LeadMagnet = dynamic(() => import("./components/lead-magnet"));
const SocialProof = dynamic(() => import("./components/social-proof"));
const GuaranteeSection = dynamic(() => import("./components/guarantee-section"));
const ScarcityCTA = dynamic(() => import("./components/scarcity-cta"));

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const homepageData = await getHomepage();
  return {
    title: homepageData?.title ? `${homepageData.title} | Merxpert` : "Merxpert - Amazon Brand Conversion System™",
    description: homepageData?.seoDescription || "Transform your Amazon listings into high-converting sales machines.",
  };
}

export default async function Home() {
  const homepageData = await getHomepage();

  return (
    <div className="w-full flex flex-col justify-center">
      <Hero data={homepageData?.heroSection} />
      <About data={homepageData?.aboutSection} />
      {homepageData?.transformationSection && (
        <Transformation data={homepageData.transformationSection} />
      )}
      <TransformationContent data={homepageData?.transformationContentSection}/>
      {homepageData?.offerSection && (
        <Offer data={homepageData.offerSection} />
      )}
      <LeadMagnet data={homepageData?.auditSection} />
      <SocialProof />
      <GuaranteeSection />
      <ScarcityCTA />
    </div>
  );
}
