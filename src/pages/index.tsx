
import Layout from '../app/layout';
import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection'
import FeatureSection from './home/FeatureSection'

const AboutUsPage = () => {
  return (
    <Layout>
      <div>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
