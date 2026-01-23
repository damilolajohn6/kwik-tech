"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png" },
  { name: "Linear", logo: "https://asset.brandfetch.io/iduDa181eM/idYYbqOlKi.png" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png" },
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-background-secondary border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground-muted mb-10 uppercase tracking-wider"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex items-center gap-16"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[120px] h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={40}
                  className="object-contain max-h-8 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
