"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SERVICES_DETAILED } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ServiceDetailFAQProps {
  service: (typeof SERVICES_DETAILED)[number];
}

export function ServiceDetailFAQ({ service }: ServiceDetailFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-foreground-muted">
              Answers to frequently asked questions about our {service.title.toLowerCase()} services.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {service.faqs.map((faq, index) => {
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
                      ? "bg-background-secondary border-brand-500/50"
                      : "bg-background border-border hover:border-border-strong"
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
          </div>
        </div>
      </div>
    </section>
  );
}
