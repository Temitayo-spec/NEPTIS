import Button from '@/components/Common/Button';
import styles from './Links.module.css';
import Link from 'next/link';

const Links = () => {
  return (
    <ul className={styles.links__container}>
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
      <Button bgColor="#fff" linkTo="/login" textColor="#221c38" />
    </ul>
  );
};

export default Links;
