"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto text-center">
          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Something Went Wrong
            </h1>
            <p className="text-foreground-muted mb-6">
              We apologize for the inconvenience. An unexpected error has occurred. 
              Please try again or contact support if the problem persists.
            </p>

            {/* Error Details (development only) */}
            {process.env.NODE_ENV === "development" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-semibold text-red-400">
                    Error Details (Dev Only)
                  </span>
                </div>
                <p className="text-xs text-red-300 font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-400 mt-2">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={reset} className="w-full sm:w-auto">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Support Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-foreground-subtle"
          >
            Need help?{" "}
            <Link href="/contact" className="text-brand-500 hover:underline">
              Contact our support team
            </Link>
          </motion.p>
        </div>
      </div>
    </main>
  );
}
