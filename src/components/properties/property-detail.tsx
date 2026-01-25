"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Check,
  FileText,
  Play,
  Download,
  Building2,
  Wifi,
  TreePine,
  Home,
  Tv,
  Wine,
  Waves,
  CircleDot,
  Shield,
  Dumbbell,
  User,
  Ship,
  Users,
  Truck,
  Camera,
  Zap,
  Coffee,
  Wind,
  Sun,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { FEATURED_PROPERTIES } from "@/lib/real-estate-constants";

type Property = (typeof FEATURED_PROPERTIES)[number];

interface PropertyDetailProps {
  property: Property;
}

const amenityIcons: Record<string, React.ElementType> = {
  Wifi,
  Car: Car,
  Waves,
  Shield,
  Dumbbell,
  TreePine,
  Home,
  Tv,
  Wine,
  CircleDot,
  User,
  Ship,
  Building2,
  Zap,
  Coffee,
  Wind,
  Sun,
  Leaf,
  Users,
  Truck,
  Camera,
};

export function PropertyDetail({ property }: PropertyDetailProps) {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-foreground-muted">
            <li>
              <Link href="/" className="hover:text-brand-500 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/properties"
                className="hover:text-brand-500 transition-colors"
              >
                Properties
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{property.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
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
              <Badge variant="outline">{property.type}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {property.title}
            </h1>
            <p className="text-foreground-muted flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {property.address}
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
            <p className="text-3xl font-bold text-brand-500">
              {property.priceFormatted}
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-4">
            <Image
              src={property.images[selectedImage]}
              alt={`${property.title} - Image ${selectedImage + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
              priority
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-background/80 text-sm">
              {selectedImage + 1} / {property.images.length}
            </div>

            {/* Virtual Tour Button */}
            {property.virtualTourUrl && (
              <Button
                className="absolute bottom-4 left-4"
                onClick={() => window.open(property.virtualTourUrl!, "_blank")}
              >
                <Play className="w-4 h-4 mr-2" />
                Virtual Tour
              </Button>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors",
                  selectedImage === index
                    ? "border-brand-500"
                    : "border-transparent hover:border-brand-500/50"
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.bedrooms > 0 && (
                <div className="p-4 rounded-xl bg-background-secondary border border-border text-center">
                  <Bed className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">
                    {property.bedrooms}
                  </p>
                  <p className="text-sm text-foreground-muted">Bedrooms</p>
                </div>
              )}
              <div className="p-4 rounded-xl bg-background-secondary border border-border text-center">
                <Bath className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">
                  {property.bathrooms}
                </p>
                <p className="text-sm text-foreground-muted">Bathrooms</p>
              </div>
              <div className="p-4 rounded-xl bg-background-secondary border border-border text-center">
                <Square className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">
                  {property.squareFeet.toLocaleString()}
                </p>
                <p className="text-sm text-foreground-muted">Sq Ft</p>
              </div>
              <div className="p-4 rounded-xl bg-background-secondary border border-border text-center">
                <Car className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                <p className="text-xl font-bold text-foreground">
                  {property.parking}
                </p>
                <p className="text-sm text-foreground-muted">Parking</p>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent"
                >
                  Location
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-500 data-[state=active]:bg-transparent"
                >
                  Documents
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-6">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    About This Property
                  </h3>
                  <div className="text-foreground-muted whitespace-pre-line">
                    {property.longDescription}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="pt-6">
                {/* Amenities */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {property.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity.icon] || Building2;
                    return (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border"
                      >
                        <Icon className="w-5 h-5 text-brand-500" />
                        <span className="text-foreground">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Features List */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Property Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-foreground-muted"
                    >
                      <Check className="w-5 h-5 text-brand-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="location" className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Location & Nearby Places
                </h3>

                {/* Map Placeholder */}
                <div className="h-64 rounded-xl bg-background-secondary border border-border flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-foreground-muted mx-auto mb-2" />
                    <p className="text-foreground-muted">
                      Interactive map would be displayed here
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {property.address}
                    </p>
                  </div>
                </div>

                {/* Nearby Places */}
                <h4 className="font-semibold text-foreground mb-3">
                  Nearby Places
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {property.nearbyPlaces.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-center justify-between p-4 rounded-xl bg-background-secondary border border-border"
                    >
                      <div>
                        <p className="font-medium text-foreground">{place.name}</p>
                        <p className="text-sm text-foreground-muted">
                          {place.type}
                        </p>
                      </div>
                      <span className="text-sm text-brand-500">
                        {place.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Property Documents
                </h3>
                <div className="space-y-3">
                  {property.documents.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-xl bg-background-secondary border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-brand-500" />
                        <span className="text-foreground">{doc.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {doc.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-green-500/10 text-green-600"
                          >
                            <Check className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {property.floorPlanUrl && (
                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a
                        href={property.floorPlanUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Floor Plan
                      </a>
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="p-6 rounded-2xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Property Agent
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={property.agent.image}
                    alt={property.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {property.agent.name}
                  </p>
                  <p className="text-sm text-foreground-muted">
                    {property.agent.title}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href={`tel:${property.agent.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={`https://wa.me/${property.agent.phone.replace(/\+|\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`mailto:${property.agent.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 rounded-2xl bg-background-secondary border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Property Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Property ID</span>
                  <span className="font-medium text-foreground">
                    QMS-{property.id.toString().padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Property Type</span>
                  <span className="font-medium text-foreground">
                    {property.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Status</span>
                  <span className="font-medium text-foreground">
                    {property.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Year Built</span>
                  <span className="font-medium text-foreground">
                    {property.yearBuilt}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground-muted">Size</span>
                  <span className="font-medium text-foreground">
                    {property.squareFeet.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </div>

            {/* Schedule Viewing */}
            <div className="p-6 rounded-2xl bg-brand-500/5 border border-brand-500/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Interested in this property?
              </h3>
              <p className="text-sm text-foreground-muted mb-4">
                Schedule a viewing or request more information.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Schedule Viewing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
