import styles from './HeroHome.module.scss';
import profilePicture from '../../public/images/mickael-alves.jpg';
import Image from 'next/image';

export const Hero = () => (
  <section className={styles.heroHome}>
    <div className={styles.intro}>
      <h1>
        Hey there, I’m
        <span>Mickaël Alves.</span>
      </h1>
      <p>
        I&apos;m truly passionate about web development ! As a full-stack developer and a French speaker, I have a deep
        appreciation for contributing to open-source projects, and I&apos;m constantly seeking new challenges to tackle.
      </p>
    </div>
    <div className={styles.profilePicture}>
      <Image src={profilePicture} alt="Mickaël Alves" />
    </div>
  </section>
);
