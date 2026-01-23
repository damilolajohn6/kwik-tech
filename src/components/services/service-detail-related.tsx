"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
} from "lucide-react";
import { SERVICES_DETAILED, RELATED_SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

interface ServiceDetailRelatedProps {
  currentSlug: string;
}

export function ServiceDetailRelated({ currentSlug }: ServiceDetailRelatedProps) {
  const relatedSlugs = RELATED_SERVICES[currentSlug] || [];
  const relatedServices = SERVICES_DETAILED.filter((s) =>
    relatedSlugs.includes(s.slug)
  );

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            You Might Also Need
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Related Services
          </h2>
        </motion.div>

        {/* Related Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-foreground-muted line-clamp-2 mb-3">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center gap-1 text-brand-500 text-sm font-medium">
                        Learn more
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
