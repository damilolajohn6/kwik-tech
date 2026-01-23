"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES_DETAILED, SERVICE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredServices = activeCategory === "all"
    ? SERVICES_DETAILED
    : SERVICES_DETAILED.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 md:py-32 bg-background-secondary relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Choose from our comprehensive range of digital services designed to 
            help your business succeed.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-brand-500 text-white"
                  : "bg-background text-foreground-muted hover:text-foreground border border-border hover:border-border-strong"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service, index) => {
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
                    <div className="relative h-full rounded-2xl overflow-hidden bg-background border border-border hover:border-brand-500/50 transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="capitalize">
                            {service.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>

                        {/* Features Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature.title}
                              className="text-xs px-2 py-1 rounded-md bg-background-secondary text-foreground-muted"
                            >
                              {feature.title}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-brand-500 group-hover:text-brand-400">
                            Learn more
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-brand-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
