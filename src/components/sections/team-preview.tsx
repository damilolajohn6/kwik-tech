"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamPreview() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet the Minds Behind Qwik
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              We're a diverse team of designers, developers, and strategists 
              passionate about creating exceptional digital experiences.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">50+</div>
                <div className="text-sm text-foreground-muted">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">12</div>
                <div className="text-sm text-foreground-muted">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500">5</div>
                <div className="text-sm text-foreground-muted">Offices</div>
              </div>
            </div>

            <Button asChild>
              <Link href="/about">
                Meet the Full Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links (appear on hover) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-brand-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-brand-500 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
