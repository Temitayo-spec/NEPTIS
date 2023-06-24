import Link from 'next/link';
import { FC } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  bgColor: string;
  linkTo: string;
  textColor: string;
};

const Button: FC<ButtonProps> = ({ bgColor, linkTo, textColor }) => {
  return (
    <Link href={linkTo}>
      <button
        className={styles.button}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        Get Started
      </button>
    </Link>
  );
};

export default Button;
