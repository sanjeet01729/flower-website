import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedFlowers } from './components/FeaturedFlowers';
import { AboutUs } from './components/AboutUs';
import { ImageGallery } from './components/ImageGallery';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedFlowers />
        <AboutUs />
        <ImageGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
