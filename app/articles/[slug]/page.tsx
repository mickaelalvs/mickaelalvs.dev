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
    ]);

    const title = `${post.title} // Mickaël Alves`;
    const description = post.description || "";
    const url = `https://mickaelalvs.dev/${post.slug}`;
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
        title,
        description,
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
