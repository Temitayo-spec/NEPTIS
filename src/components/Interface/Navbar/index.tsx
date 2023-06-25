'use client';
import { FC, useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import neptis_logo from '../../../../public/svgs/neptis_logo.svg';
import ic_menu from '../../../../public/svgs/ic_menu.svg';
import Links from './Links';

const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className={styles.nav_container}>
      <div className={styles.inner}>
        <div className={styles.logo_ctn}>
          <div className={styles.logo}>
            <Image src={neptis_logo} alt="neptis-logo" />
            <h1 className={styles.logo_text}>Neptis</h1>
          </div>
          <div className={styles.hamburger} onClick={() => setToggle(!toggle)}>
            <Image src={ic_menu} alt="hamburger" width={24} height={24} />
          </div>
        </div>
        <Links toggle={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;
