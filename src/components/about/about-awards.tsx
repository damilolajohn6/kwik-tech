"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { AWARDS } from "@/lib/constants";

export function AboutAwards() {
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
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Awards & Achievements
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            We're honored to be recognized for our work and commitment to excellence.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300 text-center">
                {/* Trophy Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <Trophy className="w-8 h-8 text-brand-500" />
                </div>

                {/* Year */}
                <span className="text-brand-500 font-bold text-sm">{award.year}</span>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mt-2 mb-1">
                  {award.title}
                </h3>

                {/* Organization */}
                <p className="text-sm text-foreground-muted">
                  {award.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
