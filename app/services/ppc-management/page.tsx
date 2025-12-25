import { getServicePage } from "@/lib/sanity";
import PPCManagementClient from "./ui";

export const revalidate = 60;

export default async function PPCManagementPage() {
  const data = await getServicePage('ppcService');
  return <PPCManagementClient data={data} />;
}
