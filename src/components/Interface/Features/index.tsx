import { FC } from 'react';
import styles from './Features.module.css';
import { featureData } from './FeatureData';
import FeaturesCard from './FeaturesCard';

const Features: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.features__title}>Amazing Features for You</h1>
        <div className={styles.grid__cards}>
          {featureData.map((item, index) => {
            return (
              <FeaturesCard
                key={index}
                card_title={item.card_title}
                card_text={item.card_text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
