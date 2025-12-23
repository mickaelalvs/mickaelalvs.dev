export interface Project {
  title: string;
  description: string;
  url: string;
  active?: boolean;
  icon: "remotion" | "moon" | "source";
  stats?: string;
}
