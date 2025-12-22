import BlogpostLayout from "./BlogpostLayout";
import { getPostBySlug, convertMarkdownToHtml } from "@/lib/blog";
import { createArticleJsonLd } from "@/lib/json-ld";
import { getPeople } from "@/data/people";

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

  const content = await convertMarkdownToHtml(post.content || "");

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

  return (
    <BlogpostLayout
      title={post.title}
      image={post.image}
      date={post.date}
      tags={post.tags}
      authors={authors}
      language={post.language}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        suppressHydrationWarning
      />
    </BlogpostLayout>
  );
}
