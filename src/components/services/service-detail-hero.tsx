"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES_DETAILED } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

interface ServiceDetailHeroProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4 capitalize">
              {service.category}
            </Badge>

            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  {service.title}
                </h1>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground-muted mb-8 max-w-xl">
              {service.description}
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <span className="text-sm text-foreground-muted">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#case-studies">View Case Studies</a>
              </Button>
            </div>

            {/* Pricing Note */}
            <div className="mt-8 p-4 rounded-xl bg-background-secondary/50 backdrop-blur-sm border border-border inline-block">
              <p className="text-sm text-foreground-muted">
                Starting from{" "}
                <span className="text-xl font-bold text-brand-500">
                  {service.pricing.starting}
                </span>
              </p>
              <p className="text-xs text-foreground-subtle">{service.pricing.note}</p>
            </div>
          </motion.div>

          {/* Right: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={service.gallery[0]}
                  alt={`${service.title} showcase`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -left-8 w-40 h-32 rounded-xl overflow-hidden border border-border shadow-xl"
              >
                <Image
                  src={service.gallery[1]}
                  alt={`${service.title} detail`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-8 -right-8 w-48 h-36 rounded-xl overflow-hidden border border-border shadow-xl"
              >
                <Image
                  src={service.gallery[2]}
                  alt={`${service.title} example`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
