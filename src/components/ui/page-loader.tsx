"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center"
      >
        {/* Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center mb-4"
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>

        {/* Loading Dots */}
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-2 h-2 rounded-full bg-brand-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
