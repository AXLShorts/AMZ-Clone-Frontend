import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | AMZ One Step",
  description:
    "Explore our collection of case studies showcasing real results and proven strategies that helped Amazon sellers grow their business.",
  openGraph: {
    title: "Case Studies | AMZ One Step",
    description:
      "Explore our collection of case studies showcasing real results and proven strategies that helped Amazon sellers grow their business.",
    type: "website",
    siteName: "AMZ One Step",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | AMZ One Step",
    description:
      "Explore our collection of case studies showcasing real results and proven strategies that helped Amazon sellers grow their business.",
  },
  alternates: {
    canonical: "/case-study",
  },
};

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
