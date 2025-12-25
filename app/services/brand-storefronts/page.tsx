import { getServicePage } from "@/lib/sanity";
import BrandStorefrontsClient from "./ui";

export const revalidate = 60;

export default async function BrandStorefrontsPage() {
  const data = await getServicePage('storefrontService');
  return <BrandStorefrontsClient data={data} />;
}
