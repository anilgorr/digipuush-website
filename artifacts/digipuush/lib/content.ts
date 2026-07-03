import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Faq = {
  question: string;
  answer: string;
};

export type ServiceFrontmatter = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  faqs: Faq[];
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  faqs?: Faq[];
};

const SERVICES_DIR = path.join(process.cwd(), "content", "services");
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getServiceSlugs(): string[] {
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getServiceContent(slug: string): {
  frontmatter: ServiceFrontmatter;
  content: string;
} {
  const filePath = path.join(SERVICES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ServiceFrontmatter, content };
}

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogContent(slug: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getAllBlogPosts(): Array<{ slug: string; frontmatter: BlogFrontmatter }> {
  return getBlogSlugs()
    .map((slug) => ({ slug, frontmatter: getBlogContent(slug).frontmatter }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.datePublished).getTime() -
        new Date(a.frontmatter.datePublished).getTime(),
    );
}
