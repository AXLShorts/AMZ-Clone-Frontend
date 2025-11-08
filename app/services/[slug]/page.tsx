import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import ServiceHero from "./components/service-hero";
import ServiceOverview from "./components/service-overview";
import ServiceFeatures from "./components/service-features";
import ServiceProcess from "./components/service-process";
import ServiceValue from "./components/service-value";
import ServiceBenefits from "./components/service-benefits";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Amazon Agency Services`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceBenefits service={service} />
      <ServiceValue service={service} />
    </main>
  );
}
