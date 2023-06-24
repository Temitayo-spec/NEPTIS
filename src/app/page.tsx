import { Features, HeroSection, HowItWorks, Navbar } from '@/components';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.section__one}>
        <Navbar />
        <HeroSection />
      </div>
      <Features />
      <HowItWorks />
    </main>
  );
};

export default Home;
