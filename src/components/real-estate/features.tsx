"use client";

import { motion } from "framer-motion";
import {
  View,
  Wifi,
  FileText,
  BarChart3,
  Users,
  PieChart,
  CheckCircle,
} from "lucide-react";
import { REAL_ESTATE_FEATURES } from "@/lib/real-estate-constants";

const iconMap: Record<string, React.ElementType> = {
  View,
  Wifi,
  FileText,
  BarChart3,
  Users,
  PieChart,
};

export function RealEstateFeatures() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-500 font-medium mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Technology-Driven Real Estate Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground-muted text-lg mb-8"
            >
              We leverage cutting-edge technology to deliver exceptional real estate
              experiences. Our PropTech solutions set us apart from traditional real
              estate companies.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                "24/7 online property access and management",
                "Transparent pricing with no hidden fees",
                "Verified properties with complete documentation",
                "Dedicated account manager for personalized service",
                "Flexible payment plans and mortgage assistance",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span className="text-foreground-muted">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {REAL_ESTATE_FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-background-secondary border border-border hover:border-brand-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
