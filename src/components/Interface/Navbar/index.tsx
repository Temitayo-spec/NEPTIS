import { FC } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import neptis_logo from '../../../../public/svgs/neptis_logo.svg';
import ic_menu from '../../../../public/svgs/ic_menu.svg';
import Links from './Links';

const Navbar: FC = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.inner}>
        <div className={styles.logo_ctn}>
          <div className={styles.logo}>
            <Image
              src={neptis_logo}
              alt="neptis-logo"
            />
            <h1 className={styles.logo_text}>Neptis</h1>
          </div>
          <div className={styles.hamburger}>
            <Image src={ic_menu} alt="hamburger" width={24} height={24} />
          </div>
        </div>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
