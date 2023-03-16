'use client';

import Image from "next/image";
import LogoLight from "../public/images/logo.png";
import LogoDark from "../public/images/logoDark.png";
import React, {useEffect, useState} from "react";
import styled from '../styles/common/header.module.scss';
import {useTheme} from "next-themes";
import {socials} from "../config/socials";
import Link from "next/link";


export default function Header() {
  const [logo, setLogo] = useState(LogoDark);
  const {theme} = useTheme();

  useEffect(() => {
    setLogo(theme === "dark" ? LogoDark : LogoLight);
  }, [theme]);

  return (
    <header className={styled.header}>
      <nav>
        <div className={styled.logo}>
          <Image src={logo} alt="logo" height={30}/>
        </div>
        <div className={styled.socials}>
          <ul>
            {
              socials.map((social) => (
                <li key={social.name}>
                  <Link href={social.url}>
                    {social.icon}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}