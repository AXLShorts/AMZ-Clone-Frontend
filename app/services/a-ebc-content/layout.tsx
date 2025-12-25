import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('ebcService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "A+ Content & EBC | Merxpert",
    description: data?.hero?.description || "Premium Amazon A+ Content and Enhanced Brand Content design services.",
  };
}

export default function AEBCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
