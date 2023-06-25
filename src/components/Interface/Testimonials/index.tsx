import styles from './Testimonials.module.css';
import Image from 'next/image';
import avatar from '../../../../public/images/testimonial_avatar.png';
import arrow__left from '../../../../public/svgs/ic_arrow-back.svg';
import arrow__right from '../../../../public/svgs/ic_arrow-forward.svg';
import { FC } from 'react';

const Testimonial: FC = () => {
  return (
    <div className={styles.testimonial__ctn}>
      <div className={styles.testimonial__header}>
        <h2>Testimonials</h2>
      </div>
      <div className={styles.testimonial__inner}>
        <div className={styles.testimonial__card}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem
            commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus
            purus nullam gravida. Vitae gravida dui gravida amet vitae.
            Malesuada quisque accumsan quis cursus enim. Commodo in sit platea
            eget lobortis. Suspendisse nulla leo eget fringilla justo ultrices.
            Vestibulum sed mi donec maecenas sit nisi. Etiam tincidunt ultrices
            sit sit sociis rutrum dui. Fames nunc quam ullamcorper cursus. Diam
            vitae euismod curabitur ullamcorper.
          </p>
          <div className={styles.testimonial__card__footer}>
            <div className={styles.testimonial__card__footer__img}>
              <Image src={avatar} alt="avatar" />
            </div>
            <div className={styles.testimonial__card__footer__name}>
              <h3>Nicole Jaymer</h3>
              <p>Head of Noin Group</p>
            </div>
          </div>
        </div>
        <div className={styles.navigation__btns}>
          <button className={styles.navigation__btns__prev}>
            <Image src={arrow__left} alt="arrow left" />
          </button>
          <button className={styles.navigation__btns__next}>
            <Image src={arrow__right} alt="arrow right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
