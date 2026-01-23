"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Portfolio() {
  const [filter, setFilter] = React.useState("All");
  
  const categories = ["All", ...new Set(PORTFOLIO_PROJECTS.map((p) => p.category))];
  
  const filteredProjects = filter === "All" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses 
            transform their digital presence.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === category
                  ? "bg-brand-500 text-white"
                  : "bg-background-tertiary text-foreground-muted hover:text-foreground hover:bg-background"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={cn(
                "group relative",
                index === 0 && "md:col-span-2 lg:col-span-2"
              )}
            >
              <Link href={project.link} className="block">
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden border border-border bg-background",
                    "hover:border-brand-500/50 transition-all duration-500",
                    index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"
                  )}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <Badge variant="secondary" className="w-fit mb-3">
                      {project.category}
                    </Badge>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-background/50 backdrop-blur-sm text-foreground-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-brand-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
