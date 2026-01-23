"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface BlogPostContentProps {
  content: string;
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  // Simple markdown-like rendering
  // In production, you'd use MDX or a proper markdown parser
  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = "";
    let codeLanguage = "";

    lines.forEach((line, index) => {
      // Code block start/end
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-background-secondary border border-border rounded-xl p-4 overflow-x-auto my-6"
            >
              <code className="text-sm text-foreground-muted font-mono">
                {codeContent.trim()}
              </code>
            </pre>
          );
          codeContent = "";
          inCodeBlock = false;
        } else {
          // Start code block
          codeLanguage = line.replace("```", "").trim();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent += line + "\n";
        return;
      }

      // Headers
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
        return;
      }

      // List items
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+)\*\*: (.+)/);
        if (match) {
          elements.push(
            <li key={index} className="mb-2 text-foreground-muted">
              <strong className="text-foreground">{match[1]}</strong>: {match[2]}
            </li>
          );
          return;
        }
      }

      if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="mb-2 text-foreground-muted">
            {line.replace("- ", "")}
          </li>
        );
        return;
      }

      if (line.match(/^\d+\. /)) {
        elements.push(
          <li key={index} className="mb-2 text-foreground-muted list-decimal ml-4">
            {line.replace(/^\d+\. /, "")}
          </li>
        );
        return;
      }

      // Empty lines
      if (line.trim() === "") {
        return;
      }

      // Regular paragraphs
      elements.push(
        <p key={index} className="text-foreground-muted leading-relaxed mb-4">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="prose prose-invert max-w-none"
    >
      <div className="bg-background rounded-2xl border border-border p-6 md:p-8 lg:p-10">
        {renderContent(content)}
      </div>
    </motion.article>
  );
}
