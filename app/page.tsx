'use client';

import Image from "next/image";
import styled from '../styles/home/home.module.scss';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Talks from "../components/talks";

export default function Home() {
  const [scrollLogo, setScrollLogo] = useState('/images/scrollLight.svg');

  const {theme} = useTheme();

  useEffect(() => {
    setScrollLogo(theme === "dark" ? '/images/scrollDark.svg' : '/images/scrollLight.svg');
  }, [theme]);

  return (
    <>
      <div className={styled.home}>
        <div className={styled.informationsLayer}>
          <div className={styled.details}>
            <h2>Mickaël Alves</h2>
            <h1>Conférences</h1>
          </div>
          <Image className={styled.scroll} src={scrollLogo} alt="scroll" width={30} height={70}/>
        </div>
      </div>
      <Talks />
    </>
  );
}