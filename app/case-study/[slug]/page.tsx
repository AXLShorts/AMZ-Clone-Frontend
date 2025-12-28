import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getCaseStudies,
  formatDate,
  getOptimizedImageUrl,
} from "@/lib/sanity";
import { PortableText } from "@/components/portable-text";
import { CaseStudyCard } from "@/components/case-study-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Revalidate every 1 hour
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Not Found",
      description: "Case study not found",
    };
  }

  const imageUrl = getOptimizedImageUrl(caseStudy.featuredImage, 1200, 630);

  return {
    title: `${caseStudy.title} | AMZ One Step`,
    description: caseStudy.seoDescription || caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: "article",
      publishedTime: caseStudy.publishedAt,
      authors: caseStudy.author ? [caseStudy.author] : [],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: caseStudy.featuredImage.alt || caseStudy.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug.current,
  }));
}

function getGradientParams(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const positiveHash = Math.abs(hash);
  return {
    angle: positiveHash % 360,
    percentage: (positiveHash % 40) + 30,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedStudies = (await getCaseStudies())
    .filter((study) => study._id !== caseStudy._id)
    .slice(0, 3);

  const categoryLabels: Record<string, string> = {
    "sales-growth": "Sales Growth",
    optimization: "Optimization",
    strategy: "Strategy",
    "best-practices": "Best Practices",
  };

  const { angle, percentage } = getGradientParams(caseStudy._id);

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, var(--brand-dark) 0%, var(--brand-primary) ${percentage}%, var(--brand-dark) 100%)`,
  };

  return (
    <main className="min-h-screen bg-background case-study-page">
      {/* Hero Section */}
      <section 
        className="relative -mt-20 pt-32 pb-16 sm:pb-24 overflow-hidden"
        style={gradientStyle}
      >
        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Category */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <Link
              href="/case-study"
              className="text-sm text-gray-200 hover:text-white flex items-center gap-2 font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to case studies
            </Link>
            <span className="inline-block rounded-full bg-white/10 px-4! py-1.5! text-xs font-semibold text-white border border-white/20 backdrop-blur-sm">
              {categoryLabels[caseStudy.category] || "Case Study"}
            </span>
          </div>

          {/* Title & Meta */}
          <div className="mb-10">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6! text-balance leading-18">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
              {caseStudy.author && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="font-medium text-white">
                    {caseStudy.author}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(caseStudy.publishedAt)}
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {caseStudy.readingTime} min read
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl border border-white/10">
            <Image
              src={
                getOptimizedImageUrl(caseStudy.featuredImage, 1200, 630) ||
                "/placeholder.svg"
              }
              alt={caseStudy.featuredImage.alt || caseStudy.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-12 bg-background">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <PortableText value={caseStudy.content} />
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="bg-background pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4!">
                More Success Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto!">
                Explore more case studies and see how we&apos;ve helped other
                Amazon sellers achieve remarkable results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedStudies.map((study) => (
                <CaseStudyCard key={study._id} caseStudy={study} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
