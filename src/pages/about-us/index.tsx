// pages/about-us/index.tsx
import Layout from '../../../src/app/layout';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import styles from './about-us.module.css';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles.aboutUsContainer}>
        <AboutHeader />
        <AboutContent />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
