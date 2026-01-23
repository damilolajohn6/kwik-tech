"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import { OFFICE_LOCATIONS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function AboutOffices() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            With offices across multiple continents, we're always close to our clients.
          </p>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {OFFICE_LOCATIONS.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`${office.city} office`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  
                  {/* Type Badge */}
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    {office.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-brand-500" />
                    <h3 className="text-xl font-bold text-foreground">
                      {office.city}
                    </h3>
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">
                    {office.country}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground-muted">
                      <MapPin className="w-4 h-4 text-brand-500" />
                      <span>{office.address}</span>
                    </div>
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-2 text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-brand-500" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-500" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
