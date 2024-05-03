
import Layout from '../app/layout';
import HeroSection from './home/HeroSection';
import AboutSection from './home/AboutSection'

const AboutUsPage = () => {
  return (
    <Layout>
      <div>
        <HeroSection />
        <AboutSection />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
