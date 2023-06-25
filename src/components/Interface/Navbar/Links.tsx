import Button from '@/components/Common/Button';
import styles from './Links.module.css';
import Link from 'next/link';
import { FC } from 'react';

type LinksProps = {
  toggle: boolean;
};

const Links: FC<LinksProps> = ({ toggle }) => {
  return (
    <ul className={`${styles.links__container} ${toggle ? styles.active : ''}`}>
      <li className={styles.link}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.link}>
        <Link href="/features">Features</Link>
      </li>
      <li className={styles.link}>
        <Link href="/how-it-works">How it works</Link>
      </li>
      <li className={styles.link}>
        <Link href="/pricing">Pricing</Link>
      </li>
      <Button bgColor="#fff" linkTo="/signup" textColor="#221c38" />
    </ul>
  );
};

export default Links;
