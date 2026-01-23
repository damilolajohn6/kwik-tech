"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BLOG_POSTS_DATA,
  BLOG_CATEGORIES,
  getAuthorById,
} from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter posts
  const filteredPosts = React.useMemo(() => {
    let posts = [...BLOG_POSTS_DATA];

    // Filter by category
    if (activeCategory !== "all") {
      posts = posts.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-background-secondary relative">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-brand-500 text-white"
                    : "bg-background text-foreground-muted hover:text-foreground border border-border hover:border-border-strong"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-foreground-muted mb-8"
        >
          Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && ` in ${activeCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </motion.p>

        {/* Posts Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => {
                const author = getAuthorById(post.author);

                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
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
                              <Badge className="bg-brand-500 text-white">
                                Featured
                              </Badge>
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

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded bg-background-secondary text-foreground-subtle"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

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
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-foreground-muted">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
