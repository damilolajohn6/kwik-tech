import { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesProcess } from "@/components/services/services-process";
import { ServicesCTA } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Our Services | Digital Solutions That Drive Growth",
  description:
    "Explore our comprehensive digital services including web development, mobile apps, UI/UX design, digital marketing, cloud solutions, and AI integration.",
  openGraph: {
    title: "Our Services | Qwik Multi Services",
    description: "Comprehensive digital solutions tailored to accelerate your business growth.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}