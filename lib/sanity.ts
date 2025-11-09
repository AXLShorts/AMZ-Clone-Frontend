import { client, urlFor } from "./sanity.client";
import type { CaseStudy } from "./types";

// GROQ query for fetching all case studies
const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  author,
  publishedAt,
  readingTime,
  featuredImage,
  category,
  seoDescription
}`;

// GROQ query for fetching a single case study by slug
const CASE_STUDY_BY_SLUG_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  author,
  publishedAt,
  readingTime,
  featuredImage,
  content,
  category,
  seoDescription
}`;

/**
 * Fetch all case studies from Sanity
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const caseStudies = await client.fetch<CaseStudy[]>(CASE_STUDIES_QUERY);
    return caseStudies;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

/**
 * Fetch a single case study by slug
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  try {
    const caseStudy = await client.fetch<CaseStudy | null>(
      CASE_STUDY_BY_SLUG_QUERY,
      { slug }
    );
    return caseStudy;
  } catch (error) {
    console.error(`Error fetching case study with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get optimized image URL from Sanity
 */
export function getImageUrl(source: Parameters<typeof urlFor>[0]) {
  return urlFor(source).url();
}

/**
 * Get optimized image URL with specific dimensions
 */
export function getOptimizedImageUrl(
  source: Parameters<typeof urlFor>[0],
  width?: number,
  height?: number
) {
  let builder = urlFor(source).auto("format").quality(85);

  if (width) {
    builder = builder.width(width);
  }
  if (height) {
    builder = builder.height(height);
  }

  return builder.url();
}
