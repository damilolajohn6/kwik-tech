"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  PenTool,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with a free consultation to understand your goals, challenges, and vision for your project.",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "Research & Strategy",
    description: "Our team conducts thorough research and develops a comprehensive strategy tailored to your needs.",
    icon: Search,
    color: "from-cyan-500 to-teal-500",
  },
  {
    number: "03",
    title: "Design & Prototype",
    description: "We create stunning designs and interactive prototypes for your approval before development begins.",
    icon: PenTool,
    color: "from-cyan-500 to-cyan-400",
  },
  {
    number: "04",
    title: "Development",
    description: "Our expert developers bring the designs to life using cutting-edge technologies and best practices.",
    icon: Code,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.",
    icon: TestTube,
    color: "from-cyan-500 to-cyan-500",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support to ensure continued success.",
    icon: Rocket,
    color: "from-cyan-500 to-cyan-400",
  },
];

export function ServicesProcess() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

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
            How We Work
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Our proven six-step process ensures we deliver exceptional results
            every time, on time and within budget.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "relative",
                    // Alternate vertical position on desktop for visual interest
                    index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"
                  )}
                >
                  <div className="relative p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-brand-500/30">
                      {step.number}
                    </div>

                    {/* Connection dot */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-500 border-4 border-background z-10" 
                      style={{ top: index % 2 === 0 ? 'calc(100% + 2rem)' : '-2rem' }}
                    />

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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-500/10 border border-brand-500/20">
            <CheckCircle className="w-5 h-5 text-brand-500" />
            <span className="text-foreground-muted">
              Average project completion: <span className="text-foreground font-semibold">4-12 weeks</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
