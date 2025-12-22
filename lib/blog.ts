import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  canonical_url?: string;
  date?: string;
  content?: string;
  skip?: boolean;
  stats?: string;
  [key: string]: any;
}

const postsDirectory = join(process.cwd(), "articles");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string, fields: string[] = []): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");

  let parsed: matter.GrayMatterFile<string>;

  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    parsed = matter(fileContents);
  } catch (error) {
    const slugs = getPostSlugs();
    let found = false;

    for (const fileSlug of slugs) {
      const filePath = join(postsDirectory, fileSlug);
      const contents = fs.readFileSync(filePath, "utf8");
      parsed = matter(contents);

      if (parsed.data.slug === realSlug) {
        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error(`Post with slug "${realSlug}" not found`);
    }
  }

  const { data, content } = parsed!;

  const items: BlogPost = {} as BlogPost;

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = data.slug || realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): BlogPost[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, [...fields, "private"]))
    .filter((post) => !post.private)
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
}

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
