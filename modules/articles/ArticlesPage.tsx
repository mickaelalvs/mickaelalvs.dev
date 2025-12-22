import { getAllPosts } from "@/lib/blog";
import BaseLayout from "../layout/BaseLayout";
import ArticlesContent from "./ArticlesContent";

export default function ArticlesPage() {
  const allPosts = getAllPosts([
    "content",
    "date",
    "description",
    "featured",
    "image",
    "thumbnail",
    "skip",
    "slug",
    "title",
  ]);

  const featuredPosts = allPosts.filter((post) => post.featured);

  return (
    <BaseLayout
      title="Articles | Mickaël Alves"
      tagline="Stories. Experimentation. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <ArticlesContent allPosts={allPosts} featuredPosts={featuredPosts} />
    </BaseLayout>
  );
}
