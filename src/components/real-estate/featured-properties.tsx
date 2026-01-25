"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FEATURED_PROPERTIES } from "@/lib/real-estate-constants";
import { cn } from "@/lib/utils";

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-500 font-medium mb-4"
            >
              Featured Properties
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Discover Your Dream Property
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild variant="outline">
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property, index) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-white border-0",
                      property.status === "Completed" && "bg-green-600",
                      property.status === "In Progress" && "bg-amber-600",
                      property.status === "For Sale" && "bg-brand-500",
                    )}
                  >
                    {property.status}
                  </Badge>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground"
                  >
                    {property.type}
                  </Badge>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-full bg-background/90 hover:bg-background transition-colors">
                    <Heart className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="p-2 rounded-full bg-background/90 hover:bg-background transition-colors">
                    <Share2 className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title & Location */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-500 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-foreground-muted text-sm flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </p>
                </div>
                {/* Description */}
                <p className="text-foreground-muted text-sm line-clamp-2">
                  {property.description}
                </p>
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {property.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs rounded-md bg-background-tertiary text-foreground-muted"
                    >
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-background-tertiary text-foreground-muted">
                      +{property.features.length - 3} more
                    </span>
                  )}
                </div>
                {/* Price & Size */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground-muted">Price</p>
                    <p className="text-lg font-bold text-brand-500">
                      {property.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-foreground-muted">Size</p>
                    <p className="text-sm font-medium text-foreground">
                      {property.size}
                    </p>
                  </div>
                </div>
                {/* CTA */}
                <Button asChild className="w-full">
                  <Link href={`/properties/${property.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
