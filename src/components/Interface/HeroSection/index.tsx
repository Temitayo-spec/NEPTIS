'use client';
import Button from '@/components/Common/Button';
import styles from './HeroSection.module.css';
import { FC } from 'react';
import Image from 'next/image';
import hero_banner from '../../../../public/images/hero_banner.png';
import { motion } from 'framer-motion';
import { heroSubtitleVariants, heroTitleVariants } from './heroVariants';

const HeroSection: FC = () => {
  return (
    <div className={styles.hero__container}>
      <motion.div
        initial="hidden"
        animate="visible"
        className={styles.hero__content}
      >
        <motion.h1 variants={heroTitleVariants} className={styles.hero__title}>
          Transform Your Images into Stunning Websites with Neptis
        </motion.h1>
        <motion.p
          variants={heroSubtitleVariants}
          className={styles.hero__subtitle}
        >
          Harness the power of AI to turn your website designs into reality
        </motion.p>
        <div className={styles.hero__btns}>
          <Button textColor="#fff" bgColor="#A522C3" linkTo="/signup" />
        </div>
      </motion.div>
      <div className={styles.hero__banner}>
        <Image src={hero_banner} alt="hero-banner" />
      </div>
    </div>
  );
};

export default HeroSection;
