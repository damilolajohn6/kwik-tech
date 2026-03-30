/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
    alt: "Team collaboration",
    className: "absolute -top-10 -right-10 w-64 h-48 rounded-2xl rotate-6",
    delay: 0.2,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    alt: "Analytics dashboard",
    className: "absolute top-1/2 -right-20 w-56 h-40 rounded-2xl -rotate-3",
    delay: 0.4,
  },
  {
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    alt: "Modern workspace",
    className: "absolute -bottom-10 right-10 w-48 h-36 rounded-2xl rotate-3",
    delay: 0.6,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 lg:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left py-12 lg:py-0"
          >
            {/* Badge */}
            {/* <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-foreground-muted">
                  Now accepting new clients for Q1 2026
                </span>
              </span>
            </motion.div> */}

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              We Build
              <span className="block text-brand-500">Digital Products</span>
              <span className="block">That Scale</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-foreground-muted max-w-xl mx-auto lg:mx-0 mb-8"
            >
              From startup MVPs to enterprise solutions, we craft
              high-performance digital experiences that drive real business
              results.
            </motion.p>

            {/* Feature List */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              {["Lightning Fast", "Scalable", "Secure"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-foreground-muted"
                >
                  <CheckCircle className="w-4 h-4 text-brand-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button asChild size="xl" className="w-full sm:w-auto group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto group"
                asChild
              >
                <Link href="#portfolio">
                  <Play className="w-5 h-5 mr-2 group-hover:text-brand-500 transition-colors" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                {/* Avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt="Client"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-foreground-muted">
                    50+ Happy Clients
                  </span>
                </div>

                {/* Separator */}
                <div className="hidden sm:block w-px h-8 bg-border" />

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {/* <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div> */}
                  {/* <span className="text-sm text-foreground-muted">
                    5.0 on Clutch
                  </span> */}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Team working on digital products"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-xl border border-border"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-foreground-muted">
                        Projects Delivered
                      </p>
                      <p className="text-2xl font-bold text-brand-500">150+</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <p className="text-xs text-foreground-muted">
                        Client Satisfaction
                      </p>
                      <p className="text-2xl font-bold text-brand-500">99%</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                      <p className="text-xs text-foreground-muted">Countries</p>
                      <p className="text-2xl font-bold text-brand-500">12+</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Decorative Images */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-8 -right-8 w-48 h-36 rounded-2xl overflow-hidden border border-border shadow-xl z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
                alt="Coding"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: -3 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 w-40 h-32 rounded-2xl overflow-hidden border border-border shadow-xl z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                alt="Analytics"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-border/50" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-border/30" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-foreground-muted uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-brand-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
