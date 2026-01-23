"use client";

import * as React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  React.useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="max-w-md mx-auto text-center px-4">
          {/* Error Icon */}
          <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="text-2xl font-bold mb-4">
            Critical Error
          </h1>
          <p className="text-slate-400 mb-8">
            A critical error has occurred. Please refresh the page to try again.
          </p>

          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh Page
          </button>
        </div>
      </body>
    </html>
  );
}
