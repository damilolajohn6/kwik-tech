"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, Github, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TEAM_MEMBERS_FULL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TeamMember = (typeof TEAM_MEMBERS_FULL)[number];

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

export function AboutTeam() {
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null);
  const [filter, setFilter] = React.useState("All");

  const departments = ["All", ...new Set(TEAM_MEMBERS_FULL.map((m) => m.department))];

  const filteredMembers = filter === "All"
    ? TEAM_MEMBERS_FULL
    : TEAM_MEMBERS_FULL.filter((m) => m.department === filter);

  return (
    <section id="team" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the Experts
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A talented team of designers, developers, and strategists passionate
            about creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                filter === dept
                  ? "bg-brand-500 text-white"
                  : "bg-background text-foreground-muted hover:text-foreground border border-border hover:border-border-strong"
              )}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-background border border-border hover:border-brand-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge variant="secondary" className="mb-2">
                      {member.department}
                    </Badge>
                    <h3 className="font-bold text-foreground group-hover:text-brand-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      {member.role}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium">View Profile</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-background-secondary border border-border rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <Badge variant="secondary" className="mb-3">
                    {selectedMember.department}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-brand-500 font-medium mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-foreground-muted text-sm mb-6">
                    {selectedMember.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-background text-foreground-muted border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {Object.entries(selectedMember.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform];
                      if (!Icon) return null;

                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-foreground-muted hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
