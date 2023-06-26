'use client';
import Button from '@/components/Common/Button';
import styles from './Pricing.module.css';
import { pricingData } from './PricingData';
import ic_checkmark from '../../../../public/svgs/ic_checkmark.svg';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, container, titleVariant } from './pricingVariants';

const index: FC = () => {
  return (
    <div className={styles.pricing__container}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className={styles.pricing__header}
      >
        <motion.h1 variants={titleVariant}>Pricing and Plans</motion.h1>
        <motion.p variants={titleVariant}>
          Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
          commodo turpis ipsum.
        </motion.p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className={styles.pricing__cards__ctn}
      >
        {pricingData.map((item, index) => {
          return (
            <motion.div
              variants={cardVariants}
              className={styles.pricing__card}
              key={index}
              style={{
                backgroundColor: item.cardColor,
              }}
            >
              <h2 className={styles.plan__name}>{item.title}</h2>
              <h1 className={styles.plan__price}>${item.price}</h1>
              <Button
                bgColor={item.btnColor}
                textColor="#fff"
                linkTo="/signup"
                width="100%"
              />
              <ul className={styles.plan__features}>
                {item.offers.map((feature, index) => {
                  return (
                    <li key={index}>
                      <Image src={ic_checkmark} alt="checkmark" />
                      <span>{feature.text}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default index;
