import Container from '@/components/container/Container';
import HeroSection from './heroSection/HeroSection';
import WinterClothesPostSection from './winterClothesPostSection/WinterClothesPostSection';
import TestimonialSection from './testimonialSection/TestimonialSection';
import AboutUsSection from './aboutUs/AboutUsSection';
import GallerySection from './gallerySection/GallerySection';
import ColdWeatherTipsSection from './coldWeatherTipsSection/ColdWeatherTipsSection';
import VolunteerOpportunitiesSection from './volunteerOpportunitiesSection/VolunteerOpportunitiesSection';


const Home = () => {
  return (
    <Container className="">
      <HeroSection />
      <WinterClothesPostSection />
      <TestimonialSection />
      <GallerySection />
      <AboutUsSection />
      <ColdWeatherTipsSection />
      <VolunteerOpportunitiesSection />
    </Container>
  );
};

export default Home;
