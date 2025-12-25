import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('storefrontService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "Brand Storefronts | Merxpert",
    description: data?.hero?.description || "Custom Amazon Brand Storefront design and development.",
  };
}

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
