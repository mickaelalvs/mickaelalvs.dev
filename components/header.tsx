'use client';

import Image from "next/image";
import Logo from "../public/images/logo.png";
import React from "react";
import styled from '../styles/common/header.module.scss';
import {routes} from "../config/routes";
import ThemeSwitcher from "./themeSwitcher";
import {ActiveLink} from "./activeLink";


export default function Header() {
  return (
    <header className={styled.header}>
      <nav>
        <Image src={Logo} alt="logo" height={30}/>
        <ul>
          {
            routes.map((route) => (
              route.enabled &&
              <ActiveLink key={`route_${route.name}`} href={route.path} name={route.name} >
                {route.name}
              </ActiveLink>
            ))
          }
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}