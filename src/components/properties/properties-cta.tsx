"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export function PropertiesCTA() {
  return (
    <section className="py-16 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto">
            <Building2 className="w-8 h-8 text-brand-500" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-foreground-muted">
            Our property consultants can help you find the perfect property
            that matches your requirements. Get in touch today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Phone className="mr-2 w-4 h-4" />
                Call Us Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
