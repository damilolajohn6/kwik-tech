"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/contact/newsletter-form";

export function BlogNewsletter() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-brand-500" />
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-foreground-muted">Stay Updated</span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-foreground-muted mb-8">
            Get the latest articles, insights, and updates delivered directly to your inbox. 
            No spam, ever. Unsubscribe anytime.
          </p>

          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
