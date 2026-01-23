"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ctaCards = [
  {
    icon: MessageCircle,
    title: "Work With Us",
    description: "Ready to start your project? Let's discuss how we can help you achieve your goals.",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
    variant: "default" as const,
  },
  {
    icon: Briefcase,
    title: "Join Our Team",
    description: "We're always looking for talented individuals to join our growing team.",
    buttonText: "View Careers",
    buttonLink: "/careers",
    variant: "outline" as const,
  },
];

export function AboutCTA() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Whether you're looking to start a project or join our team, we'd love to hear from you.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ctaCards.map((card, index) => {
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
                  <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-foreground-muted mb-6">
                    {card.description}
                  </p>

                  {/* Button */}
                  <Button asChild variant={card.variant} className="group/btn">
                    <Link href={card.buttonLink}>
                      {card.buttonText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-background-secondary border border-border">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-500" />
              <span className="text-foreground-muted">
                <span className="font-bold text-foreground">50+</span> team members
              </span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-foreground-muted">
                <span className="font-bold text-foreground">3</span> global offices
              </span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-foreground-muted">
                <span className="font-bold text-foreground">12+</span> countries served
              </span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
