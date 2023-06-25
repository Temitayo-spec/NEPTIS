import { Features, HeroSection, HowItWorks, Navbar, Pricing, Testimonials } from '@/components';
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
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default Home;
