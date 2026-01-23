"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Search,
  Lightbulb,
  Palette,
  Code,
  CheckCircle,
  Rocket,
};

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
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
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Bring Ideas to Life
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Our proven six-step process ensures we deliver exceptional results, 
            on time and within budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Search;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line (except last in row) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
                )}

                <div className="relative p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {step.description}
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
