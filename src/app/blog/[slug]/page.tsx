import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostHero } from "@/components/blog/blog-post-hero";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { BlogPostAuthor } from "@/components/blog/blog-post-author";
import { BlogPostShare } from "@/components/blog/blog-post-share";
import { BlogPostRelated } from "@/components/blog/blog-post-related";
import { BlogPostNewsletter } from "@/components/blog/blog-post-newsletter";
import {
  BLOG_POSTS_DATA,
  getBlogPostBySlug,
  getAuthorById,
  getRelatedPosts,
} from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const author = getAuthorById(post.author);

  return {
    title: `${post.title} | Qwik Multi Services Blog`,
    description: post.excerpt,
    authors: author ? [{ name: author.name }] : [],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: author ? [author.name] : [],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.author);
  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  return (
    <main>
      <BlogPostHero post={post} author={author} />
      <div className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <BlogPostContent content={post.content} />
              <BlogPostShare post={post} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-8">
                {author && <BlogPostAuthor author={author} />}
                <BlogPostNewsletter />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {relatedPosts.length > 0 && <BlogPostRelated posts={relatedPosts} />}
    </main>
  );
}
