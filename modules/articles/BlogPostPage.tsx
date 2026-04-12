import BlogpostLayout from "./BlogpostLayout";
import { getPostBySlug } from "@/lib/blog";
import { createArticleJsonLd } from "@/lib/json-ld";
import { extractHeadingsFromMarkdown } from "@/lib/extract-headings";
import { getPeople } from "@/data/people";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { ImageExpandable } from "./components/swc/ImageExpandable";
import { SideBySide } from "./components/swc/SideBySide";
import { KbdKey } from "./components/alt-tab/KbdKey";
import { LiveCodingDemo } from "./components/alt-tab/LiveCodingDemo";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";

const mdxComponents = {
  ImageExpandable,
  SideBySide,
  KbdKey,
  LiveCodingDemo,
};

const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki as any,
        {
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        },
      ],
    ],
  },
};

export default async function BlogPostPage({ slug }: { slug: string }) {
  const post = getPostBySlug(slug, [
    "authors",
    "canonical_url",
    "content",
    "date",
    "description",
    "image",
    "language",
    "slug",
    "tags",
    "title",
  ]);

  const title = `${post.title} | Mickaël Alves`;
  const description = post.description || "";
  const url = `https://mickaelalvs.dev/articles/${post.slug}`;
  const date = post.date
    ? new Date(post.date).toISOString()
    : new Date().toISOString();
  const image = post.image
    ? `https://mickaelalvs.dev${post.image}`
    : "https://mickaelalvs.dev/og-image.png";

  const jsonLd = createArticleJsonLd({
    title,
    description,
    url,
    image,
    datePublished: date,
    dateModified: date,
  });

  const authors = post.authors ? getPeople(post.authors) : [];
  const headings = extractHeadingsFromMarkdown(post.content || "");

  return (
    <BlogpostLayout
      title={post.title}
      image={post.image}
      date={post.date}
      tags={post.tags}
      authors={authors}
      language={post.language}
      headings={headings}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <MDXRemote
        source={post.content || ""}
        components={mdxComponents}
        options={mdxOptions}
      />
    </BlogpostLayout>
  );
}
