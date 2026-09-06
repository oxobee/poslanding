// Types for the entire application

export interface SiteSettings {
  seo: SEOSettings;
  contact: ContactSettings;
  hero: HeroSlide[];
  testimonials: Testimonial[];
  features: FeatureCategory[];
  stats: Stat[];
  updatedAt: string;
}

export interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterCard: "summary" | "summary_large_image";
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  icbm: string;
  canonicalUrl: string;
  robots: string;
  author: string;
  themeColor: string;
  schemaOrg: boolean;
}

export interface ContactSettings {
  phone: string;
  phone2: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  mapUrl: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  youtube: string;
  workingHours: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  ctaSecondaryText: string;
  ctaSecondaryUrl: string;
  image: string;
  badge: string;
  order: number;
  active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  order: number;
  active: boolean;
}

export interface FeatureCategory {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  features: string[];
  order: number;
  active: boolean;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface MediaFile {
  id: string;
  url: string;
  filename: string;
  size: number;
  uploadedAt: string;
  type: string;
}
