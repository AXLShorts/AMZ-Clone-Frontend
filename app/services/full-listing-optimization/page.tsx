import { getServicePage } from "@/lib/sanity";
import FullListingOptimizationClient from "./ui";

export const revalidate = 60;

export default async function FullListingOptimizationPage() {
  const data = await getServicePage('listingService');
  return <FullListingOptimizationClient data={data} />;
}
