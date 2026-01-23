"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS_DATA, getAuthorById } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BlogPost = (typeof BLOG_POSTS_DATA)[number];

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact" | "featured";
  index?: number;
}

export function BlogCard({ post, variant = "default", index = 0 }: BlogCardProps) {
  const author = getAuthorById(post.author);

  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`} className="group flex gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground text-sm group-hover:text-brand-400 transition-colors line-clamp-2">
            {post.title}
          </h4>
          <div className="flex items-center gap-2 mt-2 text-xs text-foreground-subtle">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <Link href={`/blog/${post.slug}`}>
          <div className="relative rounded-3xl overflow-hidden bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-brand-500 text-white">Featured</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 capitalize">
                  {post.category}
                </Badge>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground-muted mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  {author && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={author.image}
                          alt={author.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-foreground-muted">
                        {author.name}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-sm text-foreground-subtle">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-full rounded-2xl overflow-hidden bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="capitalize">
                {post.category}
              </Badge>
            </div>
            {post.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-brand-500 text-white">Featured</Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              {author && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={author.image}
                      alt={author.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-foreground-muted">
                    {author.name}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1 text-xs text-foreground-subtle">
                <Clock className="w-3 h-3" />
                <span>{post.readingTime} min</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
