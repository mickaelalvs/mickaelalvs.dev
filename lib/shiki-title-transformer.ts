export function parseCodeBlockMeta(metaString: string): {title?: string; icon?: string; 'data-numbers'?: string} {
  const result: {title?: string; icon?: string; 'data-numbers'?: string} = {};

  const titleMatch = metaString.match(/title="([^"]*)"/);
  if (titleMatch) result.title = titleMatch[1];

  const iconMatch = metaString.match(/icon="([^"]*)"/);
  if (iconMatch) result.icon = iconMatch[1];

  if (/(?:^|\s)nonumber(?:\s|$)/.test(metaString)) result['data-numbers'] = 'false';

  return result;
}
