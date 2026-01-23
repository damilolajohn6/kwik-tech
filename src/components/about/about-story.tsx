// src/components/about/about-story.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function AboutStory() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                alt="Our journey"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-background shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
                alt="Early days"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-brand-500 text-white font-bold text-lg"
            >
              Est. 2018
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From a Small Team to a{" "}
              <span className="text-brand-500">Global Agency</span>
            </h2>

            <div className="space-y-4 text-foreground-muted mb-8">
              <p>
                Qwik Multi Services was born in 2018 from a simple idea: that African 
                businesses deserve world-class digital solutions. Our founder, Oluwaseun 
                Adeyemi, started the company in a small Lagos office with just two other 
                passionate developers.
              </p>
              <p>
                What began as a web development agency quickly evolved into a full-service 
                digital partner. We recognized that our clients needed more than just 
                websites—they needed comprehensive digital strategies, beautiful designs, 
                and reliable technology infrastructure.
              </p>
              <p>
                Today, we're proud to serve clients across 12+ countries, with a diverse 
                team of 50+ talented professionals. But no matter how much we grow, we 
                never forget our roots: delivering exceptional value with speed, quality, 
                and a personal touch.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="relative p-6 rounded-2xl bg-background border border-border">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-brand-500/20" />
              <blockquote className="text-lg text-foreground italic pl-8">
                "We don't just build software—we build partnerships. Every project 
                is an opportunity to make a real difference in our clients' businesses."
              </blockquote>
              <div className="flex items-center gap-3 mt-4 pl-8">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Christian Kayan"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Christian Kayan</p>
                  <p className="text-xs text-foreground-muted">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
