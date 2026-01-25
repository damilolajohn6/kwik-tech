"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const stats = [
  {
    icon: Calendar,
    value: `Since ${COMPANY_INFO.founded}`,
    label: "Established",
  },
  { icon: Users, value: COMPANY_INFO.employees, label: "Team Members" },
  { icon: MapPin, value: COMPANY_INFO.headquarters, label: "Headquarters" },
];

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Background Images - Collage Style */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 -right-20 w-96 h-64 rounded-3xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 -left-20 w-80 h-56 rounded-3xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="Office meeting"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span className="text-foreground-muted">About Our Company</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            We're Building the <span className="text-brand-500">Future</span> of
            Digital
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-12"
          >
            A passionate team of designers, developers, and strategists
            dedicated to helping businesses succeed in the digital world.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 text-brand-500 mb-2">
                    <Icon className="w-5 h-5" />
                    <span className="text-2xl md:text-3xl font-bold">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-foreground-muted">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <Image
              // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
              src="./images/kayan1.jpg"
              alt="Our team at work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
              <span className="text-sm font-medium text-foreground">
                Our Abuja Headquarters
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
