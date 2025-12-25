import { getServicePage } from "@/lib/sanity";
import AccountManagementClient from "./ui";

export const revalidate = 60;

export default async function AccountManagementPage() {
  const data = await getServicePage('accountService');
  return <AccountManagementClient data={data} />;
}
