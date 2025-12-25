import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('listingService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "Listing Optimization | Merxpert",
    description: data?.hero?.description || "Data-driven Amazon listing optimization services.",
  };
}

export default function ListingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
