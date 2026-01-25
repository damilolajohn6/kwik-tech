"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export function RealEstateCTA() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Start Your Real Estate Journey?
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Whether you're looking to buy, sell, invest, or develop property,
                our team of experts is ready to help you achieve your real estate
                goals.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, "")}`}>
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-brand-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-brand-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
