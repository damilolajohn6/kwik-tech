"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FEATURED_PROPERTIES } from "@/lib/real-estate-constants";
import { cn } from "@/lib/utils";

type Property = (typeof FEATURED_PROPERTIES)[number];

interface RelatedPropertiesProps {
  properties: readonly Property[];
}

export function RelatedProperties({ properties }: RelatedPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <section className="py-16 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            Similar Properties
          </h2>
          <Button asChild variant="outline">
            <Link href="/properties">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-white border-0",
                      property.status === "Completed" && "bg-green-600",
                      property.status === "In Progress" && "bg-amber-600",
                      property.status === "For Sale" && "bg-brand-500"
                    )}
                  >
                    {property.status}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-500 transition-colors mb-1">
                  {property.title}
                </h3>
                <p className="text-foreground-muted text-sm flex items-center gap-1 mb-3">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </p>

                <div className="flex items-center gap-4 text-sm text-foreground-muted mb-4">
                  {property.bedrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {property.bedrooms}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {property.bathrooms}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-brand-500">
                    {property.priceFormatted}
                  </p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/properties/${property.slug}`}>View</Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
