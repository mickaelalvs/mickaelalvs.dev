import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
      "title",
      "description",
      "image",
      "canonical_url",
      "slug",
      "og_title",
      "og_description",
    ]);

    const title = `${post.title} | Mickaël Alves`;
    const description = post.description || "";
    const url = `https://mickaelalvs.dev/articles/${post.slug}`;

    const ogTitle = post.og_title || post.title;
    const ogDescription = post.og_description || description;
    const image = post.image
      ? `https://mickaelalvs.dev${post.image}`
      : "https://mickaelalvs.dev/og-image.png";

    return {
      title,
      description,
      alternates: {
        canonical: post.canonical_url || url,
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url,
        images: [image],
      },
    };
  } catch (e) {
    return {
      title: "Not Found",
    };
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const BlogPostPage = (await import("../../../modules/articles/BlogPostPage"))
    .default;
  return <BlogPostPage slug={slug} />;
}
