"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Settings,
  Cpu,
  TrendingUp,
  Wrench,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { REAL_ESTATE_SERVICES } from "@/lib/real-estate-constants";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Settings,
  Cpu,
  TrendingUp,
  Wrench,
  MessageSquare,
};

export function RealEstateServices() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-medium mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Comprehensive Real Estate Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg"
          >
            From property development to technology solutions, we offer end-to-end
            services to meet all your real estate needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REAL_ESTATE_SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background-secondary rounded-2xl border border-border overflow-hidden hover:border-brand-500/50 transition-colors"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/40" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-500" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground-muted"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
