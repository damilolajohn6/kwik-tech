import { Metadata } from "next";
import { PropertiesHero } from "@/components/properties/properties-hero";
import { PropertiesGrid } from "@/components/properties/properties-grid";
import { PropertiesCTA } from "@/components/properties/properties-cta";

export const metadata: Metadata = {
  title: "Properties | Qwik Multi Services",
  description:
    "Browse our extensive collection of residential and commercial properties across Nigeria. Find your dream property in Lagos, Abuja, Port Harcourt, and more.",
  keywords: [
    "properties for sale Nigeria",
    "houses for sale Lagos",
    "commercial property Abuja",
    "real estate listings",
    "buy property Nigeria",
  ],
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <PropertiesHero />
      <PropertiesGrid />
      <PropertiesCTA />
    </main>
  );
}