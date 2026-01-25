"use client";

import { motion } from "framer-motion";
import { Building2, Search } from "lucide-react";

export function PropertiesHero() {
  return (
    <section className="pt-32 pb-16 bg-background-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <Building2 className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-brand-500">
              Property Listings
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Perfect Property
          </h1>

          <p className="text-lg text-foreground-muted mb-8">
            Explore our curated selection of premium residential and commercial
            properties across Nigeria's major cities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}