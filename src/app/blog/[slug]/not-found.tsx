import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-8">
            <FileQuestion className="w-10 h-10 text-brand-500" />
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <p className="text-foreground-muted mb-8">
            Sorry, the blog post you're looking for doesn't exist or may have been removed.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}