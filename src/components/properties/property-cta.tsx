"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURED_PROPERTIES } from "@/lib/real-estate-constants";
import { CONTACT_INFO } from "@/lib/constants";

type Property = (typeof FEATURED_PROPERTIES)[number];

interface PropertyCTAProps {
  property: Property;
}

export function PropertyCTA({ property }: PropertyCTAProps) {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-background-secondary border border-border">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to make this property yours?
              </h3>
              <p className="text-foreground-muted">
                Contact us today to schedule a viewing or get more information
                about {property.title}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href={`tel:${property.agent.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={`https://wa.me/${property.agent.phone.replace(/\+|\s/g, "")}?text=Hi, I'm interested in ${property.title} (${property.priceFormatted})`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
