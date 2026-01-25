"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REAL_ESTATE_HERO } from "@/lib/real-estate-constants";

export function RealEstateHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={REAL_ESTATE_HERO.image}
          alt="Modern building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20">
              <Building2 className="w-4 h-4 text-brand-500" />
              <span className="text-sm font-medium text-brand-500">
                {REAL_ESTATE_HERO.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {REAL_ESTATE_HERO.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground-muted max-w-xl">
              {REAL_ESTATE_HERO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#properties">
                  View Properties
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 w-4 h-4" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-foreground-muted">
                <MapPin className="w-5 h-5 text-brand-500" />
                <span>Lagos • Abuja • Port Harcourt</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Property Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden bg-background-secondary border border-border shadow-xl">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Featured property"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Lekki Gardens Estate
                  </h3>
                  <p className="text-foreground-muted flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    Lekki, Lagos
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground-muted">Starting from</p>
                    <p className="text-2xl font-bold text-brand-500">₦85,000,000</p>
                  </div>
                  <Button asChild size="sm">
                    <Link href="#properties">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-background border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-foreground-muted">Properties Managed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
