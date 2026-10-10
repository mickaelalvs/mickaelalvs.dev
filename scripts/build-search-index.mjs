/**
 * Builds the Pagefind index from the HTML that `next build` prerenders.
 *
 * `pagefind --site .next/server/app` is not enough on Vercel. Vercel always builds with an adapter,
 * and since Next 16.3.8 an adapter build writes HTML to
 * `.next/server/route-cache/<kind>/<hash>/$/<path>.html` instead of `.next/server/app/<path>.html`.
 * The CLI then finds 0 files and the deploy fails. Local builds have no adapter, so they never show it.
 *
 * Each file is added under its path relative to `app/` or to `$/`, so result URLs are the same in both layouts.
 */
import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join, relative} from 'node:path';
import * as pagefind from 'pagefind';

const SERVER_DIR = '.next/server';
// With an adapter, Vercel copies `public/` here during `next build`, before this script runs.
const ADAPTER_STATIC_DIR = '.next/output/static';

function findHtmlRoots() {
  const roots = [join(SERVER_DIR, 'app')];
  const routeCache = join(SERVER_DIR, 'route-cache');

  if (existsSync(routeCache)) {
    for (const kind of readdirSync(routeCache)) {
      for (const hash of readdirSync(join(routeCache, kind))) {
        roots.push(join(routeCache, kind, hash, '$'));
      }
    }
  }

  return roots.filter((root) => existsSync(root));
}

function* walkHtmlFiles(dir) {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkHtmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

async function main() {
  const {index, errors} = await pagefind.createIndex();
  if (!index) throw new Error(`Could not create the Pagefind index: ${errors.join(', ')}`);

  const seen = new Set();

  for (const root of findHtmlRoots()) {
    for (const file of walkHtmlFiles(root)) {
      const sourcePath = relative(root, file);
      if (seen.has(sourcePath)) continue;
      seen.add(sourcePath);

      const {errors: addErrors} = await index.addHTMLFile({sourcePath, content: readFileSync(file, 'utf8')});
      if (addErrors.length > 0) throw new Error(`Could not index ${file}: ${addErrors.join(', ')}`);
    }
  }

  if (seen.size === 0) throw new Error(`No prerendered HTML found under ${SERVER_DIR}`);

  const outputs = ['public/pagefind'];
  if (existsSync(ADAPTER_STATIC_DIR)) outputs.push(join(ADAPTER_STATIC_DIR, 'pagefind'));

  for (const outputPath of outputs) {
    const {errors: writeErrors} = await index.writeFiles({outputPath});
    if (writeErrors.length > 0) throw new Error(`Could not write ${outputPath}: ${writeErrors.join(', ')}`);
  }

  await pagefind.close();
  console.log(`Pagefind: indexed ${seen.size} HTML files into ${outputs.join(', ')}`);
}

// A missing search index must not block a deploy. The command bar still works without it.
main().catch((error) => {
  console.error(`Pagefind: search index not built. ${error.message}`);
});
