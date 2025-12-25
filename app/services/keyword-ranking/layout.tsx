import { Metadata } from "next";
import { getServicePage } from "@/lib/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicePage('keywordService');
  return {
    title: data?.hero?.title ? `${data.hero.title} | Merxpert` : "Keyword Ranking | Merxpert",
    description: data?.hero?.description || "Amazon keyword ranking and organic growth strategies.",
  };
}

export default function KeywordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
