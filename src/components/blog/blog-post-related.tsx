"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS_DATA, getAuthorById } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

type BlogPost = (typeof BLOG_POSTS_DATA)[number];

interface BlogPostRelatedProps {
  posts: readonly BlogPost[];
}

export function BlogPostRelated({ posts }: BlogPostRelatedProps) {
  return (
    <section className="py-16 md:py-24 bg-background-secondary relative">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              Related Articles
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              You Might Also Like
            </h2>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Related Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const author = getAuthorById(post.author);

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground-muted line-clamp-2 mb-4">
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
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
