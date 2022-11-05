import Image from "next/image";
import Link from "next/link";
import Me from '../public/images/me.png';
import Computer from '../public/images/computer.png';
import styled from '../styles/home/home.module.scss';

import {socials} from '../config/socials';

export default function Page() {
  return (
    <div className={styled.home}>
      <div className={styled.containerLayer}>
        <div className={styled.pictureLayer}/>
        <Image src={Me} alt="Me" className={styled.picture}/>
      </div>
      <div className={styled.backgroundCircleLayer}>
        {
          [...Array(6)].map((e, i) => <span key={`circle_${i}`}/>)
        }
      </div>
      <div className={styled.informationsLayer}>
        <div className={styled.details}>
          <h2>Hey, I&apos;m</h2>
          <h1>MICKAËL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum, tortor in mattis luctus, nunc
            velit iaculis dui, aliquam mattis nibh nisi vitae dui. Tortor in mattis luctus, nunc
            velit iaculis dui, aliquam mattis nibh nisi vitae dui.</p>
        </div>
        <div className={styled.links}>
          <div className={styled.card}>
            <Image src={Computer} alt="pc" width={150} />
            <div className={styled.label}>
              <span>Web Developer</span>
            </div>
          </div>
          <div className={styled.socials}>
            <h2 className='underlined'>Follow me ...</h2>
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
        </div>
      </div>
    </div>
  );
}