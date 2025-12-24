import type { StaticImageData } from "next/image";
import type { Person } from "@/data/people";
import type { PlatformLink } from "./PlatformLink";

export interface Podcast {
  title: string;
  description: string;
  language?: string;
  image: StaticImageData;
  date: string;
  videoId?: string;
  speaker: Person[];
  platformLinks: PlatformLink[];
}
