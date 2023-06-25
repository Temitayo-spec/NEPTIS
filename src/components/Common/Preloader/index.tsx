"use client"
import { FC, useState, useEffect } from 'react';
import styles from './Preloader.module.css';
import Image from 'next/image';
import neptis_logo from '../../../../public/svgs/neptis_logo.svg';

const Preloader: FC = () => {
  const [remove, setRemove] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setRemove(true);
    }, 3000);
  }, []);
  return (
    <div
      className={`${styles.preloader__container} ${
        remove ? styles.remove : ''
      }`}
    >
      <div className={styles.loader}>
        <Image src={neptis_logo} alt="neptis-logo" priority />
        <h1 className={styles.logo_text}>Neptis</h1>
      </div>
    </div>
  );
};

export default Preloader;
