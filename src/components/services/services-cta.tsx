"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export function ServicesCTA() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          fill
          className="object-cover opacity-5"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-transparent to-background-secondary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-6">
              Ready to Start?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="text-brand-500">Amazing</span> Together
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Not sure which service you need? Book a free consultation and let
              our experts guide you to the perfect solution.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Schedule Call */}
            <Link href="/contact" className="group">
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-brand-500/50 transition-all duration-300 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <Phone className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Schedule a Call</h3>
                <p className="text-sm text-foreground-muted">
                  Book a free 30-minute consultation with our experts
                </p>
              </div>
            </Link>

            {/* Email */}
            <a href={`mailto:${CONTACT_INFO.email}`} className="group">
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-brand-500/50 transition-all duration-300 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-foreground-muted">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 rounded-2xl bg-background border border-border hover:border-brand-500/50 transition-all duration-300 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <MessageCircle className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Chat on WhatsApp</h3>
                <p className="text-sm text-foreground-muted">
                  Quick response within minutes
                </p>
              </div>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button asChild size="xl" className="group">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <p className="text-sm text-foreground-subtle mt-4">
              No commitment required • Response within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
