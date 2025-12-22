import { Metadata } from "next";
import { notFound } from "next/navigation";
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
      "canonical_url",
      "slug",
      "private",
    ]);

    if (post.private) {
      return { title: "Not Found" };
    }

    const title = `${post.title} | Mickaël Alves`;
    const description = post.description || "";
    const url = `https://mickaelalvs.dev/articles/${post.slug}`;

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
  const post = getPostBySlug(slug, ["private"]);

  if (post.private) {
    notFound();
  }

  const BlogPostPage = (await import("../../../modules/articles/BlogPostPage"))
    .default;
  return <BlogPostPage slug={slug} />;
}
