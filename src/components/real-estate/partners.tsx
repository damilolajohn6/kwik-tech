"use client";

import { motion } from "framer-motion";

const partners = [
  "Access Bank",
  "GTBank",
  "First Bank",
  "Zenith Bank",
  "UBA",
  "Stanbic IBTC",
];

export function RealEstatePartners() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-foreground-muted text-sm mb-8"
        >
          Trusted by leading financial institutions for mortgage partnerships
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-xl font-semibold text-foreground-muted/50 hover:text-foreground-muted transition-colors"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
