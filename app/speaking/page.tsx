import React from 'react';
import styled from '../../styles/home/home.module.scss';
import Talks from '../../components/talks';

export default function Speaking() {
  return (
    <>
      <div className={styled.home}>
        <div className={styled.hero}>
          <h2>Conferences</h2>
          <h1>Mickaël Alves</h1>
        </div>
        <Talks />
      </div>
    </>
  );
}
