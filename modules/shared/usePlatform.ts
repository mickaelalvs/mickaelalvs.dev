import {useSyncExternalStore} from 'react';

export type Platform = 'mobile' | 'mac' | 'other';

const subscribe = () => () => {};
const getSnapshot = () => navigator.userAgent;
const getServerSnapshot = () => null;

/**
 * Returns the user's platform, or `null` on the server and during hydration
 * (the user agent is only known in the browser).
 */
export function usePlatform(): Platform | null {
  const userAgent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (userAgent === null) return null;
  if (/iPhone|iPad|Android/i.test(userAgent)) return 'mobile';
  if (/Mac/i.test(userAgent)) return 'mac';
  return 'other';
}
