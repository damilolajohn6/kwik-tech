"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Award,
  Eye,
  BookOpen,
  Users,
} from "lucide-react";
import { COMPANY_VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Target,
  Award,
  Eye,
  BookOpen,
  Users,
};

export function AboutValues() {
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
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Our core values shape our culture and guide every decision we make.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon] || Lightbulb;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
