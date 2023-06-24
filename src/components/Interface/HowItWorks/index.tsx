import { FC } from 'react';
import { featureData } from '../Features/FeatureData';
import styles from './HowItWorks.module.css';
import Image from 'next/image';
import banner from '../../../../public/images/hero_banner.png';

const index: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>How It Works</h1>
        <div className={styles.flex}>
          <div className={styles.flex__item_left}>
            <div className={styles.line} />
            {featureData.slice(0, 3).map((item, index) => {
              return (
                <div className={styles.items} key={index}>
                  <div className={styles.dot} />
                  <div className={styles.texts__ctn}>
                    <h2>{item.card_title}</h2>
                    <p>{item.card_text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.flex__item_right}>
            <Image src={banner} alt="banner" />
          </div>
      </div>
    </div>
  );
};

export default index;
