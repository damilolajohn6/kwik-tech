"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileCheck,
  Handshake,
  HardHat,
  Key,
} from "lucide-react";
import { REAL_ESTATE_PROCESS } from "@/lib/real-estate-constants";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Search,
  FileCheck,
  Handshake,
  HardHat,
  Key,
};

export function RealEstateProcess() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-medium mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Your Journey to Property Ownership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg"
          >
            We've streamlined the real estate process to make property acquisition
            and management simple, transparent, and efficient.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_ESTATE_PROCESS.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-background border border-border"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-bold">
                    {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 mt-2">
                  <Icon className="w-7 h-7 text-brand-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-sm">{step.description}</p>

                {/* Connector Line (not on last items) */}
                {index < REAL_ESTATE_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
