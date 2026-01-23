"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import { BLOG_AUTHORS } from "@/lib/constants";

type BlogAuthor = (typeof BLOG_AUTHORS)[keyof typeof BLOG_AUTHORS];

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
};

interface BlogPostAuthorProps {
  author: BlogAuthor;
}

export function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background rounded-2xl border border-border p-6"
    >
      <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
        Written by
      </h3>

      {/* Author Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{author.name}</h4>
          <p className="text-sm text-brand-500">{author.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-foreground-muted mb-4">{author.bio}</p>

      {/* Social Links */}
      <div className="flex gap-2">
        {Object.entries(author.social).map(([platform, url]) => {
          const Icon = socialIcons[platform];
          if (!Icon) return null;

          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-background-secondary border border-border flex items-center justify-center text-foreground-muted hover:text-brand-500 hover:border-brand-500/50 transition-colors"
              aria-label={platform}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
