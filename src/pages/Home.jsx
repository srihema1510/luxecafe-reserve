import React from 'react';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import CoffeeShowcase from '../components/CoffeeShowcase';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CoffeeShowcase />
      <Testimonials />
    </>
  );
};

export default Home;
