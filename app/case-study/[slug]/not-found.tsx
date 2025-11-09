import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="font-display text-8xl sm:text-9xl font-bold text-orange-500 mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Case Study Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the case study you&apos;re looking for.
            It may have been moved or doesn&apos;t exist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/case-study"
            className="inline-block rounded-xl bg-orange-500 px-6 py-3 text-center font-bold text-white hover:bg-orange-600 transition-all duration-300"
          >
            View All Case Studies
          </Link>
          <Link
            href="/"
            className="inline-block rounded-xl border-2 border-border px-6 py-3 text-center font-bold text-foreground hover:bg-muted transition-all duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
