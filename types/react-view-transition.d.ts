// Next.js bundles a React build that exports `<ViewTransition>`, but `@types/react` doesn't type it yet.
// Delete this file once it does.
import 'react';

declare module 'react' {
  type ViewTransitionClass = 'auto' | 'none' | (string & {}) | {[transitionType: string]: string};

  interface ViewTransitionProps {
    children?: ReactNode;
    name?: string;
    default?: ViewTransitionClass;
    enter?: ViewTransitionClass;
    exit?: ViewTransitionClass;
    update?: ViewTransitionClass;
    share?: ViewTransitionClass;
  }

  export const ViewTransition: ExoticComponent<ViewTransitionProps>;
}
