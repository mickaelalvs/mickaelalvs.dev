'use client';

import {createRef, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {useKBar, useRegisterActions, type Action} from 'kbar';
import {Lottie, type LottieHandle} from 'lottie-react';
import articlesIcon from '../../public/static/icons/articles.json';
import talksIcon from '../../public/static/icons/talks.json';
import podcastsIcon from '../../public/static/icons/podcasts.json';

// The `postbuild` script writes the Pagefind index to `public/pagefind`.
// The browser loads it on the first query, so the bundler must leave this import alone.
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
          // ResultItem finds this ref in the icon's props to play the animation.
          const lottieRef = createRef<LottieHandle>();
          return {
            id: `search:${url}`,
            name: fragment.meta.title ?? url,
            subtitle: fragment.excerpt,
            // kbar filters actions with its own fuzzy matcher on name/keywords/subtitle.
            // Pagefind matched on the page body, which kbar never sees, so keywords carries the query to keep the row.
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
