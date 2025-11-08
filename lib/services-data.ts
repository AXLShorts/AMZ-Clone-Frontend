export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  overviewTitle: string;
  overviewDescription: string;
  description: string;
  keywords: string[];
  businessType: string;

  keyHighlights: string[];
  whyChooseUs: Array<{ title: string; description: string }>;

  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  processSteps: Array<{
    title: string;
    description: string;
  }>;

  packages: Array<{
    name: string;
    price: string;
    description?: string;
    features: string[];
    highlighted?: boolean;
  }>;

  benefitsTitle: string;
  benefitsDescription: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "full-listing-optimization",
    title: "Full Listing Optimization",
    category: "Listing Management",
    icon: "🎯",
    heroTitle: "Full Listing Optimization",
    heroDescription:
      "Transform your Amazon listings into revenue-generating machines. Our comprehensive optimization service covers every element—from SEO to psychology—to maximize your visibility, traffic, and conversions.",
    overviewTitle: "Complete Amazon Listing Transformation",
    overviewDescription:
      "Your product listing is more than just a description—it's your 24/7 salesperson. Our full listing optimization service combines cutting-edge SEO, compelling copywriting, and conversion psychology to create listings that don't just rank—they sell. Every word, every image, every detail is strategically crafted to turn browsers into buyers.",
    description:
      "End-to-end Amazon listing optimization for maximum visibility and conversions",
    keywords: [
      "amazon listing optimization",
      "full listing service",
      "amazon seo",
      "product listing optimization",
    ],
    businessType: "business",
    keyHighlights: [
      "Complete listing overhaul—title, bullets, description, backend",
      "Advanced keyword research with competitor analysis",
      "Conversion-focused copywriting by sales experts",
      "A+ Content strategy and implementation",
      "Ongoing performance monitoring and optimization",
    ],
    whyChooseUs: [
      {
        title: "Holistic Approach",
        description:
          "We don't just optimize keywords—we transform your entire listing ecosystem for peak performance.",
      },
      {
        title: "Data-Driven Results",
        description:
          "Every decision backed by market data, competitor analysis, and proven conversion tactics.",
      },
      {
        title: "6000+ Success Stories",
        description:
          "Our optimization strategies have generated millions in revenue for brands worldwide.",
      },
    ],
    features: [
      {
        icon: "🔍",
        title: "Deep Keyword Research",
        description:
          "Identify high-converting keywords your competitors are missing with advanced market analysis.",
      },
      {
        icon: "✍️",
        title: "Strategic Copywriting",
        description:
          "Sales-focused content that speaks to customer pain points and drives action.",
      },
      {
        icon: "🏆",
        title: "Competitor Intelligence",
        description:
          "Analyze top performers in your category and position your product to win.",
      },
      {
        icon: "📊",
        title: "Backend SEO",
        description:
          "Maximize hidden search terms and backend fields for complete visibility.",
      },
      {
        icon: "🎨",
        title: "Visual Optimization",
        description:
          "Image sequence strategy and A+ Content planning for maximum impact.",
      },
      {
        icon: "📈",
        title: "Performance Analytics",
        description:
          "Track rankings, conversions, and ROI with detailed reporting dashboards.",
      },
    ],
    processSteps: [
      {
        title: "Discovery Call",
        description: "Understand your product, goals, and target market",
      },
      {
        title: "Market Analysis",
        description: "Deep dive into keywords, competitors, and opportunities",
      },
      {
        title: "Content Creation",
        description: "Professional copywriting and SEO optimization",
      },
      {
        title: "Client Review",
        description: "Collaborate on refinements and final touches",
      },
      {
        title: "Launch & Monitor",
        description: "Go live and track performance metrics",
      },
    ],
    packages: [],
    benefitsTitle: "Listings That Rank Higher and Convert Better",
    benefitsDescription:
      "Our full optimization service doesn't just improve your rankings—it transforms your entire listing into a high-performing sales asset that consistently drives revenue.",
    benefits: [
      {
        icon: "🚀",
        title: "Page 1 Rankings",
        description: "Dominate search results for your most valuable keywords",
      },
      {
        icon: "💰",
        title: "Higher Conversion Rates",
        description: "Turn more visitors into customers with persuasive copy",
      },
      {
        icon: "⭐",
        title: "Brand Authority",
        description: "Professional listings build trust and credibility",
      },
      {
        icon: "📱",
        title: "Mobile Excellence",
        description: "Optimized for the 70% of shoppers browsing on mobile",
      },
    ],
    stats: [
      { value: "6000+", label: "Listings Optimized" },
      { value: "29%", label: "Avg Conversion Lift" },
      { value: "3-5 days", label: "Turnaround Time" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    id: "2",
    slug: "keyword-ranking",
    title: "Keyword Ranking",
    category: "Organic Growth",
    icon: "🏆",
    heroTitle: "Keyword Ranking Service",
    heroDescription:
      "Crack the Amazon algorithm and dominate page 1 rankings in 14 days. Our proprietary Tri-Rank Strategy combines PPC, organic tactics, and automation to accelerate your product to the top.",
    overviewTitle: "Fast-Track to Page 1 Rankings",
    overviewDescription:
      "Why wait months for organic growth when you can rank in weeks? Our keyword ranking service uses a multi-channel approach that leverages Amazon's algorithm to boost your products to page 1 positions. We don't just get you ranked—we keep you there with sustainable, long-term strategies.",
    description:
      "Accelerated keyword ranking service to dominate Amazon search results",
    keywords: [
      "amazon keyword ranking",
      "product ranking service",
      "amazon seo ranking",
      "page 1 ranking",
    ],
    businessType: "business",
    keyHighlights: [
      "Page 1 rankings within 14-21 days guaranteed",
      "Proprietary Tri-Rank methodology",
      "Sustainable organic growth strategy",
      "Daily ranking position monitoring",
      "Works for new launches and existing products",
    ],
    whyChooseUs: [
      {
        title: "Proven Tri-Rank System",
        description:
          "Our proprietary methodology has ranked 500k+ products to page 1 positions.",
      },
      {
        title: "Fast & Sustainable",
        description:
          "Get quick results that last—we build organic authority, not temporary spikes.",
      },
      {
        title: "Transparent Tracking",
        description:
          "Daily ranking updates and full visibility into campaign performance.",
      },
    ],
    features: [
      {
        icon: "🔍",
        title: "Keyword Strategy",
        description:
          "Target high-value keywords with proven conversion potential.",
      },
      {
        icon: "🎯",
        title: "PPC Acceleration",
        description:
          "Strategic ad campaigns to boost initial visibility and sales velocity.",
      },
      {
        icon: "🤖",
        title: "Automation Tools",
        description:
          "Leverage chatbots and rebate systems for consistent sales momentum.",
      },
      {
        icon: "📊",
        title: "Listing Optimization",
        description:
          "Ensure your listing converts visitors driven by ranking improvements.",
      },
      {
        icon: "📈",
        title: "Daily Tracking",
        description:
          "Monitor keyword positions and adjust strategy in real-time.",
      },
      {
        icon: "🔄",
        title: "Ongoing Support",
        description:
          "Maintain rankings with continuous optimization and adjustments.",
      },
    ],
    processSteps: [
      {
        title: "Strategy Call",
        description: "Identify target keywords and campaign goals",
      },
      {
        title: "Market Analysis",
        description: "Analyze competition and ranking opportunities",
      },
      {
        title: "Campaign Setup",
        description: "Deploy Tri-Rank system across multiple channels",
      },
      {
        title: "Active Monitoring",
        description: "Daily tracking and performance optimization",
      },
      {
        title: "Ranking Achievement",
        description: "Secure page 1 positions and maintain momentum",
      },
    ],
    packages: [],
    benefitsTitle: "Dominate Amazon Search Results",
    benefitsDescription:
      "Higher rankings mean more visibility, more clicks, and more sales. Our ranking service puts your products in front of ready-to-buy customers.",
    benefits: [
      {
        icon: "⚡",
        title: "Rapid Results",
        description: "Achieve page 1 rankings in 14-21 days, not months",
      },
      {
        icon: "🚀",
        title: "Increased Visibility",
        description:
          "Dominate search results for your most profitable keywords",
      },
      {
        icon: "💰",
        title: "Higher Sales Volume",
        description:
          "More organic traffic translates to sustainable revenue growth",
      },
      {
        icon: "📊",
        title: "Full Transparency",
        description:
          "Daily reports showing exact ranking positions and progress",
      },
    ],
    stats: [
      { value: "500k+", label: "Products Ranked" },
      { value: "14 days", label: "Avg Time to Page 1" },
      { value: "3-5x", label: "Sales Growth" },
      { value: "98%", label: "Success Rate" },
    ],
  },
  {
    id: "3",
    slug: "a-ebc-content",
    title: "A+/EBC Content",
    category: "Brand Content",
    icon: "🎨",
    heroTitle: "A+ Enhanced Brand Content",
    heroDescription:
      "Transform your product pages into visual stories that sell. Our award-winning designers create stunning A+ Content modules that boost conversions by 15% or more.",
    overviewTitle: "Visual Content That Converts",
    overviewDescription:
      "A+ Content (Enhanced Brand Content) is your secret weapon for standing out on Amazon. Our expert design team creates custom modules that showcase your brand story, highlight product features, and build trust—all while driving significantly higher conversion rates.",
    description:
      "Professional A+ Content and EBC design services to elevate your Amazon brand",
    keywords: [
      "amazon a+ content",
      "enhanced brand content",
      "ebc design",
      "amazon brand content",
    ],
    businessType: "business",
    keyHighlights: [
      "15%+ average conversion rate increase",
      "Custom designs tailored to your brand identity",
      "Professional photography and graphics included",
      "Mobile-optimized layouts for all devices",
      "Fast 3-5 day turnaround time",
    ],
    whyChooseUs: [
      {
        title: "Design Excellence",
        description:
          "Award-winning designers with extensive Amazon A+ Content experience.",
      },
      {
        title: "Conversion Focused",
        description:
          "Every module element strategically designed to drive purchases, not just look pretty.",
      },
      {
        title: "Complete Service",
        description:
          "From concept to upload—we handle photography, design, copy, and implementation.",
      },
    ],
    features: [
      {
        icon: "🖼️",
        title: "Custom Module Design",
        description:
          "Bespoke layouts that tell your brand story and showcase products beautifully.",
      },
      {
        icon: "📸",
        title: "Professional Photography",
        description:
          "Product and lifestyle images that highlight features and build desire.",
      },
      {
        icon: "✏️",
        title: "Strategic Copywriting",
        description:
          "SEO-friendly, benefit-driven text that complements visuals perfectly.",
      },
      {
        icon: "🎨",
        title: "Brand Consistency",
        description:
          "Designs aligned with your brand guidelines and visual identity.",
      },
      {
        icon: "📤",
        title: "Upload & Management",
        description:
          "We handle all technical aspects of uploading and managing your content.",
      },
      {
        icon: "🔄",
        title: "Unlimited Revisions",
        description: "Refine until perfect—your satisfaction is guaranteed.",
      },
    ],
    processSteps: [
      {
        title: "Brand Discovery",
        description: "Understand your brand story and visual identity",
      },
      {
        title: "Module Planning",
        description: "Select optimal layouts and content strategy",
      },
      {
        title: "Design & Creation",
        description: "Professional design with photography and copy",
      },
      {
        title: "Review & Refine",
        description: "Collaborate on revisions until perfect",
      },
      {
        title: "Upload & Launch",
        description: "Technical implementation and quality assurance",
      },
    ],
    packages: [],
    benefitsTitle: "Stand Out and Convert More Shoppers",
    benefitsDescription:
      "A+ Content gives you the visual real estate to tell your story, build trust, and convince shoppers why your product is the best choice.",
    benefits: [
      {
        icon: "📈",
        title: "15% Higher Conversions",
        description:
          "Proven average lift in conversion rates with professional A+ Content",
      },
      {
        icon: "🎯",
        title: "Brand Differentiation",
        description:
          "Stand out from competitors with unique, professional presentation",
      },
      {
        icon: "😊",
        title: "Build Trust",
        description:
          "Professional design builds credibility and customer confidence",
      },
      {
        icon: "💎",
        title: "Premium Positioning",
        description: "Elevate perceived value and justify premium pricing",
      },
    ],
    stats: [
      { value: "5000+", label: "Modules Created" },
      { value: "15%", label: "Avg Conversion Lift" },
      { value: "3-5 days", label: "Turnaround Time" },
      { value: "99%", label: "Satisfaction Rate" },
    ],
  },
  {
    id: "4",
    slug: "account-management",
    title: "Account Management",
    category: "Full Service",
    icon: "⚙️",
    heroTitle: "Amazon Account Management",
    heroDescription:
      "Let experts run your entire Amazon operation. From inventory to advertising to customer service—we handle it all so you can focus on growing your brand.",
    overviewTitle: "Your Dedicated Amazon Success Team",
    overviewDescription:
      "Running a successful Amazon business requires constant attention to listings, inventory, advertising, customer service, and strategy. Our full account management service provides you with a dedicated team of Amazon experts who handle every aspect of your seller account, allowing you to focus on product development and business growth.",
    description:
      "Complete Amazon account management service for hands-free business growth",
    keywords: [
      "amazon account management",
      "amazon seller management",
      "full service amazon",
      "amazon business management",
    ],
    businessType: "business",
    keyHighlights: [
      "Dedicated account manager assigned to your business",
      "Complete day-to-day operations management",
      "PPC, inventory, listings, and customer service",
      "Proactive problem-solving and optimization",
      "Monthly strategy sessions and reporting",
    ],
    whyChooseUs: [
      {
        title: "Experienced Team",
        description:
          "Amazon experts with years of experience managing multi-million dollar accounts.",
      },
      {
        title: "Comprehensive Management",
        description:
          "We handle everything—from listings to ads to inventory to customer issues.",
      },
      {
        title: "Proactive Approach",
        description:
          "We don't wait for problems—we anticipate and prevent them before they impact sales.",
      },
    ],
    features: [
      {
        icon: "📊",
        title: "Daily Performance Monitoring",
        description:
          "Track sales, rankings, inventory, and metrics with daily oversight.",
      },
      {
        icon: "📢",
        title: "PPC Campaign Management",
        description:
          "Optimize advertising spend and maximize ROAS across all ad types.",
      },
      {
        icon: "📦",
        title: "Inventory Management",
        description:
          "Prevent stockouts and overselling with proactive inventory planning.",
      },
      {
        icon: "⭐",
        title: "Review & Feedback Management",
        description:
          "Monitor reviews, respond to feedback, and protect your brand reputation.",
      },
      {
        icon: "🎯",
        title: "Listing Optimization",
        description:
          "Continuous A/B testing and optimization of titles, images, and content.",
      },
      {
        icon: "📞",
        title: "Customer Service Support",
        description:
          "Handle customer inquiries, returns, and issues professionally.",
      },
    ],
    processSteps: [
      {
        title: "Account Audit",
        description: "Comprehensive analysis of your current account",
      },
      {
        title: "Team Assignment",
        description: "Meet your dedicated account manager and team",
      },
      {
        title: "Strategy Development",
        description: "Create custom growth plan for your business",
      },
      {
        title: "Daily Management",
        description: "Handle all operations and optimizations",
      },
      {
        title: "Monthly Reviews",
        description: "Strategy sessions with performance reporting",
      },
    ],
    packages: [],
    benefitsTitle: "Focus on Growth While We Handle Operations",
    benefitsDescription:
      "Stop spending hours on Amazon minutiae. Our team handles the day-to-day so you can focus on product development, sourcing, and strategic growth.",
    benefits: [
      {
        icon: "⏰",
        title: "Save 20+ Hours Weekly",
        description: "Reclaim your time for high-value business activities",
      },
      {
        icon: "📈",
        title: "Consistent Growth",
        description:
          "Expert management drives steady sales and market share gains",
      },
      {
        icon: "🛡️",
        title: "Risk Mitigation",
        description:
          "Prevent account issues, stockouts, and suppressed listings",
      },
      {
        icon: "💡",
        title: "Expert Strategy",
        description:
          "Leverage years of Amazon experience for competitive advantage",
      },
    ],
    stats: [
      { value: "200+", label: "Accounts Managed" },
      { value: "$50M+", label: "Revenue Managed" },
      { value: "35%", label: "Avg Growth Rate" },
      { value: "24/7", label: "Account Monitoring" },
    ],
  },
  {
    id: "5",
    slug: "ppc-management",
    title: "PPC Management",
    category: "Advertising",
    icon: "📢",
    heroTitle: "Amazon PPC Management",
    heroDescription:
      "Lower ACOS, higher ROAS, and maximum profitability. Our PPC experts manage Sponsored Products, Brands, Display, and Video ads to drive profitable growth at scale.",
    overviewTitle: "Data-Driven PPC That Actually Profits",
    overviewDescription:
      "Amazon PPC is complex—between Sponsored Products, Brands, Display, and Video ads, managing profitable campaigns requires expertise and constant optimization. Our PPC management service combines advanced automation, human expertise, and proven strategies to lower your ad costs while increasing sales.",
    description:
      "Professional Amazon PPC advertising management for all ad formats",
    keywords: [
      "amazon ppc management",
      "amazon advertising",
      "sponsored products",
      "amazon ads management",
    ],
    businessType: "business",
    keyHighlights: [
      "40% average TACOS reduction",
      "$1.5M+ in monthly ad spend managed",
      "All ad types: Sponsored Products, Brands, Display, Video",
      "Advanced bid automation and optimization",
      "Real-time dashboards and transparent reporting",
    ],
    whyChooseUs: [
      {
        title: "Proven Performance",
        description:
          "Consistent ACOS reductions and ROAS improvements across 250+ client accounts.",
      },
      {
        title: "Multi-Channel Expertise",
        description:
          "Master all Amazon ad formats and know exactly when to use each one.",
      },
      {
        title: "Advanced Technology",
        description:
          "Proprietary automation tools combined with expert human oversight.",
      },
    ],
    features: [
      {
        icon: "🎯",
        title: "Sponsored Products",
        description:
          "Auto and manual campaigns optimized for maximum profitability.",
      },
      {
        icon: "🏷️",
        title: "Sponsored Brands",
        description:
          "Drive brand awareness and traffic with headline and video ads.",
      },
      {
        icon: "🖥️",
        title: "Sponsored Display",
        description: "Retarget shoppers and conquer competitor product pages.",
      },
      {
        icon: "🎬",
        title: "Sponsored Video",
        description: "Capture attention with engaging video advertisements.",
      },
      {
        icon: "📊",
        title: "Advanced Analytics",
        description:
          "Real-time dashboards tracking ACOS, TACOS, ROAS, and attribution.",
      },
      {
        icon: "🤖",
        title: "Bid Automation",
        description: "AI-powered bid adjustments based on performance data.",
      },
    ],
    processSteps: [
      {
        title: "Account Analysis",
        description: "Audit current campaigns and identify opportunities",
      },
      {
        title: "Strategy Development",
        description: "Create custom PPC strategy for your goals",
      },
      {
        title: "Campaign Setup",
        description: "Build optimized campaign structure",
      },
      {
        title: "Continuous Optimization",
        description: "Daily bid adjustments and performance monitoring",
      },
      {
        title: "Monthly Reporting",
        description: "Detailed analytics and strategy refinement",
      },
    ],
    packages: [],
    benefitsTitle: "Profitable Advertising That Scales",
    benefitsDescription:
      "Stop wasting ad budget on underperforming campaigns. Our PPC management drives qualified traffic that converts while steadily improving your profitability.",
    benefits: [
      {
        icon: "💵",
        title: "Lower ACOS",
        description:
          "Reduce advertising costs by 40% on average while maintaining sales",
      },
      {
        icon: "📈",
        title: "Increase Sales",
        description:
          "Strategic targeting drives more conversions from your ad spend",
      },
      {
        icon: "🎲",
        title: "Smart Testing",
        description: "Continuous A/B testing identifies winning strategies",
      },
      {
        icon: "⏱️",
        title: "Save Time",
        description:
          "Automated optimization frees you from constant campaign management",
      },
    ],
    stats: [
      { value: "$1.5M+", label: "Monthly Ad Spend" },
      { value: "250+", label: "Client Accounts" },
      { value: "40%", label: "Avg TACOS Reduction" },
      { value: "3.5x", label: "Avg ROAS" },
    ],
  },
  {
    id: "6",
    slug: "brand-storefronts",
    title: "Brand Storefronts",
    category: "Brand Building",
    icon: "🏬",
    heroTitle: "Amazon Brand Storefronts",
    heroDescription:
      "Create a premium shopping destination that showcases your full product line. Our designers build stunning Amazon Storefronts that increase brand loyalty and cross-selling opportunities.",
    overviewTitle: "Your Brand's Home on Amazon",
    overviewDescription:
      "An Amazon Brand Storefront is like having your own mini-website within Amazon—a dedicated space to tell your brand story, showcase your catalog, and create a cohesive shopping experience. Our design team creates visually stunning storefronts that drive traffic, increase conversions, and build long-term brand equity.",
    description:
      "Professional Amazon Storefront design and development services",
    keywords: [
      "amazon storefront",
      "amazon brand store",
      "storefront design",
      "amazon brand page",
    ],
    businessType: "business",
    keyHighlights: [
      "Custom multi-page storefront design",
      "Professional brand storytelling and visuals",
      "Mobile-optimized responsive layouts",
      "Shoppable image galleries and videos",
      "Complete setup and ongoing optimization",
    ],
    whyChooseUs: [
      {
        title: "Design Excellence",
        description:
          "Award-winning designers create storefronts that stand out and drive sales.",
      },
      {
        title: "Strategic Layout",
        description:
          "User experience optimized to guide shoppers through your product ecosystem.",
      },
      {
        title: "Brand Storytelling",
        description:
          "Compelling narratives that build emotional connections with customers.",
      },
    ],
    features: [
      {
        icon: "🎨",
        title: "Custom Design",
        description:
          "Unique layouts tailored to your brand identity and product mix.",
      },
      {
        icon: "📱",
        title: "Mobile Optimization",
        description:
          "Perfect display on all devices where 70%+ of shoppers browse.",
      },
      {
        icon: "🖼️",
        title: "Visual Storytelling",
        description:
          "High-quality images and videos that showcase your brand story.",
      },
      {
        icon: "🛍️",
        title: "Shoppable Content",
        description:
          "Strategic product placement and cross-sell opportunities.",
      },
      {
        icon: "📊",
        title: "Analytics Integration",
        description: "Track traffic, sales attribution, and customer behavior.",
      },
      {
        icon: "🔄",
        title: "Ongoing Updates",
        description:
          "Seasonal refreshes and promotional updates to keep content fresh.",
      },
    ],
    processSteps: [
      {
        title: "Brand Discovery",
        description: "Understand your brand values and target audience",
      },
      {
        title: "Content Strategy",
        description: "Plan storefront structure and product organization",
      },
      {
        title: "Design Creation",
        description: "Professional design with custom graphics and copy",
      },
      {
        title: "Client Approval",
        description: "Review and refine until perfect",
      },
      {
        title: "Launch & Optimize",
        description: "Go live and track performance metrics",
      },
    ],
    packages: [],
    benefitsTitle: "Build Brand Equity That Drives Long-Term Growth",
    benefitsDescription:
      "A professional storefront isn't just about looking good—it's about creating a branded shopping experience that increases customer lifetime value and brand loyalty.",
    benefits: [
      {
        icon: "🏆",
        title: "Brand Authority",
        description: "Professional storefront builds credibility and trust",
      },
      {
        icon: "📈",
        title: "Increased AOV",
        description: "Cross-selling opportunities boost average order value",
      },
      {
        icon: "🔗",
        title: "Traffic Control",
        description: "Direct external traffic to your branded destination",
      },
      {
        icon: "💫",
        title: "Premium Positioning",
        description:
          "Differentiate from competitors with superior presentation",
      },
    ],
    stats: [
      { value: "500+", label: "Storefronts Created" },
      { value: "45%", label: "Avg Cross-Sell Lift" },
      { value: "1 week", label: "Design Turnaround" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    id: "7",
    slug: "product-packaging-print-ready-files",
    title: "Product Packaging Print Ready Files",
    category: "Product Design",
    icon: "📦",
    heroTitle: "Product Packaging Design",
    heroDescription:
      "Make unforgettable first impressions with premium packaging that customers want to unbox and share. We create print-ready files that bring your brand to life in the physical world.",
    overviewTitle: "Packaging That Sells and Delights",
    overviewDescription:
      "Your product packaging is a critical brand touchpoint—it's the first physical interaction customers have with your product. Our expert designers create stunning packaging that not only protects your product but also creates an unboxing experience that drives reviews, referrals, and repeat purchases.",
    description:
      "Professional product packaging design with print-ready files for manufacturing",
    keywords: [
      "product packaging design",
      "print ready files",
      "amazon packaging",
      "custom packaging design",
    ],
    businessType: "business",
    keyHighlights: [
      "Complete packaging design from concept to print",
      "Print-ready files for immediate manufacturing",
      "Brand-aligned design with unboxing experience",
      "Multiple format options and revisions included",
      "Direct coordination with manufacturers if needed",
    ],
    whyChooseUs: [
      {
        title: "Manufacturing Expertise",
        description:
          "We understand print specifications and work directly with manufacturers worldwide.",
      },
      {
        title: "Brand Consistency",
        description:
          "Packaging designs align perfectly with your Amazon presence and brand identity.",
      },
      {
        title: "Unboxing Focus",
        description:
          "Create shareable moments that drive organic marketing and reviews.",
      },
    ],
    features: [
      {
        icon: "🎨",
        title: "Custom Design",
        description:
          "Unique packaging tailored to your product and brand personality.",
      },
      {
        icon: "📐",
        title: "Print-Ready Files",
        description:
          "Complete dieline, color separations, and specifications for production.",
      },
      {
        icon: "🏷️",
        title: "Multi-Format Output",
        description:
          "Files optimized for various printing methods and materials.",
      },
      {
        icon: "📦",
        title: "Structural Design",
        description: "Functional packaging that protects while impressing.",
      },
      {
        icon: "🔄",
        title: "Revision Rounds",
        description: "Unlimited revisions until you love the final design.",
      },
      {
        icon: "🏭",
        title: "Vendor Coordination",
        description:
          "We can work directly with your manufacturer to ensure perfect results.",
      },
    ],
    processSteps: [
      {
        title: "Product Analysis",
        description: "Understand dimensions, materials, and requirements",
      },
      {
        title: "Concept Development",
        description: "Create initial design concepts and mockups",
      },
      {
        title: "Design Refinement",
        description: "Refine based on your feedback and preferences",
      },
      {
        title: "Technical Files",
        description: "Create print-ready files with specifications",
      },
      {
        title: "Manufacturer Support",
        description: "Assist with production questions and quality control",
      },
    ],
    packages: [],
    benefitsTitle: "Packaging That Drives Reviews and Repeat Purchases",
    benefitsDescription:
      "Premium packaging isn't an expense—it's an investment in brand perception, customer satisfaction, and organic marketing through social sharing.",
    benefits: [
      {
        icon: "⭐",
        title: "More 5-Star Reviews",
        description: "Premium unboxing experiences drive positive feedback",
      },
      {
        icon: "📸",
        title: "Social Sharing",
        description: "Instagram-worthy packaging generates organic marketing",
      },
      {
        icon: "🔁",
        title: "Higher Retention",
        description: "Quality packaging increases customer lifetime value",
      },
      {
        icon: "💎",
        title: "Premium Perception",
        description: "Professional packaging justifies premium pricing",
      },
    ],
    stats: [
      { value: "1000+", label: "Designs Created" },
      { value: "25%", label: "Review Rate Increase" },
      { value: "5-7 days", label: "Design Timeline" },
      { value: "100%", label: "Print Success Rate" },
    ],
  },
  {
    id: "8",
    slug: "ctr-image-creation-optimization",
    title: "CTR Image Creation/Optimization",
    category: "Visual Optimization",
    icon: "📸",
    heroTitle: "CTR Image Optimization",
    heroDescription:
      "Stand out in search results and drive more clicks with strategically optimized product images. Our designers create main images that grab attention and boost click-through rates by 30% or more.",
    overviewTitle: "Images That Stop the Scroll",
    overviewDescription:
      "Your main image has one job: get the click. In a sea of search results, you have milliseconds to capture attention. Our CTR-optimized images combine visual hierarchy, strategic text overlays, and psychological triggers to dramatically increase click-through rates and drive more qualified traffic to your listings.",
    description:
      "Professional product image optimization to maximize click-through rates",
    keywords: [
      "ctr optimization",
      "amazon main image",
      "product photography",
      "click through rate",
    ],
    businessType: "business",
    keyHighlights: [
      "30%+ average CTR improvement",
      "A/B tested design elements proven to convert",
      "Strategic text overlays and badges",
      "Competitor analysis and differentiation",
      "Full Amazon TOS compliance guaranteed",
    ],
    whyChooseUs: [
      {
        title: "Data-Driven Design",
        description:
          "Every design decision backed by CTR testing data from thousands of products.",
      },
      {
        title: "Category Expertise",
        description:
          "We know what works in your specific category and against your competitors.",
      },
      {
        title: "Compliance Focused",
        description:
          "All images fully compliant with Amazon's strict main image guidelines.",
      },
    ],
    features: [
      {
        icon: "🎨",
        title: "Strategic Design",
        description:
          "Visual hierarchy optimized to grab attention in crowded search results.",
      },
      {
        icon: "📊",
        title: "Competitor Analysis",
        description:
          "Study top performers and design images that stand out from the crowd.",
      },
      {
        icon: "🏷️",
        title: "Text Overlays",
        description:
          "Strategic use of text, badges, and callouts within Amazon guidelines.",
      },
      {
        icon: "🔍",
        title: "Detail Optimization",
        description:
          "Highlight key features and benefits that drive purchase decisions.",
      },
      {
        icon: "📱",
        title: "Mobile Preview",
        description:
          "Ensure images work perfectly on mobile where most shoppers browse.",
      },
      {
        icon: "✅",
        title: "Amazon Compliance",
        description:
          "100% compliant with Amazon's image requirements and restrictions.",
      },
    ],
    processSteps: [
      {
        title: "Image Audit",
        description: "Analyze current images and competitor landscape",
      },
      {
        title: "Strategy Development",
        description: "Identify CTR opportunities and design approach",
      },
      {
        title: "Design Creation",
        description: "Create optimized main image variations",
      },
      {
        title: "A/B Testing",
        description: "Test variations to identify top performer",
      },
      {
        title: "Implementation",
        description: "Upload winning design and monitor results",
      },
    ],
    packages: [],
    benefitsTitle: "More Clicks, More Traffic, More Sales",
    benefitsDescription:
      "A higher CTR doesn't just mean more traffic—it signals to Amazon that your product is relevant, which improves your organic rankings and creates a compounding growth effect.",
    benefits: [
      {
        icon: "👁️",
        title: "30% Higher CTR",
        description: "Proven average improvement in click-through rates",
      },
      {
        icon: "📈",
        title: "Better Rankings",
        description: "Higher CTR improves organic search rankings",
      },
      {
        icon: "💰",
        title: "More Sales",
        description: "More qualified traffic means more conversions",
      },
      {
        icon: "🎯",
        title: "Stand Out",
        description: "Differentiate from competitors in search results",
      },
    ],
    stats: [
      { value: "10,000+", label: "Images Optimized" },
      { value: "30%", label: "Avg CTR Increase" },
      { value: "2-3 days", label: "Turnaround Time" },
      { value: "100%", label: "Amazon Compliant" },
    ],
  },
];
