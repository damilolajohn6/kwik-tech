import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailHero } from "@/components/services/service-detail-hero";
import { ServiceDetailContent } from "@/components/services/service-detail-content";
import { ServiceDetailFeatures } from "@/components/services/service-detail-features";
import { ServiceDetailTech } from "@/components/services/service-detail-tech";
import { ServiceDetailCaseStudies } from "@/components/services/service-detail-case-studies";
import { ServiceDetailFAQ } from "@/components/services/service-detail-faq";
import { ServiceDetailCTA } from "@/components/services/service-detail-cta";
import { ServiceDetailRelated } from "@/components/services/service-detail-related";
import { SERVICES_DETAILED } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES_DETAILED.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILED.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Qwik Multi Services`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DETAILED.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailFeatures service={service} />
      <ServiceDetailTech service={service} />
      <ServiceDetailCaseStudies service={service} />
      <ServiceDetailFAQ service={service} />
      <ServiceDetailCTA service={service} />
      <ServiceDetailRelated currentSlug={service.slug} />
    </main>
  );
}