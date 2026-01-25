"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { REAL_ESTATE_PORTFOLIO } from "@/lib/real-estate-constants";

export function PropertyPortfolio() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-medium mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Completed Development Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-lg"
          >
            Explore our track record of successful real estate developments across
            Nigeria.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {REAL_ESTATE_PORTFOLIO.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-background-secondary border border-border"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="bg-background/90">
                      {project.category}
                    </Badge>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6">
                <p className="text-foreground-muted text-sm mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-bold text-foreground">{value}</p>
                      <p className="text-xs text-foreground-muted capitalize">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
