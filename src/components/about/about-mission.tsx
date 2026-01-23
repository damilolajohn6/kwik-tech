"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in the global marketplace.",
    color: "bg-brand-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Africa's leading digital agency, recognized globally for delivering exceptional quality, innovation, and value to every client we serve.",
    color: "bg-cyan-600",
  },
  {
    icon: Heart,
    title: "Our Promise",
    description:
      "We promise to treat every project as if it were our own, delivering solutions that exceed expectations with transparency and integrity.",
    color: "bg-teal-600",
  },
];

export function AboutMission() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mission, Vision & Promise
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            The principles that guide everything we do at Qwik Multi Services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {card.title}
                  </h3>
                  <p className="text-foreground-muted">
                    {card.description}
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
