import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
// import { TeamPreview } from "@/components/sections/team-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <div className="mt-20">
        {/* Hero Section - Above the fold */}
        <Hero />
      </div>

      {/* Trust Signals - Client logos */}
      {/* <TrustedBy /> */}

      {/* Services - What we do */}
      <ServicesShowcase />

      {/* Portfolio - Our work */}
      <Portfolio />

      {/* Process - How we work */}
      <Process />

      {/* Stats - Our impact */}
      <Stats />

      {/* Testimonials - Social proof */}
      <Testimonials />

      {/* Team Preview - Who we are */}
      {/* <TeamPreview /> */}

      {/* Blog Preview - Latest insights */}
      <BlogPreview />

      {/* FAQ - Common questions */}
      <FAQ />

      {/* Final CTA */}
      <CTA />
    </>
  );
}
