import type { Metadata, Viewport } from "next";
import { getSettings } from "@/lib/db";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { Testimonials } from "@/components/site/Testimonials";
import { TechAndTarget } from "@/components/site/TechAndTarget";
import { HowItWorks } from "@/components/site/HowItWorks";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export async function generateViewport(): Promise<Viewport> {
  const settings = await getSettings();
  return {
    themeColor: settings.seo.themeColor || "#0f172a",
    width: "device-width",
    initialScale: 1,
  };
}


export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const { seo } = settings;

  const baseUrl = seo.canonicalUrl || "https://oxonompos.vercel.app";

  return {
    metadataBase: new URL(baseUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: seo.author }],
    robots: seo.robots,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.ogUrl,
      siteName: "OxonomPos",
      type: "website",
      locale: "tr_TR",
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: seo.ogTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: seo.twitterCard,
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      images: seo.twitterImage ? [seo.twitterImage] : [],
    },
    other: {
      "geo.region": seo.geoRegion,
      "geo.placename": seo.geoPlacename,
      "geo.position": seo.geoPosition,
      ICBM: seo.icbm,
    },
  };
}

function SchemaOrg({ settings }: { settings: Awaited<ReturnType<typeof getSettings>> }) {
  const { seo, contact } = settings;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OxonomPos",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: seo.description,
    url: seo.canonicalUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
    },
    creator: {
      "@type": "Organization",
      name: "OxonomPos",
      url: seo.canonicalUrl,
      email: contact.email,
      telephone: contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: contact.city,
        addressCountry: contact.country,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function HomePage() {
  const settings = await getSettings();

  return (
    <>
      {settings.seo.schemaOrg && <SchemaOrg settings={settings} />}
      <Navbar />
      <main>
        <Hero slides={settings.hero} />
        <Stats stats={settings.stats} />
        <Features features={settings.features} />
        <ComparisonTable />
        <TechAndTarget />
        <Testimonials testimonials={settings.testimonials} />
        <HowItWorks />
        <CTA />
        <Contact contact={settings.contact} />
      </main>
      <Footer contact={settings.contact} />
    </>
  );
}
