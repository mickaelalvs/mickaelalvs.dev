'use client';

import {FC, ReactNode} from 'react';
import Link, {LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';
import styled from '../styles/common/header.module.scss';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
  name: string;
  href: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({children, href, name}) => {
  const pathname = usePathname();

  const className = pathname === href ? styled.selected : undefined;

  return (
    <li key={`route_${name}`} className={className}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
