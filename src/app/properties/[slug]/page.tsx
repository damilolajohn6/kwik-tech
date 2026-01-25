import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetail } from "@/components/properties/property-detail";
import { RelatedProperties } from "@/components/properties/related-properties";
import { PropertyCTA } from "@/components/properties/property-cta";
import {
  FEATURED_PROPERTIES,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/real-estate-constants";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Property Not Found | Qwik Multi Services",
    };
  }

  return {
    title: `${property.title} | Qwik Multi Services`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  };
}

export async function generateStaticParams() {
  return FEATURED_PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(property.slug, property.type);

  return (
    <main className="min-h-screen">
      <PropertyDetail property={property} />
      <RelatedProperties properties={relatedProperties} />
      <PropertyCTA property={property} />
    </main>
  );
}
