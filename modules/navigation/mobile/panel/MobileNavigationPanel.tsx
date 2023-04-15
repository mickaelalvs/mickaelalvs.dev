import styles from './MobileNavigationPanel.module.scss';
import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames';
import {IconLink} from '../../links/IconLink';
import {Navbar} from '../../Navbar';
import ThemeSwitcher from '../../../header/ThemeSwitcher';

type Props = HTMLAttributes<HTMLElement> & {expanded: boolean};

export const MobileNavigationPanel: FC<Props> = ({expanded, className, ...props}) => (
  <div className={classNames(styles.mobilePanel, {[styles.expanded]: expanded}, className)} {...props}>
    <Navbar />
    <div className={styles.footerPanel}>
      <IconLink />
      <ThemeSwitcher />
    </div>
  </div>
);
