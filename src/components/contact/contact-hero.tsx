"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Clock, CheckCircle, Zap } from "lucide-react";

const features = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: CheckCircle, text: "Free project consultation" },
  { icon: Zap, text: "No commitment required" },
];

export function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
          alt="Contact us"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span className="text-foreground-muted">Let's Work Together</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Get in{" "}
            <span className="text-brand-500">Touch</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground-muted mb-10"
          >
            Have a project in mind? We'd love to hear about it. Fill out the form 
            below and we'll get back to you as soon as possible.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-sm text-foreground-muted"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-500" />
                  </div>
                  <span>{feature.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
