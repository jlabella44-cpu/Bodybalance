import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  coverAlt?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getSlug(filename: string) {
  return filename.replace(/\.md$/, "");
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: getSlug(file),
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        author: data.author ?? "Body Balance Team",
        category: data.category ?? "Wellness",
        coverAlt: data.coverAlt,
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "Body Balance Team",
    category: data.category ?? "Wellness",
    coverAlt: data.coverAlt,
    contentHtml: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(getSlug);
}
