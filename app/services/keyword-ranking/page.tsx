import { getServicePage } from "@/lib/sanity";
import KeywordRankingClient from "./ui";

export const revalidate = 60;

export default async function KeywordRankingPage() {
  const data = await getServicePage('keywordService');
  return <KeywordRankingClient data={data} />;
}
