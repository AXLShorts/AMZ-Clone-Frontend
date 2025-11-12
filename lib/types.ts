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

// Homepage Types
export interface TransformationSlide {
  title: string;
  beforeImage: SanityImageAsset;
  afterImage: SanityImageAsset;
  showStats: boolean;
  statType?: string;
  beforeValue?: string;
  afterValue?: string;
  _key: string;
}

export interface TransformationSection {
  slides: TransformationSlide[];
}

export interface SliderImage {
  image: SanityImageAsset;
  caption: string;
  altText?: string;
  _key: string;
}

export interface OfferSection {
  sliderImages: SliderImage[];
}

export interface Homepage {
  _id: string;
  _type: "homepage";
  title: string;
  transformationSection: TransformationSection;
  offerSection: OfferSection;
}

// Portfolio Types
export interface PortfolioItem {
  _id: string;
  _type: "portfolio";
  title: string;
  image: SanityImageAsset;
  category: string;
  description?: string;
  showMetrics: boolean;
  metricType?: string;
  metricBefore?: number;
  metricAfter?: number;
  order: number;
}
