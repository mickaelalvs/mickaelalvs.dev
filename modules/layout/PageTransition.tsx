import {ViewTransition} from 'react';
import type {ReactNode} from 'react';

const backOnly = {
  'nav-back': 'nav-back',
  default: 'none',
};

// Only links with `transitionTypes={['nav-back']}` animate. Every other navigation is instant.
export default function PageTransition({children}: {children: ReactNode}) {
  return (
    <ViewTransition enter={backOnly} exit={backOnly} default="none">
      {children}
    </ViewTransition>
  );
}
