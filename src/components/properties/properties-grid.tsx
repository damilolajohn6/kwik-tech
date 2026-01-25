"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  Grid3X3,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FEATURED_PROPERTIES,
  PROPERTY_TYPES,
  PROPERTY_STATUSES,
  PROPERTY_LOCATIONS,
} from "@/lib/real-estate-constants";
import { cn } from "@/lib/utils";

export function PropertiesGrid() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("all");
  const [selectedStatus, setSelectedStatus] = React.useState("all");
  const [selectedLocation, setSelectedLocation] = React.useState("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = React.useState("newest");

  // Filter properties
  const filteredProperties = React.useMemo(() => {
    let filtered = [...FEATURED_PROPERTIES];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (selectedType !== "all") {
      filtered = filtered.filter((property) => property.type === selectedType);
    }

    // Status filter
    if (selectedStatus !== "all") {
      filtered = filtered.filter((property) => property.status === selectedStatus);
    }

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    return filtered;
  }, [searchQuery, selectedType, selectedStatus, selectedLocation, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedStatus("all");
    setSelectedLocation("all");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedType !== "all" ||
    selectedStatus !== "all" ||
    selectedLocation !== "all";

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search and View Toggle */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <Input
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {PROPERTY_TYPES.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {PROPERTY_STATUSES.map((status) => (
                  <SelectItem key={status.id} value={status.id}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {PROPERTY_LOCATIONS.map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="text-brand-500">
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-foreground-muted">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProperties.length}
            </span>{" "}
            properties
          </p>
        </div>

        {/* Properties Grid/List */}
        <AnimatePresence mode="wait">
          {filteredProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <p className="text-foreground-muted text-lg">
                No properties found matching your criteria.
              </p>
              <Button onClick={clearFilters} className="mt-4">
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              )}
            >
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: (typeof FEATURED_PROPERTIES)[number];
  index: number;
  viewMode: "grid" | "list";
}

function PropertyCard({ property, index, viewMode }: PropertyCardProps) {
  if (viewMode === "list") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="group flex flex-col md:flex-row bg-background-secondary rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
      >
        {/* Image */}
        <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
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

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <Badge variant="outline" className="mb-2">
                  {property.type}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand-500 transition-colors">
                  {property.title}
                </h3>
              </div>
              <button className="p-2 rounded-full hover:bg-background-tertiary transition-colors">
                <Heart className="w-5 h-5 text-foreground-muted" />
              </button>
            </div>

            <p className="text-foreground-muted text-sm flex items-center gap-1 mb-3">
              <MapPin className="w-4 h-4" />
              {property.location}
            </p>

            <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
              {property.description}
            </p>

            {/* Property Stats */}
            <div className="flex flex-wrap gap-4 text-sm text-foreground-muted mb-4">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {property.bedrooms} Beds
                </span>
              )}
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                {property.bathrooms} Baths
              </span>
              <span className="flex items-center gap-1">
                <Square className="w-4 h-4" />
                {property.squareFeet.toLocaleString()} sqft
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <p className="text-xl font-bold text-brand-500">
              {property.priceFormatted}
            </p>
            <Button asChild>
              <Link href={`/properties/${property.slug}`}>
                View Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-background-secondary rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
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
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {property.type}
          </Badge>
        </div>
        <button className="absolute bottom-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-500 transition-colors">
            {property.title}
          </h3>
          <p className="text-foreground-muted text-sm flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4" />
            {property.location}
          </p>
        </div>

        <p className="text-foreground-muted text-sm line-clamp-2">
          {property.description}
        </p>

        {/* Property Stats */}
        <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
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
          <span className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            {property.squareFeet.toLocaleString()} sqft
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-foreground-muted">Price</p>
            <p className="text-lg font-bold text-brand-500">
              {property.priceFormatted}
            </p>
          </div>
          <Button asChild size="sm">
            <Link href={`/properties/${property.slug}`}>
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
