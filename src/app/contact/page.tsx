import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactFAQ } from "@/components/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Ready to start your project? Contact Qwik Multi Services today. We'd love to hear about your project and discuss how we can help.",
  openGraph: {
    title: "Contact Us | Qwik Multi Services",
    description: "Get in touch with our team to discuss your project.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="py-16 md:py-24 bg-background-secondary relative">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            {/* Contact Info - Takes 1 column */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
