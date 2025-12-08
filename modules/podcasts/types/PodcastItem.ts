export interface Platform {
  name: string;
  url: string;
}

export interface PodcastItem {
  title: string;
  lang?: string;
  date?: string;
  description?: string;
  platforms?: Platform[];
}
