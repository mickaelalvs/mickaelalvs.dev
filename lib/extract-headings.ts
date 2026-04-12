import GithubSlugger from 'github-slugger';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadingsFromMarkdown(content: string): HeadingItem[] {
  const items: HeadingItem[] = [];
  const slugger = new GithubSlugger();

  const regex = /^##\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const rawText = match[1].trim();
    const id = slugger.slug(rawText);
    items.push({id, text: rawText, level: 2});
  }

  return items;
}
