"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers,
  Plug,
  Zap,
  ShoppingBag,
  Layout,
  Users,
  PenTool,
  Star,
  Play,
  Search,
  FileText,
  Share2,
  Target,
  Mail,
  BarChart,
  Cloud,
  FileCode,
  GitBranch,
  Box,
  Activity,
  Shield,
  Cpu,
  TrendingUp,
  MessageSquare,
  Eye,
  LineChart,
  Bot,
  Store,
  CreditCard,
  Package,
  ClipboardList,
  Database,
  Component,
} from "lucide-react";
import { SERVICES_DETAILED } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Layers,
  Plug,
  Zap,
  ShoppingBag,
  Layout,
  Users,
  PenTool,
  Star,
  Play,
  Search,
  FileText,
  Share2,
  Target,
  Mail,
  BarChart,
  Cloud,
  FileCode,
  GitBranch,
  Box,
  Activity,
  Shield,
  Cpu,
  TrendingUp,
  MessageSquare,
  Eye,
  LineChart,
  Bot,
  Store,
  CreditCard,
  Package,
  ClipboardList,
  Database,
  Component,
};

interface ServiceDetailFeaturesProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailFeatures({ service }: ServiceDetailFeaturesProps) {
  return (
    <section className="py-20 md:py-28 bg-background-secondary relative">
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
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's Included
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Comprehensive features designed to deliver exceptional results for your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
