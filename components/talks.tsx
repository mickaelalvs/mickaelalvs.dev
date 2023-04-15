import React from "react";
import Image from "next/image";
import {speaking} from "../config/speaking";
import styled from "../styles/talks/talks.module.scss";

export default function Talks() {
  return (
    <div className={styled.talks}>
      {
        speaking.map((talk) => (
          <div className={styled.talk} key={talk.title}>
            <h2>{talk.title}</h2>
            <div className={styled.details}>
              <p>{talk.description}</p>
              <Image src={talk.image} alt={talk.title} width={320} height={180}/>
            </div>
            <div className={styled.conferences}>
              <h3>Conférences</h3>
              <div className={styled.conferencesList}>
                {
                  talk.conferences.map((conference) => (
                    <a className={styled.conference} key={conference.name} href={conference.link} target="_blank" rel="noopener noreferrer">
                      <Image src={conference.image} alt={conference.name} />
                      <span>{conference.date}</span>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}