import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('ppcService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "PPC Management | Merxpert",
    description: data?.hero?.description || "Expert Amazon PPC management services.",
  };
}

export default function PPCLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
