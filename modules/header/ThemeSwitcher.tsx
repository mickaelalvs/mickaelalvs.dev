import styles from './ThemeSwitcher.module.scss';
import {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button>
        <BsMoonStarsFill />
      </button>
    );
  }

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className={styles.themeSwitcher} onClick={changeTheme}>
      {theme === 'dark' ? <BsMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
