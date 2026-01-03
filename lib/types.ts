// Sanity Image Asset
export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

// Image Block Item for case study content
export interface ImageBlockItem {
  asset: SanityImageAsset;
  caption?: string;
  _key?: string;
}

// Image Block for case study content
export interface ImageBlock {
  _type: "imageBlock";
  _key: string;
  images: ImageBlockItem[];
  layout: "single" | "two" | "three" | "grid";
}

// Link annotation
export interface LinkAnnotation {
  _type: "link";
  _key: string;
  href: string;
}

// Text span in portable text
export interface TextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

// Block content with proper typing
export interface BlockContent {
  _type: "block";
  _key: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  level?: number;
  children: TextSpan[];
  markDefs?: LinkAnnotation[];
}

// Union type for all content blocks
export type ContentBlock = BlockContent | ImageBlock;

// Featured Image
export interface FeaturedImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Slug
export interface Slug {
  _type: "slug";
  current: string;
}

// Case Study Category
export type CaseStudyCategory =
  | "sales-growth"
  | "optimization"
  | "strategy"
  | "best-practices";

// Main Case Study interface
export interface CaseStudy {
  _id: string;
  _type: "caseStudy";
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  excerpt: string;
  author?: string;
  publishedAt: string;
  readingTime: number;
  featuredImage: FeaturedImage;
  content: ContentBlock[];
  category: CaseStudyCategory;
  seoDescription?: string;
}

// Service Types
export interface ServiceStats {
  value: string;
  label: string;
}

export interface ServiceFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface ServiceContentBlock {
  heading: string;
  headingHighlight?: string;
  description: string;
  image: SanityImageAsset;
  quote?: string;
  quoteAuthor?: string;
  gridItems?: { label: string; icon?: string }[];
  listItems?: string[];
  overlayText?: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessSection {
  heading: string;
  headingHighlight?: string;
  subheading?: string;
  steps: ServiceProcessStep[];
}

export interface ServicePage {
  _id: string;
  _type: string;
  hero: {
    tagline?: string;
    title: string;
    titleHighlight?: string;
    description: string;
  };
  stats: ServiceStats[];
  marqueeImages?: SanityImageAsset[];
  contentBlock?: ServiceContentBlock;
  contentBlock2?: ServiceContentBlock;
  contentBlock3?: ServiceContentBlock;
  contentBlock4?: ServiceContentBlock;
  features?: {
    heading: string;
    headingHighlight?: string;
    subheading?: string;
    featureList: ServiceFeature[];
  };
  benefits?: {
    heading: string;
    headingHighlight?: string;
    subheading?: string;
    benefitList: ServiceBenefit[];
  };
  process?: ServiceProcessSection;
}

// Portfolio Item
export interface PortfolioItem {
  _id: string;
  _type: "portfolio";
  title: string;
  images: SanityImageAsset[];
  category: string;
  description?: string;
  showMetrics: boolean;
  metricType?: string;
  metricBefore?: number;
  metricAfter?: number;
  order?: number;
}

export interface TransformationSlide {
  _key: string;
  title: string;
  beforeImage: SanityImageAsset;
  afterImage: SanityImageAsset;
  showStats: boolean;
  statType?: string;
  beforeValue?: string;
  afterValue?: string;
}

export interface TransformationSection {
  heading?: string;
  accentText?: string;
  description?: string;
  slides: TransformationSlide[];
  features?: string[];
  proofStatement?: string;
}

export interface SliderImage {
  image: SanityImageAsset;
  caption: string;
  altText?: string;
  _key: string;
}

export interface OfferSection {
  heading?: string;
  subheading?: string;
  description?: string;
  deliverables?: string[];
  ctaText?: string;
  ctaUrl?: string;
  ctaSubtext?: string;
  sliderImages: SliderImage[];
}

export interface Testimonial {
  _key: string;
  author: string;
  role?: string;
  rating: number;
  title: string;
  quote: string;
  date: string;
  experienceDate?: string;
  isVerified?: boolean;
  avatar?: SanityImageAsset;
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
}

export interface Homepage {
  _id: string;
  _type: "homepage";
  title: string;
  seoDescription?: string;
  heroSection?: {
    video: { asset: { _ref: string } };
    poster: SanityImageAsset;
  };
  aboutSection?: {
    video: { asset: { _ref: string } };
    poster: SanityImageAsset;
  };
  auditSection?: {
    auditImage: SanityImageAsset;
  };
  transformationSection: TransformationSection;
  transformationContentSection?: {
    transformationContentImage: SanityImageAsset;
  };
  offerSection: OfferSection;
  testimonialsSection?: TestimonialsSection;
}
