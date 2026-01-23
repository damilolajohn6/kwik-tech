"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_DETAILED } from "@/lib/constants";

interface ServiceDetailCaseStudiesProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailCaseStudies({ service }: ServiceDetailCaseStudiesProps) {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-background-secondary relative">
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
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            See how we've helped businesses achieve their goals with {service.title.toLowerCase()}.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-6">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Key Results
                    </p>
                    {study.results.map((result) => (
                      <div key={result} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Button variant="outline" size="sm" className="group/btn">
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
