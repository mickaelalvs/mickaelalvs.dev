'use client';

import {Box} from '../shared/Box';
import Toast from '../shared/Toast';
import {useEffect, useRef, useState, useSyncExternalStore} from 'react';
import React from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/navigation';
import {useTheme} from '@/modules/theme/ThemeProvider';
import styles from './CommandBar.module.css';
import PagefindActions from './PagefindActions';
import Excerpt from './Excerpt';
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  useRegisterActions,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar';
import {Lottie, type LottieHandle} from 'lottie-react';
import moonIcon from '../../public/static/icons/moon.json';
import copyLinkIcon from '../../public/static/icons/copy-link.json';
import emailIcon from '../../public/static/icons/email.json';
import sourceIcon from '../../public/static/icons/source.json';
import aboutIcon from '../../public/static/icons/about.json';
import homeIcon from '../../public/static/icons/home.json';
import articlesIcon from '../../public/static/icons/articles.json';
import projectsIcon from '../../public/static/icons/projects.json';
import talksIcon from '../../public/static/icons/talks.json';
import podcastsIcon from '../../public/static/icons/podcasts.json';

interface CommandBarProps {
  children?: React.ReactNode;
}

export default function CommandBar(props: CommandBarProps) {
  const copyLinkRef = useRef<LottieHandle>(null);
  const emailRef = useRef<LottieHandle>(null);
  const sourceRef = useRef<LottieHandle>(null);
  const homeRef = useRef<LottieHandle>(null);
  const aboutRef = useRef<LottieHandle>(null);
  const articlesRef = useRef<LottieHandle>(null);
  const projectsRef = useRef<LottieHandle>(null);
  const talksRef = useRef<LottieHandle>(null);
  const podcastsRef = useRef<LottieHandle>(null);
  const router = useRouter();
  const [showToast, setShowToast] = useState<boolean>(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  const iconSize = {width: 24, height: 24};

  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <Lottie lottieRef={copyLinkRef} style={iconSize} src={copyLinkIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => (window.location.href = 'mailto:alves.mckl@gmail.com'),
      icon: <Lottie lottieRef={emailRef} style={iconSize} src={emailIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'source',
      name: 'GitHub',
      shortcut: ['s'],
      keywords: 'github',
      section: 'General',
      perform: () => window.open('https://github.com/mickaelalvs', '_blank'),
      icon: <Lottie lottieRef={sourceRef} style={iconSize} src={sourceIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Lottie lottieRef={homeRef} style={iconSize} src={homeIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Lottie lottieRef={aboutRef} style={iconSize} src={aboutIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks',
      section: 'Go To',
      perform: () => router.push('/talks'),
      icon: <Lottie lottieRef={talksRef} style={iconSize} src={talksIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <Lottie lottieRef={projectsRef} style={iconSize} src={projectsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortcut: ['g', 'c'],
      keywords: 'go-podcasts',
      section: 'Go To',
      perform: () => router.push('/podcasts'),
      icon: <Lottie lottieRef={podcastsRef} style={iconSize} src={podcastsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Lottie lottieRef={articlesRef} style={iconSize} src={articlesIcon} loop={false} autoplay={false} />,
    },
  ];

  return (
    <>
      {/* Scrollbar space is reserved globally via `scrollbar-gutter: stable` */}
      <KBarProvider actions={actions} options={{disableScrollbarManagement: true}}>
        <ThemeAction />
        <PagefindActions />
        <KBarPortal>
          <KBarPositioner className={styles.positioner}>
            <KBarAnimator className={styles.animator}>
              <KBarSearch
                defaultPlaceholder={'Try "React", "SWC", "DevEx" or run a command'}
                className={styles.search}
              />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>

        {props.children}
      </KBarProvider>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}

function ThemeAction() {
  const {theme, toggleTheme} = useTheme();
  const moonRef = useRef<LottieHandle>(null);

  useRegisterActions(
    [
      {
        id: 'theme',
        name: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        shortcut: ['t'],
        keywords: 'theme dark light mode',
        section: 'General',
        perform: () => toggleTheme(),
        icon: (
          <Lottie lottieRef={moonRef} style={{width: 24, height: 24}} src={moonIcon} loop={false} autoplay={false} />
        ),
      },
    ],
    [theme, toggleTheme],
  );

  return null;
}

const subscribeToResize = (callback: () => void) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};
const getViewportHeight = () => window.innerHeight;
const getServerViewportHeight = () => 800;

// Room kept around the list. 16px of positioner padding, 45px of search input and a 16px margin.
// The 14vh of top padding is the 0.86 below.
const NON_RESULTS_SPACE = 16 + 45 + 16;
const MIN_RESULTS_HEIGHT = 240;

function RenderResults() {
  const {results} = useDeepMatches();
  const viewportHeight = useSyncExternalStore(subscribeToResize, getViewportHeight, getServerViewportHeight);
  const maxHeight = Math.max(MIN_RESULTS_HEIGHT, Math.floor(viewportHeight * 0.86 - NON_RESULTS_SPACE));

  return (
    <KBarResults
      items={results}
      maxHeight={maxHeight}
      onRender={({item, active}) =>
        typeof item === 'string' ? (
          <div className={styles.groupName}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

interface ResultItemProps {
  action: {
    icon?: React.ReactNode;
    name: string;
    subtitle?: string;
    shortcut?: string[];
  };
  active: boolean;
}

function ResultItem({action, active}: ResultItemProps) {
  const getLottieRef = (): React.RefObject<LottieHandle | null> | undefined => {
    if (!action.icon || !React.isValidElement(action.icon)) return undefined;
    const props = action.icon.props as {lottieRef?: React.RefObject<LottieHandle | null>};
    return props.lottieRef;
  };

  const lottieRef = getLottieRef();

  useEffect(() => {
    if (active) {
      lottieRef?.current?.play();
    } else {
      lottieRef?.current?.stop();
    }
  }, [active, lottieRef]);

  return (
    <Box
      className={clsx(styles.resultItem, active && styles.resultItemActive)}
      onMouseEnter={() => lottieRef?.current?.play()}
      onMouseLeave={() => lottieRef?.current?.stop()}
    >
      <div className={styles.action}>
        {action.icon && <span className={styles.icon}>{action.icon}</span>}
        <div className={styles.actionRow}>
          <span className={styles.name}>{action.name}</span>
          {action.subtitle && <Excerpt text={action.subtitle} />}
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className={styles.shortcut} aria-hidden="true">
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut} className={styles.kbd} tabIndex={-1}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </Box>
  );
}
