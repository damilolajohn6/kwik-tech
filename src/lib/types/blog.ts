
export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
  };
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface BlogCategory {
  id: string;
  label: string;
  slug: string;
}