'use client';
import { FC } from 'react';
import { featureData } from '../Features/FeatureData';
import styles from './HowItWorks.module.css';
import Image from 'next/image';
import banner from '../../../../public/images/hero_banner.png';
import { motion } from 'framer-motion';
import { container, titleVariant, detailsVariants } from './howVariants';

const index: FC = () => {
  return (
    <div className={styles.container}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={titleVariant}
        className={styles.title}
      >
        How It Works
      </motion.h1>
      <div className={styles.flex}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.6}}
          className={styles.flex__item_left}
        >
          <div className={styles.line} />
          {featureData.slice(0, 3).map((item, index) => {
            return (
              <motion.div
                variants={detailsVariants}
                className={styles.items}
                key={index}
              >
                <div className={styles.dot} />
                <div className={styles.texts__ctn}>
                  <h2>{item.card_title}</h2>
                  <p>{item.card_text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className={styles.flex__item_right}>
          <Image src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default index;
