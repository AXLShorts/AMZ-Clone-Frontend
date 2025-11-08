import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Amazon Listing Transformations | Merxpert",
  description:
    "See real Amazon listing transformations with proven conversion rate improvements. Product photography, lifestyle shots, and A+ content that drives 29% more revenue on average.",
  keywords: [
    "Amazon portfolio",
    "product photography",
    "Amazon listing examples",
    "conversion optimization",
    "A+ content design",
    "lifestyle photography",
    "Amazon brand transformation",
  ],
  openGraph: {
    title: "Portfolio - Amazon Listing Transformations | Merxpert",
    description:
      "Real Amazon listings. Real results. See how brands achieved up to 14.1% conversion rates.",
    type: "website",
    images: [
      {
        url: "/assets/homepage/portfolio/product-image1.png",
        width: 1200,
        height: 630,
        alt: "Merxpert Portfolio - Amazon Listing Transformations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Amazon Listing Transformations | Merxpert",
    description:
      "See real Amazon listing transformations with proven conversion improvements.",
    images: ["/assets/homepage/portfolio/product-image1.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
