import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FC } from 'react';
import neptis_logo from '../../../../public/svgs/neptis_logo.svg';
import ic_facebook from '../../../../public/svgs/ic_facebook.svg';
import ic_twitter from '../../../../public/svgs/ic_twitter.svg';
import ic_linkedin from '../../../../public/svgs/ic_linkedin.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Image src={neptis_logo} alt="logo" width={100} height={100} />
          <h1>Neptis</h1>
        </div>
        <div className={styles.footer__links}>
          <ul className={styles.footer__link__wrapper}>
            <li className={styles.footer__link__items}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.footer__link__items}>
              <Link href="/features">Features</Link>
            </li>
            <li className={styles.footer__link__items}>
              <Link href="/how-it-works">How it works</Link>
            </li>
            <li className={styles.footer__link__items}>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__social}>
          <Image src={ic_twitter} alt="twitter" width={20} height={20} />
          <Image src={ic_linkedin} alt="linkedin" width={20} height={20} />
          <Image src={ic_facebook} alt="facebook" width={20} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
