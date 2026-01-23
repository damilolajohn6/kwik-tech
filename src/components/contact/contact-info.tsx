"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT_METHODS, SOCIAL_PLATFORMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
};

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-background rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">
          Other Ways to Reach Us
        </h3>
        <div className="space-y-4">
          {CONTACT_METHODS.map((method) => {
            const Icon = iconMap[method.icon] || Mail;

            return (
              <a
                key={method.id}
                href={method.href}
                target={method.id === "whatsapp" || method.id === "location" ? "_blank" : undefined}
                rel={method.id === "whatsapp" || method.id === "location" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-lg ${method.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-foreground group-hover:text-brand-400 transition-colors">
                      {method.title}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-foreground-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-foreground-muted truncate">
                    {method.value}
                  </p>
                  <p className="text-xs text-foreground-subtle">
                    {method.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-background rounded-2xl border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-brand-500" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Business Hours</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-foreground-muted">Monday - Friday</span>
            <span className="text-foreground">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground-muted">Saturday</span>
            <span className="text-foreground">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground-muted">Sunday</span>
            <span className="text-foreground-subtle">Closed</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-foreground-subtle">
            * All times are in West Africa Time (WAT)
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-background rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">
          Follow Us
        </h3>
        <div className="flex gap-3">
          {SOCIAL_PLATFORMS.map((platform) => {
            const Icon = iconMap[platform.icon] || Mail;

            return (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-background-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-brand-500 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
                aria-label={platform.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="bg-brand-500/10 rounded-2xl border border-brand-500/20 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">
              Quick Response Guarantee
            </h3>
            <p className="text-sm text-foreground-muted">
              We respond to all inquiries within 24 hours during business days. 
              For urgent matters, call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
