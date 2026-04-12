import { getAllPosts } from "@/lib/blog";
import BaseLayout from "../layout/BaseLayout";
import ArticlesContent from "./ArticlesContent";

export default function ArticlesPage() {
  const allPosts = getAllPosts([
    "date",
    "description",
    "featured",
    "image",
    "readingTime",
    "thumbnail",
    "skip",
    "slug",
    "title",
  ]);

  const featuredPosts = allPosts.filter((post) => post.featured);

  return (
    <BaseLayout
      title="Articles | Mickaël Alves"
      tagline="Stories. Experiments. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <ArticlesContent allPosts={allPosts} featuredPosts={featuredPosts} />
    </BaseLayout>
  );
}
