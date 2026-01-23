"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  Headphones,
} from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "We prioritize speed without compromising quality. Get your project delivered ahead of schedule.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with industry-leading security practices and compliance standards.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Our team is always available to address your concerns and provide timely support.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with seasoned professionals who bring years of industry experience to every project.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Over 150 successful projects and counting, with a 99% client satisfaction rate.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Get personalized attention with a dedicated project manager for your account.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We Deliver Results,{" "}
              <span className="text-brand-500">Not Excuses</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Partner with a team that's committed to your success. We combine
              technical excellence with strategic thinking to deliver solutions
              that drive real business outcomes.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-background-secondary border border-border">
                <div className="text-2xl font-bold text-brand-500">10+</div>
                <div className="text-sm text-foreground-muted">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background-secondary border border-border">
                <div className="text-2xl font-bold text-brand-500">50+</div>
                <div className="text-sm text-foreground-muted">Team Members</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background-secondary border border-border">
                <div className="text-2xl font-bold text-brand-500">99%</div>
                <div className="text-sm text-foreground-muted">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid of reasons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  className={cn(
                    "group p-5 rounded-xl bg-background-secondary border border-border",
                    "hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5",
                    "transition-all duration-300"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
