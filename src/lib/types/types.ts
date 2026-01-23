/* eslint-disable @typescript-eslint/no-unused-vars */

import { type LucideIcon } from "lucide-react";

// Service types
export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
}

// Industry types
export interface Industry {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

// Blog post types
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  file?: File;
}

// Newsletter form types
export interface NewsletterFormData {
  email: string;
}

// Quote request form types
export interface QuoteRequestFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
}

// Navigation types
export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

// Stats types
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: object;
  visible: object;
}

// Component props with children
export interface WithChildren {
  children: React.ReactNode;
}

// Icon component type
export interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

// Button variants
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

// Theme types
export type Theme = "light" | "dark" | "system";

// Form status
export type FormStatus = "idle" | "loading" | "success" | "error";
