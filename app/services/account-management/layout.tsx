import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('accountService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "Account Management | Merxpert",
    description: data?.hero?.description || "Full-service Amazon account management.",
  };
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
