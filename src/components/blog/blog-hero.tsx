"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedPosts, getAuthorById } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export function BlogHero() {
  const featuredPosts = getFeaturedPosts(1);
  const featuredPost = featuredPosts[0];
  const author = featuredPost ? getAuthorById(featuredPost.author) : null;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-foreground-muted">Our Blog</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Insights & <span className="text-brand-500">Ideas</span>
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Explore our latest articles on technology, design, marketing, and business strategy.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden bg-background-secondary border border-border hover:border-brand-500/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand-500 text-white">Featured</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 capitalize">
                      {featuredPost.category}
                    </Badge>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-brand-400 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-foreground-muted mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6">
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
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>

                    <Button className="w-fit group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
