"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  Globe,
  Trophy,
  MapPin,
  Brain,
  Star,
} from "lucide-react";
import { COMPANY_MILESTONES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Briefcase,
  Globe,
  Trophy,
  MapPin,
  Brain,
  Star,
};

export function AboutTimeline() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Key Milestones
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A look at the key moments that shaped Qwik Multi Services.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {COMPANY_MILESTONES.map((milestone, index) => {
              const Icon = iconMap[milestone.icon] || Star;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "relative flex items-center gap-8",
                    "flex-row md:gap-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "flex-1",
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  )}>
                    <div className={cn(
                      "p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300",
                      "ml-12 md:ml-0"
                    )}>
                      <span className="text-brand-500 font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon - Center */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30 z-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
