'use client';

import {useRef} from 'react';
import Link from 'next/link';
import {motion} from 'motion/react';
import {Lottie, type LottieHandle} from 'lottie-react';
import clsx from 'clsx';
import styles from './Navbar.module.css';

interface MobileNavItemProps {
  page: string;
  path: string;
  index: number;
  isActive: boolean;
  iconData?: any;
  iconSize: {width: number; height: number};
  onClick: () => void;
}

export default function MobileNavItem({page, path, index, isActive, iconData, iconSize, onClick}: MobileNavItemProps) {
  const iconRef = useRef<LottieHandle>(null);

  return (
    <motion.li
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: index * 0.05 + 0.1, duration: 0.3}}
      className={styles.mobileListItem}
    >
      <Link
        href={path}
        className={clsx(styles.mobileNavLink, isActive && styles.mobileActive)}
        onClick={onClick}
        onMouseEnter={() => iconRef.current?.play()}
        onMouseLeave={() => iconRef.current?.stop()}
      >
        {iconData && (
          <span className={styles.mobileNavIcon}>
            <Lottie lottieRef={iconRef} src={iconData} loop={false} autoplay={false} style={iconSize} />
          </span>
        )}
        <span>{page}</span>
      </Link>
    </motion.li>
  );
}
