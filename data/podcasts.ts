import { HypeDrivenDevelopment } from "./podcasts/hype-driven-development";
import { CommunautesIt } from "./podcasts/communautes-it";
import { EtreJuniorDansLaTech } from "./podcasts/etre-junior-dans-la-tech";

export type { Podcast } from "@/modules/podcasts/types/Podcast";
export type { PlatformLink } from "@/modules/podcasts/types/PlatformLink";

import type { Podcast } from "@/modules/podcasts/types/Podcast";

export const podcasts: Podcast[] = [
  HypeDrivenDevelopment,
  CommunautesIt,
  EtreJuniorDansLaTech,
];
