"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { BLOG_POSTS_DATA, BLOG_AUTHORS } from "@/lib/constants";

type BlogPost = (typeof BLOG_POSTS_DATA)[number];
type BlogAuthor = (typeof BLOG_AUTHORS)[keyof typeof BLOG_AUTHORS];

interface BlogPostHeroProps {
  post: BlogPost;
  author: BlogAuthor | undefined;
}

export function BlogPostHero({ post, author }: BlogPostHeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-brand-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        <div className="max-w-4xl">
          {/* Category & Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Badge className="bg-brand-500 text-white capitalize">
              {post.category}
            </Badge>
            {post.featured && (
              <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                Featured
              </Badge>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted mb-8 max-w-3xl"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            {/* Author */}
            {author && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500/20">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{author.name}</p>
                  <p className="text-sm text-foreground-muted">{author.role}</p>
                </div>
              </div>
            )}

            <div className="h-8 w-px bg-border hidden sm:block" />

            {/* Date */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{formatDate(post.publishedAt)}</span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2 text-foreground-muted">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readingTime} min read</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
