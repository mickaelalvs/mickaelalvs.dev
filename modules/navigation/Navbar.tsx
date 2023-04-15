import classNames from 'classnames';
import React, {FC, HTMLAttributes} from 'react';
import styles from './Navbar.module.scss';
import {routes} from '../../config/routes';
import {NavLink} from './links/NavLink';

export const Navbar: FC<HTMLAttributes<HTMLElement>> = ({className}) => (
  <nav className={classNames(styles.navbar, className)}>
    <ul>
      {routes.map(
        (route) =>
          route.enabled && (
            <NavLink key={`route_${route.name}`} href={route.path} name={route.name}>
              {route.name}
            </NavLink>
          ),
      )}
    </ul>
  </nav>
);
