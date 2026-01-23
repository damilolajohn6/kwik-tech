"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_DETAILED, CONTACT_INFO } from "@/lib/constants";

interface ServiceDetailCTAProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business with{" "}
            <span className="text-brand-500">{service.title}</span>?
          </h2>

          <p className="text-lg text-foreground-muted mb-10 max-w-2xl mx-auto">
            Let's discuss your project and explore how our {service.title.toLowerCase()}{" "}
            services can help you achieve your goals.
          </p>

          {/* Pricing Reminder */}
          <div className="inline-block p-6 rounded-2xl bg-background border border-border mb-10">
            <p className="text-sm text-foreground-muted mb-1">Starting from</p>
            <p className="text-3xl font-bold text-brand-500 mb-1">
              {service.pricing.starting}
            </p>
            <p className="text-xs text-foreground-subtle">{service.pricing.note}</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild size="xl" className="w-full sm:w-auto group">
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I'm interested in your ${service.title} services.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-foreground-muted">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 hover:text-brand-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.phone}
            </a>
            <span className="text-border">|</span>
            <span>Response within 24 hours</span>
            <span className="text-border">|</span>
            <span>No commitment required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
