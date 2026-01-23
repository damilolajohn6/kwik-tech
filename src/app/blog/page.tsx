import { Metadata } from "next";
import { BlogHero } from "@/components/blog";
import { BlogGrid } from "@/components/blog";
import { BlogNewsletter } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog | Insights on Technology, Design & Business",
  description:
    "Explore our latest articles on web development, design, digital marketing, cloud computing, AI, and business strategy.",
  openGraph: {
    title: "Blog | Qwik Multi Services",
    description: "Insights and articles from our team of experts.",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
}