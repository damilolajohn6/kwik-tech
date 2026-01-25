import { Metadata } from "next";
import { RealEstateHero } from "@/components/real-estate/hero";
import { RealEstateServices } from "@/components/real-estate/services";
import { FeaturedProperties } from "@/components/real-estate/featured-properties";
import { RealEstateProcess } from "@/components/real-estate/process";
import { RealEstateFeatures } from "@/components/real-estate/features";
import { PropertyPortfolio } from "@/components/real-estate/portfolio";
// import { RealEstateTestimonials } from "@/components/real-estate/testimonials";
import { RealEstateStats } from "@/components/real-estate/stats";
import { RealEstateFAQ } from "@/components/real-estate/faq";
import { RealEstateCTA } from "@/components/real-estate/cta";
// import { RealEstatePartners } from "@/components/real-estate/partners";

export const metadata: Metadata = {
  title: "Real Estate & Property Development | Qwik Multi Services",
  description:
    "Comprehensive real estate technology solutions and property development services. From PropTech platforms to smart building integration, we transform the real estate industry.",
  keywords: [
    "real estate technology",
    "PropTech",
    "property development",
    "property management",
    "virtual property tours",
    "smart buildings",
    "real estate Nigeria",
    "property listings",
  ],
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen">
      <RealEstateHero />
      <RealEstateStats />
      <RealEstateServices />
      <FeaturedProperties />
      <RealEstateFeatures />
      <RealEstateProcess />
      <PropertyPortfolio />
      {/* <RealEstateTestimonials /> */}
      {/* <RealEstatePartners /> */}
      <RealEstateFAQ />
      <RealEstateCTA />
    </main>
  );
}
