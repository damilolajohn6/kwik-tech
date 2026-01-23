"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "Typically, we can begin work within 1-2 weeks of signing the contract. For urgent projects, we may be able to accommodate faster timelines depending on our current workload.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer:
      "To provide an accurate quote, we need a clear project description, your goals and requirements, preferred timeline, and budget range. The more details you provide, the more accurate our estimate will be.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We work with clients worldwide. We have experience working across different time zones and can accommodate video calls at times that work for you.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, PayPal, and major credit cards.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We offer various support and maintenance packages ranging from basic bug fixes to full managed services. We'll recommend the best option based on your needs.",
  },
  {
    question: "Can you sign an NDA before discussing my project?",
    answer:
      "Yes, we're happy to sign a Non-Disclosure Agreement before any detailed discussions. Please mention this when you contact us and we'll send over our standard NDA for your review.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-foreground-muted mb-8">
              Answers to frequently asked questions about working with us. 
              Can't find what you're looking for? Reach out to us directly.
            </p>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Still have questions?
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">
                    Our team is here to help. Reach out and we'll get back to you shortly.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:hello@qwikmultiservices.com">
                      Email Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
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
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    isOpen
                      ? "bg-background border-brand-500/50"
                      : "bg-background border-border hover:border-border-strong"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-foreground pr-4">
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
