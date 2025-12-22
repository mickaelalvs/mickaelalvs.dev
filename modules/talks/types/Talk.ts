import type { StaticImageData } from "next/image";
import type { Person } from "@/data/people";
import type { Conference } from "./Conference";
import type { Format } from "./Format";

export type Talk = {
  id: string;
  title: string;
  description: string;
  language?: string;
  image: StaticImageData;
  featuredImage?: StaticImageData;
  format: Format;
  videoId?: string;
  speaker: Person[];
  conferences: Conference[];
  slidesUrl?: string;
  workshopUrl?: string;
};
