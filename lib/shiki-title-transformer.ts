export function parseCodeBlockMeta(metaString: string): {title?: string} {
  const match = metaString.match(/title="([^"]*)"/);
  return match ? {title: match[1]} : {};
}
