import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/types";
import { formatDate, getOptimizedImageUrl } from "@/lib/sanity";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const categoryLabels: Record<string, string> = {
    "sales-growth": "Sales Growth",
    optimization: "Optimization",
    strategy: "Strategy",
    "best-practices": "Best Practices",
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-brand-primary/50">
      <Link
        href={`/case-study/${caseStudy.slug.current}`}
        className="relative h-48 overflow-hidden sm:h-56"
      >
        <Image
          src={
            getOptimizedImageUrl(caseStudy.featuredImage, 600, 400) ||
            "/placeholder.svg"
          }
          alt={caseStudy.featuredImage.alt || caseStudy.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-brand-primary/10 px-3! py-1! text-xs font-medium text-brand-primary dark:text-brand-primary border border-brand-primary/20">
            {categoryLabels[caseStudy.category] || "Case Study"}
          </span>
          <Link href={`/case-study/${caseStudy.slug.current}`}>
            <h3 className="line-clamp-2 text-xl font-bold text-foreground transition-colors hover:text-brand-accent py-2!">
              {caseStudy.title}
            </h3>
          </Link>
          <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
            {caseStudy.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
          <div className="flex flex-col gap-1">
            {caseStudy.author && (
              <span className="text-xs font-medium text-foreground">
                {caseStudy.author}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {formatDate(caseStudy.publishedAt)}
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {caseStudy.readingTime} min read
          </span>
        </div>
      </div>
    </article>
  );
}
