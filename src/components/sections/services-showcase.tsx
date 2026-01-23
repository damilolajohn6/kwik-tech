"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeService = SERVICES[activeIndex];
  const Icon = iconMap[activeService.icon] || Code;

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
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services That Drive Growth
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and accelerate growth.
          </p>
        </motion.div>

        {/* Services Interactive Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Service Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {SERVICES.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Code;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-full p-5 rounded-xl text-left transition-all duration-300",
                    "border group",
                    isActive
                      ? "bg-brand-500/10 border-brand-500/50"
                      : "bg-background-secondary border-border hover:border-border-strong"
                  )}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                        isActive
                          ? "bg-brand-500 text-white"
                          : "bg-background-tertiary text-foreground-muted group-hover:text-brand-500"
                      )}
                    >
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          "font-semibold mb-1 transition-colors",
                          isActive ? "text-brand-500" : "text-foreground"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm text-foreground-muted line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-all",
                        isActive
                          ? "text-brand-500 translate-x-0 -translate-y-0"
                          : "text-foreground-subtle group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      )}
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right: Active Service Detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-border">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium">
                  {activeService.title}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-foreground-muted">
                  {activeService.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {activeService.features.slice(0, 4).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      <span className="text-foreground-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-background-tertiary text-foreground-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button asChild>
                    <Link href={`/services/${activeService.slug}`}>
                      Learn More About {activeService.title.split(" ")[0]}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
