"use client";

import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business
            growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services/${service.slug}`}>
                  <Card
                    variant="default"
                    className={cn(
                      "group relative h-full cursor-pointer overflow-hidden",
                      "hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5",
                      "transition-all duration-300",
                    )}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <CardContent className="p-6 relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-brand-500" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground-muted text-sm mb-4">
                        {service.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-background-tertiary text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="flex items-center gap-1 text-brand-500 text-sm font-medium">
                        Learn more
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </CardContent>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-[-1px] rounded-xl bg-brand-500/20 blur-sm" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-400 font-medium transition-colors"
          >
            View all services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
