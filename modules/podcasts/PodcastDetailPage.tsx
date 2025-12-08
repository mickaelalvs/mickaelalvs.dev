"use client";

import Link from "next/link";
import BaseLayout from "../layout/BaseLayout";
import { speaking as podcasts } from "@/data/speaking";
import type { Podcast } from "./types/Podcast";
import Image from "next/image";
import { generateSlug } from "@/utils/slug";
import { notFound } from "next/navigation";
import styles from "./PodcastDetailPage.module.css";
import PlatformIcon from "./PlatformIcon";

export default function PodcastDetailPage({ slug }: { slug: string }) {
  const podcast = podcasts.find(
    (p) => generateSlug(p.title) === slug && p.format === "Podcast",
  ) as Podcast | undefined;

  if (!podcast || !("platformLinks" in podcast)) {
    notFound();
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Spotify":
        return "/static/icons/spotify.svg";
      case "Apple Podcast":
        return "/static/icons/apple.svg";
      case "Deezer":
        return "/static/icons/deezer.svg";
      case "YouTube":
        return "/static/icons/youtube.svg";
      default:
        return "/static/icons/spotify.svg";
    }
  };

  return (
    <BaseLayout
      title={`${podcast.title} // Mickaël Alves`}
      tagline={podcast.title}
      primaryColor="pink"
      secondaryColor="purple"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.podcastImage}>
            <Image
              src={podcast.image}
              alt={podcast.title}
              width={800}
              height={450}
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          </div>
          {podcast.platformLinks && podcast.platformLinks.length > 0 && (
            <div className={styles.platformIcons}>
              {podcast.platformLinks.map((platform, idx) => (
                <PlatformIcon
                  key={idx}
                  platform={platform}
                  getPlatformIcon={getPlatformIcon}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <p className={styles.description}>{podcast.description}</p>
          </div>
        </div>

        <Link href="/podcasts" className={styles.backLink}>
          ← Back to podcasts
        </Link>
      </div>
    </BaseLayout>
  );
}
