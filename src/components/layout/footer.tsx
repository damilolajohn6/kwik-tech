"use client";

import Link from "next/link";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAV_LINKS,
  SERVICES,
} from "@/lib/constants";
import { NewsletterForm } from "@/components/contact/newsletter-form";

const footerLinks = {
  services: SERVICES.slice(0, 4).map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQs", href: "/faqs" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const [year, setYear] = React.useState<number | null>(null); // Fixed hydration mismatch

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Qwik Multi
              </span>
            </Link>
            <p className="text-foreground-muted text-sm max-w-xs">
              Lightning-fast digital solutions for modern businesses. We build,
              design, and scale your digital presence.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">
                Subscribe to our newsletter
              </h4>
              <NewsletterForm variant="compact" />
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-background-tertiary text-foreground-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-background-tertiary text-foreground-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-background-tertiary text-foreground-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-background-tertiary text-foreground-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-foreground-muted">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground-muted">
              © {year} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-muted hover:text-brand-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
