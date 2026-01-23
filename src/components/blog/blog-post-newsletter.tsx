"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { NewsletterForm } from "@/components/contact/newsletter-form";

export function BlogPostNewsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-brand-500/10 rounded-2xl border border-brand-500/20 p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-foreground">Stay Updated</h3>
      </div>

      <p className="text-sm text-foreground-muted mb-4">
        Get the latest articles and insights delivered to your inbox.
      </p>

      <NewsletterForm variant="compact" />
    </motion.div>
  );
}
