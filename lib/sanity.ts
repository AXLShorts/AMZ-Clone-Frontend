import { client, urlFor } from "./sanity.client";
import type { CaseStudy, Homepage, PortfolioItem, ServicePage } from "./types";

// GROQ query for fetching portfolio items
const PORTFOLIO_QUERY = `*[_type == "portfolio"] | order(order asc) {
  _id,
  _type,
  title,
  images,
  category,
  description,
  showMetrics,
  metricType,
  metricBefore,
  metricAfter,
  order
}`;

// GROQ query for fetching homepage content
const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  _id,
  _type,
  title,
  heroSection {
    video,
    poster
  },
  aboutSection {
    video,
    poster
  },
  auditSection {
    auditImage
  },
  transformationSection {
    heading,
    accentText,
    description,
    slides[] {
      _key,
      title,
      beforeImage,
      afterImage,
      showStats,
      statType,
      beforeValue,
      afterValue
    },
    features,
    proofStatement
  },
  transformationContentSection {
    transformationContentImage
  },
  offerSection {
    heading,
    subheading,
    description,
    deliverables,
    ctaText,
    ctaUrl,
    ctaSubtext,
    sliderImages[] {
      _key,
      image,
      caption,
      altText
    }
  },
  testimonialsSection {
    testimonials[] {
      _key,
      author,
      role,
      rating,
      title,
      quote,
      date,
      experienceDate,
      isVerified,
      avatar
    }
  }
}`;

// GROQ query for fetching service pages
const SERVICE_QUERY = (type: string) => `*[_type == "${type}"][0] {
  _id,
  _type,
  hero,
  stats,
  marqueeImages,
  contentBlock {
    heading,
    headingHighlight,
    description,
    image,
    quote,
    quoteAuthor,
    gridItems,
    listItems,
    overlayText
  },
  contentBlock2 {
    heading,
    headingHighlight,
    description,
    image,
    listItems
  },
  contentBlock3 {
    heading,
    headingHighlight,
    description,
    image,
    listItems
  },
  contentBlock4 {
    heading,
    headingHighlight,
    description,
    image,
    listItems
  },
  features {
    heading,
    headingHighlight,
    subheading,
    featureList
  },
  benefits {
    heading,
    headingHighlight,
    subheading,
    benefitList
  },
  process {
    heading,
    headingHighlight,
    subheading,
    steps[] {
      number,
      title,
      description
    }
  }
}`;

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
 * Fetch homepage content from Sanity
 */
export async function getHomepage(): Promise<Homepage | null> {
  try {
    const homepage = await client.fetch<Homepage>(HOMEPAGE_QUERY);
    return homepage;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

/**
 * Fetch service page content from Sanity
 */
export async function getServicePage(
  type: string
): Promise<ServicePage | null> {
  try {
    const servicePage = await client.fetch<ServicePage>(SERVICE_QUERY(type));
    return servicePage;
  } catch (error) {
    console.error(`Error fetching service page ${type}:`, error);
    return null;
  }
}

/**
 * Fetch all portfolio items from Sanity
 */
export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const items = await client.fetch<PortfolioItem[]>(PORTFOLIO_QUERY);
    return items;
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return [];
  }
}

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
