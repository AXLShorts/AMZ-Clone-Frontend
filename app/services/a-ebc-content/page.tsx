import { getServicePage } from "@/lib/sanity";
import AEBCContentClient from "./ui";

export const revalidate = 60;

export default async function AEBCContentPage() {
  const data = await getServicePage('ebcService');
  return <AEBCContentClient data={data} />;
}
