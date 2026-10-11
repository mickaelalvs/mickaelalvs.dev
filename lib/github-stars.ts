import type {Project} from '@/modules/projects/types/Project';

const REVALIDATE_SECONDS = 60 * 60 * 6;

/**
 * Fetches star counts at build time and revalidates them every 6 hours, so visitors never
 * hit the GitHub API (60 requests per hour per IP when unauthenticated).
 * Returns counts keyed by project URL. Projects whose request fails are left out.
 */
export async function getGithubStars(projects: Project[]): Promise<Record<string, number>> {
  const headers: HeadersInit = {Accept: 'application/vnd.github+json'};
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const entries = await Promise.all(
    projects
      .filter((project) => project.stars)
      .map(async (project): Promise<[string, number] | null> => {
        const repo = project.url.match(/github\.com\/([^/]+\/[^/]+)/)?.[1];
        if (!repo) return null;
        try {
          const res = await fetch(`https://api.github.com/repos/${repo}`, {
            headers,
            next: {revalidate: REVALIDATE_SECONDS},
          });
          if (!res.ok) return null;
          const data = (await res.json()) as {stargazers_count?: number};
          return typeof data.stargazers_count === 'number' ? [project.url, data.stargazers_count] : null;
        } catch {
          return null;
        }
      }),
  );

  return Object.fromEntries(entries.filter((entry): entry is [string, number] => entry !== null));
}
