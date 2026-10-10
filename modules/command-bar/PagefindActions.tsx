'use client';

import {createRef, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {useKBar, useRegisterActions, type Action} from 'kbar';
import {Lottie, type LottieHandle} from 'lottie-react';
import articlesIcon from '../../public/static/icons/articles.json';
import talksIcon from '../../public/static/icons/talks.json';
import podcastsIcon from '../../public/static/icons/podcasts.json';

// Pagefind is generated at build time (`postbuild` script) into `public/pagefind`.
// It is loaded lazily at runtime, so the bundler must not try to resolve it.
const PAGEFIND_URL = '/pagefind/pagefind.js';
const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 6;
const DEBOUNCE_MS = 150;

interface PagefindFragment {
  url: string;
  excerpt: string;
  meta: {title?: string};
  filters: {type?: string[]};
}

interface PagefindSearchResult {
  data: () => Promise<PagefindFragment>;
}

interface PagefindApi {
  debouncedSearch: (
    query: string,
    options?: object,
    wait?: number,
  ) => Promise<{results: PagefindSearchResult[]} | null>;
}

const SECTION_BY_TYPE: Record<string, string> = {
  article: 'Articles',
  talk: 'Talks',
  podcast: 'Podcasts',
};

const ICON_BY_TYPE: Record<string, object> = {
  article: articlesIcon,
  talk: talksIcon,
  podcast: podcastsIcon,
};

const ICON_SIZE = {width: 24, height: 24};

const NO_ACTIONS: Action[] = [];

let pagefindPromise: Promise<PagefindApi | null> | undefined;

function loadPagefind(): Promise<PagefindApi | null> {
  pagefindPromise ??= import(/* webpackIgnore: true */ /* turbopackIgnore: true */ PAGEFIND_URL).catch(() => null);
  return pagefindPromise;
}

/**
 * Registers full-text search results (talks, articles, podcasts) as kbar actions.
 * Results come from the Pagefind index and follow the current kbar search query.
 */
export default function PagefindActions() {
  const router = useRouter();
  const {searchQuery} = useKBar((state) => ({searchQuery: state.searchQuery}));
  const [results, setResults] = useState<Action[]>(NO_ACTIONS);

  const query = searchQuery.trim();
  const isSearchable = query.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    if (!isSearchable) return;

    let cancelled = false;

    (async () => {
      const pagefind = await loadPagefind();
      const search = await pagefind?.debouncedSearch(query, {}, DEBOUNCE_MS);
      if (!search || cancelled) return;

      const fragments = await Promise.all(search.results.slice(0, MAX_RESULTS).map((result) => result.data()));
      if (cancelled) return;

      setResults(
        fragments.map((fragment) => {
          const url = fragment.url.replace(/\.html$/, '');
          const type = fragment.filters.type?.[0] ?? '';
          const icon = ICON_BY_TYPE[type];
          // ResultItem reads `lottieRef` from the icon element to play the animation on hover/active.
          const lottieRef = createRef<LottieHandle>();
          return {
            id: `search:${url}`,
            name: fragment.meta.title ?? url,
            // Keeps Pagefind's <mark> tags, rendered by <Excerpt /> in ResultItem.
            subtitle: fragment.excerpt,
            // kbar filters actions with its own fuzzy matcher on name/keywords/subtitle.
            // Pagefind already matched on the page body, so we force the match with the current query.
            keywords: query,
            section: SECTION_BY_TYPE[type] ?? 'Search results',
            icon: icon ? (
              <Lottie lottieRef={lottieRef} style={ICON_SIZE} src={icon} loop={false} autoplay={false} />
            ) : undefined,
            perform: () => router.push(url),
          };
        }),
      );
    })();

    return () => {
      cancelled = true;
    };
  }, [query, isSearchable, router]);

  useRegisterActions(isSearchable ? results : NO_ACTIONS, [isSearchable, results]);

  return null;
}
