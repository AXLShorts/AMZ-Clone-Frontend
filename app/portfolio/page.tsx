import React from "react";
import { getPortfolioItems } from "@/lib/sanity";
import PortfolioClient from "./components/portfolio-client";

export const revalidate = 60;

export default async function PortfolioPage() {
  const items = await getPortfolioItems();

  return <PortfolioClient items={items} />;
}
