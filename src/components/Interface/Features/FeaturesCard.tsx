import { FC } from 'react';
import styles from './Features.module.css';

type FeaturesCardProps = {
  card_title: string;
  card_text: string;
};

const FeaturesCard: FC<FeaturesCardProps> = ({ card_title, card_text }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__inner}>
        <h2>{card_title}</h2>
        <p>{card_text}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
