'use client';

import {useState} from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';
import styles from './LanguageBadge.module.css';

const LABELS: Record<string, string> = {
  fr: 'French',
  en: 'English',
};

const DESCRIPTIONS = {
  talk: (label: string) => `This talk is written and given in ${label}`,
  podcast: (label: string) => `This podcast is in ${label}`,
};

interface LanguageBadgeProps {
  language: string;
  kind?: keyof typeof DESCRIPTIONS;
}

export default function LanguageBadge({language, kind}: LanguageBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    refs: {setReference, setFloating},
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right',
    middleware: [offset(8), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {move: false});
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: 'tooltip'});

  const {getReferenceProps, getFloatingProps} = useInteractions([hover, focus, dismiss, role]);

  const label = LABELS[language];

  if (!label) {
    return null;
  }

  const description = kind ? DESCRIPTIONS[kind](label) : label;

  return (
    <>
      <span ref={setReference} className={styles.badge} aria-label={description} {...getReferenceProps()}>
        {language}
      </span>
      {isOpen && (
        <FloatingPortal>
          <div ref={setFloating} style={floatingStyles} className={styles.tooltip} {...getFloatingProps()}>
            {description}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
