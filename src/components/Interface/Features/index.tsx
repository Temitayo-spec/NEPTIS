'use client';
import { FC } from 'react';
import styles from './Features.module.css';
import { featureData } from './FeatureData';
import FeaturesCard from './FeaturesCard';
import { motion } from 'framer-motion';
import { container, featuresTitleVariants } from './featuresVariant';

const Features: FC = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.inner}>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={featuresTitleVariants}
          className={styles.features__title}
        >
          Amazing Features for You
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.6,
          }}
          className={styles.grid__cards}
        >
          {featureData.map((item, index) => {
            return (
              <FeaturesCard
                key={index}
                card_title={item.card_title}
                card_text={item.card_text}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
