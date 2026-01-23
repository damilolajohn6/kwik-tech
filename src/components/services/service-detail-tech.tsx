"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES_DETAILED } from "@/lib/constants";

interface ServiceDetailTechProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailTech({ service }: ServiceDetailTechProps) {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            We leverage the latest and most reliable technologies to build your solution.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {service.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300 min-w-[120px]">
                <div className="w-12 h-12 relative">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
