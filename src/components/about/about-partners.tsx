"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";

export function AboutPartners() {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm text-foreground-muted uppercase tracking-wider">
            Our Technology Partners
          </span>
        </motion.div>

        {/* Partner Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex items-center gap-16"
          >
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
