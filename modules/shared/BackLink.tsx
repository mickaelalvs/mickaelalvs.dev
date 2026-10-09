'use client';

import {useRef} from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import styles from './BackLink.module.css';

interface BackLinkProps {
  href: string;
  label: string;
  icon: object;
}

export default function BackLink({href, label, icon}: BackLinkProps) {
  const lottieRef = useRef<any>(null);

  return (
    <div className={styles.wrapper}>
      <Link
        href={href}
        className={styles.link}
        transitionTypes={['nav-back']}
        onMouseEnter={() => lottieRef.current?.play()}
        onMouseLeave={() => lottieRef.current?.stop()}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={icon}
          loop={false}
          autoplay={false}
          style={{width: 24, height: 24}}
        />
        {label}
      </Link>
    </div>
  );
}
