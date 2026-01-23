// src/components/sections/faq.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Got questions? We've got answers. If you can't find what you're
              looking for, feel free to reach out to us.
            </p>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Can't find the answer you're looking for? Please chat to our
                    friendly team.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    isOpen
                      ? "bg-background border-brand-500/50"
                      : "bg-background/50 border-border hover:border-border-strong"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                        isOpen
                          ? "bg-brand-500 text-white"
                          : "bg-background-tertiary text-foreground-muted"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-foreground-muted">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
