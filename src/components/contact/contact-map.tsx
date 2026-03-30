"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactMap() {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Office
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            We&apos;d love to meet you in person. Drop by our Abuja headquarters 
            for a coffee and a chat about your project.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-border"
        >
          {/* Map Image (replace with actual Google Maps embed if needed) */}
          <div className="relative aspect-[21/9] md:aspect-[3/1]">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
              alt="Map location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/60" />

            {/* Map Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 rounded-2xl bg-background/90 backdrop-blur-sm border border-border max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Qwik Multi Services
                </h3>
                <p className="text-foreground-muted mb-6">
                  B96 Sahara Estate, Gwarimpa, <br />
                  Abuja, Nigeria
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a
                      href="https://maps.google.com/?q=gwarimpa+Abuja"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com/?q=gwarimpa+Abuja"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          {[
            {
              city: "Abuja",
              country: "Nigeria",
              type: "Headquarters",
              address: "B96 Sahara Estate, Gwarimpa",
            },
            // {
            //   city: "London",
            //   country: "United Kingdom",
            //   type: "Regional Office",
            //   address: "456 Tech Hub",
            // },
            // {
            //   city: "Dubai",
            //   country: "UAE",
            //   type: "Regional Office",
            //   address: "789 Business Bay",
            // },
          ].map((location) => (
            <div
              key={location.city}
              className="p-4 rounded-xl bg-background-secondary border border-border hover:border-brand-500/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {location.city}, {location.country}
                  </p>
                  <p className="text-xs text-brand-500 mb-1">{location.type}</p>
                  <p className="text-sm text-foreground-muted">{location.address}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
