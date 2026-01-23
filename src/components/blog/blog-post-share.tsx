"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Share2,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS_DATA } from "@/lib/constants";

type BlogPost = (typeof BLOG_POSTS_DATA)[number];

interface BlogPostShareProps {
  post: BlogPost;
}

export function BlogPostShare({ post }: BlogPostShareProps) {
  const [copied, setCopied] = React.useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareTitle
      )}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:text-blue-500",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-8 p-6 bg-background rounded-2xl border border-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-brand-500" />
          <span className="font-medium text-foreground">Share this article</span>
        </div>

        <div className="flex items-center gap-2">
          {shareLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-lg bg-background-secondary border border-border flex items-center justify-center text-foreground-muted ${link.color} transition-colors`}
                aria-label={`Share on ${link.name}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}

          <Button
            variant="outline"
            size="icon"
            onClick={copyToClipboard}
            className="w-10 h-10"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Link2 className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-background-secondary text-foreground-muted border border-border hover:border-brand-500/50 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
