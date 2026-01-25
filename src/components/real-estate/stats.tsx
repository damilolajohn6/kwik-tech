"use client";

import { motion } from "framer-motion";
import { REAL_ESTATE_STATS } from "@/lib/real-estate-constants";

export function RealEstateStats() {
  return (
    <section className="py-16 bg-background-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {REAL_ESTATE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-foreground-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
