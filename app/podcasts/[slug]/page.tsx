import { Metadata } from "next";
import { use } from "react";
import PodcastDetailPage from "@/modules/podcasts/PodcastDetailPage";
import { podcasts } from "@/data/podcasts";
import { generateSlug } from "@/utils/slug";

export async function generateStaticParams() {
  return podcasts.map((podcast) => ({
    slug: generateSlug(podcast.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const podcast = podcasts.find((p) => generateSlug(p.title) === slug);

  if (!podcast) {
    return {
      title: "Podcast Not Found",
    };
  }

  return {
    title: podcast.title,
    description: podcast.description,
  };
}

export default function PodcastPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <PodcastDetailPage slug={slug} />;
}
