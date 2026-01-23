"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_DETAILED } from "@/lib/constants";

interface ServiceDetailContentProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-brand-500/10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              About This Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Deliver
            </h2>
            
            {/* Long description with line breaks preserved */}
            <div className="space-y-4 text-foreground-muted">
              {service.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
