import { getCaseStudies } from "@/lib/sanity";
import { CaseStudyCard } from "@/components/case-study-card";
import CaseStudyHero from "./components/case-study-hero";

// Revalidate every 1 hour
export const revalidate = 3600;

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <CaseStudyHero />

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-muted p-6 mb-6">
                <svg
                  className="h-12 w-12 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2!">
                No Case Studies Yet
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                We&apos;re working on publishing our case studies. Check back
                soon to see how we&apos;ve helped businesses like yours succeed.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
