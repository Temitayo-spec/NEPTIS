import Button from '@/components/Common/Button';
import styles from './HeroSection.module.css';
import { FC } from 'react';
import Image from 'next/image';
import hero_banner from '../../../../public/images/hero_banner.png';

const HeroSection: FC = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Transform Your Images into Stunning Websites with Neptis
        </h1>
        <p className={styles.hero__subtitle}>
          Harness the power of AI to turn your website designs into reality
        </p>
        <div className={styles.hero__btns}>
          <Button textColor="#fff" bgColor="#A522C3" linkTo="/signup" />
        </div>
      </div>
      <div className={styles.hero__banner}>
        <Image src={hero_banner} alt="hero-banner" />
      </div>
    </div>
  );
};

export default HeroSection;
